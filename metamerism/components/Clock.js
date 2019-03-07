import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
export default {
  props: {
    position: { default: "0 0 0"},
    rotation: { default: "0 0 0"},
    light: { default: "white"},
    clockScale: { default: 1}
  },
  data: () => ({
    hRot: '',
    mRot: '',
    sRot: '',
  }),
  methods: { ...utils,
    scaleTheClock: function () {
      return this.clockScale + " " + this.clockScale + " " + this.clockScale
    },
    turnHours: function () {
      const now = new Date();
      let hours = now.getHours();
      if (hours > 12) { hours -= 12; }
      this.hRot = "0 0 -" + utils.scale(hours*60+now.getMinutes(), 0, 720, 0, 360) + "";
      this.mRot = "0 0 -" + utils.scale(now.getMinutes(), 0, 60, 0, 360) + "";
      this.sRot = "0 0 -" + utils.scale(now.getSeconds(), 0, 60, 0, 360) + "";
      setTimeout(this.turnHours, 1000);
    },
    parseColor: function (c) {
      return "color: " + utils.color(c);
    },
    rotateMarkers: function (m, deg) {
      return "0 0 -" + m*deg;
    }
  },
  mounted() {
    this.turnHours();
  },
  template: `
  <a-entity class="clock" :position="position" :rotation="rotation" :scale="scaleTheClock()" shadow="cast: false">
    <a-entity :rotation="hRot">
      <a-box :material="parseColor('darkestgray')" position="0 .2 -0.06" height=".5" width=".09" depth=".03"></a-box>
    </a-entity>
    <a-entity :rotation="mRot">
      <a-box :material="parseColor('darkestgray')" position="0 .25 -0.03" height=".6" width=".06" depth=".03"></a-box>
    </a-entity>
    <a-entity :rotation="sRot">
      <a-box :material="parseColor('purple')" position="0 .35 0" height=".8" width=".03" depth=".03"></a-box>
    </a-entity>
    <a-entity v-for="marker in 12" position="0 0 -0.03" :rotation=rotateMarkers(marker,30)>
      <a-box :material="parseColor('gray')" position="0 .9 0" height=".2" width=".03" depth=".01"></a-box>
    </a-entity>
    <a-entity v-for="marker in 60" position="0 0 -0.03" :rotation=rotateMarkers(marker,6)>
      <a-box :material="parseColor('gray')" position="0 .95 0" height=".1" width=".01" depth=".01"></a-box>
    </a-entity>
    <a-cylinder :material="parseColor('lightergray')" rotation="90 0 0" height=".1" position="0 0 -.1"></a-cylinder>
    <a-image src="./images/designstem_logo.png" material="shader: flat" shadow="cast: false" position="0 -0.31602 -0.047" scale="0.7 0.3 1"></a-image>
  </a-entity>
  `
};