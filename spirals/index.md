| theme: yellow
| height: fit

# Spirals!

<big>Intoduction to the scenario. Intoduction to the scenario. Intoduction to the scenario. Intoduction to the scenario. Intoduction to the scenario. Intoduction to the scenario. Intoduction to the scenario.</big> 

<f-next-button title="Lets go" />

---

# Slide 2
| theme: blue
| height: fit

Why just one spin? Let's have more of it and make it user-controllable.
Please feel free to try!!!

<f-slider value="1" from="1" to="10" step="0.001">
<f-scene grid slot-scope="{value}">
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,360 * value,20)
      .map(a => [
        polarx(a,scale(a,0,360 * value,1,0)),
        polary(a,scale(a,0,360 * value,1,0))
      ])"
    :stroke="color('red')"
    curved
  />
</f-scene>
</f-slider>
