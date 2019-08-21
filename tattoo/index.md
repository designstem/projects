| rows: 1fr 4fr 1fr
| style: --primary: white
| 1 1
| 2 4
| 3 4

| chapter: Getting started
| section: Introduction

<Background />

-

# <big><big>Smart Tattoos</big></big>

<big>Design a biosensitive tattoo that expresses you life and can also save your life</big>

-

<f-next-button title="Start" />

---

## Learning goals

- To promote interest towards learning both design and STEM

- To support creativity by illustrating how ideas across different subjects feed each other

- To learn about concepts in skin biology, indicator chemistry and icon design

-

---

| rows: auto 1fr
| padding: 0
| 1 2
| 1 2

<div style="padding:var(--content-padding);">

## What is a smart tattoo?

Tattoos have been around since ancient times.

They are done by punctuating the skin with a needle that injects ink under the skin.

Now MIT-research group has suggested that some inks can be used to create smart tattoo’s that provide useful information about **hydration, sugar and pH-levels**.

</div>

-

<f-image src="images/art-artist-drawing-1304469.jpg" />

<f-notes title="credits">
photo by Isabella Mendes,
https://www.pexels.com/photo/selective-focus-photography-of-tattoo-artist-drawing-a-tatoo-1304469/
</f-notes>

---

| rows: auto 1fr
| padding: 0
| 1 2
| 1 2

<section style="padding:var(--content-padding);">

## Warming up

Tattooing is all about drawing images on the skin. These images are not always easy to recognize

1. Find a partner

2. Select a concept and "tattoo" it to your partner’s back by gently tapping with a finger

3. Try to guess the concept tattooed in your/your partner's back

4. Discuss: what kind of concepts are easy to “guess” from limited information

</section>

-

<f-image style="background-position: 40%" src="images/bags-best-friends-daylight-1516440.jpg" />

<f-notes title="credits">
photo by Kobe Michael,
https://www.pexels.com/photo/three-men-standing-near-window-1516440/
</f-notes>

---

| chapter: Chemistry & Biology
| section: What to measure

<center style="flex-direction: column">

# 🧪

## What to measure?

The MIT-researchers used inks that functioned as indicators.
Indicators are substances that provide useful information about their environment.
For example, information about acids and bases.

</center>

---

| section: Acids and bases

| rows: auto 1fr
| padding: 0
| 1 1 1 1 4 4
| 2 2 2 3 4 4

<div style="padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);">

# Acids and bases

</div>

-

<div style="padding: 0 var(--content-padding);">

The acids and bases can be understood through the concentration of hydrogen-ion <f-math inline blue>(H+)</f-math> in a solution.

The acid level is measured with pH-scale (pH originally comes from the power of hydrogen).

pH-scale governed by the equation <f-math inline>pH = -log[H+]</f-math>

<f-slider set="ph" :value=7 :to=14 integer title="ph: " style="padding: calc(var(--content-padding)/2) 0" />

_Move the bar to explore the pH-scale. Talk with a friend: What is the pH-range that you would need to consider with tattoos?_

</div>

-

<div style="display: flex; align-items: center; flex-direction: column; position: relative">
  <f-artboard :width="280" :height="350" :step="20" style="margin-top: 5px" >
  	<f-line :x1="40" :y1="310 - i*20" :x2="240" :y2="310 - i*20" v-for="i in 15" />
    <f-rect style="transition: all .2s ease-in-out" :x="-100" :y="-290" :stroke="none" :fill="color('red')" :width="40" :height="280 - get('ph')*20" :rotation="180"/>
    <f-rect style="transition: all .2s ease-in-out" :x="-220" :y="-290" :stroke="none" :fill="color('blue')" :width="40" :height="get('ph')*20" :rotation="180"/>
    <f-text :x="20" :y="313 - i*20" v-for="i in 15">{{i-1}}</f-text>
  </f-artboard><br>
  <small style="position: absolute; bottom: 40px; left: 40px">
    <small>
      <f-math inline :update="get('ph')">
      [H+] = 10^{(-{{ get('ph') }})}
      </f-math>
    </small>  
  </small>
  <small style="position: absolute; bottom: 40px; right: 20px">
    <small>
      <f-math inline :update="get('ph')">
      [OH-] = 10^{({{ 14 - get('ph') }})}
      </f-math>
    </small>
  </small>
</div>

<f-notes title="credits">
https://www.pexels.com/photo/body-of-water-under-blue-and-white-skies-1533720/
https://www.pexels.com/photo/nature-water-blue-abstract-67843/
https://www.pexels.com/photo/flour-in-a-jar-5765/
https://www.pexels.com/photo/chrome-circle-close-up-droplets-220612/
https://commons.wikimedia.org/wiki/File:Clorox_Bleach_products.jpg
https://www.flickr.com/photos/yourbestdigs/28692193236
https://www.flickr.com/photos/horiavarlan/4263958356
https://pixabay.com/photos/tums-pills-tablets-antacid-1528834/
https://www.maxpixel.net/Inflammation-Urine-Container-Urine-The-Test-1006795
https://www.pexels.com/photo/happy-coffee-6347/
https://www.pexels.com/photo/tomato-shake-being-poured-in-drinking-glass-1365445/
https://www.pexels.com/photo/close-up-photo-of-cold-cola-1571700/
https://www.pexels.com/photo/close-up-photo-of-sliced-lemons-1536871/
https://commons.wikimedia.org/wiki/File:Adult_Digestive_System.png
https://www.needpix.com/photo/download/656916/offal-marking-medical-intestine-liver-small-intestine-colon-belly-human
https://www.maxpixel.net/Motorcycle-Battery-Battery-Acid-Battery-2490122
https://pxhere.com/en/photo/977978
</f-notes>

-

<div style="position: relative; height: 100%">
<big style="
color: var(--white); 
z-index: 1; 
padding: var(--content-padding); 
position: absolute; 
bottom: 0; 
left: 0; 
right: 0;
background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.65) 100%);
">{{ ['Battery acid','Stomach acid','Lemon juice','Soda','Tomato juice','Black coffee','Urine (average)','Pure water','Seawater','Baking Soda','Antacid tablets','Soap','Ammonia','Bleach','Drain cleaner'][get('ph')] }}</big>
<f-image style="z-index: -1; position: absolute; left: 0; top: 0; bottom: 0; right: 0; background-position: center center; background-size: cover" :src="'images/ph/' + get('ph') + '.jpg'" />
</div>

---

| section: Indicators

| rows: auto 1fr
| padding: 0
| 1 1 1 3 3 3
| 2 2 2 3 3 3

<div style="padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);">

# Indicators

</div>

-

<div style="padding: 0 var(--content-padding);">

move the pH-bar. Why does the color change?

<f-slider set="ph" :value=7 :to=14 integer title="ph: "  style="padding: calc(var(--content-padding)/2) 0" />

_When designing your indicator, you may need to consider the visibility of the color change. How accurate is the information offered by the color change?_

<div style="display: flex">

> <small><small>Phenol red: The structural parts indicated by the red color undergo changes as the pH is increased changing the colour of the molecule.</small></small>

<img style="width: auto" src="images/phenol.png" />

</div>

</div>

-

<div :style="{backgroundColor: hsl(56-get('ph')*4,80,70,1)}" style="position: relative; height: 100%">
<f-image style="position: absolute; left: 0; top: 0; bottom: 0; right: 0; background-size: cover" src="images/glass.png" />
</div>

---

| chapter: Semiotics & design
| section: Designing things

<center style="flex-direction: column">

# 👩‍🎨

## Designing <strike>a symbol</strike> <strike>an icon</strike> <strike>a pictogram</strike> a tattoo

Now we have to think about how our tattoo looks, feels, and most importantly - functions!

</center>

---

| padding: 0
| style: overflow: hidden

<div style="padding: var(--content-padding);">

## Life or death?

How can you make sure that others understand what your tattoo is about?

Try to visualise some abstract phenomena, like life (or death), by sketching something on a piece of paper.

After you've finished, show your creation to others, or draw it on a whiteboard.

What did you draw, and why? Does it differ from your friend's drawings?
Why do we use these particular things to mean something, can everyone understand them the same way everywhere else, in all situations?

</div>

-

<div style=" position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;">
<f-scene responsive >
  <f-group position="1 1">
    <f-rotation :duration="30000">
      <f-spin-pattern count="6" :scale="1" :r="0.9">
        <f-text :scale="4">💀</f-text>
      </f-spin-pattern>
    </f-rotation>
    <f-rotation :duration="60000">
      <f-spin-pattern count="12" :scale="1" :r="2" rotation="30">
        <f-text :scale="4">😇</f-text>
      </f-spin-pattern>
    </f-rotation>
  </f-group>
</f-scene>
</div>

---

| padding: 0
| style: overflow: hidden
| section: Glossary of signs

<div style="padding: var(--content-padding);">

## What are we talking about?

The study of how we describe meaning to something is called **semiotics**. The main subject of semiotics is the **sign**, i. e. something that has meaning to someone else, in some context. **symbol** is a type of sign, and a **pictogram** is a type of visual symbol, that could also be called an **icon**.

</div>

-

<div style=" position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;">
    
<f-fetch
  src="https://unpkg.com/emoji.json/emoji-compact.json"
  type="json"
  v-slot="{ value }"
>
<f-scene responsive>
  <f-group rotation="-45" scale="1.2">
    <f-brick-pattern cols="6" :rows="7" step="1">
      <f-text :scale="2">{{ value[random(0, value.length)] }}</f-text>
    </f-brick-pattern>
    <f-brick-pattern position="1 1" cols="6" :rows="7" step="1">
      <f-text :scale="2">{{ value[random(0, value.length)] }}</f-text>
    </f-brick-pattern>
    <f-brick-pattern position="0 0.5" cols="6" :rows="7" step="1">
      <f-text :scale="2">{{ value[random(0, value.length)] }}</f-text>
    </f-brick-pattern>
    <f-brick-pattern position="0.5 0.5" cols="6" :rows="7" step="1">
      <f-text :scale="2">{{ value[random(0, value.length)] }}</f-text>
    </f-brick-pattern>
  </f-group>
</f-scene>
</f-fetch>
</div>

---

| section: Context is key

## Context is key

Symbols are always understood in some **context**. The symbol ☠️ could refer to a dangerous area, a poisonous liquid, or a jolly pirate ship at a kid's birthday party.

Symbols can also mean different things to different people. Symbols are **conventional**, which mean that they are agreed upon to mean something, and not everyone may know all of these agreements. A kid may link the ☠️ symbol to pirates of the Carribean, a doctor in a hospital to something else entirely.

-

<div style="font-size: 128px; font-family: color-emoji; margin-left: var(--content-padding); width: 100%; height: 100%; position: relative; overflow: hidden">
<div style="font-size: 3em; opacity: 1;  position: absolute; right: -0.5em"></div>
</div>

---

| section: Form & Style

## Form or function?

The way a symbol is presented is also part of the context. Simple lines and bold swatches of color are usually more readable at a glance. Detailed drawings are more decorative, but don't convey information that easily. For that reason, different styles are used for different purposes - if the purpose is to convey important information quickly, then the symbol should be as simple (readable) as possible.

If the functionality of the symbol is not that important, or the main function of the symbol is to be decorative, then there is more room to experiment with the form - or how the symbol looks like.

-

---

## Style or substance?

Think and discuss - what are the things you need to pay attention to when designing a good icon? What are the dos and the don't-s?

To your right there are three sets of symbols, or icons, of different level of detail and style of drawing.
Try to think, in what context, and for what these could be used, and try to sketch the missing icon in the corresponding style.

When you have finished, click the button to reveal the original icon design and compare it to your result.

What is better in your design, what could still be improved?

-

<f-value :value="['../../tattoo_icons/images/beverages_icons_missing.png', '../../tattoo_icons/images/beverages_icons.png']" set="bevs" />
<img :src="get('bevs', [])[get('bevs_index')]" />
<f-toggle title="Show the cup of tea" set="bevs_index" />

<f-value :value="['../../tattoo_icons/images/candy_icons_missing.png', '../../tattoo_icons/images/candy_icons.png']" set="candy" />
<img :src="get('candy', [])[get('candy_index')]" />
<f-toggle title="Show the bag of popcorn" set="candy_index" />

<f-value :value="['../../tattoo_icons/images/fastfood_icons_missing.png', '../../tattoo_icons/images/fastfood_icons.png']" set="food" />
<img :src="get('food', [])[get('food_index')]" />
<f-toggle title="Show the double cheeseburger" set="food_index" />

---

| chapter: Testing the tattoo
| section: Back to tattooing

# Back to tattooing

Tattoos have always had strong symbolic meaning - **cultural**, to convey some message about the bearer to other members of society - and / or **personal**, to mean something to the bearer herself.

What meaning or function whould your **smart tattoo** have? Would it be personal, functional or cultural? Does it have to be understood by everyone, at a glance? Or could it be secret and personal, only understood by the bearer?

Tattoos become blurry over time and lose their sharpness. Think about how you should design icons for tattoos to reduce these effects?

-

---

| section: Deciding the conditions

## Deciding the conditions

In theory, chemicals can be engineered to react to any type of a condition in human body and produce a color.
Decide with your pair a condition that would be important to make visible or measurable with a tattoo.
Justify your choice with arguments.
Write down the condition to a piece of paper.

-

# 🧫

---

| section: Creating the appearance

## Creating the appearance

Sketch out the appearance of the smart tattoo, considering

1. the basics of icon design

2. the cultural context of the symbol

3. the specifics of the 'material'

4. the basic principles of pictography and icon design

-

# 🧫

---

## Time to test your tattoo

Now it is time to look how your tattoo would look like.
Test your design in smart tattoo simulator to explore further connections. Write these down as well.
<f-next-button title="Go to the simulator" />

---

<Simulator />

---

| section: Further activities

## Share your ideas

With the assistance of your paper share your ideas about your design and smart tattoos in general.

---

## Continue

The learning never stops. For example, you can next learn about:
chemistry of inks by conducting experiments
Tattoo permanence model by conducting biological experiments
<- LINK TO RICHARDS PRACTICAL MATERIAL

---
