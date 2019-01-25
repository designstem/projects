import { polyline, snapToGrid } from "../utils.js";
import Grid from "./Grid.js";

export default {
  components: {
    Grid
  },
  props: ["size", "value"],
  data: () => ({
    currentIndex: -1,
    points: [],
    x: null,
    y: null,
    snap: 40
  }),
  methods: {
    onSceneMousemove(event) {
      const rect = this.$refs.svg.getBoundingClientRect();
      if (this.currentIndex > -1 && this.points[this.currentIndex].dragging) {
        this.points[this.currentIndex].x = snapToGrid(
          event.clientX - rect.left,
          this.snap
        );
        this.points[this.currentIndex].y = snapToGrid(
          event.clientY - rect.top,
          this.snap
        );
      }
    },
    onPointMousedown(index) {
      this.currentIndex = index;
      this.points[index].dragging = true;
    },
    onPointMouseup() {
      delete this.points[this.currentIndex].dragging;
      this.currentIndex = -1
      this.$emit("input", this.points);
    },
    polyline
  },
  mounted() {
    this.points = this.value;
  },
  template: `
        <div>
        <svg
            :width="size"
            :height="size"
            style="background: papayawhip"
            @mousemove="onSceneMousemove"
            @mouseup.stop="onPointMouseup"
            ref="svg"
        >
            <Grid :width="size" :height="size" :snap="snap" />
            <polygon
                :points="polyline(points)"
                fill="rgba(0,0,0,0.1)"
                stroke="black"
            />
            <circle
                v-for="(point, index) in points"
                :cx="point.x"
                :cy="point.y"
                r="9"
                stroke="black"
                :fill="index === currentIndex ? 'gray' : 'white'"
                @mousedown.stop="onPointMousedown(index)"
            />
        </svg>
        </div>
    `
};
