(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"/e1h":function(e,t,n){"use strict";let a;n.d(t,"a",(function(){return a})),function(e){e.Data="data",e.Meta="meta",e.Error="error",e.Stats="stats",e.JSON="json",e.Query="query",e.Actions="actions"}(a||(a={}))},"3F0C":function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var a=n("Obii"),i=n("kDLi");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const s=Object(a.isSystemOverrideWithRef)("hideSeriesFrom");function o(e,t,n,a){const{overrides:o}=n,u=e,g=o.findIndex(s);if(g<0){if(t===i.SeriesVisibilityChangeMode.ToggleSelection){const e=l([u]);return r({},n,{overrides:[...n.overrides,e]})}const e=l(h(a,u));return r({},n,{overrides:[...n.overrides,e]})}const b=Array.from(o),[m]=b.splice(g,1);if(t===i.SeriesVisibilityChangeMode.ToggleSelection){const e=d(m);if(e[0]===u&&1===e.length)return r({},n,{overrides:b});const t=l([u]);return r({},n,{overrides:[...b,t]})}const f=c(m,u);return p(f,a)?r({},n,{overrides:b}):r({},n,{overrides:[...b,f]})}function l(e,t=a.ByNamesMatcherMode.exclude,n){var i;return n=null!==(i=n)&&void 0!==i?i:{id:"custom.hideFrom",value:{viz:!0,legend:!1,tooltip:!1}},{__systemRef:"hideSeriesFrom",matcher:{id:a.FieldMatcherID.byNames,options:{mode:t,names:e,prefix:t===a.ByNamesMatcherMode.exclude?"All except:":void 0,readOnly:!0}},properties:[r({},n,{value:{viz:!0,legend:!1,tooltip:!1}})]}}const c=(e,t,n=a.ByNamesMatcherMode.exclude)=>{const i=e.properties.find(e=>"custom.hideFrom"===e.id),r=d(e),s=r.findIndex(e=>e===t);return s<0?r.push(t):r.splice(s,1),l(r,n,i)},d=e=>{var t;const n=null===(t=e.matcher.options)||void 0===t?void 0:t.names;return Array.isArray(n)?n:[]},p=(e,t)=>d(e).length===h(t).length,h=(e,t)=>{const n=new Set;for(const i of e)for(const r of i.fields){if(r.type!==a.FieldType.number)continue;const s=Object(a.getFieldDisplayName)(r,i,e);s!==t&&n.add(s)}return Array.from(n)}},"8M//":function(e,t,n){"use strict";var a=n("UvM7"),i=n("NXk7"),r=n("p+Sq"),s=n("/YIc"),o=n("NPB1"),l=n("WUic"),c=n("3SGO"),d=n("KyLG"),p=n("GQ3c"),h=n("rd46"),u=n("Obii"),g=n("50r9"),b=n("t8hP");var m=n("HH2e"),f=n("Uuh2");function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}async function v(e,t,n){try{switch(e.routeName){case p.f.Home:{const e=await i.b.get("/api/dashboards/home");if(e.redirectUri){const t=u.locationUtil.stripBaseFromUrl(e.redirectUri);return b.locationService.replace(t),null}return e.meta.canSave=!1,e.meta.canShare=!1,e.meta.canStar=!1,e}case p.f.Normal:{const t=await s.b.loadDashboard(e.urlType,e.urlSlug,e.urlUid);if(e.fixUrl&&t.meta.url){const e=u.locationUtil.stripBaseFromUrl(t.meta.url),n=b.locationService.getLocation().pathname;e!==n&&(b.locationService.replace(j({},b.locationService.getLocation(),{pathname:e})),console.log("not correct url correcting",e,n))}return t}case p.f.New:return function(e){const t={meta:{canStar:!1,canShare:!1,isNew:!0,folderId:0},dashboard:{title:"New dashboard",panels:[{type:"add-panel",gridPos:{x:0,y:0,w:12,h:9},title:"Panel Title"}]}};e&&(t.meta.folderId=parseInt(e,10));return t}(e.urlFolderId);default:throw{message:"Unknown route "+e.routeName}}}catch(e){return e.cancelled||(t(Object(d.f)({message:"Failed to fetch dashboard",error:e})),console.error(e)),null}}function O(e){return async(t,n)=>{t(Object(d.g)()),setTimeout(()=>{null===n().dashboard.getModel()&&t(Object(d.i)())},500);const i=await v(e,t);if(!i)return;let s;t(Object(d.h)());try{s=new h.a(i.dashboard,i.meta)}catch(e){return t(Object(d.f)({message:"Failed create dashboard model",error:e})),void console.error(e)}const u=n(),j=b.locationService.getSearchObject();j.orgId||b.locationService.partial({orgId:u.user.orgId},!0);const O=Object(o.a)();Object(r.a)().setCurrent(s),O.init(s);if(Object(f.a)({dashboard:s,timeSrv:O}).run({dashboard:s,range:O.timeRange()}),u.dashboard.modifiedQueries){const{panelId:e,queries:t}=u.dashboard.modifiedQueries;s.meta.fromExplore=!(!e||!t)}if(await t(Object(g.c)(e.urlUid,s)),n().templating.transaction.uid===e.urlUid&&n().dashboard.initPhase===p.e.Services){try{s.processRepeats(),j.autofitpanels&&s.autoFitPanels(window.innerHeight,j.kiosk),l.a.setupDashboardBindings(s)}catch(e){t(Object(c.b)(Object(a.a)("Dashboard init failed",e))),console.error(e)}if(u.dashboard.modifiedQueries){const{panelId:e,queries:n}=u.dashboard.modifiedQueries;!function(e,t,n,a){const i=t.panels.findIndex(e=>e.id===n);i>-1&&(t.panels[i].targets=a);e(Object(d.d)())}(t,s,e,n)}e.routeName!==p.f.New?(!function(e){const t={dashboardId:e.id,dashboardName:e.title,dashboardUid:e.uid,folderName:e.meta.folderTitle,eventName:b.MetaAnalyticsEventName.DashboardView};Object(b.reportMetaAnalytics)(t)}(s),m.a.watch(s.uid)):m.a.leave(),t(Object(d.e)(s))}}}n.d(t,"a",(function(){return O}))},Yuww:function(e,t,n){"use strict";var a,i,r,s=n("q1tI"),o=n("/MKj"),l=n("TSYQ"),c=n.n(l),d=n("pugT"),p=n("vF1F"),h=n("kDLi"),u=n("Csm0"),g=n("Obii"),b=n("t8hP"),m=n("NPB1"),f=n("/e1h"),j=n("nKUr");function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.Error="Error",e.Info="Info",e.Links="Links"}(r||(r={}));class O extends s.Component{constructor(...e){super(...e),v(this,"timeSrv",Object(m.a)()),v(this,"getInfoMode",()=>{const{panel:e,error:t}=this.props;return t?r.Error:e.description?r.Info:e.links&&e.links.length?r.Links:void 0}),v(this,"getInfoContent",()=>{const{panel:e}=this.props,t=e.description||"",n=Object(b.getTemplateSrv)().replace(t,e.scopedVars),a=Object(g.renderMarkdown)(n),i=this.props.links&&this.props.links.getLinks(e.replaceVariables);return Object(j.jsxs)("div",{className:"panel-info-content markdown-html",children:[Object(j.jsx)("div",{dangerouslySetInnerHTML:{__html:a}}),i&&i.length>0&&Object(j.jsx)("ul",{className:"panel-info-corner-links",children:i.map((e,t)=>Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:"panel-info-corner-links__item",href:e.href,target:e.target,children:e.title})},t))})]})}),v(this,"onClickError",()=>{Object(b.getLocationSrv)().update({partial:!0,query:{inspect:this.props.panel.id,inspectTab:f.a.Error}})})}renderCornerType(e,t,n){const s=e===r.Error?"error":"info",o="panel-info-corner panel-info-corner--"+e.toLowerCase(),l=u.a.components.Panels.Panel.headerCornerInfo(e.toLowerCase());return Object(j.jsx)(h.Tooltip,{content:t,placement:"top-start",theme:s,children:Object(j.jsxs)("div",{className:o,onClick:n,"aria-label":l,children:[a||(a=Object(j.jsx)("i",{className:"fa"})),i||(i=Object(j.jsx)("span",{className:"panel-info-corner-inner"}))]})})}render(){const{error:e}=this.props,t=this.getInfoMode();return t?t===r.Error&&e?this.renderCornerType(t,e,this.onClickError):t===r.Info||t===r.Links?this.renderCornerType(t,this.getInfoContent):null:null}}var x=O,y=n("MAcC");const C=({notice:e,onClick:t})=>{const n="error"===e.severity||"warning"===e.severity?"exclamation-triangle":"info-circle";return Object(j.jsx)(h.Tooltip,{content:e.text,children:e.inspect?Object(j.jsx)("div",{className:"panel-info-notice pointer",onClick:n=>t(n,e.inspect),children:Object(j.jsx)(h.Icon,{name:n,style:{marginRight:"8px"}})}):Object(j.jsx)("a",{className:"panel-info-notice",href:e.link,target:"_blank",rel:"noreferrer",children:Object(j.jsx)(h.Icon,{name:n,style:{marginRight:"8px"}})})},e.severity)},w=({frames:e,panelId:t})=>{const n=Object(s.useCallback)((e,n)=>{e.stopPropagation(),b.locationService.partial({inspect:t,inspectTab:n})},[t]),a={};for(const t of e)if(t.meta&&t.meta.notices)for(const e of t.meta.notices)a[e.severity]=e;return Object(j.jsx)(j.Fragment,{children:Object.values(a).map(e=>Object(j.jsx)(C,{notice:e,onClick:n},e.severity))})},S=["children"];function P(){return(P=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const k=e=>{let{children:t}=e,n=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,S);const[a,i]=Object(s.useState)({x:0,y:0}),[r,o]=Object(s.useState)(!1),l=Object(s.useCallback)(e=>{var t,n;(t=a,(n=I(e)).x===t.x&&n.y===t.y)&&(e.stopPropagation(),o(!r))},[a,r,o]),c=Object(s.useCallback)(e=>{i(I(e))},[i]);return Object(j.jsx)("header",P({},n,{className:"panel-title-container",onClick:l,onMouseDown:c,children:t({panelMenuOpen:r,closeMenu:()=>o(!1)})}))};function I(e){return{x:Math.floor(e.clientX),y:Math.floor(e.clientY)}}var D;const N=({state:e,onClick:t})=>{const n=Object(h.useStyles)(E);return e===g.LoadingState.Loading?Object(j.jsx)("div",{className:"panel-loading",onClick:t,children:D||(D=Object(j.jsx)(h.Tooltip,{content:"Cancel query",children:Object(j.jsx)(h.Icon,{className:"panel-loading__spinner spin-clockwise",name:"sync"})}))}):e===g.LoadingState.Streaming?Object(j.jsx)("div",{className:"panel-loading",onClick:t,children:Object(j.jsx)("div",{title:"Streaming (click to stop)",className:n.streamIndicator})}):null};function E(e){return{streamIndicator:p.css`
      width: 10px;
      height: 10px;
      background: ${e.colors.textFaint};
      box-shadow: 0 0 2px ${e.colors.textFaint};
      border-radius: 50%;
      position: relative;
      top: 6px;
      right: 1px;
    `}}var M=n("iODs"),T=n("+JUD"),F=n("Mk6Z"),L=n("umNM"),R=n("sQ2H"),U=n("m257"),A=n("ZFWI");const V=({panel:e,dashboard:t,children:n})=>{const[a,i]=Object(s.useState)([]),r=Object(o.useSelector)(t=>{var n;return(null===(n=t.dashboard.panels[e.id])||void 0===n?void 0:n.angularComponent)||null});return Object(s.useEffect)(()=>{i(function(e,t,n){const a=e=>{e.preventDefault(),b.locationService.partial({viewPanel:t.id})},i=e=>{e.preventDefault(),b.locationService.partial({editPanel:t.id})},r=n=>{n.preventDefault(),Object(T.a)(e,t)},s=e=>{e.preventDefault(),Object(T.g)(t)},o=e=>{b.locationService.partial({inspect:t.id,inspectTab:e})},l=e=>{e.preventDefault()},c=n=>{n.preventDefault(),Object(T.d)(e,t)},d=e=>{e.preventDefault(),Object(T.c)(t)},p=n=>{n.preventDefault(),Object(T.e)(e,t,!0)},h=e=>{e.preventDefault();const n=e.ctrlKey||e.metaKey?e=>window.open(`${A.b.appSubUrl}${e}`):void 0;M.d.dispatch(Object(R.d)(t,{getDataSourceSrv:b.getDataSourceSrv,getTimeSrv:m.a,getExploreUrl:U.i,openInNewWindow:n}))},u=[];t.isEditing||u.push({text:"View",iconClassName:"eye",onClick:a,shortcut:"v"}),e.canEditPanel(t)&&!t.isEditing&&u.push({text:"Edit",iconClassName:"edit",onClick:i,shortcut:"e"}),u.push({text:"Share",iconClassName:"share-alt",onClick:n=>{n.preventDefault(),Object(T.f)(e,t)},shortcut:"p s"}),!L.a.hasAccessToExplore()||t.plugin&&t.plugin.meta.skipDataQuery||u.push({text:"Explore",iconClassName:"compass",shortcut:"x",onClick:h});const g=[];t.plugin&&!t.plugin.meta.skipDataQuery&&(g.push({text:"Data",onClick:e=>o("data")}),e.meta.canEdit&&g.push({text:"Query",onClick:e=>o("query")})),g.push({text:"Panel JSON",onClick:e=>o("json")}),u.push({type:"submenu",text:"Inspect",iconClassName:"info-circle",onClick:e=>o(),shortcut:"i",subMenu:g});const f=[];if(!e.canEditPanel(t)||t.isViewing||t.isEditing||(f.push({text:"Duplicate",onClick:c,shortcut:"p d"}),f.push({text:"Copy",onClick:d}),Object(F.a)(t)?f.push({text:"Unlink library panel",onClick:s}):f.push({text:"Create library panel",onClick:r})),n){const e=n.getScope(),t=e.$$childHead.ctrl,a=t.getExtendedMenu();for(const n of a){const a={text:n.text,href:n.href,shortcut:n.shortcut};n.click&&(a.onClick=()=>{e.$eval(n.click,{ctrl:t})}),f.push(a)}}return!t.isEditing&&f.length&&u.push({type:"submenu",text:"More...",iconClassName:"cube",subMenu:f,onClick:l}),!e.canEditPanel(t)||t.isEditing||t.isViewing||(u.push({type:"divider",text:""}),u.push({text:"Remove",iconClassName:"trash-alt",onClick:p,shortcut:"p r"})),u}(t,e,r))},[t,e,r,i]),n({items:a})};var Q=n("NQ3n");class H extends s.PureComponent{constructor(...e){var t,n,a;super(...e),a=(e,t=!1)=>Object(j.jsx)("ul",{className:"dropdown-menu dropdown-menu--menu panel-menu",role:t?"":"menu",children:e.map((e,t)=>Object(j.jsx)(Q.a,{type:e.type,text:e.text,iconClassName:e.iconClassName,onClick:e.onClick,shortcut:e.shortcut,children:e.subMenu&&this.renderItems(e.subMenu,!0)},`${e.text}${t}`))}),(n="renderItems")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a}render(){return Object(j.jsx)("div",{className:"panel-menu-container dropdown open",children:this.renderItems(this.props.items)})}}const B=({show:e,onClose:t,panel:n,dashboard:a})=>e?Object(j.jsx)(h.ClickOutsideWrapper,{onClick:t,parent:document,children:Object(j.jsx)(V,{panel:n,dashboard:a,children:({items:e})=>Object(j.jsx)(H,{items:e})})}):null;var q,z;const W=({panel:e,error:t,isViewing:n,isEditing:a,data:i,alertState:r,dashboard:s})=>{const o=e.getDisplayTitle(),l=Object(p.cx)("panel-header",n||a?"":"grid-drag-handle"),c=Object(h.useStyles2)($);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(N,{state:i.state,onClick:()=>e.getQueryRunner().cancelQuery()}),Object(j.jsx)(x,{panel:e,title:e.title,description:e.description,scopedVars:e.scopedVars,links:Object(y.b)(e),error:t}),Object(j.jsx)("div",{className:l,children:Object(j.jsx)(k,{"aria-label":u.a.components.Panels.Panel.title(o),children:({closeMenu:t,panelMenuOpen:n})=>Object(j.jsxs)("div",{className:"panel-title",children:[Object(j.jsx)(w,{frames:i.series,panelId:e.id}),e.libraryPanel&&Object(j.jsx)(h.Icon,{name:"library-panel",style:{marginRight:"4px"}}),r?Object(j.jsx)(h.Icon,{name:"alerting"===r?"heart-break":"heart",className:"icon-gf panel-alert-icon",style:{marginRight:"4px"},size:"sm"}):null,Object(j.jsx)("h2",{className:c.titleText,children:o}),q||(q=Object(j.jsx)(h.Icon,{name:"angle-down",className:"panel-menu-toggle"})),Object(j.jsx)(B,{panel:e,dashboard:s,show:n,onClose:t}),i.request&&i.request.timeInfo&&Object(j.jsxs)("span",{className:"panel-time-info",children:[z||(z=Object(j.jsx)(h.Icon,{name:"clock-nine",size:"sm"}))," ",i.request.timeInfo]})]})})})]})},$=e=>({titleText:p.css`
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: calc(100% - 38px);
      cursor: pointer;
      font-weight: ${e.typography.fontWeightMedium};
      font-size: ${e.typography.body.fontSize};
      margin: 0;

      &:hover {
        color: ${e.colors.text.primary};
      }
      .panel-has-alert & {
        max-width: calc(100% - 54px);
      }
    `});var _=n("T9PE"),K=n("eXZ6"),J=n("LD8i"),G=n("xAj+");function Y(){return(Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const Z=(e,t)=>({matcher:{id:g.FieldMatcherID.byName,options:e},properties:[X(t)]}),X=e=>({id:"color",value:{mode:g.FieldColorModeId.Fixed,fixedColor:e}});var ee=n("3F0C"),te=n("K4q0"),ne=n("Uuh2");function ae(){return(ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function ie(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class re extends s.Component{constructor(e){super(e),ie(this,"timeSrv",Object(m.a)()),ie(this,"subs",new d.a),ie(this,"eventFilter",{onlyLocal:!0}),ie(this,"onSeriesColorChange",(e,t)=>{this.onFieldConfigChange(((e,t,n)=>{const{overrides:a}=n,i=n.overrides.findIndex(t=>t.matcher.id===g.FieldMatcherID.byName&&t.matcher.options===e);if(i<0)return Y({},n,{overrides:[...n.overrides,Z(e,t)]});const r=Array.from(a),s=r[i],o=s.properties.findIndex(e=>"color"===e.id);if(o<0)return r[i]=Y({},s,{properties:[...s.properties,X(t)]}),Y({},n,{overrides:r});const l=Array.from(s.properties);return l[o]=X(t),r[i]=Y({},s,{properties:l}),Y({},n,{overrides:r})})(e,t,this.props.panel.fieldConfig))}),ie(this,"onSeriesVisibilityChange",(e,t)=>{this.onFieldConfigChange(Object(ee.a)(e,t,this.props.panel.fieldConfig,this.state.data.series))}),ie(this,"onRefresh",()=>{const{panel:e,isInView:t,width:n}=this.props;if(!t)return void this.setState({refreshWhenInView:!0});const a=Object(T.b)(e,this.timeSrv.timeRange());if(this.wantsQueryExecution){if(n<0)return;this.state.refreshWhenInView&&this.setState({refreshWhenInView:!1}),e.runAllPanelQueries(this.props.dashboard.id,this.props.dashboard.getTimezone(),a,n)}else this.setState({data:ae({},this.state.data,{timeRange:this.timeSrv.timeRange()}),renderCounter:this.state.renderCounter+1})}),ie(this,"onRender",()=>{const e={renderCounter:this.state.renderCounter+1};this.setState(e)}),ie(this,"onOptionsChange",e=>{this.props.panel.updateOptions(e)}),ie(this,"onFieldConfigChange",e=>{this.props.panel.updateFieldConfig(e)}),ie(this,"onPanelError",e=>{this.state.errorMessage!==e&&this.setState({errorMessage:e})}),ie(this,"onAnnotationCreate",async e=>{const t=e.from!==e.to,n={dashboardId:this.props.dashboard.id,panelId:this.props.panel.id,isRegion:t,time:e.from,timeEnd:t?e.to:0,tags:e.tags,text:e.description};await Object(te.c)(n),Object(ne.b)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent(n))}),ie(this,"onAnnotationDelete",async e=>{await Object(te.a)({id:e}),Object(ne.b)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent({id:e}))}),ie(this,"onAnnotationUpdate",async e=>{const t=e.from!==e.to,n={id:e.id,dashboardId:this.props.dashboard.id,panelId:this.props.panel.id,isRegion:t,time:e.from,timeEnd:t?e.to:0,tags:e.tags,text:e.description};await Object(te.d)(n),Object(ne.b)().run({dashboard:this.props.dashboard,range:this.timeSrv.timeRange()}),this.state.context.eventBus.publish(new g.AnnotationChangeEvent(n))}),ie(this,"onChangeTimeRange",e=>{this.timeSrv.setTime({from:Object(g.toUtc)(e.from),to:Object(g.toUtc)(e.to)})});const t=e.dashboard.events.newScopedBus("panel:"+e.panel.id,this.eventFilter);this.state={isFirstLoad:!0,renderCounter:0,refreshWhenInView:!1,context:{sync:e.isEditing?g.DashboardCursorSync.Off:e.dashboard.graphTooltip,eventBus:t,onSeriesColorChange:this.onSeriesColorChange,onToggleSeriesVisibility:this.onSeriesVisibilityChange,onAnnotationCreate:this.onAnnotationCreate,onAnnotationUpdate:this.onAnnotationUpdate,onAnnotationDelete:this.onAnnotationDelete,canAddAnnotations:()=>Boolean(e.dashboard.meta.canEdit||e.dashboard.meta.canMakeEditable)},data:this.getInitialPanelDataState()}}getInitialPanelDataState(){return{state:g.LoadingState.NotStarted,series:[],timeRange:Object(g.getDefaultTimeRange)()}}componentDidMount(){const{panel:e,dashboard:t}=this.props;this.subs.add(e.events.subscribe(G.RefreshEvent,this.onRefresh)),this.subs.add(e.events.subscribe(G.RenderEvent,this.onRender)),t.panelInitialized(this.props.panel),this.hasPanelSnapshot?this.setState({data:Object(J.a)(e,t),isFirstLoad:!1}):(this.wantsQueryExecution||this.setState({isFirstLoad:!1}),this.subs.add(e.getQueryRunner().getData({withTransforms:!0,withFieldConfig:!0}).subscribe({next:e=>this.onDataUpdate(e)})))}componentWillUnmount(){this.subs.unsubscribe()}componentDidUpdate(e){const{isInView:t,isEditing:n}=this.props;e.dashboard.graphTooltip!==this.props.dashboard.graphTooltip&&this.setState(e=>({context:ae({},e.context,{sync:n?g.DashboardCursorSync.Off:this.props.dashboard.graphTooltip})})),n!==e.isEditing&&this.setState(e=>({context:ae({},e.context,{sync:n?g.DashboardCursorSync.Off:this.props.dashboard.graphTooltip})})),t!==e.isInView&&t&&this.state.refreshWhenInView&&this.onRefresh()}shouldComponentUpdate(e,t){const{plugin:n,panel:a}=this.props;return e.plugin===n||(a.getQueryRunner().resendLastResult(),!1)}onDataUpdate(e){const{dashboard:t,panel:n,plugin:a}=this.props;if(a.meta.skipDataQuery)return void this.setState({data:this.getInitialPanelDataState()});let i,{isFirstLoad:r}=this.state;switch(e.state){case g.LoadingState.Loading:if(this.state.data.state===g.LoadingState.Loading)return;break;case g.LoadingState.Error:const{error:a}=e;a&&i!==a.message&&(i=a.message);break;case g.LoadingState.Done:t.snapshot&&(n.snapshotData=e.series.map(e=>Object(g.toDataFrameDTO)(e))),r&&(r=!1)}this.setState({isFirstLoad:r,errorMessage:i,data:e})}get hasPanelSnapshot(){const{panel:e}=this.props;return e.snapshotData&&e.snapshotData.length}get wantsQueryExecution(){return!(this.props.plugin.meta.skipDataQuery||this.hasPanelSnapshot)}shouldSignalRenderingCompleted(e,t){return e===g.LoadingState.Done||t.skipDataQuery}skipFirstRender(e){const{isFirstLoad:t}=this.state;return this.wantsQueryExecution&&t&&(e===g.LoadingState.Loading||e===g.LoadingState.NotStarted)}renderPanel(e,t){const{panel:n,plugin:a,dashboard:i}=this.props,{renderCounter:r,data:s}=this.state,{theme:o}=A.b,{state:l}=s;if(this.skipFirstRender(l))return null;this.shouldSignalRenderingCompleted(l,a.meta)&&_.a.renderingCompleted();const d=a.panel,p=s.timeRange||this.timeSrv.timeRange(),u=this.hasOverlayHeader()?0:o.panelHeaderHeight,g=a.noPadding?0:o.panelPadding,b=e-2*g-K.j,m=t-u-2*g-K.j,f=c()({"panel-content":!0,"panel-content--no-padding":a.noPadding}),v=n.getOptions();return this.eventFilter.onlyLocal=0===i.graphTooltip,Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:f,children:Object(j.jsx)(h.PanelContextProvider,{value:this.state.context,children:Object(j.jsx)(d,{id:n.id,data:s,title:n.title,timeRange:p,timeZone:this.props.dashboard.getTimezone(),options:v,fieldConfig:n.fieldConfig,transparent:n.transparent,width:b,height:m,renderCounter:r,replaceVariables:n.replaceVariables,onOptionsChange:this.onOptionsChange,onFieldConfigChange:this.onFieldConfigChange,onChangeTimeRange:this.onChangeTimeRange,eventBus:i.events})})})})}hasOverlayHeader(){const{panel:e}=this.props,{data:t}=this.state;return(!t.request||!t.request.timeInfo)&&!e.hasTitle()}render(){var e;const{dashboard:t,panel:n,isViewing:a,isEditing:i,width:r,height:s}=this.props,{errorMessage:o,data:l}=this.state,{transparent:d}=n;let p=A.b.featureToggles.ngalert||null===(e=l.alertState)||void 0===e?void 0:e.state;const g=c()({"panel-container":!0,"panel-container--absolute":!0,"panel-container--transparent":d,"panel-container--no-title":this.hasOverlayHeader(),["panel-alert-state--"+p]:void 0!==p});return Object(j.jsxs)("section",{className:g,"aria-label":u.a.components.Panels.Panel.containerByTitle(n.title),children:[Object(j.jsx)(W,{panel:n,dashboard:t,title:n.title,description:n.description,links:n.links,error:o,isEditing:i,isViewing:a,alertState:p,data:l}),Object(j.jsx)(h.ErrorBoundary,{children:({error:e})=>e?(this.onPanelError(e.message||"Error in plugin"),null):this.renderPanel(r,s)})]})}}var se=n("KyLG");function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class le extends s.PureComponent{constructor(e){super(e),oe(this,"element",null),oe(this,"timeSrv",Object(m.a)()),oe(this,"scopeProps",void 0),oe(this,"subs",new d.a),this.state={data:{state:g.LoadingState.NotStarted,series:[],timeRange:Object(g.getDefaultTimeRange)()}}}componentDidMount(){const{panel:e}=this.props;this.loadAngularPanel();const t=e.getQueryRunner();this.subs.add(t.getData({withTransforms:!1,withFieldConfig:!1}).subscribe({next:e=>this.onPanelDataUpdate(e)}))}onPanelDataUpdate(e){let t;if(e.state===g.LoadingState.Error){const{error:n}=e;n&&t!==n.message&&(t=n.message)}this.setState({data:e,errorMessage:t})}componentWillUnmount(){this.cleanUpAngularPanel(),this.subs.unsubscribe()}componentDidUpdate(e,t){const{plugin:n,height:a,width:i,panel:r}=this.props;e.plugin!==n&&(this.cleanUpAngularPanel(),this.loadAngularPanel()),e.width===i&&e.height===a||this.scopeProps&&(this.scopeProps.size.height=this.getInnerPanelHeight(),this.scopeProps.size.width=this.getInnerPanelWidth(),r.render())}getInnerPanelHeight(){const{plugin:e,height:t}=this.props,{theme:n}=A.b;return t-(this.hasOverlayHeader()?0:n.panelHeaderHeight)-2*(e.noPadding?0:n.panelPadding)-K.j}getInnerPanelWidth(){const{plugin:e,width:t}=this.props,{theme:n}=A.b;return t-2*(e.noPadding?0:n.panelPadding)-K.j}loadAngularPanel(){const{panel:e,dashboard:t,setPanelAngularComponent:n}=this.props;if(!this.element)return;const a=Object(b.getAngularLoader)();this.scopeProps={panel:e,dashboard:t,size:{width:this.getInnerPanelWidth(),height:this.getInnerPanelHeight()}},n({panelId:e.id,angularComponent:a.load(this.element,this.scopeProps,'<plugin-component type="panel" class="panel-height-helper"></plugin-component>')})}cleanUpAngularPanel(){const{angularComponent:e,setPanelAngularComponent:t,panel:n}=this.props;e&&e.destroy(),t({panelId:n.id,angularComponent:null})}hasOverlayHeader(){const{panel:e}=this.props,{data:t}=this.state;return(!t.request||!t.request.timeInfo)&&!e.hasTitle()}render(){var e;const{dashboard:t,panel:n,isViewing:a,isEditing:i,plugin:r}=this.props,{errorMessage:s,data:o}=this.state,{transparent:l}=n;let d=A.b.featureToggles.ngalert||null===(e=o.alertState)||void 0===e?void 0:e.state;const p=c()({"panel-container":!0,"panel-container--absolute":!0,"panel-container--transparent":l,"panel-container--no-title":this.hasOverlayHeader(),"panel-has-alert":void 0!==n.alert,["panel-alert-state--"+d]:void 0!==d}),h=c()({"panel-content":!0,"panel-content--no-padding":r.noPadding});return Object(j.jsxs)("div",{className:p,"aria-label":u.a.components.Panels.Panel.containerByTitle(n.title),children:[Object(j.jsx)(W,{panel:n,dashboard:t,title:n.title,description:n.description,links:n.links,error:s,isViewing:a,isEditing:i,data:o,alertState:d}),Object(j.jsx)("div",{className:h,children:Object(j.jsx)("div",{ref:e=>this.element=e,className:"panel-height-helper"})})]})}}const ce={setPanelAngularComponent:se.n},de=Object(o.connect)((e,t)=>({angularComponent:e.dashboard.panels[t.panel.id].angularComponent}),ce)(le);var pe=n("J4KJ");n.d(t,"a",(function(){return be}));const he={initDashboardPanel:pe.f},ue=Object(o.connect)((e,t)=>{const n=e.dashboard.panels[t.panel.id];return n?{plugin:n.plugin}:{plugin:null}},he);class ge extends s.PureComponent{constructor(e){var t,n,a;super(e),a={},(n="specialPanels")in(t=this)?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,this.state={isLazy:!e.isInView}}componentDidMount(){this.props.initDashboardPanel(this.props.panel)}componentDidUpdate(){this.state.isLazy&&this.props.isInView&&this.setState({isLazy:!1})}renderPanel(e){const{dashboard:t,panel:n,isViewing:a,isInView:i,isEditing:r,width:s,height:o}=this.props;return e.angularPanelCtrl?Object(j.jsx)(de,{plugin:e,panel:n,dashboard:t,isViewing:a,isEditing:r,isInView:i,width:s,height:o}):Object(j.jsx)(re,{plugin:e,panel:n,dashboard:t,isViewing:a,isEditing:r,isInView:i,width:s,height:o})}render(){const{plugin:e}=this.props,{isLazy:t}=this.state;return e?t?null:this.renderPanel(e):null}}const be=ue(ge)}}]);
//# sourceMappingURL=default~DashboardPage~SoloPanelPage.d7cfb4e56c8be9229275.js.map