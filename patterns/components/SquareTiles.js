import Scene from "./Scene.js";
import Grid from "./Grid.js";

export default {
  components: { Scene, Grid },
  props: { size: { default: 0 }, count: { default: 8 }, step: { default: 20 } },
  computed: {
    steps() {
      return Array.from({ length: 36 })
        .slice(0, this.count)
        .map((el, i) => i * this.step);
    }
  },
  template: `
    <Scene :size="size">
      <Grid :width="size" :height="size" :snap="20" />
      <g :transform="'translate(80, 80)'">
        <g
          v-for="(step, index) in steps"
          :transform="'translate(' + step + ', 0)'"
        >
          <g
            v-for="(step, index) in steps"
            :transform="'translate(0, ' + step + ')'"
          >
          <slot s />
        </g>
      </g>
    </Scene>
    `
};
