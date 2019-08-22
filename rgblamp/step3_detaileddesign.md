| chapter: Detailed design 
| section: Introduction

# Detailed design

### 1. Choose the Best Solution

Look at whether each possible solution meets your design requirements. Some solutions probably meet more requirements than others. Reject solutions that do not meet the requirements.

### 2. Develop the Solution

Development involves the refinement and improvement of a solution, and it continues throughout the design process, often even after a product ships to customers. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>

---

## How is color produced in devices?

The RGB color model is an additive color model in which red, green and blue light are added together in various ways to reproduce a broad array of colors.
The name of the model comes from the initials of the three additive primary colors, red, green, and blue.

##### 🎛️ Adjust the values to get the maximum brightness in the central area

<f-slider title="Red" value="64" to="255" integer set="r" />

<f-slider title="Green" value="128" to="255" integer set="g" />

<f-slider title="Blue" value="196" to="255" integer set="b" />

-

<center>
<f-scene>
  <f-group scale="1.3">
  <f-circle
    v-for="(c,i) in polarpoints(3,0.5)"
    :key="i"
    :x="c.x"
    :y="c.y"
    :fill="[rgb(get('r',0),0,0),rgb(0,get('g',0),0),rgb(0,0,get('b',0))][i]"
    stroke
    style="mix-blend-mode: screen"
  />
  </f-group>
</f-scene>
</center>

---

***KJ: I need a grappa***

### 3. Detailed Design

## How many bits are needed to represent your bit depth?

Bits|Colors|Description
---|---|---
`1`|2|Only two colors in total, usually black and white
`4`|16|Many early games were presented in this color palette
`8  `|256|8bit images are commonly used in games to save on memory for textures and sprites

<mark style="background:green; color: white">Play</mark> with <a class="tertiary" href="https://designstem.github.io/scenarios/colorbits/">Bits and Colors</a>


<f-next-button title="Next" />

-

<p>
<a href="https://it.m.wikipedia.org/wiki/File:Rgb-raster-image.svg">wikipedia</a>
</p>

<img src="./imgs/cap3_3a.png" style="width:95%; max-height:40%;"/>

<p>
<a href="https://docs.krita.org/en/general_concepts/colors/bit_depth.html">bit_depth</a>
</p>

<img src="./imgs/cap3_3b.png" style="width:95%; max-height:40%;"/>


---

### 3. Detailed Design

## RGB Colors

<mark style="background:blue; color: white">Think</mark> how are red, green and blue lights added together in various ways to reproduce a broad array of colors?

<mark style="background:green; color: white">Play</mark> with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/labs.html">RBG virtual lab</a> <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/mixing/index.html">RBG color mixing</a>


<mark style="background:blue; color: white">Think</mark> Which colours will you able to obtain?

<f-next-button title="Next" />

-

<img src="./imgs/cap3_4.png" style="width:95%; max-height:90%;"/>

---

### 3. Detailed Design

##   Dynamic RGB Colors 
<mark style="background:blue; color: white">Think</mark> how you can describe the changing of the lamp colors?

<mark style="background:green; color: white">Play</mark> with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/dynamic-mixing/index.html">Dynamic RBG Color Mixing</a>

<mark style="background:blue; color: white">Think</mark> which sequence of colours are you able to obtain?

<f-next-button title="Next" />

-

<br/>
<img src="./imgs/cap3_5.PNG" style="width:95%; max-height:90%;"/>

---

### 3. Detailed Design

## Assignment: Engineering your own RGB Lamp

Grab a piece of paper and write a high-level description of how the values of the three different channels (red, green, blue) will react to the input from the environment.

***KJ: The task is not entirely clear and image does not help***

<big>Suggestions:</big>
<ul>
<li>make a diagram or a graph showing the relationship between input and colors.</li>

---

| padding: 0

<section><section>

## Wheel of emotions

</section></section>

-

<f-theme theme="light" style="background: white">

<img src="./imgs/cap3_7.png" />

<f-theme>

<f-notes title="Credits">

https://en.wikipedia.org/wiki/Robert_Plutchik

</f-notes>

