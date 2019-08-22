import { Css, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  mixins: [Css],
  methods: {
    ...utils
  },
  template: `
    <div style="
  position: absolute; 
  left: 0; 
  overflow: hidden; 
  width: 100%; 
  height: 100%;
  z-index: -1;
  "
  >
<f-fetch
  src="https://unpkg.com/emoji.json/emoji-compact.json"
  type="json"
  v-slot="{ value }"
>
<f-scene responsive>
  <f-group :rotation="random(-60, 60)" position="0.5 0.5" scale="1">
    <f-brick-pattern cols="10" :rows="10" step="0.7" v-slot="{ row, col }"> 
      <f-text :scale="1">
      {{ value[random(0, value.length)] }}
      </f-text>
    </f-brick-pattern>
  </f-group>
</f-scene>
</f-fetch>
</div>
  `,
  css: ``
};
