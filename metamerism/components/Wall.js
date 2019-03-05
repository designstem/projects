export default {
  props: {
    position: { default: "0 0 0", type: String },
    rotation: { default: "0 0 0", type: String},
    scale: { default: "1 1 1", type: String },
  },
  template: `
  <a-entity :position="position" :rotation="rotation" :scale="scale">
    <a-entity position="-0.496 0.48 0.7" rotation="180 0 0" scale="0.01 0.02 0.7" obj-model="obj: ./models/liist.obj"></a-entity>
    <a-plane></a-plane>
    <a-entity position="-0.49 -0.48 0.7" scale="0.01 0.02 0.7" obj-model="obj: ./models/liist.obj"></a-entity>
  </a-entity>
  `
};