import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  title: 'Pottery',
  el: "#app",
  methods: { ...utils },
  data: { preview: 0, header: 1, advanced: 1 },
  template: `
  <div>
    <header v-if="header">
      <div>
        <a href="https://designstem.github.io/homepage">Home</a> → Sample scenario
      </div>
    </header>
    <f-fetch url="./index.md">
      <f-content
        slot-scope="{ value }"
        :content="value"
        :preview="preview"
        :advanced="advanced"
        style="--content-editor-min-height: 100vh"
        save-id="playground"
      />
    </f-fetch>
    <f-pager />
    <f-keyboard alt character="p" @keydown="preview = 1 - preview" />
    <f-keyboard alt character="h" @keydown="header = 1 - header" />
    <f-keyboard alt character="s" @keydown="send('save')" />
    <f-keyboard alt character="a" @keydown="advanced = 1 - advanced" />
  </div>
`
});