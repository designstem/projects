import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";


import * as localutils from "./utils.js";

import Triangle from "./components/Triangle.js";
import Separator from "./components/Separator.js";
// import Triangle2 from "./components/Triangle2.js";


fachwerk({ 
  components: { 
    "Triangle" : Triangle,
    "Separator": Separator
  },
  src: "index.md",
  // src: "math-polygon.md",
  theme: "light",
  pager: true,
  home: false,
  type: "document",
  utils:  localutils
});
