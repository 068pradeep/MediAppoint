"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[564],{3321:function(e,t,n){n(2791);var i=n(184);t.Z=function(){return(0,i.jsx)("h2",{className:"nothing flex-center",children:"Nothing to show"})}},6794:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(9439),o=n(2791),r=n(6355),l=n(3495),s=n(1087),c=n(456),d=n(184),a=function(){var e=(0,o.useState)(localStorage.getItem("token")||""),t=(0,i.Z)(e,2),n=t[0],a=(t[1],(0,o.useState)(localStorage.getItem("token")?(0,c.Z)(localStorage.getItem("token")):"")),u=(0,i.Z)(a,2),h=u[0];u[1];return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("footer",{children:[(0,d.jsxs)("div",{className:"footer",children:[(0,d.jsxs)("div",{className:"footer-links",children:[(0,d.jsx)("h3",{children:"Links"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/",children:"Home"})}),n&&!(h.isDoctor||h.isAdmin)&&(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/doctors",children:"Doctors"})}),n&&h.isAdmin&&(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/dashboard/users",children:"Dashboard"})}),n&&!h.isAdmin&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/appointments",children:"Appointments"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/notifications",children:"Notifications"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,d.jsx)("li",{children:(0,d.jsx)(l.fO,{to:"/#contact",children:"Contact Us"})}),(0,d.jsx)("li",{children:(0,d.jsx)(s.OL,{to:"/profile",children:"Profile"})})]})]})]}),(0,d.jsxs)("div",{className:"social",children:[(0,d.jsx)("h3",{children:"Social links"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{className:"facebook",children:(0,d.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,d.jsx)(r.tBk,{})})}),(0,d.jsx)("li",{className:"youtube",children:(0,d.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,d.jsx)(r.V2E,{})})}),(0,d.jsx)("li",{className:"instagram",children:(0,d.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,d.jsx)(r.Zf_,{})})})]})]})]}),(0,d.jsxs)("div",{className:"footer-bottom",children:["Made by Night Owl \xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(9439),o=n(2791),r=n(7689),l=n(1087),s=n(3495),c=n(9434),d=n(5318),a=n(3853),u=n(1213),h=n(456),j=n(184),x=function(){var e=(0,o.useState)(!1),t=(0,i.Z)(e,2),n=t[0],x=t[1],v=(0,c.I0)(),p=(0,r.s0)(),m=(0,o.useState)(localStorage.getItem("token")||""),f=(0,i.Z)(m,2),g=f[0],b=(f[1],(0,o.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),k=(0,i.Z)(b,2),Z=k[0];k[1];return(0,j.jsxs)("header",{children:[(0,j.jsxs)("nav",{className:n?"nav-active":"",children:[(0,j.jsx)("h2",{className:"nav-logo",children:(0,j.jsx)(l.OL,{to:"/",children:"Medi Appoint"})}),(0,j.jsxs)("ul",{className:"nav-links",children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/",children:"Home"})}),g&&!(Z.isDoctor||Z.isAdmin)&&(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/doctors",children:"Doctors"})}),g&&Z.isAdmin&&(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/dashboard/users",children:"Dashboard"})}),g&&!Z.isAdmin&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/appointments",children:"Appointments"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/notifications",children:"Notifications"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,j.jsx)("li",{children:(0,j.jsx)(s.fO,{to:"/#contact",children:"Contact Us"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{to:"/profile",children:"Profile"})})]}),g?(0,j.jsx)("li",{children:(0,j.jsx)("span",{className:"btn",onClick:function(){v((0,d.ps)({})),localStorage.removeItem("token"),p("/login")},children:"Logout"})}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/login",children:"Login"})}),(0,j.jsx)("li",{children:(0,j.jsx)(l.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,j.jsxs)("div",{className:"menu-icons",children:[!n&&(0,j.jsx)(a.cur,{className:"menu-open",onClick:function(){x(!0)}}),n&&(0,j.jsx)(u.ySC,{className:"menu-close",onClick:function(){x(!1)}})]})]})}},564:function(e,t,n){n.r(t);var i=n(4165),o=n(5861),r=n(9439),l=n(2791),s=n(3321),c=n(6794),d=n(3841),a=n(4971),u=n(5318),h=n(3200),j=n(9434),x=n(456),v=n(3263),p=n(3402),m=(n(5108),n(184));t.default=function(){var e,t=(0,l.useState)([]),n=(0,r.Z)(t,2),f=n[0],g=n[1],b=(0,j.I0)(),k=(0,j.v9)((function(e){return e.root})).loading,Z=(0,x.Z)(localStorage.getItem("token")).userId,I=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b((0,u.K4)(!0)),e.next=4,(0,a.Z)("/api/appointment/getallappointments?search=".concat(Z));case 4:n=e.sent,g(n),b((0,u.K4)(!1)),e.next=11;break;case 9:e.prev=9,e.t0=e.catch(0);case 11:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();(0,l.useEffect)((function(){I()}),[]);var N=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.promise(v.Z.put("/api/appointment/completed",{appointid:null===t||void 0===t?void 0:t._id,doctorId:null===t||void 0===t||null===(n=t.doctorId)||void 0===n?void 0:n._id,doctorname:"".concat(null===t||void 0===t||null===(o=t.doctorId)||void 0===o?void 0:o.firstname," ").concat(null===t||void 0===t||null===(r=t.doctorId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appointment booked successfully",error:"Unable to book appointment",loading:"Booking appointment..."});case 3:I(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=(0,o.Z)((0,i.Z)().mark((function e(t){var n,o,r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.ZP.promise(v.Z.put("/api/appointment/reject",{appointid:null===t||void 0===t?void 0:t._id,doctorId:null===t||void 0===t||null===(n=t.doctorId)||void 0===n?void 0:n._id,doctorname:"".concat(null===t||void 0===t||null===(o=t.doctorId)||void 0===o?void 0:o.firstname," ").concat(null===t||void 0===t||null===(r=t.doctorId)||void 0===r?void 0:r.lastname)},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Appoinment rejected",error:"Unable to reject",loading:"Rejecting appointment..."});case 3:I(),e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(d.Z,{}),k?(0,m.jsx)(h.Z,{}):(0,m.jsxs)("section",{className:"container notif-section",children:[(0,m.jsx)("h2",{className:"page-heading",children:"Your Appointments"}),f.length>0?(0,m.jsx)("div",{className:"appointments",children:(0,m.jsxs)("table",{children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{children:"S.No"}),(0,m.jsx)("th",{children:"Doctor"}),(0,m.jsx)("th",{children:"Patient"}),(0,m.jsx)("th",{children:"Appointment Date"}),(0,m.jsx)("th",{children:"Appointment Time"}),(0,m.jsx)("th",{children:"Booking Date"}),(0,m.jsx)("th",{children:"Booking Time"}),(0,m.jsx)("th",{children:"Status"}),Z===(null===(e=f[0].doctorId)||void 0===e?void 0:e._id)?(0,m.jsx)("th",{children:"Action"}):(0,m.jsx)(m.Fragment,{})]})}),(0,m.jsx)("tbody",{children:null===f||void 0===f?void 0:f.map((function(e,t){var n,i,o,r,l;return(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:t+1}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(n=e.doctorId)||void 0===n?void 0:n.firstname)+" "+(null===e||void 0===e||null===(i=e.doctorId)||void 0===i?void 0:i.lastname)}),(0,m.jsx)("td",{children:(null===e||void 0===e||null===(o=e.userId)||void 0===o?void 0:o.firstname)+" "+(null===e||void 0===e||null===(r=e.userId)||void 0===r?void 0:r.lastname)}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.date}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.time}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.createdAt.split("T")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.updatedAt.split("T")[1].split(".")[0]}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),Z===(null===e||void 0===e||null===(l=e.doctorId)||void 0===l?void 0:l._id)?(0,m.jsxs)("td",{children:[(0,m.jsx)("button",{className:"btn user-btn accept-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)||"Rejected"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status)||"Rejected"===(null===e||void 0===e?void 0:e.status),onClick:function(){return N(e)},children:"Complete"}),"|||",(0,m.jsx)("button",{className:"btn user-btn reject-btn ".concat("Completed"===(null===e||void 0===e?void 0:e.status)||"Rejected"===(null===e||void 0===e?void 0:e.status)?"disable-btn":""),disabled:"Completed"===(null===e||void 0===e?void 0:e.status)||"Rejected"===(null===e||void 0===e?void 0:e.status),onClick:function(){return A(e)},children:"Reject"})]}):(0,m.jsx)(m.Fragment,{})]},null===e||void 0===e?void 0:e._id)}))})]})}):(0,m.jsx)(s.Z,{})]}),(0,m.jsx)(c.Z,{})]})}},5108:function(){}}]);
//# sourceMappingURL=564.f7a45637.chunk.js.map