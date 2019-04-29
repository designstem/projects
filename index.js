import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FProjectCard from "./components/FProjectCard.js";
import FTag from "./components/FTag.js";

fachwerk({
  components: { FProjectCard, FTag },
  editor: "none",
  type: "document",
  footer: true,
  menu: false,
  pager: false
});
