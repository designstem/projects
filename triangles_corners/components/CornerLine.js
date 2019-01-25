export default {
  props: ["angle", "thickness", "fixed", "xshift"],
//  methods: { cx, cy },
  computed: {
    angleStyle() {
        return { transform: `rotate(${this.angle}deg)` };
    },
    cornerStyle(){
        if(!this.fixed){
          return { transform: `translate(${-this.xshift}px, ${-this.thickness}px)`, strokeWidth:`6px` };
        }
      }
  },
  template: `
    <g :style="cornerStyle">
      <line
        x1="0" y1="0"
        x2="3600" y2="0"
        stroke="black"
        stroke-width="3"
      />
      <line
        x1="0" y1="0"
        x2="3600" y2="0"
        stroke="rgb(102, 51, 153)"
        stroke-width="3"
        :style = "angleStyle"
      />
    </g>
    `
};
