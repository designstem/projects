export default {
  props: ["fill"],
  template: `
        <div :style="{
        backgroundImage: 'url(../tattoo_simulator/Image_skin_texture.png), url(../tattoo_simulator/Image_skin_texture_spec.png)', 
        backgroundColor: fill,
        height: '100%',
        backgroundBlendMode: 'multiply, screen'
        }"></div>
    `
};
