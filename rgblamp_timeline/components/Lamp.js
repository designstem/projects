export default {
  props: {
    r: { default: 255, type: Number },
    g: { default: 222, type: Number },
    b: { default: 222, type: Number },
    size: { default: 0.5, type: Number },
    brightness: { default: 0.5, type: Number },
    n: {type: Number},
    active: {type: Number},
    onOff: {type: Number}
  },
  methods: {
    brightenRGB: function (r,g,b, val) {
      const v = val * 10;
      return 'rgb(' + parseInt(parseInt(r) + parseInt(v)) + ',' + parseInt(parseInt(g) + parseInt(v)) + ',' + parseInt(parseInt(b) + parseInt(v)) + ')'
    }
  },
  template: `
  <g transform="scale(1,1)" style="mix-blend-mode: lighten; cursor: pointer">
    <filter id="blurMe" x="-500%" y="-500%" width="1000%" height="1000%">
        <feGaussianBlur in="SourceGraphic" :stdDeviation="brightness*size" />
        <!--<feBlend mode="lighten" />-->
    </filter>
    <f-circle :x="(n*1.5)-1.5" :r="size" :stroke="onOff ? 0 : 'rgba(255,255,255,0.5)'" :stroke-width="onOff ? 0 : 0.01"
    :fill="onOff ? brightenRGB(r,g,b,brightness) : 'rgb(1,1,1)'" :opacity="parseFloat(brightness) + 0.8" />
    <f-circle :x="(n*1.5)-1.5" filter="url(#blurMe)" :r=brightness*3*size :stroke=0 
    :fill="onOff ? brightenRGB(r,g,b,brightness) : 'rgb(1,1,1)'" :opacity="brightness" />
  </g>
  `
};