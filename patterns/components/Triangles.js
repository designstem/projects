const process = triangle => {
  return triangle.map(vertex => Object.values(vertex).join(" "));
};

export default {
  props: ["triangles", "rotation", "step"],
  methods: { process },
  template: `
    <a-scene
      embedded
      inspector
      style="width: 800px; height: 500px;"
    >
      <a-entity camera position="-0.2 0 -0.5" />
      <a-entity :rotation="[rotation[0],0,0].join(' ')">
      <a-entity
          v-for="y in [0,1,2,3]"
          :position="'0 ' + (y / step - 1.5) + ' -1'"
       >
      <a-entity
        v-for="x in [0,1,2,3]"
        :position="(x / (step * -1)) + ' 1.8 -1'"
        rotation="0 0 0"
        scale="0.005 0.005 0.005"
      >
        <template v-for="triangle in triangles">
        <a-triangle
            :vertex-a="process(triangle)[0]"
            :vertex-b="process(triangle)[1]"
            :vertex-c="process(triangle)[2]"
            color="#1982c4"
            material="side: double;"
        />
        </template>
      </a-entity>
      </a-entity>
      </a-entity>
      <a-sky color="white"></a-sky>
    </a-scene>
    `
};
