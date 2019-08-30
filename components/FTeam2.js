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
    <div class="grid" style="--gap: var(--base)">
      <f-image
        v-for="(r, i) in findTeam(rows.filter(r => r.shortname))"
        :key="i"
        :src="r.filename"
      />
    </div>
  </f-sheet>
  `
};
