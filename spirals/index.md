| theme: yellow
| height: fit

# Spirals!

<big>Intoduction to the scenario.</big> 

<f-next-button title="Lets go" />

---

# Slide 2
| theme: blue


### Time for a spiral


Now the preparations are done, we are ready to draw a spiral. Instead of hardcoding the radius to be `1`, we use a scaling function to reduce the radius from `1` to `0`: `polarx(a,scale(a,0,360,1,0))`.

<f-scene grid>
  <f-circle r="1" opacity="0.1" />
  <f-line
    :points="range(0,359,20)
      .map(a => [
        polarx(a,scale(a,0,360,1,0)),
        polary(a,scale(a,0,360,1,0))
      ])"
    :stroke="color('red')"
    curved
  />
</f-scene>

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
