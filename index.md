| gap: var(--base10)

<f-logo />

<big style="line-height: 1.75em; margin-top: var(--base4); display: block;"><big>DesignSTEM is an open source, free, no-sign-in platform designed for creating, adapting and sharing interactive, user friendly, attractive e-learning objects for the integrated education of design and STEM. The sample projects are based on <f-sidebar size="half" src="./pedagogy.md"><a href="#">5E pedagogical framework</a></f-sidebar> and powered by <a href="https://designstem.github.io/fachwerk" target="_blank">Fachwerk</a> web framework.<br><br>Start you own project by <a href="https://designstem.github.io/fachwerk/docs/#/start-a-new-project">following this tutorial</a>.</big></big>

-

<f-sheet
id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
v-slot="{ value: projects }"
>

<div>

<f-inline>
<h3>Design keywords</h3>
<button v-if="get('dt')" class="quaternary"@click="set('dt',null)">Show all</button>
</f-inline>

<f-tags set="dt" type="designtags" :projects="projects.filter(p => p.type === 'progress')" />

<p /><br>

<f-inline>
<h3>STEM keywords</h3>
<button v-if="get('st')" class="quaternary"@click="set('st',null)">Show all</button>
</f-inline>

<f-tags set="st" type="stemtags" :projects="projects.filter(p => p.type === 'progress')" />

</div>

</f-sheet>


---

| padding: 0

<f-sheet
  id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
  v-slot="{ value: projects }"
>

<f-theme theme="dark">
<f-grid cols="1fr 1fr 1fr 1fr" gap="0">
  <a
    v-for="(p,i) in projects.filter(p => p.type === 'progress')"
    :key="i"
    :href="'./' + p.scenario"
    style="border: 0"
  >
  <f-image-card
    :src="p.image" 
    :style="{ filter: isActive(p, get('dt'), get('st')) ? '' : 'brightness(10%)'}"
  >
    <h3>{{ p.title }}</h3>
    <p style="padding-right: 33%; opacity: 0.85"> {{ p.desc}}</p>
    <f-about :project="p" />
  </f-image-card>
  </a>
</f-grid>
</f-theme>

</f-sheet>

---

| gap: 0 var(--base10)
| cols: 2fr 1fr
| 1 1
| 2 3


# Team

-

<big style="line-height: 1.75em; margin-top: var(--base4); display: block;"><big>We are educators, teachers, designers and engineers from Estonia, Finland, Germany, Greece, Italy, The Netherlands, Portugal, Slovenia, and United Kingdom. We made DesignSTEM for ourselves and for the teachers in the whole world.<!-- We work in local community colleges all the way up to renonwed universities, with students from all ages and walks of life.--></big></big>

-



---

| padding: 0

<p />

<div class="bio">

  ### {{ get('team', { name: '', bio: '' }).name }}

  {{ get('team', { name: '', bio: '' }).bio.slice(0,200) }}
    
</div>

<f-team @team="team => set('team', team)" />

---

| rows: auto 1fr
| 1 1 1
| 2 3 4

## Contact

<p />

-

#### Project Initiator and Manager

Merit Karise, Kuressaare Regional Training Centre (Estonia), design department 

merit.karise@ametikool.ee

-

#### Head Pedagogical Consultant 

PhD Jaakko Turkka, University of Helsinki (Finland), LUMA Centre

jaakko.turkka@helsinki.fi

-

#### Production Manager and Lead Developer

Kristjan Jansen, Kuressaare Regional Training Centre (Estonia), design department 

kristjan.jansen@gmail.com.

---

| padding: 0

 <f-footer style="margin: calc(var(--base) * 12) var(--base4) 0 var(--base4); --primary: var(--gray); --yellow: none; --border-width: 0" />
