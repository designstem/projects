import { cx, cy } from '../utils.js'

export default {
  props: ["size", "count", "radius"],
  methods: { cx, cy },
  template: `
        <g>
            <circle
                v-for="(item, index) in Array.from({length: 720}).slice(0,count)"
                :cx="cx(3600 / count * index,size* (1 - index * 0.001))"
                :cy="cy(3600 / count * index, size * (1 - index * 0.001))"
                :r="radius"
                stroke="rgba(0,0,0,0.25)"
                fill="none"
            />
        </g>
    `
};
