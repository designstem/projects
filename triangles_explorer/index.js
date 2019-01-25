
import Tetrahedron from "./components/Tetrahedron.js";
import Cube from "./components/Cube.js";
//import ConeDodecahedron from "./components/Dodecahedron.js";
import Octahedron from "./components/Octahedron.js";
import Dodecahedron from "./components/Dodecahedron.js";
import Icosahedron from "./components/Icosahedron.js";
import Pyramid from "./components/Pyramid.js";

import { generateSTL, format } from "./utils.js";



Vue.config.ignoredElements = [
  "a-scene",
  "a-box",
  "a-sky",
];


new Vue({
  el: "#app",
  components: { Tetrahedron, Cube, Octahedron, Dodecahedron, Icosahedron, Pyramid },
  data: () => ({
    explode: 0,
    rotation: 0,
    opacity: 0.95,
    wireframe: false,
    colors: [
      "#e57373",
      "#4FC3F7",
      "#F06292",
      "#BA68C8",
      "#FFB74D",
      "#7986CB",
      "#4DB6AC",
      "#81C784",
      "#DCE775",
      "#FFD54F",
      "#FF8A65",
      "#90A4AE"
    ],
    animate: true,
    explodeAnim: {},
    rotationAnim: {},
    activeComponent: "Dodecahedron"
  }),
  
  mounted() {
    this.explodeAnim = anime({
      targets: this,
      explode: [0, 0.6],
      duration: 10000,
      direction: 'alternate',
      loop: true,
      easing: [0,0,1,1],
      autoplay: false
    });
    this.rotationAnim = anime({
      targets: this,
      rotation: 360,
      duration: 30000,
      //direction: 'alternate',
      loop: true,
      easing: [0,0,1,1],
      autoplay: false
    });
    this.explodeAnim.play();
    this.rotationAnim.play();
},
  watch: {
    animate: function() {
      
      if(this.animate){
        this.explodeAnim.explode = [this.explode, 0.6];
        this.explodeAnim.play();
        this.rotationAnim.play();
      } else {
        this.explodeAnim.pause();
        this.rotationAnim.pause();
      }

    }
  },

  methods: {
    format,
    exportSTL() {
      console.log(generateSTL(this.$refs.exportable.object3D));
    },
    swapView(comp) {
      this.activeComponent = comp;
    },
    handleAnimation(){
      this.animate = !this.animate;
    }
  },

  template: `
    <!--<div>-->
    
    <a-scene background="color: #fff">

        <a-entity id="main" ref="exportable" position="5 0 -20" scale="4 4 4" > 
            <component 
                :is="activeComponent" 
                :explode="explode"
                :opacity="opacity"
                :wireframe="wireframe"
                :colors="colors"
                :animate="animate"
                :rotation="format({ x: 0, y: rotation, z: 0})"
            ></component>
            <!--<a-animation 
              attribute="rotation"
              dur="20000"
              fill="forwards"
              to="0 360 0"
              easing="linear" 
              repeat="indefinite">
            </a-animation>-->

        </a-entity> <!-- exportable -->
      
        <a-entity 
            camera="active: true; fov: 50; zoom:0.7;"
            look-controls wasd-controls 
            position="0 0 0"
        ></a-entity>
    
        <a-light type="ambient" color="#ffffff" intensity="0.5"></a-light>
        <a-light type="spot" color="yellow" intensity="0.6" position="0 4 -0"  look-at="main"></a-light>
        <a-light type="point" color="yellow" intensity="0.5" position="0 -4 0" look-at="main"></a-light>


        <!-- fooling around with some dynamic lightning -->
        <!--<a-light type="ambient" color="#ffffff" :intensity="-explode+0.3*(explode)"></a-light>
        <a-light type="spot" color="yellow" :intensity="0.2+explode*1.3" :position="format({ x: 0, y: -explode, z: 2 + explode*-8})"  look-at="main"></a-light>
        <a-light type="point" color="green" :intensity="-0.2+explode" :position="format({ x: -5, y: -explode+2, z: -7 + explode*3})" look-at="main"></a-light>-->


        <!--<a-sky color="#232323"></a-sky>-->



        <div style="position: fixed; top: 5rem; left: 0; bottom: 0; padding: 2em; width: 240px;">
      
      
      <div  class="buttons" style="margin-bottom:2rem;">
        <div class="button_tertiary" @click="swapView('Tetrahedron')">Tetrahedron</div>
        <div class="button_tertiary" @click="swapView('Cube')">Cube</div>
        <div class="button_tertiary" @click="swapView('Octahedron')">Octahedron</div>
        <div class="button_tertiary" @click="swapView('Dodecahedron')">Dodecahedron</div>
        <!--<div class="button_tertiary" @click="swapView('Icosahedron')">Icosahedron</div>-->
      </div>

      
      <div style="display:flex; align-items:flex-end;">
        <div style="flex:1;">
          <label>Move elements: <code>{{Math.round(this.explode * 100) / 100}}</code></label>
          <input type="range" v-model="explode" :disabled="animate" min="-1" max="1" step="0.01" />
        </div>
        <div style="margin-left:0.5rem;">
          <div @click="animate = !animate" class="button_secondary" >{{animate ? '❙❙' : '▶'}}</div>       
        </div>
      </div>

      <label>Opacity: <code>{{this.opacity}}</code></label>
      <input type="range" v-model="opacity" min="0" max="1" step="0.01" />
      
      <label>Wireframe: <input type="checkbox" v-model="wireframe" style="display:inline;" /> {{this.wireframe}}</label>

      
      <div class="button_secondary" @click="exportSTL">Export STL</div>

      <header style="position: fixed; top: 0; right: 0; left: 0">
      <div>
          <a href="https://designstem.github.io/homepage">Home</a>
          → <a href="https://designstem.github.io/homepage/triangles">Looking for Triangles</a>
          → Polyhedron Explorer
      </div>
  </header>

    </div>
    </a-scene>
    
    

       

    <!--</div>-->
    `
});