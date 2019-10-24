import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";


import SimpleQuiz from "../components/SimpleQuiz.js";

fachwerk({ 
  components: { 
    "SimpleQuiz" : SimpleQuiz,
  },
  src: [
    "quiz-1.md"
  ],
  theme: "light",
  type: "slides",
  typebutton: "none",
  edit: "none",
  pager: "hide",
  home: "",
  // utils:  localutils
});

