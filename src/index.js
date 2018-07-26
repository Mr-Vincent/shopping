import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import Routers from './routers.js';

Vue.use(VueRouter);
Vue.use(Vuex);

const RouterConfig = {
  mode:history,
  routers: Routers
}

const router = new VueRouter(RouterConfig);

router.beforeEach((to,from,next) =>{
  window.document.title = to.meta.title;
  next();
});

router.afterEach((to,from ,next)=>{
  window.scrollTo(0,0);
});
const store = new Vuex.Store({
  state: {

  },
  mutations: {

  },
  getters: {

  },
  actions: {

  }
})

const root = document.createElement("div");
document.body.appendChild(root);

new Vue({
  store:store,
  router:router,
  render: h => {
    return h(App);
  }
}).$mount(root);