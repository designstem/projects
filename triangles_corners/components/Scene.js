export default {
  props: ["size"],
  computed: {
    viewBox() {
      return `-${this.size / 2} -${this.size / 2} ${this.size} ${this.size}`;
    }
  },
  template: `
        <svg
            :width="size*2"
            :height="size"
            style="background: white"
            :view-box.camel="viewBox"
        >
            <slot />
        </svg>
    `
};
