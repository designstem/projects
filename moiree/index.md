
# <big>Moire</big>

## Future content

- what it is 
- why you should avoid it (examples)
- why you should love it (examples)
- design object: an "animated" printed object
- math behind it (who even cares? why should someone know this?)

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
