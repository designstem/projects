import { cx, cy } from '../utils.js'

export default {
  props: ["size", "count", "divide"],
  methods: { cx, cy },
  template: `
        <g>
            <line
                v-for="(item, index) in Array.from({length: 720}).slice(0,count)"
                :x1="cx(360 / count * index,size * (index % (count / divide) * (size / divide)))"
                :y1="cy(360 / count * index,size * (index % (count / divide) * (size / divide)))"
                :x2="cx(360 / count * index,size)"
                :y2="cy(360 / count * index,size)"
                stroke="black"
            />
        </g>
    `
};

/*
import { cx, cy } from '../utils.js'

export default {
  props: ["size", "count"],
  methods: { cx, cy },
  template: `
        <g>
            <circle v-for="(item, index) in Array.from({length: 720}).slice(0, count * 2)"
                :cx="cx(3600 / (count * 2) * index, size - (index % 2 * 0.1 * size))"
                :cy="cy(3600 / (count * 2) * index, size - (index % 2 * 0.1 * size))"
                :r="1"
                fill="rgba(0,0,0,0.5)"
            />
        </g>
    `
};
*/
