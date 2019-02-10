import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name]);
}

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <div>
    <header>
      <div>
        <a href="https://designstem.github.io/homepage">Home</a> → Scenarios
      </div>
    </header>
    <f-fetch url="./README.md">
      <f-content
        slot-scope="{ value }"
        :content="value"
      />
    </f-fetch>
  </div>
`
});