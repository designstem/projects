
# <big>Color Vision Deficiency & <br />Accessibility</big>

### How to design information for people whose color perception is impaired.

<br />

<f-next-button title="Let's start" />

---

| 1 2

#### This is how a color vision deficient person would see tomatoes.

Guess which of the tomatoes and how many are already ripe, red and therefore edible.

**<mark>Click on the tomato</mark>, you think is <span style="color: var(--red)">red</span>, to see if you are right.**

-

<img src="images/tomatoes-protanopia.jpg" alt="Protanopia" v-on:click="send('next')" style="cursor:pointer;" />

---

| 1 2

### Did you guess right?

How did you choose the tomato?
If you picked the right tomatoes, congratulations! 

**For color deficient people choosing the wrong tomatoes can have serious consequences for their health,** since unripe tomatoes are poisonous and can cause nausea and vomiting.

***Think of further everyday situations*** where it is needed to be able to tell the right colors.

<br />

<f-next-button />

-

<img src="images/tomatoes-normal.jpg" alt="Normal vision" />

---

| 1 2

# Compare images

**Drag the slider** to compare normal and colorblind visions to see the difference

<br />

<f-next-button />

-

<ImageCompare :before="'images/tomatoes-normal.jpg'" :after="'images/tomatoes-protanopia.jpg'" :padding ="{left:0, right:0}" :hideAfter="false"></ImageCompare>

---

## EXPLAIN | learning stations

Find out about the following topics through working on the provided learning stations. This should enable you to optimize the accessibility of information in your design products.

- Accessibility
- The eye
- Color vision deficiency
- Subtractive and additive color mixing
- Three dimensions of color (color space models)
- Color contrast and color harmony theory
- Design rules for creating color palettes
- Summary station



---

# Colorblindness<br />simulator

<ColorblindnessSimulator />

<!--
<ColorblindnessSimulator :imageUrl="'images/before.jpg'" />
-->

---

# RGB Explorer

<f-scene3 grid>
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
</f-scene3>