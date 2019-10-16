import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

fachwerk({
  title: 'RGB lamp',
  theme: "dark",
  type: "slides",
  home: "..",
  style: { "--content-padding":"var(--base10) var(--base4) var(--base4 ) var(--base4)", "--purple": "blue", "--accent": "blue ", "--darkestgray": "black", "--yellow": "yellow" },
  src: [
    "./index.md",
    "./step1_research.md",
    "./step2_design.md",
    "./step3_engineering.md",
    "./step4_prototyping.md",
    "./step5_communication.md",
    "./step6_assessment.md"
  ]
});
