
<f-logo />

<big style="line-height: 1.75em; margin-top: var(--base4); display: block;"><big>DesignSTEM is an education initiative that creates immersive experiences for future learning. We help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The projects are based our <f-sidebar size="half" src="../pedagogy.md"><a href="#">5E pedagogical framework</a></f-sidebar> and powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework.</big></big>

-

<f-sheet
id="10bZyw9SpnslEKgQu-cqGxrJfuCCd9e8a-mly2J_ul_E"
v-slot="{ value: projects }"
>

<div>

### Design

<f-tags set="dt" type="designtags" :projects="projects.filter(p => p.type === 'progress')" />

### STEM

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
  <f-image-card
    v-for="(p,i) in projects.filter(p => p.type === 'progress')"
    :src="p.image" :key="i"
    :style="{ filter: isActive(p, get('dt'), get('st')) ? '' : 'brightness(10%)'}"
  >
    <h3>{{ p.title }}</h3>
    <p style="padding-right: 33%; opacity: 0.85"> {{ p.desc}}</p>
    <f-about :project="p" />
  </f-image-card>
</f-grid>
</f-theme>

</f-sheet>

---

| gap: 0 var(--base10)
| rows: auto 1fr
| 1 1 1 1 1 1 1
| 2 2 2 2 3 3 3

# Team

-

<big style="line-height: 1.75em; margin-top: var(--base4); display: block;"><big>We are educators, teachers, designers and engineers from 9 countries around Europe. We work in local community colleges all the way up to renonwed universities, with students from all ages and walks of life.</big></big>

-

<div style="height: 100px">

<p/>

### {{ get('team', { name: '', bio: '' }).name }}

{{ get('team', { name: '', bio: '' }).bio.slice(0,200) }}

</div>

---

| padding: 0

<f-team @team="team => set('team', team)" />

---

| rows: auto 1fr
| 1 1 1
| 2 3 4

## Contact

<p />

-

#### Project Initiator and Manager

Merit Karise, Kuressaare Regional Training Centre, design department 

merit.karise@ametikool.ee

-

#### Head Pedagogical Consultant 

PhD Jaakko Turkka, University of Helsinki, LUMA Centre

jaakko.turkka@helsinki.fi

-

#### Production Manager and Lead Developer

Kristjan Jansen, Kuressaare Regional Training Centre, design department 

kristjan.jansen@gmail.com.

---

| padding: 0

 <f-footer style="--yellow: var(--lightgray); --border-width: 0" />
