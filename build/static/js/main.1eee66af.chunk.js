(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{142:function(e,t,a){},160:function(e,t,a){},235:function(e,t,a){},236:function(e,t,a){},237:function(e,t,a){},238:function(e,t,a){},239:function(e,t,a){},240:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),u=(a(142),a(27)),o=a(243),i=a(23),l=a.n(i),d=a(71),m=a(28),p=a(49),b=a.n(p),f=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({url:"https://goldenbot-cvs.herokuapp.com/users",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=9;break}if(401!==t.status){e.next=8;break}throw new Error("Error! Unauthorized(401)");case 8:throw new Error("Error! Status ".concat(t.status));case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t},v=a(242),h=(a(160),a(8)),O=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),o=c[0],i=c[1],p=j(),b=function(){var e=Object(m.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,a=t.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{key:"key_".concat(t),username:e.username&&e.username.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),first_name:e.first_name&&e.first_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_name:e.last_name&&e.last_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,"")})})),n=a.filter((function(e){return"Group"!==e.first_name&&"Telegram"!==e.first_name})),r(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:i(!1);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),o?Object(h.jsx)("div",{children:"Loading"}):Object(h.jsx)("div",{className:"ListUserData",children:Object(h.jsx)(v.a,{dataSource:a,columns:[{title:"Telegram Id",dataIndex:"telegram_id",key:"telegram_id",responsive:["lg"]},{title:"Username",dataIndex:"username",key:"username",defaultSortOrder:"ascend",sorter:function(e,t){return e.username?t.username?e.username.localeCompare(t.username):-1:1}},{title:"First Name",dataIndex:"first_name",key:"first_name",defaultSortOrder:"descend",sorter:function(e,t){return e.first_name?t.first_name?e.first_name.localeCompare(t.first_name):-1:1}},{title:"Last Name",dataIndex:"last_name",key:"last_name",defaultSortOrder:"descend",sorter:function(e,t){return e.last_name?t.last_name?e.last_name.localeCompare(t.last_name):-1:1},responsive:["lg"]},{title:"Activity",dataIndex:"activity",key:"activity",defaultSortOrder:"descend",sorter:function(e,t){return e.activity-t.activity},responsive:["lg"]},{title:"Last activity",dataIndex:"last_seen_date",key:"last_seen_date",sorter:function(e,t){return e.last_seen_date?t.last_seen_date?e.last_seen_date.localeCompare(t.last_seen_date):-1:1}},{title:"Last meetup",dataIndex:"last_meetup",key:"last_meetup",sorter:function(e,t){return e.last_meetup?t.last_meetup?e.last_meetup.localeCompare(t.last_meetup):-1:1}}],pagination:{position:["bottomCenter"],defaultPageSize:"20",hideOnSinglePage:!0},size:p?"small":"large"})})},g=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={last_meetup:"2021-07-09",id:t},e.next=3,b()({url:"https://goldenbot-cvs.herokuapp.com/users/meetup",method:"POST",data:a});case 3:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=10;break}if(401!==n.status){e.next=9;break}throw new Error("Error! Unauthorized(401)");case 9:throw new Error("Error! Status ".concat(n.status));case 10:return e.abrupt("return",n.data);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=a(245),_=(a(235),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),o=c[0],i=c[1],p=j(),b=function(){var e=Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f();case 3:t=e.sent,a=t.map((function(e,t){return Object(d.a)(Object(d.a)({},e),{},{key:"key_".concat(t),username:e.username&&e.username.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),first_name:e.first_name&&e.first_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_name:e.last_name&&e.last_name.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),last_meetup:e.last_meetup&&"Present"})})),r(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:i(!1);case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),O=[{title:"Username",dataIndex:"username",key:"username",defaultSortOrder:"ascend",sorter:function(e,t){return e.username?t.username?e.username.localeCompare(t.username):-1:1}},{title:"First Name",dataIndex:"first_name",key:"first_name",defaultSortOrder:"descend",sorter:function(e,t){return e.first_name?t.first_name?e.first_name.localeCompare(t.first_name):-1:1}},{title:"Last Name",dataIndex:"last_name",key:"last_name",defaultSortOrder:"descend",sorter:function(e,t){return e.last_name?t.last_name?e.last_name.localeCompare(t.last_name):-1:1},responsive:["lg"]},{title:"Check",key:"action",width:p?50:100,render:function(e,t){return Object(h.jsx)(x.a,{defaultChecked:t.last_meetup,onClick:function(){return function(e){var t=a.findIndex((function(t){return t.id==e})),n=a;n[t].last_meetup="2021-07-09",g(e),r(n)}(t.id,t.last_meetup)}})},sorter:function(e,t){return e.last_meetup?t.last_meetup?e.last_meetup.localeCompare(t.last_meetup):-1:1}}];return Object(n.useEffect)((function(){b()}),[]),o?Object(h.jsx)("div",{children:"Loading"}):Object(h.jsx)("div",{className:"MeetingAttendee",children:Object(h.jsx)(v.a,{dataSource:a,columns:O,pagination:{position:["bottomCenter"],defaultPageSize:"20",hideOnSinglePage:!0},size:p?"small":"large"})})}),w=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b()({url:"https://goldenbot-cvs.herokuapp.com/images",method:"GET"});case 2:if(!(200!==(t=e.sent).status&201!==t.status)){e.next=9;break}if(401!==t.status){e.next=8;break}throw new Error("Error! Unauthorized(401)");case 8:throw new Error("Error! Status ".concat(t.status));case 9:return e.abrupt("return",t.data);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(e){return Object(h.jsx)("div",{className:"images__container",children:Object(h.jsx)("img",{onClick:function(){e.setSelected(e.index),e.setShowOverlay(!0)},id:e.image.id,src:e.image.file_s3,alt:e.image.id,width:"100%"},e.index)})},y=a(77),F=a(54),D=a(69),C=function(){var e=Object(m.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t},e.next=3,b()({url:"https://goldenbot-cvs.herokuapp.com/users/single",method:"POST",data:a});case 3:if(!(200!==(n=e.sent).status&201!==n.status)){e.next=10;break}if(401!==n.status){e.next=9;break}throw new Error("Error! Unauthorized(401)");case 9:throw new Error("Error! Status ".concat(n.status));case 10:return e.abrupt("return",n.data[0]);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(a(236),function(e){var t=Object(n.useRef)(!1),a=Object(n.useState)(),r=Object(u.a)(a,2),s=r[0],c=r[1],o=Object(n.useState)(!0),i=Object(u.a)(o,2),d=i[0],p=i[1],b=function(){var t=Object(m.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,C(e.images[e.selected].author_id);case 3:a=t.sent,c(a),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:p(!1);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[e.selected]);var f=function(){e.setSelected(e.selected+1),p(!0)},j=function(){e.selected>0&&(e.setSelected(e.selected-1),p(!0))},v=function(e){var t=document.getElementById("closeButton");e?(t.style.visibility="hidden",t.style.opacity=0):(t.style.visibility="visible",t.style.opacity=1)},O=Object(n.useCallback)((function(a){a.preventDefault();var n=a.key.toLowerCase(),r=document.getElementById("nextButton"),s=document.getElementById("previousButton");!1===t.current&&(t.current=!0,"arrowdown"===n||"arrowright"===n?(r.style.backgroundColor="rgba(255,255,255,.15)",f(),setTimeout((function(){r.style.backgroundColor="rgba(255,255,255, 0)"}),100)):"arrowup"===n||"arrowleft"===n?(s.style.backgroundColor="rgba(255,255,255,.15)",j(),setTimeout((function(){s.style.backgroundColor="rgba(255,255,255, 0)"}),100)):"escape"===n&&e.setShowOverlay(!1),setTimeout((function(){t.current=!1}),100))}),[f,j,e.setShowOverlay]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",O),function(){document.removeEventListener("keydown",O)}}),[O]),Object(h.jsxs)("div",{className:"overlay__overlay",children:[Object(h.jsx)("div",{className:"overlay__background",onClick:function(){e.setShowOverlay(!1)}}),Object(h.jsx)("div",{className:"overlay__columnLeft",id:"previousButton",onClick:j,children:Object(h.jsx)(y.a,{})}),Object(h.jsx)("div",{className:"overlay__columnRight",id:"nextButton",onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},onClick:f,children:Object(h.jsx)(F.a,{})}),Object(h.jsx)("div",{className:"overlay__closeButton",id:"closeButton",onClick:function(){e.setShowOverlay(!1)},children:Object(h.jsx)(D.a,{})}),Object(h.jsxs)("div",{className:"overlay__pictureContainer",children:[Object(h.jsx)("img",{className:"overlay__picture",src:e.images[e.selected].file_s3,alt:e.selected}),!d&&(s&&void 0!=s.username?Object(h.jsx)("div",{className:"overlay__tags",children:Object(h.jsx)("span",{children:s.username})}):s&&void 0!=s.first_name?Object(h.jsx)("div",{className:"overlay__tags",children:Object(h.jsx)("span",{children:s.first_name})}):s&&void 0!=s.telegram_id?Object(h.jsx)("div",{className:"overlay__tags",children:Object(h.jsxs)("span",{children:["id #",s.telegram_id]})}):Object(h.jsx)("div",{className:"overlay__tags error",children:Object(h.jsx)("span",{children:"USER NOT FOUND"})}))]})]})}),S=(a(237),function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)([]),c=Object(u.a)(s,2),o=c[0],i=c[1],d=Object(n.useState)(!1),p=Object(u.a)(d,2),b=p[0],f=p[1],j=Object(n.useState)(null),v=Object(u.a)(j,2),O=v[0],g=v[1],x=function(){var e=Object(m.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w();case 3:t=e.sent,i(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:r(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x()}),[]),a?Object(h.jsx)("div",{children:"Loading"}):Object(h.jsxs)("div",{className:"gallery__main",children:[b&&Object(h.jsx)(E,{images:o,selected:O,setSelected:g,setShowOverlay:f}),o.map((function(e,t){return Object(h.jsx)(k,{image:e,index:t,setSelected:g,setShowOverlay:f},t)}))]})}),N=a(133),I=a(244),B=a(46),z=a(246),L=(a(238),function(e){var t=Object(n.useState)(void 0),a=Object(u.a)(t,2),r=a[0],s=a[1],c=function(){"COSMO"===r?e.setHasAccess(!0):(s(null),document.getElementById("password").value=null,N.a.error({message:"Wrong password"}))},o=Object(n.useCallback)((function(e){"enter"===e.key.toLowerCase()&&c()}),[e,r]);return Object(n.useEffect)((function(){return document.addEventListener("keydown",o),function(){document.removeEventListener("keydown",o)}}),[o]),Object(h.jsxs)("div",{className:"containerLogin",children:[Object(h.jsx)("span",{className:"Title",children:"Golden Circle"}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"containerInput",children:Object(h.jsx)(I.a.Password,{id:"password",onChange:function(e){s(e.target.value)},placeholder:"confirm with enter",className:"passwordInput"})}),Object(h.jsx)(B.a,{className:"passwordButton",shape:"circle",icon:Object(h.jsx)(z.a,{}),onClick:c}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{})]})]})}),T=(a(239),o.a.TabPane),U=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=j();return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:a?Object(h.jsx)("div",{className:"App-Container",children:Object(h.jsxs)(o.a,{defaultActiveKey:"1",centered:s,children:[Object(h.jsx)(T,{tab:"User in Database",children:Object(h.jsx)(O,{})},"1"),Object(h.jsx)(T,{tab:s?"Meetup":"Meetup attendees",children:Object(h.jsx)(_,{})},"2"),Object(h.jsx)(T,{tab:s?"Images":"User Images",children:Object(h.jsx)(S,{})},"3")]})}):Object(h.jsx)(L,{setHasAccess:r})})})};c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(U,{})}),document.getElementById("root"))}},[[240,1,2]]]);
//# sourceMappingURL=main.1eee66af.chunk.js.map