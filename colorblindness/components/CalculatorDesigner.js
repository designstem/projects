import { Css, range, color, hsl, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";
//  import { Vue, components, Css } from "http://127.0.0.1:8887/fachwerk.js";

// for (const name in components) {
//   Vue.component(name, components[name])
// }

export default{
  props: {
    
  },
  mixins: [Css],
  data() {
    return {
      W: 300,
      H: 500,
      keys : [
        {label:"+TAX", type:"", editable:false, color:[50,3,85]},
        {label:"-TAX", type:"", editable:false, color:[50,3,85]},
        {label:"GT",   type:"", editable:false, color:[50,3,85]},
        {label:"→",    type:"", editable:false, color:[50,3,85]},
        {label:"CA",   type:"", editable:false, color:[50,3,85]},
        {label:"CM",   type:"", editable:false, color:[50,3,85]},
        {label:"RM",   type:"", editable:false, color:[50,3,85]},
        {label:"M-",   type:"", editable:false, color:[50,3,85]},
        {label:"M+",   type:"", editable:false, color:[50,3,85]},
        {label:"C•CE", type:"", editable:false, color:[50,3,85]},
        {label:"7",    type:"", editable:false, color:[50,3,85]},
        {label:"8",    type:"", editable:false, color:[50,3,85]},
        {label:"9",    type:"", editable:false, color:[50,3,85]},
        {label:"%",    type:"", editable:false, color:[50,3,85]},
        {label:"+/–",  type:"", editable:false, color:[50,3,85]},
        {label:"4",    type:"", editable:false, color:[50,3,85]},
        {label:"5",    type:"", editable:false, color:[50,3,85]},
        {label:"6",    type:"", editable:false, color:[50,3,85]},
        {label:"×",    type:"", editable:false, color:[50,3,85]},
        {label:"÷",    type:"", editable:false, color:[50,3,85]},
        {label:"1",    type:"", editable:false, color:[50,3,85]},
        {label:"2",    type:"", editable:false, color:[50,3,85]},
        {label:"3",    type:"", editable:false, color:[50,3,85]},
        {label:"",     type:"", editable:false, color:[50,3,85]},
        {label:"—",    type:"", editable:false, color:[50,3,85]},
        {label:"0",    type:"", editable:false, color:[50,3,85]},
        {label:"00",   type:"", editable:false, color:[50,3,85]},
        {label:"•",    type:"", editable:false, color:[50,3,85]},
        {label:"+",    type:"", editable:false, color:[50,3,85]},
        {label:"=",    type:"", editable:false, color:[50,3,85]},
      ],
      palette: [
        {color:[60,   85, 50]},
        {color:[120,  60, 60]},
        {color:[180,  80, 40]},
        {color:[240,  60, 60]},
        {color:[300,  60, 60]},
        {color:[360,  60, 60]},
      ],
      paletteEdit: 0,
      activeColor: 0
    }
  },
  methods: {
    range, color, hsl, get, set,
    buttX(i){
      return i % 5 * (this.W * 0.169);
    },
    buttY(i){
      return Math.floor(i/5)*(this.W * 0.155);
    },
    getFill(b){
      return this.hsl(b.color[0],b.color[1],b.color[2]);
    },
    changeColors(){
      let _this = this;
      this.keys.filter(function(key) {
        if(key.editable == true){
          key.color = _this.activeColor;
          console.log(_this.activeColor);
        };
        
      });  
    }
  },
  computed: {
    
  },
  template: `
  <div style="display:grid; grid-template-columns: 1fr 1fr; grid-gap:var(--content-gap);">
    <div>
      <f-artboard width="300" height="500" responsive id="calculator-design" download>
        <f-group>
          <rect width="100%" height="100%" rx="10" :fill="hsl(33,9,55)" />
          
          <rect x="50%" y="4%" width="27%" height="4.5%" rx="2" :fill="hsl(22, 39, 14)" :stroke="color('white')" />
          <rect 
            x="10%" y="11%" width="80%" height="11%" rx="5" 
            :fill="hsl(77,11,25)" :stroke="color('white')" 
          />
  
          <g v-for="(b,i) in keys" transform="translate(30,200)"
            v-on:click="b.editable = !b.editable">
            <rect 
              :width="W*0.13" 
              :height="W*0.13" 
              :x="buttX(i)"
              :y="buttY(i)" 
              :fill="getFill(b)" 
              :stroke="b.editable ? hsl(33,9,10) : hsl(33,9,40)"
              :stroke-width="b.editable ? 3 : 2" 
              rx="3"
              style="cursor:pointer;" 
            />
            <text :x="buttX(i)+18" :y="buttY(i)+20" dominant-baseline="middle" text-anchor="middle" letter-spacing="-1">{{b.label}}</text>
          </g>
        </f-group>
        </f-artboard>
    </div>
    <div>

      <h5>Color palette</h5>
      <div style="display:flex; height:12vh; min-height:50px; max-height:200px;">
        <div v-for="(p, i) in palette" style="flex:1; display:flex; flex-direction:column; align-items:center; " :style="{border: '3px solid transparent'}" >
          <div 
            :style="{background: getFill(p)}" style="width:100%; align-self:stretch; height: 100%; border-radius:6px; cursor:pointer;"
            v-on:click="activeColor = p.color; changeColors()">
          </div>
          <a href="#" style="flex:0;margin-top:var(--base);" v-on:click.prevent="paletteEdit = i" class="quaternary">Edit</a>
        </div>
      </div>
      <!-- {{palette[activeColor].color}} -->

    </div>

  </div>
  `,
  css: `
  .f-svg text {
    font-size: calc(var(--text-size) * 1.2) !important;
    font-weight: bold;
    font-family: var(--font-mono) monospace;
    mix-blend-mode: multiply;
  }
  `
};
