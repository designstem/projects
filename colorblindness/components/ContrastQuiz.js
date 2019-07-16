import { Css, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";
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
    }
  },
  mixins: [Css],
  data() {
    return {
      showResults: false
    }
  },
  methods: {
      get, set
  },
  template: `
  <div style="padding: var(--base3); border-radius:var(--border-radius); box-shadow: 0 0 3px 1px hsla(0, 0%, 0%, 0.2)">

    <div v-for="(contrast,i) in input" :key="'cnt'+i" style="display:flex; align-items: center; margin-bottom: var(--base);">
        
        <f-toggle :set="'cnt'+i" style="cursor: pointer; flex: 1 0 50px; margin:0;" />
            <p style="line-height:1.1; flex: 1 0 70%; margin: 0;" 
                :style="showResults && get('cnt'+i) == contrast[1] && contrast[1] == 1 ? {'color':'var(--blue)', 'font-weight':'700'} : {}"
            >
                {{ contrast[0] }}
            </p>
        <div v-if="showResults" style="flex: 1 0 var(--base3); align-self:flex-end; text-align:right;">
            <h4 v-if="get('cnt'+i) == contrast[1]">👍</h4>
            <h4 v-else-if="get('cnt'+i) != contrast[1]">💥</h4> 
        </div>
        <div v-else style="flex: 1 0 var(--base3); align-self:flex-end; text-align:right;">
            <h4 v-if="get('cntCheck1', false) == false">💣</h4>
        </div>
    </div>

    <div style="margin:var(--base3) 0">
      <a @click="showResults = !showResults" style="cursor:pointer">{{showResults ? 'HIDE ANSWERS' : 'SHOW ANSWERS'}}</a>
    </div>
  </div>
  `
};
