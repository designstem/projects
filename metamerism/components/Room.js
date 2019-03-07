import Wall from "./Wall.js";

export default {
  components: { Wall },
  methods: {
    rotateWalls: function (i, deg) {
      return "0 -" + i*deg + " 0";
    }
  },
  template: `
      <a-entity class="room">
        <a-plane rotation="90 0 0" position="0 10 0"  geometry="height:  20;  width:  20"  shadow="receive: true" material="roughness: 1"></a-plane>
        <a-entity v-for="wall in 4" :rotation=rotateWalls(wall,90)>
          <Wall position="0 5 -10" scale="20 10 15" shadow="receive: true"/>
        </a-entity>
        <slot />
        <a-plane src="#floor" repeat="4 4" rotation="-90 0 0" geometry="height:  20;  width:  20"  shadow="receive: true" material="roughness: 1"></a-plane>
      </a-entity>
  `
};