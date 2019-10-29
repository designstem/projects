import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";


import DSLinks from "./DSLinks.js";

fachwerk({components: { 
  "DSLinks" : DSLinks,
  },
  typebutton: "none",
  edit: "none",
  style: {
    "--content-max-width": "1600px"}
});

