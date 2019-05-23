export default {
  props: { size: { default: 100 }, centered: { default: false } },
  computed: {
    centeredViewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    },
    viewBox() {
      return `0 0 ${this.size} ${this.size}`;
    }
  },
  template: `
        <svg
            :width="size"
            :height="size"
            :view-box.camel="centered ? centeredViewBox : viewBox" 
        >
            <slot />
        </svg>
    `
};
