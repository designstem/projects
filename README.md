# <big><big>DesignSTEM</big></big>

<big><big>Science, Technology, Engineering and Math for future designers and craftsmen. Learn STEM topics in fun, visual and interactive way. Our learning scenarios are powered by <a href="https://designstem.github.io/fachwerk">designstem.github.io/fachwerk</a> framework, development progress can be tracked here <a href="https://designstem.github.io/homepage">designstem.github.io/homepage</a></big></big>

<br>

<div class="grid" style="--cols: 1fr 1fr 1fr 1fr">

<f-card v-for="s in ['algorithms','colorbits','colorblindness','dyes','easing','example','frequency','frequency_camera','hexagons','metamerism','patterns','plastics','pottery','rgblamp_mixer','rgblamp_timeline','rgblamp_vision','spirals','sunshade','tattoo','tattoo_icons','triangles_explorer','triangles_corners']">
  <a :href="'./' + s"><h4>{{ s }}</h4></a>
  <br><br><br><br><br>
</f-card>
