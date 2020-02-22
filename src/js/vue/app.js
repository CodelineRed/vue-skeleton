import fontawesome from './app/fontawesome';
import i18n from './app/i18n';
import router from './app/router';
import DefaultLayout from './components/layouts/default';
import EmptyLayout from './components/layouts/empty';
import App from './components/partials/app';
import Vue from 'vue';

Vue.component('v-default-layout', DefaultLayout);
Vue.component('v-empty-layout', EmptyLayout);

Vue.config.productionTip = false;

const app = new Vue({
    fontawesome: fontawesome,
    i18n: i18n,
    router: router,
    render: h => h(App)
}).$mount('#app');

