import { Css, range, hsl, hue2ai, polarx, polary, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default{
  props: {
    name: {
      type: String,
      required: false,
      default: "Complementary"
    }
  },
  mixins: [Css],
  data() {
    return {
      palettes: {
        "Complementary" : [0,6],
        "SplitComplementary": [0,5,7],
        "DoubleComplementary": [0,2,6,8],
        "Triadic": [0,3,9],
        "Analoguous": [0,1,11],
        "Monochromatic": [0]
      },
      activeColor: 0,
      currentAngle: 0
    }
  },
  methods: {
    range, hsl, hue2ai, polarx, polary, get, set,
  },
  computed: {
    newAngle(){
      return this.activeColor*(360/12);
    },
    compDur(){
      let angleDiff = this.newAngle - this.currentAngle;
      let percent = angleDiff/180*100;
      let dur = 10*percent;
      return dur;
    }
  },
  template: `
  <div style="padding: var(--base3); border-radius:var(--border-radius); box-shadow: 0 0 3px 1px hsla(0, 0%, 0%, 0.2)">
    <f-animation :from="currentAngle" :to="newAngle" :duration="compDur" :loop="false" easing="easeOutBack" v-slot="{ value: animDeg }" :key="'anim'+activeColor">
      <f-scene responsive width="400" height="400">
        <f-group :rotation="45" :scale="1">
          <f-arc
          v-for="(c,i) in range(0, 359, 360/12)" 
          :key="'h1w'+i"
          :fill="hsl( hue2ai(c) )"
          stroke
          :start-angle="i*(360/12)"
          :end-angle="(i+1)*(360/12)"
          :r="2"
          :inner-radius="0.75"
          v-on:click.native="() => {currentAngle = newAngle; activeColor = i}"
          />
          <f-circle v-for="(p,i) in palettes[name]"
            :key="'h1c'+i"
            :x="polarx(animDeg + (p*(360/12)+(360/24)), 1.5)"
            :y="polary(animDeg + (p*(360/12)+(360/24)), 1.5)"
            :r="i==0 ? 0.15 : 0.1"
            :fill="i==0 ? 'white' : 'black'"  
          />
        </f-group>
        <!-- <f-text>{{activeColor}} - {{ newAngle }}</f-text> -->
      </f-scene>
    </f-animation>
    <div style="display:flex; height:5vmax;">
      <div v-for="(c,i) in palettes[name]" :key="'c'+i" style="flex:1 0 auto;" 
        :style="{'background': hsl( hue2ai( activeColor * (360/12) + activeColor + ( c*(360/12) % 360 ) ) ) }">

      </div>
    </div>
  </div>
  `
};