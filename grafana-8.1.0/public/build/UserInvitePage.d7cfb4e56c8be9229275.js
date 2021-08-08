(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{IeNb:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"UserInvitePage",(function(){return u}));n("q1tI");var r,i,a=n("0cfB"),l=n("/MKj"),o=n("pkzr"),s=n("HJRA"),c=n("lzJ5"),d=n("ZGyg"),j=n("nKUr");const u=({navModel:e})=>Object(j.jsx)(d.b,{navModel:e,children:Object(j.jsxs)(d.b.Contents,{children:[r||(r=Object(j.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),Object(j.jsxs)("div",{className:"p-b-2",children:["Send invitation or add existing Grafana user to the organization.",Object(j.jsxs)("span",{className:"highlight-word",children:[" ",s.b.user.orgName]})]}),i||(i=Object(j.jsx)(o.a,{}))]})});t.default=Object(a.hot)(e)(Object(l.connect)(e=>({navModel:Object(c.a)(e.navIndex,"users")}))(u))}.call(this,n("3UD+")(e))},pkzr:function(e,t,n){"use strict";n("q1tI");var r,i=n("kDLi"),a=n("ZFWI"),l=n("GQ3c"),o=n("t8hP"),s=n("HJRA"),c=n("Obii"),d=n("nKUr");const j=["ref"];function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}const b=[{label:"Viewer",value:l.i.Viewer},{label:"Editor",value:l.i.Editor},{label:"Admin",value:l.i.Admin}];t.a=({})=>{const e={name:"",email:"",role:l.i.Editor,sendEmail:!0};return Object(d.jsx)(i.Form,{defaultValues:e,onSubmit:async e=>{try{await Object(o.getBackendSrv)().post("/api/org/invites",e)}catch(e){s.a.emit(c.AppEvents.alertError,["Failed to send invitation.",e.message])}o.locationService.push("/org/users/")},children:({register:e,control:t,errors:n})=>Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(i.Field,{invalid:!!n.loginOrEmail,error:n.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:Object(d.jsx)(i.Input,u({},e("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),Object(d.jsx)(i.Field,{invalid:!!n.name,label:"Name",children:Object(d.jsx)(i.Input,u({},e("name"),{placeholder:"(optional)"}))}),Object(d.jsx)(i.Field,{invalid:!!n.role,label:"Role",children:Object(d.jsx)(i.InputControl,{render:e=>{let{}=e,t=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e.field,j);return Object(d.jsx)(i.RadioButtonGroup,u({},t,{options:b}))},control:t,name:"role"})}),Object(d.jsx)(i.Field,{label:"Send invite email",children:Object(d.jsx)(i.Switch,u({},e("sendEmail")))}),Object(d.jsxs)(i.HorizontalGroup,{children:[r||(r=Object(d.jsx)(i.Button,{type:"submit",children:"Submit"})),Object(d.jsx)(i.LinkButton,{href:c.locationUtil.assureBaseUrl(Object(a.c)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})})}}}]);
//# sourceMappingURL=UserInvitePage.d7cfb4e56c8be9229275.js.map