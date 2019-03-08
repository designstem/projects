import * as components from "https://designstem.github.io/fachwerk/framework.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

/*new Vue({
  el: "#app1",
  data: {
	  boh: []
  }*/
  /*methods: { ...utils },
  template: `
  <!--<f-buttons-data :buttons="['PET', 'LDPE', 'PP']">-->
  <!--<p slot-scope="data">{{ data.value }}</p>-->

  <!--<h1 slot-scope="data" class="bullet">{{ data.value }}</h1>-->
  <!--<div slot-scope="data" v-if="{{data.value}} === '0'">        
                Density: 1.34-1.38 g/cm3 
                <br>(sinks in fresh water and salt water)<br><br>
                <div style="text-align: center"><img src="img/simbolo_pet.jpg" width="60px" height="90px">
                </div>
  </div>-->
  <!--</f-buttons-data>-->
  
  `*/
///*});
