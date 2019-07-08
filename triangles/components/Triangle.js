import { 
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";


// import { 
//     Vue,
//     components,
//     Css, 
//     utils
//   } from "http://127.0.0.1:5501/fachwerk.js";

// for (const name in components) {
//   Vue.component(name, components[name])
// }

export default{
    props:{
        points: {
            type: [String, Number, Array, Object],
            required: false,
            // default: () => [{'x':-1,'y':1}, {'x':-0.5,'y':-1}, {'x':1.5,'y':0.5}]
            default: () => [[-1.5,-1], [1.5,-1], [0,1.48]]
        },
        fill: { default: 'none', type: String },
        strokeWidth: {default: 4, type: Number},
        opacity: {
          default: 1, type: Number
        },
        angleLabels: {
            type: [Array, Boolean],
            required: false,
            default: () => ["A", "B", "C"]
        },
        angleMarkers: {
            type: Number,
            required: false,
            default: 0
        },
        angleInfo: {
          type: Boolean,
          required: false,
          default: false
        }
    },
  data() {
    return {
      angleColors:    ['yellow', 'green', 'blue', 'orange'],
      triangle : {
          points:     [],
          sides:      [],
          angles:     [],
          sideangles: []
      },
      myId: ''
    }
  },
  beforeMount() {
    this.myId = this.randomid();
    this.triangle.points = this.parseCoords(this.points);
    this.solveTriangle();
  },
  watch: { 
    points: function(_newVal, _oldVal) { 
      this.solveTriangle();
    }
  },
  methods: {
    ...utils,
    compPos(i){
      return `${this.triangle.points[i][0]} ${this.triangle.points[i][1]}`;
    },
    textPos(i){
      let polarPos = this.polarxy(
        this.angleBetweenPoints( this.triangle.points[i][0],  this.triangle.points[i][1],  0,0 ), 
        this.distanceBetweenPoints( this.triangle.points[i][0],  this.triangle.points[i][1],  0,0 )+0.3
      );
      return `${polarPos[0]} ${(polarPos[1])}`;
    },
    solveTriangle(){
        this.triangle.points = this.parseCoords(this.points);

        this.findSides();
        this.findAngles();
        this.findSideAngles();
    },
    findSides(){
      this.triangle.sides.length = 0;
      
      let a = this.distanceBetweenPoints( this.triangle.points[0][0], this.triangle.points[0][1], this.triangle.points[1][0], this.triangle.points[1][1] );
      let b = this.distanceBetweenPoints( this.triangle.points[1][0], this.triangle.points[1][1], this.triangle.points[2][0], this.triangle.points[2][1] );
      let c = this.distanceBetweenPoints( this.triangle.points[2][0], this.triangle.points[2][1], this.triangle.points[0][0], this.triangle.points[0][1] );
      this.triangle.sides.push(a, b, c);
    },
    findAngles(){
        this.triangle.angles.length = 0;
        let a = this.triangle.sides[0];
        let b = this.triangle.sides[1];
        let c = this.triangle.sides[2];
        let C = Math.acos( (b*b+c*c-a*a) / (2*b*c)) * (180/Math.PI);
        let A = Math.acos( (a*a+c*c-b*b) / (2*a*c)) * (180/Math.PI);
        let B = 180 - (A+C);
        this.triangle.angles.push(A, B, C);
        // console.log("angles: "+this.triangle.angles);
    },
    findSideAngles(){
      this.triangle.sideangles.length = 0;
      let A1 = this.angleBetweenPoints( this.triangle.points[0][0], this.triangle.points[0][1], this.triangle.points[1][0], this.triangle.points[1][1] );
      let B1 = this.angleBetweenPoints( this.triangle.points[1][0], this.triangle.points[1][1], this.triangle.points[2][0], this.triangle.points[2][1] );
      let C1 = this.angleBetweenPoints( this.triangle.points[2][0], this.triangle.points[2][1], this.triangle.points[0][0], this.triangle.points[0][1] );
      this.triangle.sideangles.push(A1, B1, C1);
      //console.warn("sideangles: " + this.triangle.sideangles);
    },
  },
  template: `
    <g style="pointer-events: none;" v-if="triangle.points.length" :opacity="opacity">
      <defs>
        <mask :id="'TrMask' + myId">
          <f-line :points="points" fill="white" stroke-width="0" closed  />
        </mask>
      </defs>
      <g v-if="angleMarkers" v-for="(p, i) in angleMarkers" :mask="'url(#TrMask' + myId + ')'">
          <f-circle 
              r="0.25"
              :key="'arc'+i"
              stroke="none"
              :fill="color(angleColors[i])"
              :position="compPos(i)"
              opacity="0.7"
              v-if="Math.round(triangle.angles[i]) != 90"
          />
          <f-group v-if="Math.round(triangle.angles[i]) == 90" :position="compPos(i)" :rotation="triangle.sideangles[i]">
            <f-box r="0.5" stroke="none" :fill="color(angleColors[i])" opacity="0.7" />
          </f-group>
      </g>
      
      <f-line :points="points" :fill="fill" :stroke-width="strokeWidth" closed />
      
      <f-circle v-for="(circ, i) in triangle.points" r="0.07" stroke :fill="color('darkgray')" :x=circ[0] :y=circ[1] :key="'circ'+i" />

      <f-group v-if="angleLabels" position="0 -0.05" rotation="-90">
          <f-text v-for="(t,i) in angleLabels" :key="'label'+i" :position="textPos(i)" rotation="90" style="user-select:none;" :fill="color('blue')">{{t}}</f-text>
      </f-group>
      
      <f-group v-if="angleInfo" position="-1.85 1.75" scale="0.5">
        <text transform="scale(1,-1)" :key="'angle'+i" v-for="(t,i) in angleLabels" x="0" :y="i * 0.35" style="user-select: none;pointer-events: none;">{{t}}:{{ Math.round(triangle.angles[i]) }}°</text>
      </f-group>
    </g>
  `
};
