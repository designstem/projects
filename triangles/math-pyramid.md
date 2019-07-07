| padding: 5vmin

# Calculating angles in pyramids

---





| padding: 5vmin
| rows: auto
| 1 1
| 2 3


<blockquote style="background: none;">

~Pyramid is a polyhedron formed by connecting a **polygonal base** and a point, called the **apex**.~

</blockquote>

#### An example

~Pyramid **ABCD.T** is a **right square pyramid**.~

### 1. 

~At first let's calculate the angle between the **base** *(ABCD)* and **the lateral face** *(for example BCT)*~

-



<blockquote style="background: none;">

  ~If we want to calculate the **angle between two faces**, we have to calculate the **angle between two lines that lie on both faces and are perpendicular to the edge**.~

  ~**These lines and pyramid height form a right triangle**~

  <f-inline>

  <f-slider to="1" value="0" :value="get('pyrTr', 0)" style="width:60px; border:1px solid var(--gray); border-radius:18px; padding: 0 8px; box-shadow: 0 1px 5px 0 hsla(0, 0%, 0%, 0.3); background:var(--lightblue) " integer v-on:click.native="get('pyrTr') == 1 ? set('pyrTr', 0) : set('pyrTr', 1)" />

  <small>**{{ get('pyrTr') == 1 ? 'Hide' : 'Show' }} the triangle in pyramid**</small>

  </f-inline>

</blockquote>

~**BC** is the edge of the two faces~
  
~**TM** is perpendicular to **BC** and **MS** is also perpendicular to **BC**.~

-

<div style="position:sticky; top:25px ">
<f-scene3 responsive isometric static :key="get('pyrTr')" >
  <f-group3 rotation="0 11 0" scale="1.6" position="0 -1 0" >
    <f-hedron3 
      :count="4" 
      :height="1.2" 
      :r="1.2"
      :strokeWidth="0"
      :opacity="get('pyrTr') == 1 ? 0.3 : 0.5"
      rotation="-70 0 0"
      :fill="color('green')"
      :shading="false"
    />
    <f-triangle3 
      v-if="get('pyrTr')"
      points="0.83 0 0, 0 0 0, 0 0 1.2" :fill="color('blue')" rotation="-70 0 -45" opacity="0.8" />
    <f-hedron3 
      v-if="get('pyrTr')"
      strokeWidth="0"
      :fill="color('darkblue')"
      :shading="false"
      :count="4"
      :r="0.1" 
      rotation="20 -45 45" 
      position="0.07 0.05 0" 
    />
  </f-group3>
  <f-group3 rotation="0 0 20" scale="1.6" position="0 -1 0">
    <!-- <f-line3 points="0.5 0 0, 0 0 0, 0 1 0" :stroke="color('black')" /> -->
  </f-group3>
</f-scene3>
<f-scene responsive style="position:absolute; top:0; left:0; width:100%; height:auto;">
  <f-text position="0.1 1.1">T</f-text>
  <f-group :opacity="get('pyrTr') == 1 ? 0.6 : 1">
  <!-- <f-group> -->
    <f-text position="-1.8 -1.3">A</f-text>
    <f-text position="0.2 -1.88">B</f-text>
    <f-text position="1.8 -1.3">C</f-text>
    <f-text position="-0.3 -0.3">D</f-text>
    </f-group>
  <f-group v-if="get('pyrTr')">
    <f-text position="-0.1 -1 0">S</f-text>
    <f-text position="1.1 -1.55">M</f-text>
  </f-group>
</f-scene>
</div>


---





| padding: 0 5vmin
| cols: 60% auto
| 1 1
| 2 3

#### Take a closer look at the triangle TSM

-

~**TSM** is a **right-angled triangle** from which we know **two sides**.~

~Let's say that length of <f-math inline blue>TS = 7</f-math> and <f-math inline green>SM = 5.5</f-math>~

~The angle <f-math inline red>M</f-math> is the **angle between side BCT and base ABCD**~

<f-math inline>\tan(\color{red}M\color{black}) = \frac {\color{blue}opposite}{\color{green}adjascent} \color{black} = \tan(1.27)</f-math>

so <f-math inline red>M = 51.84°</f-math>

-

<f-scene responsive grid>
  <Triangle points="1.2 -1.5, -0.8 1.2, -0.8 -1.5 " :angleLabels="['M', 'T', 'S']" :angleMarkers="1" />
</f-scene>

---




| padding: 5vmin

### 2.

~Calculate the **angle between two lateral faces**, for instance **ABT** and **BCT**.~


<f-hr />


(More content will be added)



