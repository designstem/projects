import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
export default {
  props: {
    position: { default: "0 0 0"},
    rotation: { default: "0 0 0"},
    tableWidth: { default: 1 },
    tableLength: { default: 1 },
    tableHeight: { default: 1 },
    tableScale: { default: 1 },
  },
  methods: { ...utils,
    shade: function () {
      return utils.str({
        height: 2,
        radiusBottom: 1,
        radiusTop: 0.6
      })
    },
    scaleTheTable: function () {
      return this.tableScale + ' ' + this.tableScale + ' ' +this.tableScale
    },
    posTheLegs: function () {
      let w = utils.scale(this.tableWidth, 0, 1, 0, 0.45);
      let l = utils.scale(this.tableLength, 0, 1, 0, 0.45);
      let h = utils.scale(this.tableHeight, 0, 1, 0, 0.5);
      return [ w + " " + h + " " + l, -w + " " + h + " " + l, w + " " + h + " " + -l, -w + " " + h + " " + -l ];
    },
    scaleTheLegs: function () {
      return utils.scale(this.tableHeight, 0, 1, 0, 1.1)
    },
    posTheTop: function () {
      let h = utils.scale(this.tableHeight, 0, 1, 0, 1.1);
      return "0 " + h + " 0"
    }
  },
  template: `
  <a-entity class="table" :position="position" :rotation="rotation" :scale="scaleTheTable()" shadow="cast: false">
    <a-entity class="table-stuff" :position=posTheTop() rotation="0 90 0"><slot></slot></a-entity>
    <a-box class="table-top" height=".1" :depth="tableLength" :width="tableWidth" :position=posTheTop()></a-box>
    <a-box v-for="leg in posTheLegs().length" :height=scaleTheLegs() class="table-leg" depth=".1" width=".1" :position=posTheLegs()[leg-1]></a-box>
  </a-entity>
  `
};