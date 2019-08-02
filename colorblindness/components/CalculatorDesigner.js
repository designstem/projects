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
      H: 440,
      keys : [
        {label:"+TAX", type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"-TAX", type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"GT",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"→",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"CA",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"CM",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"RM",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"M-",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"M+",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"C•CE", type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"7",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"8",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"9",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"%",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"+/–",  type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"4",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"5",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"6",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"×",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"÷",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"1",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"2",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"3",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"",     type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"—",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"0",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"00",   type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"•",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"+",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
        {label:"=",    type:"", active:false, palette: 0, color:[50,3,85], labelCol:'light'},
      ],
      palette: [
        {color:[50,   3,    85], active:false},
        {color:[0,    100,  50], active:false},
        {color:[120,  100,  50], active:false},
        {color:[240,  100,  50], active:false},
        {color:[50,   3,    85], active:false},
        {color:[50,   3,    85], active:false},
      ],
      activePalette: -1,
      activePaletteColor: [22,50,50],
      activeColor: 0,
      labelColor: 0
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
    getButtonFill(i){
      // return this.hsl(b.color[0],b.color[1],b.color[2]);
      return this.hsl(this.palette[this.keys[i].palette].color[0],this.palette[this.keys[i].palette].color[1],this.palette[this.keys[i].palette].color[2]);
    },
    getPaletteFill(p){
      return this.hsl(p.color[0],p.color[1],p.color[2]);
    },
    getLabelFill(b){
      return b.labelCol == 'light' ? this.hsl(0,0,0) : this.hsl(0,0,100); 
    },
    changeColors(){
      let _this = this;
      this.keys.filter(function(key) {
        if(key.active == true){
          // key.color = _this.activeColor;
          key.palette = _this.activeColor;
        };
      });  
    },
    changeLabelColors(){
      let _this = this;
      this.keys.filter(function(key) {
        if(key.active == true){
          key.labelCol == 'dark' ? key.labelCol = 'light' : key.labelCol = 'dark';
          _this.getLabelFill(key);
        };
      });  
    },
    deselectAll(){
      this.keys.filter(function(key) {
        key.active = false;
      });  
    },
    closeMixer(){
      this.activePalette = -1;
    },
    getMixerData(value){
      this.activePaletteColor = value;
      this.palette[this.activePalette].color = value;
    }
  },
  computed: {
    
  },
  template: `
  <div style="display:grid; grid-template-columns: 1fr 1fr; grid-gap:var(--content-gap);">
    <div>
      <f-artboard width="300" height="440" responsive id="calculator-design" download>
        <f-group>
          <rect width="100%" height="100%" rx="10" :fill="hsl(33,9,55)" />
          
          <rect x="50%" y="4%" width="27%" height="4.5%" rx="2" :fill="hsl(22, 39, 14)" :stroke="color('white')" />
          <rect 
            x="10%" y="11%" width="80%" height="11%" rx="5" 
            :fill="hsl(77,11,25)" :stroke="color('white')" 
          />
  
          <g v-for="(b,i) in keys" transform="translate(30,140)"
            v-on:click="b.active = !b.active">
            <rect 
              :width="W*0.13" 
              :height="W*0.13" 
              :x="buttX(i)"
              :y="buttY(i)" 
              :fill="getButtonFill(i)" 
              :stroke="b.active ? hsl(33,9,10) : hsl(33,9,40)"
              :stroke-width="b.active ? 3 : 2" 
              rx="3"
              style="cursor:pointer;" 
            />
            <text :x="buttX(i)+18" :y="buttY(i)+20" 
            :fill="getLabelFill(b)"
            :style="{fill:getLabelFill(b)}"
            dominant-baseline="middle" text-anchor="middle" letter-spacing="-1">{{b.label}}</text>
          </g>
        </f-group>
        </f-artboard>
    </div>
    <div>
      
      <div style="display:grid; grid-template-rows: auto; grid-gap:5vh; position:sticky; top:10vh;">
        <div>
          <h5>Color palette / <span style="font-size:calc(var(--base) * 1.5)">change the colors</span></h5>
          
          <div style="display:flex; height:12vh; min-height:50px; max-height:200px;">
            <div v-for="(p, i) in palette" 
            v-show="activePalette == -1 || activePalette == i"
            style="flex:1; display:flex; flex-direction:column; align-items:center; " :style="{border: '3px solid transparent'}" >
              <div 
                :style="{background: getPaletteFill(p)}" style="width:100%; align-self:stretch; height: 100%; border-radius:6px; cursor:pointer; border:1px solid var(--gray)"
                v-on:click="activeColor = i; changeColors()">
              </div>
              <a href="#" style="flex:0;margin-top:var(--base);" 
              v-show="activePalette == -1"
              v-on:click.prevent="activePaletteColor = palette[i].color; activePalette = i;" class="quaternary">Edit</a>
            </div>
          </div>
          
          <div v-if="activePalette >= 0" style="display:flex; flex-direction:column;align-items:center;">
            <color-mixer colorModel="HSL" outputID="calcMixer-" key="calcMixer" :values="activePaletteColor" :preview="false"
            v-on:getMixerData="getMixerData" :global="false" style="width:100%;" />
            <a href="#" v-on:click="activePalette = -1" class="tertiary">DONE</a>
          </div>
          
        </div>
  
        <div>
          <f-toggle title="Swap label color (dark/light)" v-on:click.native="changeLabelColors()" style="cursor:pointer" />
        </div>
  
        <div>
          <a href="#" v-on:click="deselectAll()" class="tertiary">deselect all</a><br /><span style="font-size:calc(var(--base) * 1.25);">(OR press <b>alt+d</b> on keyboard)</span>
          <f-keyboard
            alt
            character="d"
            v-on:keydown="deselectAll(); closeMixer();"
          />
        </div>
      </div>

    </div>

  </div>
  `,
  css: `
  .f-svg text {
    font-size: calc(var(--text-size) * 1.2) !important;
    font-weight: 500;
    font-family: var(--font-mono) monospace;
    mix-blend-mode: normal;
  }
  `
};
