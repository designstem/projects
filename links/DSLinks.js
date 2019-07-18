import { Css, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";
//  import { Vue, components, Css } from "http://127.0.0.1:8887/fachwerk.js";

// for (const name in components) {
//   Vue.component(name, components[name])
// }

export default{
  props: {
    input: {
        type: String,
        required: false,
        default: ''
    }
  },
  mixins: [Css],
  data() {
    return {
      showResults: false,
      query: ''
    }
  },
  methods: {
      get, set
  },
  template: `
  <div>
    

    
    <f-sheet
      id="1ZrQ_OwfitB7dvZh4LzUmanbEX6oR3kWI2YVBTkFLZfc"
      v-slot="{ value }">
      <div style="display: grid; grid-template-columns:1fr 2fr">

        <div style="padding-top:15vh;">
          <span style="font-size:0.75em; font-weight:700; color:var(--darkgray)">SEARCH FOR:</span>
          <input type="text" v-model="query" style="width:100%;" />
  
          <!-- {{ Object.values(value[0]).includes( query ) }} -->
        </div>

        <div>
          <a v-for="(item, i) in value" :key="'item'+i"
            v-if="Object.values(item).toString().includes( query )"
            style="display:flex; padding: var(--base3); border-radius:var(--border-radius); box-shadow: 0 0 3px 1px hsla(0, 0%, 0%, 0.2); margin:3vmin; font-weight:normal; border:none;"
            :href="item.inputurl" target="_blank"
          >
            <h3 style="flex:0 0 70px;"><span class="bullet" >{{i+1}}</span></h3>
            <div>
              <h5>{{item.title}}</h5>
              <p style="font-family:var(--font-serif); font-style:italic;">{{item.metadescription}}</p>
              <p style="color:var(--blue); font-size:0.75em; border-bottom: none; text-decoration:underline; word-break: break-word;">{{item.inputurl}}</p>
            </div>
          </a>
        </div>

      </div>
    </f-sheet>
  </div>

  `
};
