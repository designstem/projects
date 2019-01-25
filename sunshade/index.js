import { format, generateSTL } from "./utils.js";

Vue.config.ignoredElements = [
  "a-scene",
  "a-box",
  "a-sky",
];

new Vue({
  el: "#app",
  components: {},
  data: () => ({
    count: 8,
    angle: 0,
    width: 1
  }),
  methods: {
    format,
    exportSTL() {
      console.log(generateSTL(this.$refs.exportable.object3D));
    }
  },
  template: `
    <div>
    <a-scene>
      <a-entity ref="exportable">
        <a-entity
          ref="scene"
          v-for="(box,index) in Array.from({length: 100}).slice(0, count)"
          :key="index"
          :rotation="format({ x: angle, y: 360 / count * index, z: 0})"
          :position="format({ x: 0, y: 0, z: -10})"
        >
          <a-box
            :position="format({ x: 0, y: 0, z: -3})"
            depth="3"
            height="0.1"
            :width="width"
            color="#ff595e"
          />
        </a-entity>
      </a-entity>
      <a-sky color="white"></a-sky>
    </a-scene>
    <div style="
      position: fixed;
      top: 6rem;
      bottom: 2rem;
      padding: 2em;
      width: 200px;
    ">
      <label>Petal count <code>{{count}}</code></label>
      <input type="range" v-model="count" max="100" />
      <label>Petal angle <code>{{angle}}</code></label>
      <input type="range" v-model="angle" min="-180" max="180" />
      <label>Petal width <code>{{width}}</code></label>
      <input type="range" v-model="width" min="0.1" max="3" step="0.01" />
    </div>
    <div style="
      position: fixed;
      left: 0;
      bottom: 0;
      padding: 2em;
      width: 200px;
    ">
      <button class="button_tertiary" @click.prevent="exportSTL">Export STL</button>
    </div>
    <header style="position: fixed; top: 0; right: 0, left: 0; width: 100%">
      <div>
          <a href="https://designstem.github.io/homepage">Home</a>
          → Sunshade
          → Shade Designer
      </div>
    </header>
    </div>
    `
});