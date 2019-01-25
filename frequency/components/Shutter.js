export default {
  props: ["size", "fill", "speed2"],
    computed: {
        animationStyle() {
            return { animation: `shuttering ${this.speed2}ms infinite` };
        }
    },
  template: `
        <!--rect
            :x="size / -2"
            :y="size / -2"
            :width="size"
            :height="size"
            fill="papayawhip"
            :style="animationStyle"
        /-->
    `
};
