import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import FFlower from "../components/FFlower.js"
import FFlower2 from "../components/FFlower2.js"
import FClock from "../components/FClock.js"
import FPlaceholder from "../components/FPlaceholder.js"

fachwerk({
  src: 'step-6.0.md',
  components: { FFlower, FFlower2, FClock, FPlaceholder },
  editor: "hide",
  home: false,
  //pager: false,
  //type: 'document',
  // header: [
  //   { title: "Scenarios", src: "https://designstem.github.io/scenarios" },
  //   { title: "Project progress", src: "https://designstem.github.io/homepage" },
  //   { title: "Framework", src: "https://designstem.github.io/homepage" },
  //   { title: "Github", src: "https://designstem.github.io" }
  // ],
  // footer: true
});
