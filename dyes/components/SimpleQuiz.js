import { Css, get, set } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  props: {
    name: {
      type: String, 
      required: false, 
      default: "DS-Quiz"
    },
    title: {
      type: String, 
      required: false, 
      default: null
    },
    question: {
      type: String, 
      required: true, 
      default: 'How much is enouch?'
    },
    options: {
      type: Array, 
      required: true
    }
  },
  mixins : [Css],
  data() {
    return {
      activeIndex: -1,
      success: false
    }
  },
  mounted(){
    // this.set(this.name+'-wrong', 30);
    // this.set(this.name+'-right', 0);
  },
  methods : { get, set,
    clickHandler(i){
      this.activeIndex = i;
      // if( this.options[i].status == false ){
      //   set(this.name, get(this.name, 0) += 1);
      // }
      this.success = this.options[i].status;
    }
  },
  template: `
    <div 
      style="display: grid; grid-template-rows:auto; width:100%; height:100%; text-align: center; border-radius: var(--base2); box-shadow:0 2px 5px 0 hsla(0,0%,0%,0.25); padding:5vmin; background:var(--white)" 
      class="quiz"
      :class="success ? 'quiz-success' : ''"
    >
      <div style="display:flex; flex-direction: column; justify-content: flex-end; align-items: center; padding-bottom: 3vh;">
        <h2 v-if="title">{{ title }}</h2>
        <h4 style="font-family:var(--font-serif)" v-html="question"></h4>
      </div>
      <f-inline style="justify-content: space-around; margin-bottom: 3vh;">
        <button 
          v-for="(b,i) in options" :key="'b'+i"
          v-on:click="clickHandler(i)"
          class="button-option"
          :class="activeIndex == i && success ? 'success-button' : ''"
          :disabled="success ? 'true' : false"
          style="margin-top: 1vh !important; margin-bottom: 1vh !important;"
          :style="activeIndex == i && b.status == false ? {'opacity': 0.5} : {'opacity': 1}"
        >
          {{ b.text }}
        </button>
      </f-inline>
      <div>
        <transition name="fade">
          <div v-if="activeIndex > -1">
            <h3 style="margin: 0;">{{ options[activeIndex].message }}</h3>
            <h5 style="font-weight:normal; font-style:italic; margin: 0">{{ options[activeIndex].hint }}</h5>
          </div>
        </transition>
        <f-next-button v-if="success" title="Continue" style="margin-top:3vh;" />
      </div>
    </div>
  `,
  css: `
    .button-option {
      margin-bottom: 9vh !important;
    }
    .quiz-success{
      transform: all 0.25s ease-out;
    }
    .quiz-success button.success-button {
      background: var(--emphasis);
    }
    .quiz-success .button-option {
      cursor: auto;
      opacity: 0.3;
    }
  `
};