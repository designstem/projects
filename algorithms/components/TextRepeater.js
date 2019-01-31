import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
  data: () => ({
    letter: "g",
    step: 0.5,
    rotation: 0,
    scale: 1,
    opacity:1,
    presets: ['§', '∞', 'ῳ', 'ڮ', 'ﮔ', 'ଙ', 'ณ', 'ድ', 'ᚍ', 'ᚡ', 'ㄔ', 'ꂊ', 'ꁮ', '⡺', '⧰', '㌽', '𝌘', '☮', '✮', '☣', '░', '❅', '💩', 'Letterepeater', '. . .', 'Designˢᵀᴱᴹ'],
  }),
  methods: { 
    ...utils
  },
  template: `
  <div>
    <div style="display:flex; padding:3vmin; width:100%; justify-content:space-between; ">
      <div style="flex:0 0 35%;">
        <f-slider title="Step" v-model="step" :from="0.2" :to="2" :step="0.01" />
        <f-slider title="Rotation" v-model="rotation" :from="-180" :to="180" :step="0.01" />
        <f-slider title="Scale" v-model="scale" :from="-10" :to="10" :step="0.01" />
        <f-slider title="Opacity" v-model="opacity" :from="0" :to="1" :step="0.01" />
        <label>Input</label>
        <input type="text"  v-model="letter" style="width:100%;" />
        <label><small>Presets</small></label>

        <div style="display:flex; width:100%; flex-wrap:wrap;">
          <span 
            v-for="p in presets"  
            @click="letter = p"
            style="flex: 0 0 3rem; cursor:pointer; display:flex; padding:0.5rem; justify-content:center; align-items:center; border:3px solid var(--darkgray); border-radius:calc(var(--base)/2); margin:0.25rem;">
          {{p}}</span>
        </div>

      </div>
      <div style="flex:0 0 60%;">
        <!-- <f-svg 
          width="600"
          height="500"
          :innerWidth="600" 
          :innerHeight="500" 
          :innerX="-300" 
          :innerY="-250" 
          style="width:100%; height:60vh; border:1px solid black;" > -->
        <f-scene style="width:100%; height:100%">
          <f-grid-pattern :step="step">
            <!-- <f-group slot-scope="data2" :rotation="{z: rotation}" :scale="{x: scale, y: scale }" > -->
            <f-group slot-scope="data2" :rotation="{ z: rotation }" :scale="{ x: scale, y: scale+3 }" >
                <f-text class="text" :opacity="opacity" :fill="hsl(210, 0, 40)" style="font-family: var(--font-sansserif) !important;
      text-anchor: middle;"> {{letter}} </f-text>
            </f-group>
          </f-grid-pattern>
        </f-scene>
        <!-- </f-svg> -->
      </div>
    </div>
    
  </div>
  `
};
