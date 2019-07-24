import { get, set, rgb, hsl} from "https://designstem.github.io/fachwerk/fachwerk.js";

import { hsb2hsl } from "../utils.js";

export default{
  props: {
    outputID: {
      type: String,
      required: false,
      default: "cMixer"
    },
    inputID: {
      type: String,
      required: false,
      default: "cMixer"
    },
    colorModel: {
      type: String,
      required: false,
      default: "HSL"
    },
    title: {
      type: String,
      required: false,
      default: ''
    },
    values: {
      type: Array,
      required: false,
      default: () => [0, 0, 0]
    }
  },
  data() {
    return {
      colorModels: { 
        "RGB" : [ 
            {letter: "R", to:255}, { letter: "G", to:255 }, { letter: "B", to:255 } 
          ],
        "HSL" : [ 
            {letter: "H", to:360}, { letter: "S", to:100 }, { letter: "L", to:100 } 
          ],
        "HSB" : [ 
            {letter: "H", to:360}, { letter: "S", to:100 }, { letter: "B", to:100 } 
          ],
        },
      v0: 0,
      v1: 0,
      v2: 0,
      mixerValues: [0, 0, 0]
    }
  },
  mounted(){
    this.values.forEach((v,i) => {
      this.set(this.outputID+(i+1), v);
    });
  },
  methods: {
    get, set, rgb, hsl, hsb2hsl
  },
  computed: {
    compColor(){
      if(this.colorModel == "RGB"){
        return {'background' : this.rgb(this.get(this.outputID+1), this.get(this.outputID+2), this.get(this.outputID+3))}
      } else if(this.colorModel == "HSB"){
        return {'background' : this.hsb2hsl(this.get(this.outputID+1), this.get(this.outputID+2), this.get(this.outputID+3))}
      } else {
        return {'background' : this.hsl(this.get(this.outputID+1), this.get(this.outputID+2), this.get(this.outputID+3))}
      }
    }
  },
  watch: {
    mixerValues(){
      this.set(this.outputID, this.mixerValues);
      //console.log(get('cMixer'));
    }
  },
  template: `
  <div style="flex:0 1 32%; box-shadow:0 0 3px 0 hsla(0,0%,0%,0.3); padding:1.5vmax; border-radius:var(--base);">
    <!-- <small style="flex:1"><small>{{colorModel}}({{get('r51',236)}},{{get('g51',95)}},{{get('b51',0)}})</small></small> -->
    <p v-if="title.length > 0" style="margin-bottom:var(--base)">{{title}}</p>
    <f-inline style="margin:0; align:stretch; justify-content: space-between; align: stretch;">
      <div 
        style="flex:1 0 25%; height:12vmin; align-self: flex-start; border:1px solid var(--gray);" 
        :style="compColor"
      ></div>
      <div style="flex:1 0 65%">
        <f-slider 
          v-for="(c,i) in colorModels[colorModel]" 
          :key="'c'+i" 
          :title="c.letter" 
          :to="c.to" 
          v-on:input="set(outputID+(i+1), $event)"
          :value="get(outputID+(i+1))"
          integer style="--base:8px;" />
        <!-- <f-slider title="R" :value="get('r51', 236)" v-on:input="set('r51', $event)" to="255" integer />
        <f-slider title="G" :value="get('g51', 95)" v-on:input="set('g51', $event)" to="255" integer />
        <f-slider title="B" :value="get('b51', 0)" v-on:input="set('b51', $event)" to="255" integer /> -->
      </div>
    </f-inline>
  </div>
  `
};


