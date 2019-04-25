import Scene from "./components/Scene.js";
import SceneLayer from "./components/SceneLayer.js";
import Layer from "./components/Layer.js";
import ButtonGroup from "./components/ButtonGroup.js";
import ColorButton from "./components/ColorButton.js";
import DragResize from "./components/DragResize.js"
import Hand from "./components/Hand.js";

//import VueDragResize from 'https://unpkg.com/vue-drag-resize@1.2.3/src/components/vue-drag-resize.js'
//import VueDragResize from "https://unpkg.com/vue-drag-resize@1.2.3/dist/index.js";

new Vue({
  el: "#app",
  components: {
    Scene,
    SceneLayer,
    Layer,
    DragResize,
    ButtonGroup,
    ColorButton,
    Hand
  },
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
    pic: "",
    start: false,
    selected: "",
    imgs: [],
    x: 0,
    y: 0
  }),
  methods: {
    pushType: function(type) {
      this.imgs.push({
        hide: true,
        fade: false,
        time: 1,
        type: type,
        alpha: 0.9,
        imgwidth: "",
        imgheight: "",
        pic: this.pic,
        color: "#e66465"
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
      <div class="h-100 flex flex-column">
        <header>
          <div>
            <a href="https://designstem.github.io/homepage">Home</a>
            → <a href="https://designstem.github.io/homepage/tattoo">Smart Tattoo</a>
            → Tattoo designer
          </div>
        </header>
            <div class="flex h-100">
                <div class="ui">
                <h1>Design a smart tattoo</h1>
                <!--<label>skin tone: <code>{{skincolors[skindex]}}</code></label>-->
                
                <!--<input type="range" v-model="index" :max="skincolors.length-1"/>-->
                <h2><span class="bullet">1</span>Pick a skin tone</h2>
                <div class="text"><p>Every person is different, so is their skin. <b>Pick a skin tone that matches yours</b>, or return here
                later to see how your design would look on different backgrounds.</p></div>
                <br>
                <ButtonGroup>
                  <ColorButton  v-for="(skincolor, index) in skincolors" 
                                :key="skincolor" :color="skincolor" :size="'1.75em'"
                                :skindex="skindex" :index="index"
                                @click.native="skindex = index" />
                </ButtonGroup>
             
                <br>
                <h2><span class="bullet">2</span>Add a tattoo and biosensors</h2>
                <div class="text">
                <p>Upload an image of your tattoo design, preferably drawn with a pen (not with a pencil). 
                Add simple shapes or images as biosensors, that would react to the environment or biological stimuly.</p><p>Find out how long would
                your preferred biosensor take to light up under the skin, and test it by adjusting the trigger time on your added layer.</p><p>
                </div>

                <div class="flex" />
                <div class="button_primary"  @click="pushType('img')">Add Image</div>
                <div class="button_primary"  @click="pushType('box')">Add Square</div>
                <div class="button_primary"  @click="pushType('circ')">Add Circle</div>
                
                <Layer v-for="(item, index) in imgs" :index="index" :item="item" :imgs="imgs"></Layer>
        
                <br><br>

                <h2><span class="bullet">3</span>Reflect</h2>
                <div class="text">
                    <p>Do you think your tattoo would work? What is good about it? What do you think you can still improve?</p>
                </div>

                </div>
            <Scene :size="size" :bgcolor="'transparent'">
                <Hand :fill="skincolors[skindex]"/>
                <SceneLayer v-for="(item, index) in imgs" :index="index" :item="item" :src="item.pic" :type="item.type"/>
            </Scene>


        </div>
        </div>
    `
});