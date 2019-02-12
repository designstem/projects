### Be aware:
# <big><big>This is moiré!</big></big>



#### Future content 

- what is moiré  
- why you should avoid it (examples)
- why you should love it (examples)
- design object: an "animated" printed picture
- math behind it (who even cares? why should someone know this?)

<f-next-button title="Let's start!" />

---

# What is moiré?


Wikipedia says:

>In mathematics, physics, and art, a moiré pattern is large-scale interference pattern that can be produced when an opaque ruled pattern with transparent gaps is overlaid on another similar pattern. For the moiré interference pattern to appear, the two patterns must not be completely identical, but rather e.g. displaced, rotated or have slightly different pitch.

<br />

#### Wait... what? 

<br />

<f-next-button title="Calm down and keep going" />

---

| 1 1
| 2 3

Actually it is exactly like Wikipedia said. Let's go step by step

# What we need to produce a moiré effect is:

##### **1** 2 transparent patterns (there may be more, but we need at least 2)
##### **2** one is overlaid with another
##### **3** they must be slightly displaced (for example rotated) 

<br /> <br />

-

Here we tried to reproduce these steps - there are two striped patterns positioned on top of each other. 
Once you move the rotation slider, you'll see...

<div v-if="get('rotate', 0) != 0">

# a moiré pattern! 🤘🤘🤘
<f-next-button title="So what?" />

</div>

-

<f-slider set="rotate" from="0" to="90" title="Rotation" :value="get('rotation', 0)" />
<f-canvas  width="500" style="width:500px; height:20vh;">
  <MoireLines gap="6" :rotate="get('rotate', 0)" lineWidth="2" />
</f-canvas>


---


# And so on...

Some more 

<f-next-button />


---


# Moiree with triangles

<f-slider set="width" from="6" to="50" />
<f-slider set="rotate" from="-180" to="180" />

<f-canvas width="700" height="500">
  <MoireTriangles :width="get('width', 10)" :rotate="get('rotate', 0)" />
</f-canvas>

<f-next-button />

---

# Moiree with squares

<f-slider set="width" from="4" to="50" />
<f-slider set="rotate" from="-180" to="180" />

<f-canvas width="700" height="500">
  <MoireSquares :width="get('width', 10)" :rotate="get('rotate', 0)" />
</f-canvas>

<f-next-button />

---

# Moiree with lines

<f-slider set="gap" from="4" to="50" />
<f-slider set="rotate" from="-90" to="90" />
<f-slider set="lineWidth" from="1" to="40" integer />
<!-- <f-slider title="c" :value="get('c', 0)" v-on:input="set('c',$event)" /> -->
<f-canvas width="700" height="500">
  <MoireLines :gap="get('gap', 10)" :rotate="get('rotate', 0)" :lineWidth="get('lineWidth', 1)" />
</f-canvas>

<f-next-button />

---

# Moiree with circles

<f-slider set="gap" from="4" to="50" />
<f-slider set="translate" from="-300" to="300" title="move" />
<f-slider set="lineWidth" from="1" to="40" integer />
<f-canvas width="700" height="500">
  <MoireCircles :gap="get('gap', 10)" :translate="get('translate', 0)" :lineWidth="get('lineWidth', 1)" />
</f-canvas>
