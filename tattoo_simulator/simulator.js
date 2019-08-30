import { Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

import Scene from "./components/Scene.js";
import SceneLayer from "./components/SceneLayer.js";
import Layer from "./components/Layer.js";
import ButtonGroup from "./components/ButtonGroup.js";
import ColorButton from "./components/ColorButton.js";
import DragResize from "./components/DragResize.js";
import Hand from "./components/Hand.js";

// import { FLeftarrowIcon } from 'https://designstem.github.io/fachwerk/fachwerk.js'
// Vue.component('FLeftarrowIcon', FLeftarrowIcon);

//import VueDragResize from 'https://unpkg.com/vue-drag-resize@1.2.3/src/components/vue-drag-resize.js'
//import VueDragResize from "https://unpkg.com/vue-drag-resize@1.2.3/dist/index.js";

export default {
  components: {
    Scene,
    SceneLayer,
    Layer,
    DragResize,
    ButtonGroup,
    ColorButton,
    Hand
  },
  mixins: [Css],
  data: () => ({
    skincolors: [
      "#fff5e7",
      "#FFDFC4",
      "#EECEB3",
      "#F0C8C9",
      "#E5B887",
      "#CE967C",
      "#DB9065",
      "#C67856",
      "#A57257",
      "#B97C6D",
      "#AD6452",
      "#5C3836",
      "#CB8442",
      "#704139",
      "#A3866A",
      "#870400",
      "#430000",
      "#5B0001",
      "#302E2E"
    ],
    skindex: 0,
    size: 400,
    pic: "../tattoo_simulator/anchor.png",
    start: false,
    selected: "",
    imgs: [],
    blur: 0,
    x: 0,
    y: 0
  }),
  methods: {
    pushType: function(type) {
      this.imgs.push({
        hide: true,
        fade: false,
        blur: 0,
        time: 1,
        type: type,
        alpha: 0.9,
        imgwidth: "",
        imgheight: "",
        pic: this.pic,
        color: "var(--darkestgray)",
        text: "Mum 💘",
        textSize: 24
      });
      if (type === "img") {
        // this.onFileChange()
      }
    },
    random: function(set) {
      return Math.floor(Math.random() * set);
    },
    setIndex: function() {
      this.skindex = this.random(this.skincolors.length);
    }
  },
  computed: {},
  mounted() {
    this.setIndex();
  },

  template: `
    <div class="cells fit" style="grid-template-columns: 1fr 1fr; grid-gap:var(--content-gap);">
        <div class="cell">
                <h2>Design a smart tattoo</h2>
                <!--<label>skin tone: <code>{{skincolors[skindex]}}</code></label>-->
                
                <!--<input type="range" v-model="index" :max="skincolors.length-1"/>-->
                <h3><span class="bullet">1</span> Pick a skin tone</h3>
                <p>Every person is different, so is their skin. <b>Pick a skin tone that matches yours</b>, or return here
                later to see how your design would look on different backgrounds.</p>
                <br>
                <ButtonGroup>
                  <ColorButton  v-for="(skincolor, index) in skincolors" 
                                :key="skincolor" :color="skincolor" :size="'1.75em'"
                                :skindex="skindex" :index="index"
                                @click.native="skindex = index" />
                </ButtonGroup>
             
                <br>
                <h3><span class="bullet">2</span> Add a tattoo and biosensors</h3>
                <p>Upload an image of your tattoo design, preferably drawn with a pen (not with a pencil). 
                Add simple shapes or images as biosensors, that would react to the environment or biological stimuly.</p><p>Find out how long would
                your preferred biosensor take to light up under the skin, and test it by adjusting the trigger time on your added layer.</p>
                
                <p />

                <div class="flex"></div>
                <div class="button_primary"  @click="pushType('img')">Add Image</div>
                <div class="button_primary"  @click="pushType('text')">Add Text</div>
                <div class="button_primary"  @click="pushType('box')">Add Square</div>
                <div class="button_primary"  @click="pushType('circ')">Add Circle</div>
                
                <Layer v-for="(item, index) in imgs" :index="index" :item="item" :imgs="imgs" :key="index" ></Layer>
        
                <br><br>

                 <h3><span class="bullet">3</span> Tattoos age</h3>
                <p>The tattoo will fade and lines will go blurry as some of the tattoo ink is moved 
                    or removed in the skin. Play with sliders to see how the tattoo might change. 
                    How long do you think it takes for your tattoo to turn “unreadable”?
                </p>

                <br>

                <f-slider v-model="blur" integer :value=0 :to=50 title="years: " />

                <br>


                <h3><span class="bullet">4</span> Reflect</h3>
                <p>Do you think your tattoo would work? What is good about it? What do you think you can still improve?</p>
        </div>
        <div class="cell" style="position: sticky; height: 80vh; top: 10vh">
            <Scene :size="size" :bgcolor="'transparent'">
                <Hand :fill="skincolors[skindex]"/>
                <SceneLayer :style="{filter: 'blur( ' + blur / 8 + 'px ) opacity( ' + (1 - blur / 150) + ' )'}" v-for="(item, index) in imgs" :index="index" :item="item" :src="item.pic" :text="item.text" :type="item.type" />
            </Scene>
        </div>
    </div>
    `,
  css: `
  .h-100 {
    height: 100%;
}

.flex {
    display: flex;
}
.v-center {
    align-items: center;
}
.flex-wrap {
    flex-wrap: wrap;
}
.flex-column {
    flex-direction: column;
}
img.layer {
    width: 100%;
    height: 100%;
}

:root{
    --stick-size: 8px;
}

.vdr {
    position: absolute;
    box-sizing: border-box;
}
.vdr.active:before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    box-sizing: border-box;
    outline: 1px dashed #d6d6d6;
}
.vdr-stick {
    box-sizing: border-box;
    position: absolute;
    width: var(--stick-size);
    height: var(--stick-size);
    font-size: 1px;
    background: #ffffff;
    border: 1px solid #6c6c6c;
    box-shadow: 0 0 2px #bbb;
}
.inactive .vdr-stick {
    display: none;
}
.vdr-stick-tl {
    top: calc(var(--stick-size)/-2);
    left: calc(var(--stick-size)/-2);
    cursor: nwse-resize;
}
.vdr-stick-tm {
    top: calc(var(--stick-size)/-2);
    left: 50%;
    margin-left: calc(var(--stick-size)/-2);
    cursor: ns-resize;
}
.vdr-stick-tr {
    top: calc(var(--stick-size)/-2);
    right: calc(var(--stick-size)/-2);
    cursor: nesw-resize;
}
.vdr-stick-ml {
    top: 50%;
    margin-top: calc(var(--stick-size)/-2);
    left: calc(var(--stick-size)/-2);
    cursor: ew-resize;
}
.vdr-stick-mr {
    top: 50%;
    margin-top: calc(var(--stick-size)/-2);
    right: calc(var(--stick-size)/-2);
    cursor: ew-resize;
}
.vdr-stick-bl {
    bottom: calc(var(--stick-size)/-2);
    left: calc(var(--stick-size)/-2);
    cursor: nesw-resize;
}
.vdr-stick-bm {
    bottom: calc(var(--stick-size)/-2);
    left: 50%;
    margin-left: calc(var(--stick-size)/-2);
    cursor: ns-resize;
}
.vdr-stick-br {
    bottom: calc(var(--stick-size)/-2);
    right: calc(var(--stick-size)/-2);
    cursor: nwse-resize;
}
.vdr-stick.not-resizable{
    display: none;
}
.box, .circ {
    width: 100%;
    height: 100%;
}
.circ {
    border-radius: 100%;
}
.bgimg {
    width: 100%;
    height: 100%;
    background-size: cover;
    mix-blend-mode: multiply;
    pointer-events: none;
}
.ui-layer {
    position: relative;
    align-items: center;
    margin: 1em 0;
    padding: .7em;
    border: 3px solid var(--gray);
    border-radius: var(--border-radius);
}
.ui-layer input {
    margin-bottom: 0;
}
.ui-layer *:not(:last-child) {
    margin: 0 .5em 0 0;
}
.close {
    position: absolute;
    right: 0;
    top: -5px;
    padding: 10px;
    cursor: pointer;
    color: var(--primary);
}

.button-group {
    display: flex;
    margin-bottom: 1em;
    cursor: pointer;
}
.button-group > *:first-child {
    border-bottom-left-radius: var(--border-radius);
    border-top-left-radius: var(--border-radius);
}
.button-group > *:last-child {
    border-bottom-right-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
}
.button__color.active {
    border: 3px solid;
    border-radius: 3px;
    margin-top: -3px;
    box-sizing: content-box;
}
  `
};
