import Vue from "vue";
import { mapMutations } from "vuex";
import App from "./App.vue";
import store from "./store/store";
import { SET_CITIES, SET_STORES } from "./store/mutation-types";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  store
}).$mount("#app");
