// Use Javascript module import to get initialization mixin, Vue components and utility functions

import { Init } from "https://designstem.github.io/fachwerk/mixins.js";
import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

import ImageCompare from "./components/ImageCompare.js";
Vue.component('ImageCompare', ImageCompare);
import ColorblindnessSimulator from "./components/ColorblindnessSimulator.js";
Vue.component('ColorblindnessSimulator', ColorblindnessSimulator);

new Vue({
  // Attaching Vue to <div id="app"></div>
  el: "#app",
  data: function() {
    return {
      before: 'img/before.jpg',
      after: 'img/after.jpg',
      padding: {
        left: 50,
        right: 50
      },
      hideAfter: true
    }
  },
  // Adding a mixin
  mixins: [Init],

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `                         
  <div>
  <f-pager />
  <f-fetch url="./index.md">
    <f-content 
      slot-scope="data"
      :content="data.value"
    />
  </f-fetch>
  </div>
`
});