import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
  el: "#app",
  methods: { ...utils },
  template: `
  <div style="display:flex; justify-content:center; width:100%; padding:2rem;">
  <f-buttons :buttons="['Lines', 'Boxes']">
<div slot-scope="bdata">

<!-- <f-animation :to="0.3" :alternate="true">
<div slot-scope="adata"> -->

    <f-slider :sliders="[
    { title: 'X shift', from: 0, to: 2, value: 0, float: true },
    { title: 'Y shift', from: 0, to: 2, value: 0, float: true },
    { title: 'step', from: 0.1, to: 2, value: 0.5, float: true },
    { title: 'rotation', from: 0, to: 360, value: 0, float: true },
  ]">
  <f-scene slot-scope="sdata" width="1000" height="500">
    <f-grid-pattern :step="sdata.value[2]">
      <f-group slot-scope="rdata">
        <f-group :rotation="{ z: sdata.value[3] }"  v-if="bdata.value==0">  
          <f-line
          
            :points="[
              { x: 0, y: 0 },
              { x: Math.random()*sdata.value[0], y:  sdata.value[1] },
            ]" 
            :stroke-width="6"
          />
        <f-group>
        <f-group  v-else>  
          <f-box 
            :points="[
              { x: 0, y: 0 },
              { x: sdata.value[0], y:  sdata.value[1] },
            ]" 
            :rotation="{ z: sdata.value[3] }"
            :stroke-width="4"
          />
        </f-group>

      </f-group>
      

    </f-grid-pattern>
  </f-scene>
</f-slider>
<!-- </div>
</f-animation> -->
</div>
</f-buttons>

  </div>
  `
});
