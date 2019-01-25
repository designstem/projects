import CornerLine from "./CornerLine.js";
export default {

  props: ["sides", "angle", "thickness"],
  components: { CornerLine },
  data: () => ({ 
    angle1:0
  }),
  computed: {
    xShift(){
        this.angle1 =  ((360-this.angle)/2) - 90 ;
        var result = (this.thickness*Math.tan( this.angle1 * Math.PI/180 )) ;
        return result;
    }
  }, 
  template: `
   
        <g style="transform: translate(-40px, -40px)">
          <CornerLine :angle="angle" :thickness="thickness" :xshift="0" :fixed="true"></CornerLine>
          <CornerLine :angle="angle" :thickness="thickness" :xshift="this.xShift" :fixed="false"></CornerLine>
          <line x1="0" y1="0" :x2="-this.xShift" :y2="-thickness" stroke="black" />

          <text :x="this.xShift/3-15" y="22" font-size="18" font-weight="bold" filter="url(#txtBg)">{{angle}}&deg;</text>
          <text :x="-this.xShift+5" :y="-thickness-10" font-size="12" fill="rgb(11, 57, 84)" filter="url(#txtBg)">{{90-angle1}}&deg;</text>
          <line :x1="-this.xShift+10" :y1="-thickness-7" :x2="-this.xShift+10" :y2="-thickness+3" stroke="rgb(11, 57, 84)" />
          <text x="5" y="-5" font-size="12" filter="url(#txtBg)">{{90+angle1}}&deg;</text>
        </g>
  `

};