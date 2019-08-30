import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FProjectCard from "./components/FProjectCard.js";
import FTag from "./components/FTag.js";
import FCard2 from "./components/FCard2.js";
import FTeams from "./components/FTeams.js";

const FImage2 = {
  props: ["src"],
  template: `
  <div :style="{
    background: 'url(' + src + ')',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    height: '100%',
    minHeight: '300px'
  }">&nbsp;</div>
  `
};

fachwerk({
  title: 'Scenarios',
  components: { FProjectCard, FTag, FCard2, FTeams },
  editor: "none",
  type: "document",
  //footer: true,
  menu: false,
  pager: false,
  style: { "--image-min-height": "100px", "--content-padding": "var(--base8)" }
});
