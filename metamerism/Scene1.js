import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils,
    lightProps: function () {
      return "type: spot; castShadow: true; decay: 0.45; color: "+utils.rgb([0,255][this.r],[0,255][this.g],[0,255][this.b])+")"
    }
  },
  data: () => ({ r: 1, g: 1, b: 1 }),
  template: `
    <a-scene shadow="type: pcfsoft" debug >'
      <a-camera>
        <a-cursor
          fuse="true" 
          fuse-timeout="700"
          material="color: #ddd"
          raycaster="objects: .clickable"
        />
      </a-camera>
      <a-entity :light=lightProps() position="3 8 7" scale="5 5 5"></a-entity>
      <a-entity position="0 3 -5" scale="2 3 1">
        <a-image src="./images/thedress.png" shadow="cast: true" material="shader: standard" />
        <a-box position="0 -1.6 -0.6" material="color: #ffffff" geometry="depth: 0.1; height: 3; width: 0.1" shadow="cast: true"></a-box>
      </a-entity>
      <a-entity>
        <a-plane></a-plane>
        <a-circle id="ground" position="0 0 -4" radius="100" rotation="-90 0 0" shadow="receive: true"></a-circle>
      </a-entity>
      
    <a-entity
      position="0 0.8 -3"
      rotation="-20 0 0"
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
    
    </a-scene>
  `
}

