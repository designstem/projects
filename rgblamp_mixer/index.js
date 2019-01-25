/*
import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  el: "#app",
  methods: { ...utils },
  data: ({ content: `
  `}),
  template: `
  <div style="display: flex">
    <f-editor
      style="
        width: 100%;
        height: 100%;
        overflowY: auto;
        border-radius: 0;
		background-color:#FF0000;
        padding: 1.5rem;
      "
      v-model="content"
    />
    <f-content-document style="flex: 1;" :content="content" />
  </div>
  `
});
*/

//Yep there's 4 lines of code on HTML nad 4 lines of code for JS
//Your turn Angular :)
new Vue({
  el: '#app',
  data: {color: '#673AB7'}
})