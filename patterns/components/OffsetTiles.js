import Scene from "./Scene.js";
import Grid from "./Grid.js";

export default {
  components: { Scene, Grid },
  props: { size: { default: 0 }, count: { default: 8 }, step: { default: 0 } },
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
          v-for="(stepY, indexY) in steps"
          :transform="'translate(' + (indexY % 2 ? step / 2 : 0) + ', 0)'"
        >
          <g
            v-for="(stepX, indexX) in steps"
            :transform="'translate(' + stepX + ',' + stepY + ')'"
          >
            <slot s />
        </g>
      </g>
    </Scene>
    `
};
