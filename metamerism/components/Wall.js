import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  props: {},
  methods: {
    parseColor: function (c) {
      return "color: " + utils.color(c);
    },
  },
  template: `
  <a-entity class="wall">
    <a-entity position="-0.496 0.48 0.7" rotation="180 0 0" scale="0.01 0.02 0.7" obj-model="obj: ./models/liist.obj"></a-entity>
    <a-plane material="roughness: 1"></a-plane>
    <a-entity position="-0.49 -0.48 0.7" scale="0.01 0.02 0.7" obj-model="obj: ./models/liist.obj"></a-entity>
  </a-entity>
  `
};