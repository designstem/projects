export default {
  template: `
  <f-sheet id="1-WsazYAKboddKOCkfImHCY6V7Wy-ztIs4qhyYumeAqw" v-slot="{ value: rows }">
    <div class="grid" style="--cols: repeat(10, 1fr); --gap: 0">
      <f-image
        v-for="(r, i) in rows.filter(r => r.shortname)"
        :key="i"
        :src="r.filename"
        style="filter: grayscale(100%); border-radius: 0;"
      />
    </div>
  </f-sheet>
  `
};
