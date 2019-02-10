import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
  props: {
    before: {
      type: String,
      required: true
    },
    after: {
      type: String,
      required: true
    },
    full: {
      type: Boolean,
      default: false
    },
    padding: {
      type: Object,
      default() {
        return {
          left: 0,
          right: 0
        }
      },
      required: false
    },
    hideAfter: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  data() {
    return {
      width: null,
      height: null,
      pageX: null,
      posX: null,
      isDragging: false,
      allowNextFrame: true,
      unwatch: null,
      firstTouch: true
    }
  },
  computed: {
    dimensions() {
      return {
        width: `${this.width}px`,
        height: this.full ? `${this.height}px` : 'auto'
      }
    }
  },
  methods: {
    ...utils,
    onResize() {
      this.width = this.$el.clientWidth;
      this.height = this.$el.clientHeight;
      //this.setInitialPosX(this.padding.left + this.padding.right);
    },
    onMouseDown() {
      if(this.firstTouch){
        this.firstTouch = false;
        this.onResize();
      }
      
      this.isDragging = true;
      
    },
    onMouseUp(event) {
      event.preventDefault();

      this.isDragging = false;
    },
    onMouseMove(event, isDragging = this.isDragging) {
      if (isDragging && this.allowNextFrame) {
        this.allowNextFrame = false;
        this.pageX = event.pageX || event.targetTouches[0].pageX || event.originalEvent.targetTouches[0].pageX;

        window.requestAnimationFrame(this.updatePos);
      }
		},
    updatePos() {
      let posX = this.pageX - this.$el.getBoundingClientRect().left;

      if (posX < this.padding.left) {
        posX = this.padding.left;
			} else if (posX > this.width - this.padding.right) {
        posX = this.width - this.padding.right;
      }

      this.posX = posX;
      this.allowNextFrame = true;
    },
    setInitialPosX(padding) {
      if (padding >= this.width) {
        console.error('Sum of paddings is wider then parent element!');

        return;
      }

      this.posX = (this.width + this.padding.left - this.padding.right) / 2;
    }
  },
  created() {
    window.addEventListener('mouseup', this.onMouseUp);
    window.addEventListener('resize', this.onResize);
  },
  mounted() {
    
    //this.onResize();
    
    this.unwatch = this.$watch(
      () => this.padding.left + this.padding.right,
      (newValue) => this.setInitialPosX(newValue)
    );
    
  },
  beforeDestroy() {
    this.unwatch();
    window.removeEventListener('mouseup', this.onMouseUp);
    window.removeEventListener('resize', this.onResize);
  },
  
  template: `
  <div>
  <figure class="image-compare" :class="{ full }" @mousemove.prevent="onMouseMove" @touchstart="onMouseMove($event, true)" @touchmove="onMouseMove($event, true)" @click="onMouseMove($event, true)">
    <div class="image-compare-wrapper" :style="{ width: posX + 'px' }" v-show="!hideAfter">
      <img :src="after" :alt="after" :style="dimensions">
    </div>
    <img :src="before" :alt="before" :style="dimensions">
    <div class="image-compare-handle" :style="{ left: posX + 'px' }" @mousedown.prevent="onMouseDown" v-show="!hideAfter">
      <span class="image-compare-handle-icon left">
        <slot name="icon-left">◁&nbsp;drag</slot>
      </span>
      <span class="image-compare-handle-icon right">
        <slot name="icon-right">drag&nbsp;▷</slot>
      </span>
    </div>
  </figure>
    
  </div>
  `
};
