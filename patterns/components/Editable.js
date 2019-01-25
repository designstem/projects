import { polyline } from '../utils.js'

export default {
  props: ["size", "value"],
  data: () => ({
    currentIndex: 0,
    points: []
  }),
  methods: {
    onSceneClick(event) {
      const e = event.target;
      const rect = e.getBoundingClientRect();
      this.points[this.currentIndex].x = event.clientX - rect.left;
      this.points[this.currentIndex].y = event.clientY - rect.top;
      this.$emit("input", this.points);
    },
    onPointClick(index) {
      this.currentIndex = index;
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
            @click="onSceneClick"
            ref="svg"
        >
            <polyline
                :points="polyline(points)"
                fill="none"
                stroke="black"
            />
            <circle
                v-for="(point, index) in points"
                :cx="point.x"
                :cy="point.y"
                r="10"
                stroke="black"
                :fill="index === currentIndex ? 'red' : 'rgba(0,0,0,0)'"
                @click.stop="onPointClick(index)"
            />
        </svg>
          <pre>{{ '' }}</pre>
        </div>
    `
};
