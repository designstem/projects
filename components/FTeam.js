import { intersection } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  props: {
    team: { default: [], type: Array }
  },
  methods: {
    findTeam(rows) {
      return rows.filter(r => {
        return intersection([r.shortname], this.team).length;
      });
    }
  },
  template: `
  <f-sheet id="1-WsazYAKboddKOCkfImHCY6V7Wy-ztIs4qhyYumeAqw" v-slot="{ value: rows }">
    <div class="grid" style="--cols: 100px 1fr; --gap: var(--base)">
      <template v-for="(r, i) in findTeam(rows.filter(r => r.shortname)).reverse()">
      <img
        :key="i"
        :src="r.filename"
        style="filter: grayscale(100%);"
      />
      <div>
        <h5>{{ r.name }}</h5>
        <p>{{ r.bio }}</p>
      </div>
      </template>
    </div>
  </f-sheet>
  `
};
