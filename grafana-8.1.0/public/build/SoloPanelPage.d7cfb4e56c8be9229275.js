(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{gBvE:function(t,e,a){"use strict";a.r(e),function(t){a.d(e,"SoloPanelPage",(function(){return c}));var n,s=a("q1tI"),r=a("0cfB"),i=a("/MKj"),o=a("jYz7"),d=a("Yuww"),l=a("8M//"),u=a("nKUr");class c extends s.Component{constructor(...t){var e,a,n;super(...t),n={panel:null,notFound:!1},(a="state")in(e=this)?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}componentDidMount(){const{match:t,route:e}=this.props;this.props.initDashboard({urlSlug:t.params.slug,urlUid:t.params.uid,urlType:t.params.type,routeName:e.routeName,fixUrl:!1})}getPanelId(){var t;return parseInt(null!==(t=this.props.queryParams.panelId)&&void 0!==t?t:"0",10)}componentDidUpdate(t){const{dashboard:e}=this.props;if(e&&(!t.dashboard||t.dashboard.uid!==e.uid)){const t=e.getPanelByUrlId(this.props.queryParams.panelId);if(!t)return void this.setState({notFound:!0});this.setState({panel:t})}}render(){const{dashboard:t}=this.props,{notFound:e,panel:a}=this.state;return e?Object(u.jsxs)("div",{className:"alert alert-error",children:["Panel with id ",this.getPanelId()," not found"]}):a&&t?Object(u.jsx)("div",{className:"panel-solo",children:Object(u.jsx)(o.a,{children:({width:e,height:n})=>0===e?null:Object(u.jsx)(d.a,{width:e,height:n,dashboard:t,panel:a,isEditing:!1,isViewing:!1,isInView:!0})})}):n||(n=Object(u.jsx)("div",{children:"Loading & initializing dashboard"}))}}const h={initDashboard:l.a};e.default=Object(r.hot)(t)(Object(i.connect)(t=>({dashboard:t.dashboard.getModel()}),h)(c))}.call(this,a("3UD+")(t))}}]);
//# sourceMappingURL=SoloPanelPage.d7cfb4e56c8be9229275.js.map