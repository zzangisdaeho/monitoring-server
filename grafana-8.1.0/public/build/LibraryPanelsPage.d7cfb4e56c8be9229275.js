(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{huJC:function(e,n,t){"use strict";t.d(n,"a",(function(){return b}));var a,s=t("q1tI"),o=t("vF1F"),i=t("kDLi"),l=t("Obii"),c=t("t8hP"),r=t("V8VS"),d=t("LvDl"),u=t("nKUr");function b({libraryPanel:e,onDismiss:n}){const t=Object(i.useStyles2)(j),[o,b]=Object(s.useState)(!1),[h,O]=Object(s.useState)(0),[p,v]=Object(s.useState)(void 0);Object(s.useEffect)(()=>{(async()=>{const n=await Object(r.e)(e.uid);O(n.length)})()},[e.uid]);const w=Object(s.useCallback)(n=>async function(e,n,t){t(!0);const a=(await Object(r.c)(e)).filter(e=>e.title.toLowerCase().includes(n.toLowerCase())).map(e=>({label:e.title,value:e}));return t(!1),a}(e.uid,n,b),[e.uid]),f=Object(s.useMemo)(()=>Object(d.debounce)(w,300,{leading:!0,trailing:!0}),[w]);return Object(u.jsxs)(i.Modal,{title:"View panel in dashboard",onDismiss:n,onClickBackdrop:n,isOpen:!0,children:[Object(u.jsxs)("div",{className:t.container,children:[0===h?a||(a=Object(u.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,h>0?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("p",{children:["This panel is being used in"," ",Object(u.jsxs)("strong",{children:[h," ",h>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),Object(u.jsx)(i.AsyncSelect,{menuShouldPortal:!0,isClearable:!0,isLoading:o,defaultOptions:!0,loadOptions:f,onChange:v,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),Object(u.jsxs)(i.Modal.ButtonRow,{children:[Object(u.jsx)(i.Button,{variant:"secondary",onClick:n,fill:"outline",children:"Cancel"}),Object(u.jsx)(i.Button,{onClick:e=>{var n;e.preventDefault(),c.locationService.push(l.urlUtil.renderUrl("/d/"+(null==p||null===(n=p.value)||void 0===n?void 0:n.uid),{}))},disabled:!Boolean(p),children:p?`View panel in ${null==p?void 0:p.label}...`:"View panel in dashboard..."})]})]})}function j(e){return{container:o.css``}}},oxXA:function(e,n,t){"use strict";t.r(n),t.d(n,"LibraryPanelsPage",(function(){return u}));var a=t("q1tI"),s=t("/MKj"),o=t("lzJ5"),i=t("ZGyg"),l=t("orvP"),c=t("huJC"),r=t("nKUr");const d=e=>({navModel:Object(o.a)(e.navIndex,"library-panels")}),u=(Object(s.connect)(d,void 0),({navModel:e})=>{const[n,t]=Object(a.useState)(void 0);return Object(r.jsx)(i.b,{navModel:e,children:Object(r.jsxs)(i.b.Contents,{children:[Object(r.jsx)(l.a,{onClick:t,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0,showFolderFilter:!0}),n?Object(r.jsx)(c.a,{onDismiss:()=>t(void 0),libraryPanel:n}):null]})})});n.default=Object(s.connect)(d)(u)}}]);
//# sourceMappingURL=LibraryPanelsPage.d7cfb4e56c8be9229275.js.map