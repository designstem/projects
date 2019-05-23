export default {
    props: ["height", "width", "snap"],
    template: `
    <g>
        <template v-for="x in Math.floor(width / snap)">
          <circle
          	v-for="y in Math.floor(height / snap)"
          	:cx="x * snap"
        	:cy="y * snap"
        	r="1"
        	fill="black"
            opacity="0.2"
            pointer-events="none"
          />
        </template>
    </g>
    `
};
