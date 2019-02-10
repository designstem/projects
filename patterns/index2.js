import { Vue } from "https://designstem.github.io/fachwerk/fachwerk.js";

import Scene from "./components/Scene.js";
import Editable3 from "./components/Editable3.js";
import Points from "./components/Points.js";
import Spinner from "./components/Spinner.js";
import Repeat from "./components/Repeat.js";

new Vue({
  el: "#app",
    components: { Scene, Points, Editable3, Spinner, Repeat },
  data: () => ({
      size: 300,
      points: [
          { x: 20, y: 40 },
          { x: 80, y: 90 },
          { x: 100, y: 11 },
          { x: 140, y: 71 }
    ],
  }),
  template: `
        <div>
            <Editable3 :size="size" v-model="points" />
            <Scene :size="size">
                <Spinner :speed="50000">
                    <Repeat :size="size / 30" count="16">
                        <Points
                            slot-scope="s"
                            :size="size / 2"
                            :points="points"
                        />
                    </Repeat>
                </Spinner>
            </Scene>
        </div>
    `
});