(this["webpackJsonpfantasy-footgun"]=this["webpackJsonpfantasy-footgun"]||[]).push([[0],{256:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},i=[];return function(a){a=a.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var i=0;i<e.length;i++){for(var a=Object.values(e[i]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),r={},c=0;c<a.length;c++)r[a[c]]||(n[a[c]]||(n[a[c]]=0),n[a[c]]++,r[a[c]]=0),r[a[c]]+=1/a.length;t.push(r)}var l=Object.keys(n);for(i=0;i<l.length;i++)n[l[i]]?n[l[i]]=Math.log(e.length/n[l[i]]):n[l[i]]=0}(e,i,n),t=1);for(var r=[],c=0;c<e.length;c++)r.push([0,0,c,e[c]]);for(c=0;c<a.length;c++)for(var l=a[c],s=0;s<e.length;s++)i[s][l]&&(r[s][0]-=i[s][l]*n[l],r[s][1]-=i[s][l]);return r=r.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},259:function(e,t,n){"use strict";n.r(t);var i=n(34),a=n.n(i),r=n(67),c=n(8),l=n(40),s=n(106),o=n(21),u=n(32),d=n(0),j=n(18),f=n(163),h=n.n(f),b=n(125),p=n(306),m=n(307),v=n(319),O=n(316),x=n(309),g=n(322),y=n(312),S=n(304),k=n(303),w=(n(313),n(308)),T=n(305),C=n(311),P=n(314),N=n(317),D=n(159),R=n(315),E=n(164),I=n.n(E),B=n.p+"static/media/5sirlogo.a6ac04db.jpg";n(24),n(257),n(105),n(173);console.log("fantasy-footgun 0.1.0a");for(var M,A,W=n(256),J=[],L=1,_=function(e){(J=Object(u.a)(J)).push(e),M(J)},G=function(e){var t=e.childContext,n=e.mykey,i=e.children,a=d.useRef(n);return a.current!==n&&null!==a.current&&(t.current[a.current]=window.scrollY,a.current=null),d.useLayoutEffect((function(){a.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,a]),i},H=function(){var e,t=d.useState([]),n=Object(o.a)(t,2),i=n[0],a=n[1];M=a,d.useEffect((function(){return(A=h()("https://null.herokuapp.com/",{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<V)return;V=t,void 0!==K[t]&&K[t]()}pe=Object(u.a)(e).reverse(),We()})),A.on("sendNotifications",(function(e){Oe=Object(u.a)(e).reverse(),ze()})),A.emit("requestIndents",""),A.emit("requestNotifications",""),function(){A.disconnect()}}),[]);var r=d.useState(0),l=Object(o.a)(r,2),j=l[0],f=l[1],b=d.useRef(null),p=d.useRef([]),m=d.useRef(0);d.useEffect((function(){if(b.current){m.current=b.current.offsetHeight;var e,t=Object(s.a)(p.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(b.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[b,null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.offsetHeight]);var v=d.useRef({}),O=d.useRef({});return Object(c.jsx)("div",{children:Object(c.jsx)(Re,{childWrapper:G,childContext:O,selTab:j,setSelTab:f,appbarRef:b,children:[Object(c.jsx)("div",{label:"my team",mykey:"defaultTab0",children:Object(c.jsx)(ae,{id:0})},"defaultTab0"),Object(c.jsx)("div",{label:"leaderboard",mykey:"defaultTab1",children:Object(c.jsx)(ce,{setSelTab:f,heightProvider:[m,p],transportPersistentStore:v.current})},"defaultTab1"),Object(c.jsx)("div",{label:"results",myKey:"defaultTab2",children:Object(c.jsx)(le,{})},"defaultTab2")].concat(Object(u.a)(i.map((function(e,t){var n=e.type,i=e.params;return"detail"===n?Object(c.jsx)(q,{setSelTab:f,mykey:i[0],label:F(i[1]).name,removable:"true",removeCallback:function(e,t){var n;n=i[0],J=Object(u.a)(J).filter((function(e){return e.params[0]!==n})),U[n]=void 0,M(J);var a=Math.min(j,t-1);a>e&&f(a-1)},details:i,heightProvider:[m,p]},i[0]):Object(c.jsx)("div",{})}))))})})},U={},q=function(e){var t=e.setSelTab,n=e.details,i=e.heightProvider,s=Object(o.a)(n,2),u=s[0],j=s[1];void 0===U[u]&&(U[u]=F(j));var f=d.useState(U[u]),h=Object(o.a)(f,2),x=h[0],g=h[1],y=function(){var e=Object(r.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(j,U[u]);case 2:!0===e.sent&&alert("Indent saved successfully!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)(b.a,{square:!0,children:Object(c.jsx)(he,{header:Object(c.jsx)(oe,{heightProvider:i,children:Se.map((function(e,t){return Object(c.jsx)(p.a,{children:e.friendlyName},t)}))}),data:[x],generator:function(e){return je(e,e.internalUID)},style:ue})}),Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)(m.a,{variant:"outlined",onClick:function(){fe(x.internalUID),t(1/0)},children:"Copy"}),Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)("div",{children:Object(c.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(c.jsx)("div",{style:ie,children:Object(c.jsx)(v.a,{fullWidth:!0,multiline:!0,label:"Additional Info",variant:"outlined",value:x.addInfo,onChange:function(e){U[u]=Object(l.a)(Object(l.a)({},U[u]),{},{addInfo:e.target.value}),g(U[u])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})})})}),Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(c.jsx)(O.a,{variant:"outlined",native:!0,value:x.status,onChange:function(e){U[u]=Object(l.a)(Object(l.a)({},U[u]),{},{status:e.target.value}),g(U[u])},children:xe.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))})}),Object(c.jsx)("div",{style:{display:"inline-block",width:"1px"}}),Object(c.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(c.jsx)(m.a,{variant:"outlined",onClick:y,children:"Save"})})]})]})},z=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,X(t,n);case 2:return(i=e.sent)&&We(),e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),F=function(e){var t=pe.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},V=0,Y=0,K=[],X=function(){var e=Object(r.a)(a.a.mark((function e(t,n){var i,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y++,r=new Promise((function(e){return i=e})),K[Y]=i,A.emit("writeDataStore",[t,n,Y]),e.next=6,r;case 6:if(Y!==V){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){return pe},Z=function(e){for(var t in e){var n=e[t];if(!n||"string"===typeof n&&(0===n.length||n===JSON.stringify({name:null})))return["FAILED","Please fill in all fields"]}return["SUCCESS"]},$=function(e){return window.localStorage.getItem("ALFG".concat(e))},ee=function(e){var t=e.data;return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:ie,children:Object(c.jsx)(x.a,{children:"Nickname: ".concat(t.nickname)})}),Object(c.jsxs)("div",{style:ie,children:[Object(c.jsx)(x.a,{children:"SAR21: ".concat(JSON.parse(t.sar21).name)}),Object(c.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(c.jsx)("img",{src:JSON.parse(t.sar21).photo,height:125,width:125})]}),Object(c.jsxs)("div",{style:ie,children:[Object(c.jsx)(x.a,{children:"SAW: ".concat(JSON.parse(t.saw).name)}),Object(c.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(c.jsx)("img",{src:JSON.parse(t.saw).photo,height:125,width:125})]}),Object(c.jsxs)("div",{style:ie,children:[Object(c.jsx)(x.a,{children:"GPMG: ".concat(JSON.parse(t.gpmg).name)}),Object(c.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),Object(c.jsx)("img",{src:JSON.parse(t.gpmg).photo,height:125,width:125})]})]})})},te=function(e){var t=e.blobs,n=e.prefill,i=e.fields,l=e.formPersistentStore,j=e.validator,f=[],h=void 0===l?{}:l;void 0===h.data&&(h.data=i.map((function(e){if("object"===typeof n){var t=n[e.name];if(void 0!==t){var i=Te[e.name];return"function"===typeof i?i(t):t}}return e.initialData})));for(var b=d.useState(h.data),p=Object(o.a)(b,2),O=p[0],x=p[1],g=O,y=function(){var e=S,t=i[e];f.push([O[e],function(t){(g=Object(u.a)(g))[e]=t,h.data=g,x(g)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options,t.blobName])},S=0;S<i.length;S++)y();var k=function(){var e=Object(r.a)(a.a.mark((function e(t){var n,i,r,c,l,u,d,h,b,p;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},i=Object(s.a)(f);try{for(i.s();!(r=i.n()).done;)c=Object(o.a)(r.value,6),l=c[0],c[1],c[2],u=c[3],c[4],d=c[5],h=ne[d],n[u]=h?h(l):l}catch(m){i.e(m)}finally{i.f()}if("SUCCESS"===(b=j(n))[0]){e.next=7;break}return alert(b[1]),e.abrupt("return");case 7:p=JSON.stringify(n),t="locked",a=p,window.localStorage.setItem("ALFG".concat(t),a),He(p);case 10:case"end":return e.stop()}var t,a}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{children:f.map((function(e,n){var i,a=Object(o.a)(e,8),r=a[0],l=a[1],s=(a[2],a[3],a[4]),j=a[5],f=a[6],h=a[7];return Object(c.jsx)("div",{style:ie,children:"datetime"===j?Object(c.jsx)(v.a,{id:"datetime-local",fullWidth:!0,label:s,type:"datetime-local",variant:"outlined",value:r,onChange:function(e){return l(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===j?Object(c.jsx)(v.a,{fullWidth:!0,select:!0,label:s,variant:"outlined",value:r,SelectProps:{native:!0},onChange:function(e){return l(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:f.map((function(e,t){return Object(c.jsx)("option",{value:e,children:e},t)}))}):"selectBlob"===j?function(e){var n=JSON.parse(e);return Object(c.jsxs)(d.Fragment,{children:[Object(c.jsx)(v.a,{fullWidth:!0,select:!0,label:s,variant:"outlined",value:e,SelectProps:{native:!0},onChange:function(e){return l(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:function(e){return null===n.name?[Object(c.jsx)("option",{value:JSON.stringify({name:null})},-1)].concat(Object(u.a)(e)):e}(t[h].map((function(e,t){return Object(c.jsx)("option",{value:JSON.stringify(e),children:e.name},t)})))}),Object(c.jsx)("div",{style:{flexBasis:"100%",height:"12px"}}),null===n.name?Object(c.jsx)("div",{style:{height:125,width:125}}):Object(c.jsx)("img",{src:n.photo,height:125,width:125})]})}(r):"multi"===j?Object(c.jsx)(v.a,{fullWidth:!0,multiline:!0,label:s,variant:"outlined",value:null!==(i=r[0])&&void 0!==i?i:"",onChange:function(e){return l([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(c.jsx)(v.a,{fullWidth:!0,multiline:!0,label:s,variant:"outlined",value:r,onChange:function(e){return l(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},n)}))}),Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)(m.a,{variant:"outlined",onClick:k,children:"lock in team"}),Object(c.jsx)("div",{style:{height:"48px"}})]})},ne={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},ie={display:"flex",flexWrap:"wrap",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},ae=function(e){var t=e.id;e.cloneID;d.useEffect((function(){var e=_e((function(e){l(e)}));return function(){return Ge(e)}}),[]);var n=me;void 0===U[t]&&(U[t]={});var i=d.useState($("locked")),a=Object(o.a)(i,2),r=a[0],l=a[1],s=d.useMemo((function(){return r?JSON.parse(r):void 0}),[r]);return Object(c.jsxs)("div",{style:ue,children:[Object(c.jsx)("div",{style:{height:"12px"}}),r?Object(c.jsx)(ee,{data:s}):Object(c.jsx)(te,{blobs:n.blobs,prefill:s,fields:n.fields,defaults:ye,formPersistentStore:U[t],validator:Z})]})},re=function(e){return!("number"===typeof e&&e>0)},ce=function(e){var t=e.setSelTab,n=e.heightProvider,i=e.transportPersistentStore;!0!==i.initialized&&(i.initialized=!0,i.data="",i.sort=null,i.up=!0);var a=Q(),r=a.rows;d.useEffect((function(){var e=Me((function(e){var t=e.rows;m.current=t,O.current=W.makeRanker(t),w(""!==x.current?O.current(x.current):t)}));return function(){return Ae(e)}}),[]);var l=d.useState(i.data),s=Object(o.a)(l,2),j=s[0],f=s[1],h=d.useRef(null),m=d.useRef(r),v=W.makeRanker(r),O=d.useRef(v),x=d.useRef(i.data),y=d.useState(""!==i.data?v(i.data):r),S=Object(o.a)(y,2),k=S[0],w=S[1],T=a.columns,C=function(e){i.data=e,f(e),i.sort=null,E(null),i.up=!0,J(!0),null!==h.current&&(clearTimeout(h.current),h.current=null),h.current=setTimeout((function(){x.current=e,w(""!==e?O.current(e):m.current),h.current=null}),100)},P=d.useRef(null),N=d.useState(i.sort),D=Object(o.a)(N,2),R=D[0],E=D[1],B=d.useState(i.up),M=Object(o.a)(B,2),A=M[0],J=M[1],L=d.useMemo((function(){return k.filter((function(e){return"Hidden"!==e.status}))}),[k]),_=d.useMemo((function(){return null===R?L:L.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),i=n[0],a=n[1],r=Object(o.a)(t,2),c=r[0],l=r[1],s="function"===typeof Ce[R]?Ce[R]:function(e){return e},u=s(i[R]),d=s(c[R]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var j=0;j<Math.min(u.length,d.length);j++){var f=u.charCodeAt(j),h=d.charCodeAt(j);if(f!==h)return f-h}return u.length-d.length}if("number"===typeof u)return u-d}return a-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[L,R]),G=d.useMemo((function(){return!0===A?_:Object(u.a)(_).reverse()}),[_,A]);return d.useEffect((function(){null!==P.current&&P.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[P]),Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(c.jsx)("div",{ref:P,children:Object(c.jsx)(I.a,{value:j,onChange:C,onCancelSearch:function(){return C("")},onRequestSearch:function(){},style:{margin:"auto",maxWidth:"1000px"}})})}),Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)(b.a,{square:!0,children:Object(c.jsx)(he,{header:Object(c.jsx)(oe,{heightProvider:n,children:T.map((function(e,t){return Object(c.jsx)(p.a,{children:Object(c.jsx)(g.a,{active:R===t,direction:(R===t?!1!==A:re(t))?"asc":"desc",onClick:function(){return function(e){i.data="",f("");var t=e===R?A!==re(e)?(i.sort=null,E(null),!0):!re(e):(i.sort=e,E(e),re(e));i.up=t,J(t)}(t)},children:e})},t)}))}),data:G,generator:function(e){return de(e,e[0],t)},style:ue})})]})},le=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{style:{height:"12px"}}),Object(c.jsx)(b.a,{square:!0,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(S.a,{children:[Object(c.jsxs)(k.a,{children:[Object(c.jsx)(p.a,{align:"center",children:"Best SAR21"}),Object(c.jsx)(p.a,{align:"center",children:"TBD"})]}),Object(c.jsxs)(k.a,{children:[Object(c.jsx)(p.a,{align:"center",children:"Best SAW"}),Object(c.jsx)(p.a,{align:"center",children:"TBD"})]}),Object(c.jsxs)(k.a,{children:[Object(c.jsx)(p.a,{align:"center",children:"Best GPMG"}),Object(c.jsx)(p.a,{align:"center",children:"TBD"})]})]})})})]})},se=("all ".concat(.075,"s linear"),document.getElementById("barspacer")),oe=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),i=n[0],a=n[1],r=d.useRef(null);d.useEffect((function(){var e=a.current,t=i.current,n=r.current.getBoundingClientRect().top-se.getBoundingClientRect().bottom,c=function(){var e=Math.max(window.scrollY+t-n,0);j(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[i,a]);var l=d.useState(0),s=Object(o.a)(l,2),u=s[0],j=s[1];return Object(c.jsx)(w.a,{children:Object(c.jsx)(k.a,{ref:r,style:{transform:"translate(0,"+u+"px)"},children:t})})},ue={font:"20px Arial, sans-serif"},de=function(e,t,n){return Object(c.jsx)(k.a,{onClick:function(){},children:e.map((function(e,t){return Object(c.jsx)(p.a,{children:e},t)}))},t)},je=function(e,t){return Object(c.jsxs)(k.a,{children:[Object(c.jsx)(p.a,{children:e.name}),Object(c.jsx)(p.a,{children:e.startDateTime}),Object(c.jsx)(p.a,{children:e.endDateTime}),Object(c.jsx)(p.a,{children:e.origin}),Object(c.jsx)(p.a,{children:e.destination}),Object(c.jsx)(p.a,{children:e.POC}),Object(c.jsx)(p.a,{children:e.POCPhone}),Object(c.jsx)(p.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(c.jsx)(p.a,{children:e.vehicles}),Object(c.jsx)(p.a,{children:e.notes})]},e.internalUID)},fe=function(e){_({type:"newindent",params:[L,e]}),L++},he=function(e){var t=e.data,n=e.generator,i=(e.style,e.header),a=e.tail;return Object(c.jsx)(y.a,{children:Object(c.jsxs)(S.a,{stickyHeader:!0,children:[i,Object(c.jsx)(T.a,{children:t.map(n)}),a]})})},be=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,i=Object(s.a)(t);try{for(i.s();!(n=i.n()).done;){(0,n.value)(e())}}catch(a){i.e(a)}finally{i.f()}}]},pe={columns:["Username","Total Score","SAR21","SAW","GPMG"],rows:[["PTE A",500,300,100,100],["PTE B",300,0,200,100],["PTE C",100,0,100,0]]},me={fields:[{name:"nickname",initialData:"",friendlyName:"Nickname",fieldType:"single"},{name:"sar21",initialData:JSON.stringify({name:null}),friendlyName:"Best SAR21",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"saw",initialData:JSON.stringify({name:null}),friendlyName:"Best SAW",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"},{name:"gpmg",initialData:JSON.stringify({name:null}),friendlyName:"Best GPMG",fieldType:"selectBlob",blobName:"Soldiers",display:"textPhoto"}],data:{},blobs:{Soldiers:[{name:"Alpha - PTE 1",photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},{name:"Bravo - PTE 2",photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},{name:"Charlie - PTE 3",photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},{name:"Support - PTE 4",photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"},{name:"MSC - PTE 5",photo:"https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"}]}},ve=function(){return Oe},Oe=[],xe=["Pending","Submitted","Recommended","Confirmed","Hidden"],ge=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],ye=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],Se=[].concat(Object(u.a)(ge.slice(2,-2)),[ge[1]],Object(u.a)(ge.slice(-2))),ke=([].concat(Object(u.a)(ge.slice(2,-2)),Object(u.a)(ge.slice(-2)),ye),{}),we={},Te={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},Ce={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Pe=0,Ne=[].concat(ge,ye);Pe<Ne.length;Pe++){var De=Ne[Pe];ke[De.name]=De.friendlyName,we[De.name]={persistent:De.persistent,optional:De.optional}}var Re=function(e){var t=e.childWrapper,n=e.childContext,i=e.children,a=e.selTab,r=e.setSelTab,s=e.appbarRef,o=[Object(c.jsx)(C.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(c.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(c.jsx)("img",{src:B,height:"48px",width:"48px"})})}),Object(c.jsx)(C.a,{label:"fantasy skill at arms",disableRipple:!0})],d=t;return Object(c.jsxs)("div",{children:[Object(c.jsx)(P.a,{title:Object(c.jsx)(x.a,{children:"Fantasy Skill at Arms"}),position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:s,children:Object(c.jsx)(N.a,{variant:"scrollable",value:Math.min(a,i.length-1)+o.length,children:[].concat(o,Object(u.a)(i.map((function(e,t){var n=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,i.length)},onClick:function(){r(t)},active:t===Math.min(a,i.length-1),key:e.props.mykey});return Object(c.jsx)(Ee,Object(l.a)({},n))}))),[])})}),Object(c.jsx)("div",{children:Object(c.jsx)(d,{childContext:n,mykey:i[Math.min(a,i.length-1)].props.mykey,children:i[Math.min(a,i.length-1)]})})]})},Ee=function(e){var t=e.label,n=e.onClick,i=e.active,a=e.removable,r=e.removeCallback;return Object(c.jsx)(C.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(c.jsxs)("span",{children:[Object(c.jsx)(C.a,{label:t,onClick:n,selected:!!i||null}),a?Object(c.jsx)(D.a,{size:"small",onClick:r,children:Object(c.jsx)(R.a,{style:{fill:"red"}})}):void 0]})})},Ie=be(Q),Be=Object(o.a)(Ie,3),Me=Be[0],Ae=Be[1],We=Be[2],Je=be((function(){return $("locked")})),Le=Object(o.a)(Je,3),_e=Le[0],Ge=Le[1],He=Le[2],Ue=be(ve),qe=Object(o.a)(Ue,3),ze=(qe[0],qe[1],qe[2]);j.render(Object(c.jsx)("div",{style:{textAlign:"center"},children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[259,1,2]]]);
//# sourceMappingURL=main.47fbf6ae.chunk.js.map