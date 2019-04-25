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
        <rect :x="size / -2" :y="size / -2" :width="10" :height="size" fill="black" />
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
    loopIndex: 3,
    count: 15,
    size: 120,
    sceneSize: 1500,
    speed: 50000
  }),
  template: `
    <div style="height: 100vh">
      <header style="background: var(--yellow); border-bottom: none">
        <div>
          ← <a href="https://designstem.github.io/homepage">Home</a>
        </div>
      </header>
      <div style="display: flex; height: 100%; background: var(--yellow)">
        <div style="padding: 2rem;">
          
          <h1 style="font-size: 5rem; line-height: 5rem;">Frequency &&nbsp;Movement</h1>
            <h2>Learn about the beginnings of moving pictures, the art and the science behind it and why we are still so mesmerized watching those GIF memes.</h2>
            <br><br>
            <a href="https://designstem.github.io/vinylfrequency/step1.html" class="button_primary">Go to Step 1 →</a>

        </div>

        <div style="flex:1; margin-left: -10rem">
          <Scene :size="sceneSize">
            <Spinner :speed="speed">
            <g v-for="(_,n) in Array.from({length: 120}).slice(0,count)" :transform="r(360 / count * n)"> 
            <g :transform="t(0,(sceneSize / 2 - size) * -1 * 1.1)"> 
              <component is="LoopHorse" :count="count" :n="n" :size="size * 2" />
            </g>          
            </g>
          </Spinner>
          </Scene>
        </div>
      </div>
    </div>
    `
});
