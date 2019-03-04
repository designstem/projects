export default {
  props: {
    position: { default: "0 0 0", type: String },
    rotation: { default: "0 0 0", type: String},
    scale: { default: "1 1 1", type: String },
  },
  template: `
  <a-entity :position="position" :rotation="rotation" :scale="scale">
    <a-box position="0 0.49 0" geometry="depth:  0.01;  height:  0.03" shadow=""></a-box>
    <a-plane></a-plane>
    <a-box position="0 -0.49 0" geometry="depth:  0.02;  height:  0.03" shadow=""></a-box>
  </a-entity>
  `
};