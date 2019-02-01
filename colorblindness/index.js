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
      preview: 1, header: 1, advanced: 1
    }
  },
  // Adding a mixin
  mixins: [Init],

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `
  <div>
    <header v-if="header">
      <div>
        <a href="https://designstem.github.io/homepage">Home</a> → Color Vision Deficiency & Accessibility
      </div>
    </header>
    <f-fetch url="./index.md">
      <f-content-editor
        slot-scope="{ value }"
        :content="value"
        :preview="preview"
        :advanced="advanced"
        style="--content-editor-min-height: 100vh"
        save-id="playground"
      />
    </f-fetch>
    <f-keyboard alt character="p" @keydown="preview = 1 - preview" />
    <f-keyboard alt character="h" @keydown="header = 1 - header" />
    <f-keyboard alt character="s" @keydown="send('save')" />
    <f-keyboard alt character="a" @keydown="advanced = 1 - advanced" />
    <f-keyboard alt character="left" @keydown="send('prev')" />
    <f-keyboard alt character="right" @keydown="send('next')" />
    <f-pager />
  </div>
  <!-- <div>
    <f-pager />
    <f-fetch url="./index.md">
      <f-content 
        slot-scope="data"
        :content="data.value"
      />
    </f-fetch>
  </div> -->
`
});