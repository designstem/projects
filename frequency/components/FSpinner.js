import { Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  mixins: [Css],
  props: {
    duration: {
      default: 1000,
      type: [Number, String],
      description: "Duration for one rotation in milliseconds"
    },
    easing: {
      default: "linear",
      type: String,
      description:
        "[Easing function](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function)"
    },
    delay: {
      default: 0,
      type: [Number, String],
      description: "Delay in milliseconds"
    },
    direction: {
      default: "normal",
      type: String,
      description:
        "Animation direction: `normal`, `reverse`, `alernate`, `alternate-reverse`"
    },
    playing: { default: true, type: Boolean }
  },
  computed: {
    animation() {
      const animation = [
        "spinner",
        `${this.duration}ms`,
        this.easing,
        `${this.delay}ms`,
        "infinite",
        this.direction,
        "none",
        this.playing ? "running" : "paused"
      ];
      return animation.join(" ")
    }
  },
  template: `
  <g :style="{ animation }" class="a">
    <slot />
  </g>
  `,
  css: `
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }  
  `
};
