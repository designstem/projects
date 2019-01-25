import Scene from "./components/Scene.js";
import Corner from "./components/Corner.js";

new Vue({
  el: "#app",
  components: { Scene, Corner },
  data: () => ({
    size: 600,
    sides: 4,
    angle: 90,
    thickness: 60
  }),
  watch: {
    sides: function(val) {
      this.angle = (180 * (this.sides - 2)) / this.sides;
    }
  },
  template: `
    <div>
    <header>
      <div>
        <a href="https://designstem.github.io/homepage">Home</a>
        → <a href="https://designstem.github.io/homepage/triangles">Looking for triangles</a>
        → Corner calculator
      </div>
      </header>
    <div style="display: flex">
      <div style="width: 20rem; padding: 2rem; border-right: var(--border-width) solid var(--color-gray-dark)">
      
      <h2>Cut the corner</h2>

      <p>Some kind of description of the task goes here. It can even be a bit longer</p>

      <label>Angle: <code>{{angle}} deg</code></label>
      <input type="range" v-model="angle" min="1" max="180" />
      
      <label>Material thickness: <code>{{thickness}}</code></label>
      <input type="range" v-model="thickness" min="1" max="100" />
      
      <label>Sides of a polygon:</label>
      <input type="text" v-model="sides" min="3" max="20" />
      </div>
      
      <Scene :size="size">
        <defs>
          <filter x="0" y="0" width="1" height="1" id="txtBg">
            <feFlood flood-color="rgba(255,255,255,0.8)"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g style="transform: translate(80px, -40px)">
          <Corner :angle="this.angle" :sides="this.sides" :thickness="this.thickness"></Corner>
        </g>
      </Scene>

    </div>
  `
});""