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
  <f-grid-pattern scale="0.8">
    <f-circle slot-scope="data" :r="any([0.1,0.2,0.3])" />
  </f-grid-pattern>
</f-scene>
</center>
<br>

### Algorithms

Algorithms are all around us!
</f-card>
</a>

-

<a href="./algorithms">
<f-card style="font-weight: normal;">

<center>
<f-scene>
  <f-grid-pattern scale="0.8">
    <f-circle slot-scope="data" :r="any([0.1,0.2,0.3])" />
  </f-grid-pattern>
</f-scene>
</center>
<br>

### Color blindness

Algorithms are all around us!
</f-card>
</a>

-

<a href="./algorithms">
<f-card style="font-weight: normal;">

<center>
<f-scene>
  <f-grid-pattern scale="0.8">
    <f-circle slot-scope="data" :r="any([0.1,0.2,0.3])" />
  </f-grid-pattern>
</f-scene>
</center>
<br>

### Smart Tattoo

Algorithms are all around us!
</f-card>
</a>


---

### Other scenarios

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr">

<f-card v-for="s in ['algorithms','colorbits','colorblindness','dyes','easing','example','frequency','frequency_camera','hexagons','metamerism','patterns','plastics','pottery','rgblamp_mixer','rgblamp_timeline','rgblamp_vision','spirals','sunshade','tattoo','tattoo_icons','triangles_explorer','triangles_corners']">
  <a :href="'./' + s"><h4>{{ s }}</h4></a>
  <br><br><br><br><br>
</f-card>
