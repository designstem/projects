import * as components from "https://designstem.github.io/fachwerk/framework.js";

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
        <circle :cx="size / -2" :cy="size / -2" :r="size / 2" :fill="['#ff0000','#00ff00','#0000ff'][n % 3]" />
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
      //{ title: "Line", component: LoopLine },
      { title: "Metropolis", component: LoopMetropolis },
      { title: "Horse", component: LoopHorse },
      { title: "Dancer", component: LoopHammer },
      //{ title: "Square", component: LoopSquare },
      { title: "Color dot", component: LoopColor }
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
          
          <h2><div class="bullet">5</div>What next?</h2>


          <h3><div class="bullet">A</div>Take it for a spin</h3>

          <div class="text">
            <p>Hook up a vinyl player and use the  <b>printouts</b> to explore motion and frequency in real world.</p>
          </div>

          <h3><div class="bullet">B</div>Experiment with lower framerates</h3>

          <div class="text">
            <p>While we cannot adjust the computer screen update frequency so easily, <a href="https://designstem.github.io/vinylfrequency_camera" target="_blank">we can use an app</a> to control camera framerate.</p>
          </div>

          <h3><div class="bullet">C</div>Explore color in motion</h3>
          <div class="text">
            <p>There are some <a href="" @click.prevent="loopIndex = 3">color dots</a> you can play with.</p><template v-if="loopIndex == 3"><p>Rotation speed is <code>{{speed }}ms</code>. <i>Why the color dots turn gray at certain speeds</i>?</p></template>
          </div>

          <template v-if="loopIndex == 3">
          <br>
          <input type="range" v-model="speed" step="2" min="0" max="2000" />
          </template>

          <br>
          <a href="https://designstem.github.io/vinylfrequency/step4.html" class="button_secondary">←</a> <a href="https://designstem.github.io/homepage" class="button_secondary">Back to homepage</a>

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
