| padding: 0
| gap: 0
| rows: 300px 1fr
| 1 2 3 4
| 5 5 5 5
| 6 6 7 7
| 8 8 8 8
| 9 9 9 9

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/1.jpg" />

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/5.jpg" />

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/4.jpg" />

-

<f-image2 src="https://designstem.github.io/slides/haridusfond/images/6.jpg" />

-

<section style="padding: var(--base7) var(--base3) 0 var(--base3)">

# DesignSTEM projects

</section>

-

<section>

DesignSTEM is an education initiative that creates immersive experiences for future learning. We are educators, teachers, designers and engineers from 10 countries 🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪 around Europe.

</section>

-

<section>

Our interactive scenarios help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The scenarios are powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework, development progress can be tracked <a href="https://designstem.github.io/homepage">here</a>

</section>

-

<section>

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>
<!--f-fetch
  type="json"
  src="./feed.json"
  v-slot="{ value: projects }"
-->
<div>

<div class="grid" style="--cols: 1fr 1fr">
  <div>
  <h3>Design topics</h3>
  <div style="display: flex; flex-wrap: wrap;">
    <f-tag v-for="t in unique(flatten(projects.map(p => p.designtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" style="cursor: pointer" v-on:click.native="set('dt', t)" />
  </div>
  </div>
<div>
  <h3>STEM topics</h3>
  <div style="display: flex; flex-wrap: wrap;">
    <f-tag v-for="t in unique(flatten(projects.map(p => p.stemtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" />
  </div>
  </div>
</div>

<p />

### Featured projects {{ get('dt') ? 'in ' + get('dt') : '' }}

    {{ get('dt') }}

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'featured').filter(p => get('dt','') ? p.designtags.includes(get('dt','')) : true)"
    :key="i"
    :project="project"
    status="feature"
  />
</div>

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

<br><br>

</div>
<!--/f-fetch-->
</f-sheet>

</section>

<f-footer />
