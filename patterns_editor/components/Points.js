import { polyline } from "../utils.js";

export default {
  props: ["points"],
  methods: { polyline },
  template: `
        <polygon
            :points="polyline(points.map(point => ({ x: point.x - 40, y: point.y - 40})))"
            fill="hsla(203,77%,43%,0.7)"
            stroke="hsla(203,77%,33%,0.2)"
            stroke-width="2"
            style="transform: scale(1)"
        />
    `
};

// #64A6BD