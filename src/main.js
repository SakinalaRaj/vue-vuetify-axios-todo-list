import { createApp } from "vue";
import App from "./App.vue";

// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";

import "material-design-icons-iconfont/dist/material-design-icons.css";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components,
  directives,
  iconfont: "mdi",
  // iconfont: "md",
});

createApp(App).use(vuetify).mount("#app");
