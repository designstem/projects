| chapter: Three properties of color
| section: Overview
| id: cb-3-properties
| padding: 0
| rows: auto
| cols: 3fr 2fr
| 1 2
| 3 2

<section style="padding:var(--content-padding); padding-bottom:0;">

## Three properties of color

When talking about the effect of color, most people only think of its shade. Designing with color means designing with all three properties of color:

1. **HUE**
2. **SATURATION**
3. **BRIGHTNESS**

<!-- &nbsp; --> 

#### Look at the two greens on the right

*Both are greens, but have a different brightness and saturation. Most people wouldn’t call the lower color natural although green often is used to suggest organic, natural properties.
In a lot of books, you can find lists of properties/meanings/effects hues can have. Sometimes these descritpions are very shallow, because not only the hue influences a colors effect. Therefore we have to look more closely when working with colors and* <var>not only judge the color’s effect by its hue.</var>
On the next few pages, we will look at this more closely.

<br />

<f-next-button  />

</section>

-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:column; min-height: 50vh;">
  <div style="background: hsl(105,98%,34%); flex: 1 1 50%;"></div>
  <div style="background: hsl(118,100%,50%); flex: 1 1 50%;"></div>

</div>

---





| section: Hue
| padding: 0
| cols: 3fr 2fr
| 1 2


<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN -->
<caption>Three Properties of Color</caption>

## Color meaning (hue)


It's true that all colors have a certain meaning regarding their hue. You probably already know that red is often associated with love, also anger and blood, but all in all with strong emotions. Yellow lets us first think of fruits, juice, summer and sunshine, whereas blue hues are connected to the sky and ocean, therefore are said to have a cooling, calm, quiet and solid effect.
**But what if we leave the hue unaltered and modify the other two properties**, saturation and brightness? Does this change the colors effect? Let's find it out on the next pages!

#### Hint:
*Since (through your gut feeling) you probably already know the meaning hues can have, we will skip further explanations in this workshop. But if you feel, like you need more information on this, you're welcome to look at*
<f-link to="https://en.wikipedia.org/wiki/Color_symbolism">this article</f-link>.

<br />

<f-next-button />

</section>

-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:row;">
  <div style="flex: 1 1 33%;" :style="{'background' : hsl(340,100,50) }"></div>
  <div style="flex: 1 1 34%;" :style="{'background' : hsl(48, 100, 50) }"></div>
  <div style="flex: 1 1 33%;" :style="{'background' : hsl(214,100,50) }"></div>
</div>


<!--

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

-->

---




<!-- ##### KRISTINS PLAYGROUND 2 -->



| section: Brightness
| id: cb-brightness
| rows: auto
| cols: 1fr 2fr
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN -->
<caption>Three Properties of Color</caption>

## Brightness

-

On the right the **brightness** of each color is reduced by 50%, which means less light for the same hue.
You may use the slider beneath the color boxes to darken or brighten up the colors, then work on the following tasks.

#### Tasks

1. *Observe how the colors' effect changes when they are darker or brighter by using the slider beneath the color boxes.*
2. *Look at the **polarity profiles** (adjective pairs) on the right. You can drag the slider more to the left to indicate that the effect of the color relates more to the adjective on the left and the other way around. So for example, if you think that a color feels heavier, you could drag the slider more to the right. There are five different degrees from which you can choose. The further the slider points to one of the sides, the stronger the effect of the adjective. So if the slider is positioned in the middle, it means that the effect is balanced between the two polarities.*
3. *Now, alter the polarity profiles on the right, so that they show the effect the dark and the light colors have on **you**. After you are done, you can compare your results with average values by clicking on the button SHOW.* **But don't cheat!**

-


<f-scene width="600" height="200" responsive>
  <f-box 
    width="4"
    height="4"
    x="-4"
    stroke="none"
    :fill="hsb2hsl(340,100,100)"
  />
  <f-box 
    width="4"
    height="2"
    x="-4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 340, 100, get('brightness',50) )"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    x="0"
    :fill="hsb2hsl(48, 100, 100)"
  />
  <f-box 
    width="4"
    height="2"
    stroke="none"
    x="0"
    y="-1"
    :fill="hsb2hsl( 48, 100, get('brightness',50) )"
  />
  <f-box 
    width="4"
    height="4"
    x="4"
    stroke="none"
    :fill="hsb2hsl(214, 100, 100)"
  />
  <f-box 
    width="4"
    height="2"
    x="4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 214, 100, get('brightness',50) )"
  />
</f-scene>

<f-slider  to="100" :value="get('brightness', 34)" v-on:input="set('brightness', $event)" title="Adjust brightness" />

&nbsp;

#### Effect of darker colors

<PolarityQuiz :input="[ 
  ['light','heavy',5], 
  ['cold','warm',3], 
  ['quiet','loud',1],
  ['young','old',4],
  ['active', 'passive', 5],
  ['cheerful','sad',4], 
  ['serious','carefree',2], 
  ['mysterious','predictable',2],
  ['open','secretive',4],
  ['risky', 'cautious', 5],
  ['spontaneous', 'planning', 5]
]" />


#### Effect of lighter colors

<PolarityQuiz :input="[ 
  ['light','heavy',1], 
  ['cold','warm',2], 
  ['quiet','loud',4],
  ['young','old',1],
  ['active', 'passive', 1],
  ['cheerful','sad',1], 
  ['serious','carefree',4], 
  ['mysterious','predictable',2],
  ['open','secretive',1],
  ['risky', 'cautious', 2],
  ['spontaneous', 'planning', 1]
]" />

-

<f-next-button />

---


<!-- ##### KRISTINS PLAYGROUND 3 -->


| section: Saturation
| id: cb-saturation
| rows: auto
| cols: 1fr 2fr
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN -->
<caption>Three Properties of Color</caption>

## Saturation

-

As well as the brightness, the **saturation** can influence a color's meaning. You can compare changing a color's saturation to dissolving watercolors in water. Low saturation means less pigment in the water. High saturation means more pigment dissolved in water. Depending on the brightness of the color, with no saturation you either get a grey hue (light or dark) or even black (no light, no saturation).
&nbsp;
Again, we will work with polarity profiles to understand the effect a change in saturation can have on the color.

##### Tasks

1. *Observe how the colors' effect changes when they are desaturated or saturated by using the slider beneath the color boxes.*
2. *Alter the polarity profiles on the right, so that they show the effect the saturated and the desaturated colors have on you. After you are done, you can compare your results with average values by clicking on the button SHOW.* **But don't cheat!**

-

<f-scene width="600" height="200" responsive>
  <f-box 
    width="4"
    height="4"
    x="-4"
    stroke="none"
    :fill="hsb2hsl(340,100,100)"
  />
  <f-box 
    width="4"
    height="2"
    x="-4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 340, get('saturation',50), 100 )"
  />
  <f-box 
    width="4"
    height="4"
    stroke="none"
    x="0"
    :fill="hsb2hsl(48, 100, 100)"
  />
  <f-box 
    width="4"
    height="2"
    stroke="none"
    x="0"
    y="-1"
    :fill="hsb2hsl( 48, get('saturation',50), 100 )"
  />
  <f-box 
    width="4"
    height="4"
    x="4"
    stroke="none"
    :fill="hsb2hsl(214, 100, 100)"
  />
  <f-box 
    width="4"
    height="2"
    x="4"
    y="-1"
    stroke="none"
    :fill="hsb2hsl( 214, get('saturation',50), 100 )"
  />
</f-scene>

<f-slider  to="100" :value="get('saturation', 67)" v-on:input="set('saturation', $event)" title="Adjust saturation" />

&nbsp;

#### Effect of saturated colors

<PolarityQuiz :input="[ 
  ['light','heavy',4], 
  ['cold','warm',3], 
  ['quiet','loud',4],
  ['young','old',2],
  ['active', 'passive', 1],
  ['cheerful','sad',1], 
  ['serious','carefree',2], 
  ['mysterious','predictable',2],
  ['open','secretive',1],
  ['risky', 'cautious', 1],
  ['spontaneous', 'planning', 2]
]" />

&nbsp;

#### Effect of desaturated colors

<PolarityQuiz :input="[ 
  ['light','heavy',1], 
  ['cold','warm',2], 
  ['quiet','loud',1],
  ['young','old',4],
  ['active', 'passive', 5],
  ['cheerful','sad',4], 
  ['serious','carefree',3], 
  ['mysterious','predictable',3],
  ['open','secretive',4],
  ['risky', 'cautious', 5],
  ['spontaneous', 'planning', 4]
]" />

-

<f-next-button  />

---




<!-- ##### KRISTINS PLAYGROUND 4 -->


| section: Conclusion
| id: cb-conclusion
| theme: light
| padding: 0
| gap: 0
| rows: auto
| 1 2

<!-- ##### EXPLAIN -->
<section>

<caption>Three Properties of Color</caption>

## <f-note-icon size="medium" /> Conclusion

<!-- <f-hr style="margin:var(--base6) 0" /> -->

<br>

#### So what did we learn?

Summarize in your own words the effect 
a) *bright colors have in comparison to dark colors* and 
b) *saturated colors have in comparison to desatured colors.*

Check below **after** coming up with your own conclusion.

<f-sidebar title="Answer key" overlay size="half">

<a class="tertiary">Conclusion<f-arrow-icon rotation="-45" /></a>

<div slot="content" class="sidebar-content">
  
  ### Answer key
  
  The average feeling of darker colors is heavy, old, passive, slow, serious, sad, quiet.
  Whereas brighter colors feel louder, lighter, younger, more active, cheerful and carefree.

  The average effect of saturated colors is loud, bold, open, active, risky and cheerful.
  Whereas desaturated colors feel old, unclear, reserved, serious, quiet, passive, cautious and light.

  This is only the average impression - it can vary depending on the color's hue. **So only take it as a hint, not a rule.**
  
  Whenever you design with colors, remember that the hue is not the only component influencing the color's effect!
  Especially when we design for people with CVD, using brightness and saturation can be helpful to get a good result.

</div>

</f-sidebar> 

&nbsp;

<f-next-button title="Try out what you learned!" />

</section>

-

<f-image src="./images/color_blindness_accessibility_31.jpg" style="background-position:50% 50%; min-height: 90vh;" />



---




<!-- ##### KRISTINS PLAYGROUND 5 -->


| section: Task: Shampoo designer
| id: cb-shampoo
| padding: 0
| gap: 0
| rows: auto
| 1 2
 

<!-- ##### EXPLAIN -->
<!-- <f-activity-icon size="large" /> -->
<section style="padding:var(--content-padding); padding-bottom:0;">

<caption>Three Properties of Color</caption>

## <f-activity-icon size="medium" /> Apple shampoo


You are asked to decide upon fitting **colors for shampoo bottles**. The three shampoos will smell like apple. But there are three different target groups - each one gets a shampoo bottle of their own. Choose a color which could be used as primary color for the following products:

* <mark>Baby shampoo </mark>
* <mark> Shampoo for men 60+</mark>
* <mark>Unisex shampoo</mark>

<br>

**Before** you go to the next page, where you can design the color scheme, **remember** what you learned about color meaning and the effect saturation and brightness can have on a hue. Be ready to **explain your choices** in class.

<br>

Let's find some nice colors for our shampoo bottles:


<f-next-button title="Shampoo color designer" />

</section>



-

<f-image src="./images/cvd_soap.jpg"  style="background-position:50% 50%; min-height: 90vh;" />






---



| rows: auto
| 1 1 1
| 2 3 4
| 5 5 5

<caption>Three Properties of Color</caption>

## <f-activity-icon size="medium" /> Shampoo color designer

<br>

> If possible **compare your results** with someone and **explain why** you chose these colors regarding the three properties of color. **Alternativeley, write it down in your journal.**


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


<f-next-button />
