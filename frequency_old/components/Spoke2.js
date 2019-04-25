import { cx, cy } from '../utils.js'

export default {
  props: {
    size: { default: 100 },
    count: { default: 60 },
    color: { default: "black" },
    start: { default: 0 },
    stop: { default: 60 }
  },
  methods: { cx, cy },
  template: `
        <g>
            <line
                v-for="(item, index) in Array.from({length: 720}).slice(0,count).slice(start, stop)"
                :x1="cx(360 / count * index,size/2)"
                :y1="cy(360 / count * index,size/2)"
                :x2="cx(360 / count * index,size)"
                :y2="cy(360 / count * index,size)"
                :stroke="['var(--blue)','var(--red)'][index % 2]"
                stroke-width="4"
            />
        </g>
    `
};
