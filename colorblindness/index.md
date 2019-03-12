
| height: fit
| theme: yellow

<center>

<div>

# <big>Color Vision Deficiency & <br />Accessibility</big>

### How to design information for people whose color perception is impaired.

(Richard Spencer, Kristin Kreer)


<f-next-button title="Let's start" style="margin: var(--base8) 0;" /> 


<div style="opacity:0.2">
<button v-on:click="send('goto', 'cbSimulator')">CB SIMULATOR</button> 
<button v-on:click="send('goto','3properties')" >3 properties</button> 
<button v-on:click="send('goto','shampoo')">Shampoo</button>
<button v-on:click="send('goto','task1')">Task 1</button>
<button v-on:click="send('goto','complementary')">Color harmonies</button>
<button v-on:click="send('goto','task2')">Task 2</button>
<button v-on:click="send('goto','contrast')">Contrast</button>
<button v-on:click="send('goto','palettes')">Palettes</button>
</div>


</div>

</center>


<f-notes>

<summary>Teachers note</summary>

#### Aim

The students’ awareness should be raised for the problems people with color vision deficiency have to face in their everyday life. They should realize that it’s not only about the absence of certain colors and therefore being somehow “aesthetically impaired” by seeing less colors. Instead they should experience that not being able to see all colors can have a serious impact, because people might get the wrong information or no information at all.

</f-notes>








---

| 1 1 2 2 

This is how a color vision deficient person (with protanopia, i.e. red blindness) would see tomatoes.

### Guess which of the tomatoes and how many are already ripe, red and therefore edible.

<!-- **<mark>Click on the picture</mark> to check if you guessed correct.** -->
<f-hr style="margin-bottom:3vh;" />



<button @click="set('revealX', 25)" v-if="get('revealX') < 20">Check your answer</button>

<div v-if="get('revealX') == 25">

  You see that tomato that appeared green is really red! What about the others? Do you want to make another guess?

  > **For color deficient people choosing the wrong tomatoes can have serious consequences for their health**, since unripe tomatoes are poisonous and can cause nausea and vomiting.

  <button @click="()=>{set('revealX', 40); set('revealLocked', false);}" style="margin-bottom:var(--base);">Open a bit more</button>
  <button @click="()=>{set('revealX', 90); set('revealLocked', false);}">Show me everything</button>


</div>

<div v-if="get('revealX') > 35">

  > BTW, you can also drag or click the image to compare it

  If you picked the right tomatoes, congratulations! 

  #### Think of further everyday situations where it is needed to be able to tell the right colors.

  <br />

  <f-next-button title="Next: go outside!" />

</div>

<f-notes>
  
  <summary>Teachers note</summary>
  
  #### Aim

  Students explore which parts of their everyday life might cause problems for color vision deficient people. Therefore, we raise awareness for the need to also keep accessibility in mind when designing products which contain important information, which all people should be able to access.

</f-notes>


-

<ColorblindnessJuxtapose :imageUrl="'images/tomatoes-normal.jpg'" :revealed="get('revealX',0)" :locked="get('revealLocked', true)" :juxtId="'compare'" />








---

| height: fit
| 1 2 2
| 1 2 2
| 1 2 2
| 1 2 2
| 3 3 3




##### EXPLORE
# Photo safari

Take a digital camera, e.g. the camera of your mobile phone, and go on a photo safari of your everyday life.

**Take pictures of objects, packagings, posters, signs, magazines, websites, texts etc. that you come across throughout your day. Only choose things which convey information.**

-

<f-image src="images/explore-go-outside.jpg" />

-

<f-next-button title="Analyze your photos" style="margin:var(--base2) 0 var(--base2) 0" />












<!-- 

 SSSSSS    IIIIIII    M     M    U     U    L           AAAA     TTTTTTT     OOOOO     RRRRRR 
S             I       M M  MM    U     U    L          A    A       T       O     O    R     R
 SSSSS        I       M  M  M    U     U    L          A    A       T       O     O    R     R
      S       I       M     M    U     U    L          AAAAAA       T       O     O    RRRRRR 
SSSSSS     IIIIIII    M     M     UUUUU     LLLLLLL    A    A       T        OOOOO     R    R

 -->








---

| id: cbSimulator
| 1 1
| 2 3
| 4 4

##### EXPLORE
# Colorblindness types

Simulate color vision deficiency by applying different filters.

Find out if any information on your pictures get lost for colorblind people. Does it concern important information? Would it impair the ability to understand the meaning in part or completely?

<f-hr style="margin: var(--base6) 0" />

{{ set('cbType','Protanopia') }}

-

<f-card title="Protanopia" subtitle="missing RED" background="var(--lightergray)" color="var(--darkgray)" style="height: auto;margin-bottom:var(--base);" :style="get('cbType') == 'Protanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}">
  <f-hr style="margin:var(--base) 0; border-bottom:1px solid var(--gray)" />
  <button @click="set('cbType', 'Protanopia')" class="secondary button">Simulate Protanopia</button>
</f-card>


<f-card title="Deuteranopia" subtitle="missing GREEN" background="var(--lightergray)" color="var(--darkgray)" style="height: auto; margin-bottom:var(--base);" :style="get('cbType') == 'Deuteranopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}">
  <f-hr style="margin:var(--base) 0; border-bottom:1px solid var(--gray)" />
  <button @click="set('cbType', 'Deuteranopia')" class="secondary button" >Simulate Deuteranopia</button>
</f-card>

<f-card title="Tritanopia" subtitle="missing BLUE" background="var(--lightergray)" color="var(--darkgray)" style="height: auto; margin-bottom:var(--base);" :style="get('cbType') == 'Tritanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}">
  <f-hr style="margin:var(--base) 0; border-bottom:1px solid var(--gray)" />
  <button @click="set('cbType', 'Tritanopia')" class="secondary button" >Simulate Tritanopia</button>
</f-card>


<button @click="set('cbType', 'Normal')" style="margin:var(--base2)">Reset to normal</button>

-

<ColorblindnessJuxtapose 
  :imageUrl="'images/colorblind-subway.png'" 
  :revealed="50" 
  :locked="false"
  :cbType="get('cbType', 'Protanopia')"
/>


<!-- <ColorblindnessSimulator :imageUrl="'images/before.jpg'" /> -->

-

<f-next-button style="margin:var(--base4) 0" />








---

##### EXPLORE
# Color blindness
## Analyze results

<f-hr style="margin:var(--base6) 0" />

Now that you found out about possible weak spots in the color design of objects in your everyday life, have a closer look at it:
5. Find out what the main problem is regarding the color scheme.
6. Phrase a hypothesis on how this problem could be solved.
7. Are there also weak spots that can impair people with full color vision? In which way are they different from the other weak spots?

<f-next-button style="margin:var(--base6) 0" />








---

##### EXPLAIN
# Learning stations

<f-hr style="margin:var(--base6) 0" />

#### Find out about the following topics through working on the provided learning stations.<br />This should enable you to optimize the accessibility of information in your design products.

<br />

- Accessibility
- The eye
- Color vision deficiency
- Subtractive and additive color mixing
- Three dimensions of color (color space models)
- Color contrast and color harmony theory
- Design rules for creating color palettes
- Summary station

<f-next-button style="margin:6vh 0" title="Accessibility" />

<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Aim. 
  In order to know how to design products/information using color (color combinations), the students need to gather knowledge about different concepts, that influence whether a color combination works for colorblind people or not.
  This phase should focus on making sure that the students end up with the correct information (so not too experimental, but mostly informative).
  The students need to do all of the working stations.

</f-notes>










---

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Accessibility


<f-hr style="margin:var(--base6) 0" />

-

## Tasks

1. What do you understand by “accessibility”? Have you ever come across that term? In which context have you heard about it?

2. Go to https://en.wikipedia.org/wiki/Accessibility and find out about the definition.

3. Get an overview of the areas in which we need to improve accessibility.

4. Further, find out about the difference between “accessibility” and “usability”.


-

<f-image src="images/explain-yellow-door.jpg" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />










---

##### EXPLAIN 
# The eye

<f-hr style="margin:var(--base6) 0" />

When it comes to color vision, the **retina** is the part of the eye which is important.
It is at the back of the eye and contains two types of photoreceptor cells which detect light: 

### Rods and cones.

Rods and cones contain different light-sensitive pigments which absorb light and undergo a chemical change (“bleaching”) which releases energy. This results in increased permeability of photoreceptor membranes to sodium ions.

Sodium ions diffuse into the photoreceptors, creating a generator potential. If a threshold level is reached, an action potential is created in a nearby bipolar neuron. This connects to neurons in the optic nerve which carry impulses to the brain.

**Rods** are located in the peripheral parts of the retina and detect light, but not the color of light.
Rods are sensitive to dim light. The photosensitive pigment in rods (rhodopsin) bleaches at low light intensity.

**Cones** are found closely packed in the fovea. They contain the photosensitive pigment iodopsin.
There are three types which are sensitive to red, green and blue lights (see also RGB color model).
One cone joins one bipolar neuron, so that, compared to rods, they are less sensitive at low light intensity. 
That’s why you can’t see colors in the dark.

(For more details, read the worksheets on The Eye).



<f-next-button />

---

##### EXPLAIN 
# The eye
## Tasks

<f-hr style="margin:var(--base6) 0" />

1. Have a look at the article about color vision on wikipedia.org:
https://en.wikipedia.org/wiki/Color_vision


2. You learned that cones are responsible for color vision. There are three different types of cones. Find out how color perception works in the eye.


3. In the text it says “color is not a property of electromagnetic radiation, but a feature of visual perception by an observer”. Find out what is meant by this (see “Subjectivity of color perception”).















<!-- 

M     M    IIIIIII    X     X    IIIIIII    N     N     GGGGG
MM   MM       I        X   X        I       NN    N    G      
M  M  M       I          X          I       N  N  N    G   GGG
M     M       I        X   X        I       N    NN    G     G
M     M    IIIIIII    X     X    IIIIIII    N     N     GGGGG 

-->









---

##### EXPLAIN 
# Color mixing

<f-hr style="margin:var(--base6) 0" />

Color is derived from light, either natural or artificial. With little light, little or no color is present. With a lot of light comes lots of color. Strong light produces intense color.

**Our eyes have three color receptor cells or cones: red, green and blue. As a result, all incoming light is reduced to these three colors. All perceived colors are generated by a mixture of these three colors.**

<f-next-button title="Additive Color"  style="margin: var(--base6) 0" />











---

| 1 1 1
| 2 2 3
| 4 4 4

##### EXPLAIN 
# Color mixing
## Additive Color System


<f-hr style="margin:var(--base6) 0" />

-

**In the Additive Color System, red, green and blue are the primary colors.** When all three colors overlap, white light is produced.

1. Have a look at the RGB Model for additive color mixing and find out about its three secondary colors (which are also the primary colors for the CMY Model, called Subtractive Color System). What are secondary colors?
2. Find out where the RGB Model is used? 
3. Complementary colors are opposite of each other and form white light. Find out about the complementary color pairs in the RGB Model.

-

<f-scene style=" background:black; border-radius: var(--border-radius);" width="400" height="400">
  <f-circle 
    v-for="(c,i) in ['red', 'lime', 'blue']" 
    :key="'add'+i"
    :fill="c" 
    :x="polarx( i*(360/3), 0.7 )"  
    :y="polary( i*(360/3), 0.7 )" 
    stroke="none"
    style="mix-blend-mode: screen; "
  />
</f-scene>

-

<f-next-button title="Subtractive Color" style="margin:var(--base6) 0"  />














---

| 1 1 1
| 2 2 3
| 4 4 4

##### EXPLAIN 
# Color mixing
## Subtractive Color System

<f-hr style="margin:var(--base6) 0" />

-

All objects have physical properties that cause them to absorb some color waves and reflect others. Color, when applied to a surface such as canvas or paper, has the same characteristic.

Color is produced by absorption of wavelengths e.g. on paper and remission of the remaining wavelengths, which are perceived by the eye and form a color impression. So for example a cyan colored dot on white paper absorbs red wavelengths (they are complementary to cyan) and remits blue and green, which together mix to cyan.

This is called Subtractive Color System, because light is subtracted/absorbed and the remaining light produces a sensation of color.

1. The primary colors of the CMY Model are also the secondary colors of the RGB-Model. In RGB mixing all colors results in white light. What do you think happens in CMY? Try it out.


-

<f-scene style=" border-radius: var(--border-radius);" width="400" height="400">
  <f-circle 
    v-for="(c,i) in ['magenta', 'cyan', 'yellow']" 
    :key="'sub'+i"
    :fill="c" 
    :x="polarx( i*(360/3), 0.7 )"  
    :y="polary( i*(360/3), 0.7 )" 
    stroke="none"
    style="mix-blend-mode: multiply; "
  />
</f-scene>

-

<f-next-button style="margin:var(--base6) 0"  />















---

| 1 1 1
| 2 2 2
| 3 4 5
| 6 6 6

##### EXPLAIN 
# Color mixing


-

4. Try to reproduce the following colors by adjusting the controllers for red, green and blue. 

First, in your mind, try to disassemble them into their three components. How much of red, green and blue is needed to make the color? Then check your assumptions by adjusting the controllers so that you receive a color that is as similar as possible to the example. 

-

<div>
  <f-slider set="r1" from="0" to="255" integer title="r" />
  <f-slider set="g1" from="0" to="255" integer title="g" />
  <f-slider set="b1" from="0" to="255" integer title="b" />
  <f-scene width="600" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-2"
      :fill="rgb( get('r1', 0) , get('g1', 0), get('b1', 0) )"
    />
    <f-box 
      width="4"
      height="4"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 0, 255 )"
    />
    <f-text
      v-if="Math.abs( get('r1',0) - 255) < 1    &&    Math.abs(get('g1',0) - 0) < 1    &&    Math.abs(get('b1',0) - 255) < 1"
      fill="white" scale="2">
        YOU DID IT!!!
    </f-text>
    <f-text
      v-else-if="Math.abs( get('r1',0) - 255) < 10    &&    Math.abs(get('g1',0) - 0) < 10    &&    Math.abs(get('b1',0) - 255) < 10" 
      fill="white">
        ALMOST THERE...
    </f-text>
    <f-text
      v-else-if="Math.abs( get('r1',0) - 255) < 50    &&    Math.abs(get('g1',0) - 0) < 50    &&    Math.abs(get('b1',0) - 255)  < 50"
      fill="white">
        GETTING WARMER!
    </f-text>
    <f-text v-else fill="white">
        MATCH THE COLORS
    </f-text>

  </f-scene>
</div>

-



-

<div>
  <f-slider set="r2" from="0" to="255" integer title="r" />
  <f-slider set="g2" from="0" to="255" integer title="g" />
  <f-slider set="b2" from="0" to="255" integer title="b" />
  <f-scene width="600" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-2"
      :fill="rgb( get('r2', 0) , get('g2', 0), get('b2', 0) )"
    />
    <f-box 
      width="4"
      height="4"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 201, 53 )"
    />
    <f-text
      v-if="Math.abs( get('r2',0) - 255) < 1    &&    Math.abs(get('g2',0) - 201) < 1    &&    Math.abs(get('b2',0) - 53) < 1"
      scale="2">
        YOU DID IT!!!
    </f-text>
    <f-text
      v-else-if="Math.abs( get('r2',0) - 255) < 10    &&    Math.abs(get('g2',0) - 201) < 10    &&    Math.abs(get('b2',0) - 53) < 10">
        ALMOST THERE...
    </f-text>
    <f-text
      v-else-if="Math.abs( get('r2',0) - 255) < 50    &&    Math.abs(get('g2',0) - 201) < 50    &&    Math.abs(get('b2',0) - 53)  < 50">
        GETTING WARMER!
    </f-text>
    <f-text v-else>
        THIS IS HARDER
    </f-text>
    <f-text :position="{x:0, y:-0.5}" >DIFFERENCE: {{ Math.abs( get('r2',0) - 255) + Math.abs( get('g2',0) - 201) + Math.abs( get('b2',0) - 53)  }}</f-text>
  </f-scene>
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
| 1 1
| 2 3

##### EXPLAIN
# Three properties of color
## Hue, saturation, brightness

<f-hr style="margin:var(--base6) 0" />

-

When talking about the effect of color, most people only think of its shade. Designing with color means designing with all three properties of color, which are **hue, saturation and brightness**.
All three of these properties change the effect the color has. 

#### Have a look at these 2 greens 👉

Both are greens, but they have different effects. Most people wouldn’t call the right color natural although green often is used to suggest organic, natural themes. Therefore we have to look closely when working with colors and not only judge the color’s effect by its hue.

<f-next-button style="margin:var(--base6) 0" />

-

<f-scene width="600" height="300"> 
  <f-box 
    width="6"
    height="4"
    stroke="none"
    x="-3"
    :fill="hsl(112,63,36)"
  />
  <f-box 
    width="6"
    height="4"
    x="3"
    stroke="none"
    :fill="hsl(123,100,51)"
  />
</f-scene>















---

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Three properties of color
## Hue, saturation, brightness

<f-hr style="margin:var(--base6) 0" />

-

Have a look at the following colors and find adjectives to describe them. For which products could you possibly use each one of them? Do you know of any that already exist?

-

<f-scene width="600" height="200">
  <f-box 
    width="4"
    height="4"
    x="-4"
    stroke="none"
    :fill="hsl(340,100,35)"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    x="0"
    :fill="hsl(134, 100, 35)"
  />
  <f-box 
    width="4"
    height="4"
    x="4"
    stroke="none"
    :fill="hsl(247,100,35)"
  />
</f-scene>

-

<f-next-button style="margin:var(--base6) 0" />














---

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Three properties of color
## Brightness

<f-hr style="margin:var(--base6) 0" />

-

Here the brightness of each color is reduced to 50%, which means less light for the same hue.
Find adjectives to describe the effect bright colors have in comparison to dark colors of the same hue. 

-

<f-scene width="600" height="200">
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

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Three properties of color
## Saturation

<f-hr style="margin:var(--base6) 0" />

-

Next, the **saturation of the colors** is reduced. You can compare this effect to dissolving watercolors in water. Low saturation means less pigment in the water. High saturation means a high degree of pigment dissolved in water.
Describe the difference between low and high saturated colors with adjectives. When/for which products would you use which?


-

<f-scene width="600" height="200">
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

| 1 1 1
| 2 3 4
| 5 5 5

##### EXPLAIN
# Three properties of color
## Shampoo

<f-hr style="margin:var(--base6) 0" />

Choose a color which could be used as primary color for the following products:
- baby shampoo 
- shampoo for men 60+
- Unisex shampoo

#### All the shampoos smell like apples 

<!-- 🍎 🍏 -->

If possible compare your results with someone and explain why you chose this color regarding the three properties of color.

<f-hr style="margin:var(--base4) 0; visibility:hidden;" />

-



<div>
  <h3>Baby shampoo</h3>
  <f-scene width="300" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h1', 0), get('s1', 0), get('l1', 0) )"
    />
  </f-scene>
  <f-slider set="h1" from="0" to="360" integer title="H" />
  <f-slider set="s1" from="0" to="100" integer title="S" />
  <f-slider set="l1" from="0" to="100" integer title="B" />
</div>

-

<div>
  <h3>Shampoo for old men</h3>
  <f-scene width="300" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h2', 0) , get('s2', 0), get('l2', 0) )"
    />
  </f-scene>
  <f-slider set="h2" from="0" to="360" integer title="H" />
  <f-slider set="s2" from="0" to="100" integer title="S" />
  <f-slider set="l2" from="0" to="100" integer title="B" />
</div>

-

<div>
  <h3>Unisex shampoo</h3>
  <f-scene width="300" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h3', 0) , get('s3', 0), get('l3', 0) )"
    />
  </f-scene>
  <f-slider set="h3" from="0" to="360" integer title="H" />
  <f-slider set="s3" from="0" to="100" integer title="S" />
  <f-slider set="l3" from="0" to="100" integer title="B" />
</div>

-

<f-next-button style="margin:var(--base4) 0;" />















<!--

H     H     AAAAA     RRRRRR     M     M     OOOOO     N     N    Y     Y
H     H    A     A    R     R    MM   MM    O     O    NN    N    Y     Y
HHHHHHH    A     A    R     R    M  M  M    O     O    N  N  N     YYYYY
H     H    AAAAAAA    RRRRRR     M     M    O     O    N    NN       Y 
H     H    A     A    R     R    M     M     OOOOO     N     N       Y

-->












---

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Color contrast and harmony

<f-hr  style="margin:var(--base6) 0" />

-

A single color has an emotional and physical effect, but placing it in context with other colors can alter this effect.

Designers create contrasting or allied color relationships/palettes to affect the viewer’s impression. They use contrasts and harmonies as stylistic devices.

> “The color combinations called ‘harmonious’ in common speech usually are composed of closely similar chromas, or else of different colors in the same shades. They are combinations of colors that meet without sharp contrast.” <br />*(Johannes Itten)*

-

<f-image src="images/contrast-and-harmony-dots.jpg" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />









---

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Color contrast and harmony

<f-hr  style="margin:var(--base6) 0" />

-

But harmony not only exists if color combinations are made up by colors which are neighbours in the color wheel or by colors with the same hue but different brightness, like in this example.

Color contrasts can also be harmonious. Don’t equate contrast and harmony with ‘disagreeable’ and ‘agreeable’.

-

<f-image src="images/contrast-and-harmony-cereal.jpg" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />











---

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Color contrast and harmony

<f-hr  style="margin:var(--base6) 0" />

-

Color combinations with high contrasts can feel bolder and louder. They attract your attention much more than e.g. mono-chromatic color palettes. But that doesn’t mean that they are less harmonious.

In this example you have a **complementary contrast** of red and blue hues.

It feels bolder and louder than the last picture with the cereal bowl, but still harmonious and pleasing to the eye.
Therefore, don’t mix up color contrast with discord.

-

<f-image src="images/contrast-and-harmony-candystore.jpg" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />














---

##### EXPLAIN
# Color contrast and harmony
## Itten's contrasts

<f-hr  style="margin:var(--base6) 0" />

**Johannes Itten**, who taught at Bauhaus, defined seven different color contrasts:

- Contrast of hue
- Light-dark contrast
- Cold-warm contrast
- Complementary contrast
- Simultaneous contrast
- Contrast of saturation
- Contrast of extension

<f-next-button style="margin:var(--base6) 0" />











---

| id: task1

| 1 1
| 2 3
| 4 4

##### EXPLAIN
# Color contrast and harmony
## Task 1

<f-hr  style="margin:var(--base6) 0" />

-

Find out about the seven contrasts online and match them with the pictures. 

Which contrasts do you see?

<f-inline v-for="(contrast, i) in [ 
  ['Contrast of hue' , false], 
  ['Light-dark contrast', true], 
  ['Cold-warm contrast', true],
  ['Complementary contrast', true],
  ['Simultaneous contrast', false],
  ['Contrast of saturation', true],
  ['Contrast of extension', false]
]" :key="i" style="margin-top:var(--base3)">
  <h4 v-on:click="set('contrast'+i, contrast[1])" style="cursor: pointer;">
    <span v-if="get('contrast'+i) == undefined || get('contrast'+i) == null">💣</span>
    <span v-else-if="get('contrast'+i) == true">👍</span>
    <span v-else-if="get('contrast'+i) == false">💥</span>  
    {{ contrast[0] }}</h4>

</f-inline>

-

<f-image src="images/contrast-and-harmony-lake.jpg" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />










---

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Task 1

<f-hr  style="margin:var(--base6) 0" />

-

Find out about the seven contrasts online and match them with the pictures. 

Which contrasts do you see?

<f-inline v-for="(contrast, i) in [ 
  ['Contrast of hue' , false], 
  ['Light-dark contrast', true], 
  ['Cold-warm contrast', true],
  ['Complementary contrast', true],
  ['Simultaneous contrast', false],
  ['Contrast of saturation', false],
  ['Contrast of extension', true]
]" :key="i" style="margin-top:var(--base3)">
  <h4 v-on:click="set('contrast'+i, contrast[1])" style="cursor: pointer;">
    <span v-if="get('contrast'+i) == undefined || get('contrast'+i) == null">💣</span>
    <span v-else-if="get('contrast'+i) == true">👍</span>
    <span v-else-if="get('contrast'+i) == false">💥</span>  
    {{ contrast[0] }}</h4>

</f-inline>

-

<f-image src="images/contrast-snow.png" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />









---

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Task 1

<f-hr  style="margin:var(--base6) 0" />

-

Find out about the seven contrasts online and match them with the pictures. Which contrasts do you see?

<f-inline v-for="(contrast, i) in [ 
  ['Contrast of hue' , false], 
  ['Light-dark contrast', true], 
  ['Cold-warm contrast', false],
  ['Complementary contrast', false],
  ['Simultaneous contrast', true], 
  ['Contrast of saturation', true],
  ['Contrast of extension', true]
]" :key="i" style="margin-top:var(--base3)">
  <h4 v-on:click="set('contrast'+i, contrast[1])" style="cursor: pointer;">
    <span v-if="get('contrast'+i) == undefined || get('contrast'+i) == null">💣</span>
    <span v-else-if="get('contrast'+i) == true">👍</span>
    <span v-else-if="get('contrast'+i) == false">💥</span>  
    {{ contrast[0] }}</h4>

</f-inline>

-

<f-image src="images/contrast-red.png" style="background-position:50% 50%; min-height:60vh; width:100%; height:100%;" />

-

<f-next-button style="margin:var(--base6) 0" />









---

| id: complementary

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Complementary palette

<f-hr  style="margin:var(--base6) 0" />

-

In order to create a harmonious color palette, you can also use the color wheel.

**Complementary colors** are high in contrast and have a very bold and aggressive effect. 

<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  <f-box v-for="(c, i) in [0,6]" 
    :key="'h1p'+i"
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   />
</f-artboard>

-

<center>
<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h1w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+6]"
      :key="'h1c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==0 ? 0.15 : 0.1"
      :fill="i==0 ? 'white' : 'black'"  
    />

  </f-group>
</f-scene>
</center>

-

<f-next-button style="margin:var(--base6) 0" />













---

| id: split complementary

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Split complementary palette

<f-hr  style="margin:var(--base6) 0" />

-
 
If you want a color palette which is more harmonious than complementary palette, but still bold, you might want to try a **split complementary palette**.

<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  <f-box v-for="(c, i) in [0,5,7]" 
    :key="'h2p'+i"
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   />
</f-artboard>

-

<center>
<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h2w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+5,  get('activeColor', 0)+7]"
      :key="'h2c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==0 ? 0.15 : 0.1"
      :fill="i==0 ? 'white' : 'black'"  
    />

  </f-group>
</f-scene>
</center>

-

<f-next-button style="margin:var(--base6) 0" />








---


| 1 1
| 2 2
| 3 4
| 5 5

##### EXPLAIN 
# Color contrast and harmony
## Double complementary and triadic palettes

<f-hr  style="margin:var(--base6) 0" />

-
 
Besides split complementary palettes, there are also **double complementary** and **triadic palettes** which form bold contrasts.

Triads with primary colors are garish. You get softer palettes with secondary or tertiary colors. As for double complementary palettes be careful not to use equal volumes of the four colors. This can have a piercing effect.

<f-hr  style="margin:var(--base4) 0; visibility:hidden;" />

-


#### Double complementary

<center>

<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h3w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+4,  get('activeColor', 0)+6, get('activeColor', 0)+10]" 
      :key="'h3c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==0 ? 0.15 : 0.1"
      :fill="i==0 ? 'white' : 'black'"  
    />
  </f-group>
</f-scene>

</center>

<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  <f-box v-for="(c, i) in [0,4,6,10]" 
    :key="'h3p'+i"
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 75.5 + i*150, y: 100 }"
    width="150"
    height="200"
    stroke
   />
</f-artboard>




-




#### Triadic

<center>

<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h4w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+3,  get('activeColor', 0)+9]"
      :key="'h4c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==0 ? 0.15 : 0.1"
      :fill="i==0 ? 'white' : 'black'"  
    />
  </f-group>
</f-scene>

</center>

<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  <f-box v-for="(c, i) in [0,3,9]" 
    :key="'h4p'+i"
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   />
</f-artboard>



-

<f-next-button style="margin:var(--base6) 0" />









---

| id: analoguous

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Analoguous palette

<f-hr  style="margin:var(--base6) 0" />

-
 
**Analogous palettes** are pleasing to the eye, because they are build by colors with similar light ray wavelengths. In the color wheel, they are equally spaced from each other.


<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  <f-box v-for="(c, i) in [1,0,11]" 
    :key="'h5p'+i"
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   />
</f-artboard>

-

<center>
<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h5w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0)+1,  get('activeColor', 0),  get('activeColor', 0)+11]"
      :key="'h5c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==1 ? 0.15 : 0.1"
      :fill="i==1 ? 'white' : 'black'"  
    />

  </f-group>
</f-scene>

</center>


- 


<f-next-button style="margin:var(--base6) 0" />









---

| id: monochromatic

| 1 1
| 2 3
| 4 4

##### EXPLAIN 
# Color contrast and harmony
## Monochromatic palette

<f-hr  style="margin:var(--base6) 0" />

-
 
**Monochromatic palettes** have an even softer effect than analogous palettes, but they are also less prominent. 

For monochromatic palettes you combine one hue with its different shades, either formed by variation of brightness or saturation. 



<f-artboard width="600" height="200" style="margin:var(--base4) 0">
  
   <f-box 
    :fill="hsl( hue2ai( get('activeColor',0) * (360/12)), 100, 50 )"
    :position="{x: 100, y: 100 }"
    width="200"
    height="200"
    stroke
   />
   <f-box 
    :fill="hsl( hue2ai( get('activeColor',0) * (360/12)), 100, 65 )"
    :position="{x: 300, y: 100 }"
    width="200"
    height="200"
    stroke
   />
   <f-box 
    :fill="hsl( hue2ai( get('activeColor',0) * (360/12)), 100, 80 )"
    :position="{x: 500, y: 100 }"
    width="200"
    height="200"
    stroke
   />
</f-artboard>

-

<center>
<f-scene width="400" height="400">
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="'h6w'+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0)]"
      :key="'h6c'+i"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      :r="i==0 ? 0.15 : 0.1"
      :fill="i==0 ? 'white' : 'black'"  
    />

  </f-group>
</f-scene>
</center>

-

<f-next-button style="margin:var(--base6) 0" />






---

| id: task2

| 1 1 1
| 2 3 4
| 5 5 5

##### EXPLAIN
# Color contrast and harmony
## Task 2

<f-hr style="margin:var(--base6) 0" />

#### Change the given color palette so that:

It stays as closely as possible to the original colors
a) It is more harmonious 
b) It is more prominent

Use the knowledge about contrasts and harmonies which you just found out about. If possible, discuss your results with someone else.


<f-hr style="margin:var(--base4) 0; visibility:hidden;" />

-



<div>

<center>

  <f-scene width="400" height="300">
    <f-box 
      width="6"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h11', 300), get('s11', 100), get('b11', 100) )"
    />
  </f-scene>

</center>

  <f-slider :value="get('h11', 300)" v-on:input="set('h11',$event)" from="0" to="360" integer title="H" />
  <f-slider :value="get('s11', 100)" v-on:input="set('s11',$event)" from="0" to="100" integer title="S" />
  <f-slider :value="get('b11', 100)" v-on:input="set('b11',$event)" from="0" to="100" integer title="B" />
</div>

-

<div>

<center>

  <f-scene width="400" height="300">
    <f-box 
      width="6"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h21', 120) , get('s21', 100), get('b21', 100) )"
    />
  </f-scene>

</center>

  <f-slider :value="get('h21', 120)" v-on:input="set('h21',$event)" from="0" to="360" integer title="H" />
  <f-slider :value="get('s21', 100)" v-on:input="set('s21',$event)" from="0" to="100" integer title="S" />
  <f-slider :value="get('b21', 100)" v-on:input="set('b21',$event)" from="0" to="100" integer title="B" />
</div>

-

<div>

<center>

  <f-scene width="400" height="300">
    <f-box 
      width="6"
      height="4"
      stroke="none"
      :fill="hsb2hsl( get('h31', 180) , get('s31', 100), get('b31', 100) )"
    />
  </f-scene>

</center>

  <f-slider :value="get('h31', 180)" v-on:input="set('h31',$event)" from="0" to="360" integer title="H" />
  <f-slider :value="get('s31', 100)" v-on:input="set('s31',$event)" from="0" to="100" integer title="S" />
  <f-slider :value="get('b31', 100)" v-on:input="set('b31',$event)" from="0" to="100" integer title="B" />
</div>

-

<f-next-button style="margin:var(--base4) 0;" />












---

| id: contrast

| 1 1 1 1
| 2 2 2 3 
| 4 4 5 5

##### EXPLAIN
# Color contrast and harmony

<f-hr style="margin:var(--base6) 0" />

-

## Task 3

Given are a headline and a text on a background. Choose the colors for the background, the headline and the text so that the palette fits to the article, the colors form a harmonious palette and the headline is more prominent than the text.

If possible, discuss your results with someone.

-



-

<f-hr style="margin:var(--base6) 0; visibility: hidden" />

<f-inline>

<div style="flex:1">

#### Background

<f-slider title="H" :value="get('h51', 44)" v-on:input="set('h51', $event)" from="0" to="360" integer />
<f-slider title="S" :value="get('s51', 77)" v-on:input="set('s51', $event)" to="100" integer />
<f-slider title="B" :value="get('b51', 100)" v-on:input="set('b51', $event)" to="100" integer />

</div>
<div style="flex:1">

#### Heading

<f-slider title="H" :value="get('h52', 44)" v-on:input="set('h52', $event)" to="360" integer />
<f-slider title="S" :value="get('s52', 77)" v-on:input="set('s52', $event)" to="100" integer />
<f-slider title="B" :value="get('b52', 77)" v-on:input="set('b52', $event)" to="100" integer />

</div>
<div style="flex:1">

#### Text

<f-slider title="H" :value="get('h53', 44)" v-on:input="set('h53', $event)" to="360" integer />
<f-slider title="S" :value="get('s53', 77)" v-on:input="set('s53', $event)" to="100" integer />
<f-slider title="B" :value="get('b53', 77)" v-on:input="set('b53', $event)" to="100" integer />
</div>


</f-inline>

-

<div style="padding: var(--base8); min-height:500px; height:100%" :style="{
  background: hsb2hsl( get('h51',44), get('s51',77), get('b51',100) )
}">

<h1 :style="{
  color: hsb2hsl( get('h52',44), get('s52',77), get('b52',77) )
}">Halloo</h1>

<p :style="{
  color: hsb2hsl( get('h53',44), get('s53',77), get('b53',77) )
}">Deutsches Ipsum Dolor meliore Hockenheim et Spezi Te Käsefondue utamur genau Exerci Donaudampfschiffahrtsgesellschaftskapitän eu Kaftfahrzeug-Haftpflichtversicherung Principes Hackfleisch eos Fußball His Wiener Schnitzel moderatius Deutsche Mark.</p>

</div>















<!--

PPPPPP      AAAAA     L          EEEEEEE    TTTTTTT    TTTTTTT    EEEEEEE 
P     P    A     A    L          E             T          T       E      
P     P    A     A    L          EEEEE         T          T       EEEEE
PPPPPP     AAAAAAA    L          E             T          T       E      
P          A     A    LLLLLLL    EEEEEEE       T          T       EEEEEEE


-->







---

| id: palettes
| 1 2 3

 
-


##### EXPLAIN
# Color palettes

<f-hr style="margin:var(--base6) 0" />


Creating color palettes with more than two or three colors takes time and reviewing. You should build it step by step. Here are some rules you can keep in mind when building a color palette:


<f-card>

# **1** 

### Figure out the purpose

Analyse the product and the target group for which you are going to design. Are there typical colors already in use by similar products?

</f-card>
<f-card>

# **2**

### Review color basics

Make sure you remember all the basics about the three properties of color, color meanings, color contrast and harmony, before you get started.

</f-card>
<f-card>

# **3**

### Choose a dominant color, then accent colors

First, decide for a color for the largest areas (e.g. the background color), then choose an accent color. If there is a corporate color, choose the dominant color with it in mind.

</f-card>
<f-card>

# **4** 

### Select shades, then vary them

Play with saturation and brightness to create different effects (cheerful, dramatic, cold, warm etc.).

</f-card>
<f-card>

# **5** 

### Look at compatibility of hues

Review the color combinations and contrasts. Are they **pleasing**? Are they **piercing**? Maybe you can use **split complementary** palettes instead to make the contrast softer.

</f-card>
<f-card>

# **6** 

### Limit the number of colors

Two or three colors are mostly enough. More can get too complex. 
If you choose more than three colors for a palette, be careful. Always have **dominant colors** and some colors for the background. Decide if you really need them all, or if you can limit your palette more.

</f-card>
<f-card>

# **7** 

### Put the colors into action, 

e.g. in a mock-up

</f-card>


---


##### EXPLAIN
# Color palettes

<f-hr style="margin:var(--base6) 0" />










































---





---




---


RYB wheel





<f-scene width="300" height="300" grid>
  <f-group :rotation="-195">
  <f-arc
    v-for="(c,i) in colorscale('yellow','blue', 6)" 
    :key="c+i"
    :fill="c"
    stroke
    :start-angle="(360 / 12 * i)"
    :end-angle="(360 / 12 * (i+1))"
    :r="2"
    :inner-radius="1"
  />
  <f-arc
    v-for="(c,i) in colorscale('blue','red', 6)" 
    :key="c+i"
    :fill="c"
    stroke
    :start-angle="(360 / 12 * i + 120)"
    :end-angle="(360 / 12 * (i+1) + 120)"
    :r="2"
    :inner-radius="1"
  />
  <f-arc
    v-for="(c,i) in colorscale('red','yellow', 5)" 
    :key="c+i"
    :fill="c"
    stroke
    :start-angle="(360 / 12 * i + 120 + 120)"
    :end-angle="(360 / 12 * (i+1) + 120 + 120)"
    :r="2"
    :inner-radius="1"
  />
  </f-group>
</f-scene>












---



# RGB Explorer

Commented out temporarily because of heavy CPU usage

<!-- <f-scene3 grid>
	<f-rotation3>
  <f-group3 scale="0.5">
  <f-line3
  	points="0 0 0, 2 0 0"
    :stroke="rgb(255,0,0)"
  />
  <f-line3
  	points="0 0 0, 0 2 0"
    :stroke="rgb(0,255,0)"
  />
  <f-line3
  	points="0 0 0, 0 0 2"
   :stroke="rgb(0,0,255)"
  />
  <f-line3
  	points="0 0 0, 2 2 0"
    :stroke="rgb(255,255,0)"
  />
  <f-line3
  	points="0 0 0, 2 0 2"
    :stroke="rgb(255,0,255)"
  />
  <f-line3
  	points="0 0 0, 0 2 2"
    :stroke="rgb(0,255,255)"
  />
	<f-group3 v-for="r in range(0,2)">
    <f-group3 v-for="g in range(0,2)">
      <f-point3
        v-for="b in range(0,2)"
        :stroke-width="70"
        :x="r"
        :y="g"
        :z="b"
        :stroke="rgb(r * 180,g * 180,b * 180)"
      />
    </f-group3>
  </f-group3>
  </f-group3>
  </f-rotation3>
</f-scene3>-->








---

| 1 1 1 1
| 2 3 3 3

## Color blindness types

-

<f-slider title="Slice count" set="c" from="8" to="64" integer />
  
-

<div style="display: flex; flex-wrap: wrap">
  
  <div>
  <b>Normal vision</b><br><br>
  <f-scene width="150" height="150" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="hsl(a,100,scale(count,0,2,30,70))"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  </div>

  <div v-for="type in [
    'achromatomaly',
    'achromatopsia',
    'deuteranomaly',
    'deuteranopia',
    'protanomaly',
    'protanopia',
    'tritanomaly',
    'tritanopia'
  ]">
  <b>{{ type }}</b><br><br>
  <f-scene  width="150" height="150" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="colorblind(hsl(a,100,scale(count,0,2,30,70)), type)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  </div>
</div>











---

| 1 1 1
| 2 3 4

## Contrast checker

-

<f-slider title="Background color hue" set="c1" integer />
<f-slider title="Foreground color brightness" set="c2" to="100" integer />

-

<div style="padding: var(--base2)" :style="{
  background: hsl(get('c1',0)),
  '--primary': hsl(0, 0, get('c2',0))
}">

<h2>Halloo {{ contrast(hsl(get('c1',0)),hsl(0, 0, get('c2',0))) < 4.5 ? '⚠️' : ' ' }}</h2>

##### Contrast ratio: {{ contrast(hsl(get('c1',0)),hsl(0, 0, get('c2',0))) }}

Deutsches Ipsum Dolor meliore Hockenheim et Spezi Te Käsefondue utamur genau Exerci Donaudampfschiffahrtsgesellschaftskapitän eu Kaftfahrzeug-Haftpflichtversicherung Principes Hackfleisch eos Fußball His Wiener Schnitzel moderatius Deutsche Mark.

<button>Käsefondue</button>

</div>

-

<div style="padding: var(--base2)" :style="{
  background: colorblind(hsl(get('c1',0))),
  '--primary': colorblind(hsl(0, 0, get('c2',0)))
}">

<h2>Halloo {{ contrast(colorblind(hsl(get('c1',0))),colorblind(hsl(0, 0, get('c2',0))) ) < 4.5 ? '⚠️' : '' }}</h2>

##### Contrast ratio: {{ contrast(colorblind(hsl(get('c1',0))),colorblind(hsl(0, 0, get('c2',0)))) }}

Deutsches Ipsum Dolor meliore Hockenheim et Spezi Te Käsefondue utamur genau Exerci Donaudampfschiffahrtsgesellschaftskapitän eu Kaftfahrzeug-Haftpflichtversicherung Principes Hackfleisch eos Fußball His Wiener Schnitzel moderatius Deutsche Mark.

<button>Käsefondue</button>

</div>
