(this["webpackJsonpfantasy-footgun"]=this["webpackJsonpfantasy-footgun"]||[]).push([[0],{203:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},i=[];return function(a){a=a.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var i=0;i<e.length;i++){for(var a=Object.values(e[i]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),r={},l=0;l<a.length;l++)r[a[l]]||(n[a[l]]||(n[a[l]]=0),n[a[l]]++,r[a[l]]=0),r[a[l]]+=1/a.length;t.push(r)}var c=Object.keys(n);for(i=0;i<c.length;i++)n[c[i]]?n[c[i]]=Math.log(e.length/n[c[i]]):n[c[i]]=0}(e,i,n),t=1);for(var r=[],l=0;l<e.length;l++)r.push([0,0,l,e[l]]);for(l=0;l<a.length;l++)for(var c=a[l],o=0;o<e.length;o++)i[o][c]&&(r[o][0]-=i[o][c]*n[c],r[o][1]-=i[o][c]);return r=r.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},205:function(e,t,n){"use strict";n.r(t);var i=n(60),a=n.n(i),r=n(94),l=n(2),c=n(82),o=n(61),s=n(12),u=n(17),d=n(0),f=n(10),j=n(121),b=n.n(j),h=n(93),m=n(232),p=n(233),v=n(234),x=n(235),O=n(244),g=n(246),y=(n(236),n(237)),S=n(238),k=n(239),w=n(240),T=n(241),N=n(242),C=n(245),P=n(117),E=n(243),D=n(122),R=n.n(D),A=n.p+"static/media/5sirlogo.a6ac04db.jpg",I=(n(126),n(127),"0.1.5a");console.log("fantasy-footgun 0.1.7a");for(var M,B=n(203),L=function(e){var t=e.childContext,n=e.mykey,i=e.children,a=d.useRef(n);return a.current!==n&&null!==a.current&&(t.current[a.current]=window.scrollY,a.current=null),d.useLayoutEffect((function(){a.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,a]),i},W=function(){var e,t=d.useState([]),n=Object(s.a)(t,2),i=n[0],a=n[1];a,d.useEffect((function(){return(M=b()("https://sheltered-atoll-88652.herokuapp.com/",{secure:!0})).on("sendIndents",(function(e){je=Object(o.a)({},e),Re()})),M.on("sendNotifications",(function(e){me=Object(u.a)(e),Je()})),M.on("commit",(function(e,t){if(void 0!==e){if(e<J)return;J=e,void 0!==q[e]&&q[e]([!0,t])}})),M.on("fail",(function(e,t){if(alert(e),void 0!==t){if(t<J)return;J=t,void 0!==q[t]&&q[t]([!1,null])}})),M.on("sendEraseEpoch",(function(e){var t=Z("eraseEpoch");Q("eraseEpoch",JSON.stringify(e)),null!==t&&JSON.parse(t)!==e&&($("locked"),$("token"),Le())})),M.emit("requestIndents",""),M.emit("requestNotifications",""),M.emit("requestEraseEpoch"),function(){M.disconnect()}}),[]);var r=d.useState(0),f=Object(s.a)(r,2),j=f[0],h=f[1],m=d.useRef(null),p=d.useRef([]),v=d.useRef(0);d.useEffect((function(){if(m.current){v.current=m.current.offsetHeight;var e,t=Object(c.a)(p.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(m.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[m,null===m||void 0===m||null===(e=m.current)||void 0===e?void 0:e.offsetHeight]);var x=d.useRef({}),O=d.useRef({});return Object(l.jsx)("div",{children:Object(l.jsx)(Te,{childWrapper:L,childContext:O,selTab:j,setSelTab:h,appbarRef:m,children:[Object(l.jsx)("div",{label:"my team",mykey:"defaultTab0",children:Object(l.jsx)(ae,{id:0})},"defaultTab0"),Object(l.jsx)("div",{label:"leaderboard",mykey:"defaultTab1",children:Object(l.jsx)(le,{setSelTab:h,heightProvider:[v,p],transportPersistentStore:x.current})},"defaultTab1"),Object(l.jsx)("div",{label:"station winners",myKey:"defaultTab2",children:Object(l.jsx)(F,{})},"defaultTab2")].concat(Object(u.a)(i.map((function(e,t){e.type,e.params;return Object(l.jsx)("div",{})}))))})})},_=function(e,t){var n,i=null===(n=e.find((function(e){return e.name===t})))||void 0===n?void 0:n.fullName;return"string"===typeof i?i:t},F=function(){var e=he(),t=d.useState(e),n=Object(s.a)(t,2),i=n[0],a=n[1];d.useEffect((function(){var e=Fe(a);return function(){return Ge(e)}}),[]);var r=U();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(h.a,{square:!0,children:Object(l.jsx)(de,{data:i,generator:function(e){return Object(l.jsxs)(m.a,{children:[Object(l.jsx)(p.a,{align:"center",children:e.category}),Object(l.jsx)(p.a,{align:"center",children:_(r.blobs.Soldiers,e.winner)})]})},style:se})})]})},G={},J=0,H=0,q=[],z=!1,X=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var i,r,l;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z){e.next=2;break}return e.abrupt("return",[!1,null]);case 2:return z=!0,H++,r=new Promise((function(e){return i=e})),q[H]=i,M.emit("appendSubmission",t,H,n),e.next=9,r;case 9:return l=e.sent,z=!1,e.abrupt("return",l);case 12:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Y=function(){return je},U=function(){return be},V=function(){return Z("locked")},K=function(e){for(var t in e){var n=e[t];if(!n||"string"===typeof n&&0===n.length)return["FAILED","Please fill in all fields"]}return["SUCCESS"]},Z=function(e){return window.localStorage.getItem("ALFG:schema")!==I&&window.localStorage.removeItem("ALFG:data:".concat(e)),window.localStorage.getItem("ALFG:data:".concat(e))},Q=function(e,t){window.localStorage.setItem("ALFG:schema",I),window.localStorage.setItem("ALFG:data:".concat(e),t)},$=function(e,t){window.localStorage.removeItem("ALFG:data:".concat(e))},ee=function(e){var t,n,i,a,r,c,o=e.blobs,s=e.data,u=e.setTd;return void 0===s?Object(l.jsx)("div",{}):Object(l.jsx)("div",{children:Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:ie,children:Object(l.jsx)(v.a,{children:"Name: ".concat(s.nickname)})}),Object(l.jsxs)("div",{style:ie,children:[Object(l.jsx)(v.a,{children:"SAR21: ".concat(null===(t=o.Soldiers.find((function(e){return e.name===s.sar21})))||void 0===t?void 0:t.friendlyName)}),Object(l.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(l.jsx)("img",{src:null===(n=o.Soldiers.find((function(e){return e.name===s.sar21})))||void 0===n?void 0:n.photo,height:125})]}),Object(l.jsxs)("div",{style:ie,children:[Object(l.jsx)(v.a,{children:"SAW: ".concat(null===(i=o.Soldiers.find((function(e){return e.name===s.saw})))||void 0===i?void 0:i.friendlyName)}),Object(l.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(l.jsx)("img",{src:null===(a=o.Soldiers.find((function(e){return e.name===s.saw})))||void 0===a?void 0:a.photo,height:125})]}),Object(l.jsxs)("div",{style:ie,children:[Object(l.jsx)(v.a,{children:"GPMG: ".concat(null===(r=o.Soldiers.find((function(e){return e.name===s.gpmg})))||void 0===r?void 0:r.friendlyName)}),Object(l.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(l.jsx)("img",{src:null===(c=o.Soldiers.find((function(e){return e.name===s.gpmg})))||void 0===c?void 0:c.photo,height:125})]}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(x.a,{variant:"outlined",onClick:function(){return u(!1)},children:"edit team"}),Object(l.jsx)("div",{style:{height:"48px"}})]})})},te=function(e){var t=e.blobs,n=e.prefill,i=e.fields,o=e.formPersistentStore,f=e.validator,j=[],b=void 0===o?{}:o;void 0===b.data&&(b.data=i.map((function(e){if("object"===typeof n){var t=n[e.name];if(void 0!==t){var i=ge[e.name];return"function"===typeof i?i(t):t}}return e.initialData})));for(var h=d.useState(b.data),m=Object(s.a)(h,2),p=m[0],v=m[1],g=p,y=function(){var e=S,t=i[e];j.push([p[e],function(t){(g=Object(u.a)(g))[e]=t,b.data=g,v(g)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options,t.blobName])},S=0;S<i.length;S++)y();var k=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,i,r,l,o,u,d,b,h,m,p,v,x,O,g;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},i=Object(c.a)(j);try{for(i.s();!(r=i.n()).done;)l=Object(s.a)(r.value,6),o=l[0],l[1],l[2],u=l[3],l[4],d=l[5],b=ne[d],n[u]=b?b(o):o}catch(t){i.e(t)}finally{i.f()}if("SUCCESS"===(h=f(n))[0]){e.next=7;break}return alert(h[1]),e.abrupt("return");case 7:return e.next=9,X(n,JSON.parse(Z("token")));case 9:m=e.sent,p=Object(s.a)(m,2),v=p[0],x=p[1],v&&(O=JSON.stringify(n),g=JSON.stringify(x),Q("locked",O),Q("token",g),Le(O));case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:j.map((function(e,n){var i,a,r=Object(s.a)(e,8),c=r[0],o=r[1],f=(r[2],r[3],r[4]),j=r[5],b=r[6],h=r[7];return Object(l.jsx)("div",{style:ie,children:"datetime"===j?Object(l.jsx)(O.a,{id:"datetime-local",fullWidth:!0,label:f,type:"datetime-local",variant:"outlined",value:c,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===j?Object(l.jsx)(O.a,{fullWidth:!0,select:!0,label:f,variant:"outlined",value:c,SelectProps:{native:!0},onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:b.map((function(e,t){return Object(l.jsx)("option",{value:e,children:e},t)}))}):"selectBlob"===j?Object(l.jsxs)(d.Fragment,{children:[Object(l.jsx)(O.a,{fullWidth:!0,select:!0,label:f,variant:"outlined",value:c,SelectProps:{native:!0},onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:function(e){return null===c?[Object(l.jsx)("option",{value:null},-1)].concat(Object(u.a)(e)):e}(t[h].map((function(e,t){return Object(l.jsx)("option",{value:e.name,children:e.friendlyName},t)})))}),Object(l.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),null===c?Object(l.jsx)("div",{style:{height:125,width:1}}):Object(l.jsx)("img",{src:null===(i=t[h].find((function(e){return e.name===c})))||void 0===i?void 0:i.photo,height:125})]}):"multi"===j?Object(l.jsx)(O.a,{fullWidth:!0,multiline:!0,label:f,variant:"outlined",value:null!==(a=c[0])&&void 0!==a?a:"",onChange:function(e){return o([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(l.jsx)(O.a,{fullWidth:!0,multiline:!0,label:f,variant:"outlined",value:c,onChange:function(e){return o(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},n)}))}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(x.a,{variant:"outlined",onClick:k,children:"lock in team"}),Object(l.jsx)("div",{style:{height:"48px"}})]})},ne={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},ie={display:"flex",flexWrap:"wrap",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},ae=function(e){var t=e.id;e.cloneID;d.useEffect((function(){var e=Me((function(e){c(e),b(null!==e)}));return function(){return Be(e)}}),[]);var n=U();void 0===G[t]&&(G[t]={});var i=d.useState(V()),a=Object(s.a)(i,2),r=a[0],c=a[1],o=d.useMemo((function(){return r?JSON.parse(r):void 0}),[r]),u=d.useState(!!r),f=Object(s.a)(u,2),j=f[0],b=f[1];return Object(l.jsxs)("div",{style:se,children:[Object(l.jsx)("div",{style:{height:"12px"}}),j?Object(l.jsx)(ee,{blobs:n.blobs,data:o,setTd:b}):Object(l.jsx)(te,{blobs:n.blobs,prefill:o,fields:n.fields,defaults:ve,formPersistentStore:G[t],validator:K})]})},re=function(e){return!("number"===typeof e&&e>0)},le=function(e){var t=e.setSelTab,n=e.heightProvider,i=e.transportPersistentStore;!0!==i.initialized&&(i.initialized=!0,i.data="",i.sort=null,i.up=!0);var a=Y(),r=a.rows;d.useEffect((function(){var e=Ee((function(e){var t=e.rows;m.current=t,x.current=B.makeRanker(t),w(""!==O.current?x.current(O.current):t)}));return function(){return De(e)}}),[]);var c=d.useState(i.data),o=Object(s.a)(c,2),f=o[0],j=o[1],b=d.useRef(null),m=d.useRef(r),v=B.makeRanker(r),x=d.useRef(v),O=d.useRef(i.data),y=d.useState(""!==i.data?v(i.data):r),S=Object(s.a)(y,2),k=S[0],w=S[1],T=a.columns,N=function(e){i.data=e,j(e),i.sort=null,A(null),i.up=!0,W(!0),null!==b.current&&(clearTimeout(b.current),b.current=null),b.current=setTimeout((function(){O.current=e,w(""!==e?x.current(e):m.current),b.current=null}),100)},C=d.useRef(null),P=d.useState(i.sort),E=Object(s.a)(P,2),D=E[0],A=E[1],I=d.useState(i.up),M=Object(s.a)(I,2),L=M[0],W=M[1],_=d.useMemo((function(){return k.filter((function(e){return"Hidden"!==e.status}))}),[k]),F=d.useMemo((function(){return null===D?_:_.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(s.a)(e,2),i=n[0],a=n[1],r=Object(s.a)(t,2),l=r[0],c=r[1],o="function"===typeof ye[D]?ye[D]:function(e){return e},u=o(i[D]),d=o(l[D]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var f=0;f<Math.min(u.length,d.length);f++){var j=u.charCodeAt(f),b=d.charCodeAt(f);if(j!==b)return j-b}return u.length-d.length}if("number"===typeof u)return u-d}return a-c})).map((function(e){var t=Object(s.a)(e,2),n=t[0];t[1];return n}))}),[_,D]),G=d.useMemo((function(){return!0===L?F:Object(u.a)(F).reverse()}),[F,L]);return d.useEffect((function(){null!==C.current&&C.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[C]),Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(l.jsx)("div",{ref:C,children:Object(l.jsx)(R.a,{value:f,onChange:N,onCancelSearch:function(){return N("")},onRequestSearch:function(){},style:{margin:"auto",maxWidth:"1000px"}})})}),Object(l.jsx)("div",{style:{height:"12px"}}),Object(l.jsx)(h.a,{square:!0,children:Object(l.jsx)(de,{header:Object(l.jsx)(oe,{heightProvider:n,children:T.map((function(e,t){return Object(l.jsx)(p.a,{children:Object(l.jsx)(g.a,{active:D===t,direction:(D===t?!1!==L:re(t))?"asc":"desc",onClick:function(){return function(e){i.data="",j("");var t=e===D?L!==re(e)?(i.sort=null,A(null),!0):!re(e):(i.sort=e,A(e),re(e));i.up=t,W(t)}(t)},children:e})},t)}))}),data:G,generator:function(e){return ue(e,e[0],t)},style:se})})]})},ce=("all ".concat(.075,"s linear"),document.getElementById("barspacer")),oe=function(e){var t=e.children,n=Object(s.a)(e.heightProvider,2),i=n[0],a=n[1],r=d.useRef(null);d.useEffect((function(){var e=a.current,t=i.current,n=r.current.getBoundingClientRect().top-ce.getBoundingClientRect().bottom,l=function(){var e=Math.max(window.scrollY+t-n,0);f(e)};l();var c=e.push((function(e){t=e,l()}))-1;return window.addEventListener("scroll",l),function(){e[c]=function(){},window.removeEventListener("scroll",l)}}),[i,a]);var c=d.useState(0),o=Object(s.a)(c,2),u=o[0],f=o[1];return Object(l.jsx)(y.a,{children:Object(l.jsx)(m.a,{ref:r,style:{transform:"translate(0,"+u+"px)"},children:t})})},se={font:"20px Arial, sans-serif"},ue=function(e,t,n){return Object(l.jsx)(m.a,{onClick:function(){},children:e.map((function(e,t){return Object(l.jsx)(p.a,{children:e},t)}))},t)},de=function(e){var t=e.data,n=e.generator,i=(e.style,e.header),a=e.tail;return Object(l.jsx)(S.a,{children:Object(l.jsxs)(k.a,{stickyHeader:!0,children:[i,Object(l.jsx)(w.a,{children:t.map(n)}),a]})})},fe=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,i=Object(c.a)(t);try{for(i.s();!(n=i.n()).done;){(0,n.value)(e())}}catch(a){i.e(a)}finally{i.f()}}]},je={columns:[],rows:[]},be={fields:[{name:"nickname",initialData:"",friendlyName:"Name",fieldType:"single"},{name:"sar21",initialData:null,friendlyName:"Best SAR21",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"saw",initialData:null,friendlyName:"Best SAW",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"gpmg",initialData:null,friendlyName:"Best GPMG",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"}],data:{},blobs:{Soldiers:[{name:"Alpha",fullName:"PTE 1",friendlyName:"Alpha - PTE 1",photo:"https://i.pinimg.com/originals/3e/37/24/3e3724692c15d28f12a4c7bc6fe0b945.jpg"},{name:"Bravo",fullName:"PTE 2",friendlyName:"Bravo - PTE 2",photo:"https://scontent.fsin13-1.fna.fbcdn.net/v/t1.6435-9/64861023_2345584528868126_2696896092137586688_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=174925&_nc_ohc=kUjXJTOpnBwAX-aymIb&_nc_ht=scontent.fsin13-1.fna&oh=00_AT80RHyc6Z9aJrAh8nXipP93by8NOtWDXFiVM6iktKjBfg&oe=62306048"},{name:"Charlie",fullName:"PTE 3",friendlyName:"Charlie - PTE 3",photo:"https://i.pinimg.com/280x280_RS/d2/ab/39/d2ab39788ec4254ab7761317448f5da3.jpg"},{name:"Support",fullName:"PTE 4",friendlyName:"Support - PTE 4",photo:"https://c8.alamy.com/comp/D198EY/a-balinese-man-in-a-singapore-army-camo-shirt-D198EY.jpg"},{name:"MSC",fullName:"PTE 5",friendlyName:"MSC - PTE 5",photo:"https://www.janes.com/images/default-source/news-images/fg_3808936-idr-9354.jpg?sfvrsn=b60dfede_2"}]}},he=function(){return me},me=[],pe=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],ve=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],xe=([].concat(Object(u.a)(pe.slice(2,-2)),[pe[1]],Object(u.a)(pe.slice(-2))),[].concat(Object(u.a)(pe.slice(2,-2)),Object(u.a)(pe.slice(-2)),ve),{}),Oe={},ge={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},ye={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Se=0,ke=[].concat(pe,ve);Se<ke.length;Se++){var we=ke[Se];xe[we.name]=we.friendlyName,Oe[we.name]={persistent:we.persistent,optional:we.optional}}var Te=function(e){var t=e.childWrapper,n=e.childContext,i=e.children,a=e.selTab,r=e.setSelTab,c=e.appbarRef,s=[Object(l.jsx)(T.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(l.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(l.jsx)("img",{src:A,height:"48px",width:"48px"})})}),Object(l.jsx)(T.a,{label:"fantasy skill at arms",disableRipple:!0})],d=t;return Object(l.jsxs)("div",{children:[Object(l.jsx)(N.a,{title:Object(l.jsx)(v.a,{children:"Fantasy Skill at Arms"}),position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(l.jsx)(C.a,{variant:"scrollable",value:Math.min(a,i.length-1)+s.length,children:[].concat(s,Object(u.a)(i.map((function(e,t){var n=Object(o.a)(Object(o.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,i.length)},onClick:function(){r(t)},active:t===Math.min(a,i.length-1),key:e.props.mykey});return Object(l.jsx)(Ne,Object(o.a)({},n))}))),[])})}),Object(l.jsx)("div",{children:Object(l.jsx)(d,{childContext:n,mykey:i[Math.min(a,i.length-1)].props.mykey,children:i[Math.min(a,i.length-1)]})})]})},Ne=function(e){var t=e.label,n=e.onClick,i=e.active,a=e.removable,r=e.removeCallback;return Object(l.jsx)(T.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(l.jsxs)("span",{children:[Object(l.jsx)(T.a,{label:t,onClick:n,selected:!!i||null}),a?Object(l.jsx)(P.a,{size:"small",onClick:r,children:Object(l.jsx)(E.a,{style:{fill:"red"}})}):void 0]})})},Ce=fe(Y),Pe=Object(s.a)(Ce,3),Ee=Pe[0],De=Pe[1],Re=Pe[2],Ae=fe(V),Ie=Object(s.a)(Ae,3),Me=Ie[0],Be=Ie[1],Le=Ie[2],We=fe(he),_e=Object(s.a)(We,3),Fe=_e[0],Ge=_e[1],Je=_e[2];f.render(Object(l.jsx)("div",{style:{textAlign:"center"},children:Object(l.jsx)(W,{})}),document.getElementById("root"))}},[[205,1,2]]]);
//# sourceMappingURL=main.1844e689.chunk.js.map