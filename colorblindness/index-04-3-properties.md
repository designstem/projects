
| section: cb-3-properties
| rows: auto
| cols: 3fr 2fr
| padding: 0
| 1 2

<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN -->
# Three properties of color

<!-- &nbsp; -->

~When talking about the effect of color, most people only think of its shade. Designing with color means designing with all three properties of color:~

1. ~**HUE**~
2. ~**SATURATION**~
3. ~**BRIGHTNESS**~

~All three of these properties change the effect the color has.~

<!-- &nbsp; --> 

#### ~Have a look at these 2 greens~ 👉

~Both are greens, but they have different effects. Most people wouldn’t call the brighter color natural although green often is used to suggest organic, natural themes. Therefore we have to look closely when working with colors and not only judge the color’s effect by its hue.~

<f-next-button  />

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




















| id: cb-brightness
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

~Here the **brightness** of each color is reduced by 50%, which means less light for the same hue.~

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

<f-next-button />

---
















| id: cb-saturation
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

~Next, the **saturation of the colors** is reduced. You can compare this effect to dissolving watercolors in water. Low saturation means less pigment in the water. High saturation means more pigment dissolved in water. Depending on the brightness of the color, with no saturation you either get a grey hue (light or dark) or even black (no light, no saturation).~

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

<f-next-button  />













---

| id: cb-shampoo
| rows: auto
| cols: 3fr 2fr 1fr
| 1 1 1
| 2 3 5
| 4 4 5

<!-- ##### EXPLAIN -->
<!-- <f-activity-icon size="large" /> -->
# <f-activity-icon size="large" /> Colors for shampoo brand

-

~Choose a color which could be used as primary color for the following products:~

1. ~baby shampoo~ 
2. ~shampoo for men 60+~
3. ~Unisex shampoo~

-

### 👈

~There is one condition: **all three shampoos smell like apples**~ 

-

<f-next-button title="Shampoo color designer" />

-

---






| rows: auto
| 1 1 1
| 2 3 4
| 6 5 5

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

<f-next-button />