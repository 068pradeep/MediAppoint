"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[702],{6794:function(e,n,r){r.d(n,{Z:function(){return d}});var t=r(9439),s=r(2791),i=r(6355),a=r(3495),o=r(1087),c=r(456),l=r(184),d=function(){var e=(0,s.useState)(localStorage.getItem("token")||""),n=(0,t.Z)(e,2),r=n[0],d=(n[1],(0,s.useState)(localStorage.getItem("token")?(0,c.Z)(localStorage.getItem("token")):"")),u=(0,t.Z)(d,2),h=u[0];u[1];return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("footer",{children:[(0,l.jsxs)("div",{className:"footer",children:[(0,l.jsxs)("div",{className:"footer-links",children:[(0,l.jsx)("h3",{children:"Links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/",children:"Home"})}),r&&!(h.isDoctor||h.isAdmin)&&(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/doctors",children:"Doctors"})}),r&&h.isAdmin&&(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/dashboard/users",children:"Dashboard"})}),r&&!h.isAdmin&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/appointments",children:"Appointments"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/notifications",children:"Notifications"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,l.jsx)("li",{children:(0,l.jsx)(a.fO,{to:"/#contact",children:"Contact Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.OL,{to:"/profile",children:"Profile"})})]})]})]}),(0,l.jsxs)("div",{className:"social",children:[(0,l.jsx)("h3",{children:"Social links"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{className:"facebook",children:(0,l.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.tBk,{})})}),(0,l.jsx)("li",{className:"youtube",children:(0,l.jsx)("a",{href:"https://www.youtube.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.V2E,{})})}),(0,l.jsx)("li",{className:"instagram",children:(0,l.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:(0,l.jsx)(i.Zf_,{})})})]})]})]}),(0,l.jsxs)("div",{className:"footer-bottom",children:["Made by Night Owl \xa9 ",(new Date).getFullYear()]})]})})}},3841:function(e,n,r){r.d(n,{Z:function(){return x}});var t=r(9439),s=r(2791),i=r(7689),a=r(1087),o=r(3495),c=r(9434),l=r(5318),d=r(3853),u=r(1213),h=r(456),m=r(184),x=function(){var e=(0,s.useState)(!1),n=(0,t.Z)(e,2),r=n[0],x=n[1],p=(0,c.I0)(),j=(0,i.s0)(),f=(0,s.useState)(localStorage.getItem("token")||""),g=(0,t.Z)(f,2),y=g[0],v=(g[1],(0,s.useState)(localStorage.getItem("token")?(0,h.Z)(localStorage.getItem("token")):"")),b=(0,t.Z)(v,2),N=b[0];b[1];return(0,m.jsxs)("header",{children:[(0,m.jsxs)("nav",{className:r?"nav-active":"",children:[(0,m.jsx)("h2",{className:"nav-logo",children:(0,m.jsx)(a.OL,{to:"/",children:"Medi Appoint"})}),(0,m.jsxs)("ul",{className:"nav-links",children:[(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/",children:"Home"})}),y&&!(N.isDoctor||N.isAdmin)&&(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/doctors",children:"Doctors"})}),y&&N.isAdmin&&(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/dashboard/users",children:"Dashboard"})}),y&&!N.isAdmin&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/appointments",children:"Appointments"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/notifications",children:"Notifications"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/applyfordoctor",children:"Apply for doctor"})}),(0,m.jsx)("li",{children:(0,m.jsx)(o.fO,{to:"/#contact",children:"Contact Us"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{to:"/profile",children:"Profile"})})]}),y?(0,m.jsx)("li",{children:(0,m.jsx)("span",{className:"btn",onClick:function(){p((0,l.ps)({})),localStorage.removeItem("token"),j("/login")},children:"Logout"})}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{className:"btn",to:"/login",children:"Login"})}),(0,m.jsx)("li",{children:(0,m.jsx)(a.OL,{className:"btn",to:"/register",children:"Register"})})]})]})]}),(0,m.jsxs)("div",{className:"menu-icons",children:[!r&&(0,m.jsx)(d.cur,{className:"menu-open",onClick:function(){x(!0)}}),r&&(0,m.jsx)(u.ySC,{className:"menu-close",onClick:function(){x(!1)}})]})]})}},3702:function(e,n,r){r.r(n);var t=r(4165),s=r(5861),i=r(4942),a=r(1413),o=r(9439),c=r(2791),l=(r(1062),r(3263)),d=r(3402),u=r(7689),h=r(3841),m=r(6794),x=r(184);l.Z.defaults.baseURL={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SERVER_DOMAIN;n.default=function(){var e=(0,u.s0)(),n=(0,c.useState)({specialization:"",experience:"",fees:"",day:"",startTime:"",endTime:""}),r=(0,o.Z)(n,2),p=r[0],j=r[1],f=function(e){var n=e.target,r=n.name,t=n.value;return j((0,a.Z)((0,a.Z)({},p),{},(0,i.Z)({},r,t)))},g=function(){var n=(0,s.Z)((0,t.Z)().mark((function n(r){var s,i,a,o,c,u,h;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r.preventDefault(),s=["monday","tuesday","wednesday","thursday","friday","saturday","sunday"],i=p.day.toLowerCase().split(" "),a=!1,i.forEach((function(e){s.includes(e)||(a=!0)})),!a){n.next=7;break}return n.abrupt("return",d.ZP.error("Enter day in the specified format"));case 7:if(o=p.startTime,c=p.endTime,u=new Date("2000-01-01T".concat(o)),h=new Date("2000-01-01T".concat(c)),!(u>=h)){n.next=13;break}return n.abrupt("return",d.ZP.error("Please enter correct time"));case 13:return n.prev=13,n.next=16,d.ZP.promise(l.Z.post("/api/doctor/applyfordoctor",{formDetails:p},{headers:{Authorization:"Bearer ".concat(localStorage.getItem("token"))}}),{success:"Doctor application sent successfully",error:"Unable to send Doctor application",loading:"Sending doctor application..."});case 16:e("/"),n.next=22;break;case 19:return n.prev=19,n.t0=n.catch(13),n.abrupt("return",n.t0);case 22:case"end":return n.stop()}}),n,null,[[13,19]])})));return function(e){return n.apply(this,arguments)}}();return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(h.Z,{}),(0,x.jsx)("section",{className:"register-section flex-center apply-doctor",id:"contact",children:(0,x.jsxs)("div",{className:"register-container flex-center contact",children:[(0,x.jsx)("h2",{className:"form-heading",children:"Apply for Doctor"}),(0,x.jsxs)("form",{className:"register-form ",children:[(0,x.jsx)("input",{type:"text",name:"specialization",className:"form-input",placeholder:"Enter your specialization",value:p.specialization,onChange:f,required:!0}),(0,x.jsx)("input",{type:"number",name:"experience",className:"form-input",placeholder:"Enter your experience (in years)",value:p.experience,onChange:f,required:!0}),(0,x.jsx)("input",{type:"number",name:"fees",className:"form-input",placeholder:"Enter your fees (in Rupees)",value:p.fees,onChange:f,required:!0}),(0,x.jsx)("input",{type:"text",name:"day",className:"form-input",placeholder:"Enter day in Formate:monday tuesday",value:p.day,onChange:f,required:!0}),(0,x.jsx)("label",{children:" start Time"}),(0,x.jsx)("input",{type:"time",name:"startTime",className:"form-input",required:!0,value:p.startTime,onChange:f}),(0,x.jsx)("label",{children:" End Time"}),(0,x.jsx)("input",{type:"time",name:"endTime",className:"form-input",required:!0,value:p.endTime,onChange:f}),(0,x.jsx)("button",{type:"submit",className:"btn form-btn",onClick:g,children:"Apply"})]})]})}),(0,x.jsx)(m.Z,{})]})}},1062:function(){}}]);
//# sourceMappingURL=702.9b0478e7.chunk.js.map