import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  el: "#app",
  methods: { ...utils, 
    s(n) { return this.p / n },
    r(n, s) {
      return s / (2 * Math.tan(Math.PI / n))
    },
    R(r,s) {
      return Math.sqrt(Math.pow(r,2) + Math.pow(s / 2,2))
    }
  }, 
  data: () => ({ n: 3, p: 5 }),
  mounted() {
    console.log(this.s(this.n))
  },
  template: `
  <div>
  <header>Hexagons and packaging</header>
  <div style="padding: 2rem">
    <label>n <code>{{ n }}</code></label>
    <input type="range" v-model="n" style="width: 500px" :min="3" :max="16" step="0.01" />
    <f-scene grid step="0.125" width="800" height="400">
        <f-group :rotation="{x:180}">
          <f-circle opacity="0.1" :r="R(r(n,s(n)),s(n))" />
          <f-circle :r="R(r(32,s(32)),s(32))" opacity="0.2" />
          <f-line
            closed
            :points="cpoints(Math.floor(4),R(r(4,s(4)),s(4)))"
            :stroke="color('red')"
          />
          <f-line
            closed
            :points="cpoints(Math.floor(n),R(r(n,s(n)),s(n)))"
            :stroke="color('blue')"
          />
          <f-circle opacity="0.1" :r="r(n,s(n))" />
          <f-line
            opacity="0"
            :x2="cpoints(n,r(n,s(n)))[0].x"
            :y2="cpoints(n,r(n,s(n)))[0].y"
          />
        </f-group>
    </f-scene>

    <label>p <code>{{ p }}</code></label>
    <input type="range" v-model="p" style="width: 500px" :min="1" :max="10" step="0.01" />
      <f-scene grid step="0.125" width="800" height="400">
        <f-group v-for="(nn,i) in [3,4,5,6] ":position="{x: (i * 2) - 3}">
          <f-circle :r="R(r(nn,s(nn)),s(nn))" />
          <f-line
            closed
            :points="cpoints(nn,R(r(nn,s(nn)),s(nn)))"
            :stroke="color('blue')"
          />
          <f-circle opacity="0.5" :r="r(nn,s(nn))" />
          <f-line
            opacity="0.5"
            :x2="cpoints(nn,r(nn,s(nn)))[0].x"
            :y2="cpoints(nn,r(nn,s(nn)))[0].y"
          />
        </f-group>
    </f-scene>

    </div>
  </div>
  `
});

// new Vue({
//   el: "#app",
//   computed: {
//     s() { return this.p / this.n }
//   },
//   methods: { ...utils, 
//     r(n) {
//       return this.s / (2 * Math.tan(Math.PI / n))
//     },
//     R(r) {
//       return Math.sqrt(Math.pow(r,2) + Math.pow(this.s / 2,2))
//     }
//   }, 
//   data: () => ({ n: 3, p: 5 }),
//   template: `
//   <div style="padding: 2rem">
//     <label>n <code>{{ n }}</code></label>
//     <input type="range" v-model="n" style="width: 500px" :min="3" :max="6" />
//     <label>p <code>{{ p }}</code></label>
//     <input type="range" v-model="p" style="width: 500px" :min="1" :max="10" />
//       <f-scene grid step="0.125" width="800" height="400">
//         <f-group :position="{x: -2.5}">
//           <f-circle :r="R(r(n))" />
//           <f-line
//             closed
//             :points="cpoints(n,R(r(n)))"
//           />
//           <f-circle opacity="0.5 ":r="r(n)" />
//           <f-line
//             :x2="cpoints(n,r(n))[0].x"
//             :y2="cpoints(n,r(n))[0].y"
//           />
//         </f-group>
//     </f-scene>
//     </div>
//   `
// });


// new Vue({
//   el: "#app",
//   methods: { ...utils },
//   computed: {
//     p() {
//       return 5
//     },
//     s() {
//       return this.p / this.n
//     },
//     r() {
//       return this.s / (2 * Math.tan(Math.PI / this.n))
//     },
//     R() {
//       return Math.sqrt(Math.pow(this.r,2) + Math.pow(this.s / 2,2))
//     }
//   }, 
//   data: () => ({ n: 3 }),
//   template: `
//   <div style="padding: 2rem">
//     <input type="range" v-model="n" style="width: 500px" :min="3" :max="6" />
//       <f-scene grid step="0.125" width="800" height="400">
//       <f-group :position="{x: -2.5}">
//           <f-circle :r="R" />
//           <f-line
//             closed
//             :points="cpoints(n,R)"
//           />
//           <f-circle opacity="0.5 ":r="r" />
//           <f-line
//             :x2="cpoints(n,r)[0].x"
//             :y2="cpoints(n,r)[0].y"
//           />
//         </f-group>
//         <f-group :position="{x: -0.5}">
//           <f-circle :r="R" />
//           <f-line
//             closed
//             :points="cpoints(n,R)"
//           />
//           <f-circle opacity="0.5 ":r="r" />
//           <f-line
//             :x2="cpoints(n,r)[0].x"
//             :y2="cpoints(n,r)[0].y"
//           />
//         </f-group>
//     </f-scene>
//     </div>
//   `
// });



// new Vue({
//   el: "#app",
//   methods: { ...utils,
//     p() {
//       return 5
//     },
//     s(p,n) {
//       return p / n
//     },
//     r(s,n) {
//       return s / (2 * Math.tan(Math.PI / n))
//     },
//     R(r, s) {
//       return Math.sqrt(Math.pow(r,2) + Math.pow(s / 2,2))
//     }
//   }, 
//   template: `
//   <div>
//     <f-slider style="width: 500px" value="3" from="3" to="6">
//     <f-scene slot-scope="data" grid step="0.125" width="500" height="500">
//       <f-grid />  
//       <f-group :scale="{x:-1,y:-1}">
//       <f-circle />
//       <f-line
//         closed
//         :points="cpoints(data.value,1)"
//       />
//       <f-line :x2="cpoints(data.value,1)[data.value - 1].x" :y2="cpoints(data.value,1)[data.value - 1].y" />
//       <f-circle :r="r(s(p(),data.value),data.value)" />
//       </f-group>
//     </f-scene>
//     </f-slider>
//   </div>
//   `
// });

// for (const name in components) {
//   Vue.component(name, components[name])
// }

// new Vue({
//   el: "#app",
//   methods: { ...utils,
//     p() {
//       return 10
//     },
//     s(p,n) {
//       return p / n
//     },
//     r(s,n) {
//       return s / (2 * Math.tan(Math.PI / n))
//     },
//     R(r, s) {
//       return Math.sqrt(Math.pow(r,2) + Math.pow(s / 2,2))
//     }
//   }, 
//   template: `
//   <div>
//     <f-slider style="width: 500px" value="3" from="3" to="6">
//     <f-scene slot-scope="data" grid step="0.125" width="500" height="500">
//       <f-grid />  
//       <f-group :scale="{x:-1,y:-1}">
//       <f-circle />
//       <f-line
//         closed
//         :points="cpoints(data.value,1)"
//       />
//       </f-group>
//     </f-scene>
//     </f-slider>
//   </div>
//   `
// });
