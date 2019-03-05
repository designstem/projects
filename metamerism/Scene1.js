import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
import wall from "./components/Wall.js";
import lamp from "./components/Lamp.js";

export default {
  methods: { ...utils,
    lightProps: function () {
      return utils.str({
        type: "point",
        castShadow: true,
        decay: 0.45,
        intensity: .8,
        color: this.lightColor
      })
    }
  },
  components: {wall, lamp},
  data: () => ({
    cold: "rgb(201, 226, 255)",
    neutral: "rgb(255, 255, 255)",
    warm: "rgb(255, 197, 143)",
    lightColor: ''
  }),
  template: `
    <a-scene shadow="type: basic" debug >'
      <a-assets>
        <a-asset-item id="liist" src="./models/liist.obj"></a-asset-item>
        <img id="floor" src="./images/floor/floor_1k.jpg">
      </a-assets>

      <a-camera position="0 3 -5">
        <a-cursor
          fuse="true" 
          fuse-timeout="700"
          material="color: #ddd"
          raycaster="objects: .clickable"
        />
      </a-camera>
      <a-entity light="type: ambient; color: #fff; intensity: .2"></a-entity>
      <a-entity :light=lightProps() position="0 8 0" scale="5 5 5"></a-entity>
      <a-entity position="0 5 -13.9" scale="4 6 1">
        <a-image src="./images/thedress.png" material="shader: standard" />
        <a-box position="-0.55 0" material="color: whitesmoke" geometry="depth: 0.2; width: 0.1" shadow=""></a-box>
        <a-box position="0.55 0" material="color: whitesmoke" geometry="depth: 0.2; width: 0.1" shadow=""></a-box>
        <a-box position="0 -0.531" material="color: whitesmoke" geometry="depth: 0.2; width: 1.2; height: 0.06" shadow=""></a-box>
        <a-box position="0 0.531" material="color: whitesmoke" geometry="depth: 0.2; width: 1.2; height: 0.06" shadow=""></a-box>
        <a-entity position="0.8 -0.51 -0.07">
          <a-text scale="1 0.7 1" position="-0.1 0.020 0.06" text="width: 0.4; color: #202020; lineHeight: 60;" value="The Dress, 2015 \n Tumblr"></a-text>
          
          <a-box material="color: #ffffff" geometry="depth: 0.1; width: .25; height: .1" shadow=""></a-box>        
        </a-entity>
      </a-entity>
      <a-entity position="0 0 -4" shadow="receive: true">
        <wall position="-10 5 0" rotation="0 90 0" scale="20 10 15" />
        <wall position="10 5 0" rotation="0 -90 0" scale="20 10 15" />
        <wall position="-0 5 -10" scale="20 10 15" />
        <wall position="-0 5 10" rotation="0 180 0" scale="20 10 15" />
        <a-plane src="#floor" repeat="4 4" rotation="-90 0 0" geometry="height:  20;  width:  20"></a-plane>
        <a-plane rotation="90 0 0" position="0 10 0"  geometry="height:  20;  width:  20"></a-plane>
      </a-entity>
      <lamp :light="lightColor" :lampHeight=2 position="9 0 -13" />
      <lamp :light="lightColor" :lampHeight=2 position="-9 0 -13" />
      <!--<a-entity :light=lightProps() position="8 5 -13" scale="5 5 5"></a-entity>-->
      <!--<a-entity :light=lightProps() position="-8 5 -13" scale="5 5 5"></a-entity>-->
    <a-entity
      position="0 0.8 -8"
      rotation="-20 0 0"
    >

      <f-aframe-button
        @click.native="lightColor = cold"
        title="cold"
        position="-2 0 0"
      />

      <f-aframe-button
        @click.native="lightColor = neutral"
        title="neutral"
        position="0 0 0"
      />
      
      <f-aframe-button
        @click.native="lightColor = warm"
        title="warm"
        position="2 0 0"
      />

    </a-entity>
    
    </a-scene>
  `
}

