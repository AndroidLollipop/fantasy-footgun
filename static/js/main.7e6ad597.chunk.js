(this["webpackJsonpfantasy-footgun"]=this["webpackJsonpfantasy-footgun"]||[]).push([[0],{259:function(e,t){e.exports={makeRanker:function(e){var t=0,n={},r=[];return function(i){i=i.trim().toLowerCase().split(/\b\s+/);t||(!function(e,t,n){for(var r=0;r<e.length;r++){for(var i=Object.values(e[r]).map((function(e){return e.toString().trim().toLowerCase().split(/\b\s+/)})).flat(),a={},c=0;c<i.length;c++)a[i[c]]||(n[i[c]]||(n[i[c]]=0),n[i[c]]++,a[i[c]]=0),a[i[c]]+=1/i.length;t.push(a)}var l=Object.keys(n);for(r=0;r<l.length;r++)n[l[r]]?n[l[r]]=Math.log(e.length/n[l[r]]):n[l[r]]=0}(e,r,n),t=1);for(var a=[],c=0;c<e.length;c++)a.push([0,0,c,e[c]]);for(c=0;c<i.length;c++)for(var l=i[c],s=0;s<e.length;s++)r[s][l]&&(a[s][0]-=r[s][l]*n[l],a[s][1]-=r[s][l]);return a=a.sort((function(e,t){for(var n=0;e[n]===t[n];)n++;return e[n]-t[n]})).map((function(e){return e[3]}))}}}},261:function(e,t,n){"use strict";n.r(t);var r=n(176),i=n(36),a=n.n(i),c=n(67),l=n(32),s=n(9),u=n(88),o=n(19),d=n(37),f=n(0),j=n(18),b=n(164),h=n.n(b),m=n(126),v=n(307),p=n(308),O=n(319),x=n(316),y=n(322),g=n(312),D=n(309),C=n(304),T=n(313),k=n(305),w=n(306),S=n(311),I=n(160),M=n(314),E=n(317),R=n(315),P=n(165),N=n.n(P),L=n.p+"static/media/logo.58ed9303.jpg",A=n.p+"static/media/5sirlogo.a6ac04db.jpg",U=n(23),W=n(68),H=n(107),q=n.n(H),z=n(174),F=n.n(z),B=n(175),V=n.n(B);console.log("fantasy-footgun 0.1.20a");for(var J,Y,K=n(259),X=[],G=1,Q=function(e){(X=Object(d.a)(X)).push(e),J(X)},Z=function(e){X=Object(d.a)(X).filter((function(t){return t.params[0]!==e})),te[e]=void 0,J(X)},$=function(e){var t=e.childContext,n=e.mykey,r=e.children,i=f.useRef(n);return i.current!==n&&null!==i.current&&(t.current[i.current]=window.scrollY,i.current=null),f.useLayoutEffect((function(){i.current=n,void 0===t.current[n]&&(t.current[n]=0),window.scrollTo(window.scrollX,t.current[n])}),[n,i]),r},_=function(){var e,t=f.useState([]),n=Object(o.a)(t,2),r=n[0],i=n[1];J=i,f.useEffect((function(){return(Y=h()("https://murmuring-ocean-38436.herokuapp.com/",{secure:!0})).on("sendIndents",(function(e,t){if(void 0!==t){if(t<ae)return;ae=t,void 0!==le[t]&&le[t]()}Ee=Object(d.a)(e).reverse(),$e()})),Y.on("sendNotifications",(function(e){Pe=Object(d.a)(e).reverse(),rt()})),Y.emit("requestIndents",""),Y.emit("requestNotifications",""),function(){Y.disconnect()}}),[]);var a=f.useState(0),c=Object(o.a)(a,2),l=c[0],j=c[1],b=f.useRef(null),m=f.useRef([]),v=f.useRef(0);f.useEffect((function(){if(b.current){v.current=b.current.offsetHeight;var e,t=Object(u.a)(m.current);try{for(t.s();!(e=t.n()).done;){(0,e.value)(b.current.offsetHeight)}}catch(n){t.e(n)}finally{t.f()}}}),[b,null===b||void 0===b||null===(e=b.current)||void 0===e?void 0:e.offsetHeight]);var p=f.useRef({}),O=f.useMemo((function(){return function(e){return"Civilian"!==e.system}}),[]),x=f.useRef({}),y=f.useMemo((function(){return function(e){return"Civilian"===e.system}}),[]),g=f.useRef({});return Object(s.jsxs)("div",{children:[Object(s.jsx)(Ye,{childWrapper:$,childContext:g,selTab:l,setSelTab:j,appbarRef:b,children:[Object(s.jsx)("div",{label:"military",mykey:"defaultTab0",children:Object(s.jsx)(ve,{setSelTab:j,heightProvider:[v,m],transportPersistentStore:p.current,filter:O})},"defaultTab0"),Object(s.jsx)("div",{label:"civilian",mykey:"defaultTab1",children:Object(s.jsx)(ve,{setSelTab:j,heightProvider:[v,m],transportPersistentStore:x.current,filter:y})},"defaultTab1"),Object(s.jsx)("div",{label:"new indent",mykey:"defaultTab2",children:Object(s.jsx)(me,{id:0})},"defaultTab2"),Object(s.jsx)("div",{label:"notifications",mykey:"defaultTab3",children:Object(s.jsx)(ee,{setSelTab:j})},"defaultTab3")].concat(Object(d.a)(r.map((function(e,t){var n=e.type,r=e.params;return"detail"===n?Object(s.jsx)(ne,{setSelTab:j,mykey:r[0],label:ie(r[1]).name,removable:"true",removeCallback:function(e,t){Z(r[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},details:r,heightProvider:[v,m]},r[0]):"newindent"===n?Object(s.jsx)(me,{cloneID:r[1],mykey:r[0],label:"new indent",removable:"true",removeCallback:function(e,t){Z(r[0]);var n=Math.min(l,t-1);n>e&&j(n-1)},id:r[0]},r[0]):Object(s.jsx)("div",{})}))))}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("img",{src:A,width:"192px"})]})},ee=function(e){var t=e.setSelTab,n=Re(),r=f.useState(n),i=Object(o.a)(r,2),a=(i[0],i[1]);f.useEffect((function(){var e=tt(a);return function(){return nt(e)}}),[]);for(var c=[],u={},d=0;d<n.length;d++)!0===u[n[d].internalUID]?c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!1})):c.push(Object(l.a)(Object(l.a)({},n[d]),{},{latest:!0})),u[n[d].internalUID]=!0;return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{square:!0,children:Object(s.jsx)(Ie,{data:c,generator:function(e,n){return Te(e,e.internalUID,""+e.internalUID+n,t)},style:ge})})]})},te={},ne=function(e){var t=e.setSelTab,n=e.details,r=e.heightProvider,i=Object(o.a)(n,2),u=i[0],d=i[1];void 0===te[u]&&(te[u]=ie(d));var j=f.useState(te[u]),b=Object(o.a)(j,2),h=b[0],y=b[1],g=function(){var e=Object(c.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(d,te[u]);case 2:!0===e.sent&&alert("Indent saved successfully!");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{square:!0,children:Object(s.jsx)(Ie,{header:Object(s.jsx)(ye,{heightProvider:r,children:Ue.map((function(e,t){return Object(s.jsx)(v.a,{children:e.friendlyName},t)}))}),data:[h],generator:function(e){return Ce(e,e.internalUID)},style:ge})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(p.a,{variant:"outlined",onClick:function(){Se(h.internalUID),t(1/0)},children:"Copy"}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{children:Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)("div",{style:he,children:Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:"Additional Info",variant:"outlined",value:h.addInfo,onChange:function(e){te[u]=Object(l.a)(Object(l.a)({},te[u]),{},{addInfo:e.target.value}),y(te[u])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(x.a,{variant:"outlined",native:!0,value:h.status,onChange:function(e){te[u]=Object(l.a)(Object(l.a)({},te[u]),{},{status:e.target.value}),y(te[u])},children:Ne.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))})}),Object(s.jsx)("div",{style:{display:"inline-block",width:"1px"}}),Object(s.jsx)("div",{style:{display:"inline",verticalAlign:"middle"},children:Object(s.jsx)(p.a,{variant:"outlined",onClick:g,children:"Save"})})]})]})},re=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,se(t,n);case 2:return(r=e.sent)&&$e(),e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ie=function(e){var t=Ee.filter((function(t){return t.internalUID===e}));return 0===t.length?void 0:t[0]},ae=0,ce=0,le=[],se=function(){var e=Object(c.a)(a.a.mark((function e(t,n){var r,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce++,i=new Promise((function(e){return r=e})),le[ce]=r,Y.emit("writeDataStore",[t,n,ce]),e.next=6,i;case 6:if(ce!==ae){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),ue=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ce++,r=new Promise((function(e){return n=e})),le[ce]=n,Y.emit("appendDataStore",[t,ce]),e.next=6,r;case 6:if(ce!==ae){e.next=10;break}return e.abrupt("return",!0);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){return Ee},de=function(e,t){var n=e.system,r=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},i=Math.min(new Date(r(e.startDateTime)));if(i!==i)return["FAILED","Enter a valid start date"];var a=Math.min(new Date(r(e.endDateTime)));if(a!==a)return["FAILED","Enter a valid end date"];if(a<=i)return["FAILED","End date must be after start date"];var c=Math.min(i||1/0,a||1/0)-new Date;if(("Civilian"!==n&&c<14688e5||c<864e6)&&!0!==t)return["AUTHENTICATE","This indent is too late. Please discuss this indent manually with the transport clerk."];for(var l in e)if(!0!==qe[l].optional&&("string"!==typeof e[l]||""===e[l].trim()))return void 0!==He[l]?["FAILED",He[l]+" cannot be empty"]:["FAILED","Field cannot be empty"];return["SUCCESS"]},fe=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r){var i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!==typeof n){e.next=4;break}if("SUCCESS"===(i=n(t,r))[0]){e.next=4;break}return e.abrupt("return",i);case 4:return e.next=6,ue(t);case 6:if(!e.sent){e.next=10;break}return $e(),e.abrupt("return",["SUCCESS"]);case 10:return e.abrupt("return",["UNKNOWN"]);case 11:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),je=function(e){var t=e.prefill,n=e.fields,r=e.defaults,i=e.formPersistentStore,l=e.validator,j=[],b=void 0===i?{}:i;void 0===b.data&&(b.data=n.map((function(e){if("object"===typeof t){var n=t[e.name];if(void 0!==n){var r=ze[e.name];return"function"===typeof r?r(n):n}}return e.initialData})));for(var h=f.useState(b.data),m=Object(o.a)(h,2),v=m[0],x=m[1],y=v,g=function(){var e=D,t=n[e];j.push([v[e],function(t){(y=Object(d.a)(y))[e]=t,b.data=y,x(y)},t.initialData,t.name,t.friendlyName,t.fieldType,t.options])},D=0;D<n.length;D++)g();var C=function(){var e=n.map((function(e){return e.initialData}));b.data=e,x(e)},T=function(){var e=Object(c.a)(a.a.mark((function e(t){var n,i,c,s,d,f,b,h,m,v,p,O,x,y,g,D,T;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n={},i=Object(u.a)(r);try{for(i.s();!(c=i.n()).done;)s=c.value,d=s.name,f=s.initialData,n[d]=f}catch(a){i.e(a)}finally{i.f()}b=Object(u.a)(j);try{for(b.s();!(h=b.n()).done;)m=Object(o.a)(h.value,6),v=m[0],m[1],m[2],p=m[3],m[4],O=m[5],x=be[O],n[p]=x?x(v):v}catch(a){b.e(a)}finally{b.f()}return e.next=7,fe(n,l,t);case 7:y=e.sent,g=Object(o.a)(y,2),D=g[0],T=g[1],"SUCCESS"===D?(alert("Indent submitted successfully!"),C()):"FAILED"===D?alert(T):"AUTHENTICATE"===D&&alert("Not implemented.");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(s.jsxs)("form",{noValidate:!0,children:[Object(s.jsx)("div",{children:j.map((function(e,t){var n,r=Object(o.a)(e,7),i=r[0],a=r[1],c=(r[2],r[3],r[4]),l=r[5],u=r[6];return Object(s.jsx)("div",{style:he,children:"datetime"===l?Object(s.jsx)(O.a,{id:"datetime-local",fullWidth:!0,label:c,type:"datetime-local",variant:"outlined",value:i,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):"select"===l?Object(s.jsx)(O.a,{fullWidth:!0,select:!0,label:c,variant:"outlined",value:i,SelectProps:{native:!0},onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"},children:u.map((function(e,t){return Object(s.jsx)("option",{value:e,children:e},t)}))}):"multi"===l?Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:null!==(n=i[0])&&void 0!==n?n:"",onChange:function(e){return a([e.target.value])},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}}):Object(s.jsx)(O.a,{fullWidth:!0,multiline:!0,label:c,variant:"outlined",value:i,onChange:function(e){return a(e.target.value)},InputLabelProps:{shrink:!0},style:{maxWidth:"1000px"}})},t)}))}),Object(s.jsx)(p.a,{variant:"outlined",onClick:T,children:"submit"})]})},be={datetime:function(e){try{if(e.length>0)return e.slice(8,10)+"/"+e.slice(5,7)+"/"+e.slice(0,4)+" "+e.slice(11,16)}catch(t){}return e}},he={display:"flex",justifyContent:"center",paddingLeft:"12px",paddingRight:"12px",paddingTop:"5px",paddingBottom:"7px"},me=function(e){var t=e.id,n=e.cloneID;void 0===te[t]&&(te[t]={});var r=f.useMemo((function(){return void 0!==n?ie(n):void 0}),[n,Ae]);return Object(s.jsxs)("div",{style:ge,children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(je,{prefill:r,fields:Le,defaults:Ae,formPersistentStore:te[t],validator:de})]})},ve=function(e){var t,n=e.setSelTab,i=e.heightProvider,a=e.transportPersistentStore,c=e.filter;!0!==a.initialized&&(a.initialized=!0,a.data="",a.sort=null,a.up=!0,a.view="list",a.selDate=(t=new Date,t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t).toISOString().slice(0,10));var u=oe();f.useEffect((function(){var e=Qe((function(e){x.current=e,D.current=K.makeRanker(e),S(""!==C.current?D.current(C.current):e)}));return function(){return Ze(e)}}),[]);var j=f.useState(a.data),b=Object(o.a)(j,2),h=b[0],p=b[1],O=f.useRef(null),x=f.useRef(u),g=K.makeRanker(u),D=f.useRef(g),C=f.useRef(a.data),T=f.useState(""!==a.data?g(a.data):u),k=Object(o.a)(T,2),w=k[0],S=k[1],I=function(e){a.data=e,p(e),a.view="list",Q("list"),a.sort=null,L(null),a.up=!0,z(!0),null!==O.current&&(clearTimeout(O.current),O.current=null),O.current=setTimeout((function(){C.current=e,S(""!==e?D.current(e):x.current),O.current=null}),100)},M=f.useRef(null),E=f.useState(a.sort),R=Object(o.a)(E,2),P=R[0],L=R[1],A=f.useState(a.up),H=Object(o.a)(A,2),q=H[0],z=H[1],F=f.useMemo((function(){return w.filter((function(e){return"Hidden"!==e.status}))}),[w]),B=f.useMemo((function(){return F.filter(c)}),[F,c]),V=f.useMemo((function(){return null===P?B:B.map((function(e,t){return[e,t]})).sort((function(e,t){var n=Object(o.a)(e,2),r=n[0],i=n[1],a=Object(o.a)(t,2),c=a[0],l=a[1],s="function"===typeof Fe[P]?Fe[P]:function(e){return e},u=s(r[P]),d=s(c[P]);if(typeof u===typeof d&&u!==d){if("string"===typeof u){for(var f=0;f<Math.min(u.length,d.length);f++){var j=u.charCodeAt(f),b=d.charCodeAt(f);if(j!==b)return j-b}return u.length-d.length}if("number"===typeof u)return u-d}return i-l})).map((function(e){var t=Object(o.a)(e,2),n=t[0];t[1];return n}))}),[B,P]),J=f.useMemo((function(){return!0===q?V:Object(d.a)(V).reverse()}),[V,q]),Y=f.useState(a.view),X=Object(o.a)(Y,2),G=X[0],Q=X[1],Z=f.useState(a.selDate),$=Object(o.a)(Z,2),_=$[0],ee=$[1],te=f.useMemo((function(){return function(e){return function(t){var n=t.data,i=t.children,a=Object(r.a)(t,["data","children"]),c=n.system,u="gray";if("Confirmed"===n.status)u="green";else if("Recommended"===n.status)u="rgb(77, 77, 77)";else{var o=Math.min(Math.min(new Date(n.startDate))||1/0,Math.min(new Date(n.endDate))||1/0)-new Date;"Civilian"!==c&&o<14688e5||o<864e6?u="red":("Civilian"!==c&&o<18144e5||o<12096e5)&&(u="rgb(204, 204, 0)")}return Object(s.jsx)(W.a.Appointment,Object(l.a)(Object(l.a)({},a),{},{data:n,onClick:function(t){we(void 0,t.data.internalUID),e(1/0)},style:{backgroundColor:u},children:i}))}}(n)}),[n]);return f.useEffect((function(){null!==M.current&&M.current.addEventListener("keyup",(function(e){13!==e.charCode&&"Enter"!==e.key||e.stopPropagation()}),{capture:!0})}),[M]),Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)("div",{style:{marginLeft:"12px",marginRight:"12px"},children:Object(s.jsx)("div",{ref:M,children:Object(s.jsx)(N.a,{value:h,onChange:I,onCancelSearch:function(){return I("")},onRequestSearch:function(){"list"===G?(a.view="calendar",Q("calendar")):(a.view="list",Q("list"))},style:{margin:"auto",maxWidth:"1000px"},searchIcon:Object(s.jsx)(Oe,{icon:G})})})}),Object(s.jsx)("div",{style:{height:"12px"}}),Object(s.jsx)(m.a,{square:!0,children:"list"===G?Object(s.jsx)(Ie,{header:Object(s.jsx)(ye,{heightProvider:i,children:We.map((function(e,t){return Object(s.jsx)(v.a,{children:Object(s.jsx)(y.a,{active:P===e.name,direction:P===e.name&&!1===q?"desc":"asc",onClick:function(){return function(e){a.data="",p("");var t=e===P?!1===q&&(a.sort=null,L(null),!0):(a.sort=e,L(e),!0);a.up=t,z(t)}(e.name)},children:e.friendlyName})},t)}))}),data:J,generator:function(e){return De(e,e.internalUID,n)},style:ge}):Object(s.jsxs)(W.d,{data:B.map((function(e){var t=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)};return{startDate:t(e.startDateTime),endDate:t(e.endDateTime),title:e.name,internalUID:e.internalUID,status:e.status,system:e.system}})),children:[Object(s.jsx)(U.q,{defaultCurrentDate:_,onCurrentDateChange:function(e){a.selDate=e,ee(e)}}),Object(s.jsx)(W.c,{}),Object(s.jsx)(W.a,{appointmentComponent:te}),Object(s.jsx)(W.e,{}),Object(s.jsx)(W.b,{})]})})]})},pe="all ".concat(.075,"s linear"),Oe=function(e){var t=e.icon,n=f.useRef(!0),r=f.useRef(t),i=f.useState(t),a=Object(o.a)(i,2),c=a[0],l=a[1],u=f.useRef(null),d=f.useRef(null),j=f.useRef(null);return f.useEffect((function(){j.current=function(e,t){var n=function(){0===e.current.getBoundingClientRect().width&&t()};return e.current.addEventListener("transitionend",n),e.current.addEventListener("transitioncancel",n),function(t){"expand"===t?(e.current.classList.remove("collapsed"),e.current.classList.add("expanded")):"collapse"===t&&(e.current.classList.remove("expanded"),e.current.classList.add("collapsed"),n())}}(u,(function(){if(null!==d.current){var e=d.current;d.current=null,r.current=e,l(e),j.current("expand")}}))}),[u]),f.useEffect((function(){if(!0!==n.current){if(r.current===t)return d.current=null,void j.current("expand");d.current=t,j.current("collapse")}else n.current=!1}),[t]),Object(s.jsx)(g.a,{ref:u,style:{transition:pe},children:"list"===c?Object(s.jsx)(q.a,{}):Object(s.jsx)(F.a,{})})},xe=document.getElementById("barspacer"),ye=function(e){var t=e.children,n=Object(o.a)(e.heightProvider,2),r=n[0],i=n[1],a=f.useRef(null);f.useEffect((function(){var e=i.current,t=r.current,n=a.current.getBoundingClientRect().top-xe.getBoundingClientRect().bottom,c=function(){var e=Math.max(window.scrollY+t-n,0);d(e)};c();var l=e.push((function(e){t=e,c()}))-1;return window.addEventListener("scroll",c),function(){e[l]=function(){},window.removeEventListener("scroll",c)}}),[r,i]);var c=f.useState(0),l=Object(o.a)(c,2),u=l[0],d=l[1];return Object(s.jsx)(D.a,{children:Object(s.jsx)(C.a,{ref:a,style:{transform:"translate(0,"+u+"px)"},children:t})})},ge={font:"20px Arial, sans-serif"},De=function(e,t,n){var r="Civilian"===e.system?"Civilian":"Military",i=function(e){return e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)},a="white";if("Confirmed"===e.status)a="rgb(230, 255, 230)";else if("Recommended"===e.status)a="rgb(238, 238, 238)";else{var c=Math.min(Math.min(new Date(i(e.startDateTime)))||1/0,Math.min(new Date(i(e.endDateTime)))||1/0)-new Date;"Civilian"!==r&&c<14688e5||c<864e6?a="rgb(255, 230, 230)":("Civilian"!==r&&c<18144e5||c<12096e5)&&(a="rgb(255, 255, 204)")}return Object(s.jsxs)(C.a,{style:{backgroundColor:a},onClick:function(){we(e,t),n(1/0)},children:[Object(s.jsx)(v.a,{children:e.name}),Object(s.jsx)(v.a,{children:e.startDateTime}),Object(s.jsx)(v.a,{children:e.endDateTime}),Object(s.jsx)(v.a,{children:e.origin}),Object(s.jsx)(v.a,{children:e.destination}),Object(s.jsx)(v.a,{children:e.POC}),Object(s.jsx)(v.a,{children:e.POCPhone}),Object(s.jsx)(v.a,{children:e.vehicles}),Object(s.jsx)(v.a,{children:e.notes}),Object(s.jsx)(v.a,{children:e.addInfo}),Object(s.jsx)(v.a,{children:e.status})]},e.internalUID)},Ce=function(e,t){return Object(s.jsxs)(C.a,{children:[Object(s.jsx)(v.a,{children:e.name}),Object(s.jsx)(v.a,{children:e.startDateTime}),Object(s.jsx)(v.a,{children:e.endDateTime}),Object(s.jsx)(v.a,{children:e.origin}),Object(s.jsx)(v.a,{children:e.destination}),Object(s.jsx)(v.a,{children:e.POC}),Object(s.jsx)(v.a,{children:e.POCPhone}),Object(s.jsx)(v.a,{children:"Civilian"===e.system?"Civilian":"Military"}),Object(s.jsx)(v.a,{children:e.vehicles}),Object(s.jsx)(v.a,{children:e.notes})]},e.internalUID)},Te=function(e,t,n,r){return Object(s.jsx)(C.a,{onClick:function(){we(e,t),r(1/0)},children:Object(s.jsx)(v.a,{style:ke(e.latest),align:"center",children:e.title})},n)},ke=function(e){return!1===e?{color:"grey"}:{}},we=function(e,t){Q({type:"detail",params:[G,t]}),G++},Se=function(e){Q({type:"newindent",params:[G,e]}),G++},Ie=function(e){var t=e.data,n=e.generator,r=(e.style,e.header),i=e.tail;return Object(s.jsx)(T.a,{children:Object(s.jsxs)(k.a,{stickyHeader:!0,children:[r,Object(s.jsx)(w.a,{children:t.map(n)}),i]})})},Me=function(e){var t=[];return[function(e){return t.push(e)-1},function(e){e>-1&&e<t.length&&(t[e]=function(){})},function(){var n,r=Object(u.a)(t);try{for(r.s();!(n=r.n()).done;){(0,n.value)(e())}}catch(i){r.e(i)}finally{r.f()}}]},Ee=[],Re=function(){return Pe},Pe=[],Ne=["Pending","Submitted","Recommended","Confirmed","Hidden"],Le=[{name:"emailsNotify",initialData:[],friendlyName:"Email",fieldType:"multi",persistent:!0,optional:!0},{name:"system",initialData:"Military",friendlyName:"Vehicle type",fieldType:"select",options:["Military","Civilian"]},{name:"name",initialData:"",friendlyName:"Purpose"},{name:"startDateTime",initialData:"",friendlyName:"Start time",fieldType:"datetime"},{name:"endDateTime",initialData:"",friendlyName:"End time",fieldType:"datetime"},{name:"origin",initialData:"",friendlyName:"Reporting location"},{name:"destination",initialData:"",friendlyName:"Destination"},{name:"POC",initialData:"",friendlyName:"Contact person"},{name:"POCPhone",initialData:"",friendlyName:"Contact person number"},{name:"vehicles",initialData:"",friendlyName:"Vehicles"},{name:"notes",initialData:"",friendlyName:"Notes",optional:!0}],Ae=[{name:"addInfo",initialData:"",friendlyName:"Additional Info",optional:!0},{name:"status",initialData:"Pending",friendlyName:"Status"}],Ue=[].concat(Object(d.a)(Le.slice(2,-2)),[Le[1]],Object(d.a)(Le.slice(-2))),We=[].concat(Object(d.a)(Le.slice(2,-2)),Object(d.a)(Le.slice(-2)),Ae),He={},qe={},ze={startDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)},endDateTime:function(e){var t=new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16));return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t.toISOString().substring(0,16)}},Fe={startDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()},endDateTime:function(e){return new Date(e.slice(6,10)+"-"+e.slice(3,5)+"-"+e.slice(0,2)+"T"+e.slice(11,16)).getTime()}},Be=0,Ve=[].concat(Le,Ae);Be<Ve.length;Be++){var Je=Ve[Be];He[Je.name]=Je.friendlyName,qe[Je.name]={persistent:Je.persistent,optional:Je.optional}}var Ye=function(e){var t=e.childWrapper,n=e.childContext,r=e.children,i=e.selTab,a=e.setSelTab,c=e.appbarRef,u=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)("div",{style:{height:"48px",width:"48px"},children:Object(s.jsx)("img",{src:L,height:"48px",width:"48px"})})})],o=[Object(s.jsx)(S.a,{style:{opacity:1,minWidth:0,minHeight:0,padding:0},disableRipple:!0,selected:!0,label:Object(s.jsx)(I.a,{onClick:function(){Se(),a(1/0)},size:"small",className:"MuiTab-textColorInherit",children:Object(s.jsx)(V.a,{style:{color:"white"}})})})],f=t;return Object(s.jsxs)("div",{children:[Object(s.jsx)(M.a,{position:"sticky",style:{top:"env(safe-area-inset-top)"},ref:c,children:Object(s.jsx)(E.a,{variant:"scrollable",value:Math.min(i,r.length-1)+u.length,children:[].concat(u,Object(d.a)(r.map((function(e,t){var n=Object(l.a)(Object(l.a)({},e.props),{},{removeCallback:function(){return e.props.removeCallback(t,r.length)},onClick:function(){a(t)},active:t===Math.min(i,r.length-1),key:e.props.mykey});return Object(s.jsx)(Ke,Object(l.a)({},n))}))),o)})}),Object(s.jsx)("div",{children:Object(s.jsx)(f,{childContext:n,mykey:r[Math.min(i,r.length-1)].props.mykey,children:r[Math.min(i,r.length-1)]})})]})},Ke=function(e){var t=e.label,n=e.onClick,r=e.active,i=e.removable,a=e.removeCallback;return Object(s.jsx)(S.a,{style:{padding:0},disableRipple:!0,selected:!0,label:Object(s.jsxs)("span",{children:[Object(s.jsx)(S.a,{label:t,onClick:n,selected:!!r||null}),i?Object(s.jsx)(I.a,{size:"small",onClick:a,children:Object(s.jsx)(R.a,{style:{fill:"red"}})}):void 0]})})},Xe=Me(oe),Ge=Object(o.a)(Xe,3),Qe=Ge[0],Ze=Ge[1],$e=Ge[2],_e=Me(Re),et=Object(o.a)(_e,3),tt=et[0],nt=et[1],rt=et[2];j.render(Object(s.jsx)("div",{style:{textAlign:"center"},children:Object(s.jsx)(_,{})}),document.getElementById("root"))}},[[261,1,2]]]);
//# sourceMappingURL=main.7e6ad597.chunk.js.map