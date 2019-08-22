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
  <f-group scale="1.3" rotation="-180">
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

## How many bits are needed to represent your bit depth?

***TODO: Add tool***

Bits|Colors|Description
---|---|---
`1`|2|Only two colors in total, usually black and white
`4`|16|Many early games were presented in this color palette
`8  `|256|8bit images are commonly used in games to save on memory for textures and sprites

<a class="tertiary" href="https://designstem.github.io/scenarios/colorbits/">Bits and Colors</a>

---

## RGB Colors

#### 🤔 Think

How red, green and blue lights added together in various ways to reproduce a broad array of colors?

#### 🎛️ Play

Play with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/labs.html">RBG virtual lab</a> and <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/mixing/index.html">RBG color mixing</a>

#### 🤔 Think

Which colours will you able to obtain?



---

##   Dynamic RGB Colors 

#### 🤔 Think

How you can describe the changing of the lamp colors?

#### 🎛️ Play

Play with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/dynamic-mixing/index.html">Dynamic RBG Color Mixing</a>

#### 🤔 Think

Think which sequence of colours are you able to obtain?

<f-next-button title="Next" />

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

