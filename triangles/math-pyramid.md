| padding: 5vmin

## Calculating angles in pyramids

---






| padding: 5vmin
| rows: auto
| 1 1
| 2 3


<blockquote style="background: none;">

  ~Pyramid is a polyhedron formed by connecting a **polygonal base** and a point, called the **apex**.~

</blockquote>

#### An example

~Pyramid **ABCD.T** is a **right square pyramid**. Let's say that with base side length <f-math inline>BC = 11</f-math> and height <f-math inline>TS = 7</f-math>~

### 1. 

~At first you calculate the angle between the **base** and the **lateral face**. For example the angle between face **BCT** and **ABCD**.~

-

Your looking for a triangle in which you can calculate.



<blockquote style="background: none;">

  ~If you want to calculate the angle between two faces, you have to calculate the angle between two lines that lie on both faces and are perpendicular to the edge.~

  ~**These lines and pyramid height form a right triangle**~

  <!-- <f-inline>

  <f-slider to="1" value="0" :value="get('pyrTr', 0)" style="width:60px; border:1px solid var(--gray); border-radius:18px; padding: 0 8px; box-shadow: 0 1px 5px 0 hsla(0, 0%, 0%, 0.3); background:var(--lightblue) " integer v-on:click.native="get('pyrTr') == 1 ? set('pyrTr', 0) : set('pyrTr', 1)" />

  <small>**{{ get('pyrTr') == 1 ? 'Hide' : 'Show' }} the triangle in pyramid**</small>

  </f-inline> -->

</blockquote>

~**BC** is the edge of the two faces~
  
~**TM** is perpendicular to **BC** and **MS** is also perpendicular to **BC**.~

~**TSM** is a **right-angled triangle** from which we know two sides.~

-

<div style="position:sticky; top:25px ">
<f-scene3 responsive isometric static :key="get('pyrTr')" >
  <f-group3 rotation="0 11 0" scale="1.6" position="0 -1 0" >
    <f-hedron3 
      :count="4" 
      :height="1.2" 
      :r="1.2"
      :strokeWidth="0"
      opacity="0.4"
      rotation="-70 0 0"
      :fill="color('green')"
      :shading="false"
    />
    <f-triangle3 
      points="0.83 0 0, 0 0 0, 0 0 1.2" :fill="color('blue')" rotation="-70 0 -45" opacity="0.8" />
    <f-hedron3 
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
  <!-- <f-group :opacity="get('pyrTr') == 1 ? 0.6 : 1"> -->
  <f-group>
    <f-text position="-1.8 -1.3">A</f-text>
    <f-text position="0.2 -1.88">B</f-text>
    <f-text position="1.8 -1.3">C</f-text>
    <f-text position="-0.3 -0.3">D</f-text>
    </f-group>
  <!-- <f-group v-if="get('pyrTr')"> -->
  <f-group>
    <f-text position="-0.1 -1 0">S</f-text>
    <f-text position="1.1 -1.55">M</f-text>
  </f-group>
</f-scene>
</div>


---





| padding: 5vmin
| cols: 60% auto
| 1 1
| 2 3

#### Take a closer look at the triangle TSM

-

~One of its sides <f-math inline>(TS)</f-math> is equal to pyramid height and the other one <f-math inline>(SM)</f-math> is half of the base width. So <f-math inline blue>TS = 7</f-math> and <f-math inline green>SM = \frac{11}{2} = 5.5</f-math>~

~We want to find the angle <f-math inline red>M</f-math> &ndash; which is the same as the **angle between pyramids side <f-math inline>BCT</f-math> and base <f-math inline>ABCD</f-math>**~

<f-math inline>\tan(\color{red}M\color{black}) = \tan \big( \frac {\color{blue}opposite}{\color{green}adjascent}  \color{black} \big) = \tan \big( \frac {\color{blue}7}{\color{green}5.5} \color{black} \big) = \tan(1.27)</f-math>

so <f-math inline red>M = 51.84°</f-math>

-

<f-scene responsive grid>
  <Triangle points="1.2 -1.5, -0.8 1.2, -0.8 -1.5" :angleLabels="['M', 'T', 'S']" :angleMarkers="1" />
</f-scene>

---




| padding: 5vmin
| 1 2

### 2.

~Now we are going to look at the angle between **two lateral faces**, for instance **ABT** and **BCT**.~

~First let's look at the surfaces ABT and BCT; **these are congruent**. With the Pythagorean theorem you can calculate the unknown sides and the height of these triangles.~

~**AP is perpendicular to BT**. (the same applies, of course, to the line T in plane BCT)~

-

<div style="position:sticky; top:0;">
<f-scene responsive>
  <defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
    markerWidth="5" markerHeight="5"
    orient="auto-start-reverse" fill="lightgray" >
      <path d="M 0 0 L 10 5 L 0 10 z" />
  </marker>
  </defs>
  <triangle points="0 1.5, -1.5 -1, 1.5 -1" :angleLabels="['T', 'A', 'B']" />
  <f-line points="-1.5 -1, 0.75 0.25" strokeWidth="1" />
  <f-box r="0.3" strokeWidth="1" rotation="29" position="0.53 0.3" />
  <polyline points="0,1.5 -1.5,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(-0.15px,0.15px)" />
  <polyline points="-1.5,-1 1.5,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(0,-0.2px)" />
  <f-text position="-1 0.5" rotation="54">10.64</f-text>
  <f-text position="0 -1.5">11</f-text>
  <f-text position="0.9 0.4">P</f-text>
</f-scene>
</div>

---






| padding: 5vmin
| 1 2

To be able to calculate the length of AP, we first have to calculate angle B.

<f-math>Tan \angle B = \frac {8.90}{5.5} = 1.62</f-math> so
<f-math>\angle B = 58.90 \degree</f-math> so
<f-math>AP = 11 \times sin(58.29\degree) = 9.36</f-math>

-

<div style="position:sticky; top:0;">
<f-scene responsive >
  <defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
          markerWidth="5" markerHeight="5"
          orient="auto-start-reverse" fill="lightgray" >
        <path d="M 0 0 L 10 5 L 0 10 z" />
  </marker>
  .helpline {stroke:var(--gray)}
  </defs>

  <triangle points="0 1.5, -1.5 -1, 1.5 -1" :angleLabels="['T', 'A', 'B']" />

  <polyline points="0,1.5 -1.5,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(-0.15px,0.15px)" />
  <polyline points="0,1.5 1.5,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(0.15px,0.15px)" />
  <polyline points="0,1.32 0,-0.9" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)"  />
  <polyline points="-1.5,-1 1.5,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(0,-0.2px)" />
  <f-text position="-1 0.5" rotation="55">10.64</f-text>
  <f-text position="1 0.5" rotation="-55">10.64</f-text>
  <f-text position="0 -1.5">11</f-text>
  <f-text position="-0.1 0" rotation="90">8.90</f-text>

</f-scene>
</div>

---





| padding: 5vmin

~The triangle **APC** is the triangle where you can calculate the angle between the planes; that is angle **P**.~

~AC is the diagonal of the base **ABCD** (calculate with the Pythagorean theorem)~

-

<!-- <f-slider set="rot" /> -->

<div style="position:sticky; top:0 ">
<f-scene3 responsive isometric static :key="get('rot')" >
  <f-group3 :rotation="[0, 20, 0]" scale="1.6" position="0 -1 0" >
    <f-hedron3 
      :count="4" 
      :height="1.2" 
      :r="1.2"
      :strokeWidth="0"
      opacity="0.3"
      rotation="-70 0 0"
      :fill="color('green')"
      :shading="false"
    />
    <f-polygon3 
      points="  1.2 0 0,    -1.2 0 0,    0 -0.6 0.6,   1.2 0 0  " :stroke="color('blue')"  strokeWidth="3" fill rotation="-70 0 0" opacity="0.95" />
  </f-group3>
</f-scene3>
<f-scene responsive style="position:absolute; top:0; left:0; width:100%; height:auto;">
  <!-- <f-text position="0.25 1">T</f-text> -->
  <f-group>
    <f-text position="-1.9 -1.25">A</f-text>
    <f-text position="0.65 -1.92" :fill="color('gray')">B</f-text>
    <f-text position="1.9 -1.2">C</f-text>
    <f-text position="-0.55 -0.25" :fill="color('lightergray')">D</f-text>
  </f-group>
  <f-group>
    <f-text position="0.5 -0.3">P</f-text>
    <!-- <f-text position="1.1 -1.55">M</f-text> -->
  </f-group>
</f-scene>

</div>

---




| padding: 5vmin

~**AS** is half of **AC** because triangle **APC** is isosceles.~

<f-math>sin(\angle P^1) = \frac{7.78}{9.36} = 0.83</f-math> so
<f-math>\angle P^1 = 56.22\degree</f-math> so
<f-math>\angle P = 112.44\degree</f-math>

-

<f-scene responsive >
  <defs>
  <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5"
          markerWidth="5" markerHeight="5"
          orient="auto-start-reverse" fill="lightgray" >
        <path d="M 0 0 L 10 5 L 0 10 z" />
  </marker>
  .helpline {stroke:var(--gray)}
  </defs>

  <triangle points="0 0.75, -1.6 -0.5, 1.6 -0.5" :angleLabels="['P', 'A', 'C']" />
  <f-line points="0 0.75, 0 -0.5" strokeWidth="1" />

  <polyline points="0,0.75 -1.6,-0.5" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" style="transform: translate(-0.15px,0.15px)" />
  <f-text position="-1.1 0.4" rotation="35">9.36</f-text>
  <f-text position="0 -0.73">S</f-text>
  <f-text position="0 -1.4">15.56</f-text>
  <polyline points="-1.6,-1.5 1.6,-1.5" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" />
  <f-text position="-0.75 -0.9">7.78</f-text>
  <polyline points="-1.6,-1 0,-1" fill="none" stroke="lightgray" stroke-width="0.02" marker-start="url(#arrow)" marker-end="url(#arrow)" />

</f-scene>

