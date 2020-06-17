import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import * as localutils from "./utils.js";

import ColorblindnessJuxtapose from "./components/ColorblindnessJuxtapose.js";
import Poster from "./components/Poster.js";
import PolarityQuiz from "./components/PolarityQuiz.js";
import ContrastQuiz from "./components/ContrastQuiz.js";
import ColorPaletteWheel from "./components/ColorPaletteWheel.js";
import ColorMixer from "./components/ColorMixer.js";
import CalculatorDesigner from "./components/CalculatorDesigner.js";

import Mapper from "./cv-mapper/Mapper.js";

fachwerk({ 
  title: 'Colorblindness',
  components: { 
    "ColorblindnessJuxtapose" : ColorblindnessJuxtapose,
    "Mapper" : Mapper,
    "Poster" : Poster,
    "PolarityQuiz" : PolarityQuiz,
    "ContrastQuiz" : ContrastQuiz,
    "ColorPaletteWheel" : ColorPaletteWheel,
    "ColorMixer": ColorMixer,
    "CalculatorDesigner": CalculatorDesigner,
  },
  src: [
    "index.md", 
    "index-02-the-eye.md",
    "index-03-color-mixing.md",
    "index-04-3-properties.md",
    "index-05-contrast-and-harmony.md", 
    "index-06-calculator.md"
  ],
  theme: "light",
  edit: "none",
  type: "slides",
  home: "..",
  utils:  localutils
});
