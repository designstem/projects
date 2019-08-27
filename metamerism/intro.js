import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils },
  template: `
  <div style="position: relative">
  <a-scene style="width: 100%; height: 100%" embedded="true" vr-mode-ui="enabled: false">
    <f-animation set="r" :duration="40000" />
    <a-assets>
      <a-asset-item id="apple" src="./models/apple.obj"></a-asset-item>
    </a-assets>
    <a-entity position="0 0.5 -3" >
      <a-entity :rotation="'0 ' + get('r') + ' 0'">
          <a-entity  position="0 0 1" :material="'color: ' + hsl2rgb(get('r'),100,50)" scale="0.015 0.015 0.015" obj-model="obj: #apple;"/>
      </a-entity>   
    </a-entity>
    <a-sky :color="color('darkestgray')"></a-sky>
  </a-scene>
</div>
  `
};
