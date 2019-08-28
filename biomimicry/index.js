import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { fachwerk } from "http://127.0.0.1:5501/fachwerk.js";

fachwerk({ 
  src: [
    "index.md"
  ],
  theme: "light",
  editor: "hide",
  pager: true,
  home: false,
  style: { "--content-padding": "6vmin" }
});
