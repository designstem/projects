| 1 2

# <big>Pottery<br>B💥om</big>

## How not to blow up your kiln

<f-slider title="Process time" :value="get('scale')" to="1.2" />

<f-animation alternate set="scale" from="0.8" to="1" />

<f-animation duration="10000" set="r" />

<br />
<f-next-button />

-

<f-scene3 renderer="webgl" width="400" height="400">

<f-lathe3
  rotation="40 0 0"
  count="128"
  :scale="get('scale',1)"
  :points="[[0.5,0],[0.5,0],[1,0.5],[1,1.1],[0.8,1.1],[0.6,0.5],[0,0.1]]"
/>
</f-scene3>
  
---

# Dude where are my slides?

<f-prev-button />