import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

fachwerk({ 
  title: 'Biomimicry',
  src: "index.md",
  theme: "light",
  type: "slides",
  home: "..",
  style: { "--content-padding2": "6vmin" }
});
