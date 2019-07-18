import { range, hsl, hue2ai, polarx, polary, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";

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
  // mixins: [Css],
  data() {
    return {
      palettes: {
        "Complementary" : [0,6],
        "SplitComplementary": [0,5,7],
        "DoubleComplementary": [0,2,6,8],
        "Triadic": [0,4,8],
        "Analoguous": [0,1,11],
        "Monochromatic": [0]
      },
      workingPalette: [],
      activeColor: 0,
      currentAngle: 0,
      sectorSize: 0
    }
  },
  beforeMount(){
    this.sectorSize = 360/this.sectors;
    this.workingPalette = this.palettes[this.name].map(n => n * (this.sectors/12));
  },
  methods: {
    range, hsl, hue2ai, polarx, polary, get, set,
  },
  computed: {
    newAngle(){
      return this.activeColor*(360/this.sectors);
    },
    compTo(){
      //return this.currentAngle + ( (this.newAngle - this.currentAngle));
      return this.currentAngle + (((this.newAngle-this.currentAngle+540) % 360) - 180);
    },
    compDur(){
      let angleDiff = Math.abs(this.currentAngle - this.compTo);
      let percent = angleDiff/180*100;
      let dur = 200 + 6*percent;
      return dur;
    }
  },
  template: `
  <div style="padding: var(--base5); border-radius:var(--border-radius); box-shadow: 0 0 3px 0 hsla(0, 0%, 0%, 0.2);">
    <f-animation :from="currentAngle" :to="compTo" :duration="compDur" :loop="false" easing="easeInOutCubic" :elasticity="0.2" v-slot="{ value: animDeg }" :key="'anim'+activeColor">
      <div>
        <f-scene responsive width="400" height="400">
          <f-text scale="0.8">{{name}}</f-text>
          <f-group :rotation="45" :scale="1">
            <f-arc
            v-for="(c,i) in range(0, 359, sectorSize)" 
            :key="'h1w'+i"
            :fill="hsl( hue2ai(c) )"
            stroke
            :start-angle="i*(sectorSize)"
            :end-angle="(i+1)*(sectorSize)"
            :r="2"
            :inner-radius="1.5"
            v-on:click.native="() => {currentAngle = newAngle; activeColor = i}"
            style="cursor:pointer;"
            />
            <f-circle v-for="(p,i) in workingPalette"
              :key="'h1c'+i"
              :x="polarx(animDeg + (p*(sectorSize)+(sectorSize/2)), 1.49)"
              :y="polary(animDeg + (p*(sectorSize)+(sectorSize/2)), 1.49)"
              :r="i==0 ? 0.12 : 0.07"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
          </f-group>
        </f-scene>
        <!-- {{currentAngle}} | {{ newAngle }} | {{animDeg}} -->
        <div v-if="name != 'Monochromatic'" style="display:flex; height:calc(var(--base10)*2); margin-top:var(--base3)">
          <div  v-for="(c,i) in workingPalette" :key="'c'+i" style="flex:1 0 auto;" 
            :style="{ 
              'background': hsl( hue2ai( (animDeg + c * sectorSize) % 360 )), 
              'order' : (i+1)%workingPalette.length 
            }">
          </div>
        </div>
        <!-- Monochromatic palette -->
        <div v-else>
          <span style="color: var(--tertiary)">BRIGHTNESS</span>
          <div style="display:flex; height:var(--base10);">
            <div v-for="(b,i) in 10" :key="'cb'+i" style="flex:1 0 auto;" 
              :style="{ 'background': hsl( hue2ai( animDeg ), 100, b*10)  }">
            </div>
          </div>
          <span style="color: var(--tertiary)">SATURATION</span>
          <div style="display:flex; height:var(--base10);">
            <div v-for="(s,i) in 10" :key="'cs'+i" style="flex:1 0 auto;" 
              :style="{ 'background': hsl( hue2ai( animDeg ), s*10, 50)  }">
            </div>
          </div>
        </div>
      </div>
    </f-animation>
  </div>
  `
};