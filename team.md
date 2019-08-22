## Team

<f-sheet id="1-WsazYAKboddKOCkfImHCY6V7Wy-ztIs4qhyYumeAqw" v-slot="{ value: rows }"><div><f-inline v-for="(r, i) in rows.filter(r => r.filename)" :key="i" style="margin: 0">
  <img :src="r.filename" style="width: 170px; padding-right: 20px" />
  <div style="width: 50vw">
    <h4 style="margin-top: 0">{{ r.name }}</h4><p>{{ r.bio }}</p><p v-if="r.contact">{{ r.contact }}</p>
  </div>
  </f-inline>
</div></f-sheet>