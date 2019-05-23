import Scene from "./components/Scene.js";
import Editable3 from "./components/Editable3.js";
import SquareTiles from "./components/SquareTiles.js";
import OffsetTiles from "./components/OffsetTiles.js";
import Points from "./components/Points.js";
import Triangles from "./components/Triangles.js";

import { presets } from "./utils.js";

Vue.config.ignoredElements = ["a-triangle", "a-scene", "a-box", "a-sky"];
Vue.config.devtools = true
 
new Vue({
  el: "#app",
  components: { Scene, Editable3, SquareTiles, OffsetTiles, Points, Triangles },
  data: () => ({
    layouts: [
      { component: "SquareTiles", title: "Square layout" },
      { component: "OffsetTiles", title: "Offset layout" },
      { component: "Triangles", title: "3D layout" }
    ],
    currentLayout: 0,
    size: 400,
    step1: 80,
    rotationX: -40,
    rotationY: 0,
    rotationZ: 0,
    height: 60,
    step: 2.5,
    points: [],
    presets
  }),
  computed: {
    center() {
      return this.points.filter(p => p.height)[0];
    },
    isCenter() {
      return this.currentLayout == 2;
    }
  },
  methods: {
    polygonToTriangles(points) {
      const triangles = [];
      points.forEach((point, index) => {
        if (index < points.length - 1) {
          triangles.push([
            { x: point.x, y: point.y, z: 0 },
            { x: this.center.x, y: this.center.y, z: this.height },
            { x: points[index + 1].x, y: points[index + 1].y, z: 0 }
          ]);
        } else {
          triangles.push([
            { x: point.x, y: point.y, z: 0 },
            { x: this.center.x, y: this.center.y, z: this.height },
            { x: points[0].x, y: points[0].y, z: 0 }
          ]);
        }
      });
      return triangles;
    }
  },
  created() {
    this.points = this.presets.twoByTwo;
  },
  template: `
    <div>
      <header>
      <div>
        <a class="tertiary" href="..">← Back to projects</a>
      </div>
      </header>
      <div style="display: flex">
        <div style="width: 250px; padding: 2rem; border-right: 3px solid var(--primary)">
          <h2>Edit a pattern</h2>
          <div class="text">
            <p>Adjust the tile sides to create a repeating pattern.</p>
          </div>
          <Editable3 style="margin: -1rem 0 0 -1rem" :size="size / 1.5" v-model="points" :center="isCenter" />
          <div>
            <label>Tile size</label>
            <div class="buttons">
              <button class="button_tertiary" @click="points = presets.twoByTwo">2 × 2</button>
              <button class="button_tertiary" @click="points = presets.threeByThree">3 × 3</button>
              <button class="button_tertiary" @click="points = presets.fourByFour">4 × 4</button>
            </div>
            <br>
            <div>
              <label>Tile spacing <code>{{step1 / 20}}</code></label>
              <input v-if="isCenter" type="range" v-model="step" min="1" max="5" step="0.5" />
              <input v-else type="range" v-model="step1" min="0" max="180" step="20" />
              <label v-if="isCenter">Height <code>{{height}}</code></label>
              <input v-if="isCenter" type="range" v-model="height" min="-100" max="100" />
            </div>
          </div>
        </div>
        <div style="flex: 1">
          <component v-if="currentLayout !== 2" :is="layouts[currentLayout].component" :size="size * 2" count="4" :step="step1">
            <Points
              slot-scope="s"
              :size="size"
              :points="points.filter(p => ! p.height)"
            />
          </component>
          <Triangles
            v-if="currentLayout == 2"
            :triangles="polygonToTriangles(points.filter(p => ! p.height))"
            :rotation="[rotationX,rotationY,rotationZ]"
            :step="step"
          />
        </div>
        <div class="buttons" style="position: absolute; top: 7rem; right: 2rem">
          <div
            v-for="(layout, index) in layouts"
            class="button_tertiary"
            :style="{
              background: currentLayout == index ? '#ccc' : 'white'
            }"
            @click="currentLayout = index"
          >
            {{ layout.title }}
          </div>
        </div>
      </div>
    </div>
    `
});