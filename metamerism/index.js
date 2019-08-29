import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

import Scene1 from "./Scene1.js";
import Scene2 from "./Scene2.js";
import intro from "./intro.js";

fachwerk({
  title: 'Metamerism',
  editor: "hide",
  theme: "dark",
  components: { Scene1, Scene2, intro }
});
