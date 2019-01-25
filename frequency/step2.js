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
    count: 72,
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
      <!--header>
        <div>
          <div>Steps:&nbsp;&nbsp;<div class="bullet">1</div></div>
        </div>
      </header-->
      <div style="display: flex; height: 100%">
        <div style="width: 500px; padding: 2rem; border-right: 3px solid var(--primary)">
          
          <h2><div class="bullet">2</div>Make it stop, again</h2>
          <h3>Adjust the number of lines so the wheel stops</h3>
          <div class="text">
            <p>Number of lines is <code>{{ count }}</code>. <p>
          </div>
          <input type="range" v-model="count" max="120" />          
          
          <template v-if="count == 0">
            <div class="text"><p>Really? Like <i>really really really</i>?</p></div>
          </template>

          <template v-if="count == 15">
            <div class="text"><p>Did it stop? My eyes are not sure.</p></div>
          </template>

          <template v-if="count == 30">
            <div class="text">
              <p>Yes, it kind of stopped but this flicker is kind of annoying. Can you do better?</p>
              </div>
          </template>

          <template v-if="count == 60">
          <div class="text">
            <p>Wow! It stopped exactly at <code>60&nbsp;lines</code>. <i>Why</i>? Let's figure it out in the next step.</p>
          </div>
          <br>
            <a href="https://designstem.github.io/vinylfrequency/step1.html" class="button_secondary">←</a>
            <a href="https://designstem.github.io/vinylfrequency/step3.html" class="button_primary">Go to Step 3 →</a>
          </template>

          <template v-if="count == 90">
            <div class="text">
              <p>Ok, you can call it stopping, I call it a flicker. Try some more!</p>
            </div>
          </template>

          <template v-if="count == 120">
          <div class="text">
            <p>Very good, it stopped! But can you do it with smaller number of lines as well?</p>
          </div>
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
