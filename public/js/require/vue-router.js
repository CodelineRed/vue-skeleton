/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */
var VueRouter=function(e,t){"use strict";const n="undefined"!=typeof window;function r(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const o=Object.assign;function a(e,t){const n={};for(const r in t){const o=t[r];n[r]=s(o)?o.map(e):e(o)}return n}const c=()=>{},s=Array.isArray,i=/\/$/,l=e=>e.replace(i,"");function u(e,t,n="/"){let r,o={},a="",c="";const s=t.indexOf("#");let i=t.indexOf("?");return s<i&&s>=0&&(i=-1),i>-1&&(r=t.slice(0,i),a=t.slice(i+1,s>-1?s:t.length),o=e(a)),s>-1&&(r=r||t.slice(0,s),c=t.slice(s,t.length)),r=function(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),o=r[r.length-1];".."!==o&&"."!==o||r.push("");let a,c,s=n.length-1;for(a=0;a<r.length;a++)if(c=r[a],"."!==c){if(".."!==c)break;s>1&&s--}return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}(null!=r?r:t,n),{fullPath:r+(a&&"?")+a+c,path:r,query:o,hash:c}}function f(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function p(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function h(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!d(e[n],t[n]))return!1;return!0}function d(e,t){return s(e)?m(e,t):s(t)?m(t,e):e===t}function m(e,t){return s(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}var g,v;function y(e){if(!e)if(n){const t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),l(e)}!function(e){e.pop="pop",e.push="push"}(g||(g={})),function(e){e.back="back",e.forward="forward",e.unknown=""}(v||(v={}));const b=/^[^#]+#/;function w(e,t){return e.replace(b,"#")+t}const E=()=>({left:window.pageXOffset,top:window.pageYOffset});function R(e,t){return(history.state?history.state.position-t:-1)+e}const O=new Map;function k(e,t){const{pathname:n,search:r,hash:o}=t,a=e.indexOf("#");if(a>-1){let t=o.includes(e.slice(a))?e.slice(a).length:1,n=o.slice(t);return"/"!==n[0]&&(n="/"+n),f(n,"")}return f(n,e)+r+o}function j(e,t,n,r=!1,o=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:o?E():null}}function P(e){const t=function(e){const{history:t,location:n}=window,r={value:k(e,n)},a={value:t.state};function c(r,o,c){const s=e.indexOf("#"),i=s>-1?(n.host&&document.querySelector("base")?e:e.slice(s))+r:location.protocol+"//"+location.host+e+r;try{t[c?"replaceState":"pushState"](o,"",i),a.value=o}catch(e){console.error(e),n[c?"replace":"assign"](i)}}return a.value||c(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:a,push:function(e,n){const s=o({},a.value,t.state,{forward:e,scroll:E()});c(s.current,s,!0),c(e,o({},j(r.value,e,null),{position:s.position+1},n),!1),r.value=e},replace:function(e,n){c(e,o({},t.state,j(a.value.back,e,a.value.forward,!0),n,{position:a.value.position}),!0),r.value=e}}}(e=y(e)),n=function(e,t,n,r){let a=[],c=[],s=null;const i=({state:o})=>{const c=k(e,location),i=n.value,l=t.value;let u=0;if(o){if(n.value=c,t.value=o,s&&s===i)return void(s=null);u=l?o.position-l.position:0}else r(c);a.forEach((e=>{e(n.value,i,{delta:u,type:g.pop,direction:u?u>0?v.forward:v.back:v.unknown})}))};function l(){const{history:e}=window;e.state&&e.replaceState(o({},e.state,{scroll:E()}),"")}return window.addEventListener("popstate",i),window.addEventListener("beforeunload",l,{passive:!0}),{pauseListeners:function(){s=n.value},listen:function(e){a.push(e);const t=()=>{const t=a.indexOf(e);t>-1&&a.splice(t,1)};return c.push(t),t},destroy:function(){for(const e of c)e();c=[],window.removeEventListener("popstate",i),window.removeEventListener("beforeunload",l)}}}(e,t.state,t.location,t.replace),r=o({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:w.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function C(e){return"string"==typeof e||"symbol"==typeof e}const x={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},$=Symbol("");var S;function A(e,t){return o(new Error,{type:e,[$]:!0},t)}function L(e,t){return e instanceof Error&&$ in e&&(null==t||!!(e.type&t))}e.NavigationFailureType=void 0,(S=e.NavigationFailureType||(e.NavigationFailureType={}))[S.aborted=4]="aborted",S[S.cancelled=8]="cancelled",S[S.duplicated=16]="duplicated";const M="[^/]+?",q={sensitive:!1,strict:!1,start:!0,end:!0},B=/[.+*?^${}()[\]/\\]/g;function T(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function G(e,t){let n=0;const r=e.score,o=t.score;for(;n<r.length&&n<o.length;){const e=T(r[n],o[n]);if(e)return e;n++}if(1===Math.abs(o.length-r.length)){if(_(r))return 1;if(_(o))return-1}return o.length-r.length}function _(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const F={type:0,value:""},W=/[a-zA-Z0-9_]/;function D(e,t,n){const r=function(e,t){const n=o({},q,t),r=[];let a=n.start?"^":"";const c=[];for(const o of e){const e=o.length?[]:[90];n.strict&&!o.length&&(a+="/");for(let r=0;r<o.length;r++){const s=o[r];let i=40+(n.sensitive?.25:0);if(0===s.type)r||(a+="/"),a+=s.value.replace(B,"\\$&"),i+=40;else if(1===s.type){const{value:e,repeatable:n,optional:l,regexp:u}=s;c.push({name:e,repeatable:n,optional:l});const f=u||M;if(f!==M){i+=10;try{new RegExp(`(${f})`)}catch(t){throw new Error(`Invalid custom RegExp for param "${e}" (${f}): `+t.message)}}let p=n?`((?:${f})(?:/(?:${f}))*)`:`(${f})`;r||(p=l&&o.length<2?`(?:/${p})`:"/"+p),l&&(p+="?"),a+=p,i+=20,l&&(i+=-8),n&&(i+=-20),".*"===f&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(a+="/?"),n.end?a+="$":n.strict&&(a+="(?:/|$)");const i=new RegExp(a,n.sensitive?"":"i");return{re:i,score:r,keys:c,parse:function(e){const t=e.match(i),n={};if(!t)return null;for(let e=1;e<t.length;e++){const r=t[e]||"",o=c[e-1];n[o.name]=r&&o.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(const o of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of o)if(0===e.type)n+=e.value;else if(1===e.type){const{value:a,repeatable:c,optional:i}=e,l=a in t?t[a]:"";if(s(l)&&!c)throw new Error(`Provided param "${a}" is an array but it is not repeatable (* or + modifiers)`);const u=s(l)?l.join("/"):l;if(!u){if(!i)throw new Error(`Missing required param "${a}"`);o.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n||"/"}}}(function(e){if(!e)return[[]];if("/"===e)return[[F]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${l}": ${e}`)}let n=0,r=n;const o=[];let a;function c(){a&&o.push(a),a=[]}let s,i=0,l="",u="";function f(){l&&(0===n?a.push({type:0,value:l}):1===n||2===n||3===n?(a.length>1&&("*"===s||"+"===s)&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),a.push({type:1,value:l,regexp:u,repeatable:"*"===s||"+"===s,optional:"*"===s||"?"===s})):t("Invalid state to consume buffer"),l="")}function p(){l+=s}for(;i<e.length;)if(s=e[i++],"\\"!==s||2===n)switch(n){case 0:"/"===s?(l&&f(),c()):":"===s?(f(),n=1):p();break;case 4:p(),n=r;break;case 1:"("===s?n=2:W.test(s)?p():(f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--);break;case 2:")"===s?"\\"==u[u.length-1]?u=u.slice(0,-1)+s:n=3:u+=s;break;case 3:f(),n=0,"*"!==s&&"?"!==s&&"+"!==s&&i--,u="";break;default:t("Unknown state")}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${l}"`),f(),c(),o}(e.path),n),a=o(r,{record:e,parent:t,children:[],alias:[]});return t&&!a.record.aliasOf==!t.record.aliasOf&&t.children.push(a),a}function I(e,t){const n=[],r=new Map;function a(e,n,r){const l=!r,u=function(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:U(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}(e);u.aliasOf=r&&r.record;const f=N(t,e),p=[u];if("alias"in e){const t="string"==typeof e.alias?[e.alias]:e.alias;for(const e of t)p.push(o({},u,{components:r?r.record.components:u.components,path:e,aliasOf:r?r.record:u}))}let h,d;for(const t of p){const{path:o}=t;if(n&&"/"!==o[0]){const e=n.record.path;t.path=n.record.path+(o&&("/"===e[e.length-1]?"":"/")+o)}if(h=D(t,n,f),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),l&&e.name&&!V(h)&&s(e.name)),u.children){const e=u.children;for(let t=0;t<e.length;t++)a(e[t],h,r&&r.children[t])}r=r||h,(h.record.components&&Object.keys(h.record.components).length||h.record.name||h.record.redirect)&&i(h)}return d?()=>{s(d)}:c}function s(e){if(C(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function i(e){let t=0;for(;t<n.length&&G(e,n[t])>=0&&(e.record.path!==n[t].record.path||!z(e,n[t]));)t++;n.splice(t,0,e),e.record.name&&!V(e)&&r.set(e.record.name,e)}return t=N({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>a(e))),{addRoute:a,resolve:function(e,t){let a,c,s,i={};if("name"in e&&e.name){if(a=r.get(e.name),!a)throw A(1,{location:e});s=a.record.name,i=o(K(t.params,a.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params&&K(e.params,a.keys.map((e=>e.name)))),c=a.stringify(i)}else if("path"in e)c=e.path,a=n.find((e=>e.re.test(c))),a&&(i=a.parse(c),s=a.record.name);else{if(a=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!a)throw A(1,{location:e,currentLocation:t});s=a.record.name,i=o({},t.params,e.params),c=a.stringify(i)}const l=[];let u=a;for(;u;)l.unshift(u.record),u=u.parent;return{name:s,path:c,params:i,matched:l,meta:H(l)}},removeRoute:s,getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}function K(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function U(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="object"==typeof n?n[r]:n;return t}function V(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function H(e){return e.reduce(((e,t)=>o(e,t.meta)),{})}function N(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function z(e,t){return t.children.some((t=>t===e||z(e,t)))}const Q=/#/g,X=/&/g,Y=/\//g,Z=/=/g,J=/\?/g,ee=/\+/g,te=/%5B/g,ne=/%5D/g,re=/%5E/g,oe=/%60/g,ae=/%7B/g,ce=/%7C/g,se=/%7D/g,ie=/%20/g;function le(e){return encodeURI(""+e).replace(ce,"|").replace(te,"[").replace(ne,"]")}function ue(e){return le(e).replace(ee,"%2B").replace(ie,"+").replace(Q,"%23").replace(X,"%26").replace(oe,"`").replace(ae,"{").replace(se,"}").replace(re,"^")}function fe(e){return null==e?"":function(e){return le(e).replace(Q,"%23").replace(J,"%3F")}(e).replace(Y,"%2F")}function pe(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}function he(e){const t={};if(""===e||"?"===e)return t;const n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){const r=n[e].replace(ee," "),o=r.indexOf("="),a=pe(o<0?r:r.slice(0,o)),c=o<0?null:pe(r.slice(o+1));if(a in t){let e=t[a];s(e)||(e=t[a]=[e]),e.push(c)}else t[a]=c}return t}function de(e){let t="";for(let n in e){const r=e[n];(n=ue(n).replace(Z,"%3D"),null!=r)?(s(r)?r.map((e=>e&&ue(e))):[r&&ue(r)]).forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})):void 0!==r&&(t+=(t.length?"&":"")+n)}return t}function me(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=s(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const ge=Symbol(""),ve=Symbol(""),ye=Symbol(""),be=Symbol(""),we=Symbol("");function Ee(){let e=[];return{add:function(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function Re(e,n,r){const o=()=>{e[n].delete(r)};t.onUnmounted(o),t.onDeactivated(o),t.onActivated((()=>{e[n].add(r)})),e[n].add(r)}function Oe(e,t,n,r,o){const a=r&&(r.enterCallbacks[o]=r.enterCallbacks[o]||[]);return()=>new Promise(((c,s)=>{const i=e=>{var i;!1===e?s(A(4,{from:n,to:t})):e instanceof Error?s(e):"string"==typeof(i=e)||i&&"object"==typeof i?s(A(2,{from:t,to:e})):(a&&r.enterCallbacks[o]===a&&"function"==typeof e&&a.push(e),c())},l=e.call(r&&r.instances[o],t,n,i);let u=Promise.resolve(l);e.length<3&&(u=u.then(i)),u.catch((e=>s(e)))}))}function ke(e,t,n,o){const a=[];for(const s of e)for(const e in s.components){let i=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if("object"==typeof(c=i)||"displayName"in c||"props"in c||"__vccOpts"in c){const r=(i.__vccOpts||i)[t];r&&a.push(Oe(r,n,o,s,e))}else{let c=i();a.push((()=>c.then((a=>{if(!a)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const c=r(a)?a.default:a;s.components[e]=c;const i=(c.__vccOpts||c)[t];return i&&Oe(i,n,o,s,e)()}))))}}var c;return a}function je(e){const n=t.inject(ye),r=t.inject(be),o=t.computed((()=>n.resolve(t.unref(e.to)))),a=t.computed((()=>{const{matched:e}=o.value,{length:t}=e,n=e[t-1],a=r.matched;if(!n||!a.length)return-1;const c=a.findIndex(p.bind(null,n));if(c>-1)return c;const s=Ce(e[t-2]);return t>1&&Ce(n)===s&&a[a.length-1].path!==s?a.findIndex(p.bind(null,e[t-2])):c})),i=t.computed((()=>a.value>-1&&function(e,t){for(const n in t){const r=t[n],o=e[n];if("string"==typeof r){if(r!==o)return!1}else if(!s(o)||o.length!==r.length||r.some(((e,t)=>e!==o[t])))return!1}return!0}(r.params,o.value.params))),l=t.computed((()=>a.value>-1&&a.value===r.matched.length-1&&h(r.params,o.value.params)));return{route:o,href:t.computed((()=>o.value.href)),isActive:i,isExactActive:l,navigate:function(r={}){return function(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||e.defaultPrevented||void 0!==e.button&&0!==e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(r)?n[t.unref(e.replace)?"replace":"push"](t.unref(e.to)).catch(c):Promise.resolve()}}}const Pe=t.defineComponent({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:je,setup(e,{slots:n}){const r=t.reactive(je(e)),{options:o}=t.inject(ye),a=t.computed((()=>({[xe(e.activeClass,o.linkActiveClass,"router-link-active")]:r.isActive,[xe(e.exactActiveClass,o.linkExactActiveClass,"router-link-exact-active")]:r.isExactActive})));return()=>{const o=n.default&&n.default(r);return e.custom?o:t.h("a",{"aria-current":r.isExactActive?e.ariaCurrentValue:null,href:r.href,onClick:r.navigate,class:a.value},o)}}});function Ce(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const xe=(e,t,n)=>null!=e?e:null!=t?t:n;function $e(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Se=t.defineComponent({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:n,slots:r}){const a=t.inject(we),c=t.computed((()=>e.route||a.value)),s=t.inject(ve,0),i=t.computed((()=>{let e=t.unref(s);const{matched:n}=c.value;let r;for(;(r=n[e])&&!r.components;)e++;return e})),l=t.computed((()=>c.value.matched[i.value]));t.provide(ve,t.computed((()=>i.value+1))),t.provide(ge,l),t.provide(we,c);const u=t.ref();return t.watch((()=>[u.value,l.value,e.name]),(([e,t,n],[r,o,a])=>{t&&(t.instances[n]=e,o&&o!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=o.leaveGuards),t.updateGuards.size||(t.updateGuards=o.updateGuards))),!e||!t||o&&p(t,o)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const a=c.value,s=e.name,i=l.value,f=i&&i.components[s];if(!f)return $e(r.default,{Component:f,route:a});const p=i.props[s],h=p?!0===p?a.params:"function"==typeof p?p(a):p:null,d=t.h(f,o({},h,n,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(i.instances[s]=null)},ref:u}));return $e(r.default,{Component:d,route:a})||d}}});return e.RouterLink=Pe,e.RouterView=Se,e.START_LOCATION=x,e.createMemoryHistory=function(e=""){let t=[],n=[""],r=0;function o(e){r++,r!==n.length&&n.splice(r),n.push(e)}const a={location:"",state:{},base:e=y(e),createHref:w.bind(null,e),replace(e){n.splice(r--,1),o(e)},push(e,t){o(e)},listen:e=>(t.push(e),()=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)}),destroy(){t=[],n=[""],r=0},go(e,o=!0){const a=this.location,c=e<0?v.back:v.forward;r=Math.max(0,Math.min(r+e,n.length-1)),o&&function(e,n,{direction:r,delta:o}){const a={direction:r,delta:o,type:g.pop};for(const r of t)r(e,n,a)}(this.location,a,{direction:c,delta:e})}};return Object.defineProperty(a,"location",{enumerable:!0,get:()=>n[r]}),a},e.createRouter=function(e){const r=I(e.routes,e),i=e.parseQuery||he,l=e.stringifyQuery||de,f=e.history,d=Ee(),m=Ee(),v=Ee(),y=t.shallowRef(x);let b=x;n&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const w=a.bind(null,(e=>""+e)),k=a.bind(null,fe),j=a.bind(null,pe);function P(e,t){if(t=o({},t||y.value),"string"==typeof e){const n=u(i,e,t.path),a=r.resolve({path:n.path},t),c=f.createHref(n.fullPath);return o(n,a,{params:j(a.params),hash:pe(n.hash),redirectedFrom:void 0,href:c})}let n;if("path"in e)n=o({},e,{path:u(i,e.path,t.path).path});else{const r=o({},e.params);for(const e in r)null==r[e]&&delete r[e];n=o({},e,{params:k(r)}),t.params=k(t.params)}const a=r.resolve(n,t),c=e.hash||"";a.params=w(j(a.params));const s=function(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(l,o({},e,{hash:(p=c,le(p).replace(ae,"{").replace(se,"}").replace(re,"^")),path:a.path}));var p;const h=f.createHref(s);return o({fullPath:s,hash:c,query:l===de?me(e.query):e.query||{}},a,{redirectedFrom:void 0,href:h})}function $(e){return"string"==typeof e?u(i,e,y.value.path):o({},e)}function S(e,t){if(b!==e)return A(8,{from:t,to:e})}function M(e){return B(e)}function q(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"==typeof n?n(e):n;return"string"==typeof r&&(r=r.includes("?")||r.includes("#")?r=$(r):{path:r},r.params={}),o({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function B(e,t){const n=b=P(e),r=y.value,a=e.state,c=e.force,s=!0===e.replace,i=q(n);if(i)return B(o($(i),{state:"object"==typeof i?o({},a,i.state):a,force:c,replace:s}),t||n);const u=n;let f;return u.redirectedFrom=t,!c&&function(e,t,n){const r=t.matched.length-1,o=n.matched.length-1;return r>-1&&r===o&&p(t.matched[r],n.matched[o])&&h(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(l,r,n)&&(f=A(16,{to:u,from:r}),z(r,r,!0,!1)),(f?Promise.resolve(f):_(u,r)).catch((e=>L(e)?L(e,2)?e:N(e):H(e,u,r))).then((e=>{if(e){if(L(e,2))return B(o({replace:s},$(e.to),{state:"object"==typeof e.to?o({},a,e.to.state):a,force:c}),t||u)}else e=W(u,r,!0,s,a);return F(u,r,e),e}))}function T(e,t){const n=S(e,t);return n?Promise.reject(n):Promise.resolve()}function G(e){const t=Y.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function _(e,t){let n;const[r,o,a]=function(e,t){const n=[],r=[],o=[],a=Math.max(t.matched.length,e.matched.length);for(let c=0;c<a;c++){const a=t.matched[c];a&&(e.matched.find((e=>p(e,a)))?r.push(a):n.push(a));const s=e.matched[c];s&&(t.matched.find((e=>p(e,s)))||o.push(s))}return[n,r,o]}(e,t);n=ke(r.reverse(),"beforeRouteLeave",e,t);for(const o of r)o.leaveGuards.forEach((r=>{n.push(Oe(r,e,t))}));const c=T.bind(null,e,t);return n.push(c),J(n).then((()=>{n=[];for(const r of d.list())n.push(Oe(r,e,t));return n.push(c),J(n)})).then((()=>{n=ke(o,"beforeRouteUpdate",e,t);for(const r of o)r.updateGuards.forEach((r=>{n.push(Oe(r,e,t))}));return n.push(c),J(n)})).then((()=>{n=[];for(const r of a)if(r.beforeEnter)if(s(r.beforeEnter))for(const o of r.beforeEnter)n.push(Oe(o,e,t));else n.push(Oe(r.beforeEnter,e,t));return n.push(c),J(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ke(a,"beforeRouteEnter",e,t),n.push(c),J(n)))).then((()=>{n=[];for(const r of m.list())n.push(Oe(r,e,t));return n.push(c),J(n)})).catch((e=>L(e,8)?e:Promise.reject(e)))}function F(e,t,n){v.list().forEach((r=>G((()=>r(e,t,n)))))}function W(e,t,r,a,c){const s=S(e,t);if(s)return s;const i=t===x,l=n?history.state:{};r&&(a||i?f.replace(e.fullPath,o({scroll:i&&l&&l.scroll},c)):f.push(e.fullPath,c)),y.value=e,z(e,t,r,i),N()}let D;let K,U=Ee(),V=Ee();function H(e,t,n){N(e);const r=V.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function N(e){return K||(K=!e,D||(D=f.listen(((e,t,r)=>{if(!Z.listening)return;const a=P(e),s=q(a);if(s)return void B(o(s,{replace:!0}),a).catch(c);b=a;const i=y.value;var l,u;n&&(l=R(i.fullPath,r.delta),u=E(),O.set(l,u)),_(a,i).catch((e=>L(e,12)?e:L(e,2)?(B(e.to,a).then((e=>{L(e,20)&&!r.delta&&r.type===g.pop&&f.go(-1,!1)})).catch(c),Promise.reject()):(r.delta&&f.go(-r.delta,!1),H(e,a,i)))).then((e=>{(e=e||W(a,i,!1))&&(r.delta&&!L(e,8)?f.go(-r.delta,!1):r.type===g.pop&&L(e,20)&&f.go(-1,!1)),F(a,i,e)})).catch(c)}))),U.list().forEach((([t,n])=>e?n(e):t())),U.reset()),e}function z(r,o,a,c){const{scrollBehavior:s}=e;if(!n||!s)return Promise.resolve();const i=!a&&function(e){const t=O.get(e);return O.delete(e),t}(R(r.fullPath,0))||(c||!a)&&history.state&&history.state.scroll||null;return t.nextTick().then((()=>s(r,o,i))).then((e=>e&&function(e){let t;if("el"in e){const n=e.el,r="string"==typeof n&&n.startsWith("#"),o="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=function(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}(e))).catch((e=>H(e,r,o)))}const Q=e=>f.go(e);let X;const Y=new Set,Z={currentRoute:y,listening:!0,addRoute:function(e,t){let n,o;return C(e)?(n=r.getRecordMatcher(e),o=t):o=e,r.addRoute(o,n)},removeRoute:function(e){const t=r.getRecordMatcher(e);t&&r.removeRoute(t)},hasRoute:function(e){return!!r.getRecordMatcher(e)},getRoutes:function(){return r.getRoutes().map((e=>e.record))},resolve:P,options:e,push:M,replace:function(e){return M(o($(e),{replace:!0}))},go:Q,back:()=>Q(-1),forward:()=>Q(1),beforeEach:d.add,beforeResolve:m.add,afterEach:v.add,onError:V.add,isReady:function(){return K&&y.value!==x?Promise.resolve():new Promise(((e,t)=>{U.add([e,t])}))},install(e){e.component("RouterLink",Pe),e.component("RouterView",Se),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>t.unref(y)}),n&&!X&&y.value===x&&(X=!0,M(f.location).catch((e=>{})));const r={};for(const e in x)Object.defineProperty(r,e,{get:()=>y.value[e],enumerable:!0});e.provide(ye,this),e.provide(be,t.shallowReactive(r)),e.provide(we,y);const o=e.unmount;Y.add(e),e.unmount=function(){Y.delete(e),Y.size<1&&(b=x,D&&D(),D=null,y.value=x,X=!1,K=!1),o()}}};function J(e){return e.reduce(((e,t)=>e.then((()=>G(t)))),Promise.resolve())}return Z},e.createRouterMatcher=I,e.createWebHashHistory=function(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),P(e)},e.createWebHistory=P,e.isNavigationFailure=L,e.loadRouteLocation=function(e){return e.matched.every((e=>e.redirect))?Promise.reject(new Error("Cannot load a route that redirects.")):Promise.all(e.matched.map((e=>e.components&&Promise.all(Object.keys(e.components).reduce(((t,n)=>{const o=e.components[n];return"function"!=typeof o||"displayName"in o||t.push(o().then((t=>{if(!t)return Promise.reject(new Error(`Couldn't resolve component "${n}" at "${e.path}". Ensure you passed a function that returns a promise.`));const o=r(t)?t.default:t;e.components[n]=o}))),t}),[]))))).then((()=>e))},e.matchedRouteKey=ge,e.onBeforeRouteLeave=function(e){const n=t.inject(ge,{}).value;n&&Re(n,"leaveGuards",e)},e.onBeforeRouteUpdate=function(e){const n=t.inject(ge,{}).value;n&&Re(n,"updateGuards",e)},e.parseQuery=he,e.routeLocationKey=be,e.routerKey=ye,e.routerViewLocationKey=we,e.stringifyQuery=de,e.useLink=je,e.useRoute=function(){return t.inject(be)},e.useRouter=function(){return t.inject(ye)},e.viewDepthKey=ve,e}({},Vue);