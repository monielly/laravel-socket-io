import Vue from 'vue';
import Vuetify from '../plugins/vuetify';
import VuetifyMask from '../plugins/vuetify-mask';
import App from './App.vue';
import Vuelidate from 'vuelidate';
import router from './router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:3000');
Vue.use(Vuetify);   
Vue.use(VuetifyMask);
Vue.use(Vuelidate);
Vue.use(VueSweetalert2);

const app = new Vue({
    vuetify: Vuetify,
    el: '#app',
    router,
    render: h => h(App),
});