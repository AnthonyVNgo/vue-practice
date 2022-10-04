import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './index.css';
import './assets/main.css';
import { menuItems, data, eventDays } from './data.js';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faTwitch,
  faTiktok
} from '@fortawesome/free-brands-svg-icons';
library.add(
  faFacebookSquare,
  faTwitterSquare,
  faInstagramSquare,
  faTwitch,
  faTiktok
);

const app = createApp(App);

app.provide('menuItems', menuItems);
app.provide('data', data);
app.provide('eventDays', eventDays);
app.use(router);
app.mount('#app');
app.component('font-awesome-icon', FontAwesomeIcon);
