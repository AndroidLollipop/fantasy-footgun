import * as React from 'react'
import * as ReactDOM from 'react-dom'

import socketIOClient from "socket.io-client";

import * as Material from "@material-ui/core"
import * as Icons from "@material-ui/icons"
import SearchBar from "material-ui-search-bar"

import sir5logo from "./resources/5sirlogo.jpg"

import CalendarTodayIcon from "@material-ui/icons/CalendarToday"
import ListIcon from "@material-ui/icons/List"

const SCHEMA = "0.2.3a"
const VERSION_NUMBER = "fantasy-footgun 0.2.3a"
console.log(VERSION_NUMBER)

const ranker = require("./searchRanker.js")
const formStore = require("./formModel.js")

var serverURL = "https://sheltered-atoll-88652.herokuapp.com/"

var setTabs
var additionalTabs = []
const RESERVED_TABS = 1
var tabID = RESERVED_TABS
const addTab = (tab) => {
  additionalTabs = [...additionalTabs]
  additionalTabs.push(tab)
  setTabs(additionalTabs)
}
const removeTab = (id) => {
  additionalTabs = [...additionalTabs].filter(x => x.params[0] !== id)
  detailPersistentStore[id] = undefined
  setTabs(additionalTabs)
}

var socket

const ScrollWrapper = ({childContext, mykey, children}) => {
  const currKey = React.useRef(mykey)
  if (currKey.current !== mykey && currKey.current !== null) {
    childContext.current[currKey.current] = window.scrollY
    currKey.current = null
  }
  React.useLayoutEffect(() => {
    currKey.current = mykey
    if (childContext.current[mykey] === undefined) {
      childContext.current[mykey] = 0
    }
    window.scrollTo(window.scrollX, childContext.current[mykey])
  }, [mykey, currKey])
  return children
}

const App = () => {
  
  var [tabs, mySetTabs] = React.useState([])
  setTabs = mySetTabs
  React.useEffect(() => {
    socket = socketIOClient(serverURL, {secure: true});
    socket.on("sendIndents", (indents) => {
      dataStore = {...indents}
      notifyNewData()
    })
    socket.on("sendNotifications", (notifications) => {
      notificationsStore = [...notifications]
      notifyNewN()
    })
    socket.on("commit", (writeToken, authToken) => {
      if (writeToken !== undefined) {
        if (writeToken < ackWriteToken) {
          return
        }
        ackWriteToken = writeToken
        if (pendingWrites[writeToken] !== undefined) {
          pendingWrites[writeToken]([true, authToken])
        }
      }
    })
    socket.on("fail", (msg, writeToken) => {
      alert(msg)
      if (writeToken !== undefined) {
        if (writeToken < ackWriteToken) {
          return
        }
        ackWriteToken = writeToken
        if (pendingWrites[writeToken] !== undefined) {
          pendingWrites[writeToken]([false, null])
        }
      }
    })
    socket.on("sendEraseEpoch", (eraseEpoch) => {
      const myEpoch = rls("eraseEpoch")
      wls("eraseEpoch", JSON.stringify(eraseEpoch))
      if (myEpoch !== null && JSON.parse(myEpoch) !== eraseEpoch) {
        dls("locked")
        dls("token")
        notifyNewForm()
      }
    })
    socket.emit("requestIndents", "")
    socket.emit("requestNotifications", "")
    socket.emit("requestEraseEpoch")
    return () => {
      socket.disconnect()
    }
  }, [])
  const [selTab, setSelTab] = React.useState(0)
  const appbarRef = React.useRef(null)
  const heightListeners = React.useRef([])
  const currentHeight = React.useRef(0)

  React.useEffect(() => {
    if (appbarRef.current) {
      currentHeight.current = appbarRef.current.offsetHeight
      for (const listener of heightListeners.current) {
        listener(appbarRef.current.offsetHeight)
      }
    }
  }, [appbarRef, appbarRef?.current?.offsetHeight])

  const militaryPersistentStore = React.useRef({})
  const childScrollContext = React.useRef({})

  return (
    <div>
      <Tabs childWrapper={ScrollWrapper} childContext={childScrollContext} selTab={selTab} setSelTab={setSelTab} appbarRef={appbarRef}>
        {[(<div label="my team" key="defaultTab0" mykey="defaultTab0">
          <TeamView id={0}/>
        </div>),
        (<div label="leaderboard" key="defaultTab1" mykey="defaultTab1">
          <Leaderboard setSelTab={setSelTab} heightProvider={[currentHeight, heightListeners]} transportPersistentStore={militaryPersistentStore.current} />
        </div>),
        (<div label="station winners" key="defaultTab2" myKey="defaultTab2">
          <NotificationsPanel/>
        </div>), ...tabs.map(({type, params: v}, i) => (<div></div>))]}
      </Tabs>
    </div>
  );
}

const renderName = (form, item) => {
  const field = form.fields.find(x => x.name === item.name)
  const blobName = form.blobs[field?.blobName]?.find?.(x => x.name === item.winner)?.fullName
  return typeof blobName === "string" ? blobName : item.winner
}

const NotificationsPanel = () => {
  var myData = readNotifications()
  const [data, setData] = React.useState(myData)
  React.useEffect(() => {
    const callbackID = registerNotify(setData)
    return () => deregisterNotify(callbackID)
  }, [])
  const form = readForm()
  return (
    <div>
      <div style={{height: "12px"}}/>
      <Material.Paper square>
        <ListFactory data={data} generator={item => <Material.TableRow><Material.TableCell align="center">{item.category}</Material.TableCell><Material.TableCell align="center">{renderName(form, item)}</Material.TableCell></Material.TableRow>} style={TransportViewStyle}/>
      </Material.Paper>
    </div>
  )
}

const detailPersistentStore = {}

const readDataStore = (internalUID) => {
  const result = dataStore.filter(x => x.internalUID === internalUID)
  if (result.length === 0) {
    return undefined
  }
  else {
    return result[0]
  }
}

var ackWriteToken = 0
var currWriteToken = 0
var pendingWrites = []

var reqInProgress = false

const appendSubmission = async (write, authToken) => {
  if (reqInProgress) {
    return [false, null]
  }
  reqInProgress = true
  currWriteToken++
  var resolve
  const myPromise = new Promise(v => resolve=v)
  pendingWrites[currWriteToken] = resolve
  socket.emit("appendSubmission", write, currWriteToken, authToken)
  const ret = await myPromise
  reqInProgress = false
  return ret
}

const readRange = () => {
  return dataStore
}

const readForm = () => {
  return formStore
}

const readSubmitted = () => {
  return rls("locked")
}

const teamValidator = data => {
  for (const field in data) {
    const val = data[field]
    if (!val || typeof val === "string" && val.length === 0) {
      return ["FAILED", "Please fill in all fields"]
    }
  }
  return ["SUCCESS"]
}

const rls = (key) => {
  if (window.localStorage.getItem(`ALFG:schema:${key}`) !== SCHEMA) {
    window.localStorage.removeItem(`ALFG:data:${key}`)
  }
  return window.localStorage.getItem(`ALFG:data:${key}`)
}

const wls = (key, item) => {
  window.localStorage.setItem(`ALFG:schema:${key}`, SCHEMA)
  window.localStorage.setItem(`ALFG:data:${key}`, item)
}

const dls = (key, item) => {
  window.localStorage.removeItem(`ALFG:data:${key}`)
}

const TeamDisplay = ({blobs, data, fields, setTd}) => {
  return data === undefined ? <div/> : <div>
    <div>
      {fields.map((field, index) => {
        return field.fieldType === "selectBlob" ? (
          <div style={formItemStyle} key={index}>
            <Material.Typography>{`${field.columnName}: ${blobs[field.blobName].find(x => x.name === data?.[field.name])?.friendlyName}`}</Material.Typography>
            <div style={{flexBasis: "100%", height: "12px"}}/>
            <img src={blobs[field.blobName].find(x => x.name === data?.[field.name])?.photo} height={125}/>
          </div>
        ) : (
          <div style={formItemStyle} key={index}>
            <Material.Typography>{`Name: ${data?.[field.name]}`}</Material.Typography>
          </div>
        )
      })}
      <div style={{height: "12px"}}/>  
      <Material.Button variant="outlined" onClick={() => setTd(false)}>edit team</Material.Button>
      <div style={{height:"48px"}}/>
    </div>
  </div>
}

const FormFactory = ({blobs, prefill, fields, formPersistentStore, validator}) => {
  var fieldStates = []
  var myPersistentStore = formPersistentStore === undefined ? {} : formPersistentStore
  if (myPersistentStore.data === undefined) {
    myPersistentStore.data = fields.map(x => {
      if (typeof prefill === "object") {
        const prefilledField = prefill[x.name]
        if (prefilledField !== undefined) {
          const prefillConverter = prefillConverters[x.name]
          if (typeof prefillConverter === "function") {
            return prefillConverter(prefilledField)
          }
          return prefilledField
        }
      }
      return x.initialData
    })
  }
  const [states, setStates] = React.useState(myPersistentStore.data)
  var myStates = states
  for (var index = 0; index < fields.length; index++) {
    const i = index
    const field = fields[i]
    fieldStates.push([states[i], x => {
      myStates = [...myStates]
      myStates[i] = x
      myPersistentStore.data = myStates
      setStates(myStates)
    },field.initialData, field.name, field.friendlyName, field.fieldType, field.options, field.blobName])
  }
  const submit = async (authenticated) => {
    var constitutedObject = {}
    for (const [text, setText, initialData, fieldName, friendlyName, fieldType] of fieldStates) {
      const normalizer = normalizers[fieldType]
      constitutedObject[fieldName] = normalizer ? normalizer(text) : text
    }
    const res = validator(constitutedObject)
    if (res[0] !== "SUCCESS") {
      alert(res[1])
      return
    }
    const [success, authToken] = await appendSubmission(constitutedObject, JSON.parse(rls("token")))
    if (success) {
      const fStr = JSON.stringify(constitutedObject)
      const aStr = JSON.stringify(authToken)
      wls("locked", fStr)
      wls("token", aStr)
      notifyNewForm(fStr)
    }
  }
  return (
  <div>
  <div>
  {fieldStates.map(([text, setText, initialData, fieldName, friendlyName, fieldType, options, blobName], index) => {
    return (
      <div style={formItemStyle} key={index}>
      {fieldType === "datetime" ?
      (<Material.TextField
        id="datetime-local"
        fullWidth={true}
        label={friendlyName}
        type="datetime-local"
        variant="outlined"
        value={text}
        onChange={(event) => setText(event.target.value)}
        InputLabelProps={{
          shrink: true,
        }}
        style={{maxWidth: "1000px"}}
      />)
      :fieldType === "select" ? 
      (<Material.TextField 
      fullWidth={true}
      select
      label={friendlyName}
      variant="outlined"
      value={text}
      SelectProps={{
        native: true
      }}
      onChange={(event) => setText(event.target.value)}
      InputLabelProps={{
        shrink: true,
      }}
      style={{maxWidth: "1000px"}}
      >
      {options.map((val, index) => (<option key={index} value={val}>{val}</option>))}
      </Material.TextField>)
      :fieldType === "selectBlob" ? 
      (text === null ? 
        (<div style={radioItemStyle}><div style={{marginRight: "auto"}}><Material.FormControl>
          <Material.FormLabel id={fieldName}>
            {friendlyName}
          </Material.FormLabel>
          <Material.RadioGroup onChange={(event) => setText(event.target.value)}>
            {blobs[blobName].map((val, index) => (<Material.FormControlLabel value={val.name} control={<Material.Radio/>} label={val.friendlyName}/>))}
          </Material.RadioGroup>
        </Material.FormControl></div></div>) :
        (<React.Fragment>
          <Material.TextField 
          fullWidth={true}
          select
          label={friendlyName}
          variant="outlined"
          value={text}
          SelectProps={{
            native: true
          }}
          onChange={(event) => setText(event.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          style={{maxWidth: "1000px"}}
          >
          {blobs[blobName].map((val, index) => (<option key={index} value={val.name}>{val.friendlyName}</option>))}
          </Material.TextField>
          <div style={{flexBasis: "100%", height: "12px"}}/>{<img src={blobs[blobName].find(x => x.name === text)?.photo} height={125}/>}
        </React.Fragment>)
      )
      :fieldType === "multi" ?
      (<Material.TextField
      fullWidth={true}
      multiline
      label={friendlyName}
      variant="outlined"
      value={text[0] ?? ""}
      onChange={(event) => setText([event.target.value])}
      InputLabelProps={{
        shrink: true
      }}
      style={{maxWidth: "1000px"}}/>)
      :(<Material.TextField fullWidth={true} multiline label={friendlyName} variant="outlined" value={text} onChange={(event) => setText(event.target.value)} InputLabelProps={{shrink: true,}} style={{maxWidth: "1000px"}}/>)
      }
      </div>
    )
  })}
  </div>
  <div style={{height:"12px"}}/>
  <Material.Button variant="outlined" onClick={submit}>lock in team</Material.Button>
  <div style={{height:"48px"}}/>
  </div>
  )
}

const normalizers = {
  "datetime": x => {
    try {
      if (x.length > 0) {
        return x.slice(8, 10) + "/" + x.slice(5, 7) + "/" + x.slice(0, 4) + " " + x.slice(11, 16)
      }
    }
    catch {
    }
    return x
  }
}

const formItemStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  paddingLeft: "12px",
  paddingRight: "12px",
  paddingTop: "5px",
  paddingBottom: "7px"
}

const radioItemStyle = {
  width: "100%",
  maxWidth: "1000px",
  display: "flex"
}

const TeamView = ({id, cloneID}) => {
  React.useEffect(() => {
    const callbackID = registerForm(value => {
      setRl(value)
      setTd(value !== null)
    })
    return () => deregisterForm(callbackID)
  }, [])
  const idRef = React.useRef(id)
  idRef.current = id
  React.useEffect(() => {
    if (detailPersistentStore[id].prevCallbackId !== null) {
      deregisterForm(detailPersistentStore[id].prevCallbackId)
      detailPersistentStore[id].prevCallbackId = null
    }
    return () => {}
  }, [id])
  React.useEffect(() => {
    return () => {
      detailPersistentStore[idRef.current].prevCallbackId = registerForm(value => {
        detailPersistentStore[idRef.current].td = value !== null
      })
    }
  }, [])
  const form = readForm()
  const [rl, setRl] = React.useState(readSubmitted())
  const prefill = React.useMemo(() => {
    return rl ? JSON.parse(rl) : undefined
  }, [rl])
  if (detailPersistentStore[id] === undefined) {
    detailPersistentStore[id] = {td: !!rl, prevCallbackId: null}
  }
  if (!rl) {
    detailPersistentStore[id].td = false
  }
  const [td, rawSetTd] = React.useState(detailPersistentStore[id].td)
  const setTd = val => {
    detailPersistentStore[id].td = val
    rawSetTd(val)
  }
  return (<div style={TransportViewStyle}><div style={{height: "12px"}}/>{td ? <TeamDisplay blobs={form.blobs} data={prefill} fields={form.fields} setTd={setTd}/> : <FormFactory blobs={form.blobs} prefill={prefill} fields={form.fields} defaults={dataDefaults} formPersistentStore={detailPersistentStore[id]} validator={teamValidator}/>}</div>)
}

const DEBOUNCE_PERIOD = 100

const initialUpState = (index) => {
  if (typeof index === "number" && index > 0) {
    return false
  }
  return true
}

const Leaderboard = ({setSelTab, heightProvider, transportPersistentStore}) => {
  if (transportPersistentStore.initialized !== true) {
    transportPersistentStore.initialized = true
    transportPersistentStore.data = ""
    transportPersistentStore.sort = null
    transportPersistentStore.up = true
  }
  const rawRange = readRange()
  const range = rawRange.rows
  React.useEffect(() => {
    const callbackID = registerCallback(rawValue => {
      const value = rawValue.rows
      myData.current = value
      myRanker.current = ranker.makeRanker(value)
      setData(myQuery.current !== "" ? myRanker.current(myQuery.current) : value)
    })
    return () => deregisterCallback(callbackID)
  }, [])
  const [search, setSearch] = React.useState(transportPersistentStore.data)
  const last = React.useRef(null)
  const myData = React.useRef(range)
  const vRanker = ranker.makeRanker(range)
  const myRanker = React.useRef(vRanker)
  const myQuery = React.useRef(transportPersistentStore.data)
  const [data, setData] = React.useState(transportPersistentStore.data !== "" ? vRanker(transportPersistentStore.data) : range)
  const columns = rawRange.columns
  const onChange = value => {
    transportPersistentStore.data = value
    setSearch(value)
    transportPersistentStore.sort = null
    setSort(null)
    transportPersistentStore.up = true
    setUp(true)
    if (last.current !== null) {
      clearTimeout(last.current)
      last.current = null
    }
    last.current = setTimeout(() => {
      myQuery.current = value
      setData(value !== "" ? myRanker.current(value) : myData.current)
      last.current = null
    }, DEBOUNCE_PERIOD)
  }
  const barRef = React.useRef(null)
  const [mySort, setSort] = React.useState(transportPersistentStore.sort)
  const [isUp, setUp] = React.useState(transportPersistentStore.up)
  const filteredData = React.useMemo(() => data.filter(x => x.status !== "Hidden"), [data])
  const sortedData = React.useMemo(() => mySort === null ? filteredData : filteredData.map((x, index) => [x, index]).sort(([dx, ix], [dy, iy]) => {
    const materializer = typeof sortMaterializers[mySort] === "function" ? sortMaterializers[mySort] : x => x
    const x = materializer(dx[mySort])
    const y = materializer(dy[mySort])
    if (typeof x === typeof y && x !== y) {
      if (typeof x === "string") {
        for (var i = 0; i < Math.min(x.length, y.length); i++) {
          const xc = x.charCodeAt(i)
          const yc = y.charCodeAt(i)
          if (xc !== yc) {
            return xc-yc
          }
        }
        return x.length - y.length
      }
      else if (typeof x === "number") {
        return x-y
      }
    }
    return ix-iy
  }).map(([x, ix]) => x)
  , [filteredData, mySort])
  const reversedData = React.useMemo(() => isUp === true ? sortedData : [...sortedData].reverse(), [sortedData, isUp])
  const sortOnClick = name => {
    transportPersistentStore.data = ""
    setSearch("")
    const set = name === mySort ? (isUp !== initialUpState(name) ? (transportPersistentStore.sort = null, setSort(null), true) : !initialUpState(name)) : (transportPersistentStore.sort = name, setSort(name), initialUpState(name))
    transportPersistentStore.up = set
    setUp(set)
  }
  React.useEffect(() => {
    if (barRef.current === null) {
      return
    }
    barRef.current.addEventListener("keyup", e => {
      if (e.charCode === 13 || e.key === "Enter") {
        e.stopPropagation()
      }
    }, {capture: true})
  }, [barRef])
  return (
    <div>
      <div style={{height: "12px"}}/>
      <div style={{marginLeft: "12px", marginRight: "12px"}}>
        <div ref={barRef}>
          <SearchBar
            value={search}
            onChange={onChange}
            onCancelSearch={() => onChange("")}
            onRequestSearch={() => {}}
            style={{margin: "auto", maxWidth: "1000px"}}
            />
        </div>
      </div>
      <div style={{height: "12px"}}/>
      <Material.Paper square>
        <ListFactory header={(<MyStickyHeader heightProvider={heightProvider}>{columns.map((x, index) => (<Material.TableCell key={index}><Material.TableSortLabel active={mySort === index} direction={(mySort === index ? !(isUp === false) : initialUpState(index)) ? "asc" : "desc"} onClick={() => sortOnClick(index)}>{x}</Material.TableSortLabel></Material.TableCell>))}</MyStickyHeader>)} data={reversedData} generator={x => transportItemGenerator(x, x[0], setSelTab)} style={TransportViewStyle}/>
      </Material.Paper>
    </div>
  )
}

const ANIMATION_TIME = 0.075
const TRANSITION_STRING = `all ${ANIMATION_TIME}s linear`

const synchronousAnimationProvider = (ref, onAnimationCollapse) => {
  const processEnd = () => {
    if (ref.current.getBoundingClientRect().width === 0) {
      onAnimationCollapse()
    }
  }
  ref.current.addEventListener("transitionend", processEnd)
  ref.current.addEventListener("transitioncancel", processEnd)
  const requestChange = (change) => {
    if (change === "expand") {
      ref.current.classList.remove("collapsed")
      ref.current.classList.add("expanded")
    }
    else if (change === "collapse") {
      ref.current.classList.remove("expanded")
      ref.current.classList.add("collapsed")
      processEnd()
    }
  }
  return requestChange
}

const AnimatedIcon = ({icon}) => {
  const firstRender = React.useRef(true)
  const synchronousIcon = React.useRef(icon)
  const [displayedIcon, setIcon] = React.useState(icon)
  const iconRef = React.useRef(null)
  const currTarget = React.useRef(null)
  const request = React.useRef(null)
  React.useEffect(() => {
    request.current = synchronousAnimationProvider(iconRef, () => {
      if (currTarget.current !== null) {
        const icon = currTarget.current
        currTarget.current = null
        synchronousIcon.current = icon
        setIcon(icon)
        request.current("expand")
      }
    })
  }, [iconRef])
  React.useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false
      return
    }
    if (synchronousIcon.current === icon) {
      currTarget.current = null
      request.current("expand")
      return
    }
    currTarget.current = icon
    request.current("collapse")
  }, [icon])
  return (<Material.Icon ref={iconRef} style={{transition: TRANSITION_STRING}}>{displayedIcon === "list" ? (<CalendarTodayIcon/>) : (<ListIcon/>)}</Material.Icon>)
}

const barSpacer = document.getElementById("barspacer")

const MyStickyHeader = ({children, heightProvider: [currentHeight, heightListeners]}) => {
  const headRef = React.useRef(null)
  React.useEffect(() => {
    const myListeners = heightListeners.current
    var height = currentHeight.current
    const capturedTop = headRef.current.getBoundingClientRect().top-barSpacer.getBoundingClientRect().bottom
    const recomputeTop = () => {
      const targetPosition = Math.max(window.scrollY+height-capturedTop, 0)
      setTop(targetPosition)
    }
    recomputeTop()
    const myIndex = myListeners.push(newHeight => {
      height = newHeight
      recomputeTop()
    })-1
    window.addEventListener("scroll", recomputeTop)
    return () => {
      myListeners[myIndex] = ()=>{}
      window.removeEventListener("scroll", recomputeTop)
    }
  }, [currentHeight, heightListeners])
  const [top, setTop] = React.useState(0)
  return <Material.TableHead><Material.TableRow ref={headRef} style={{transform: "translate(0,"+top+"px)"}}>{children}</Material.TableRow></Material.TableHead>
}

const TransportViewStyle = {
  font: "20px Arial, sans-serif"
}

const transportItemGenerator = (data, index, setSelTab) => {
  return (
    <Material.TableRow key={index} onClick={() => {
      //addDetailTab(data, index)
      //setSelTab(Infinity)
    }}>
      {data.map((x, index) => <Material.TableCell key={index}>{x}</Material.TableCell>)}
    </Material.TableRow>
  )
}

const detailItemGenerator = (data, index) => {
  return (
    <Material.TableRow key={data.internalUID}>
      <Material.TableCell>{data.name}</Material.TableCell>
      <Material.TableCell>{data.startDateTime}</Material.TableCell>
      <Material.TableCell>{data.endDateTime}</Material.TableCell>
      <Material.TableCell>{data.origin}</Material.TableCell>
      <Material.TableCell>{data.destination}</Material.TableCell>
      <Material.TableCell>{data.POC}</Material.TableCell>
      <Material.TableCell>{data.POCPhone}</Material.TableCell>
      <Material.TableCell>{data.system === "Civilian" ? "Civilian" : "Military"}</Material.TableCell>
      <Material.TableCell>{data.vehicles}</Material.TableCell>
      <Material.TableCell>{data.notes}</Material.TableCell>
    </Material.TableRow>
  )
}

const notificationItemGenerator = (data, index, key, setSelTab) => {
  return (
    <Material.TableRow key={key} onClick={() => {
      addDetailTab(data, index)
      setSelTab(Infinity)
    }}><Material.TableCell style={notificationItemStyle(data.latest)} align="center">{data.title}</Material.TableCell></Material.TableRow>
  )
}

const notificationItemStyle = (latest) => {
  if (latest === false) {
    return {
      color: "grey"
    }
  }
  else {
    return {}
  }
}

const addDetailTab = (data, index) => {
  addTab({type: "detail", params: [tabID, index]})
  tabID++
}

const addNewTab = (cloneID) => {
  addTab({type: "newindent", params: [tabID, cloneID]})
  tabID++
}

const ListFactory = ({data, generator, style, header, tail}) => {
  return (
    <Material.TableContainer>
      <Material.Table stickyHeader>
        {header}
        <Material.TableBody>
          {data.map(generator)}
        </Material.TableBody>
        {tail}
      </Material.Table>
    </Material.TableContainer>
  )
}

const getCallbackSystem = (dataSource) => {

  const registeredCallbacks = []

  const registerCallback = (callback) => {
    return registeredCallbacks.push(callback)-1
  }

  const deregisterCallback = (id) => {
    if (id > -1 && id < registeredCallbacks.length) {
      registeredCallbacks[id] = ()=>{}
    }
  }
  
  const notifyNewData = () => {
    for (const callback of registeredCallbacks) {
      callback(dataSource())
    }
  }

  return [registerCallback, deregisterCallback, notifyNewData]
}

var dataStore = {columns: [], rows: []}

const readNotifications = () => {
  return notificationsStore
}

var notificationsStore = []

const statuses = ["Pending", "Submitted", "Recommended", "Confirmed", "Hidden"]

const formFields = [{name: "emailsNotify", initialData: [], friendlyName: "Email", fieldType: "multi", persistent: true, optional: true}, {name: "system", initialData: "Military", friendlyName: "Vehicle type", fieldType: "select", options: ["Military", "Civilian"]}, {name: "name", initialData: "", friendlyName: "Purpose"}, {name: "startDateTime", initialData: "", friendlyName: "Start time", fieldType: "datetime"}, {name: "endDateTime", initialData: "", friendlyName: "End time", fieldType: "datetime"}, {name: "origin", initialData: "", friendlyName: "Reporting location"}, {name: "destination", initialData: "", friendlyName: "Destination"}, {name: "POC", initialData: "", friendlyName: "Contact person"}, {name: "POCPhone", initialData: "", friendlyName: "Contact person number"}, {name: "vehicles", initialData: "", friendlyName: "Vehicles"}, {name: "notes", initialData: "", friendlyName: "Notes", optional: true}]

const dataDefaults = [{name: "addInfo", initialData: "", friendlyName: "Additional Info", optional: true}, {name: "status", initialData: "Pending", friendlyName: "Status"}]

const detailFields = [...formFields.slice(2, -2), formFields[1], ...formFields.slice(-2)]

const displayFields = [...formFields.slice(2, -2), ...formFields.slice(-2), ...dataDefaults]

const fieldToFriendly = {}

const fieldAttributes = {}

const prefillConverters = {
  "startDateTime": str => {
    const date = new Date(str.slice(6,10)+"-"+str.slice(3,5)+"-"+str.slice(0,2)+"T"+str.slice(11,16))
    date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
    return date.toISOString().substring(0, 16)
  },
  "endDateTime": str => {
    const date = new Date(str.slice(6,10)+"-"+str.slice(3,5)+"-"+str.slice(0,2)+"T"+str.slice(11,16))
    date.setMinutes(date.getMinutes()-date.getTimezoneOffset())
    return date.toISOString().substring(0, 16)
  }
}

const sortMaterializers = {
  "startDateTime": str => {
    const date = new Date(str.slice(6,10)+"-"+str.slice(3,5)+"-"+str.slice(0,2)+"T"+str.slice(11,16))
    return date.getTime()
  },
  "endDateTime": str => {
    const date = new Date(str.slice(6,10)+"-"+str.slice(3,5)+"-"+str.slice(0,2)+"T"+str.slice(11,16))
    return date.getTime()
  }
}

for (const description of [...formFields, ...dataDefaults]) {
  fieldToFriendly[description.name] = description.friendlyName
  fieldAttributes[description.name] = {persistent: description.persistent, optional: description.optional}
}

const Tabs = ({childWrapper, childContext, children, selTab, setSelTab, appbarRef}) => {
  const pre = [(<Material.Tab style={{opacity: 1, minWidth: 0, minHeight:0, padding: 0}} disableRipple selected label={<div style={{height: "48px", width: "48px"}}><img src={sir5logo} height="48px" width="48px"/></div>}/>), (<Material.Tab label={"fantasy skill at arms"} disableRipple/>)]
  const post = []
  const ChildWrapper = childWrapper
  return (
    <div>
      <Material.AppBar position="sticky" style={{top: "env(safe-area-inset-top)"}} ref={appbarRef}>
        <Material.Tabs variant="scrollable" value={Math.min(selTab, children.length-1)+pre.length}>
          {[...pre , ...children.map((child, index) => {
            const obj = {...child.props, removeCallback: () => child.props.removeCallback(index, children.length), onClick: () => {setSelTab(index)}, active: index === Math.min(selTab, children.length-1), key: child.props.mykey}
            return (<Tab {...obj}></Tab>)
          }), ...post]}
        </Material.Tabs>
      </Material.AppBar>
      <div>
        <ChildWrapper childContext={childContext} mykey={children[Math.min(selTab, children.length-1)].props.mykey}>
          {children[Math.min(selTab, children.length-1)]}
        </ChildWrapper>
      </div>
    </div>
  )
}

const Tab = ({label, onClick, active, removable, removeCallback}) => {
  return (
    <Material.Tab style={{padding: 0}} disableRipple selected label={(<span><Material.Tab label={label} onClick={onClick} selected={active ? true : null}/>
      {removable ? (<Material.IconButton size="small" onClick={removeCallback}><Icons.Close style={{fill: "red"}}/></Material.IconButton>) : undefined}
      </span>)}/>
  )
}

const TabCloseStyle = {
  font: "16px Arial, sans-serif",
  margin: "auto"
}

const [registerCallback, deregisterCallback, notifyNewData] = getCallbackSystem(readRange)

const [registerForm, deregisterForm, notifyNewForm] = getCallbackSystem(readSubmitted)

const [registerNotify, deregisterNotify, notifyNewN] = getCallbackSystem(readNotifications)

ReactDOM.render(
  <div style={{textAlign: "center"}}>
    <App/>
  </div>,
  document.getElementById('root')
);
