| chapter: Introduction
| section: First page
| theme: dark
| style: background-position: 50% 50%;
| background: './images/colorblind-subway.png'
| tint: 0.85
| rows: 1fr auto
| 1



<div style="padding-top:16vh;">

<big>

# Color Vision Deficiency<br />& Accessi&shy;bility

</big>

</div>
<br>

~How to design information for people whose color perception is impaired.~

<br>

<f-next-button title="START" />




<f-notes>

<summary>Teachers note</summary>

#### Aim

This workshop aimes to raise the students' awareness for the problems people with color vision deficiency have to face in their everyday life. The students should realize that it’s not only about the absence of certain colors and therefore being somehow “aesthetically impaired” by seeing less colors. Instead they should experience that not being able to see all colors can have a serious impact, because people might get the wrong information or no information at all. Further, especially design students should learn how to choose color schemes so that even people with CVD can access information easily.

</f-notes>


<!-- <f-sidebar title="Menu" src="./menu.md" /> -->




---

| rows: 1fr auto
| 1 2
| 3 2



## Read first!


~Before you will dive into the workshop, in order to improve your learning experience, we recommend the following:~

<br>

1. ~**Keep a journal**, where you write down all the results to the tasks and your insights. This journal can also be digital (like a *.doc file*), so you can also add screenshots in between and you will have a reference/guideline for the final task of this workshop.~
2. ~**Never skip tasks!** Follow the tasks in a chronological order and don't skip any in order to get through faster. There is one exception: In the middle of the workshop, there will be a learning station setting, so if you already know about a certain topic, it's ok to skip it.~

<br>

~Quickly clicking through the pages, won't give you insight, because **most of what you will learn in here is through testing (and sometimes failing), through your own experience and conclusions, and not by just reading ready-made information**~.

<br>

<f-inline>

# 😉

> This being said, we hope you will use this workshop for your own and other people's benefit. **And sometimes in between, you are even allowed to enjoy it.**

</f-inline>


-

<f-image src="./images/cvd_stop.jpg" style="height:100%; background-position:center; min-height:50vh;" />

-

<f-next-button title="Next: Let's start!" />


<f-notes>

<summary>Teachers note</summary>

#### Journal

Please, encourage your students to keep a journal. Learning about color design is often not something where you have straight facts, but where you need to discuss and share ideas, in order to figure out what works best.
Maybe you could provide them the following questions/tasks:

1. Start a new chapter for each new topic.
2. Write down all the facts, that you might forget about, but that seem important, so that you can look them up later (for the final task).
3. When there are tasks, keep notes of your results (also of your intermediate results), so that you can see your progress or can go back to a result if necessary. If you keep a digital journal, you can add screenshots.
4. At the end of each chapter, write some lines on "These are my new insights". Maybe something that surprised you or was new to you. Something that you find fascinating.

Of course you can add further questions and tasks for your students or adapt these tasks to your students' level.

</f-notes>






---









| section: What is CVD?
| rows: 1fr auto
| gap: 3vmin
| 1 2
| 3 2


## Pick one!

<div v-if="get('revealX') < 75">

~This is an example of how a color vision deficient person (with protanopia, i.e. red blindness) would see tomatoes.~ 
~Actually, in this picture there is **<span style="color:var(--red)">only one red tomato</span>**.~

<f-inline>

# 🤔

~**Look at the tomatoes and try to guess which one of them is already ripe, red and therefore edible.**~

</f-inline>

<button @click="()=>{set('revealX', 80); set('revealLocked', false);}" v-if="get('revealX') < 70">Check your answer</button>

</div>

<div v-if="get('revealX') > 75">

  ~**Did you guess right? If you picked the right one, congratulations!**~
  
  <f-inline>
  
   # 🤢
  
  > ~<small>For color vision deficient people, choosing the wrong tomatoes can have serious consequences for their health, since unripe tomatoes are poisonous and can cause nausea and vomiting.</small>~

  </f-inline>

</div>

<!-- tomatoes-test -->
-

<ColorblindnessJuxtapose :imageUrl="'images/color_blindness_accessibility_0.jpg'" :revealed="get('revealX',0)" :locked="get('revealLocked', true)" :juxtId="'compare'" :upload="false" style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)" />

<small v-if="get('revealX') > 75">~*BTW, you can also drag or click on the image to compare protanopia vs "normal" seeing*~</small>

-

<f-next-button />



---






| rows: auto
| 1 2
| 1 2
| 3 3


## More than tomatoes

<!-- <div v-if="get('revealX') < 75"> -->

~**So what?! Is it that bad if a person eats a green tomato once in a while?**~
~No, you're right, only if a person eats about 300 grams all at once. And who would want to eat 300g of bitter tasting tomatoes?!~
~Tomatoes are only one example for the problems people with Color Vision Deficiency (hereafter referred to as CVD) face on a daily basis.~

<f-inline>

# 🔭
  
~**In this workshop, you are going to explore in which way people with CVD are affected and what you need to know to make their lives better.**~

</f-inline>

~Step by step, you will not only find out about the biological background of Color Vision Deficiencies, but also learn all about creating color schemes for people who cannot see all colors.~
~**This workshop is for both, STEM and Design students.** At a later point, you will be able to choose a path connected to your field. But first, lets go outside and explore our daily surroundings to get a better understanding of how color vision deficiencies affect lives.~ 

-

<f-image src="./images/color_blindness_accessibility_21.jpg" style="height:100%; background-position:center; min-height:50vh;" />

-

<f-next-button title="Next: Go outside!" />

---







| section: Photo safari
| id: cb-safari
| gap: 0
| padding: 0
| 1 2
| 3 2
| rows: 1fr auto

<section style="padding:var(--content-padding);">

  <!-- <div> -->
  
  <!-- ##### EXPLORE -->
  ## <f-icon :icon="'Activity'" :size="'large'" /> Photo safari

  <p />

  ~Take a digital camera, e.g. the camera of your mobile phone, and go on a photo safari of your everyday life.~

  ~**Take at least five pictures** of objects, packagings, posters, signs, magazines, websites, texts etc. that you come across throughout your day, where color is used in plenty. Only choose items which convey information.~  
  
  ~**You will need the pictures for the next task. So don't skip it!**~🧐
  <!-- </div> -->

</section>

-

<f-image src="images/explore-go-outside.jpg" />

-

<section style="padding:var(--content-padding);">
  <f-next-button title="Analyze your photos" />
</section>


<f-notes>
  <summary>Teachers note</summary>
  
  #### Aim

  ~Students explore which parts of their everyday life might cause problems for color vision deficient people. Therefore, we raise awareness for the need to also keep accessibility in mind when designing products which contain important information, that all people should be able to access.~
  ~After the photo safari, students should get a chance to thoroughly examine what they found. In this phase, you, as a teacher, should stand back. Maybe it would be helpful if two students would work together, share their results and discuss them.~

</f-notes>











---

| section: Apply CVD to your photos
| id: cb-simulate
| rows: auto
| cols: 2fr 3fr
| 1 2
| 3 2



## Analyze images

<p />

~<f-arrow-icon rotation="90" /> Simulate color vision deficiency by applying different filters to the image.~
<p />

<f-card :title="get('cbType', 'protanopia') == 'protanopia' ? 'Simulating Protanopia' : 'Simulate Protanopia'"   background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType', 'protanopia') == 'protanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native.stop="set('cbType', 'protanopia')">

<p v-if="get('cbType', 'protanopia') == 'protanopia'" style="font-size:100%;">reduced sensitivity to <b>RED</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'deuteranopia' ? 'Simulating Deuteranopia' : 'Simulate Deuteranopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType') == 'deuteranopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native.stop="set('cbType', 'deuteranopia')" >

<p v-if="get('cbType') == 'deuteranopia'" style="font-size:100%;">reduced sensitivity to <b>GREEN</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'tritanopia' ? ' Simulating Tritanopia' : 'Simulate Tritanopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType') == 'tritanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native.stop="set('cbType', 'tritanopia')">

<p v-if="get('cbType') == 'tritanopia'" style="font-size:100%">reduced sensitivity to <b>BLUE</b> light</p>

</f-card>

-

<div style="position:sticky; top:var(--content-padding)">

<p style="--base:8px;"><i>Drag the red triangular handlers or click on image to see the difference</i></p>

<ColorblindnessJuxtapose 
  :imageUrl="'images/colorblind-subway.png'" 
  :revealed="25" 
  :locked="false"
  :cbType="get('cbType', 'protanopia')"
  style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)"
/>

</div>

-
<f-inline>
  
# <f-note-icon />

~Find out if any information on your pictures get lost for colorblind people. Does it concern important information? Would it impair the ability to understand the meaning in part or completely? **Take notes!**~

</f-inline>
<f-next-button style="margin:var(--base4) 0" />

---








| id: cb-analyze
| rows: 1fr auto
| cols: 2fr 3fr
| 1 3
| 2 3

## Analyze results

-

~Now that you found out about possible weak spots in the color design of objects in your everyday life, have a closer look at it:~

1. ~Find out what the main problem is regarding the color scheme.~
2. ~Phrase a hypothesis on how this problem could be solved.~
3. ~Are there also weak spots that can impair people with full color vision? In which way are they different from the other weak spots?~

<br>

<f-next-button />

-

<f-image src="images/cvd_glasses.jpg" />


<f-notes>
  <summary>Teachers note</summary>
  
  #### Hint

  ~After this phase, you as a teacher, are in the focus again and should **lead a discussion in class**. Let the students present what they found out, collect results, come up with first ideas/explanations, that the students will test in the learning station setting..~ 
 ~This phase is crucial for the learning process, so don't skip it. After the students explored their daily surroundings, they should have a chance to form some kind of conclusion and check with their classmates. At the end of the whole workshop, then, they will have the chance to review their first assumptions and therefore hopefully see their increase of knowledge for themselves.~

</f-notes>

---




| chapter: Learning stations
| section: Learning stations
| theme: dark
| style: background-position: 50% 50%;
| background: './images/cvd_learningstations.jpg'
| tint: 0.85
| rows: 1fr auto
| 1 1
| 2 3


## Let's find out more

-

~Caring about high accessibility of information in your design products is crucial. And color is an important part of design.~ 
~In the following **learning stations** you can find impulses and tasks which &ndash; in the end &ndash; should enable you to get the skills to optimize your design products. STEM students could use this for example when you choose a color scheme for diagrams.~ 

### ***<f-arrow-icon /> How to use the learning stations***
~You can **work through the stations in the given order** (which is recommended if you are a beginner). If you are already familiar with a certain topic, you can directly navigate to one that is new for you. Throughout the following pages, you can switch to other learning stations via the burger menu in the top left corner.~
***But don't cheat and skip ahead, before you are not sure that you know everything!*** 🧐

<br>

<f-next-button style="margin:6vh 0" title="Next: Accessibility" />

-


- ~<a href="#" v-on:click="goto('cb-accessibility')">Accessibility</a>~
- ~<a href="#" v-on:click="goto('cb-the-eye')">The eye</a>~
- ~<a href="#" v-on:click="goto('cb-cvd1')">Color vision deficiency</a>~
- ~<a href="#" v-on:click="goto('cb-color-mixing')">Light & Color (color mixing)</a>~
- ~<a href="#" v-on:click="goto('cb-3-properties')">Three dimensions of color</a>~
- ~<a href="#" v-on:click="goto('cb-contrast-and-harmony')">Color contrast and color harmony theory</a>~
- ~<a href="#" v-on:click="goto('cb-palettes')">Design rules for creating color palettes</a>~


<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Aim 
  ~In order to know how to design products/information using color (color combinations), the students need to gather knowledge about different concepts, that influence whether a color combination works for colorblind people or not. This also includes the biological background of color vision deficiency.~
  ~For design teachers, we kept the biology part as simple as possible (so don't be afraid of the new topic), but STEM teachers are incouraged to add more information themselves, if they want to dive deeper into the topics "eye" or "CVD".~
  ~**This phase should focus on making sure that the students end up with the correct information** (so not too experimental, but mostly informative).
   ~The students should do all of the working stations, if they are still beginners. But if they already know about certain topics, they may just do the tasks for each learning station for repetition, or they can even skip them completely. You, as their teacher, make the decision based on their level.~
  
  ### Your role as a teacher
   ~Many learning stations have tasks where students can check concepts with e-tools, to verify what they read/learned. So in between it might be necessary for the teacher to provide help or the opportunity to discuss/share results.~
 
  ### Learning journal
  ~From now on, keeping a learning journal is not only recommended, but absolutely necessary, because the students will come across many new concepts, that they need to not only find out about, but also gather their insight somewhere. Encourage them to take screenshots while they work on tasks, so not only of the final results. This should help them to go back to a result if need be. Also, they might need these screenshots for future reference and group discussions in class.~
  ~You could also use it at the end of the project, for the students to reflect on their learning process on a meta level.~

</f-notes>























---

| chapter: Accessibility
| section: What is accessibility?
| id: cb-accessibility
| rows: auto
| 1 3
| 2 3
| 4 3


## Accessibility

-

#### Tasks

1. ~What do you understand by “accessibility”? Have you ever come across that term? In which context have you heard about it?~
2. ~Go to https://en.wikipedia.org/wiki/Accessibility and find out about the definition.~
3. ~Get an overview of the areas in which we need to improve accessibility.~
4. ~Further, find out about the difference between “accessibility” and “usability”.~

-

<f-image src="images/explain-yellow-door.jpg" style="min-height:80vh; background-position:50% 15%;" />

-

<f-next-button />
