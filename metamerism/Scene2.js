import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
import Room from "./components/Room.js";


export default {
  methods: { ...utils },
  data: () => ({ r: 1, g: 1, b: 1 }),
  components: { Room },
  template: `
  <f-aframe>
    <a-assets>
      <a-asset-item id="apple" src="./models/apple.obj"></a-asset-item>
      <a-asset-item id="lemon" src="./models/lemon.obj"></a-asset-item>
      <a-asset-item id="tomato" src="./models/tomato.obj"></a-asset-item>
    </a-assets>


    <!--<a-light position="0 0.5 1" cast-shadow="true" :color="rgb([0,255][r],[0,255][g],[0,255][b])" />-->

    <a-entity position="0 0 -15">

      <a-entity material="color: rgb(255,255,0);" position="-4 0 0" scale="0.015 0.015 0.015" obj-model="obj: #apple;"/>
      <a-entity material="color: rgb(255,0,0)" position="0 1 0" scale="0.01 0.01 0.01" obj-model="obj: #tomato;"/>
      <a-entity material="color: rgb(255,180,0);" position="4 0 0" scale="0.015 0.015 0.015" obj-model="obj: #lemon;"/>
   
      <a-box
        width="14"
        height="0.25"
        depth="7"
        position="0 -0.125 0"
        color="#333"
      />

    </a-entity>

    <a-entity
      position="0 -0.5 -3"
      rotation="-45 0 0"
    >

      <f-aframe-button
        @click.native="r = 1 - r"
        title="R"
        position="-1 0 0"
        :title-color="r ? 'rgb(255,0,0)' : '#777'"
        :background-color="r ? '#ccc' : '#333'"
      />

      <f-aframe-button
        @click.native="g = 1 - g"
        title="G"
        position="0 0 0"
        :title-color="g ? 'rgb(0,255,0)' : '#777'"
        :background-color="g ? '#ccc' : '#333'"
      />
      
      <f-aframe-button
        @click.native="b = 1 - b"
        title="B"
        position="1 0 0"
        :title-color="b ? 'rgb(0,0,255)' : '#777'"
        :background-color="b ? '#ccc' : '#333'"
      />

    </a-entity>
    <Room scale="2 2 2" position="0 -1 0"></Room>
  </f-aframe>
  `
}
