import { Init } from "https://designstem.github.io/fachwerk/mixins.js";
import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  mixins: [Init],
  methods: { ...utils },
  data: { preview: 0, header: 1, advanced: 1 },
  template: `
  <div>
    <header v-if="header">
      <div>
        <a href="https://designstem.github.io/homepage">Home</a> → Sample scenario
      </div>
    </header>
    <f-fetch-data url="./index.md">
      <f-content-editor
        slot-scope="{ value }"
        :content="value"
        :preview="preview"
        :advanced="advanced"
        style="--content-editor-min-height: 100vh"
        save-id="playground"
      />
    </f-fetch-data>
    <f-keyboard alt character="p" @keydown="preview = 1 - preview" />
    <f-keyboard alt character="h" @keydown="header = 1 - header" />
    <f-keyboard alt character="s" @keydown="send('save')" />
    <f-keyboard alt character="a" @keydown="advanced = 1 - advanced" />
    <f-keyboard alt character="left" @keydown="send('prev')" />
    <f-keyboard alt character="right" @keydown="send('next')" />
  </div>
`
});