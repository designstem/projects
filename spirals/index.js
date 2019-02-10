import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

import Spiral from "./Spiral.js";
Vue.component("Spiral", Spiral);

new Vue({

  el: "#app",
  data: () => ({
    dummy: 0,
  }),
  computed: {
    d3Line(){
      return d3.line().curve(d3.curveCardinal.tension(0));
    },
  },
  methods: { ...utils },
  template: `
  <div>
    <f-fetch url="./README.md">
      <f-theme slot-scope="data" theme="white">
        <f-content
          :content="data.value"
          :index="0"
          :base="'1.5vh'"
          type="slides"
        />
      </f-theme>
    </f-fetch>
  </div>
  `
});
