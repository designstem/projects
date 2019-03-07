import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
export default {
  props: {
    position: { default: "0 0 0"},
    rotation: { default: "0 0 0"},
    light: { default: "white"},
    lampScale: { default: "1 1 1"},
    lampHeight: { default: 1 }
  },
  methods: { ...utils,
    shade: function () {
      return utils.str({
        height: 2,
        radiusBottom: 1,
        radiusTop: 0.6
      })
    },
    shadePos: function () {
      return "0 " + 1.2*this.lampHeight + " 0"
    },
    trunkPos: function () {
      return "0 " + (this.lampHeight / 2) + " 0"
    },
    scaleTheLamp: function () {
      return this.lampScale + " " + this.lampScale + " " + this.lampScale
    },
    parseColor: function () {
      return "color: " + this.light + "; emissive: " + this.light + " emissiveIntensity: 2";
    },
  },
  template: `
  <a-entity class="lamp" :position="position" :rotation="rotation" :scale="scaleTheLamp()" shadow="cast: false">
    <a-cone class="lamp-shade" :material="parseColor()" :position=shadePos() :geometry=shade()></a-cone>
    <a-cylinder class="lamp-trunk" :position=trunkPos() radius=".08" :height="lampHeight"></a-cylinder>
    <a-cylinder class="lamp-base" geometry="radius: .6; height: .1"></a-cylinder>

  </a-entity>
  `
};