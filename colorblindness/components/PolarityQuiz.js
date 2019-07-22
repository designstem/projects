import { Css, range } from "https://designstem.github.io/fachwerk/fachwerk.js";
//  import { Vue, components, Css } from "http://127.0.0.1:8887/fachwerk.js";

// for (const name in components) {
//   Vue.component(name, components[name])
// }

export default{
  props: {
    input: {
        type: Array,
        required: true,
        default: []
    },
    from: {
      type: [Number, String],
      required: false,
      default: 1
    },
    to: {
      type: [Number, String],
      required: false,
      default: 5
    },
    step: {
      type: [Number, String],
      required: false,
      default: 1
    },
    ticks: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  mixins: [Css],
  data() {
    return {
      showResults: false
    }
  },
  methods: {
    range,
    correctPos(n) { 
      let percent = (n/(this.to-1)*100)-(1/(this.to-1)*100);
      let offset = 26/100*percent;
      return `calc( ${percent}% - ${offset}px)`;
    }
  },
  template: `
  <div style="padding: var(--base3) var(--base); border-radius:var(--border-radius); box-shadow: 0 0 3px 1px hsla(0, 0%, 0%, 0.2)">

    <div v-for="(item,i) in input" :key="'item'+i" style="display:flex; align-items: center; justify-content:space-between; margin: 0;">
      <div style="flex:0 1 20%; text-align:right; line-height:1; padding-right:4px;">
        {{ item[0] }}
      </div>
      <div style="flex: 1 0 60%; position:relative;" >
        <div style="position:absolute; width:100%; height:100%; padding:0 12px; display: flex; justify-content:space-between; align-items: center;">
        <span v-if="showResults" style="height:30px; width:30px; background:var(--red); position:absolute; border-radius:50%;" 
          :style="{ 
            'left' : correctPos(item[2])
          }" />
        <span v-if="ticks" v-for="tick in range( 0, to-1 )" :key="'tick'+tick" style="border:1px solid var(--quaternary); height:var(--base2);" />
        </div>
        <f-slider :from="from" :to="to" :step="step" integer style="width:100%; margin:0; padding:0;" />
      </div>
      <div style="flex:0 1 20%; line-height:1; padding-left:4px;">
        {{ item[1] }}
      </div>
        </div>

    <div style="text-align: center; margin-top:var(--base)">
      <a @click="showResults = !showResults" style="cursor:pointer">{{showResults ? 'HIDE' : 'SHOW'}}</a>
    </div>
  </div>
  `
};
