| chapter: Engineering
| section: Engineering introduction

| 1 1 1
| 2 2 2
| 3 4 5
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(6,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Engineering','Prototyping','Communication']"
    :background="i == 3 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Engineering

-

### 1. Choose best idea

Look at whether each possible solution/idea meets your design requirements. Some solutions probably meet more requirements than others. Reject solutions that do not meet the requirements!

-

### 2. Develop the idea

Development involves the refinement and improvement of an idea, and it continues throughout the design process, often even after a product ships to customers. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>
So don't stop developing, even if you are content with the result in between. ***There is always a better solution at the horizon.***

-

### 3. Test and redesign

The design process involves multiple iterations and redesigns of your final solution. You will likely test it, find new problems, make changes, and test again before settling on a final design. This is important, so don't be lazy! 😉 <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>


<br>

<f-next-button />

---

## How is color produced in devices?

~Before you start to build your RGB lamp, you need to understand how RGB works!~
~The RGB color model is an additive color model in which red, green and blue light are added together to reproduce a broad array of colors. Our eyes also work with RGB, because we have red, green and blue cones in our retina.~
<br>
~In the RGB color model, 0% means no light, whereas 255 means 100% of light. So if I have Red 255, Green 0 and Blue 0, I will get red light.~
**Try it yourself!**


##### 🎛️ Try to produce white light in the center! Which settings will you need?

<f-slider title="Red" value="64" to="255" integer set="r" />

<f-slider title="Green" value="128" to="255" integer set="g" />

<f-slider title="Blue" value="196" to="255" integer set="b" />

<br>

For further information, see also the workshop on Color Vision Deficiency! There you will find a detailed explanation on the RGB model and also tasks that will help you understand it better. <a href="../colorblindness">Click here!</a>


<br>
~**When you know how RGB works, please continue on the following page:**~
<f-next-button />

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

| 1 1
| 2 3
| rows: auto 1fr

## How many bits are needed to represent your bit depth?

-

#### 🎛️ Play

Play with <a class="tertiary" href="https://designstem.github.io/scenarios/colorbits/">Bits and Colors</a>

#### Read more

https://docs.krita.org/en/general_concepts/colors/bit_depth.html

-

Bits|Colors|Description
---|---|---
`1`|2|Only two colors in total, usually black and white
`4`|16|Many early games were presented in this color palette
`8  `|256|8bit images are commonly used in games to save on memory for textures and sprites

---

## RGB Colors

#### 🤔 Think

How red, green and blue lights added together in various ways to reproduce a broad array of colors?

#### 🎛️ Play

Play with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/labs.html">RBG virtual lab</a> and <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/mixing/index.html">RBG color mixing</a>

#### 🤔 Think

Which colours will you able to obtain?

-

##   Dynamic RGB Colors 

#### 🤔 Think

How you can describe the changing of the lamp colors?

#### 🎛️ Play

Play with <a class="tertiary" href="https://designstem.github.io/scenarios/rgblamp_vision/dynamic-mixing/index.html">Dynamic RBG Color Mixing</a>

#### 🤔 Think

Think which sequence of colours are you able to obtain?

---

| 1 1 
| 2 3
| rows: auto 1fr

<caption>Assignment</caption>

## RGB light reacting to external sources

-

Grab a piece of paper and write a high-level description of how the values of the three different channels (red, green, blue) will react to the input from the environment.

Make a diagram or a graph showing the relationship between input and colors

#### Key questions

* What is the relationship between environmental parameters and colors?
* How do you interpolate the missing values? (E.g. spline, keyframes)

-

Outside temperature|Color|Red|Green|Blue
---|---|---|---|---
Cold|Blue|`0`|`10`|`200`
Warm|Yellow|`200`|`200`|`0`
Hot|Red|`200`|`0`|`10`
