import {Css} from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  mixins: [Css],
  template: `
  <f-sheet id="1-WsazYAKboddKOCkfImHCY6V7Wy-ztIs4qhyYumeAqw" v-slot="{ value: rows }">
    <div class="grid f-teams">
      <f-image
        v-for="(r, i) in rows.filter(r => r.shortname)"
        :key="i"
        :src="r.filename"
        :title="r.name"
        style="filter: grayscale(100%); border-radius: 0; height:15vh; min-height:100px;"
      />
    </div>
  </f-sheet>
  `,
  css: `
    .f-teams {
      display: grid;
      --cols: repeat(4, 1fr); 
      --gap: 0;
    }
    @media (min-width: 800px) {
      .f-teams {
        --cols: repeat(8, 1fr);
      }
    }
  `
};
