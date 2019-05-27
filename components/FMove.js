import { Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  mixins: [Css],
  description: `
Fading transition

<f-buttons :buttons="['On', 'Off']">
  <h3 slot-scope="data">
    <f-fade v-if="!data.value">Fading like a flower</f-fade>
  </h3>
</f-buttons> 

<p />
  `,
  template: `
  <transition-group appear name="list-complete" tag="div">
    <slot />
  </transition-group>
  `,
  css: `
  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-enter, .list-complete-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
  .list-complete-leave-active {
    position: absolute;
  }
  `
}