import { utils, d3 } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  props: {
    pointCount: { default: 36, type: [Number, String] },
    padding: { default: 20, type: [Number, String] },
    cycles: { default: 3, type: [Number, String] },
    startX: { default: 20, type: [Number, String] },
    activePoint: { default:0 , type: [Number, String] },
    r: { default:3 , type: [Number, String] },
    info: { default:false , type: Boolean },
    triangle: { default:true , type: Boolean },
  },
  data: () => ({
    activePointIndex: 0
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
        let points =  `M0,0 L ${this.computedPoints[this.activePointIndex][0]} 0 L ${this.computedPoints[this.activePointIndex][0]} ${this.computedPoints[this.activePointIndex][1]} Z`
        return points;
      },
      activePointX(){
        return this.computedPoints[this.activePointIndex][0];
      },
      activePointY(){
        return this.computedPoints[this.activePointIndex][1];
      },
      transformText () {
        return 'translate( this.computedPoints[this.activePointIndex][0] , this.computedPoints[this.activePointIndex][1]-20 )';
     }
  },
  methods: {
    ...utils,
    updateActivePoint(value){
      this.activePointIndex = value;
    }
  },
  mounted(){
    this.updateActivePoint(this.activePoint);
  },
  watch: {
    activePoint: function(_newVal, _oldVal) { 
      this.updateActivePoint(_newVal);
    }
  },
  template: `
    <g>
    <path v-if="triangle"
        :d="computedTriangle"  
        :stroke="color('purple')"
        stroke-width="2"
        :fill="color('lighteryellow')"
      /> 
      <circle r="3" />
      <path
        :d="d3Line(computedPoints)"
        :stroke="color('gray')"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
        fill="none"
      />
      <circle v-for="(p,i) in computedPoints"
        :cx="p[0]"
        :cy="p[1]"
        :r="r"
        :stroke="color('gray')"
        :fill="color('darkgray')"
        stroke-width="0"
        v-on:click="updateActivePoint(i)"
        class="hoverable"
      />
      <circle 
        :cx="activePointX"
        :cy="activePointY"
        r="9" 
        stroke="red"
        stroke-width="3"
        fill="none"
      /> 
      <g :transform="'translate( -200 , -200 )'" v-if="info" >
        <rect fill="#fff" height="20" width="400" :stroke="hsl(0,0,0,0.5)" stroke-width="1"  />
        <text 
          dy="14" dx="10" 
          style="font-family: var(--font-mono); fill:var(--red); font-size:14px">
          x:{{ round(computedPoints[activePointIndex][0], 3) }} | 
          y:{{ round(computedPoints[activePointIndex][1], 3) }} |
          θ:{{round( Math.atan(computedPoints[activePointIndex][1]/computedPoints[activePointIndex][0])*(180 / Math.PI), 3) }}° |
          r:{{round( Math.sqrt(Math.pow(computedPoints[activePointIndex][0], 2) + Math.pow(computedPoints[activePointIndex][1], 2)), 3) }}
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