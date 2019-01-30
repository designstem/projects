
import * as utils from "https://designstem.github.io/fachwerk/utils.js";



export default {
  props: {
    pointCount: { default: 36, type: Number },
    padding: { default: 20, type: Number },
    cycles: { default: 3, type: Number },
    startX: { default: 20, type: Number },
    activePointProp: { default:20 , type: Number },
    r: { default:3 , type: Number },
    info: { default:false , type: Boolean },
  },
  data: () => ({
    activePoint: 20
  }),
  computed: {
    d3Line(){
      return d3.line().curve(d3.curveCardinal.tension(0));
    },
    computedPoints(){
        const temp = [[this.startX, 0]];
        let a = parseFloat(this.startX);    
        let b = this.padding / (2 * Math.PI); 
        let theta0 = 2 * Math.PI / this.pointCount;
        for(let j = 1; j <= this.pointCount * this.cycles; j++){
          let theta = j * theta0;
          let r = a + b * theta;
          let x = r * Math.cos(theta);
          let y = r * Math.sin(theta);
          let coords = [x, -y];
          if( !isNaN(x) && !isNaN(y) ){
            temp.push(coords);
          } 
        }
        //this.set('totalpoints', this.pointCount * this.cycles);
        return temp;
      },
      computedTriangle() {
        //let points = [ {x:0, y:0}, {x:this.computedPoints[this.activePoint][0], y:0}, {x:this.computedPoints[this.activePoint][0], y:this.computedPoints[this.activePoint][1]} ];
        let points =  `M0,0 L ${this.computedPoints[this.activePoint][0]} 0 L ${this.computedPoints[this.activePoint][0]} ${this.computedPoints[this.activePoint][1]} Z`
        return points;
      },
      transformText () {
        return 'translate( this.computedPoints[this.activePoint][0] , this.computedPoints[this.activePoint][1]-20 )';
     }
  },
  methods: {
    ...utils
  },
  template: `
    <g>
      <circle r="3" />
      <path
        :d="d3Line(computedPoints)"
        stroke="black"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle v-for="(p,i) in computedPoints"
        :cx="p[0]"
        :cy="p[1]"
        :r="r"
        stroke="rgba(0,0,0,0)"
        stroke-width="7"
        v-on:click="activePoint = i"
        class="hoverable"
      />
      <circle 
        :cx="computedPoints[activePoint][0]"
        :cy="computedPoints[activePoint][1]"
        r="9" 
        stroke="red"
        stroke-width="3"
        fill="none"
      /> 
      <path 
        :d="computedTriangle"  
        stroke="purple"
        stroke-width="1.5"
        fill="none"
      /> 
      <g :transform="'translate( -200 , -200 )'" v-if="info" >
        <rect fill="#fff" height="20" width="400" :stroke="hsl(0,0,0,0.5)" stroke-width="1"  />
        <text 
          dy="14" dx="10" 
          style="font-family: var(--font-mono); fill:var(--red); font-size:14px">
          x:{{ round(computedPoints[activePoint][0], 3) }} | 
          y:{{ round(computedPoints[activePoint][1], 3) }} |
          θ:{{round( Math.atan(computedPoints[activePoint][1]/computedPoints[activePoint][0])*(180 / Math.PI), 3) }}° |
          r:{{round( Math.sqrt(Math.pow(computedPoints[activePoint][0], 2) + Math.pow(computedPoints[activePoint][1], 2)), 3) }}
        </text>
        <!-- <text v-if="info"
          :dy="computedPoints[activePoint][1]-20" :dx="computedPoints[activePoint][0]" 
          text-anchor="middle" 
          style="font-family: var(--font-mono); fill:var(--red); font-size:14px">
          x:{{ round(computedPoints[activePoint][0], 3) }} | 
          y:{{ round(computedPoints[activePoint][1], 3) }} |
          θ:{{round( Math.atan(computedPoints[activePoint][1]/computedPoints[activePoint][0])*(180 / Math.PI), 3) }}° |
          r:{{round( Math.sqrt(Math.pow(computedPoints[activePoint][0], 2) + Math.pow(computedPoints[activePoint][1], 2)), 3) }}
        </text> -->
      </g>
    </g>
    `
};