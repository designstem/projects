import { 
  Vue,
  components,
  Css, 
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";


// import { 
//     Vue,
//     components,
//     Css, 
//     utils
//   } from "http://127.0.0.1:5501/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
    props:{
        points: {
            type: [String, Number, Array, Object],
            required: false,
            default: () => [[-1,1], [-0.5,-1], [1.5,0.5]]
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
        angleInfo: {
          type: Boolean,
          required: false,
          default: false
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
    points: function(newVal, oldVal) { 
      this.solveTriangle();
    }
  },
  methods: {
    ...utils,
    compPos(i, type = 'arc'){
        if(type == 'box'){
            return `${this.triangle.points[i][0]+0.15} ${this.triangle.points[i][1]+0.15} `;
        } else {
            return `${this.triangle.points[i][0]} ${this.triangle.points[i][1]} `;
        }
        
    },
    textPos(i){
        let polarPos = this.polarxy(
            this.angleBetweenPoints(    this.triangle.points[i][0],  this.triangle.points[i][1]-1.5,  0,0 ), 
            this.distanceBetweenPoints( this.triangle.points[i][0],  this.triangle.points[i][1]-1.5,  0,0 )+0.2
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
        // console.log("points:" + this.triangle.points);
        // console.log("sides: "+this.triangle.sides);
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
    compPolarAngle(i){
        // let w = this.half.x * this.startPoints[this.dotIndex][0];
        // let h = this.half.y * this.startPoints[this.dotIndex][1];
        return Math.atan2(this.triangle.points[i][1],this.triangle.points[i][0]) * (180/Math.PI);
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
            
            <f-box v-if="triangle.angles[i] == 90" r="0.3" stroke="none" :fill="color(colors[i])" :position="compPos(i, 'box')" />
        </template>
        <f-line :points="points" closed />
        <f-group v-if="angleLabels" rotation="-90">
            <f-text v-for="(t,i) in ['A', 'B', 'C']" :key="'label'+i" :position="textPos(i)" rotation="90">{{t}}</f-text>
        </f-group>
        <f-group v-if="angleInfo" position="-1.9 1.7" scale="0.5">
          <text transform="scale(1,-1)" :key="'angle'+i" v-for="(t,i) in ['A', 'B', 'C']" x="0" :y="i * 0.35">{{t}}:{{ triangle.angles[i].toFixed(2) }}°</text>
        </f-group>

    </f-scene>

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
