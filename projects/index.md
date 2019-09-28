| 1 1 2

<f-logo />

<big style="line-height: 1.75em; margin-top: var(--base4); display: block;"><big>DesignSTEM is an education initiative that creates immersive experiences for future learning. We help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The projects are based our <f-sidebar size="half" src="../pedagogy.md">pedagogical framework</f-sidebar> and powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework.</big></big>

-
-

---

| padding: 0

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>

<f-theme theme="dark">
<f-grid cols="1fr 1fr 1fr 1fr" gap="0">
  <f-image-card v-for="(p,i) in projects.filter(p => p.type === 'progress')" :src="p.image" :key="i">
    <h3>{{ p.title }}</h3>
    <p style="padding-right: 33%; opacity: 0.85"> {{ p.desc}}</p>
    <f-about :project="p" />
  </f-image-card>
</f-grid>
</f-theme>

</f-sheet>