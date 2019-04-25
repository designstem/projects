import { cx, cy } from '../utils.js'

export default {
    props: ["size", "count"],
    methods: { cx, cy },
    template: `
        <g>
            <line
                v-for="(item, index) in Array.from({length: 720}).slice(0,count)"
                :x1="cx(360 / count * index,size * 0.5)"
                :y1="cy(360 / count * index,size * 0.5)"
                :x2="cx(360 / count * index,size)"
                :y2="cy(360 / count * index,size)"
                stroke="black"
                stroke-width="3"
            />
        </g>
    `
};
