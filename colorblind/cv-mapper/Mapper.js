import { 
  Vue,
  components,
  Css, 
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
  mixins: [Css],
  data() {
    return {
      width: 0,
      height: 0,
      half: {
          x: 0,
          y: 0
      },
      startPoints: [
        [-1, 1],
        [ 0, 1],
        [ 1, 1],
        [ 1, 0], 
        [ 1,-1],
        [ 0,-1],
        [-1,-1],
        [-1, 0]
      ],
      // startPoints: [
      //   [ 0, 1],
      //   [ 1, 0], 
      //   [ 0,-1],
      //   [-1, 0]
      // ],
      dotIndex:0,
      distanceStep:2,
      intervalStep: 50,
      dotDistance: 0,
      interval: null,
      running:false,
      clicked: 0,
      resultsDistance: [],
      resultsColour: [],
      done: false
    }
  },
  methods: {
    ...utils,
    drawLine(l1, l2, l3, l4){
        return `M ${l1},${l2} L ${l3},${l4}`;
    },
    onResize(){
      this.resetPosition();
    },
    resetPosition(){
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.half = this.compHalf;
      this.dotDistance = this.compPolarDistance;
    },
    startAnimation(){
      var _that = this;
      this.interval = setInterval(function(){
          _that.dotDistance -= _that.distanceStep;
      },this.intervalStep);
      this.running = true;
    },
    stopAnimation(){
      if(this.running){
        if(this.clicked == 0){
          this.clicked = 1;
          this.resultsDistance.push([this.polarx(this.compPolarAngle, this.dotDistance), this.polary(this.compPolarAngle, this.dotDistance)]);
        } else if(this.clicked == 1){
          clearInterval(this.interval);
          this.running = false;
          this.resultsColour.push([this.polarx(this.compPolarAngle, this.dotDistance), this.polary(this.compPolarAngle, this.dotDistance)]);
          this.clicked = 0;
          
          if(this.dotIndex == this.startPoints.length-1 ){
            this.done = true;
          } else {
            this.dotIndex++;
            this.resetPosition();
          }
        }
      }
    },
    toggleFullScreen() {
      if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen(); 
        }
      }
    }
  },
  mounted() {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  },
  computed: {
      compViewBox(){
          return `${-this.half.x} ${-this.half.y} ${this.width} ${this.height}`;
      },
      compHalf(){
          return { x: this.width/2, y:this.height/2 }
      },
      compDotTransform(){
        return `translate( ${this.polarx(this.compPolarAngle, this.dotDistance)}, ${this.polary(this.compPolarAngle, this.dotDistance)} )`;
      },
      compPolarDistance(){
          let w = this.half.x * this.startPoints[this.dotIndex][0];
          let h = this.half.y * this.startPoints[this.dotIndex][1];
          return Math.sqrt(w*w + h*h);
      },
      compPolarAngle(){
          let w = this.half.x * this.startPoints[this.dotIndex][0];
          let h = this.half.y * this.startPoints[this.dotIndex][1];
        return 90-Math.atan2(h,w) * (180/Math.PI);
      },
      compDistancePath(){
        if(this.resultsDistance.length > 0){
          let m = `M ${this.resultsDistance[0][0]}, ${this.resultsDistance[0][1]} `;
          let l = "";
          for(let i=1; i<this.resultsDistance.length; i++){
            l += `L ${this.resultsDistance[i][0]}, ${this.resultsDistance[i][1]}`;
          }
          return m + l + " Z";
        } else {
          return `M 0 0 L 0 0`
        }
      },
      compColourPath(){
        if(this.resultsColour.length > 0){
          let m = `M ${this.resultsColour[0][0]}, ${this.resultsColour[0][1]} `;
          let l = "";
          for(let i=1; i<this.resultsColour.length; i++){
            l += `L ${this.resultsColour[i][0]}, ${this.resultsColour[i][1]}`;
          }
          return m + l + " Z";
        } else {
          return `M 0 0 L 0 0`
        }
      }
  },
  template: `
  <div>
    <svg :viewBox="compViewBox" :width="width" :height="height" @click="stopAnimation" class="mapper">
      <path 
        v-for="(line, i) in startPoints"
        :key="'line'+i" 
        :d="drawLine(0, 0, half.x*startPoints[i][0], half.y*startPoints[i][1] )" 
        class="guide" 
      />
      <path v-if="done" :d="compDistancePath" class="distancePath" />
      <path v-if="done" :d="compColourPath" class="colourPath" />
      <g :transform="compDotTransform">
          <path d="M 0,0 L 0,0" class="dot" />
      </g>
    </svg>
    <div class="help" :style="running ? { pointerEvents: 'none' } : { pointerEvents: 'auto' }">
      <div  class="help__description">    
        <div v-if="!running" class="help__description-text">
          <h4>A coloured dot will move from the edge of the screen towards the centre.</h4>
          <h4><strong>1</strong> Click on the screen once you <b>see the dot moving</b></h4>
          <h4><strong>2</strong> Click on the screen once you <b>clearly see dots colour</b></h4>
          <p>Repeat.</p>
        </div>
      </div>
      <div class="help__controls">
        <p style="line-height:0.8;">LOOK HERE</p>
        <p style="margin-top:2vh;">
          <span v-if="!running"><button style="--base:12px;" @click="startAnimation">START</button></span>
          <span v-if="running">
            Click anywhere, once you see the<br />
            <span v-if="clicked==0">MOVING DOT</span><span v-if="clicked==1">DOTS COLOUR</span>!
          </span>
        </p>
        <p v-if="!running" style="color:var(--emphasis);--base:10px;">DONE: {{ dotIndex }} of 8</p>
      </div>
      <button v-if="!running" class="fs-button" @click="toggleFullScreen">fullscreen</button>
    </div>
  </div>
  `,
  css: `
    .mapper{
      display:block;
      width: 100vw;
      height: 100vh;
    }
    .guide {
      stroke: hsla(0, 0%, 100%, 0);
      stroke-width: 1px;
    }
    .distancePath{
      stroke: hsla(0, 0%, 100%, 0.5);
      stroke-width: 1px;
      fill: none;
    }
    .colourPath{
      stroke: hsla(0, 80%, 50%, 0.5);
      stroke-width: 1px;
      fill: none;
    }
    .dot{
      fill:red;
      stroke: red;
      stroke-width:2vmin;
      stroke-linecap:round;
    }
    .help{
      position: fixed;
      left:0;
      top: 0;
      width: 100vw;
      height: 100vh;
      display: grid;
      grid-template-rows: 1fr 1fr;
      text-align: center;
      --base:8px;
    }
    .help__description {
      display: flex;
      justify-content:center;
      align-items:center;
    }
    .help__description-text {
      padding: 4vmin;
      background: hsla(0, 0%, 0%, 0.5);
      border-radius: 10px;
    }
    .help__description-text > h4{
      font-weight: 300;
      line-height: 1.5;
    }
    .fs-button {
      position:fixed;
      right:10vw;
      bottom:15px;
      background: transparent;
      --base:8px;
    }
  `
};
