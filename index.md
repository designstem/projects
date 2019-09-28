| padding: 0
| height: auto
| padding: var(--base8) var(--base8) 0 var(--base8) 

## &nbsp;

<h1 class="ds-title"><big><big><big><span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup></big></big></big></h1>

<big>

DesignSTEM is an educational initiative that creates immersive experiences for future learning. We help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The projects are based on a <f-sidebar size="half" src="./pedagogy.md"><a href="#">5E pedagogical framework</a></f-sidebar> and powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework.

</big>

<!--div class="grid" style="--cols: 1fr 1fr 1fr 1fr; --gap: 0; height: 45vh">

  <f-image src="https://designstem.github.io/slides/haridusfond/images/1.jpg" />

  <f-image src="https://designstem.github.io/slides/haridusfond/images/5.jpg" />

  <f-image src="https://designstem.github.io/slides/haridusfond/images/4.jpg" />

  <f-image src="https://designstem.github.io/slides/haridusfond/images/6.jpg" />

</div-->

---

| 2 2 2 1

 

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>

<div>

#### &nbsp;

  <div>
  <caption>Design topics</caption>
  <div style="display: flex; flex-wrap: wrap;">
    <f-tag v-for="t in unique(flatten(projects.filter(p => ['featured','progress','experiment','preparation'].indexOf(p.type) !== -1).map(p => p.designtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" style="cursor: pointer; background: var(--lightgray);" v-on:click.native="set('dt', t == get('dt') ? '' : t)" :style="get('dt') == t ? {'background':'var(--darkgray)','color':'var(--lightergray)'} : {}" />
  </div>
</div>

#### &nbsp;

<div>
  <caption>STEM topics</caption>
  <div style="display: flex; flex-wrap: wrap;">
    <f-tag v-for="t in unique(flatten(projects.filter(p => ['featured','progress','experiment','preparation'].indexOf(p.type) !== -1).map(p => p.stemtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" style="cursor: pointer; background: var(--lightergray);" v-on:click.native="set('st', t == get('st') ? '' : t)" :style="get('st') == t ? {'background':'var(--darkgray)','color':'var(--lightergray)'} : {}" />
  </div>
</div>

#### &nbsp;

</div>

</f-sheet>

-

### Sample e-learning projects {{ get('dt') ? 'about ' + get('dt') : '' }} {{ get('st') ? ' + ' + get('st') : '' }}

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>

<div>

<div class="grid" style="--cols: 1fr 1fr 1fr">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'progress').filter(p => get('dt','') ? p.designtags.includes(get('dt','')) : true).filter(p => get('st','') ? p.stemtags.includes(get('st','')) : true)"
    :key="i"
    :project="project"
    status="progress"
  />
</div>

<br>

### Various experiments {{ get('dt') ? 'about ' + get('dt') : '' }} {{ get('st') ? ' + ' + get('st') : '' }} 

<div class="grid" style="--cols: 1fr 1fr 1fr">
  <f-project-card
    v-for="(project,i) in projects.filter(p => p.type == 'experiment').filter(p => get('dt','') ? p.designtags.includes(get('dt','')) : true).filter(p => get('st','') ? p.stemtags.includes(get('st','')) : true)"
    :key="i"
    :project="project"
    status="experiment"
    small="true"
  />
</div>

<br><br>

</div>

</f-sheet>

---

| padding: 0

<section>

<a id="team"><h3>Team</h3></a>

We are educators, teachers, designers and engineers from 9 countries 🇬🇧 🇩🇪 🇬🇷 🇮🇹 🇳🇱 🇵🇹 🇸🇮 🇫🇮 🇪🇪 around Europe.

</section>

<f-teams />

---

<a id="contacts"><h3>Contacts</h3></a>

**Project Initiator and Manager:**: Merit Karise, Kuressaare Regional Training Centre, design department merit.karise@ametikool.ee

**Head Pedagogical Consultant:** PhD Jaakko Turkka, University of Helsinki, LUMA Centre jaakko.turkka@helsinki.fi

**Production Manager and Lead Developer:** Kristjan Jansen, Kuressaare Regional Training Centre, design department kristjan.jansen@gmail.com.

---

| padding: 0

<f-footer />
