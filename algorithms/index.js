import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

//import TextRepeater from "./components/TextRepeater.js";
//Vue.component('TextRepeater', TextRepeater);

Vue.config.devtools = true;

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <div>
    <f-fetch url="./README.md">
      <f-theme slot-scope="data">
        <f-content
          :content="data.value"
          :index="0"
          :base="'1.5vh'"
        />
      </f-theme>
    </f-fetch>

    <!-- <div style="position:absolute; top:45vh; left:0; right:0; width:100%; display:flex; justify-content:space-between; z-index:100; padding:0.1rem; pointer-events: none;" >
      <kbd v-on:click="send('prev');" style="cursor:pointer;pointer-events: auto;">&lsaquo;</kbd>
      <kbd v-on:click="send('next');" style="cursor:pointer;pointer-events: auto;">&rsaquo;</kbd>
    </div> -->

  </div>
  `
});

