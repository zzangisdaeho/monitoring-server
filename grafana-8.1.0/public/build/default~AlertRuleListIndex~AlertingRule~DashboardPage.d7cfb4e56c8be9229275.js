(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"7G0q":function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a,r,i=n("vF1F"),o=n("kDLi"),s=(n("q1tI"),n("nKUr"));const l=({rule:e})=>{const t=Object(o.useStyles2)(c);return"err"===e.health||"error"===e.health?Object(s.jsx)(o.Tooltip,{theme:"error",content:e.lastError||"No error message provided.",children:Object(s.jsxs)("div",{className:t.warn,children:[a||(a=Object(s.jsx)(o.Icon,{name:"exclamation-triangle"})),r||(r=Object(s.jsx)("span",{children:"error"}))]})}):Object(s.jsx)(s.Fragment,{children:e.health})},c=e=>({warn:i.css`
    display: inline-flex;
    flex-direction: row;
    color: ${e.colors.warning.text};
    & > * + * {
      margin-left: ${e.spacing(1)};
    }
  `})},CBn2:function(e,t,n){"use strict";var a=n("q1tI"),r=n("vF1F"),i=n("Jzaf"),o=n("dVib"),s=n("LBMm"),l=n("itod"),c=n("RKiO"),u=n("wZee"),d=n("kDLi"),m=n("Ei3L"),v=n("nKUr");function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const h=({language:e,expr:t})=>{const n=Object(a.useMemo)(()=>[Object(d.SlatePrism)({onlyIn:e=>"code_block"===e.type,getSyntax:()=>e},b({},u.languages,{[e]:"logql"===e?c.d:l.c}))],[e]),r=Object(a.useMemo)(()=>Object(d.makeValue)(t),[t]);return Object(v.jsx)(s.a,{plugins:n,value:r,readOnly:!0})},p=({expression:e,rulesSource:t})=>{const n=Object(d.useStyles)(g);return Object(v.jsx)(m.a,{className:Object(r.cx)(n.well,"slate-query-field"),children:Object(i.j)(t)?Object(v.jsx)(h,{expr:e,language:t.type===i.a.Loki?"logql":"promql"}):e})},g=e=>({well:r.css`
    font-family: ${e.typography.fontFamily.monospace};
  `});function f(e){const{annotations:t,rulesSource:n,rule:a}=e,s=x();return Object(i.j)(n)?Object(v.jsx)(o.a,{label:"Expression",horizontal:!0,className:Object(r.cx)({[s.exprRow]:!!t.length}),children:Object(v.jsx)(p,{expression:a.query,rulesSource:n})}):null}n.d(t,"a",(function(){return f}));const x=()=>({exprRow:r.css`
    margin-bottom: 46px;
  `})},Ei3L:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("q1tI");var a=n("kDLi"),r=n("vF1F"),i=n("nKUr");const o=({children:e,className:t})=>{const n=Object(a.useStyles)(s);return Object(i.jsx)("div",{className:Object(r.cx)(n.wrapper,t),children:e})},s=e=>({wrapper:r.css`
    background-color: ${e.colors.panelBg};
    border: solid 1px ${e.colors.formInputBorder};
    border-radius: ${e.border.radius.sm};
    padding: ${e.spacing.xs} ${e.spacing.sm};
    font-family: ${e.typography.fontFamily.monospace};
  `})},O6qV:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n("Jzaf"),i=n("IpGs"),o=n("w+lj");function s(e){const t=Object(o.a)(e=>e.promRules),n=Object(o.a)(e=>e.rulerRules),s=Object(a.useRef)({}),c=Object(a.useMemo)(()=>{if(e){const t=Object(r.h)(e);if(!t)throw new Error("Unknown rules source: "+e);return[t]}return Object(r.e)()},[e]);return Object(a.useMemo)(()=>c.map(e=>{var a,o;const c=Object(r.j)(e)?e.name:e,u=null===(a=t[c])||void 0===a?void 0:a.result,d=null===(o=n[c])||void 0===o?void 0:o.result,m=s.current[c];if(m&&m.promRules===u&&m.rulerRules===d)return m.result;const v={};Object.entries(d||{}).forEach(([t,n])=>{const a={rulesSource:e,name:t,groups:[]};v[t]=a,function(e,t){e.groups=t.map(t=>{const n={name:t.name,rules:[]};return n.rules=t.rules.map(t=>function(e,t,n){return Object(i.g)(e)?{name:e.alert,query:e.expr,labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:n}:Object(i.m)(e)?{name:e.record,query:e.expr,labels:e.labels||{},annotations:{},rulerRule:e,namespace:t,group:n}:{name:e.grafana_alert.title,query:"",labels:e.labels||{},annotations:e.annotations||{},rulerRule:e,namespace:t,group:n}}(t,e,n)),n})}(a,n)}),null==u||u.forEach(({name:t,groups:n})=>{!function(e,t){t.forEach(t=>{var n;let a=e.groups.find(e=>e.name===t.name);a||(a={name:t.name,rules:[]},e.groups.push(a)),(null!==(n=t.rules)&&void 0!==n?n:[]).forEach(t=>{const n=function(e,t,n){var a;if(Object(r.k)(n))return t.rules.find(t=>t.name===e.name);return null!==(a=t.rules.find(t=>!t.promRule&&l(t,e,!0)))&&void 0!==a?a:t.rules.find(t=>!t.promRule&&l(t,e,!1))}(t,a,e.rulesSource);n?n.promRule=t:a.rules.push(function(e,t,n){return{name:e.name,query:e.query,labels:e.labels||{},annotations:Object(i.f)(e)&&e.annotations||{},promRule:e,namespace:t,group:n}}(t,e,a))})})}(v[t]=v[t]||{rulesSource:e,name:t,groups:[]},n)});const b=Object.values(v);return Object(r.k)(e)&&b.forEach(e=>{e.groups=[{name:"default",rules:e.groups.flatMap(e=>e.rules).sort((e,t)=>e.name.localeCompare(t.name))}]}),s.current[c]={promRules:u,rulerRules:d,result:b},b}).flat(),[t,n,c])}function l(e,t,n=!0){return e.name===t.name&&JSON.stringify([n?c(e.query):"",e.labels,e.annotations])===JSON.stringify([n?c(t.query):"",t.labels||{},Object(i.f)(t)&&t.annotations||{}])}function c(e){return e.length>1&&"("===e[0]&&")"===e[e.length-1]&&(e=e.substr(1,e.length-2)),(e=e.replace(/\s|\n/g,"")).split("").sort().join("")}},P8sI:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("/MKj"),r=n("w+lj"),i=n("q1tI"),o=n("4Yfp"),s=n("fXZ9");function l(e){const t=Object(a.useDispatch)(),n=Object(r.a)(e=>e.folders);if(Object(i.useEffect)(()=>{e&&t(Object(o.o)(e))},[t,e]),e){const t=n[e]||s.c;return{folder:t.result,loading:t.loading}}return{loading:!1}}},PynR:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n("umNM"),r=n("IpGs"),i=n("P8sI"),o=n("w+lj"),s=n("/MKj"),l=n("q1tI"),c=n("4Yfp");function u(e,t){var n,u;const d=Object(o.a)(e=>e.lotexSupportsRuleEditing),m=Object(s.useDispatch)(),v=t&&Object(r.j)(t)?t.grafana_alert.namespace_uid:void 0,{folder:b,loading:h}=Object(i.a)(v);if(Object(l.useEffect)(()=>{void 0===d[e]&&m(Object(c.a)(e))},[e,d,m]),!t)return{isEditable:!1,loading:!1};if(Object(r.j)(t)){if(!v)throw new Error(`Rule ${t.grafana_alert.title} does not have a folder uid, cannot determine if it is editable.`);return{isEditable:null==b?void 0:b.canSave,loading:h}}return{isEditable:a.a.isEditor&&!(null===(n=d[e])||void 0===n||!n.result),loading:!(null===(u=d[e])||void 0===u||!u.loading)}}},RKiO:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return i}));const a=[{label:"json",insertText:"json",documentation:"Extracting labels from the log line using json parser. Only available in Loki 2.0+."},{label:"regexp",insertText:'regexp ""',documentation:"Extracting labels from the log line using regexp parser. Only available in Loki 2.0+.",move:-1},{label:"logfmt",insertText:"logfmt",documentation:"Extracting labels from the log line using logfmt parser. Only available in Loki 2.0+."}],r=[{label:"unwrap",insertText:"unwrap",detail:"unwrap identifier",documentation:"Take labels and use the values as sample data for metric aggregations. Only available in Loki 2.0+."},{label:"label_format",insertText:"label_format",documentation:"Use to rename, modify or add labels. For example, | label_format foo=bar . Only available in Loki 2.0+."},{label:"line_format",insertText:"line_format",documentation:'Rewrites log line content. For example, | line_format "{{.query}} {{.duration}}" . Only available in Loki 2.0+.'}],i=[{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"},{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval. Only available in Loki 2.0+."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval. Only available in Loki 2.0+."},{insertText:"bytes_over_time",label:"bytes_over_time",detail:"bytes_over_time(range-vector)",documentation:"Counts the amount of bytes used by each log stream for a given range"},{insertText:"bytes_rate",label:"bytes_rate",detail:"bytes_rate(range-vector)",documentation:"Calculates the number of bytes per second for each stream."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."}],o={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((without|by)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},"context-pipe":{pattern:/\s\|[^=~]\s?\w*/i,inside:{"pipe-operator":{pattern:/\|/i,alias:"operator"},"pipe-operations":{pattern:new RegExp(""+[...a,...r].map(e=>e.label).join("|"),"i"),alias:"keyword"}}},function:new RegExp(`\\b(?:${i.map(e=>e.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=\])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:/\s?(\|[=~]?|!=?|<(?:=>?|<|>)?|>[>=]?)\s?/i,punctuation:/[{}()`,.]/};t.d=o},cLaa:function(e,t,n){"use strict";n.d(t,"a",(function(){return x}));var a,r,i=n("vF1F"),o=n("Obii"),s=n("kDLi"),l=n("umNM"),c=n("q1tI"),u=n("/MKj"),d=n("Ty5D"),m=n("PynR"),v=n("4Yfp"),b=n("d6cI"),h=n("Jzaf"),p=n("8qpb"),g=n("K3Xr"),f=n("nKUr");const x=({rule:e,rulesSource:t})=>{const n=Object(u.useDispatch)(),i=Object(d.l)(),x=Object(s.useStyles2)(j),{namespace:_,group:y,rulerRule:O}=e,[w,T]=Object(c.useState)(),k=[],R=[],{isEditable:C}=Object(m.a)(Object(h.i)(t),O),$=i.pathname+i.search,q=i.pathname.endsWith("/view");const S=()=>{if(w&&w.rulerRule){const e=g.d(Object(h.i)(w.namespace.rulesSource),w.namespace.name,w.group.name,w.rulerRule);n(Object(v.e)(e,{navigateTo:q?"/alerting/list":void 0})),T(void 0)}};if(Object(h.j)(t)&&l.a.isEditor&&k.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"primary",icon:"chart-line",target:"__blank",href:Object(p.b)(t.name,e.query),children:"See graph"},"explore")),e.annotations[b.c.runbookURL]&&k.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"primary",icon:"book",target:"__blank",href:e.annotations[b.c.runbookURL],children:"View runbook"},"runbook")),e.annotations[b.c.dashboardUID]){const t=e.annotations[b.c.dashboardUID];if(t){k.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:"d/"+encodeURIComponent(t),children:"Go to dashboard"},"dashboard"));const n=e.annotations[b.c.panelID];n&&k.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"primary",icon:"apps",target:"__blank",href:`d/${encodeURIComponent(t)}?viewPanel=${encodeURIComponent(n)}`,children:"Go to panel"},"dashboard"))}}if(q||R.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"secondary",icon:"eye",href:Object(p.c)(t,e,$),children:"View"},"view")),C&&O){const n=Object(h.i)(t),a=g.d(n,_.name,y.name,O),r=o.urlUtil.renderUrl(`/alerting/${encodeURIComponent(g.f(a))}/edit`,{returnTo:$});R.push(Object(f.jsx)(s.LinkButton,{className:x.button,size:"xs",variant:"secondary",icon:"pen",href:r,children:"Edit"},"edit"),Object(f.jsx)(s.Button,{className:x.button,size:"xs",type:"button",variant:"secondary",icon:"trash-alt",onClick:()=>T(e),children:"Delete"},"delete"))}return k.length||R.length?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:x.wrapper,children:[Object(f.jsx)(s.HorizontalGroup,{width:"auto",children:k.length?k:a||(a=Object(f.jsx)("div",{}))}),Object(f.jsx)(s.HorizontalGroup,{width:"auto",children:R.length?R:r||(r=Object(f.jsx)("div",{}))})]}),!!w&&Object(f.jsx)(s.ConfirmModal,{isOpen:!0,title:"Delete rule",body:"Deleting this rule will permanently remove it from your alert rule list. Are you sure you want to delete this rule?",confirmText:"Yes, delete",icon:"exclamation-triangle",onConfirm:S,onDismiss:()=>T(void 0)})]}):null};const j=e=>({wrapper:i.css`
    padding: ${e.spacing(2)} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: solid 1px ${e.colors.border.medium};
  `,button:i.css`
    height: 24px;
    margin-top: ${e.spacing(1)};
    font-size: ${e.typography.size.sm};
  `})},dVib:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n("q1tI");var a=n("vF1F"),r=n("kDLi"),i=n("nKUr");const o=({className:e,label:t,horizontal:n,children:o})=>{const l=Object(r.useStyles2)(s);return Object(i.jsxs)("div",{className:Object(a.cx)(e,l.field,n?l.fieldHorizontal:l.fieldVertical),children:[Object(i.jsx)("div",{children:t}),Object(i.jsx)("div",{children:o})]})},s=e=>({fieldHorizontal:a.css`
    flex-direction: row;
    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,fieldVertical:a.css`
    flex-direction: column;
  `,field:a.css`
    display: flex;
    margin: ${e.spacing(2)} 0;

    & > div:first-child {
      width: 110px;
      padding-right: ${e.spacing(1)};
      font-size: ${e.typography.size.sm};
      font-weight: ${e.typography.fontWeightBold};
      line-height: 1.8;
    }
    & > div:nth-child(2) {
      flex: 1;
      color: ${e.colors.text.secondary};
    }
  `})},epYg:function(e,t,n){"use strict";var a=n("q1tI"),r=n("IpGs"),i=n("dVib"),o=(n("vF1F"),n("CBrm")),s=n("zlPf"),l=n("nKUr");const c=({instance:e})=>{const t=(Object.entries(e.annotations||{})||[]).filter(([e,t])=>!!t.trim());return Object(l.jsxs)("div",{children:[e.value&&Object(l.jsx)(i.a,{label:"Value",horizontal:!0,children:e.value}),t.map(([e,t])=>Object(l.jsx)(s.a,{annotationKey:e,value:t},e))]})};var u=n("Qil4"),d=n("wDOy");const m=({instances:e})=>{const t=Object(a.useMemo)(()=>e.map(e=>({data:e,id:Object(r.a)(e)})).sort((e,t)=>e.id.localeCompare(t.id)),[e]);return Object(l.jsx)(d.a,{cols:v,isExpandable:!0,items:t,renderExpandedContent:({data:e})=>Object(l.jsx)(c,{instance:e})})},v=[{id:"state",label:"State",renderCell:({data:{state:e}})=>Object(l.jsx)(u.a,{state:e}),size:"80px"},{id:"labels",label:"Labels",renderCell:({data:{labels:e}})=>Object(l.jsx)(o.a,{labels:e})},{id:"created",label:"Created",renderCell:({data:{activeAt:e}})=>Object(l.jsx)(l.Fragment,{children:e.startsWith("0001")?"-":e.substr(0,19).replace("T"," ")}),size:"150px"}];function b(e){var t;const{promRule:n}=e;return Object(r.f)(n)&&null!==(t=n.alerts)&&void 0!==t&&t.length?Object(l.jsx)(i.a,{label:"Matching instances",horizontal:!0,children:Object(l.jsx)(m,{instances:n.alerts})}):null}n.d(t,"a",(function(){return b}))},itod:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}));const a=[{label:"$__interval",sortValue:"$__interval"},{label:"$__rate_interval",sortValue:"$__rate_interval"},{label:"$__range",sortValue:"$__range"},{label:"1m",sortValue:"00:01:00"},{label:"5m",sortValue:"00:05:00"},{label:"10m",sortValue:"00:10:00"},{label:"30m",sortValue:"00:30:00"},{label:"1h",sortValue:"01:00:00"},{label:"1d",sortValue:"24:00:00"}],r=[{label:"sum",insertText:"sum",documentation:"Calculate sum over dimensions"},{label:"min",insertText:"min",documentation:"Select minimum over dimensions"},{label:"max",insertText:"max",documentation:"Select maximum over dimensions"},{label:"avg",insertText:"avg",documentation:"Calculate the average over dimensions"},{label:"group",insertText:"group",documentation:"All values in the resulting vector are 1"},{label:"stddev",insertText:"stddev",documentation:"Calculate population standard deviation over dimensions"},{label:"stdvar",insertText:"stdvar",documentation:"Calculate population standard variance over dimensions"},{label:"count",insertText:"count",documentation:"Count number of elements in the vector"},{label:"count_values",insertText:"count_values",documentation:"Count number of elements with the same value"},{label:"bottomk",insertText:"bottomk",documentation:"Smallest k elements by sample value"},{label:"topk",insertText:"topk",documentation:"Largest k elements by sample value"},{label:"quantile",insertText:"quantile",documentation:"Calculate φ-quantile (0 ≤ φ ≤ 1) over dimensions"},{insertText:"abs",label:"abs",detail:"abs(v instant-vector)",documentation:"Returns the input vector with all sample values converted to their absolute value."},{insertText:"absent",label:"absent",detail:"absent(v instant-vector)",documentation:"Returns an empty vector if the vector passed to it has any elements and a 1-element vector with the value 1 if the vector passed to it has no elements. This is useful for alerting on when no time series exist for a given metric name and label combination."},{insertText:"absent_over_time",label:"absent_over_time",detail:"absent(v range-vector)",documentation:"Returns an empty vector if the range vector passed to it has any elements and a 1-element vector with the value 1 if the range vector passed to it has no elements."},{insertText:"ceil",label:"ceil",detail:"ceil(v instant-vector)",documentation:"Rounds the sample values of all elements in `v` up to the nearest integer."},{insertText:"changes",label:"changes",detail:"changes(v range-vector)",documentation:"For each input time series, `changes(v range-vector)` returns the number of times its value has changed within the provided time range as an instant vector."},{insertText:"clamp",label:"clamp",detail:"clamp(v instant-vector, min scalar, max scalar)",documentation:"Clamps the sample values of all elements in `v` to have a lower limit of `min` and an upper limit of `max`."},{insertText:"clamp_max",label:"clamp_max",detail:"clamp_max(v instant-vector, max scalar)",documentation:"Clamps the sample values of all elements in `v` to have an upper limit of `max`."},{insertText:"clamp_min",label:"clamp_min",detail:"clamp_min(v instant-vector, min scalar)",documentation:"Clamps the sample values of all elements in `v` to have a lower limit of `min`."},{insertText:"count_scalar",label:"count_scalar",detail:"count_scalar(v instant-vector)",documentation:"Returns the number of elements in a time series vector as a scalar. This is in contrast to the `count()` aggregation operator, which always returns a vector (an empty one if the input vector is empty) and allows grouping by labels via a `by` clause."},{insertText:"day_of_month",label:"day_of_month",detail:"day_of_month(v=vector(time()) instant-vector)",documentation:"Returns the day of the month for each of the given times in UTC. Returned values are from 1 to 31."},{insertText:"day_of_week",label:"day_of_week",detail:"day_of_week(v=vector(time()) instant-vector)",documentation:"Returns the day of the week for each of the given times in UTC. Returned values are from 0 to 6, where 0 means Sunday etc."},{insertText:"days_in_month",label:"days_in_month",detail:"days_in_month(v=vector(time()) instant-vector)",documentation:"Returns number of days in the month for each of the given times in UTC. Returned values are from 28 to 31."},{insertText:"delta",label:"delta",detail:"delta(v range-vector)",documentation:"Calculates the difference between the first and last value of each time series element in a range vector `v`, returning an instant vector with the given deltas and equivalent labels. The delta is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if the sample values are all integers."},{insertText:"deriv",label:"deriv",detail:"deriv(v range-vector)",documentation:"Calculates the per-second derivative of the time series in a range vector `v`, using simple linear regression."},{insertText:"drop_common_labels",label:"drop_common_labels",detail:"drop_common_labels(instant-vector)",documentation:"Drops all labels that have the same name and value across all series in the input vector."},{insertText:"exp",label:"exp",detail:"exp(v instant-vector)",documentation:"Calculates the exponential function for all elements in `v`.\nSpecial cases are:\n* `Exp(+Inf) = +Inf` \n* `Exp(NaN) = NaN`"},{insertText:"floor",label:"floor",detail:"floor(v instant-vector)",documentation:"Rounds the sample values of all elements in `v` down to the nearest integer."},{insertText:"histogram_quantile",label:"histogram_quantile",detail:"histogram_quantile(φ float, b instant-vector)",documentation:"Calculates the φ-quantile (0 ≤ φ ≤ 1) from the buckets `b` of a histogram. The samples in `b` are the counts of observations in each bucket. Each sample must have a label `le` where the label value denotes the inclusive upper bound of the bucket. (Samples without such a label are silently ignored.) The histogram metric type automatically provides time series with the `_bucket` suffix and the appropriate labels."},{insertText:"holt_winters",label:"holt_winters",detail:"holt_winters(v range-vector, sf scalar, tf scalar)",documentation:"Produces a smoothed value for time series based on the range in `v`. The lower the smoothing factor `sf`, the more importance is given to old data. The higher the trend factor `tf`, the more trends in the data is considered. Both `sf` and `tf` must be between 0 and 1."},{insertText:"hour",label:"hour",detail:"hour(v=vector(time()) instant-vector)",documentation:"Returns the hour of the day for each of the given times in UTC. Returned values are from 0 to 23."},{insertText:"idelta",label:"idelta",detail:"idelta(v range-vector)",documentation:"Calculates the difference between the last two samples in the range vector `v`, returning an instant vector with the given deltas and equivalent labels."},{insertText:"increase",label:"increase",detail:"increase(v range-vector)",documentation:"Calculates the increase in the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. The increase is extrapolated to cover the full time range as specified in the range vector selector, so that it is possible to get a non-integer result even if a counter increases only by integer increments."},{insertText:"irate",label:"irate",detail:"irate(v range-vector)",documentation:"Calculates the per-second instant rate of increase of the time series in the range vector. This is based on the last two data points. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for."},{insertText:"label_join",label:"label_join",detail:"label_join(v instant-vector, dst_label string, separator string, src_label_1 string, src_label_2 string, ...)",documentation:"For each timeseries in `v`, joins all the values of all the `src_labels` using `separator` and returns the timeseries with the label `dst_label` containing the joined value. There can be any number of `src_labels` in this function."},{insertText:"label_replace",label:"label_replace",detail:"label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)",documentation:"For each timeseries in `v`, `label_replace(v instant-vector, dst_label string, replacement string, src_label string, regex string)`  matches the regular expression `regex` against the label `src_label`.  If it matches, then the timeseries is returned with the label `dst_label` replaced by the expansion of `replacement`. `$1` is replaced with the first matching subgroup, `$2` with the second etc. If the regular expression doesn't match then the timeseries is returned unchanged."},{insertText:"ln",label:"ln",detail:"ln(v instant-vector)",documentation:"Calculates the natural logarithm for all elements in `v`.\nSpecial cases are:\n * `ln(+Inf) = +Inf`\n * `ln(0) = -Inf`\n * `ln(x < 0) = NaN`\n * `ln(NaN) = NaN`"},{insertText:"log2",label:"log2",detail:"log2(v instant-vector)",documentation:"Calculates the binary logarithm for all elements in `v`. The special cases are equivalent to those in `ln`."},{insertText:"log10",label:"log10",detail:"log10(v instant-vector)",documentation:"Calculates the decimal logarithm for all elements in `v`. The special cases are equivalent to those in `ln`."},{insertText:"minute",label:"minute",detail:"minute(v=vector(time()) instant-vector)",documentation:"Returns the minute of the hour for each of the given times in UTC. Returned values are from 0 to 59."},{insertText:"month",label:"month",detail:"month(v=vector(time()) instant-vector)",documentation:"Returns the month of the year for each of the given times in UTC. Returned values are from 1 to 12, where 1 means January etc."},{insertText:"predict_linear",label:"predict_linear",detail:"predict_linear(v range-vector, t scalar)",documentation:"Predicts the value of time series `t` seconds from now, based on the range vector `v`, using simple linear regression."},{insertText:"rate",label:"rate",detail:"rate(v range-vector)",documentation:"Calculates the per-second average rate of increase of the time series in the range vector. Breaks in monotonicity (such as counter resets due to target restarts) are automatically adjusted for. Also, the calculation extrapolates to the ends of the time range, allowing for missed scrapes or imperfect alignment of scrape cycles with the range's time period."},{insertText:"resets",label:"resets",detail:"resets(v range-vector)",documentation:"For each input time series, `resets(v range-vector)` returns the number of counter resets within the provided time range as an instant vector. Any decrease in the value between two consecutive samples is interpreted as a counter reset."},{insertText:"round",label:"round",detail:"round(v instant-vector, to_nearest=1 scalar)",documentation:"Rounds the sample values of all elements in `v` to the nearest integer. Ties are resolved by rounding up. The optional `to_nearest` argument allows specifying the nearest multiple to which the sample values should be rounded. This multiple may also be a fraction."},{insertText:"scalar",label:"scalar",detail:"scalar(v instant-vector)",documentation:"Given a single-element input vector, `scalar(v instant-vector)` returns the sample value of that single element as a scalar. If the input vector does not have exactly one element, `scalar` will return `NaN`."},{insertText:"sgn",label:"sgn",detail:"sgn(v instant-vector)",documentation:"Returns a vector with all sample values converted to their sign, defined as this: 1 if v is positive, -1 if v is negative and 0 if v is equal to zero."},{insertText:"sort",label:"sort",detail:"sort(v instant-vector)",documentation:"Returns vector elements sorted by their sample values, in ascending order."},{insertText:"sort_desc",label:"sort_desc",detail:"sort_desc(v instant-vector)",documentation:"Returns vector elements sorted by their sample values, in descending order."},{insertText:"sqrt",label:"sqrt",detail:"sqrt(v instant-vector)",documentation:"Calculates the square root of all elements in `v`."},{insertText:"time",label:"time",detail:"time()",documentation:"Returns the number of seconds since January 1, 1970 UTC. Note that this does not actually return the current time, but the time at which the expression is to be evaluated."},{insertText:"timestamp",label:"timestamp",detail:"timestamp(v instant-vector)",documentation:"Returns the timestamp of each of the samples of the given vector as the number of seconds since January 1, 1970 UTC."},{insertText:"vector",label:"vector",detail:"vector(s scalar)",documentation:"Returns the scalar `s` as a vector with no labels."},{insertText:"year",label:"year",detail:"year(v=vector(time()) instant-vector)",documentation:"Returns the year for each of the given times in UTC."},{insertText:"avg_over_time",label:"avg_over_time",detail:"avg_over_time(range-vector)",documentation:"The average value of all points in the specified interval."},{insertText:"min_over_time",label:"min_over_time",detail:"min_over_time(range-vector)",documentation:"The minimum value of all points in the specified interval."},{insertText:"max_over_time",label:"max_over_time",detail:"max_over_time(range-vector)",documentation:"The maximum value of all points in the specified interval."},{insertText:"sum_over_time",label:"sum_over_time",detail:"sum_over_time(range-vector)",documentation:"The sum of all values in the specified interval."},{insertText:"count_over_time",label:"count_over_time",detail:"count_over_time(range-vector)",documentation:"The count of all values in the specified interval."},{insertText:"quantile_over_time",label:"quantile_over_time",detail:"quantile_over_time(scalar, range-vector)",documentation:"The φ-quantile (0 ≤ φ ≤ 1) of the values in the specified interval."},{insertText:"stddev_over_time",label:"stddev_over_time",detail:"stddev_over_time(range-vector)",documentation:"The population standard deviation of the values in the specified interval."},{insertText:"stdvar_over_time",label:"stdvar_over_time",detail:"stdvar_over_time(range-vector)",documentation:"The population standard variance of the values in the specified interval."},{insertText:"last_over_time",label:"last_over_time",detail:"last_over_time(range-vector)",documentation:"The most recent point value in specified interval."}],i={comment:{pattern:/#.*/},"context-aggregation":{pattern:/((by|without)\s*)\([^)]*\)/,lookbehind:!0,inside:{"label-key":{pattern:/[^(),\s][^,)]*[^),\s]*/,alias:"attr-name"},punctuation:/[()]/}},"context-labels":{pattern:/\{[^}]*(?=}?)/,greedy:!0,inside:{comment:{pattern:/#.*/},"label-key":{pattern:/[a-z_]\w*(?=\s*(=|!=|=~|!~))/,alias:"attr-name",greedy:!0},"label-value":{pattern:/"(?:\\.|[^\\"])*"/,greedy:!0,alias:"attr-value"},punctuation:/[{]/}},function:new RegExp(`\\b(?:${r.map(e=>e.label).join("|")})(?=\\s*\\()`,"i"),"context-range":[{pattern:/\[[^\]]*(?=])/,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}},{pattern:/(offset\s+)\w+/,lookbehind:!0,inside:{"range-duration":{pattern:/\b\d+[smhdwy]\b/i,alias:"number"}}}],idList:{pattern:/\d+(\|\d+)+/,alias:"number"},number:/\b-?\d+((\.\d*)?([eE][+-]?\d+)?)?\b/,operator:new RegExp(`/[-+*/=%^~]|&&?|\\|?\\||!=?|<(?:=>?|<|>)?|>[>=]?|\\b(?:${["by","group_left","group_right","ignoring","on","offset","without"].join("|")})\\b`,"i"),punctuation:/[{};()`,.]/};t.c=i},vmN6:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n("vF1F"),r=n("t8hP"),i=n("kDLi"),o=n("exx3"),s=n("q1tI"),l=n("Jzaf"),c=n("IpGs"),u=n("dVib"),d=n("nKUr");function m(e){const{rulesSource:t,rule:n}=e,a=Object(i.useStyles2)(v),m=Object(s.useMemo)(()=>{if(Object(l.j)(t))return[{name:t.name,icon:t.meta.info.logos.small}];if(Object(c.j)(n.rulerRule)){const{data:e}=n.rulerRule.grafana_alert,t=e.reduce((e,t)=>{const n=Object(r.getDataSourceSrv)().getInstanceSettings(t.datasourceUid);return n&&n.uid!==o.b?(e[n.name]={name:n.name,icon:n.meta.info.logos.small},e):e},{});return Object.values(t)}return[]},[n,t]);return 0===m.length?null:Object(d.jsx)(u.a,{label:"Data source",children:m.map(({name:e,icon:t},n)=>Object(d.jsxs)("div",{children:[t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("img",{className:a.dataSourceIcon,src:t})," "]}),e]},e))})}function v(e){const t=e.spacing(2);return{dataSourceIcon:a.css`
      width: ${t};
      height: ${t};
    `}}},wDOy:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n("q1tI"),r=n("vF1F"),i=n("kDLi"),o=n("nKUr");const s=({cols:e,items:t,isExpandable:n=!1,onCollapse:s,onExpand:c,isExpanded:u,renderExpandedContent:d,testIdGenerator:m,renderPrefixCell:v,renderPrefixHeader:b})=>{if((s||c||u)&&!(s&&c&&u))throw new Error("either all of onCollapse, onExpand, isExpanded must be provided, or none");if((n||d)&&(!n||!d))throw new Error("either both isExpanded and renderExpandedContent must be provided, or neither");const h=Object(i.useStyles2)(l(e,n,!!b)),[p,g]=Object(a.useState)([]);return Object(o.jsxs)("div",{className:h.container,"data-testid":"dynamic-table",children:[Object(o.jsxs)("div",{className:h.row,"data-testid":"header",children:[b&&b(),n&&Object(o.jsx)("div",{className:h.cell}),e.map(e=>Object(o.jsx)("div",{className:h.cell,children:e.label},e.id))]}),t.map((a,l)=>{var b;const f=u?u(a):p.includes(a.id);return Object(o.jsxs)("div",{className:h.row,"data-testid":null!==(b=null==m?void 0:m(a,l))&&void 0!==b?b:"row",children:[v&&v(a,l,t),n&&Object(o.jsx)("div",{className:Object(r.cx)(h.cell,h.expandCell),children:Object(o.jsx)(i.IconButton,{size:"xl","data-testid":"collapse-toggle",className:h.expandButton,name:f?"angle-down":"angle-right",onClick:()=>(e=>{u&&s&&c?u(e)?s(e):c(e):g(p.includes(e.id)?p.filter(t=>t!==e.id):[...p,e.id])})(a),type:"button"})}),e.map(e=>Object(o.jsx)("div",{className:Object(r.cx)(h.cell,h.bodyCell),"data-column":e.label,children:e.renderCell(a,l)},`${a.id}-${e.id}`)),f&&d&&Object(o.jsx)("div",{className:h.expandedContentRow,"data-testid":"expanded-content",children:d(a,l,t)})]},a.id)})]})},l=(e,t,n)=>{const a=e.map(e=>e.size?"number"==typeof e.size?e.size+"fr":e.size:"auto");return t&&a.unshift("calc(1em + 16px)"),n&&a.unshift("0"),e=>({container:r.css`
      border: 1px solid ${e.colors.border.strong};
      border-radius: 2px;
      color: ${e.colors.text.secondary};
    `,row:r.css`
      display: grid;
      grid-template-columns: ${a.join(" ")};
      grid-template-rows: 1fr auto;

      &:nth-child(2n + 1) {
        background-color: ${e.colors.background.secondary};
      }

      &:nth-child(2n) {
        background-color: ${e.colors.background.primary};
      }

      ${e.breakpoints.down("sm")} {
        grid-template-columns: auto 1fr;
        grid-template-areas: 'left right';
        padding: 0 ${e.spacing(.5)};

        &:first-child {
          display: none;
        }

        ${n?"\n            & > *:first-child {\n              display: none;\n            }\n          ":""}
      }
    `,cell:r.css`
      align-items: center;
      padding: ${e.spacing(1)};

      ${e.breakpoints.down("sm")} {
        padding: ${e.spacing(1)} 0;
        grid-template-columns: 1fr;
      }
    `,bodyCell:r.css`
      overflow: hidden;
      word-break: break-all;
      ${e.breakpoints.down("sm")} {
        grid-column-end: right;
        grid-column-start: right;

        &::before {
          content: attr(data-column);
          display: block;
          color: ${e.colors.text.primary};
        }
      }
    `,expandCell:r.css`
      justify-content: center;

      ${e.breakpoints.down("sm")} {
        align-items: start;
        grid-area: left;
      }
    `,expandedContentRow:r.css`
      grid-column-end: ${a.length+1};
      grid-column-start: ${n?3:2};
      grid-row: 2;
      padding: 0 ${e.spacing(3)} 0 ${e.spacing(1)};
      position: relative;

      ${e.breakpoints.down("sm")} {
        grid-column-start: 2;
        border-top: 1px solid ${e.colors.border.strong};
        grid-row: auto;
        padding: ${e.spacing(1)} 0 0 0;
      }
    `,expandButton:r.css`
      margin-right: 0;
      display: block;
    `})}},xVL3:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var a,r,i=n("vF1F"),o=n("Obii"),s=n("kDLi"),l=n("rhRp"),c=n("q1tI"),u=n("IpGs"),d=n("Qil4"),m=n("nKUr");const v=({rule:e,isDeleting:t,isCreating:n})=>{const i=Object(s.useStyles2)(b),{promRule:v}=e,h=Object(c.useMemo)(()=>{var e;if(v&&Object(u.f)(v)&&null!==(e=v.alerts)&&void 0!==e&&e.length&&v.state!==l.c.Inactive){const e=Object(u.e)(v);if(e)return Object(m.jsxs)("span",{title:String(e),className:i.for,children:["for"," ",Object(o.intervalToAbbreviatedDurationString)({start:e,end:new Date},!1)]})}return null},[v,i]);return t?a||(a=Object(m.jsxs)(s.HorizontalGroup,{align:"flex-start",children:[Object(m.jsx)(s.Spinner,{}),"deleting"]})):n?r||(r=Object(m.jsxs)(s.HorizontalGroup,{align:"flex-start",children:[" ",Object(m.jsx)(s.Spinner,{}),"creating"]})):v&&Object(u.f)(v)?Object(m.jsxs)(s.HorizontalGroup,{align:"flex-start",children:[Object(m.jsx)(d.a,{state:v.state}),h]}):v&&Object(u.l)(v)?Object(m.jsx)(m.Fragment,{children:"Recording rule"}):Object(m.jsx)(m.Fragment,{children:"n/a"})},b=e=>({for:i.css`
    font-size: ${e.typography.bodySmall.fontSize};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    padding-top: 2px;
  `})},yZbJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("q1tI");var a=n("vF1F"),r=n("kDLi"),i=n("zlPf"),o=n("nKUr");function s(e){const{annotations:t}=e,n=Object(r.useStyles2)(l);return 0===t.length?null:Object(o.jsx)("div",{className:n.annotations,children:t.map(([e,t])=>Object(o.jsx)(i.a,{annotationKey:e,value:t},e))})}const l=()=>({annotations:a.css`
    margin-top: 46px;
  `})},zlPf:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("q1tI");var a=n("Ei3L"),r=n("vF1F"),i=n("kDLi"),o=n("dVib"),s=n("d6cI"),l=n("nKUr");const c=["message","description"],u=({annotationKey:e,value:t})=>{const n=s.k[e]?Object(l.jsx)(i.Tooltip,{content:e,placement:"top",theme:"info",children:Object(l.jsx)("span",{children:s.k[e]})}):e;return Object(l.jsx)(o.a,{label:n,horizontal:!0,children:Object(l.jsx)(d,{annotationKey:e,value:t})})},d=({annotationKey:e,value:t})=>{const n=Object(i.useStyles)(m);return c.includes(e)?Object(l.jsx)(a.a,{children:t}):t&&t.startsWith("http")?Object(l.jsx)("a",{href:t,target:"__blank",className:n.link,children:t}):Object(l.jsx)(l.Fragment,{children:t})},m=e=>({well:r.css`
    word-break: break-all;
  `,link:r.css`
    word-break: break-all;
    color: ${e.colors.textBlue};
  `})}}]);
//# sourceMappingURL=default~AlertRuleListIndex~AlertingRule~DashboardPage.d7cfb4e56c8be9229275.js.map