import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FProjectCard from "./FProjectCard.js";
import FClockIcon from "./FClockIcon.js";
import FPeopleIcon from "./FPeopleIcon.js";
import FToolsIcon from "./FToolsIcon.js";
import FTag from "./FTag.js";

fachwerk({
  components: { FProjectCard, FClockIcon, FPeopleIcon, FToolsIcon, FTag },
  editor: "hide",
  type: "document",
  footer: true
});
