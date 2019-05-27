import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

import * as localutils from "./utils.js";

import Triangle from "./components/Triangle.js";
//import ColorblindnessSimulator from "./components/ColorblindnessSimulator.js";


fachwerk({ 
  components: { 
    "Triangle" : Triangle,
  },
  theme: "light",
  editor: "hide",
  pager: true,
  home: false,
  type: "slides",
  utils:  localutils
});
