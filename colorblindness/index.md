
| section: cb-start
| theme: dark
| background: './images/colorblind-subway.png'
| tint: 0.9
| rows: 2fr 1fr 1fr
| 1
| 2
| 3 


<div style="padding-top:20vh;">

# <big>Colour Vision Deficiency & <br />Accessibility</big>

</div>

-

#### How to design information for people whose colour perception is impaired.

-

<!-- <f-embed src="./menu.md" /> -->

<f-next-button title="Let's start" style="margin: var(--base8) 0;" />






<!-- <div style="opacity:0.2; margin-top:50vh;">
<button v-on:click="send('goto', 'cbSimulator')">CB SIMULATOR</button> 
<button v-on:click="send('goto','3properties')" >3 properties</button> 
<button v-on:click="send('goto','shampoo')">Shampoo</button>
<button v-on:click="send('goto','task1')">Task 1</button>
<button v-on:click="send('goto','complementary')">Color harmonies</button>
<button v-on:click="send('goto','task2')">Task 2</button>
<button v-on:click="send('goto','contrast')">Contrast</button>
<button v-on:click="send('goto','palettes')">Palettes</button>
</div>


</div> -->



<!-- <f-notes>

<summary>Teachers note</summary>

#### Aim

The students’ awareness should be raised for the problems people with color vision deficiency have to face in their everyday life. They should realize that it’s not only about the absence of certain colors and therefore being somehow “aesthetically impaired” by seeing less colors. Instead they should experience that not being able to see all colors can have a serious impact, because people might get the wrong information or no information at all.

</f-notes> -->


<!-- <f-sidebar title="Menu" src="./menu.md" /> -->

---















| section: cb-explore-cb
| rows: auto
| gap: 3vmin
| 1 2
| 3 2


# Color blindness

<div v-if="get('revealX') < 75">

~This is an example, how a color vision deficient person (with protanopia, i.e. red blindness) could see tomatoes.~ 
~Actually there is **<span style="color:var(--red)">only one red tomato</span>** in this picture~

<f-inline>

# 🤔

~**Look at the tomatoes and try to guess which one of the tomatoes is already ripe, red and therefore edible.**~

</f-inline>

<button @click="()=>{set('revealX', 80); set('revealLocked', false);}" v-if="get('revealX') < 70">Check your answer</button>

</div>

<div v-if="get('revealX') > 75">

  ~**Did you guess right? If you picked the right tomato, congratulations!**~
  
  <f-inline>
  
   # 🤢
  
  > ~<small>For color deficient people choosing the wrong tomatoes can have serious consequences for their health, since unripe tomatoes are poisonous and can cause nausea and vomiting.</small>~

  </f-inline>

</div>

-

<ColorblindnessJuxtapose :imageUrl="'images/tomatoes-test.jpg'" :revealed="get('revealX',0)" :locked="get('revealLocked', true)" :juxtId="'compare'" :upload="false" style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)" />

<small v-if="get('revealX') > 75">~*BTW, you can also drag or click on the image to compare protanopia vs "normal" seeing*~</small>

-

<f-next-button title="Next: go outside!" v-if="get('revealX') > 75" />

<f-notes>
  
  <summary>Teachers note</summary>
  
  #### Aim

  ~Students explore which parts of their everyday life might cause problems for color vision deficient people. Therefore, we raise awareness for the need to also keep accessibility in mind when designing products which contain important information, which all people should be able to access.~

</f-notes>





---

| id: cbSafari
| gap: 0
| padding: 0
| 1 2
| 3 2
| rows: auto 25vh

<section style="padding:var(--content-padding);">

  <!-- <div> -->
  
  <!-- ##### EXPLORE -->
  # <f-icon :icon="'Activity'" :size="'large'" /> Photo safari

  <p />

  ~Take a digital camera, e.g. the camera of your mobile phone, and go on a photo safari of your everyday life.~

  ~**Take pictures of objects, packagings, posters, signs, magazines, websites, texts etc. that you come across throughout your day. Only choose things which convey information.**~  
  <!-- </div> -->

</section>

-

<f-image src="images/explore-go-outside.jpg" />

-

<section style="padding:var(--content-padding);">
  <f-next-button title="Analyze your photos" />
</section>

























<!-- 

 SSSSSS    IIIIIII    M     M    U     U    L           AAAA     TTTTTTT     OOOOO     RRRRRR 
S             I       M M  MM    U     U    L          A    A       T       O     O    R     R
 SSSSS        I       M  M  M    U     U    L          A    A       T       O     O    R     R
      S       I       M     M    U     U    L          AAAAAA       T       O     O    RRRRRR 
SSSSSS     IIIIIII    M     M     UUUUU     LLLLLLL    A    A       T        OOOOO     R    R

 -->








---

| id: cbSimulator
| rows: auto
| cols: 2fr 3fr
| 1 2
| 3 2



# Analyze images

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

~Find out if any information on your pictures **get lost for colorblind people**. Does it concern important information? Would it impair the ability to understand the meaning in part or completely?~


<f-next-button style="margin:var(--base4) 0" />







---










| rows: auto
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 4



# Analyze results

-

~Now that you found out about possible weak spots in the color design of objects in your everyday life, have a closer look at it:~

-

1. ~Find out what the main problem is regarding the color scheme.~
2. ~Phrase a hypothesis on how this problem could be solved.~
3. ~Are there also weak spots that can impair people with full color vision? In which way are they different from the other weak spots?~

-

<f-next-button />








---

| rows: auto
| 1 1
| 2 3
| 4 4

# Learning stations

-

~Caring about high accessibility of information in your design products is important. In the following learning stations you can find impulses and tasks which should enable you to get the skills to optimize your design products. 
You can work through the stations in the given order which is recommended if you are a beginner. If you are already familiar with a certain topic, you can directly navigate to one that is new for you. Throughout the following pages, you can switch to other learning stations via the burger menu in the top left corner~

-


- ~<a href="#" v-on:click="goto('cb-accessibility')">Accessibility</a>~
- ~<a href="#" v-on:click="goto('cb-the-eye')">The eye</a>~
- ~<a href="#" v-on:click="goto('cb-cvd')">Color vision deficiency</a>~
- ~<a href="#" v-on:click="goto('cb-color-mixing')">Subtractive and additive color mixing</a>~
- ~<a href="#" v-on:click="goto('cb-color-models')">Three dimensions of color (color space models)</a>~
- ~<a href="#" v-on:click="goto('cb-contrast')">Color contrast and color harmony theory</a>~
- ~<a href="#" v-on:click="goto('cb-palettes')">Design rules for creating color palettes</a>~

-

<f-next-button style="margin:6vh 0" title="Next: Accessibility" />

<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Aim 
  In order to know how to design products/information using color (color combinations), the students need to gather knowledge about different concepts, that influence whether a color combination works for colorblind people or not.
  This phase should focus on making sure that the students end up with the correct information (so not too experimental, but mostly informative).
  The students should do all of the working stations, if they are still beginners. But if they already know about certain topics, they may just do the tasks for each learning station for repetition, or they can even skip them completely.
  
  <br>
  
  ### Learning journal
  From now on, you could add a learning journal, in which the students should not only write down what they've learned, but they can also add screenshots of their results for future reference. You could also use it at the end of the project, for the students to reflect on their learning process on a meta level.

</f-notes>










---

| id: cb-accessibility
| section: cb-accessibility
| rows: auto
| 1 3
| 2 3
| 4 3


# Accessibility

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













