define(["vue","@fortawesome/vue-fontawesome","./app/filters","./app/fontawesome","./app/i18n","./app/router","./component/layout/default","./component/layout/empty","./component/partial/app"],(function(e,o,t,a,n,p,f,l,u){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t=r(t),a=r(a),n=r(n),p=r(p),f=r(f),l=r(l),u=r(u);const m=Vue.createApp(u.default);m.use(n.default),m.use(p.default),m.component("l-default",f.default),m.component("l-empty",l.default),m.component("fa",o.FontAwesomeIcon),m.component("fal",o.FontAwesomeLayers),m.config.globalProperties.$filters={formatDateTime:t.default.formatDateTime,formatDuration:t.default.formatDuration},m.config.globalProperties.version="2.2.0",m.config.globalProperties.exampleDate=Date.now()/1e3,m.mount("#app"),window.app=m}));