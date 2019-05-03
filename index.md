| 1 1
| 2 3
| 4 4

# DesignSTEM

-

<big>DesignSTEM is an education initiative that creates immersive experiences for future learning. We are educators, teachers, designers and engineers from 10 countries<br>🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪 around Europe.</big>

-

<big>Our interactive scenarios help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The scenarios are powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework, development progress can be tracked <a href="https://designstem.github.io/homepage">here</a></big>

-


<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>
<div>

<br><br>

### Featured projects

<div class="grid">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'featured')"
    :key="i"
    :project="project"
    status="feature"
  />
</div>

<!--
<br><br>

### In progress

<div class="grid">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'progress')"
    :key="i"
    :project="project"
    status="progress"
  />
</div>
-->

<br><br>

### Various experiments

<div class="grid">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'experiment')"
    :key="i"
    :project="project"
    status="experiment"
  />
</div>

</div>
</f-sheet>

<br><br>
