import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FProjectCard from "./components/FProjectCard.js";
import FTag from "./components/FTag.js";
import FCard2 from "./components/FCard2.js";

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
  components: { FProjectCard, FTag, FImage2, FCard2 },
  editor: "none",
  //type: "document",
  //footer: true,
  menu: false,
  pager: false,
  style: { "--image-min-height": "100px", "--content-padding": "var(--base4)" }
});
