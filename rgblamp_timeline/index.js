import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
Vue.prototype.$global = new Vue({ data: { state: {} } });

for (const name in components) {
  Vue.component(name, components[name])
}

import lamp from "./components/Lamp.js";

new Vue({
  el: "#app",
  methods: { ...utils,
    randomize: function (max) {
      return Math.floor(Math.random() * Math.floor(max));
    },
    setColor: function () {
      for (const index of this.lamps.keys()) {
        this.lamps[index].r = this.randomize(255);
        this.lamps[index].g = this.randomize(255);
        this.lamps[index].b = this.randomize(255);
      }
    },
    hideMenu() {
      this.fullScreen = !this.fullScreen;
    }
  },
  components: {lamp },
  data: {
    active: 1,
    count: 3,
    lamps: [
      { r: 255, g: 222, b: 222, brightness: 0.7, size: 0.5, onOff: 1 },
      { r: 255, g: 222, b: 222, brightness: 0.7, size: 0.5, onOff: 1 },
      { r: 255, g: 222, b: 222, brightness: 0.7, size: 0.5, onOff: 1 },
    ],
    fullScreen: false
  },
  mounted() {
    this.setColor();
  },
  template: `
  <div v-on:keyup.70="hideMenu" v-on:keyup.82="setColor" tabindex="0">  
  <div v-if="!fullScreen" style="position: absolute; right: 0; background-color: rgba(255,255,255,0.5); padding: 1em; margin: 1em">
  <div style="display: flex" style="margin-bottom: .5rem; user-select: none;">
    <f-scene v-for="(item, index) in count" :width="30" :height="30" @click.native="active = index" style="cursor: pointer" >
        <f-circle :r=0.9 :stroke-width="0" :fill="'rgb(' + lamps[index].r + ',' + lamps[index].g + ',' + lamps[index].b + ')'" />
        <f-circle :r="1.5" :stroke-width="(index === active) ? 3 : 0" />
    </f-scene>
  </div>
  <f-buttons v-model="lamps[active].onOff" :buttons="['Off', 'On']" style="margin-bottom: 1rem; user-select: none;" />
  <f-slider title="R" v-model="lamps[active].r" :to="255" :step="1" />
  <f-slider title="G" v-model="lamps[active].g" :to="255" :step="1" />
  <f-slider title="B" v-model="lamps[active].b" :to="255" :step="1" />
  <f-slider title="Brightness" v-model="lamps[active].brightness" :from="0.01" :to="0.99" :step="0.01" />
  <f-slider title="Size" v-model="lamps[active].size" :from="0.01" :to="0.99" :step="0.01" />
  </div>
  <f-buttons v-if="!fullScreen" @click.native="setColor" :buttons="['randomness!']" style="user-select: none; position: absolute; right: 1rem; bottom: 1rem; opacity: .3" />
  <!--<code v-for="(item, index) in count">{{ lamps[index].r }}</code>-->
  <svg width="100%" height="100vh" viewBox="-2 -2 4 4" style="background-color: var(--darkgray);">
  <lamp v-for="(item, index) in count" @click.native="active = index" :n="index" :active="active" :onOff="lamps[index].onOff" 
  :r="lamps[index].r" :g="lamps[index].g" :b="lamps[index].b" :brightness="lamps[index].brightness" :size="lamps[index].size"/>
   </svg>
  </div>
  `
});
