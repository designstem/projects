import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";
import FProjectCard from "./components/FProjectCard.js";
import FClockIcon from "./components/FClockIcon.js";
import FPeopleIcon from "./components/FPeopleIcon.js";
import FToolsIcon from "./components/FToolsIcon.js";
import FTag from "./components/FTag.js";

fachwerk({
  components: { FProjectCard, FClockIcon, FPeopleIcon, FToolsIcon, FTag },
  editor: "none",
  type: "document",
  footer: true,
  menu: false,
  pager: false
});
