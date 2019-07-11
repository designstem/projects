import {
  Vue
} from "https://designstem.github.io/fachwerk/fachwerk.js";

// Register components globally

// for (const name in components) {
//   Vue.component(name, components[name]);
// }

// If you have custom components,
// install them here:
//
import Mapper from "./Mapper.js";
Vue.component("Mapper", Mapper);

// Set up a global event bus

Vue.prototype.$global = new Vue({ data: { state: {} } });

// Initialize VueJS

new Vue({
  // HTML tag id the content goes into

  el: "#mapper",

  // Allow utils to be used in templates

  methods: {
    // ...utils
    // Custom methods go here
  },

  // Reactive data will be here
  // Note that it will be only accessible
  // in the template, not inside Markdown
  // Use get() / set() helpers to
  // pass values to Markdown

  data: {},

  // In the main template fetch and
  // display index.md. This template
  // can be totally custom and can
  // mix and match Fachwerk and custom
  // components and utilities.

  template: `
  <!-- <f-fetch url="mapper.md">
    <f-content slot-scope="{ value }" :content="value" />
  </f-fetch> -->
  <div>
    <!-- <div style="position:fixed; bottom:2vh; left:0; width:100%;padding:2vh;"><f-slider set="val" to="737" /></div> -->
    <Mapper />
  </div>
`
});