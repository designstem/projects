
# <big>Colorblindness</big>

## Interactive components / simulations

<details>
  <summary>Find out more</summary>
  <h2>This content was hidden</h2>
</details>

---

# Image compare

<ImageCompare :before="'images/before.jpg'" :after="'images/after.jpg'" :padding ="{left:20, right:20}" :hideAfter="false"></ImageCompare>

<!--<f-next-button />-->

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