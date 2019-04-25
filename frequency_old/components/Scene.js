export default {
  props: ["size","color"],
  computed: {
    viewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    }
  },
  template: `
        <svg
            :width="size"
            :height="size"
            style="background: color ? color: 'white'"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
};
