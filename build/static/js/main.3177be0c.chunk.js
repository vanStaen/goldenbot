(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{139:function(e,t,a){},157:function(e,t,a){},232:function(e,t,a){},233:function(e,t,a){},234:function(e,t,a){},235:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),u=a(26),s=a.n(u),c=(a(139),a(41)),o=a(239),i=a(34),l=a.n(i),d=a(69),m=a(48),f=a(80),p=a.n(f),F=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p()({url:"https://goldenbot-cvs.herokuapp.com/users",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=9;break}if(401!==t.status){e.next=8;break}throw new Error("Error! Unauthorized(401)");case 8:throw new Error("Error! Status ".concat(t.status));case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=a(238),b=(a(157),a(18)),D=function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(!0),s=Object(c.a)(u,2),o=s[0],i=s[1],f=function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:t=e.sent,a=t.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{key:"key_".concat(t),username:e.username&&e.username.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),first_name:e.first_name&&e.first_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_name:e.last_name&&e.last_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")})})),r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[]),o?Object(b.jsx)("div",{children:"Loading"}):Object(b.jsx)("div",{className:"ListUserData",children:Object(b.jsx)(j.a,{dataSource:a,columns:[{title:"Telegram Id",dataIndex:"telegram_id",key:"telegram_id"},{title:"Username",dataIndex:"username",key:"username",defaultSortOrder:"ascend",sorter:function(e,t){return e.username?t.username?e.username.localeCompare(t.username):-1:1}},{title:"First Name",dataIndex:"first_name",key:"first_name",defaultSortOrder:"descend",sorter:function(e,t){return e.first_name?t.first_name?e.first_name.localeCompare(t.first_name):-1:1}},{title:"Last Name",dataIndex:"last_name",key:"last_name",defaultSortOrder:"descend",sorter:function(e,t){return e.last_name?t.last_name?e.last_name.localeCompare(t.last_name):-1:1}},{title:"Activity",dataIndex:"activity",key:"activity",defaultSortOrder:"descend",sorter:function(e,t){return e.activity-t.activity}},{title:"Last activity",dataIndex:"last_seen_date",key:"last_seen_date",sorter:function(e,t){return e.last_seen_date.localeCompare(t.last_seen_date)}},{title:"Last meetup",dataIndex:"last_meetup",key:"last_meetup",sorter:function(e,t){return e.last_meetup?t.last_meetup?e.last_meetup.localeCompare(t.last_meetup):-1:1}}],pagination:{position:["bottomCenter"],defaultPageSize:"20",hideOnSinglePage:!0}})})},O=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={last_meetup:"2021-07-09",id:t},e.next=3,p()({url:"https://goldenbot-cvs.herokuapp.com/users/meetup",method:"POST",data:a});case 3:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=10;break}if(401!==n.status){e.next=9;break}throw new Error("Error! Unauthorized(401)");case 9:throw new Error("Error! Status ".concat(n.status));case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=a(241),x=(a(232),function(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),a=t[0],r=t[1],u=Object(n.useState)(!0),s=Object(c.a)(u,2),o=s[0],i=s[1],f=function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,F();case 3:t=e.sent,a=t.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{key:"key_".concat(t),username:e.username&&e.username.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),first_name:e.first_name&&e.first_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_name:e.last_name&&e.last_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_meetup:e.last_meetup&&"Present"})})),r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=[{title:"Username",dataIndex:"username",key:"username",defaultSortOrder:"ascend",sorter:function(e,t){return e.username?t.username?e.username.localeCompare(t.username):-1:1}},{title:"First Name",dataIndex:"first_name",key:"first_name",defaultSortOrder:"descend",sorter:function(e,t){return e.first_name?t.first_name?e.first_name.localeCompare(t.first_name):-1:1}},{title:"Last Name",dataIndex:"last_name",key:"last_name",defaultSortOrder:"descend",sorter:function(e,t){return e.last_name?t.last_name?e.last_name.localeCompare(t.last_name):-1:1}},{title:"Check",key:"action",width:100,render:function(e,t){return Object(b.jsx)(_.a,{defaultChecked:t.last_meetup,onClick:function(){return function(e){var t=a.findIndex((function(t){return t.id==e})),n=a;n[t].last_meetup="2021-07-09",O(e),r(n)}(t.id,t.last_meetup)}})},sorter:function(e,t){return e.last_meetup?t.last_meetup?e.last_meetup.localeCompare(t.last_meetup):-1:1}}];return Object(n.useEffect)((function(){f()}),[]),o?Object(b.jsx)("div",{children:"Loading"}):Object(b.jsx)("div",{className:"MeetingAttendee",children:Object(b.jsx)(j.a,{dataSource:a,columns:p,pagination:{position:["bottomCenter"],defaultPageSize:"20",hideOnSinglePage:!0}})})}),h=a(131),v=a(240),C=a(45),k=a(242),g=(a(233),function(e){var t=Object(n.useState)(void 0),a=Object(c.a)(t,2),r=a[0],u=a[1],s=function(){"COSMO"===r?e.setHasAccess(!0):(u(null),document.getElementById("password").value=null,h.a.error({message:"Wrong password"}))},o=Object(n.useCallback)((function(e){"enter"===e.key.toLowerCase()&&s()}),[e,r]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}),[o]),Object(b.jsxs)("div",{className:"containerLogin",children:[Object(b.jsx)("span",{className:"Title",children:"Golden Circle"}),Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{className:"containerInput",children:Object(b.jsx)(v.a.Password,{id:"password",onChange:function(e){u(e.target.value)},placeholder:"confirm with enter",className:"passwordInput"})}),Object(b.jsx)(C.a,{className:"passwordButton",shape:"circle",icon:Object(b.jsx)(k.a,{}),onClick:s}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{})]})]})}),y=(a(234),o.a.TabPane),w=function(){var e=Object(n.useState)(!0),t=Object(c.a)(e,2),a=t[0],r=t[1];return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)("header",{className:"App-header",children:a?Object(b.jsx)("div",{className:"App-Container",children:Object(b.jsxs)(o.a,{defaultActiveKey:"2",children:[Object(b.jsx)(y,{tab:"User in Database",children:Object(b.jsx)(D,{})},"1"),Object(b.jsx)(y,{tab:"Meetup attendees",children:Object(b.jsx)(x,{})},"2")]})}):Object(b.jsx)(g,{setHasAccess:r})})})};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.3177be0c.chunk.js.map