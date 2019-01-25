import { polyline, snapToGrid } from "../utils.js";
import Grid from "./Grid.js";

export default {
  components: {
    Grid
  },
  props: ["size", "value", "center"],
  data: () => ({
    currentIndex: -1,
    points: [],
    x: null,
    y: null,
    snap: 20,
    step: 2
  }),
  methods: {
    onSceneMousemove(event) {
      const rect = this.$refs.svg.getBoundingClientRect();
      if (this.currentIndex > -1 && this.points[this.currentIndex].dragging) {
        this.points[this.currentIndex].x = snapToGrid(
          event.clientX - rect.left,
          this.snap / 2
        );
        this.points[this.currentIndex].y = snapToGrid(
          event.clientY - rect.top,
          this.snap / 2
        );
      }
    },
    onPointMousedown(index) {
      this.currentIndex = index;
      this.points[index].dragging = true;
    },
    onPointMouseup() {
      delete this.points[this.currentIndex].dragging;
      this.currentIndex = -1;
      this.$emit("input", this.points);
    },
    polyline
  },
  mounted() {
    this.points = this.value;
  },
  watch: {
    value(newValue) {
      this.points = newValue;
    }
  },
  template: `
        <div>
        <svg
            :width="size"
            :height="size"
            @mousemove="onSceneMousemove"
            @mouseup.stop="onPointMouseup"
            ref="svg"
        >
            <polygon
                :points="polyline(points.filter(p => ! p.height))"
                fill="hsla(203,77%,43%,0.5)"
                stroke="var(--primary)"
                stroke-width="3px"
            />
            <circle
                v-for="(point, index) in points"
                v-if="point.height ? (center ? true : false) : true"
                :cx="point.x"
                :cy="point.y"
                r="9"
                stroke="var(--primary)"
                stroke-width="3px"
                :fill="index === currentIndex ? 'gray' : (point.height ? 'hsla(196,47%,44%,1)' : 'white')"
                @mousedown.stop="onPointMousedown(index)"
            />
            <Grid :width="size" :height="size" :snap="snap" />
        </svg>
        </div>
    `
};
