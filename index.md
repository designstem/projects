| padding: 0
| height: auto
| padding: var(--base8) var(--base8) 0 var(--base8) 

## &nbsp;

# <big><big><big><span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup></big></big></big>

<big>

DesignSTEM is an education initiative that creates immersive experiences for future learning. We help young designers and craftsmen learn STEM topics in fun, visual and engaging way. The scenarios are powered by <a href="https://designstem.github.io/fachwerk">Fachwerk</a> web framework.

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
    <f-tag v-for="t in unique(flatten(projects.filter(p => ['featured','progress','experiment','preparation'].indexOf(p.type) !== -1).map(p => p.designtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" style="cursor: pointer; background: var(--lightgray);" v-on:click.native="set('dt', t == get('dt') ? '' : t)" />
  </div>
</div>

#### &nbsp;

<div>
  <caption>STEM topics</caption>
  <div style="display: flex; flex-wrap: wrap;">
    <f-tag v-for="t in unique(flatten(projects.filter(p => ['featured','progress','experiment','preparation'].indexOf(p.type) !== -1).map(p => p.stemtags.split(',').map(t => t.trim())))).filter(t => t)" v-html="t" style="cursor: pointer; background: var(--lightergray);" v-on:click.native="set('st', t == get('st') ? '' : t)" />
  </div>
</div>

</div>

</f-sheet>

-

### Projects {{ get('dt') ? 'about ' + get('dt') : '' }} {{ get('st') ? ' + ' + get('st') : '' }} 
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

**Project Manager**: Merit Karise, Kuressaare Regional Trainin Centre, design department merit.karise@ametikool.ee

**Head Pedagogical Consultant:** PhD Jaakko Turkka, University of Helsinki, LUMA Centre jaakko.turkka@helsinki.fi

**Lead Developer:** Kristjan Jansen, Kuressaare Regional Training Centre, design department kristjan.jansen@gmail.com.

---

| background: var(--lightergray)


| 1 2 
| 1 2 
| 3 3 

<a id="pedagogy">
  <h3>Pedagogical Methods and Models</h3>
</a>
<p>

**Integrated studies**

<p />

Integrated studies are a growing part of the modern problem-based learning and learner-centred education. Integrated studies have been shown to increase students’ understanding and retention of information and thereby enhance student’s ability to identify, assess, and adapt learned information to different kinds of problems. Among all above, students have developed a more genuine application of general concepts. Students have shown to have a better overall understanding of global aspects and their interdependencies, along with the development of multiple perspectives. Students have also been reported to have an increased ability to make decisions and think critically and creatively. Finally, integrating studies has been reported to increase students’ academic motivation and awaken a feeling of importance due to being a as a meaningful member of a community.

>DesignSTEM integrates design - developing functional, sustainable and aesthetic goods, services, processes, messages and environments - , and STEM - science, technology, engineering/craft, mathematics.

Integrating design and science education together can spark students’ creativity and give students a chance to express themselves more than with traditional science education. Integration of design and STEM into DesignSTEM can increase understanding of technology and motivate students who normally don’t enjoy studying STEM subjects. Integration of artistic and scientific aspects has been shown to improve students’ cognitive skills and to help students to visualise scientific models better than without integration.

With DesignSTEM students can develop their personality, which is particularly important in younger students and students that are uncertain about their capability to study subjects in question. Integrating studies helps students to improve their social skills better than traditional teaching.

**Integration and relevance**

Integrating subjects together provides a highly authentic learning environment, which is shown to provide maximum relevance to the student. Relevance can be broken down into three main dimensions: individual, societal and vocational relevance. The dimension of individual relevance enables the education to match learners’ curiosity and interests, equipping students with skills they need to manage their everyday life today and in the future. The societal dimension focuses on preparing students to become responsible participants of the society they live in. This includes developing social skills simultaneously with skills to understand the interdepence of learned knowledge and society, enabling societal participation and even the ability to contribute to society’s sustainable development. The vocational dimension has the important role of giving the student knowledge of possible future professions and careers. The vocational dimension improves students possibilities to prepare for future academic or vocational training, as well as making more career opportunities possible for the student.

<img src="./images/helsinkiworld.png" style= "width:100%">

-

<img src="./images/kureworld.png" style= "width:100%">

Relevance has been shown to increase academic motivation and moreover students have been reported to study to understand subjects instead of studying to get good grades. Due to above said, students have reported to feel less judged and fear of making mistakes has decreased massively. For DesignSTEM this means that relevant teaching supports students’ skills development, their competencies to be part of the changing society and improves their vocational orientation as well as career possibilities.

**The 5 E’s model**

The best-case scenario is a teaching event, which has the ability to merge all the relativity (relevance?) dimensions into the learning process. DesignSTEM makes teaching relevant by using the 5 E’s model. The 5 E’s is an instructional model that has roots in constructivism and it can be used with students of all ages. Each of the 5 E's describes a phase in the learning process: engage, explore, explain, elaborate, and evaluate. 

The engage phase starts the 5 E’s. The engaging activity should start making connections between existing knowledge and the new knowledge. The activity should also spark interest and motivation in students and get them mentally engaged in the subject. During the explore phase students actively explore the concepts and skills they’re going to need. Explore phase provides students with a base level of knowledge and experiences while they explore their environment and work with given materials. The explain phase gives students skills to explain the concepts they have been exploring. During explain phase, students verbalize their conceptual understanding and gives time for the teachers to introduce formal terms, definitions, and explanations for used concepts or processes. In the elaborate phase students develop a deeper understanding of concepts and have time to become routined in the use of their skills through new experiences and tasks. The last phase, evaluate, encourages the students to reflect their learning process which is endorsed by the teacher’s evaluation of students’ development.

In studies the 5 E’s model has shown good results in students learning outcomes. Students in the 5 E’s model have been reported to be active and motivated when it comes to learning. Students have been reported to actively construct the knowledge themselves. Social skills have also been better with these students, because students have increasingly shared their knowledge and experiences with each other. In addition, this has made self-assessment continuous. Students have been reported to have less misconceptions and can integrate and infer their knowledge more easily than students in lecture-based classes. 5E’s model can improve students’ performance skills better and students have shown more curiosity about the subject in question.

-

<br>

<p>

**Reference list**

<small>
Land, Michelle H. "Full STEAM ahead: The benefits of integrating the arts into STEM." Procedia Computer Science 20 (2013): 547-552.
Miller, John P. Holistic Learning: A Teacher's Guide to Integrated Studies. Ontario Institute for Studies in Education, 252 Bloor St. West, Toronto, Canada M5S 1V6, (1990): 5-25.
Erwin, Heather E. "Full STEAM ahead in physical education." (2017): 3-4.
Madden, Margaret E., et al. "Rethinking STEM education: An interdisciplinary STEAM curriculum." Procedia Computer Science 20 (2013): 541-546.
Eilks, Ingo, and Avi Hofstein, eds. Relevant chemistry education: From theory to practice. Springer, 2015.
Stuckey, Marc, et al. "The meaning of ‘relevance’in science education and its implications for the science curriculum." Studies in Science Education 49.1 (2013): 1-34.
Stuckey, Marc, and Ingo Eilks. "Increasing student motivation and the perception of chemistry's relevance in the classroom by learning about tattooing from a chemical and societal view." Chemistry Education Research and Practice 15.2 (2014): 156-167.
Garcia, Catalina M. Comparing the 5Es and traditional approach to teaching evolution in a hispanic middle school science classroom. California State University, Fullerton, 2005.
Ceylan, Eren. "Effects of 5E learning cycle model on understanding of state of matter and solubility concepts." Doctor Thesis, Orta Dogu Teknik University, Institute of Science and Technology, Ankara (2008).
Uzunöz, Abdulkadir. "The effects of the activities of current textbook and 5 E model on the attitude of the students: Sample of" the global effects of natural resources unit"." Educational Research and Reviews 6.13 (2011): 778.
</small>

</p>

---

| padding: 0

<f-footer />
