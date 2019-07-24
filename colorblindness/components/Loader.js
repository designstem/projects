import { Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default{
  mixins: [Css],
  template: `
  <div style="display:inline; line-height:0">
    <!-- <f-animation v-slot="{ value: c }" to="360" duration="3600" loop> -->
      <f-scene width="20" height="20">
        <f-group scale="1.8">
          <f-regularpolygon count="6" r="1"     strokeWidth="1"  />
          <f-regularpolygon count="6" r="0.7"  strokeWidth="1" class="rotate rotate-left" />
          <f-regularpolygon count="6" r="0.4"   strokeWidth="1" class="rotate rotate-right" />
        </f-group>
      </f-scene>
    <!-- </f-animation> -->
  </div>
  `,
  css: `
    .rotate {
      transform: rotate(0deg);
      animation-duration: 3s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .rotate-left {
      animation-name: rotateLeft;
    }
    .rotate-right {
      animation-name: rotateRight;
    }
    @keyframes rotateLeft {
      from {
        transform: rotate(0deg); 
      }
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes rotateRight {
      from {
        transform: rotate(0deg); 
      }
      to {
        transform: rotate(-360deg);
      }
    }
  `
};
