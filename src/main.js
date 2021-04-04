import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";

import router from "./router";
import vuetify from "./plugins/vuetify";
import "./plugins/chimera";

import "./plugins/qs";
import "./plugins/vuecookies";
import "./registerServiceWorker";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
