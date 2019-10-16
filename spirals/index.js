import { fachwerk2 } from "https://designstem.github.io/fachwerk/fachwerk.js";

import * as localutils from "./utils.js";

import Spiral from "./components/Spiral.js";

fachwerk2({
  title: "Spirals",
  components: {
    Spiral: Spiral
  },
  type: "slides",
  home: "..",
  utils: localutils
});
