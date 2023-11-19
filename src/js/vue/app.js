import { createApp } from 'vue';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import filters from './app/filters';
import fontawesome from './app/fontawesome';
import i18n from './app/i18n';
import router from './app/router';
import DefaultLayout from './component/layout/default';
import EmptyLayout from './component/layout/empty';
import App from './component/partial/app';

const app = Vue.createApp(App); // eslint-disable-line no-undef
app.use(i18n);
app.use(router);

app.component('l-default', DefaultLayout);
app.component('l-empty', EmptyLayout);
app.component('fa', FontAwesomeIcon);
app.component('fal', FontAwesomeLayers);

app.config.globalProperties.$filters = {
    formatDateTime: filters.formatDateTime,
    formatDuration: filters.formatDuration
};
app.config.globalProperties.version = '2.2.0';
app.config.globalProperties.exampleDate = (Date.now()) / 1000;

app.mount('#app');

// make app global
window.app = app;
