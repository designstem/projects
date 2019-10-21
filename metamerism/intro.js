import { utils, Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils },
  mixins: [Css],
  props: {
    outro: Boolean
  },
  template: `
  <div style="position: relative; width: 100%; height: 100%; padding-bottom: 100%;">
  <a-scene style="width: 100%; height: 100%; position: absolute; left: 0px; top: 0px;" embedded="true" vr-mode-ui="enabled: false">
    <a-entity camera wasd-controls="enabled: false" look-controls="enabled: false" position="0 1.6 0"></a-entity>
    <f-animation set="r" :duration="40000" />
    <a-assets>
      <a-asset-item id="apple" src="./models/apple.obj"></a-asset-item>
      <a-asset-item id="lemon" src="./models/lemon.obj"></a-asset-item>
    </a-assets>
    <a-entity position="0 0.5 -3" >
      <a-entity :rotation="'0 ' + get('r') + ' 0'">
        <a-entity v-if="!outro" >
          <a-entity position="0 0 1" :material="'color: ' + hsl2rgb(get('r'),100,50)" 
          scale="0.015 0.015 0.015" obj-model="obj: #apple;"/>
        </a-entity>
        <a-entity v-else>
          <a-entity position="0.75 1 0" :material="'color: ' + hsl2rgb(get('r'),100,50)" 
          scale="0.012 0.012 0.012" obj-model="obj: #lemon;" rotation="0 0 90"/>
        </a-entity>
      </a-entity>   
    </a-entity>
    <a-sky :color="color('darkestgray')"></a-sky>
  </a-scene>
</div>
  `,
  css:`
    .a-entity {

    }
  `
};
