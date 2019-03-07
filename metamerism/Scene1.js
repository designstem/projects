import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
import Room from "./components/Room.js";
import Lamp from "./components/Lamp.js";
import Table from "./components/Table.js";
import Clock from "./components/Clock.js";
import Info from "./components/Info.js";

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
    },
  },
  components: {Lamp, Table, Clock, Info, Room},
  data: () => ({
    cold: "rgb(201, 226, 255)",
    neutral: "rgb(255, 255, 255)",
    warm: "rgb(255, 197, 143)",
    lightColor: '',
    dressSrc: './images/dress_03_nw.jpg',
    infoText: ''
  }),
  mounted() {
    const that = this;
    fetch('./dress.txt')
      .then( r => r.text() )
      .then( t => that.infoText = t );
  },
  template: `
    <f-aframe>
      <a-assets>
        <a-asset-item id="liist" src="./models/liist.obj"></a-asset-item>
        <img id="floor" src="./images/floor/floor_1k.jpg">
      </a-assets>
      <Room position="0 -4 0">
      <a-entity class="light-ambient" light="type: ambient; color: #fff; intensity: 0.2"></a-entity>
      <a-entity class="light-dynamic" :light=lightProps() position="0 8 2" scale="5 5 5"></a-entity>
      <a-entity position="0 5.5 -10" scale="4 6 1">
        <a-image position="0 0 0.01" :src="dressSrc" material="shader: standard" />
      </a-entity>

      <a-entity position="9 0 -7">
      <Lamp :light="lightColor" :lampHeight=2.8 position="0 0 -2" />
      <Lamp :light="lightColor" :lampHeight=2.8 position="0.2 0 -0.9" :lampScale=".6"/>
      </a-entity>
      <a-entity position="-8 0 -8">
      <Lamp :light="lightColor" :lampHeight=2.8 position="-1.3 0 -0.3" :lampScale=".3"/>
      <Lamp :light="lightColor" :lampHeight=2 position="0 0 -1.3" :lampScale=".6"/>
      <Lamp :light="lightColor" :lampHeight=4 position="-1 0 -1" :lampScale=".8" />
      </a-entity>
      <a-entity position="9 0 10">
      <Lamp :light="lightColor" :lampHeight=2.8 position="0 0 -0.9" :lampScale="1.5" />
      <Lamp :light="lightColor" :lampHeight=2.8 position="0.2 0 -2" :lampScale=".6" />
      </a-entity>
      <a-entity position="-8 0 9">
      <Lamp :light="lightColor" :lampHeight=2.8 position="-0.05 0.1 -1.6" :lampScale=".3"/>
      <Lamp :light="lightColor" :lampHeight=2 position="1.6 0 0.3" :lampScale=".6"/>
      <Lamp :light="lightColor" :lampHeight=2.4 position="0.1 0 -0.9" :lampScale="2" />
      </a-entity>
      <Table position="0 0 -5" rotation="0 -90 0" :tableLength=5.5 :tableWidth=2 :tableHeight=2.4>
        <a-entity scale="1.3 1.3 1.3" rotation="-20 0 0" position="0 0 .3">
          <f-aframe-button @click.native="lightColor = cold; dressSrc = './images/dress_05_cw.jpg'" title="cold" position="-1.5 0 0" />
          <f-aframe-button @click.native="lightColor = neutral; dressSrc = './images/dress_03_nw.jpg'" title="neutral" position="0 0 0" />
          <f-aframe-button @click.native="lightColor = warm; dressSrc = './images/dress_01_ww.jpg'" title="warm" position="1.5 0 0" />
        </a-entity>
      </Table>
      <Info rotation="0 -80 0" position="3 0 0" :text="infoText"/>
      <Clock scale="1.5 1.5 1" rotation="0 90 0" position="-9.9 6 0"></Clock>
      </Room>
    </f-aframe>
  `
}