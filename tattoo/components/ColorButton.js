export default {
    props: ["color", "size", "skindex", "index"],
    methods: {
        isTone: function () {
            var vm = this;
            if (vm.skindex === vm.index) {
                return 'active';
            }
        }
    },
    template: `
        <div
            :style="{
            width: size,
            height: size, 
            background: color          
            }"
            class="button__color"
            :class="isTone()"
        >
        </div>
    `
};