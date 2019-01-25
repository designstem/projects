import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
    el: "#app",
    data: () => ({
	red:10,
	green:10,
	blue:10,
	sred:30,
	sgreen:30,
	sblue:30,
	spoti:10,
    }),
    methods: {
	...utils },
    template:
    `
   <div style="padding-left:10px; display:inline">

        <div style="width:40%; float:left;">
        <br/>
        <h2>Ambiental</h2>
        <h3> Red: {{red}}% </h3>
        <input id="rslider" type="range" v-model="red" max="100" min=0 step="10"></input>
        <h3> Green: {{green}}% </h3>
        <input id="gslider" type="range" v-model="green" max="100" min=0 step="10"></input>
        <h3> Blue: {{blue}}% </h3>
        <input id="bslider" type="range" v-model="blue" max="100" min=0 step="10"></input>
        </div>
        <div style="width:40%; float:right;">
        <br/>
        <h2>Spot Lights</h2>
        <h3> Red Spot: {{sred}}% </h3>
        <input id="rsslider" type="range" v-model="sred" max="100" min=0 step="5"></input>
        <h3> Green Spot: {{sgreen}}% </h3>
        <input id="gsslider" type="range" v-model="sgreen" max="100" min=0 step="5"></input>
        <h3> Blue Spot: {{sblue}}% </h3>
        <input id="bsslider" type="range" v-model="sblue" max="100" min=0 step="5"></input>
        </div>
    </div>
`
});
