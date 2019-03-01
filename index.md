# <big><big>DesignSTEM</big></big>

<big><big>Science, Technology, Engineering and Math for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way. Our learning scenarios are powered by <a href="https://designstem.github.io/fachwerk">designstem.github.io/fachwerk</a> framework, development progress can be tracked here <a href="https://designstem.github.io/homepage">designstem.github.io/homepage</a></big></big>

---

| 1 1 1
| 2 3 4

### Featured scenarios

-

<a href="./algorithms">
<f-card style="font-weight: normal;">

<center>
<f-scene>
  <component :is="any(['f-circle-pattern','f-grid-pattern'])" scale="0.7" count="12">
    <component :is="any(['f-circle','f-box','f-hexagon'])" slot-scope="data" :r="any([0.1,0.3,0.6])" />
  </component>
</f-scene>
</center>
<br>

### Algorithms

...
</f-card>
</a>

-

<a href="./colorblindness">
<f-card style="font-weight: normal;">

<center>
<f-scene>
  <component :is="any(['f-circle-pattern','f-grid-pattern'])" scale="0.7" count="12">    <component :is="any(['f-circle','f-box','f-hexagon'])" slot-scope="data" :r="any([0.1,0.3,0.6])" />
  </component>
</f-scene>
</center>
<br>

### Colorblindness

...
</f-card>
</a>

-

<a href="./frequency">
<f-card style="font-weight: normal;">

<center>
<f-scene>
  <component :is="any(['f-circle-pattern','f-grid-pattern'])" scale="0.7" count="12">    <component :is="any(['f-circle','f-box','f-hexagon'])" slot-scope="data" :r="any([0.1,0.3,0.6])" />
  </component>
</f-scene>
</center>
<br>

### Frequency

...
</f-card>
</a>


---

### Other scenarios

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr">

<div v-for="s in ['colorbits','dyes','easing','example','frequency_camera','hexagons','metamerism','patterns','plastics','pottery','rgblamp_mixer','rgblamp_timeline','rgblamp_vision','spirals','sunshade','tattoo','tattoo_icons','triangles_explorer','triangles_corners']">
  <a :href="'./' + s">
  <f-card>
    <center>
    <f-scene width="200" height="200">
      <component :is="any(['f-grid-pattern','f-hex-pattern','f-spin-pattern','f-circle-pattern','f-hex-pattern'])" scale="0.7" count="12">
        <component :is="any(['f-circle','f-box','f-hexagon'])" slot-scope="data" :r="any([0.1,0.3,0.6])" />
      </component>
    </f-scene>
    </center>
    <h4>{{ s }}</h4>
    ...
  </f-card>
  </a>
</div>
