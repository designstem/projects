import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}



import MoireLines from "./components/MoireLines.js";
import MoireCircles from "./components/MoireCircles.js";
import MoireSquares from "./components/MoireSquares.js";
import MoireTriangles from "./components/MoireTriangles.js";
Vue.component('MoireLines', MoireLines);
Vue.component('MoireCircles', MoireCircles);
Vue.component('MoireSquares', MoireSquares);
Vue.component('MoireTriangles', MoireTriangles);

new Vue({
  // Attaching Vue to <div id="app"></div>
  el: "#app",
  data: function() {
    return {
      preview: 0, header: 1, advanced: 1
    }
  },
  

  // Making utilities accessible to templates
  methods: { ...utils },

  // Fetching the index.md and rendering it
  template: `
  <div>
    <header v-if="header">
      <div>
        <a href="https://designstem.github.io/homepage">Home</a> → Moire
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
`
});