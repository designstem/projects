import * as components from "https://designstem.github.io/fachwerk/components.js";
import * as utils from "https://designstem.github.io/fachwerk/utils.js";

for (const name in components) {
  Vue.component(name, components[name])
}

new Vue({
    el: "#app",
    data: () => ({
	red:100,
	green:100,
	blue:100,
	target_red:0,
	target_blue:0,
	target_green:0,
	initialized:false,
	running:false,
	diff:0,
	error:0,
        ok:0,
        fails:0}),
    computed: {
    },
    methods: {
	makeTarget: function() {
	    this.target_red=Math.floor(Math.random() * 256);  
	    this.target_green=Math.floor(Math.random() * 256);  
	    this.target_blue=Math.floor(Math.random() * 256);
	    this.initialized=true;
	    this.running=true;
	},
	checkAnswer: function(red, green, blue) {
	    this.diff=Math.abs(this.target_red-red)+
		Math.abs(this.target_green-green)+
		Math.abs(this.target_blue-blue);
	    this.error=Math.max(Math.abs(this.target_red-red),
				Math.abs(this.target_green-green),
			       Math.abs(this.target_blue-blue));
	    if(this.initialized && this.error<20) {
		this.ok+=1;
		this.running=false;
	    }
	    return this.diff;
	},
	...utils },
    template:
    `
  <div>
    <header>
      <div >
        <a href="https://designstem.github.io/homepage">Home</a>
        → <a href="https://designstem.github.io/homepage/rgblamp">RGB Lamp</a>
	→ <a href="../index.html">E-Tools</a>
	→ <a href="./index.html">RGB Mixing</a>
      </div>
    </header>
    <div  style="display: flex"> 
    <div style="width: 24rem; padding: 2rem; border-right: var(--border-width) solid var(--primary)">
          <h1 
               style="font-size: 4rem; line-height: 4rem;">RGB Quiz</h1>

        <div>
         <h1 class="button_primary" v-if="!initialized" @click="makeTarget()"> Start </h1>
         <h2 class="button_secondary" v-if="initialized && running" @click="running=false; fails+=1"> Cancel </h2>
         <h2 class="button_secondary" v-if="initialized && !running" @click="makeTarget();"> Continue </h2>
       </div>
       <div>
        <f-scene v-if="initialized">
        <f-circle :fill="rgb(target_red,target_green,target_blue)" />
        </f-scene>
       </div>
       <div v-if="initialized && running">
        <h2>Distance: {{round(diff)}}</h2>
        </div>
       <div v-if="initialized && running">
        <h2>Score: {{round(ok)}} </h2>
        </div>
        <div v-if="initialized && !running">
        <h1>Score: {{round(ok)}} </h1>
        </div>

    </div>

    <div style="padding-left:100px">
        <br/><br/>
        <div v-if="initialized && running">
        <h3> Red: {{red}} </h3>
        <input type="range" v-model="red" max="255" min=0 step="10"></input>
        <h3> Green: {{green}} </h3>
        <input type="range" v-model="green" max="255" min=0 step="10"></input>
        <h3> Blue: {{blue}} </h3>
        <input type="range" v-model="blue" max="255" min=0 step="10"></input>
        <div v-if="checkAnswer(red,green,blue)"></div>
        </div>
        <br/>
         <f-scene v-if="initialized">
             <f-circle :fill="rgb(red,green,blue)" />
         </f-scene>
    </div>
  </div>
`
});
