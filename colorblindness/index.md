
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

---













| section: cb-the-eye
| rows: auto
| cols: 2fr 3fr
| 1 1
| 2 3
| 4 3


<!-- ##### EXPLAIN  -->
# The eye

-

~When it comes to color vision, the **retina** is the part of the eye which is important.~
~It is at the back of the eye and contains two types of photoreceptor cells which detect light: **rods and cones**.~


-

<figure style="width:100%; height:100%; display:flex; justify-content:center; align-items: flex-start; margin: 0;">
  <img src="./images/eye.svg" />
</figure>

-

<f-next-button title="Rods and cones" />

---














| rows: auto
| height: 100vh
| 1 2
| 3 2


<!-- ##### EXPLAIN  -->

##### The eye
# Rods and cones

<!-- <f-hr style="margin:var(--base6) 0" /> -->

#### Task

1. ~Read through the text and find out about the difference between rods and cones.~

<details>
	<summary>Click here to see the text</summary>
  
~Rods and cones contain different light-sensitive pigments which absorb light and undergo a chemical change (“bleaching”) which releases energy. This results in increased permeability of photoreceptor membranes to sodium ions.~

~Sodium ions diffuse into the photoreceptors, creating a generator potential. If a threshold level is reached, an action potential is created in a nearby bipolar neuron. This connects to neurons in the optic nerve which carry impulses to the brain.~

~**Rods** are located in the peripheral parts of the retina and detect light, but not the color of light.~
~Rods are sensitive to dim light. The photosensitive pigment in rods (rhodopsin) bleaches at low light intensity.~

~**Cones** are found closely packed in the fovea. They contain the photosensitive pigment iodopsin.~
~There are three types which are sensitive to red, green and blue lights (see also RGB color model).~
~One cone joins one bipolar neuron, so that, compared to rods, they are less sensitive at low light intensity.~ 
~That’s why you can’t see colors in the dark.~
</details>

2. ~You learned that cones are responsible for color vision. There are three different types of cones. Find out how these three cones work together to create color perception. You can find more information in the article about color vision on wikipedia.org:
https://en.wikipedia.org/wiki/Color_vision~

3. ~In the wikipedia article it says *Color is not a property of electromagnetic radiation, but a feature of visual perception by an observer*. Find out what this means (see the chapter on “Subjectivity of color perception”).~


-

<f-image src="./images/color_blindness_accessibility_6.jpg"  />

<!-- <figure style="width:100%; height:100vh; display:flex; justify-content:center; align-items: center; margin: 0; position:sticky; top: 0;">
  <img src="./images/color_blindness_accessibility_6.jpg" />
</figure> -->

-

<f-next-button />

---











<mark> Here we need to add Richards rod/cones mapping. Maybe we can add it to the learning station setting as an extra link? Not as a mandatory page. In the google slide it's in the back in the Elaborate phase, but it will fit better to the learning station, since it's not really and elaborate task.
</mark>

&nbsp;

### Oliver:

**I've added the mapping simulator to the next slide. But maybe it is better to open it in separate window? Anyway, we need to add some introduction or explanation what it is and how to use it.**

&nbsp;

<f-next-button title="rod/cones mapping" />















---

| theme: dark
| padding: 0



<Mapper />

























<!-- 

M     M    IIIIIII    X     X    IIIIIII    N     N     GGGGG
MM   MM       I        X   X        I       NN    N    G      
M  M  M       I          X          I       N  N  N    G   GGG
M     M       I        X   X        I       N    NN    G     G
M     M    IIIIIII    X     X    IIIIIII    N     N     GGGGG 

-->









---

| section: cb-color-mixing
| theme: light
| rows: auto
| 1 2

<!-- ##### EXPLAIN  -->

##### Color mixing
# Light and color

<!-- <f-hr style="margin:var(--base6) 0" /> -->

~Color is derived from light, either natural or artificial. With little light, little or no color is present. With a lot of light comes lots of color.~

<br>

#### Task
Go outside or look out of your window before the sun comes up. Experience how you steadily can see more colors while the sun rises and how the intensitiy of the colors changes.
(Alternatively: If you have curtains or shutters, close them and look at the room you are in and at the colors you can see. Then slowly open them and see how the colors of the objects in the room start to change with more light entering).

<br>

~**Our eyes have three color receptor cells or cones: red, green and blue. As a result, all incoming light is reduced to these three colors. All perceived colors are generated by a mixture of these three colors, depending on the intensity of the light. Find out more on the next page.**~

<f-next-button title="Additive Color"  style="margin: var(--base6) 0" />

-

<f-image src="./images/color_blindness_accessibility_20--opt.jpg" style="background-position:50% 50%; min-height: 90vh;" />

<!-- <figure style="width:100%; height:100%; display:flex; justify-content:center; align-items: center; margin: 0;">
  <img src="./images/color_blindness_accessibility_20--opt.jpg" />
</figure> -->








---

| height: 100%
| padding: 0
| gap: 0
| theme: dark
| 1 2

<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN  -->
##### Color mixing
# Additive Color System

~In the Additive Color System, **<span style="color:red;" v-on:mouseover="set('activeCol', 'red')">RED</span>**, **<span style="color:lime;" v-on:mouseover="set('activeCol', 'lime')">GREEN</span>** and **<span style="color:hsl(230, 100%, 70%);" v-on:mouseover="set('activeCol', 'blue')">BLUE</span>** are the primary colors. When all three colors overlap, **WHITE** light is produced.~

#### Task

1. ~Have a look at the RGB Model for additive color mixing and find out about its three secondary colors (which are also the primary colors for the CMY Model, called Subtractive Color System). What are secondary colors?~

2. ~Find out where the RGB Model is used?~

3. ~Complementary colors are opposite of each other and form white light. Find out about the complementary color pairs in the RGB Model.~

<br>

<details>
	<summary>Check your answers - but don't cheat.</summary>
 
**Answer key**
 
1. The three secondary colors are: Magenta (mixed through red and blue light), Cyan (mixed through green and blue light) and yellow (mixed through red and green light).

2. Typical RGB input devices are color TV and video cameras, image scanners and digital cameras. Typical RGB output devices are TV sets of various technologies (CRT, LCD, plasma, OLED, quantum dots…), computer and mobile phone displays, video projectors, multicolor LED displays and large screens such as JumboTron. Color printers, on the other hand are not RGB devices, but subtractive color devices (typically CMYK color model).
If you want to find out about the subtractive color model, see this [wikipedia text on the subtractive color model](https://en.wikipedia.org/wiki/Subtractive_color).

3. Green and Magenta, Blue and Yellow, Red and Cyan.

</details>

&nbsp;

<f-next-button title="RGB Task"  />

</section>

-

<div style="background-color:var(--black); height:100vh; position:sticky; top:0;">

<f-scene responsive>
  
  <f-circle 
    v-for="(c,i) in ['red', 'lime', 'blue']" 
    :key="'add'+i"
    :fill="c" 
    :x="polarx( i*(360/3), 0.7 )"  
    :y="polary( i*(360/3), 0.7 )" 
    :stroke="get('activeCol') == c ? 'white' : 'none'"
    style="mix-blend-mode: screen;"
    
  />

</f-scene>

</div>

---







| cols: 3fr 2fr
| rows: auto
| padding: 0
| 1 2

<section style="padding:var(--content-padding)">

##### Color mixing
# Mix RGB Colors

&nbsp;

#### Task
~**Now that you know about the RGB color system, look at the two colors. They are both made up in parts of red, green and blue.**~

&nbsp;

1. ~In your mind, try to disassemble them into their three color components (red, green and blue). How much red, green and blue would you need to create these colors? A lot? Only little?~

2. ~Take some notes of your assumptions. Test your ideas on the next page.~

&nbsp;

<f-next-button />

</section>

-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:column;">
  <div style="background: rgb( 255 , 0, 255 ); flex: 1 1 50%;"></div>
  <div style="background: rgb( 255 , 201, 53 ); flex: 1 1 50%;"></div>
</div>



<!-- <f-scene responsive width="300" height="200">
<f-box 
      width="6"
      height="4"
      x="0"
      stroke="none"
      :fill="rgb( 255 , 0, 255 )"
    />
 </f-scene>
<f-scene responsive width="300" height="200">
 <f-box 
      width="6"
      height="4"
      x="0"
      stroke="none"
      :fill="rgb( 255 , 201, 53 )"
    />
 </f-scene> -->












---

| rows: auto
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN  -->
##### Color mixing
# Mix RGB Colors

~**Now, check your assumptions by adjusting the RGB controllers so that you receive a color that is as similar as possible to the given example.**~

-

<div>
  <f-scene responsive width="600" height="300">
    <f-box 
      width="6"
      height="12"
      stroke="none"
      x="-2"
      :fill="rgb( get('r1', 0) , get('g1', 0), get('b1', 0) )"
    />
    <f-box 
      width="4"
      height="12"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 0, 255 )"
    />
  </f-scene>
  <f-slider set="r1" from="0" to="255" integer title="R" />
  <f-slider set="g1" from="0" to="255" integer title="G" />
  <f-slider set="b1" from="0" to="255" integer title="B" />
</div>

-

<div>
  <!-- <f-scene width="600" height="300" style="width:100%; height:40vh;"> -->
  <f-scene responsive width="600" height="300">
    <f-box 
      width="6"
      height="12"
      stroke="none"
      x="-2"
      :fill="rgb( get('r2', 0) , get('g2', 0), get('b2', 0) )"
    />
    <f-box 
      width="4"
      height="12"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 201, 53 )"
    />
  </f-scene>
  <f-slider set="r2" from="0" to="255" integer title="R" />
  <f-slider set="g2" from="0" to="255" integer title="G" />
  <f-slider set="b2" from="0" to="255" integer title="B" />
</div>

-

<f-next-button style="margin:var(--base6) 0" />













<!--

333333          PPPPPP     RRRRRR      OOOOO     PPPPPP      SSSSSS
      3         P     P    R     R    O     O    P     P    S      
  3333          P     P    R     R    O     O    P     P     SSSSS 
      3         PPPPPP     RRRRRR     O     O    PPPPPP           S
333333          P          R    R      OOOOO     P          SSSSSS  

-->





---

| id: 3properties
| rows: auto
| cols: 3fr 2fr
| padding: 0
| 1 2


<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN -->
# Three properties of color

<!-- <f-hr style="margin:var(--base6) 0" /> -->

&nbsp;

~When talking about the effect of color, most people only think of its shade. Designing with color means designing with all three properties of color:~

1. ~**HUE**~
2. ~**SATURATION**~
3. ~**BRIGHTNESS**~

~All three of these properties change the effect the color has.~

&nbsp;

#### ~Have a look at these 2 greens~ 👉

~Both are greens, but they have different effects. Most people wouldn’t call the brighter color natural although green often is used to suggest organic, natural themes. Therefore we have to look closely when working with colors and not only judge the color’s effect by its hue.~

<f-next-button style="margin:var(--base6) 0" />

</section>

-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:column;">
  <div style="background: hsl(112,63%,36%); flex: 1 1 50%;"></div>
  <div style="background: hsl(123,100%,51%); flex: 1 1 50%;"></div>
<!-- <f-scene style="display:block; height:100%;" width="400" height="800" class="scene--full-height"> 
  <f-box 
    width="4"
    height="4"
    stroke="none"
    position="0 2"
    :fill="hsl(112,63,36)"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    rotation="0"
    position="0 -2"
    :fill="hsl(123,100,51)"
  />
</f-scene> -->
</div>

---








| padding: 0
| cols: 3fr 2fr
| 1 2


<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN -->
##### Three properties of color
# Hue, saturation, brightness

<!-- <f-hr style="margin:var(--base6) 0" /> -->

&nbsp;

~Have a look at the following colors and find adjectives to describe them.~

&nbsp;

<PolarityQuiz :input="[ 
  ['this','that',1], 
  ['one','another',2], 
  ['this is longer','short',3],
  ['another','yet another',4],
  ['something', 'else', 5]
]" />

&nbsp;

<PolarityQuiz to="12" :input="[ 
  ['this','has',4], 
  ['more','steps',10]
]" />

&nbsp;

<PolarityQuiz to="12" :ticks="false" :input="[ 
  ['this','has',4], 
  ['no','&quot;ticks&quot;',10]
]" />

<!-- <mark> Here we need to add a polarity profile with adjectives - maybe as a slider, so that students can interact and have a basis for their analysis. This slider should also be on the next two pages about brightness and saturation, with the same adjectives. Maybe we can achieve that the positions they chose for the former are left for them to compare with the new choices they make. I will make a scribble and upload it in the image folder on github. </mark> -->


<f-next-button style="margin:var(--base6) 0" />

</section>


-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:row;">
  <div style="flex: 1 1 33%;" :style="{'background' : hsl(340,100,35) }"></div>
  <div style="flex: 1 1 34%;" :style="{'background' : hsl(134, 100, 35) }"></div>
  <div style="flex: 1 1 33%;" :style="{'background' : hsl(247,100,35) }"></div>
</div>

---





















| rows: auto
| cols: 1fr 2fr
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN -->
##### Three properties of color
# Brightness

<!-- <f-hr style="margin:var(--base6) 0" /> -->

-

~Here the brightness of each color is reduced to 50%, which means less light for the same hue.~

~Find adjectives to describe the effect bright colors have in comparison to dark colors of the same hue.~ 

-

<f-scene width="600" height="200" responsive>
  <f-box 
    width="4"
    height="4"
    x="-4"
    stroke="none"
    :fill="hsb2hsl(340,100,67)"
  />
  <f-box 
    width="4"
    height="2"
    x="-4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 340, 100, get('brightness',34) )"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    x="0"
    :fill="hsb2hsl(134, 100, 67)"
  />
  <f-box 
    width="4"
    height="2"
    stroke="none"
    x="0"
    y="-1"
    :fill="hsb2hsl( 134, 100, get('brightness',34) )"
  />
  <f-box 
    width="4"
    height="4"
    x="4"
    stroke="none"
    :fill="hsb2hsl(247, 100, 67)"
  />
  <f-box 
    width="4"
    height="2"
    x="4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 247, 100, get('brightness',34) )"
  />
</f-scene>

<f-slider  to="100" :value="get('brightness', 34)" v-on:input="set('brightness', $event)" title="Adjust brightness" />

-

<f-next-button style="margin:var(--base6) 0" />
















---

| rows: auto
| cols: 1fr 2fr
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN -->
##### Three properties of color
# Saturation

<!-- <f-hr style="margin:var(--base6) 0" /> -->

-

~Next, the **saturation of the colors** is reduced. You can compare this effect to dissolving watercolors in water. Low saturation means less pigment in the water. High saturation means a high degree of pigment dissolved in water. Depending on the brightness of the color, with no saturation you either get a grey hue (light or dark) or even black (no light, no saturation).~

~Describe the different effect low and high saturated colors have, using adjectives.~

-

<f-scene width="600" height="200" responsive>
  <f-box 
    width="4"
    height="4"
    x="-4"
    stroke="none"
    :fill="hsb2hsl(340,100,67)"
  />
  <f-box 
    width="4"
    height="2"
    x="-4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 340, get('saturation',50), 67 )"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    x="0"
    :fill="hsb2hsl(134, 100, 67)"
  />
  <f-box 
    width="4"
    height="2"
    stroke="none"
    x="0"
    y="-1"
    :fill="hsb2hsl( 134, get('saturation',50), 67 )"
  />
  <f-box 
    width="4"
    height="4"
    x="4"
    stroke="none"
    :fill="hsb2hsl(247, 100, 67)"
  />
  <f-box 
    width="4"
    height="2"
    x="4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 247, get('saturation',50), 67 )"
  />
</f-scene>

<f-slider  to="100" :value="get('saturation', 67)" v-on:input="set('saturation', $event)" title="Adjust saturation" />

-

<f-next-button style="margin:var(--base6) 0" />













---

| id: shampoo
| rows: auto
| 1 1 1
| 2 3 4
| 5 5 5

<!-- ##### EXPLAIN -->
<!-- <f-activity-icon size="large" /> -->
# Colors for shampoo brand

-

~Choose a color which could be used as primary color for the following products:~

-

1. ~baby shampoo~ 
2. ~shampoo for men 60+~
3. ~Unisex shampoo~

-

~There is one condition: **all the shampoos smell like apples**~ 

-

<f-next-button title="Shampoo color designer" />

---






| rows: auto
| 1 1 1
| 2 3 4
| 5 5 6

### Shampoo color designer 

<!-- <f-hr style="margin:var(--base4) 0; visibility:hidden;" /> -->

-


<h5>Babies</h5>
<f-scene responsive height="200">
  <f-box 
    width="8"
    height="8"
    stroke="none"
    :fill="hsb2hsl( get('h1'), get('s1'), get('b1') )"
  />
</f-scene>
<f-slider :value="get('h1', 0)" v-on:input="set('h1', $event)" from="0" to="360" integer title="H (hue)" />
<f-slider :value="get('s1', 0)" v-on:input="set('s1', $event)" from="0" to="100" integer title="S (saturation)" />
<f-slider :value="get('b1', 50)" v-on:input="set('b1', $event)" from="0" to="100" integer title="B (brightness)" />

-

<h5>Gentlemen 60+</h5>
<f-scene responsive height="200">
  <f-box 
    width="8"
    height="8"
    stroke="none"
    :fill="hsb2hsl( get('h2') , get('s2'), get('b2') )"
  />
</f-scene>
<f-slider :value="get('h2', 0)" v-on:input="set('h2', $event)" from="0" to="360" integer title="H (hue)" />
<f-slider :value="get('s2', 0)" v-on:input="set('s2', $event)" from="0" to="100" integer title="S (saturation)" />
<f-slider :value="get('b2', 50)" v-on:input="set('b2', $event)" from="0" to="100" integer title="B (brightness)" />

-

<h5>Unisex</h5>
<f-scene responsive height="200">
  <f-box 
    width="8"
    height="8"
    stroke="none"
    :fill="hsb2hsl( get('h3') , get('s3'), get('b3') )"
  />
</f-scene>
<f-slider :value="get('h3', 0)" v-on:input="set('h3', $event)" from="0" to="360" integer title="H (hue)" />
<f-slider :value="get('s3', 0)" v-on:input="set('s3', $event)" from="0" to="100" integer title="S (saturation)" />
<f-slider :value="get('b3', 50)" v-on:input="set('b3', $event)" from="0" to="100" integer title="B (brightness)" />

-

> ~If possible **compare your results** with someone and **explain why** you chose this color regarding the three properties of color.~

-

<f-next-button style="margin:var(--base4) 0;" />