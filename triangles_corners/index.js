import Scene from "./components/Scene.js";
import Corner from "./components/Corner.js";

new Vue({
  el: "#app",
  components: { Scene, Corner },
  data: () => ({
    size: 600,
    sides: 4,
    polyhedra: [
      {name:"Tetrahedron", sides:3, dihedral:70.53},
      {name:"Cube", sides:4, dihedral:90},
      {name:"Octahedron", sides:8, dihedral:109.47},
      {name:"Dodecahedron", sides:12, dihedral:116.56},
      {name:"Icosahedron", sides:4, dihedral:138.19}

    ],
    angle: 180,
    thickness: 80
  }),
  methods: {
    setAngle(a){
      this.angle = a;
      console.log(this.angle);
    }
  },
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
      <div style="width: 24rem; padding: 2rem; border-right: var(--border-width) solid var(--color-gray-dark)">
      
        <h2>Dihedral angle</h2>

        <p>You have to cut the edges of material at certain angle, to make the sides fit together. For different polyhedra the angle is different.</p>

        <div style="display:flex; flex-wrap:wrap; justify-content:space-evenly; margin:2rem 0;">
          <div v-for="hedron in polyhedra" class="button_tertiary" @click="setAngle(hedron.dihedral)"
            style="flex:0 1 40%; text-align:center; margin-bottom:0.3rem;">{{ hedron.name }}</div>
        </div>


        <h2 style="margin-bottom:4rem; text-align:center;">Dihedral angle: {{this.angle}}&deg;</h2>


        <!--<label>Angle: <code>{{angle}} deg</code></label>
        <input type="range" v-model="angle" min="1" max="180" />-->
        
        <label>Material thickness: <code>{{thickness}}</code></label>
        <input type="range" v-model="thickness" min="1" max="150" />
        
        <!--<label>Sides of a polygon:</label>
        <input type="text" v-model="sides" min="3" max="20" />-->
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
    </div>
  `
});""