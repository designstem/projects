import { fachwerk2 } from "https://designstem.github.io/fachwerk/fachwerk.js";

import Simulator from "../tattoo_simulator/simulator.js";
import Background from "./background.js";
import EmojiBg from "./emojibg.js";

fachwerk2({
  title: "Tattoo",
  type: "slides",
  home: "..",
  components: { Simulator, Background, EmojiBg }
});
