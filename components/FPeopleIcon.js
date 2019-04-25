import { color } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  data: () => ({ size: 20 }),
  methods: { color },
  template: `
  <f-artboard :width="size" :height="size">
    <f-circle
      :x="size / 2"
      :y="size"
      :r="size / 2.2"
      stroke-width="2"
      :fill="color('white')"
    />
    <f-circle
      :x="size / 2"
      :y="size / 4 + 3"
      :r="size / 3.5"
      stroke-width="2"
      :fill="color('white')"
    />
    <f-line
      x1="1"
      :y1="size - 1"
      :x2="size - 1"
      :y2="size - 1"
      stroke-width="2"
    />

  </f-artboard>
  `
}