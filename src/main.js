import Vue from "vue";
import App from "./App.vue";
import store from "./store/store";
import VueRouter from "vue-router";
import './assets/global.scss';
import router from "./router";

Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount("#app");
