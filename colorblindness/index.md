
```
Temporarily here

```

<f-scene width="300" height="300" grid>
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0, 359, 360/12)" 
      :key="c+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    />
    <!-- <f-arc
      v-for="(c,i) in aihues()" 
      :key="c+i"
      :fill="hsl( c )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click.native="set('activeColor', i)"
    /> -->
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+5,  get('activeColor', 0)+7]"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      r="0.2"
      fill="white"  
    />
  </f-group>
</f-scene>

<f-artboard width="600" height="200">
  <f-box v-for="(c, i) in [0,5,7]" 
    :fill="hsl( hue2ai( ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (c*(360/12)))) % 360 ))"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   />
   <!-- <f-box v-for="(c, i) in [0, 5, 7 ]" 
    :fill="hsl( aihues()[ get('activeColor',0 )] + c*30 )"
    :position="{x: 100 + i*200, y: 100 }"
    width="200"
    height="200"
    stroke
   /> -->
</f-artboard>

<button v-on:click="set('activeColor', 6)">KLIKK</button>

<f-slider set="activeColor" from="0" to="11" integer />

<h1 >
<!-- {{ ((get('activeColor',0) * (360/12)) + (get('activeColor',0) + (4*(360/12)))) % 360 }}  -->

</h1>

---


| height: fit
| theme: yellow

<div>

# <big>Color Vision Deficiency & <br />Accessibility</big>

### How to design information for people whose color perception is impaired.

(Richard Spencer, Kristin Kreer)

<br />

<f-next-button title="Let's start" style="margin-top: 20vh;" /> 

<br /><br />


<f-notes>

<summary>Teachers note</summary>

#### Aim

The students’ awareness should be raised for the problems people with color vision deficiency have to face in their everyday life. They should realize that it’s not only about the absence of certain colors and therefore being somehow “aesthetically impaired” by seeing less colors. Instead they should experience that not being able to see all colors can have a serious impact, because people might get the wrong information or no information at all.

</f-notes>

<br />
<button v-on:click="send('goto', 4)">CB SIMULATOR</button> <button v-on:click="send('goto',11)" >Mixing</button> <button v-on:click="send('goto',12)" >Jump to working file</button>

</div>








---

| 1 1 2 2 

This is how a color vision deficient person (with protanopia, i.e. red blindness) would see tomatoes.

### Guess which of the tomatoes and how many are already ripe, red and therefore edible.

<!-- **<mark>Click on the picture</mark> to check if you guessed correct.** -->
<f-hr style="margin-bottom:3vh;" />


<button @click="set('revealX', 180)" v-if="get('revealX') < 100">Check your answer</button>

<div v-if="get('revealX') == 180">

  You see that tomato that appeared green is really red! What about the others? Do you want to make another guess?

  > **For color deficient people choosing the wrong tomatoes can have serious consequences for their health**, since unripe tomatoes are poisonous and can cause nausea and vomiting.

  <button @click="()=>{set('revealX', 360); set('revealLocked', false);}" style="margin-bottom:var(--base);">Open a bit more</button>
  <button @click="()=>{set('revealX', 750); set('revealLocked', false);}">Show me everything</button>


</div>

<div v-if="get('revealX') > 300">

  > BTW, you can also drag the black line between images to compare them

  If you picked the right tomatoes, congratulations! 

  #### Think of further everyday situations where it is needed to be able to tell the right colors.

  <br />

  <f-next-button title="Next: go outside!" />

</div>

<f-notes>
  
  <summary>Teachers note</summary>
  
  #### Aim

  Students  explore which parts of their everyday life might cause problems for color vision deficient people. Therefore, we raise awareness for the need to also keep accessibility in mind when designing products which contain important information, which all people should be able to access.

</f-notes>


-

<ColorblindnessJuxtapose :imageUrl="'images/tomatoes-normal.jpg'" :revealed="get('revealX',-3)" :locked="get('revealLocked', true)" />

<!-- <img src="images/tomatoes-protanopia.jpg" alt="Protanopia" v-on:click="send('next')" style="cursor:pointer;" /> -->










---

| height: fit
| 1 2 2


<div>

# EXPLORE

Take a digital camera, e.g. the camera of your mobile phone, and go on a photo safari of your everyday life.

<br /><br />

<f-next-button />

</div>


-

<f-image src="images/explore-go-outside.jpg" />








---

# EXPLORE

1. Take pictures of objects, packagings, posters, signs, magazines, websites, texts etc. that you come across throughout your day. Only choose things which convey information.
2. Compare your pictures in our colorblindness simulator
<!-- 2. Open your pictures in Photoshop or go to the following website and upload your files there: https://www.color-blindness.com/coblis-color-blindness-simulator/ -->

<f-next-button title="To the simulator" />








---

3. Simulate color vision deficiency by applying different filters.
4. Find out if any information on your pictures get lost for colorblind people. Does it concern important information? Would it impair the ability to understand the meaning in part or completely?

``` Should we provide some more information about different color blindness types?  ```

<f-hr style="margin: 4vh 0" />

<!-- <ColorblindnessSimulator :imageUrl="'images/before.jpg'" /> -->
<ColorblindnessSimulator :imageUrl="'images/crayons.jpg'" />


<f-next-button />








---

# EXPLORE

Now that you found out about possible weak spots in the color design of objects in your everyday life, have a closer look at it:
5. Find out what the main problem is regarding the color scheme.
6. Phrase a hypothesis on how this problem could be solved.
7. Are there also weak spots that can impair people with full color vision? In which way are they different from the other weak spots?

<f-next-button style="margin:4vh 0" />








---

# EXPLAIN / learning stations

##### Find out about the following topics through working on the provided learning stations.<br />This should enable you to optimize the accessibility of information in your design products.

- Accessibility
- The eye
- Color vision deficiency
- Subtractive and additive color mixing
- Three dimensions of color (color space models)
- Color contrast and color harmony theory
- Design rules for creating color palettes
- Summary station

<f-next-button style="margin:4vh 0" title="Accessibility" />

<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Aim. 
  In order to know how to design products/information using color (color combinations), the students need to gather knowledge about different concepts, that influence whether a color combination works for colorblind people or not.
  This phase should focus on making sure that the students end up with the correct information (so not too experimental, but mostly informative).
  The students need to do all of the working stations.

</f-notes>







---

# EXPLAIN | Accessibility

### Tasks

1. What do you understand by “accessibility”? Have you ever come across that term? In which context have you heard about it?
2. Go to https://en.wikipedia.org/wiki/Accessibility and find out about the definition.
3. Get an overview of the areas in which we need to improve accessibility.
4. Further, find out about the difference between “accessibility” and “usability”.

image

<f-next-button />








---

# EXPLAIN | The eye

<f-next-button />








---


# EXPLAIN | Color mixing 1

Color is derived from light, either natural or artificial. With little light, little or no color is present. With a lot of light comes lots of color. Strong light produces intense color.

Our eyes have three color receptor cells or cones: red, green and blue. As a result, all incoming light is reduced to these three colors. All perceived colors are generated by a mixture of these three colors.

In the Additive Color System, red, green and blue are the primary colors. When all three colors overlap, white light is produced

1. Have a look at the RGB Model for additive color mixing and find out about its three secondary colors (which are also the primary colors for the CMY Model, called Subtractive Color System). What are secondary colors?
2. Find out where the RGB Model is used? 
3. Complementary colors are opposite of each other and form white light. Find out about the complementary color pairs in the RGB Model.

<f-next-button />








---

# EXPLAIN | Color mixing 2

All objects have physical properties that cause them to absorb some color waves and reflect others. Color, when applied to a surface such as canvas or paper, has the same characteristic.

Color is produced by absorption of wavelengths e.g. on paper and remission of the remaining wavelengths, which are perceived by the eye and form a color impression. So for example a cyan colored dot on white paper absorbs red wavelengths (they are complementary to cyan) and remits blue and green, which together mix to cyan.

This is called Subtractive Color System, because light is subtracted/absorbed and the remaining light produces a sensation of color.

1. The primary colors of the CMY Model are also the secondary colors of the RGB-Model. In RGB mixing all colors results in white light. What do you think happens in CMY? Try it out.

<f-next-button />








---

| 1 1 1
| 2 2 2
| 3 4 5
| 6 6 6

# EXPLAIN | Color mixing 3

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

<f-next-button />








---

# EXPLAIN | Three properties of color 1

When talking about the effect of color, most people only think of its shade. Designing with color means designing with all three properties of color, which are hue, saturation and brightness.
All three of these properties change the effect the color has. Have a look at the following example:

<div>
  <f-scene width="400" height="200"> 
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-2"
      :fill="hsl(112,63,36)"
    />
    <f-box 
      width="4"
      height="4"
      x="2"
      stroke="none"
      :fill="hsl(123,100,51)"
    />
  </f-scene>
</div>


Both are greens, but they have different effects. Most people wouldn’t call the right color natural although green often is used to suggest organic, natural themes. Therefore we have to look closely when working with colors and not only judge the color’s effect by its hue.

<f-next-button />








---

# EXPLAIN | Three properties of color 2

Have a look at the following colors and find adjectives to describe them. For which products could you possibly use each one of them? Do you know of any that already exist?

<div>
  <f-scene width="600" height="200">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-4"
      :fill="hsl(252,100,50)"
    />
    <f-box 
      width="4"
      height="4"
      x="0"
      stroke="none"
      :fill="hsl(92,100,50)"
    />
    <f-box 
      width="4"
      height="4"
      x="4"
      stroke="none"
      :fill="hsl(22,100,50)"
    />
  </f-scene>
</div>








---

# EXPLAIN | Three properties of color 2

Now the brightness of each color is reduced to 50%, which means less light for the same hue.
Find adjectives to describe the effect bright colors have in comparison to dark colors of the same hue. 


<div>
  <f-scene width="600" height="200">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-4"
      :fill="hsl(252,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      stroke="none"
      x="-4"
      y="1"
      :fill="hsl(252,100,25)"
    />
    <f-box 
      width="4"
      height="4"
      x="0"
      stroke="none"
      :fill="hsl(92,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      x="0"
      y="1"
      stroke="none"
      :fill="hsl(92,100,25)"
    />
    <f-box 
      width="4"
      height="4"
      x="4"
      stroke="none"
      :fill="hsl(22,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      x="4"
      y="1"
      stroke="none"
      :fill="hsl(22,100,25)"
    />
  </f-scene>
</div>

<f-next-button />








---

# EXPLAIN | Three properties of color 3

Next, the saturation of the colors is reduced. You can compare this effect to dissolving watercolors in water. Low saturation means less pigment in the water. High saturation means a high degree of pigment dissolved in water.
Describe the difference between low and high saturated colors with adjectives. When/for which products would you use which?

    Should the color model be mentioned here? (HSB?)
    Because with HSL you get same values when you increase lightness to 90%, not reducing saturation

<div>
  <f-scene width="600" height="200">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      x="-4"
      :fill="hsl(252,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      stroke="none"
      x="-4"
      y="1"
      :fill="hsl(252,100,90)"
    />
    <f-box 
      width="4"
      height="4"
      x="0"
      stroke="none"
      :fill="hsl(92,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      x="0"
      y="1"
      stroke="none"
      :fill="hsl(92,100,90)"
    />
    <f-box 
      width="4"
      height="4"
      x="4"
      stroke="none"
      :fill="hsl(22,100,50)"
    />
    <f-box 
      width="4"
      height="2"
      x="4"
      y="1"
      stroke="none"
      :fill="hsl(22,100,90)"
    />
  </f-scene>
</div>

<f-next-button />

---

| 1 1 1
| 2 3 4
| 5 5 5

# EXPLAIN | Three properties of color 4

Choose a color which could be used as primary color for the following products:
- baby shampoo 
- shampoo for men +60
- Unisex shampoo

If possible compare your results with someone and explain why you chose this color regarding the three properties of color.

    NOTE: Right now this uses HSL color model, if needed, will be changed to HSB

-

<div>
  <h3>Baby shampoo</h3>
  <f-scene width="300" height="300">
    <!-- <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsl( hsb2hsl( get('h1', 0), get('s1', 0), get('l1', 0)).h, hsb2hsl( get('h1', 0), get('s1', 0), get('l1', 0)).s, hsb2hsl( get('h1', 0), get('s1', 0), get('l1', 0)).l )"
    /> -->
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsl( get('h1', 0), get('s1', 0), get('l1', 0) )"
    />
  </f-scene>
  <f-slider set="h1" from="0" to="360" integer title="H" />
  <f-slider set="s1" from="0" to="100" integer title="S" />
  <f-slider set="l1" from="0" to="100" integer title="L" />
</div>

-

<div>
  <h3>Shampoo for old men</h3>
  <f-scene width="300" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsl( get('h2', 0) , get('s2', 0), get('l2', 0) )"
    />
  </f-scene>
  <f-slider set="h2" from="0" to="360" integer title="H" />
  <f-slider set="s2" from="0" to="100" integer title="S" />
  <f-slider set="l2" from="0" to="100" integer title="L" />
</div>

-

<div>
  <h3>Unisex shampoo</h3>
  <f-scene width="300" height="300">
    <f-box 
      width="4"
      height="4"
      stroke="none"
      :fill="hsl( get('h3', 0) , get('s3', 0), get('l3', 0) )"
    />
  </f-scene>
  <f-slider set="h3" from="0" to="360" integer title="H" />
  <f-slider set="s3" from="0" to="100" integer title="S" />
  <f-slider set="l3" from="0" to="100" integer title="L" />
</div>

-

    NOTE: How to compare different palettes?

<f-next-button />

---

# EXPLAIN | Color contrast and harmony 1

A single color has an emotional and physical effect, but placing it in context with other colors can alter this effect.
Designers create contrasting or allied color relationships/palettes to affect the viewer’s impression. They use contrasts and harmonies as stylistic devices.

“The color combinations called ‘harmonious’ in common speech usually are composed of closely similar chromas, or else of different colors in the same shades. They are combinations of colors that meet without sharp contrast.” (Johannes Itten)

IMAGE

<f-next-button />

---

# EXPLAIN | Color contrast and harmony 2

But harmony not only exists if color combinations are made up by colors which are neighbours in the color wheel or by colors with the same hue but different brightness, like in this example.

Color contrasts can also be harmonious. Don’t equate contrast and harmony with ‘disagreeable’ and ‘agreeable’.

IMAGE

<f-next-button />

---

# EXPLAIN | Color contrast and harmony 3

Color combinations with high contrasts can feel bolder and louder. They attract your attention much more than e.g. mono-chromatic color palettes. But that doesn’t mean that they are less harmonious.
In this example you have a complementary contrast of red and blue hues.
It feels bolder and louder than the last picture with the cereal bowl, but still harmonious and pleasing to the eye.
Therefore, don’t mix up color contrast with discord.

IMAGE

<f-next-button />


---

# EXPLAIN | Color contrast and harmony 4

Johannes Itten, who taught at Bauhaus, defined seven different color contrasts:
- Contrast of hue
- Light-dark contrast
- Cold-warm contrast
- Complementary contrast
- Simultaneous contrast
- Contrast of saturation
- Contrast of extension

## Task 1: 
Find out about the seven contrasts online and match them with the pictures.
Which contrasts do you see?

IMAGE

<f-next-button />

---

| 1 1 1
| 2 2 3
| 4 4 4

# EXPLAIN | Color contrast and harmony 5

### Task 1: 

Find out about the seven contrasts online and match them with the pictures. Which contrasts do you see?

<f-hr />

-

<f-image src="images/contrast-snow.png" style="height: 35vw !important; background-position: 50% 50% !important" />

-

<f-inline v-for="(contrast, i) in [ 
  ['Contrast of hue' , false], 
  ['Light-dark contrast', true], 
  ['Cold-warm contrast', true],
  ['Complementary contrast', true],
  ['Simultaneous contrast', false],
  ['Contrast of saturation', false],
  ['Contrast of extension', true]
]" :key="i">
  <h4 v-on:click="set('contrast'+i, contrast[1])" style="cursor: pointer;">
    <span v-if="get('contrast'+i) == undefined || get('contrast'+i) == null">💣</span>
    <span v-else-if="get('contrast'+i) == true">👍</span>
    <span v-else-if="get('contrast'+i) == false">💥</span>  
    {{ contrast[0] }}</h4>

</f-inline>


<!-- <h1>
  <span v-if="get('check1') == undefined || get('check1') == null">CHOOSE 🤔</span>
  <span v-else-if="get('check1') == true">YES 👍</span>
  <span v-else-if="get('check1') == false">NOPE 👎</span>
</h1>
-->


-

<f-next-button />

---

| 1 1 1
| 2 2 3
| 4 4 4

# EXPLAIN | Color contrast and harmony 6

### Task 1: 

Find out about the seven contrasts online and match them with the pictures. Which contrasts do you see?

<f-hr />

-

<f-image src="images/contrast-red.png" style="height: 35vw !important; background-position: 50% 50% !important" />

-

<f-inline v-for="(contrast, i) in [ 
  ['Contrast of hue' , false], 
  ['Light-dark contrast', true], 
  ['Cold-warm contrast', false],
  ['Complementary contrast', false],
  ['Simultaneous contrast', true], 
  ['Contrast of saturation', true],
  ['Contrast of extension', true]
]" :key="i">
  <h4 v-on:click="set('contrast'+i, contrast[1])" style="cursor: pointer;">
    <span v-if="get('contrast'+i) == undefined || get('contrast'+i) == null">💣</span>
    <span v-else-if="get('contrast'+i) == true">👍</span>
    <span v-else-if="get('contrast'+i) == false">💥</span>  
    {{ contrast[0] }}</h4>

</f-inline>


-

<f-next-button />





---







# Color wheel (in progress)


<f-scene width="300" height="300" grid>
  <f-group :rotation="45" :scale="1">
    <f-arc
      v-for="(c,i) in range(0,360,360/12)" 
      :key="c+i"
      :fill="hsl( hue2ai(c) )"
      stroke
      :start-angle="i*(360/12)"
      :end-angle="(i+1)*(360/12)"
      :r="2"
      :inner-radius="0.75"
      v-on:click="colorWheelArcClick(i)"
    />
    <f-circle 
      v-for="(p,i) in [get('activeColor', 0),  get('activeColor', 0)+5,  get('activeColor', 0)+7]"
      v-on:click="colorWheelArcClick(i)"
      :x="polarx(p*(360/12)+(360/24), 1.5)"
      :y="polary(p*(360/12)+(360/24), 1.5)"
      r="0.2"
      fill="white"  
    />
    <f-box fill="black"  v-on:click.native="colorWheelArcClick(5)" />
    <rect width="1" height="1" fill="red" v-on:click="colorWheelArcClick(5)" />
  </f-group>
</f-scene>

<button v-on:click="colorWheelArcClick(6)">KLIKK</button>

<f-slider set="activeColor" from="0" to="11" integer />

# {{ get('activeColor', 0) }}








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
