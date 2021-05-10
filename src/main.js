import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

import "@tailwindcss/postcss7-compat/tailwind.css";

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
