export default {
    props: ["speed", "direction", "easing"],
    computed: {
        animationStyle() {
            return { animation: `spinning ${this.speed}ms infinite ${this.easing || "linear"} ${this.direction || ""}` };
        }
    },
    template: `
        <g :style="animationStyle">
            <slot />
        </g>
    `
};