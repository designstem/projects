import * as components from "https://designstem.github.io/fachwerk/components.js";

for (const name in components) {
  Vue.component(name, components[name]);
}
import Scene from "./components/Scene.js";
import Spoke2 from "./components/Spoke2.js";
import Spinner from "./components/Spinner.js";

const LoopSquare = {
  props: ["count", "n", "size"],
  methods: {
    t(x, y, r = 0) {
      return `translate(${x},${y})`;
    },
    r(angle) {
      return `rotate(${angle})`;
    }
  },
  template: `
    <g :transform="r(360 / count * n)" opacity="0.5">
      <rect :x="size / -2" :y="size / -2" :width="size" :height="size" fill="var(--purple)" />
      <rect :x="size / -2" :y="size / -2" :width="size / 2" :height="size / 2" fill="var(--yellow)" />
    </g>
  `
};

const LoopColor = {
  props: ["count", "n", "size"],
  template: `
      <g>
        <rect :x="size / -2" :y="size / -2" :width="size" :height="size" :fill="['#ff0000','#00ff00','#0000ff'][n % 3]" />
     </g>
  `
};

const LoopLine = {
  props: ["count", "n", "size"],
  template: `
      <g>
        <rect :x="size / -2" :y="size / -2" :width="10" :height="size" fill="var(--purple)" />
     </g>
  `
};

const LoopHorse = {
  props: ["count", "n", "size"],
  template: `
      <g opacity="0.7">
        <image :width="size" :href="'./images/horse/horse' + String(n % 15 + 1).padStart(3,'0') + '.png'" />
     </g>
  `
};

const LoopHammer = {
  props: ["count", "n", "size"],
  template: `
      <g opacity="0.7">
        <image :width="size" :href="'./images/hammer/hammer00' + [n % 20] + '.png'" />
     </g>
  `
};

const LoopMetropolis = {
  props: ["count", "n", "size"],
  template: `
      <g opacity="1">
        <image :width="size" :href="'./images/metropolis/metropolis' + String(n * 2 + 1).padStart(3,'0') + '.png'" />
     </g>
  `
};

new Vue({
  el: "#app",
  components: {
    Scene,
    Spoke2,
    Spinner,
    LoopLine,
    LoopSquare,
    LoopHammer,
    LoopMetropolis,
    LoopHorse,
  },
  methods: {
    t(x, y, r = 0) {
      return `translate(${x},${y})`;
    },
    r(angle) {
      return `rotate(${angle})`;
    },
    path(points) {
      return points.map(p => p.join(",")).join(",");
    }
  },
  data: () => ({
    loops: [
      { title: "Line", component: LoopLine },
      { title: "Metropolis", component: LoopMetropolis },
      { title: "Horse", component: LoopHorse },
      { title: "Dancer", component: LoopHammer }
      //{ title: "Square", component: LoopSquare },
      //{ title: "Color", component: LoopColor }
    ],
    loopIndex: 0,
    count: 60,
    size: 25,
    sceneSize: 600,
    speed: 1000
  }),
  template: `
    <div style="height: 100vh">
      <header style="background: var(--yellow)">
        <div>
          <a href="https://designstem.github.io/homepage">Home</a>
          → Frequency & Movement
        </div>
      </header>
      <div style="display: flex; height: 100%">
        <div style="padding: 2rem; border-right: 3px solid var(--primary)">
          
          <h2><div class="bullet">4</div>An illusion</h2>
          <div class="text">
            <p>This illusion is the very foundation of cinema: by showing a set of image frames in movement in certain <b>frequency</b> it tricks the eye and we <a target="_blank" href="https://en.wikipedia.org/wiki/Persistence_of_vision">perceive</a> it as a continuous movement.</p><p>This applies to all moving image: from <a target="_blank"  href="https://en.wikipedia.org/wiki/Thaumatrope">obsure</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Phenakistiscope">19th</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Zoopraxiscope">century</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Kinetoscope">gadgets</a> to <a target="_blank" href="https://www.youtube.com/watch?v=En__V0oEJsU">film projector</a> to current <a target="_blank" href="https://giphy.com/search/muybridge">GIF crazyness</a>.</p>
          </div>
          <br>
          <h3>Now, select image you want to show on a wheel</h3>

          <f-buttons :buttons="loops.map(l => l.title)" v-model="loopIndex" />

          <template v-if="loopIndex > 0">
          <br>
          <h3>Play around with image count and size</h3>
  
          <div class="text">
            <p>Number of images is <code>{{ count }}</code>. <p>
          </div>

          <input type="range" v-model="count" max="120" />          

          <div class="text">
              <p>Image size is <code>{{ size }}px</code>.</p>
          </div>

          <input type="range" v-model="size" />

          <br>
          <a href="https://designstem.github.io/vinylfrequency/step3.html" class="button_secondary">←</a> <a href="https://designstem.github.io/vinylfrequency/step5.html" class="button_primary">Go to final step 5 →</a>
          
          </template>



        </div>
        <div style="padding: 2rem; flex:1">
          <Scene :size="sceneSize">
            <Spinner :speed="speed">
            <g v-for="(_,n) in Array.from({length: 120}).slice(0,count)" :transform="r(360 / count * n)"> 
            <g :transform="t(0,(sceneSize / 2 - size) * -1 * 0.9)"> 
              <component :is="loops[loopIndex].component" :count="count" :n="n" :size="size" />
            </g>        
            </g>
          </Spinner>
          </Scene>
        </div>
      </div>
    </div>
    `
});
