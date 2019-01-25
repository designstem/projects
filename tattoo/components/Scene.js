export default {
    props: ["size", "bgcolor"],
    template: `
        <div
            :style="{
            overflow: 'hidden',
            position: 'relative',
            height: '100%',
            width: '100%',
            flex: '1 1 500px',
            background: bgcolor,
            }"
        >
            <slot />
        </div>
    `
};