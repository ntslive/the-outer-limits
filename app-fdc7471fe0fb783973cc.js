webpackJsonp([0xd2a57dc1d883],{76:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(273),options:{plugins:[]}}]},164:function(e,n,t){"use strict";var o;n.components={"component---src-pages-index-js":t(269),"component---src-pages-chapters-alpha-centauri-js":t(267),"component---src-pages-chapters-apollo-18-js":t(268)},n.json=(o={"layout-index.json":t(111),"index.json":t(272)},o["layout-index.json"]=t(111),o["chapters-alpha-centauri.json"]=t(270),o["layout-index.json"]=t(111),o["chapters-apollo-18.json"]=t(271),o),n.layouts={"component---src-layouts-index-js":t(266)}},165:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(1),s=o(c),l=t(2),f=o(l),p=t(122),d=o(p),h=t(63),m=o(h),g=t(76),v=function(e){var n=e.children;return s.default.createElement("div",null,n())},R=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,i({},u,{pathname:"/404.html"}))),o.state={location:u,pageResources:d.default.getResourcesForPathname(t.location.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);t?this.setState({location:e.location,pageResources:t}):d.default.getResourcesForPathname(e.location.pathname,function(t){n.setState({location:e.location,pageResources:t})})}},n.prototype.componentDidMount=function(){var e=this;m.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);R.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=R,e.exports=n.default},63:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(288),a=o(r),u=(0,a.default)();e.exports=u},166:function(e,n,t){"use strict";var o=t(13),r={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var a=decodeURIComponent(t),u=a.slice(n.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},167:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(112),a=o(r),u=t(76),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},270:function(e,n,t){t(17),e.exports=function(e){return t.e(0xd472fd3170da,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(283)})})}},271:function(e,n,t){t(17),e.exports=function(e){return t.e(18068458521754,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(284)})})}},272:function(e,n,t){t(17),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(285)})})}},111:function(e,n,t){t(17),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(114)})})}},266:function(e,n,t){t(17),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(168)})})}},122:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(166)),u=o(a),i=t(63),c=o(i),s=void 0,l={},f={},p={},d={},h={},m=[],g=[],v={},R=[],y={},P=function(e){return e&&e.default||e},_=void 0,w=!0;_=t(169)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){j(e,function(){R=R.filter(function(n){return n!==e}),_.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){_.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){_.onPostLoadPageResources(e)});var E=function(e,n){return y[e]>y[n]?1:y[e]<y[n]?-1:0},x=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},j=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[n])e.nextTick(function(){t(null,d[n])});else{var o="component---"===n.slice(0,12)?f.components[n]||f.layouts[n]:f.json[n];o(function(e,o){d[n]=o,t(e,o)})}},b=function(n,t){h[n]?e.nextTick(function(){t(null,h[n])}):j(n,function(e,o){if(e)t(e);else{var r=P(o());h[n]=r,t(e,r)}})},C=1,k={empty:function(){g=[],v={},y={},R=[],m=[]},addPagesArray:function(e){m=e;var n="";n="/the-outer-limits",s=(0,u.default)(e,n)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return g.pop()},enqueue:function(e){if(!m.some(function(n){return n.path===e}))return!1;var n=1/C;C+=1,v[e]?v[e]+=1:v[e]=1,k.has(e)||g.unshift(e),g.sort(x);var t=s(e);return t.jsonName&&(y[t.jsonName]?y[t.jsonName]+=1+n:y[t.jsonName]=1+n,R.indexOf(t.jsonName)!==-1||d[t.jsonName]||R.unshift(t.jsonName)),t.componentChunkName&&(y[t.componentChunkName]?y[t.componentChunkName]+=1+n:y[t.componentChunkName]=1+n,R.indexOf(t.componentChunkName)!==-1||d[t.jsonName]||R.unshift(t.componentChunkName)),R.sort(E),_.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:y}},getPages:function(){return{pathArray:g,pathCount:v}},getPage:function(e){return s(e)},has:function(e){return g.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),w=!1;var o=s(n);if(!o)return console.log("A page wasn't found for \""+n+'"'),t();if(n=o.path,p[n])return e.nextTick(function(){t(p[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[n]})}),p[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return b(o.componentChunkName,function(e,n){e&&console.log("Loading the component for "+o.path+" failed"),r=n,i()}),b(o.jsonName,function(e,n){e&&console.log("Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&b(o.layoutComponentChunkName,function(e,n){e&&console.log("Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return g.slice(-1)[0]},length:function(){return g.length},indexOf:function(e){return g.length-g.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:k.getResourcesForPathname};n.default=k}).call(n,t(290))},286:function(e,n){e.exports=[{componentChunkName:"component---src-pages-index-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-chapters-alpha-centauri-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"chapters-alpha-centauri.json",path:"/chapters/alpha-centauri/"},{componentChunkName:"component---src-pages-chapters-apollo-18-js",layout:"index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"chapters-apollo-18.json",path:"/chapters/apollo-18/"}]},169:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(76),u=t(1),i=o(u),c=t(156),s=o(c),l=t(13),f=t(279),p=t(256),d=o(p),h=t(167),m=o(h),g=t(63),v=o(g),R=t(286),y=o(R),P=t(287),_=o(P),w=t(165),E=o(w),x=t(164),j=o(x),b=t(122),C=o(b);t(246),window.___emitter=v.default,C.default.addPagesArray(y.default),C.default.addProdRequires(j.default),window.asyncRequires=j.default,window.___loader=C.default,window.matchPath=l.matchPath;var k=_.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),N=function(e){var n=k[e];return null!=n&&(m.default.replace(n.toPath),!0)};N(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,n){N(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(170);var o=function(e){function n(t){t.page.path===C.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=k[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",n),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);C.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:m.default.location,action:m.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:m.default})[0],p=function(e){var n=e.children;return i.default.createElement(l.Router,{history:m.default},n)},h=(0,l.withRouter)(E.default);C.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(h,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return C.default.getPage(o.location.pathname)?(0,u.createElement)(E.default,r({page:!0},o)):(0,u.createElement)(E.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},287:function(e,n){e.exports=[]},170:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(63),a=o(r),u="/";u="/the-outer-limits/","serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},256:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},17:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},273:function(e,n,t){"use strict";t(184),t(185)},288:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).map(function(e){e(t)}),(e["*"]||[]).map(function(e){e(n,t)})}}}e.exports=t},290:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){m&&d&&(m=!1,d.length?h=d.concat(h):g=-1,h.length&&i())}function i(){if(!m){var e=r(u);m=!0;for(var n=h.length;n;){for(d=h,h=[];++g<n;)d&&d[g].run();g=-1,n=h.length}d=null,m=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],m=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];h.push(new c(e,n)),1!==h.length||m||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},267:function(e,n,t){t(17),e.exports=function(e){return t.e(99425040108286,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(172)})})}},268:function(e,n,t){t(17),e.exports=function(e){return t.e(0x8d94a7066bf5,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(173)})})}},269:function(e,n,t){t(17),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(174)})})}}});
//# sourceMappingURL=app-fdc7471fe0fb783973cc.js.map