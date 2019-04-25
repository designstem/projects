import DragResize from "./DragResize.js"

const chooseColor = (h,s,l,alpha = 1) => {
  return 'hsla('+h+','+s+'%,'+l+'%,'+alpha+')'
}
const fade = (item) => {
  if(item.fade) {return 0} else {return 1}
}

export default {
    props: ["src","type", "index", "item"],
    components: {DragResize},
    data: () => ({
        width: 100,
        height: 100,
        aspect: true
    }),
    computed: {
      switchAspect: function () {
        if(this.type !== 'circ') { return false } else { return true }
      }
    },

  //TODO: (3d) rotation
  methods: { chooseColor, fade },
    template: `
        <drag-resize 
            :w="width" 
            :h="height" 
            :aspectRatio="switchAspect"
            :minh="2"
            :minw="2"
        >
            <img 
            v-if="item.pic" 
            ref="layerimg"
            :style="{
                transition: 'opacity ' + item.time + 's linear',
                opacity: fade(item),
                mixBlendMode: 'multiply',
                width: item.imgwidth,
                height: item.imgheight,
                }"
            class="layer" 
            :src="src"
            >
            <div
            v-if="type === 'box'"
            class="box"
            :style="{
                backgroundColor: item.color,
                transition: 'opacity ' + item.time + 's linear',
                opacity: fade(item)
                }"
            ></div>
            <div
            v-if="type === 'circ'"
            class="circ"
            :style="{
                backgroundColor: item.color,
                transition: 'opacity ' + item.time + 's linear',
                opacity: fade(item)
                }"
            ></div>
            <!--<p>{{item}}</p>-->
        </drag-resize>
        `
};