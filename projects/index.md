<f-logo />

### Hello

---

| padding: 0

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>

<f-grid cols="1fr 1fr 1fr 1fr" gap="0">
  <f-image-card v-for="(p,i) in projects.filter(p => p.type === 'progress')" :src="p.image" :key="i">
    <h3>{{ p.title }}</h3>
    <p style="padding-right: 33%; opacity: 0.85"> {{ p.desc}}</p>
  </f-image-card>
</f-grid>

</f-sheet>