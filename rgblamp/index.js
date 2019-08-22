import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

fachwerk({
  theme: "dark",
  style: { "--content-padding":"var(--base10) var(--base4) var(--base4 ) var(--base4)", "--purple": "blue", "--accent": "red", "--darkestgray": "black", "--yellow": "yellow" },
  src: [
    "./index.md",
    "./step1_research.md",
    "./step2_design.md",
    "./step3_detaileddesign.md",
    "./step4_engineering.md",
    "./step5_prototyping.md",
    "./step6_communication.md",
    "./step7_assessment.md"
  ]
});
