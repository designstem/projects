| section: cb-start
| theme: dark
| height: 100vh
| rows: 1fr auto
| 1 1 1
| 2 2 3

# <big><big>Design for<br>colour blindness</big></big> 

<big>What is <var class="gray">colour blindness</var>?</big>

<big>What is <var class="gray">colour vision deficiency / CVD</var>?</big>

<big>Wait... What is <var class="gray">colour</var>?</big>

<big>How to design for people whose colour perception is impaired?</big>



-

<f-next-button title="Let's start" />

-

<f-notes style="--primary: var(--darkgray)">

### Aim

The students’ awareness should be raised for the problems people with color vision deficiency have to face in their everyday life.

They should realize that it’s not only about the absence of certain colors and therefore being somehow “aesthetically impaired” by seeing less colors.

Instead they should experience that not being able to see all colors can have a serious impact, because people might get the wrong information or no information at all.

</f-notes>











---

| rows: auto
| section: cb-what
| 1 1
| 2 3
| 4 4
| 5 5

<f-inline>

<f-fact-icon size="large" />

# &nbsp;

</f-inline>

-

## Color blindness

~People who are **totally color blind**, can only see things as **black and white** or in shades of gray. But total color blindness is very rare. **Most people, whose color perception is impaired, are color vision deficient**.~

-

## Color Vision Deficiency (CVD)

~People with **color vision deficiency** can see colors, but they have **difficulty differentiating between certain shades** of **reds and greens** or **blues and yellows**. CVD is more common than total color blindness.~

-

<!-- <f-hr /> -->

-

<!-- <f-inline> -->

<div style="text-align:center; padding:0 20vw;">

*On the following pages we try to explain, how exactly does CVD affects vision, what happens in the eye and brain and what designers should know about it.*

<f-next-button title="Next" style="flex:1;" />

</div>



<!-- </f-inline> -->












---

| height: 100vh
| section: cb-explore
| 1 1 2 2 

<!-- ##### EXPLORE -->
# Why should we care?

<p />

<div v-if="get('revealX') < 75">

  <p />

<f-inline>

  ~This is an example, how a color vision deficient person (with protanopia, i.e. red blindness) could see tomatoes.~ 
  ~Actually there is only **<span style="color:var(--red)">one red tomato</span>** in this picture~

</f-inline>

<!-- <f-icon :size="'large'" :icon="'Activity'" style="width:15vw;" /> -->
<f-inline>

# 🤔

~**Look at the tomatoes and try to guess which one of the tomatoes is already ripe, red and therefore edible.**~

</f-inline>


### &nbsp;

<button @click="()=>{set('revealX', 80); set('revealLocked', false);}" v-if="get('revealX') < 70">Check your answer</button>

</div>



<div v-if="get('revealX') > 75">

  <br />
  <br />

  ~**Did you guess right? If you picked the right tomato, congratulations!**~
  
  <f-inline>
  
   # 🤢
  
  > ~For color deficient people choosing the wrong tomatoes can have serious consequences for their health, since unripe tomatoes are poisonous and can cause nausea and vomiting.~

  </f-inline>

  <small>~*BTW, you can also drag or click on the image to compare protanopia vs normal seeing*~</small>

  <br />
  <br />

  <f-next-button title="Next: go outside!" />

</div>

<f-notes>
  
  <summary>Teachers note</summary>
  
  #### Aim

  ~Students explore which parts of their everyday life might cause problems for color vision deficient people. Therefore, we raise awareness for the need to also keep accessibility in mind when designing products which contain important information, which all people should be able to access.~

</f-notes>


-

<ColorblindnessJuxtapose 
  :imageUrl="'images/tomatoes-test__ps2.jpg'" 
  :revealed="get('revealX',0)" 
  :locked="get('revealLocked', true)" 
  :juxtId="'compare'" 
  :upload="false"
  :cbType="'Protanopia'"
  style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)" 
/>






---

| section: cb-safari
| id: cbSafari
| height: 100vh
| padding: 0
| gap: 0

| 1 2



<div style="display:grid; grid-template-rows: auto 100px; padding:var(--content-padding); height:100%;">

  <div>
  
  <f-inline>

  <f-activity-icon size="large" />

  # Photo safari

  </f-inline>

  #### &nbsp;

  ~Take a digital camera, e.g. the camera of your mobile phone, and go on a photo safari of your everyday life.~

  ~**Take pictures of objects, packagings, posters, signs, magazines, websites, texts etc. that you come across throughout your day. Only choose things which convey information.**~
  
  </div>


  <div>
    <f-next-button title="Analyze your photos" style="margin:var(--base2) 0 var(--base2) 0" />
  </div>

</div>

-

<f-image src="images/explore-go-outside.jpg" />






















<!-- 

 SSSSSS    IIIIIII    M     M    U     U    L           AAAA     TTTTTTT     OOOOO     RRRRRR 
S             I       M M  MM    U     U    L          A    A       T       O     O    R     R
 SSSSS        I       M  M  M    U     U    L          A    A       T       O     O    R     R
      S       I       M     M    U     U    L          AAAAAA       T       O     O    RRRRRR 
SSSSSS     IIIIIII    M     M     UUUUU     LLLLLLL    A    A       T        OOOOO     R    R

 -->








---

| section: cb-simulator
| height: 100vh
| id: cbSimulator
| 1 1 2 2 2
| 3 3 2 2 2


# CVD simulator

~Simulate CVD by applying different filters to the image.~


<p />

<f-card :title="get('cbType', 'Protanopia') == 'Protanopia' ? 'Simulating Protanopia 👉' : 'Simulate Protanopia'"   background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType', 'Protanopia') == 'Protanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'Protanopia')">

<p v-if="get('cbType', 'Protanopia') == 'Protanopia'" style="font-size:100%;">reduced sensitivity to <b>RED</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'Deuteranopia' ? 'Simulating Deuteranopia 👉' : 'Simulate Deuteranopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType') == 'Deuteranopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'Deuteranopia')" >

<p v-if="get('cbType') == 'Deuteranopia'" style="font-size:100%;">reduced sensitivity to <b>GREEN</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'Tritanopia' ? ' 👉 Simulating Tritanopia' : 'Simulate Tritanopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType') == 'Tritanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'Tritanopia')">

<p v-if="get('cbType') == 'Tritanopia'" style="font-size:100%">reduced sensitivity to <b>BLUE</b> light</p>

</f-card>

<small><small>~*Drag the red handlers or click on the image to see the difference between normal and CVD seeing.*~</small></small>
&nbsp; 
<f-hr />

<f-inline>

<f-activity-icon size="large" />

~**Analyze images by asking yourself <f-sidebar title="these questions." src="./cb-analyze-images.md" width="50vw" />**~

</f-inline>

<f-hr />

<f-next-button style="margin:var(--base4) 0" />

> Check FF vs Chrome
Link to the https://www.color-blindness.com/coblis-color-blindness-simulator/

-

<div style="height:100vh; position: sticky; top:0">

<ColorblindnessJuxtapose 
  :imageUrl="get('cbSimImg', 'images/cb-metro.jpg')" 
  :revealed="25" 
  :locked="false"
  :cbType="get('cbType', 'Protanopia')"
  style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)"
/>
<!-- <button v-on:click="set('cbSimImg', 'images/crayons.png')">swap</button> -->
</div>













---

| section: cb-facts
| 1 1 1 1 
| 2 3 4 5
| 6 6 6 6
| 7 7 7 7
| height: 100vh


# <f-fact-icon size="large" />Short summary about CVD 
<!-- ~<small>Source: <a href="http://www.colourblindawareness.org/" target="_blank">http://www.colourblindawareness.org/</a></small>~ -->

#### &nbsp;



#### ~There are 7 different types of CVD:~


-

<div style="text-align:centyer;">

<f-fact-icon />

#### Protanomaly &amp;<br/>protanopia
~reduced/missing sensitivity to **RED** light~
</div>

-

<div style="text-align:centyer;">

<f-fact-icon />

#### Deuteranomaly &amp;<br/>deuteranopia
~reduced/missing sensitivity to **GREEN** light.~
</div>

-

<div style="text-align:cenyter;">

<f-fact-icon />

#### Tritanomaly &amp;<br/>tritanopia
~reduced/missing sensitivity to **BLUE** light.~
</div>

-

<div style="text-align:centter;">

<f-fact-icon />

#### Achromatopsia
~**complete** colour blindness (everything seen in shades of grey).~
</div>

-

<center>

~The **"-nopia"** is more severe condition than **"-anomaly"**:~
~"-anomaly" in the name means that perception of certain light is reduced while "-nopia" means it is missing.~

</center>

-


<f-next-button title=" " style="align-self:center;" />




---

| 1 1 1
| 2 3 4
| 2 3 4
| 2 3 4
| 2 3 4
| 5 5 5

# <f-fact-icon size="large" />Short summary about CVD 

-

~**Tritanomaly and achromatopsia are extremely rare** forms of CVD and are both caused by autosomal recessive alleles. People with these forms of CVD inherit two faulty versions (alleles) of genes for normal cone functioning, one from each parent.~

-

~**Protanomaly and deuteranomaly are the more common forms of CVD**, with deuteranomaly being the most common. People with deuteranomaly and protanomaly are collectively known as **red-green colour blind**. They have difficulty distinguishing between reds, greens, browns and oranges. They also commonly confuse different types of blue and purple.~

-

~Colour blindness and colour vision deficiency affects approximately **1 in 12 men** (8%) and **1 in 200 women** (0.5%) in the world.~

-

<f-next-button title=" " />










---



<center>

<div>
  
  # But why?

  ~Why we see colors differently? What IS a color?~

  #### ~Let's try to understand how the human eye is built~

  ##### &nbsp;

  <f-next-button title="To the eye" />
</div>

</center>











---

| section: cb-eye
| height: 100vh
| 1 3
| 2 3



<!-- ##### EXPLAIN  -->
# 👁️‍🗨️ The human eye

#### &nbsp;

~When it comes to color vision, the back of the eye, named **retina** is most important. It contains **two types of photoreceptor cells which detect light** and are called **rods and cones**~

~***RODS*** are located in the peripheral parts of the retina and **detect light**, but **not the colour** of light.~

~***CONES*** are found closely packed in the fovea. They contain the photosensitive pigment iodopsin and there are three types which are sensitive to red, green and blue lights. Hence **they are used for colour vision**.~

-

<f-next-button title="Rods and cones" />

-

<figure style="width:100%; height:80vh; position:sticky; top:0;  display:flex;  justify-content:center; align-items: center; margin: 0;">
  <img src="./images/eye_rods-cones.svg" />
</figure>










---

| height: 100vh
| 1 1
| 2 3
| 4 4


<!-- ##### EXPLAIN  -->
# Rods and cones


~Rods and cones contain different **light-sensitive pigments** which absorb light and undergo a chemical change (“bleaching”) which releases energy. This results in **increased permeability of photoreceptor membranes to sodium ions.**~

~Sodium ions diffuse into the photoreceptors, creating a **generator potential**. If a **threshold level** is reached, an **action potential** is created in a nearby bipolar neuron. This connects to neurons in the **optic nerve** which carry impulses to the brain.~

<small><small>Review the <f-sidebar title="image of the eye" width="50vw"><img src="./images/eye_rods-cones.svg"  /></f-sidebar></small></small>

-

### ~Rods~

~...are located in the **peripheral parts** of the retina and **detect light**, but **not the colour** of light.~

~**Many rods join one bipolar neuron** so that:~

- ~Rods are **sensitive to dim light** (because many weak generator potentials combine to reach the threshold level to trigger an action potential to send nerve impulses to the brain). The photosensitive pigment in rods (rhodopsin) bleaches at low light intensity.~

- ~Rods give **low visual acuity** (the ability to tell part points that are close together) because the brain cannot tell where exactly the light fell on a group of rods.~

-

### ~Cones~

~...are found closely packed in the **fovea**. They contain the photosensitive pigment iodopsin and there are three types which are sensitive to red, green and blue lights. Hence they are used for **colour vision**.~

~**One cone joins one bipolar neuron** so that:~

- ~Cones are **not sensitive to dim light**. Compared to rods, are less sensitive at low light intensity, because a generator potential must reach the threshold level on its own to trigger an action potential to send nerve impulses to the brain). That’s why you can’t see colours in the dark!~

- ~Cones give **high visual acuity** (the ability to tell apart points that are close together) because the brain can tell exactly which cone the light fell upon.~


-

<f-next-button  />

## &nbsp;











---
| 1
| 2
| 3
| rows: 1fr auto 1fr
| cols: 1fr

# Rods and cones: summary

<small><small>Review the <f-sidebar title="image of the eye" width="50vw"><img src="./images/eye_rods-cones.svg"  /></f-sidebar></small></small>

-

<h3>RODS</h3>        | <h3>CONES</h3>   
----------- | -----------
~Mainly located in the peripheral parts of the retina~  | ~Mainly located in the fovea of the retina~
~Do not give information in colour~ | ~Give information in colour~
~Many rods join to one bipolar neuron~  | ~Single cones join to one bipolar neuron~
~**High light sensitivity**~<br />~Several rods connect to one bipolar neuron so many weak generator potentials combine to reach threshold level to trigger action potential to send nerve impulses to the brain~ | ~**Low light sensitivity**~<br />~One cone connects to one bipolar neuron so a generator potential must reach threshold level on its own to trigger action potential to send nerve impulses to the brain~
~**Low visual acuity**~<br />~Several rods connect to one bipolar neuron so brain cannot tell exactly which rod light fell upon, giving an indistinct image.~ | ~**High visual acuity**~<br />~One cone connects to one bipolar neuron so brain can tell exactly which cone light fell upon, giving a distinct image.~

-

<f-next-button title="Colour perception" />

## &nbsp;








---

| section: cb-colour-perception

| 1 1 1 1 1
| 2 2 2 3 3
| 2 2 2 3 3

# Colour perception
## The Visible Spectrum

-

~**White light** is made up of **all the colours of the rainbow** (and everything in between). In a rainbow, colours merge smoothly and continuously from one colour to another. We call this **the visible spectrum**, as colours represent a narrow range of the wavelengths in the wider electromagnetic spectrum which are visible to the human eye.~

#### ~But light waves are colourless.<br />Colour doesn’t actually exist!~ 😲

&nbsp;

<f-next-button title="But..." />

### &nbsp;

-

<img src="./images/visible-spectrum.svg" />

<small><small>~*The visible spectrum and wavelengths*~</small></small>












---

| 1 3
| 2 3

# But how do we see colour, if it doesn't exist?

> ~**Colour is a perception – it is a construct of your brain.**~

~**Rods** contain a photosensitive pigment *(rhodopsin)* which shows **maximum absorbance for light of 498 nm**, although it absorbs a wider range of wavelengths either side of this.~

~According to the trichromatic theory, there are **three types of cone** which contain different forms of a different photosensitive pigment *(iodopsin)*, **each showing maximum absorption of blue, green or red light**.~

-

<f-next-button title="The brain" />

#### &nbsp;

-

<figure style="width:100%; height:100vh; position:sticky; top:0;  display:flex;  justify-content:center; align-items: center; margin: 0;">
  <img src="./images/absorbance.svg" />
</figure>









---

| 1 1
| 2 3
| 2 3
| 4 4
| 4 4

# 🧠 The brain

~When rods and cones are stimulated by light, nerve impulses are sent from eye to brain via the optic nerve. **But nerve impulses still do not have colour information**.~

#### &nbsp;

### Now this is what happens next:

-

<f-inline>

<h2 style="align-self:flex-start"><strong>1</strong></h2>

~If the impulses come **from rods**, the brain interprets them as being **caused by light**.~

</f-inline>

-

<f-inline>

<h2 style="align-self:flex-start"><strong>2</strong></h2>

~If the nerve impulse come **from cones**, your brain makes up **what colour the light was** by taking into account the relative numbers of **red, green or blue** cones that were stimulated.~

</f-inline>

-


### And voilà &ndash; this is where the colour is finally born!

&nbsp;

<f-next-button title="The colour" />

## &nbsp;







---

| section: cb-colour
| 1
| 2 
| 3
| rows: 1fr auto 1fr

# The colour

-

<center>

<div>

~By processing a **massive range of permutations of red, green and blue cone combinations**, you brain is able to detect **10 million different colours**.~

#### ~So all the other colours are result of mixing RED, GREEN and BLUE lights together.~

</div>

</center>


-

<center>

<div>

<f-next-button title="Mixing Red, Green and Blue" />

</div>

</center>











---

| height: 100%
| padding: 0
| gap: 0
| 1 2

<section style="display:grid; grid-template-rows:8fr 1fr; min-height:100vh; padding:var(--content-padding)">

<div>

# Mixing red, green and blue lights
#### ~aka Additive Color System~

&nbsp;

~In the Additive Color System **RED**, **GREEN** and **BLUE** are the primary colors.~

- ~Mixing **red and green** gives us **yellow**~
- ~**Green + blue** = **cyan**~
- ~**Red + blue** = **magenta**~
- ~When all three colors overlap, **WHITE** light is produced.~

</div>

<div>
  <f-next-button title=""  />
</div>

</section>

-

<div style="background-color:#222; height:100vh; position:sticky; top:0; display:flex; justify-content:center; align-items:center;">

<f-scene style="width:80%; height:80%">
  
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

| 1 1
| 2 3
| 4 4

# RGB mixing

-

~This is also, how most of the **screens** work &ndash; a massive grid of **tiny red, green and blue lights** shine more or less intensively.~ 

> ##### ~The intensity of each light is measured from 0 to 255.~

<div>

~For example, if **only red lights are turned on maximum power**, so that RED=255 GREEN=0 BLUE=0, we see a bright <a class="tertiary" v-on:click="set('r0', 255); set('g0', 0); set('b0', 0)">red colour</a>. R=0 G=255 B=0 means bright <a class="tertiary" v-on:click="set('r0', 0); set('g0', 255); set('b0', 0)">green</a>, etc~

~Remember from the previous slide, when we said, that **red+green=yellow**? It means, that both the red and green lights are turned on, while the blue is off: R=255 G=255 B=0. The result is indeed <a class="tertiary" v-on:click="set('r0', 255); set('g0', 255); set('b0', 0)">yellow</a>~

> ~**And so on** - by adjusting the brightness of RGB lights, we can generate all the <a class="tertiary" v-on:click="set('r0', 160); set('g0', 200); set('b0', 12)">other</a> <a class="tertiary" v-on:click="set('r0', 250); set('g0', 205); set('b0', 22)">colours</a> and <a class="tertiary" v-on:click="set('r0', 220); set('g0', 30); set('b0', 255)">tints</a>.~


</div>

-

<div style="position:sticky; top:25vh; box-shadow:0 0 3px 0 hsla(0,0%,0%,0.3); padding:1vw; border-radius:var(--base);">

<f-inline style="justify-content: space-between;">

#### RGB mixer

<small style="flex:1"><small>rgb({{get('r0',236)}},{{get('g0',95)}},{{get('b0',0)}})</small></small>

</f-inline>

<f-inline>
  <div>
    <div 
      style="width:16vw;height:16vw;border:1px solid var(--gray)" 
      :style="{ background:rgb( get('r0',0), get('g0',0), get('b0',0) ) }"
    ></div>
  </div>

  <div style="flex:1">
    <f-slider title="R" :value="get('r0', 0)" v-on:input="set('r0', $event)" to="255" integer />
    <f-slider title="G" :value="get('g0', 0)" v-on:input="set('g0', $event)" to="255" integer />
    <f-slider title="B" :value="get('b0', 0)" v-on:input="set('b0', $event)" to="255" integer />
  </div>
</f-inline>

<small><small><f-activity-icon size="small" /> *Drag the sliders to generate different color combinations*</small></small>

</div>


-

<f-next-button title="Back to CVD" />

## &nbsp;













---

| section: cb-back-to

| 1
| 1
| 2

# Back to CVD

<center>

<div>

~Ok, now we know that there is **3 types of cone** in our eye,<br />that send **different impulses to our brain**.<br />Brain interprets these signals as **RED, GREEN and BLUE** colours.~

### ~<u>CVD occurs when one or more of the cone types are faulty</u>.~
~For example, if the red cone is faulty you won’t be able to see colours containing red clearly.~

&nbsp;

</center>

-

<center>

<f-next-button title="Accessibility" />

</center>











---
| rows: 1fr auto 1fr
| 1 1
| 2 4
| 3 4

# Accessi&shy;bility

-

~It is important for designers (or actually everyone who uses colour for communication) to remember:~

> ##### ~"Your red" may not be the same as "my red" &ndash; it may even not be red at all!~

~You should double-check, that any important text or graphic element~

<f-inline>

### 1.

~**provides enough visual contrast &ndash; also for people with CVD**~

</f-inline>
<f-inline>

### 2.

~**meaning doesn't change when colour changes**~

</f-inline>

-

<f-next-button />

### &nbsp;

-

<ColorblindnessJuxtapose 
  :imageUrl="'images/web-form.png'" 
  :revealed="20" 
  :locked="false" 
  :juxtId="'compareForm'" 
  :upload="false"
  :cbType="'Protanopia'"
  style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)" 
/>







---

| 1 1
| 2 3
| 4 4

# <f-activity-icon size="large" />Try it out!

-

~**Now, that we know all this, let's try to create a working color palette.**~

~On the next slide you'll find a simple "poster editor", where you can adjust the colours. Next to the original version, you'll also see **approximate simulations, how different CVD types could see the colours.**~ 

-

~**While designing, try to answer these questions:**~

- ~Which colours are the most "dangerous" ones to use in CVD context?~
- ~Can you find a combination, that works for all CVD types?~
- ~Do the same colours work for all? Test your palette &ndash; ask other people opinions.~
- ~What colour is love?~

-

<f-next-button title="Design time!" />

#### &nbsp;






---

| section: cb-designer
| gap: 1vmin


| 1 1 1 1
| 2 3 4 5
| 6 6 6 6



<f-inline style="--base:8px; justify-content:space-between;">

<div style="flex:0 1 32%; box-shadow:0 0 3px 0 hsla(0,0%,0%,0.3); padding:1vw;border-radius:var(--base)">

<f-inline style="justify-content: space-between;">

#### Back&shy;ground colour

<small style="flex:1"><small>rgb({{get('r51',236)}},{{get('g51',95)}},{{get('b51',0)}})</small></small>

</f-inline>

<f-inline>
  <div 
      style="width:8vw;height:8vw;" 
      :style="{ background:rgb( get('r51',44), get('g51',77), get('b51',100) ) }"
  ></div>
  

  <div style="flex:1">
    <f-slider title="R" :value="get('r51', 236)" v-on:input="set('r51', $event)" to="255" integer />
    <f-slider title="G" :value="get('g51', 95)" v-on:input="set('g51', $event)" to="255" integer />
    <f-slider title="B" :value="get('b51', 0)" v-on:input="set('b51', $event)" to="255" integer />
  </div>
</f-inline>
</div>

<div style="flex:0 1 32%; box-shadow:0 0 3px 0 hsla(0,0%,0%,0.3); padding:1vw;border-radius:var(--base)">

<f-inline style="justify-content: space-between;">

#### Heading colour

<small style="flex:1"><small>rgb({{get('r52',236)}},{{get('g52',95)}},{{get('b52',0)}})</small></small>

</f-inline>

<f-inline>
  <div 
      style="width:8vw;height:8vw; " 
      :style="{ background:rgb( get('r52',44), get('g52',77), get('b52',77) ) }"
    ></div>

  <div style="flex:1">
    <f-slider title="R" :value="get('r52', 5)" v-on:input="set('r52', $event)" to="255" integer />
    <f-slider title="G" :value="get('g52', 167)" v-on:input="set('g52', $event)" to="255" integer />
    <f-slider title="B" :value="get('b52', 19)" v-on:input="set('b52', $event)" to="255" integer />
  </div>
</f-inline>

</div>

<div style="flex:0 1 32%; box-shadow:0 0 3px 0 hsla(0,0%,0%,0.3); padding:1vw;border-radius:var(--base)">

<f-inline style="justify-content: space-between;">

#### Text colour

<small style="flex:1"><small>rgb({{get('r53',236)}},{{get('g53',95)}},{{get('b53',0)}})</small></small>

</f-inline>

<f-inline>
    <div 
      style="width:8vw;height:8vw; " 
      :style="{ background:rgb( get('r53',44), get('g53',77), get('b53',77) ) }"
    ></div>
  <div style="flex:1">
    <f-slider title="R" :value="get('r53', 201)" v-on:input="set('r53', $event)" to="255" integer />
    <f-slider title="G" :value="get('g53', 171)" v-on:input="set('g53', $event)" to="255" integer />
    <f-slider title="B" :value="get('b53', 93)" v-on:input="set('b53', $event)" to="255" integer />
  </div>
</f-inline>

</div>


</f-inline>

-

<Poster 
  :bgColor="rgb( get('r51',236), get('g51',95), get('b51',0) )" 
  :headingColor="rgb( get('r52',5), get('g52',167), get('b52',19) )" 
  :textColor="rgb( get('r53',201), get('g53',171), get('b53',93) )" 
  :type="'Normal'"
/>

-


<Poster 
  :bgColor="colorblind( rgb( get('r51',236), get('g51',95), get('b51',0) ), 'protanopia' )" 
  :headingColor="colorblind( rgb( get('r52',5), get('g52',167), get('b52',19) ), 'protanopia' )" 
  :textColor="colorblind( rgb( get('r53',201), get('g53',171), get('b53',93) ), 'protanopia' )" 
  :type="'Protanopia'"
/>

-

<Poster 
  :bgColor="colorblind( rgb( get('r51',236), get('g51',95), get('b51',0) ), 'deuteranopia' )" 
  :headingColor="colorblind( rgb( get('r52',5), get('g52',167), get('b52',19) ), 'deuteranopia' )" 
  :textColor="colorblind( rgb( get('r53',201), get('g53',171), get('b53',93) ), 'deuteranopia' )" 
  :type="'Deuteranopia'"
/>

-

<Poster 
  :bgColor="colorblind( rgb( get('r51',236), get('g51',95), get('b51',0) ), 'tritanopia' )" 
  :headingColor="colorblind( rgb( get('r52',5), get('g52',167), get('b52',19) ), 'tritanopia' )" 
  :textColor="colorblind( rgb( get('r53',201), get('g53',171), get('b53',93) ), 'tritanopia' )" 
  :type="'Tritanopia'"
/>

-

<f-next-button title="Useful links and tools" />

## &nbsp;










---

# Useful links and tools

- will be added

<a class="tertiary" href="../"><f-leftarrow-icon /> Back to projects</a>

---

| theme: dark
| padding: 0
| gap: 0

<Mapper />
