import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import Simulator from "../tattoo_simulator/simulator.js";
import Background from "./background.js";
import EmojiBg from "./emojibg.js";

fachwerk({ title: 'Tattoo', editor: "hide", components: { Simulator, Background, EmojiBg } });
