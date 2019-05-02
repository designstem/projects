
export default {
  description: `
Camera object for \`a-scene\`-scenes, for easier customization.


  `,
  props: {
    cursorColor: { default: "#ddd", type: String },
    cursorTimeout: { default: 700, type: Number },
  },
  template: `
      <a-camera>
        <a-cursor
          :fuse="true" 
          :fuse-timeout="cursorTimeout"
          :material="{color: cursorColor}"
          raycaster="objects: .clickable"
        />
      </a-camera>
  `
};