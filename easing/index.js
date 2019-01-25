import Scene from "./components/Scene.js";
import BezierEditor from "./components/BezierEditor.js";

new Vue({
  el: "#app",
  components: { Scene, BezierEditor },
  data: () => ({
    size: 600,
    duration: 1,
    progress: 0,
    progressStep: 0.01,
    framecount: 1, 
    fps: 12,
    tick: 500,
    animate: false
  }),
  mounted: function() {
    this.calcFrameCount();
  },
  methods: {
    calcFrameCount(){
      this.framecount = Math.floor(this.duration * this.fps);
      this.tick = this.duration*1000/this.framecount;
      this.progressStep = 1/this.framecount;
    },
    animationStep(){
      if(this.progress + this.progressStep < 1){
        this.progress += this.progressStep;
      } else {
        this.progress = 1;
      }
    }
  },
  watch: {
    fps: function(){
      this.calcFrameCount();
    },
    duration: function(){
      this.calcFrameCount();
    },
    animate: function(){
      if(this.animate){
        this.progress = 0;
        const self = this;
        this.$options.interval = setInterval(function(){
          //console.log(this.progress);
          if(self.progress < 1){
            self.animationStep();
          } else {
            //self.progress = 0;
            self.animate = false;
          }
        }, self.tick);
      } else {
        clearInterval(this.$options.interval);
      }
    }
  },
  template: `
  <div>
    <header>
      <div>
        <a href="https://designstem.github.io/homepage">Home</a>
        → <a href="https://designstem.github.io/homepage/easing">Easing</a>
      </div>
    </header>
    
    <div style="display: flex">
      <div style="width: 24rem; padding: 2rem; border-right: var(--border-width) solid var(--primary)">
      
        <h2>Easings visualizer</h2>
        <p>Relations between duration, framerate and easings visualized. Poke the sliders, buttons and handles.</p>
        <hr style="margin-bottom:2rem;">

        <label>Duration: <code>{{duration}}</code> <small>(second<span v-show="duration!=1">s</span>)</small></label>
        <input type="number" v-model="duration" min="0.1" step="0.1" />
        <label>Framerate: <code>{{fps}}</code></label>
        <input type="range" v-model="fps" min="1" max="60" step="1" />
  
        <label>Progress: <code>{{Math.round(progress * 100) / 100}}</code></label>
        <input type="range" v-model="progress" min="0" max="1" :step="progressStep" />
        
        <div @click="animate = !animate" class="button_primary" >{{animate ? '❙❙' : '▶'}}</div> 
      </div>

      <BezierEditor :progress="progress" :framecount="framecount" />

    </div>
  </div>
`
});""