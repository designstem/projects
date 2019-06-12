import {
  Vue,
  components,
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name]);
}

Vue.prototype.$global = new Vue({ data: { state: {} } });

new Vue({
  el: "#app",
  //components: { Spiral },
  data: () => ({
    // greek
    yPointsCount: 50,
    yDistance: 20,
    yCycles: 3.7,
    yFirstPoint: 80,
    yActivePoint:5,

    // d3
    // d3Radius: 100,
    // d3Start:5,
    // d3End:0,

    // third example
    // origin: {x:0,y:0},
    // numSpirals: 5,
    // padding: 20,
    // pointCount: 2000,
    // clockwise: false,
  }),
  computed: {

    d3Line(){
      return d3.line().curve(d3.curveCardinal.tension(0));
    },
    yComputedPoints(){
      
      const temp = [[this.yFirstPoint, 0]];

      let a = parseFloat(this.yFirstPoint);    
      let b = this.yDistance / (2 * Math.PI); 
      let theta0 = 2 * Math.PI / this.yPointsCount;

      for(let j = 1; j <= this.yPointsCount * this.yCycles; j++){
        let theta = j * theta0;
        let r = a + b * theta;
        let x = r * Math.cos(theta);
        let y = r * Math.sin(theta);
        let coords = [x, -y];
        if( !isNaN(x) && !isNaN(y) ){
          temp.push(coords);
        } 
      }
      
      return temp;
    },
    yTriangle() {
      //let i = this.yFirstPoint < 100 ? Math.floor(this.yPointsCount*this.yCycles) : Math.floor(this.yPointsCount*0.15) ;
      // return `M0,0 L ${this.yComputedPoints[this.yActivePoint][0]} 0 L ${this.yComputedPoints[this.yActivePoint][0]} ${this.yComputedPoints[this.yActivePoint][1]} Z`
      let points = [ {x:0, y:0}, {x:this.yComputedPoints[this.yActivePoint][0], y:0}, {x:this.yComputedPoints[this.yActivePoint][0], y:this.yComputedPoints[this.yActivePoint][1]} ];
      return points;
    },

    d3Path(){
      var points = d3.range(this.d3Start, this.d3End + 0.001, (this.d3End + 0.001 - this.d3Start) /  500);
      var radius = d3.scaleLinear().domain([this.d3Start, this.d3End]).range([0, this.d3Radius]);
      const pathGenerator = d3.radialLine().curve(d3.curveCardinal).angle(this.theta).radius(radius);
      return pathGenerator(points);
    },
    spiralPoints(){
      var direction = this.clockwise ? 1 : -1;
      var circ = this.padding / (2 * Math.PI);
      var step = (2 * Math.PI * this.numSpirals) / this.pointCount;
      var points = [], angle, x, y;
      for (var i = 0; i <= this.pointCount ; i++){
        angle = direction * step * i;
        x = this.roundTo((circ * angle) * Math.cos(angle) + this.origin.x, 2);
        y = this.roundTo((circ * angle) * Math.sin(angle) + this.origin.y, 2);
        points.push(x + " " + y);
      }
      return `M ${points.shift()} S ${points.join(' ')}`;
    }
  },
  methods: {
    ...utils, 
    theta(r) {
      return 2 * Math.PI * r;
    },
    roundTo (input, sigdigs) {
      return Math.round(input * Math.pow(10, sigdigs) ) / Math.pow(10, sigdigs);
    },
  },
  // watch: {

  //   numSpirals: function(){
  //     this.makeSpiralPoints();
  //   }
    
  // },
  template: `
  <div>

    <div style="display: flex; min-height:100vh;">
      <div style="flex:0 0 30%; 
        padding: 2vw; 
        border-right: 1px solid var(--darkgray);
        display:flex; 
        flex-direction: column;
        justify-content:center;">
      
        <h2>Spirals</h2>
        
        <label>Starting point: <code>{{yFirstPoint}}</code></label>
        <input type="range" v-model="yFirstPoint" min="0" max="300" />

        <label>Number of cycles: <code>{{yCycles}}</code></label>
        <input type="range" v-model="yCycles" min="0" max="50" step="0.01"  />

        <label>Points per cycle: <code>{{yPointsCount}}</code></label>
        <input type="range" v-model="yPointsCount" min="1" max="360"   />

        <label>Distance between spirals: <code>{{yDistance}}</code></label>
        <input type="range" v-model="yDistance" min="0" max="200"   />
        
        <label>Active point: <code>{{yActivePoint}}</code></label>
        <input type="range" v-model="yActivePoint" min="0" :max="Math.round(yPointsCount*yCycles)"   />
  
      </div>
      <div style="flex:1 0 55%; display:flex; align-items: center;">
        <f-artboard width="600" height="500" grid style="width: 100%; height:auto;">
        <g transform="translate(300 250)">  
        <g>
            <f-line
              :points="[{ x: -1000, y: 0 }, { x: 1000, y: 0 }]"
              :tension = "0"
              :stroke= "color('lightgray')"
              :strokeWidth="0.3"
            />
            <f-line
              :points="[{ x: 0, y: -1000 }, { x: 0, y: 1000 }]"
              :tension = "0"
              :stroke= "color('lightgray')"
              :strokeWidth="0.3"
            />
          </g>
          <g>
            <f-line
              :points = "yComputedPoints.map((p,i) => ({ x: p[0], y: p[1] }))"
              :curved = "true"
              :tension = "0"
              :stroke = "color('black')"
              :strokeWidth = "1.2"
            />
            <f-circle 
              :points = "yComputedPoints.map((p,i) => ({ x: p[0], y: p[1] }))"
              :r = "1.5" 
              :fill = "color('black')"
            /> 
            <f-circle 
              :points = "yComputedPoints[yActivePoint].map((p) => ({ x: p[0], y: p[1] }))" 
              :x = "yComputedPoints[yActivePoint][0]"
              :y = "yComputedPoints[yActivePoint][1]"
              :r = "8" 
              :stroke = "color('red')"
              :strokeWidth = "2.5"
              fill = "none"
            /> 
            <f-line 
              :points = "yTriangle"  
              :stroke = "color('purple')"
              :strokeWidth = "2.5"
              :curved = "false"
              :tension = "0"
              :closed = "true"
              fill = "none"
            />
          </g>
        </g>
        </f-artboard>
      </div>
      <div style="flex:0 0 15%; 
        padding: 2vw; 
        border-left: 1px solid var(--darkgray); 
        display:flex; 
        flex-direction: column;
        justify-content:center;">
        <h4>ACTIVE POINT COORDINATES:</h4>
        <div class="">
          <b>CARTESIAN</b><br>  
          <b>x:</b> <code>{{ round(yComputedPoints[yActivePoint][0], 4) }}</code><br>
          <b>y:</b> <code>{{ round(yComputedPoints[yActivePoint][1], 4) }}</code>
        </div>
        <div style="margin-top:calc(var(--base)*3);">
          <b>POLAR</b><br>  
          <b>θ:</b> <code>{{round(Math.atan(yComputedPoints[yActivePoint][1]/yComputedPoints[yActivePoint][0])* (180 / Math.PI), 4) }}°</code><br>
          <b>r:</b> <code>{{round(Math.sqrt(Math.pow(yComputedPoints[yActivePoint][0], 2) + Math.pow(yComputedPoints[yActivePoint][1], 2)), 4) }}</code>
        </div>
      </div>
    </div>
    
<!-- <hr>
      
    <div style="display: flex">
      <div style="width: 24rem; padding: 2rem; border-right: var(--border-width) solid var(--color-gray-dark)">
      
        <h2>d3.radialLine()</h2>
        <label>d3 Start: <code>{{d3Start}}</code></label>
        <input type="range" v-model="d3Start" min="-60" max="60" step="0.01" />
        <label>d3 Radius: <code>{{d3Radius}}</code></label>
        <input type="range" v-model="d3Radius" min="1" max="300" />
      </div>
      <div>
        <Spiral :spiral="d3Path" />
      </div>

   
    </div>

<hr>


<div style="display: flex">
      <div style="width: 24rem; padding: 2rem; border-right: var(--border-width) solid var(--color-gray-dark)">
      
        <h2>Spiral using S</h2>
        <small>This one creates svg path with S instead of C curves</small>
        <hr>
        <label>Revolutions: <code>{{numSpirals}}</code></label>
        <input type="range" v-model="numSpirals" min="0.1" step="0.1" max="40" />
        <label>distance between spirals: <code>{{padding}}</code></label>
        <input type="range" v-model="padding" min="0" max="60" step="0.1" />

      </div>
      <div>
        <Spiral :spiral="spiralPoints" />
      </div>

    </div> -->

  </div>
`
});