// import { 
//   Vue,
//   components,
//   Css, 
//   utils
// } from "https://designstem.github.io/fachwerk/fachwerk.js";

import { 
    Vue,
    components,
    Css, 
    utils
  } from "http://127.0.0.1:5501/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
    props:{
        points: {
            type: [Array, String, Object],
            required: false,
            default: [[-1,1], [-0.5,-1], [1.5,0.5]]
        },
        angleLabels: {
            type: Boolean,
            required: false,
            default: true
        },
        angleMarkers: {
            type: Number,
            required: false,
            default: 3
        },

    },
  mixins: [Css],
  data() {
    return {
      colors: ['yellow', 'green', 'blue', 'orange'],
      triangle : {
          points: [],
          sides: [],
          angles: [],
          sideangles: []
      }
    }
  },
  mounted() {
    this.solveTriangle();
  },
  watch: { 
    points: function(newVal, oldVal) { // watch it
            //console.log('Prop changed: ', newVal, ' | was: ', oldVal);
            this.solveTriangle();
        }
    },
  methods: {
    ...utils,
    compPos(i, type){
        if(type == 'box'){
            return `${this.points[i][0]+0.15} ${this.points[i][1]+0.15} `;
        } else {
            return `${this.points[i][0]} ${this.points[i][1]} `;
        }
        
    },
    textPos(i){
        let polarPos = this.polarxy(
            this.angleBetweenPoints(    this.points[i][0],  this.points[i][1],  0,0 ), 
            this.distanceBetweenPoints( this.points[i][0],  this.points[i][1],  0,0 )+0.2
        );
        console.log(polarPos);
        return `${polarPos[0]} ${(polarPos[1])}`;
    },
    solveTriangle(){
        this.triangle.points = this.points;
        this.findSides();
        this.findAngles();
        this.findSideAngles();
    },
    findSides(){
        this.triangle.sides.length = 0;
        let a = this.distanceBetweenPoints( this.points[0][0], this.points[0][1], this.points[1][0], this.points[1][1] );
        let b = this.distanceBetweenPoints( this.points[1][0], this.points[1][1], this.points[2][0], this.points[2][1] );
        let c = this.distanceBetweenPoints( this.points[2][0], this.points[2][1], this.points[0][0], this.points[0][1] );
        this.triangle.sides.push(a, b, c);
        //console.log("sides: "+this.triangle.sides);
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
        //console.log("angles: "+this.triangle.angles);
    },
    findSideAngles(){
        this.triangle.sideangles.length = 0;
        let A1 = this.angleBetweenPoints( this.points[0][0], this.points[0][1], this.points[1][0], this.points[1][1] );
        let B1 = this.angleBetweenPoints( this.points[1][0], this.points[1][1], this.points[2][0], this.points[2][1] );
        let C1 = this.angleBetweenPoints( this.points[2][0], this.points[2][1], this.points[0][0], this.points[0][1] );
        this.triangle.sideangles.push(A1, B1, C1);
        //console.warn("sideangles: " + this.triangle.sideangles);
    },
    compPolarAngle(i){
        // let w = this.half.x * this.startPoints[this.dotIndex][0];
        // let h = this.half.y * this.startPoints[this.dotIndex][1];
        return Math.atan2(this.points[i][1],this.points[i][0]) * (180/Math.PI);
    },
    
  },
  computed: {
      compPath(){
        return ` ${this.points[0][0]} ${this.points[0][1]}, ${this.points[1][0]} ${this.points[1][1]}, ${this.points[2][0]} ${this.points[2][1]}`
      },
      
  },
  template: `
  <div>

    <f-scene grid>
        <template v-if="angleMarkers>0&&angleMarkers<=3" v-for="(p, i) in angleMarkers">
            <f-arc 
                r="0.3"
                :key="'arc'+i"
                :start-angle="0"
                :end-angle="triangle.angles[i]"
                inner-radius="0"
                stroke="none"
                :fill="color(colors[i])"
                :position="compPos(i)"
                :rotation="90+triangle.sideangles[i]"
            />
            <!-- <f-arc v-if="angleMarkers>0&&angleMarkers<=3" v-for="(p, i) in angleMarkers"
                r="0.3"
                :key="'arc'+i"
                :start-angle="triangle.sideangles[i]"
                :end-angle="triangle.sideangles[i] + triangle.angles[i]"
                inner-radius="0"
                stroke="none"
                :fill="color(colors[i])"
                :position="compPos(i)"
                :rotation="90"
            /> -->
            <f-box v-if="triangle.angles[i] == 90" r="0.3" stroke="none" :fill="color(colors[i])" :position="compPos(i, 'box')" />
        </template>
        <f-line :points="compPath" closed /> 
        <f-group v-if="angleLabels" rotation="-90">
            <f-text :position="textPos(0)" rotation="90">A</f-text>
            <f-text :position="textPos(1)" rotation="90">B</f-text>
            <f-text :position="textPos(2)" rotation="90">C</f-text>
        </f-group>
    </f-scene>
    
    <!-- <h1>{{ angleBetweenPoints(0,0,0,1) + 180 }}</h1>

    <p>A: {{textPos(0)}}</p>
    <p>B: {{textPos(1)}}</p>
    <p>C: {{textPos(2)}}</p> -->

  </div>
  `,
  css: `
    .mapper{
      display:block;
      width: 100vw;
      height: 100vh;
    }
    
  `
};
