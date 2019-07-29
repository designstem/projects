import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

import * as localutils from "./utils.js";

//import ImageCompare from "./components/ImageCompare.js";
//import ColorblindnessSimulator from "./components/ColorblindnessSimulator.js";
import ColorblindnessJuxtapose from "./components/ColorblindnessJuxtapose.js";
import Poster from "./components/Poster.js";
import PolarityQuiz from "./components/PolarityQuiz.js";
import ContrastQuiz from "./components/ContrastQuiz.js";
import ColorPaletteWheel from "./components/ColorPaletteWheel.js";
import ColorMixer from "./components/ColorMixer.js";
import Loader from "./components/Loader.js";

import Mapper from "./cv-mapper/Mapper.js";

fachwerk({ 
  components: { 
        //"ImageCompare" : ImageCompare,
    "ColorblindnessJuxtapose" : ColorblindnessJuxtapose,
    "Mapper" : Mapper,
    "Poster" : Poster,
    "PolarityQuiz" : PolarityQuiz,
    "ContrastQuiz" : ContrastQuiz,
    "ColorPaletteWheel" : ColorPaletteWheel,
    "ColorMixer": ColorMixer,
    "Loader": Loader,

  },
  src: [
    "index.md", 
    "index-08-contrast-and-harmony.md", 
    "index-09-calculator.md", 
    "index-extras.md"
  ],
  theme: "light",
  editor: "none",
  pager: true,
  home: false,
  utils:  localutils
});

// import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";
// Vue.prototype.$global = new Vue({ data: { state: {} } });

// for (const name in components) {
//   Vue.component(name, components[name]);
// }

// import ImageCompare from "./components/ImageCompare.js";
// Vue.component('ImageCompare', ImageCompare);
// import ColorblindnessSimulator from "./components/ColorblindnessSimulator.js";
// Vue.component('ColorblindnessSimulator', ColorblindnessSimulator);

// new Vue({
//   el: "#app",
//   data: function() {
//     return {
//       preview: 1, header: 1, advanced: 1
//     }
//   },

//   // Making utilities accessible to templates
//   methods: { ...utils },

//   // Fetching the index.md and rendering it
//   template: `
//   <div>
//     <header v-if="header">
//       <div>
//         <a href="https://designstem.github.io/homepage">Home</a> → Color Vision Deficiency & Accessibility
//       </div>
//     </header>
//     <f-fetch url="./index.md">
//       <f-content-editor
//         slot-scope="{ value }"
//         :content="value"
//         :preview="preview"
//         :advanced="advanced" 
//         style="--content-editor-min-height: 100vh"
//         save-id="playground"
//       />
//     </f-fetch>
//     <f-keyboard alt character="p" @keydown="preview = 1 - preview" />
//     <f-keyboard alt character="h" @keydown="header = 1 - header" />
//     <f-keyboard alt character="s" @keydown="send('save')" />
//     <f-keyboard alt character="a" @keydown="advanced = 1 - advanced" />
//     <f-keyboard alt character="left" @keydown="send('prev')" />
//     <f-keyboard alt character="right" @keydown="send('next')" />
//     <f-pager />
//   </div>
// `
// });