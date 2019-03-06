import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
import Wall from "./components/Wall.js";
import Lamp from "./components/Lamp.js";
import Table from "./components/Table.js";
import Clock from "./components/Clock.js";

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
  components: {Wall, Lamp, Table, Clock},
  data: () => ({
    cold: "rgb(201, 226, 255)",
    neutral: "rgb(255, 255, 255)",
    warm: "rgb(255, 197, 143)",
    lightColor: ''
  }),
  template: `
    <a-scene shadow="type: pcfsoft" debug >'
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
      <a-entity position="0 5.5 -13.9" scale="4 6 1">
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
        <Wall position="-10 5 0" rotation="0 90 0" scale="20 10 15" />
        <Wall position="10 5 0" rotation="0 -90 0" scale="20 10 15" />
        <Wall position="-0 5 -10" scale="20 10 15" />
        <Wall position="-0 5 10" rotation="0 180 0" scale="20 10 15" />
        <a-plane src="#floor" repeat="4 4" rotation="-90 0 0" geometry="height:  20;  width:  20"></a-plane>
        <a-plane rotation="90 0 0" position="0 10 0"  geometry="height:  20;  width:  20"></a-plane>
      </a-entity>
      <a-entity position="9 0 -11">
      <Lamp :light="lightColor" :lampHeight=2.8 position="0 0 -2" />
      <Lamp :light="lightColor" :lampHeight=2.8 position="0.2 0 -0.9" :lampScale=".6"/>
      </a-entity>
      <a-entity position="-8 0 -12">
      <Lamp :light="lightColor" :lampHeight=2.8 position="-1.3 0 -0.3" :lampScale=".3"/>
      <Lamp :light="lightColor" :lampHeight=2 position="0 0 -1.3" :lampScale=".6"/>
      <Lamp :light="lightColor" :lampHeight=4 position="-1 0 -1" :lampScale=".8" />
      </a-entity>
      <a-entity position="9 0 6">
      <Lamp :light="lightColor" :lampHeight=2.8 position="0 0 -0.9" :lampScale="1.5" />
      <Lamp :light="lightColor" :lampHeight=2.8 position="0.2 0 -2" :lampScale=".6" />
      <Lamp :light="lightColor" :lampHeight=4.4 position="-7 0 -2" :lampScale="1.2" />
      <Lamp :light="lightColor" :lampHeight=2.4 position="-9 0 -2.2" :lampScale="1.2" />
      </a-entity>
      <a-entity position="-8 0 5">
      <Lamp :light="lightColor" :lampHeight=2.8 position="-0.05 0.1 -1.6" :lampScale=".3"/>
      <Lamp :light="lightColor" :lampHeight=2 position="1.6 0 0.3" :lampScale=".6"/>
      <Lamp :light="lightColor" :lampHeight=2.4 position="0.1 0 -0.9" :lampScale="2" />
      </a-entity>
      <Table position="0 0 -10" rotation="0 -90 0" :tableLength=4.3 :tableWidth=2 :tableHeight=1.4>
        <a-entity scale=".8 .8 .8" rotation="-20 0 0" position="0 0 .3">
          <f-aframe-button @click.native="lightColor = cold" title="cold" position="-1.5 0 0" />
          <f-aframe-button @click.native="lightColor = neutral" title="neutral" position="0 0 0" />
          <f-aframe-button @click.native="lightColor = warm" title="warm" position="1.5 0 0" />
          <f-aframe-button @click.native="lightColor = 'red'" title="red" position="-1.3 .6 -1" />
          <f-aframe-button @click.native="lightColor = 'green'" title="green" position="0 .6 -1" />
          <f-aframe-button @click.native="lightColor = 'blue'" title="blue" position="1.3 .6 -1" />
        </a-entity>
      </Table>
      <a-entity class="info-board" rotation="0 -80 0" position="3 0 -5">
        <a-entity position="-.5 4.3 .1" scale=".5 .5 .5">
          <a-plane material="color: #ccc" height=".1"></a-plane>
          <a-plane material="color: #ccc" height=".1" width=".6" rotation="0 0 45" position="-.3 .19 0"></a-plane>
          <a-plane material="color: #ccc" height=".1" width=".6" rotation="0 0 -45" position="-.3 -.19 0"></a-plane>
        </a-entity>
        <a-text position="-0.8 3 0.05" text="width: 1.6; color: #202020; lineHeight: 60;" 
        value="The Dress \n 
        In the example of the dress you have seen that the same object may look differently. 
        Some might say it is white and gold, others see it as black and blue. But what is true? 
        To find out more about colors and light you are going to do an experiment in a virtual learning environment. 
        Use a computer or your smartphone (with a VR headset if possible) and enter the first experiment. \n
        1. Make yourself familiar with the VR environment (moving, viewing, controls ...)
        2. Experiment with the buttons on the table. Which effect do they have?
        "></a-text>
        <a-box material="shader: flat" position="0 3 0" geometry="depth: 0.05; width: 2; height: 3.5"></a-box>
        <a-box position="0 1.8 -0.01" geometry="depth: 0.05; width: 2.2; height: 3.5"></a-box>
      </a-entity>
      <Clock scale="2 2 1" rotation="0 90 0" position="-9.9 6 -3.5"></Clock>
    </a-scene>
  `
}

