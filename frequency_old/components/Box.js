export default {
    props: ["size", "fill"],
    template: `
        <rect
            :x="size / -2"
            :y="size / -2"
            :width="size"
            :height="size"
            :fill="fill"
            stroke="black"
        />
    `
};