import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  methods: { ...utils,
    lightProps: function () {
      return "type: point; castShadow: true; decay: 0.45; color: "+utils.rgb([0,255][this.r],[0,255][this.g],[0,255][this.b])+")"
    }
  },
  data: () => ({
    r: 1,
    g: 1,
    b: 1,
    frame: 'khaki'
  }),
  template: `
    <a-scene shadow="type: pcfsoft" debug >'
      <a-camera position="0 3 0">
        <a-cursor
          fuse="true" 
          fuse-timeout="700"
          material="color: #ddd"
          raycaster="objects: .clickable"
        />
      </a-camera>
      <a-entity :light=lightProps() position="0 8 0" scale="5 5 5"></a-entity>
      <a-entity position="0 6 -13.9" scale="4 6 1">
        <a-image src="./images/thedress.png" material="shader: standard" />
        <a-box position="-0.55 0" material="color: whitesmoke" geometry="depth: 0.2; width: 0.1" shadow=""></a-box>
        <a-box position="0.55 0" material="color: whitesmoke" geometry="depth: 0.2; width: 0.1" shadow=""></a-box>
        <a-box position="0 -0.531" material="color: whitesmoke" geometry="depth: 0.2; width: 1.2; height: 0.06" shadow=""></a-box>
        <a-box position="0 0.531" material="color: whitesmoke" geometry="depth: 0.2; width: 1.2; height: 0.06" shadow=""></a-box>
        <a-box position="0.8 -0.51 -0.07" material="color: #ffffff" geometry="depth: 0.1; width: .25; height: .1" shadow=""></a-box>
      </a-entity>
      <a-entity position="0 0 -4" shadow="receive: true">
        <a-plane rotation="0 90 0" position="-10 4 0" scale="20 15 15"></a-plane>
          <a-box rotation="0 90 0" position="-10 4 0" material="color: whitesmoke" geometry="depth: 1; width: 0.1" shadow=""></a-box>
        <a-plane rotation="0 -90 0" position="10 4 0" scale="20 15 15"></a-plane>
        <a-plane position="0 4 -10" scale="20 15 15"></a-plane>
        <a-circle id="ground" radius="100" rotation="-90 0 0"></a-circle>
        <a-circle id="ceil" radius="100" position="0 11 0" rotation="90 0 0"></a-circle>
      </a-entity>
      
    <a-entity
      position="0 0.8 -2"
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

