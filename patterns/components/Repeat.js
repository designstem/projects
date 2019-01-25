export default {
  props: { size: { default: 10 }, count: { default: 8 } },
  computed: {
    steps() {
      return Array(36)
        .fill("")
        .slice(0, this.count)
        .map((el, i) => i / this.count);
    }
  },
  template: `
        <g>
            <g
                v-for="(angle, index) in steps"
                :transform="'rotate(' + angle * 360 + ')'"
                :key="index"
            >
                <g :transform="'translate(' + size + ', 0)'">
                    <slot s />
                </g>
            </g>
        </g>
    `
};
