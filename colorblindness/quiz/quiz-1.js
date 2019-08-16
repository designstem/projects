import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

// import * as localutils from "./utils.js";

// import PolarityQuiz from "./components/PolarityQuiz.js";
// import ContrastQuiz from "./components/ContrastQuiz.js";

fachwerk({ 
  components: { 
    // "PolarityQuiz" : PolarityQuiz,
    // "ContrastQuiz" : ContrastQuiz,
  },
  src: [
    "quiz-1.md"
  ],
  theme: "light",
  editor: "hide",
  pager: true,
  home: false,
  // utils:  localutils
});

