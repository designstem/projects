import { 
  Vue,
  components,
  Css, 
  utils
} from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
    props:{
        points: {
            type: [Array, String, Object],
            required: false,
            default: [[0,0], [1,1], [1,-1]]
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
  methods: {
    ...utils,
    compPos(i){
        return `${this.points[i][0]} ${this.points[i][1]} `;
    },
    compTextPos(i){
        //return `${this.points[i][0]} ${this.points[i][1] - 1.3} `;
        let polarxy = this.polarxy( this.compPolarAngle(i)+1.5, this.distanceBetweenPoints( 1,2,3,4 ));
        return `${polarxy[0]} ${polarxy[1]}`;
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
        console.log(this.triangle.sides);
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
        console.log(this.triangle.angles);
    },
    findSideAngles(){
        this.triangle.sideangles.length = 0;
        let A1 = this.angleBetweenPoints( this.points[0][0], this.points[0][1], 0, 0 );
        let C1 = this.angleBetweenPoints( this.points[2][0], this.points[2][1], 0, 0 );
        let B1 = this.angleBetweenPoints( this.points[1][0], this.points[1][1], 0, 0 );
        this.triangle.sideangles.push(A1, B1, C1);
        console.log("sideangles:" + this.triangle.sideangles);
    },
    angleBetweenPoints(x1, y1, x2, y2){
        let w = x2-x1;
        let h = y2-y1;
        return Math.atan2(h,w) * (180/Math.PI);
    },
    distanceBetweenPoints(x1, y1, x2, y2){
        let w = x2-x1;
        let h = y2-y1;
        return Math.sqrt(w*w + h*h);
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
        <f-arc v-for="(p, i) in points"
            r="0.3"
            :key="'arc'+i"
            :start-angle="0"
            :end-angle="triangle.angles[i]"
            inner-radius="0"
            stroke="none"
            :fill="color(colors[i])"
            :position="compPos(i)"
            :rotation="triangle.sideangles[i]"
        />
        <f-line :points="compPath" closed />  
        <f-text :position="compTextPos(0)">A</f-text>
        <f-text :position="compTextPos(1)">B</f-text>
        <f-text :position="compTextPos(2)">C</f-text>
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
