import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FSheetsV4 from "../FSheetsV4.js";

import DSLinks from "./DSLinks.js";

fachwerk({components: { 
  "DSLinks" : DSLinks, "FSheetsV4" : FSheetsV4
  },
  typebutton: "none",
  edit: "none",
  style: {
    "--content-max-width": "1600px"}
});

