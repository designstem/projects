import { Css, range, hsl, hue2ai, polarx, polary, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default{
  props: {
    name: {
      type: String,
      required: false,
      default: "Complementary"
    },
    sectors: {
      type: [Number, String],
      required: false,
      default: 12
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
      currentAngle: 0,
      sectorSize: 0
    }
  },
  beforeMount(){
    this.sectorSize = 360/this.sectors;
  },
  methods: {
    range, hsl, hue2ai, polarx, polary, get, set,
  },
  computed: {
    newAngle(){
      return this.activeColor*(360/this.sectors);
    },
    compTo(){
      return this.currentAngle + ( (this.newAngle - this.currentAngle));
    },
    compDur(){
      let angleDiff = Math.abs(this.newAngle - this.currentAngle);
      let percent = angleDiff/180*100;
      let dur = 200 + 6*percent;
      return dur;
    }
  },
  template: `
  <div style="padding: var(--base3); border-radius:var(--border-radius); box-shadow: 0 0 3px 0 hsla(0, 0%, 0%, 0.2);">
    <f-animation :from="currentAngle" :to="compTo" :duration="compDur" :loop="false" easing="easeInOutCubic" :elasticity="0.2" v-slot="{ value: animDeg }" :key="'anim'+activeColor">
      <div>
        <f-scene responsive width="400" height="400">
          <f-group :rotation="45" :scale="1">
            <f-arc
            v-for="(c,i) in range(0, 359, sectorSize)" 
            :key="'h1w'+i"
            :fill="hsl( hue2ai(c) )"
            stroke
            :start-angle="i*(sectorSize)"
            :end-angle="(i+1)*(sectorSize)"
            :r="2"
            :inner-radius="0.75"
            v-on:click.native="() => {currentAngle = newAngle; activeColor = i}"
            style="cursor:pointer;"
            />
            <f-circle v-for="(p,i) in palettes[name]"
              :key="'h1c'+i"
              :x="polarx(animDeg + (p*(sectorSize)+(sectorSize/2)), 1.5)"
              :y="polary(animDeg + (p*(sectorSize)+(sectorSize/2)), 1.5)"
              :r="i==0 ? 0.2 : 0.07"
              fill="none"
              stroke="black"
              strokeWidth="2"
            />
          </f-group>
        </f-scene>
        {{currentAngle}} | {{ newAngle }} | {{animDeg}}
        <div style="display:flex; height:calc(var(--base10)*2); margin-top:var(--base3)">
          <div v-for="(c,i) in palettes[name]" :key="'c'+i" style="flex:1 0 auto;" 
            :style="{'background': hsl( hue2ai( (animDeg + c * sectorSize) % 360 ) )  }">
          </div>
        </div>
      </div>
    </f-animation>
    <!-- <div style="display:flex; height:calc(var(--base10)*2); margin-top:var(--base3)">
      <div v-for="(c,i) in palettes[name]" :key="'c'+i" style="flex:1 0 auto;" 
        :style="{'background': hsl( hue2ai(  (activeColor * sectorSize + ( activeColor + (c*sectorSize))) % 360 )) }">

      </div>
    </div> -->
  </div>
  `
};