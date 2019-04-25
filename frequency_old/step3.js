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
    LoopHorse
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
      { title: "Hammer", component: LoopHammer },
      { title: "Horse", component: LoopHorse },
      { title: "Square", component: LoopSquare },
      { title: "Color", component: LoopColor }
    ],
    loopIndex: 0,
    count: 22,
    size: 25,
    sceneSize: 600,
    speed: 1250
  }),
  template: `
    <div style="height: 100vh">
      <header style="background: var(--yellow)">
        <div>
          <a href="https://designstem.github.io/homepage">Home</a>
          → Frequency & Movement
        </div>
      </header>
      <!--header>
        <div>
          <div>Steps:&nbsp;&nbsp;<div class="bullet">1</div></div>
        </div>
      </header-->
      <div style="display: flex; height: 100%">
        <div style="width: 500px; padding: 2rem; border-right: 3px solid var(--primary)">
          
          <h2><div class="bullet">3</div>All together now</h2>
          <h3>Adjust the rotation speed <i>and</i> the number of lines so the wheel stops.</h3>
          <br>
          <div class="text">
            <p>Rotation speed is <code>{{speed }}ms = {{ speed / 1000}}s</code> per rotation.</p>
          </div>
          <input type="range" v-model="speed" step="2" min="0" max="2000" />
          
          <div class="text">
            <p>Number of lines is <code>{{ count }}</code>. <p>
          </div>
          <input type="range" v-model="count" max="120" />          

          <template v-if="speed == 1000 && count == 60">
          <div class="text">
            <p>Gotcha! We ended up in a place where we have <code>1&nbsp;second</code> for a full rotation and <code>60 lines</code> on a wheel. Do you know how fast your monitor updates it's picture? It is <code>60Hz</code> or <i>60 times per second</i>. See? The wheel <i>never stopped</i>. It is moving <i>right now</i>. It is all an <i>illusion</i>.</p>
          </div>
          <br>
            <a href="https://designstem.github.io/vinylfrequency/step2.html" class="button_secondary">←</a> <a href="https://designstem.github.io/vinylfrequency/step4.html" class="button_primary">Go to Step 4 →</a>
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
