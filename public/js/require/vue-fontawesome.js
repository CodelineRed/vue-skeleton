!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@fortawesome/fontawesome-svg-core")):"function"==typeof define&&define.amd?define(["exports","@fortawesome/fontawesome-svg-core"],e):e(t["vue-fontawesome"]={},t.FontAwesome)}(this,(function(t,e){"use strict";var r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};var n=function(t,e){return t(e={exports:{}},e.exports),e.exports}((function(t){!function(e){var r=function(t,e,n){if(!s(e)||f(e)||c(e)||p(e)||l(e))return e;var o,a=0,i=0;if(u(e))for(o=[],i=e.length;a<i;a++)o.push(r(t,e[a],n));else for(var y in o={},e)Object.prototype.hasOwnProperty.call(e,y)&&(o[t(y,n)]=r(t,e[y],n));return o},n=function(t){return y(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,(function(t,e){return e?e.toUpperCase():""}))).substr(0,1).toLowerCase()+t.substr(1)},o=function(t){var e=n(t);return e.substr(0,1).toUpperCase()+e.substr(1)},a=function(t,e){return function(t,e){var r=(e=e||{}).separator||"_",n=e.split||/(?=[A-Z])/;return t.split(n).join(r)}(t,e).toLowerCase()},i=Object.prototype.toString,l=function(t){return"function"==typeof t},s=function(t){return t===Object(t)},u=function(t){return"[object Array]"==i.call(t)},f=function(t){return"[object Date]"==i.call(t)},c=function(t){return"[object RegExp]"==i.call(t)},p=function(t){return"[object Boolean]"==i.call(t)},y=function(t){return(t-=0)==t},d=function(t,e){var r=e&&"process"in e?e.process:e;return"function"!=typeof r?t:function(e,n){return r(e,t,n)}},m={camelize:n,decamelize:a,pascalize:o,depascalize:a,camelizeKeys:function(t,e){return r(d(n,e),t)},decamelizeKeys:function(t,e){return r(d(a,e),t,e)},pascalizeKeys:function(t,e){return r(d(o,e),t)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=m:e.humps=m}(r)})),o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},l=function(t,e){var r={};for(var n in t)e.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(t,n)&&(r[n]=t[n]);return r},s=function(t){if(Array.isArray(t)){for(var e=0,r=Array(t.length);e<t.length;e++)r[e]=t[e];return r}return Array.from(t)};function u(t){return t.split(";").map((function(t){return t.trim()})).filter((function(t){return t})).reduce((function(t,e){var r=e.indexOf(":"),o=n.camelize(e.slice(0,r)),a=e.slice(r+1).trim();return t[o]=a,t}),{})}function f(t){return t.split(/\s+/).reduce((function(t,e){return t[e]=!0,t}),{})}function c(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.reduce((function(t,e){return Array.isArray(e)?t=t.concat(e):t.push(e),t}),[])}function p(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=(e.children||[]).map(p.bind(null,t)),a=Object.keys(e.attributes||{}).reduce((function(t,r){var n=e.attributes[r];switch(r){case"class":t.class=f(n);break;case"style":t.style=u(n);break;default:t.attrs[r]=n}return t}),{class:{},style:{},attrs:{}}),s=n.class,y=void 0===s?{}:s,d=n.style,m=void 0===d?{}:d,b=n.attrs,v=void 0===b?{}:b,g=l(n,["class","style","attrs"]);return"string"==typeof e?e:t(e.tag,i({class:c(a.class,y),style:i({},a.style,m),attrs:i({},a.attrs,v)},g,{props:r}),o)}var y=!1;try{y="production"===process.env.NODE_ENV}catch(t){}function d(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?a({},t,e):{}}function m(t){return e.parse.icon?e.parse.icon(t):null===t?null:"object"===(void 0===t?"undefined":o(t))&&t.prefix&&t.iconName?t:Array.isArray(t)&&2===t.length?{prefix:t[0],iconName:t[1]}:"string"==typeof t?{prefix:"fas",iconName:t}:void 0}var b={name:"FontAwesomeIcon",functional:!0,props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:String,default:null,validator:function(t){return["horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["lg","xs","sm","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1}},render:function(t,r){var n=r.props,o=n.icon,l=n.mask,s=n.symbol,u=n.title,f=m(o),c=d("classes",function(t){var e,r=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip-horizontal":"horizontal"===t.flip||"both"===t.flip,"fa-flip-vertical":"vertical"===t.flip||"both"===t.flip},a(e,"fa-"+t.size,null!==t.size),a(e,"fa-rotate-"+t.rotation,null!==t.rotation),a(e,"fa-pull-"+t.pull,null!==t.pull),a(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(r).map((function(t){return r[t]?t:null})).filter((function(t){return t}))}(n)),b=d("transform","string"==typeof n.transform?e.parse.transform(n.transform):n.transform),v=d("mask",m(l)),g=e.icon(f,i({},c,b,v,{symbol:s,title:u}));if(!g)return function(){var t;!y&&console&&"function"==typeof console.error&&(t=console).error.apply(t,arguments)}("Could not find one or more icon(s)",f,v);var x=g.abstract;return p.bind(null,t)(x[0],{},r.data)}},v={name:"FontAwesomeLayers",functional:!0,props:{fixedWidth:{type:Boolean,default:!1}},render:function(t,r){var n,o,a=e.config.familyPrefix,l=r.data.staticClass,u=[a+"-layers"].concat(s(r.props.fixedWidth?[a+"-fw"]:[]));return t("div",i({},r.data,{staticClass:(n=l,o=u,(0===(n||"").length?[]:[n]).concat(o).join(" "))}),r.children)}},g={name:"FontAwesomeLayersText",functional:!0,props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},render:function(t,r){var n=e.config.familyPrefix,o=r.props,a=d("classes",[].concat(s(o.counter?[n+"-layers-counter"]:[]),s(o.position?[n+"-layers-"+o.position]:[]))),l=d("transform","string"==typeof o.transform?e.parse.transform(o.transform):o.transform),u=e.text(o.value.toString(),i({},l,a)).abstract;return o.counter&&(u[0].attributes.class=u[0].attributes.class.replace("fa-layers-text","")),p.bind(null,t)(u[0],{},r.data)}};t.FontAwesomeIcon=b,t.FontAwesomeLayers=v,t.FontAwesomeLayersText=g,Object.defineProperty(t,"__esModule",{value:!0})}));