import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from './routes'
import 'bootstrap'
import Embed from 'v-video-embed'

// global register
Vue.use(Embed);

Vue.use(VueRouter);
const router = new VueRouter({
  routes: Routes,
  mode:'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router : router 
})
