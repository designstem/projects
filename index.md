| padding: 0
| gap: 0
| rows: 300px 1fr
| 3 4 5
| 1 2 2
| 6 6 6

<section>

# DesignSTEM projects

DesignSTEM is an education initiative that creates immersive experiences for future learning. We are educators, teachers, designers and engineers from 10 countries 🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪 around Europe.

Our interactive scenarios help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The scenarios are powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework, development progress can be tracked <a href="https://designstem.github.io/homepage">here</a>

</section>

-

<section>

<!--f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
-->
<f-fetch
  type="json"
  src="./feed.json"
  v-slot="{ value: projects }"
>
<div>

### Featured projects

<div class="grid">
  <f-project-card
    v-for="(project,i) in parseSheet(projects).filter(p => p.type == 'featured')"
    :key="i"
    :project="project"
    status="feature"
  />
</div>

<br><br>

### In progress

<div class="grid">
  <f-project-card
    v-for="(project,i) in parseSheet(projects).filter(p => p.type == 'progress')"
    :key="i"
    :project="project"
    status="progress"
  />
</div>

### Various experiments

<div class="grid">
  <f-project-card
    v-for="(project,i) in parseSheet(projects).filter(p => p.type == 'experiment')"
    :key="i"
    :project="project"
    status="experiment"
  />
</div>

<br><br>

</div>
</f-fetch>
<!--/f-sheet-->

</section>

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/1.jpg" />

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/5.jpg" />

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/4.jpg" />

-

<f-footer />
