import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  render:h => {
      return h(App);
  }
}).$mount(root);