| chapter: Introduction
| section: First page
| id: tr-start
| theme: blue
| cols: 60vw auto
| rows: auto auto auto
| 1 4
| 2 4
| 3 4
| height: 100vh


&nbsp;

-

<div style="z-index:5; position:relative;">

<div>
<big>

  # Looking for triangles

</big>
</div>

&nbsp;

~*Design a polyhedral shape bird nesting box<br /> and learn the geometry behind it.*~

<!-- <f-sidebar src="geometry-triangles.md" title="Geometry of triangles" width="50vw" /> -->

### &nbsp;

<f-next-button title="Let's start!" />

</div>

-



-

<div style="position:absolute; top:0; right:0; width:70vw; height:100vh; overflow:hidden;">
<div style="position:absolute; top:-60vh; right:-40vw; width:130vw; height:160vh; overflow:hidden;">

<f-scene3 style="width:100%; height:100%; opacity:0.2" class="fp-hedron crisp" isometric static>
  <!-- <f-rotation3 duration="60000"> -->
  <f-polyhedron3
      hedron="Icosahedron"
      position="0 0 0"
      rotation="0 10 20"
      scale="1"
    />
    <!-- </f-rotation3> -->
</f-scene3>
</div>
</div>

---










| section: The assignment
| id: tr-assignment
| height: 100vh
| 1 2
| 3 2



### &nbsp;

## 📝 The assignment

&nbsp;

1. ~Design a nesting box for a bird.~
2. ~The design should be based on a <f-sidebar title="polyhedral shape" src="./math-polyhedra.md" style="--sidebar-width: 50vw" overlay />~
3. ~The material should have some thickness (wood, etc).~

-

<f-image src="./images/polyhedron-nestbox.jpg" style="background-size: contain; background-repeat:no-repeat; background-position:center" />

<small>*Nidusa birdhouse by Vladimir Sinelnikov (<f-link to="https://www.artlebedev.com/nidusa/">Art Lebedev Studio</f-link>)*</small>

-

<f-next-button />

---











| section: Design problem
| 1 2 
| 3 2



## Design problem <sup>🤔</sup>

~There are birds that rely heavily on human made nesting boxes.~

#### Find out….

1. ~which birds these are.~
2. ~what kind of nesting boxes the birds need.~
3. ~if designers can solve other problems with a similar design approach?~

-

<f-image src="./images/birdsnest.jpg" style="--image-min-height:50vh; " />

-
<f-notes title="Credits">

Image source:
Bird box by Blüüm, https://www.bluum.co.uk/products/bird-box-with-green-roof-planter

</f-notes>

<f-next-button />

---







| section: Why polyhedral shape?
| 1 1
| 2 3
| rows: auto
| cols: 40% auto


<h3>🙋‍<sup><sup>💬</sup></sup><span style="font-family:var(--font-serif); font-weight:400;font-style:italic;font-size:70%;">Do these birds absolutely HAVE TO live inside a polyhedron?</span></h3>

-

#### ~No, not really...~

<!-- A nesting box, as such, doesn't have to be a polyhedron, there are other options too.  -->

### ...so why are we making one?


<blockquote style="background: none;">
  <section>

  ~Let's think of our nesting box as a **small-scale model to solve much bigger problems**.👉~
  
  </section>
</blockquote>

##### &nbsp;

<f-next-button />

-

#### A few examples: 

- ~People who are suffering from natural disasters or war zones all over the world often need quick shelter. Some of the most efficient solutions for such constructions are based on <a href="https://www.beale.af.mil/News/Article-Display/Article/948494/beale-airmen-make-a-difference-for-homeless-veterans/" target="_blank">polyhedral design</a>.~
- ~Once we go to Mars (or camping), we might need lightweight and quick- or autoassembled and modular <a href="https://www.geek.com/news/nasa-reveals-top-three-designs-for-space-friendly-homes-on-mars-1781096/" target="_blank">solutions for housing</a>~
- ~And last but not least – the <a href="https://www.archdaily.com/883389/prefab-pop-up-shelter-designed-for-burning-man-and-perfected-for-disaster-relief" target="_blank">Burning Man Festival</a> – which takes us back to the first point.~

---








| chapter: Key steps
| section: Key steps
| rows: auto auto auto
| 1 1 1 1 1
| 2 3 4 5 6
| 7 7 7 7 7

## Key steps

~Design a nesting house based on a polyhedral shape.~

-

## 1.

~Find a bird for which to build a nesting box.~

-

## 2.

~Sketch your ideas.~

-

## 3.

~Create prototype of nesting box using cardboard or paper.~

-

## 4.

~Make and note all the calculations needed for building the nesting box.~

-

## 5.

~Build the nesting box from wood or similar materials.~

-

<f-next-button />

---











| height: 100vh
| theme: blue 

<center>

<div>

  <h1 style="--base:16px">🤔</h1>

  # “But how?”
  ~you may ask...~

### &nbsp;

  <f-next-button title="Let's see" />

</div>

</center>

---







| id: tr-geometry
| 1 1
| 2 3
| 4 4
| rows: auto 

## Geometry behind the nesting box

~For designing and building a solid polyhedral object you have to:~

-

## 1.

~**simplify the polyhedral object** into more basic geometrical objects, such as **polygons**, **triangles** and **pyramids**~

-

## 2.

~**use geometry** to calculate correct **dimensions and angles** of these “building blocks”~

-

<f-next-button />

---








| section: Simplyfying the polyhedra
| height: 100vh
| rows: auto auto auto
| 1 1 1
| 2 3 4
| 5 5 5

## Simplifying the polyhedra

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-polyhedron3 hedron="Cube" rotation="15 10 0" position="-0.7 0.7 -1" scale="1" :fill="color('yellow')" :shading="true" />
  <f-polyhedron3 hedron="Octahedron" rotation="0 20 20" position="1 1 0" scale="0.8" :fill="color('blue')" :shading="true" />
  <f-polyhedron3 hedron="Icosahedron" rotation="0 10 20" scale="0.8" :fill="color('green')" :shading="true" />
  <f-polyhedron3 hedron="Dodecahedron" rotation="0 10 20" position="1 -1 1" scale="1" :fill="color('yellow')" :shading="true" />
  <f-polyhedron3 hedron="Tetrahedron" rotation="0 10 20" position="-1 -0.8 1" scale="1.2" :fill="color('orange')" :shading="true" />
  
</f-scene3>

<div style="text-align:center">

### Polyhedra <f-rightarrow-icon />

~Get to know the 5 regular polyhedral shapes a.k.a. **Platonic solids**~

</div>


<!-- <a class="primary" href="../triangles_explorer">Explore polyhedra</a> -->

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-group3 rotation="10 30 15" scale="1.5">
  <f-polyhedron3 hedron="Cube" scale="1" opacity="0.4" :fill="color('gray')" :shading="true" />
  
  <f-polygon3
    points="
      -0.5    -0.5,
       0.5    -0.5,
       0.5     0.5,
      -0.5     0.5,
      -0.5    -0.5
    "
    :stroke="color('darkergray')"
    position="0 0 0.7"
    stroke-width="4"
    :fill="color('yellow')"
    />
    <f-polygon3
    points="
      -0.5  -0.5,
       0.5  -0.5,
       0.5   0.5,
      -0.5   0.5,
      -0.5  -0.5
    "
    :stroke="color('darkergray')"
    position="0 0.6 0"
    rotation="90 0 0"
    stroke-width="4"
    :fill="color('yellow')"
    :opacity="0.7"
    />
    <f-polygon3
    points="
      -0.5  -0.5,
       0.5  -0.5,
       0.5   0.5,
      -0.5   0.5,
      -0.5  -0.5
    "
    :stroke="color('darkergray')"
    position="-0.6 0 0"
    rotation="0 90 0"
    stroke-width="4"
    :fill="color('yellow')"
    :opacity="0.7"
    />
  </f-group3>
</f-scene3>

<div style="text-align:center">

### <f-leftarrow-icon /> Polygons <f-rightarrow-icon />

~Find the polygons: the sides of a polyhedron~

</div>

-

<f-scene3 isometric class="fullWidthScene crisp" static>

  <f-group3 rotation="10 30 15" scale="1.5">
  <f-polyhedron3 hedron="Cube" scale="1" opacity="0.2" :fill="color('gray')" :shading="true" />
    <f-polygon3 v-for="(p,i) in 4"
    :key="'triangle'+i"
    points="
      -0.5    -0.5,
       0.5    -0.5,
       0         0,
      -0.5    -0.5
    "
    :stroke="color('darkergray')"
    stroke-width="4"
    :fill="color('yellow')"
    :shading="false"
    :rotation="`0 0 ${i*90}`"
    :position="i == 0 ? '0 -0.1 0.7' : '0 0 0.7'"
    :opacity="i == 0 ? 1 : 0.7"
    />
  </f-group3>
</f-scene3>

<div style="text-align: center">

### <f-leftarrow-icon /> Triangles

~Find triangles: the “building blocks” of polygons~

</div>

-

<f-next-button />

---









| chapter: Triangles
| section: Let's start with triangles
| id: tr-triangles
| cols: 50vw auto
| rows: auto 
| height: 100vh
| 1 1
| 2 3
| 4 3

## Let’s start with triangles! 

-

<blockquote style="background:none;">

  ~**Triangle is the basic element** that polygons and polyhedra are made of.~
  
</blockquote>

~So let’s see, what type of triangles exist and what kind of relations exist between triangle’s sides and angles, that we can use in our project.~

-

<small>👇 *You can drag the corners of the triangle*</small>

<f-scene responsive class="fullWidthScene" v-slot="{ mouse }" grid>
  <f-drag
    :mouse="mouse"
    points="-1.5 -1.2, 1.5 -1.2, 0 1.42"
    v-slot="{ points }"
  >
  <Triangle :points="points" :angleMarkers="3" :angleInfo="true" />
  </f-drag>
</f-scene>


<!-- <f-scene grid v-slot="{ mouse }" width="300">
  <f-drag
    :mouse="mouse"
    points="-1 1, 1 -1, 1 1"
    v-slot="{ points }"
  >
    <Triangle :points="points" :angleMarkers="3" />
  </f-drag>
</f-scene> -->

-

<f-next-button title="Next: Geometry of triangles" />

---





| section: Geometry of triangles
| height: 100vh
| rows: auto
| 1 1 1
| 2 3 4
| 5 5 5

## Geometry of triangles 

-

#### The triangle 

~What defines a triangle and what kind of different triangles we know~

<f-sidebar src="math-triangle-types.md" title="Triangle types" overlay style="--sidebar-width: 60vw"> 
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">Triangle types <f-arrow-icon rotation="-45" /></a>
</f-sidebar>

-

#### Geometry

~Calculations based on triangle angles and sides~


<f-sidebar src="math-triangle-calculations.md" title="Geometry of triangles" overlay style="--sidebar-width: 60vw">
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">Geometry of triangles <f-arrow-icon rotation="-45" /></a>
</f-sidebar>

-

#### Trigonometry

~Calculations based on trigonometric functions~

<f-sidebar src="math-triangle-trigonometry.md" title="Trigonometry" overlay style="--sidebar-width: 60vw">
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">Trigonometry <f-arrow-icon rotation="-45" /></a>
</f-sidebar>

-

<f-next-button title="Next: Polygons" />

---







| chapter: Polygons
| section: Polygons
| id: tr-polygons
| height: 100vh
| cols: 50vw auto
| rows: auto
| 1 3
| 2 3 

## Polygons

-

<blockquote style="background: none;">

  ~**A polygon is any 2-dimensional shape formed with straight lines**.~
  
</blockquote>

~Polygons can be of any shape, but we concentrate on the ***regular polygons***, because **those form the sides of regular polyhedra**, we are interested in.~

<small style="color: var(--gray)">*By the way, the equilateral triangle itself is the simplest regular polygon.*</small>

~So, in order to build a polyhedron, let’s first get familiar with it’s sides – **the polygons**.~

<!-- <f-sidebar src="math-polygon.md" title="Geometry of polygons" width="60vw" overlay />  -->

### &nbsp;

<f-next-button />

-

<div style="position:sticky; top: 20vh;">
  <f-scene responsive >
    <f-regularpolygon :fill="color('yellow')" stroke count="4" scale="1" position="-0.7 -0.4" rotation="-66" />
    <f-regularpolygon count="6" scale="1" position="0 0" rotation="0" />
    <f-regularpolygon count="3" scale="0.6" position="-1.2 1.2" rotation="20" />
    <f-regularpolygon :fill="color('yellow')" stroke count="3" scale="0.4" position="0.8 0" rotation="40" />
    <f-regularpolygon count="4" scale="0.6" position="1.2 1.2" rotation="15" />
    <f-regularpolygon :fill="color('yellow')" stroke count="4" scale="0.3" position="0.3 1.7" rotation="45" />
    <f-regularpolygon count="5" scale="0.6" position="1.2 -1.2" rotation="0" />
    <f-regularpolygon :fill="color('yellow')" stroke count="5" scale="0.3" position="0 -1.7" rotation="0" />
    <f-regularpolygon  count="7" scale="0.6" position="-1.1 -1.2" rotation="0" />
  </f-scene>
</div>

---










| section: Simplification of polygons

| rows: auto
| 1 1 1
| 2 3 4
| 5 5 5
| 6 6 6

## Simplification of polygons <sup>🤔</sup>

~Looking at these polygons below, **how would you simplify these shapes** *(based on what you know for now about triangles)* to calculate angles, sides, circumference, area etc of the polygon?~ 

-

<f-scene grid responsive class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck1', true);}" v-on:mouseup.native="()=>{set('polyCheck1', false);}" v-on:touchstart.native="()=>{set('polyCheck1', true);}" v-on:touchend.native="()=>{set('polyCheck1', false);}">
  <f-group v-if="get('polyCheck1', false)">
    <Triangle :fill="color('yellow')" :points="[ [0,1], [0,-1.25], [1.27,-1.25] ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="3" r="1.5" rotation="180" position="0 -0.5" :strokeWidth="4" />
</f-scene>

-

<f-scene grid responsive class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck2', true);}" v-on:mouseup.native="()=>{set('polyCheck2', false);}" v-on:touchstart.native="()=>{set('polyCheck2', true);}" v-on:touchend.native="()=>{set('polyCheck2', false);}">
  <f-group v-if="get('polyCheck2', false)" v-for="(t,i) in 6" :key="'t'+i" :rotation="(360/5)*i">
    <Triangle :fill="i == 0 ? color('yellow') : 'none'" :points="[ [0,0], polarxy( 360/5*-0.5, 1.5), polarxy( 360/5*0.5, 1.5) ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="5" r="1.5" rotation="180" :strokeWidth="4" />
</f-scene>

-

<f-scene grid responsive class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck3', true);}" v-on:mouseup.native="()=>{set('polyCheck3', false);}" v-on:touchstart.native="()=>{set('polyCheck3', true);}" v-on:touchend.native="()=>{set('polyCheck3', false);}">
  <f-group v-if="get('polyCheck3', false)" v-for="(t,i) in 6" :key="'t'+i" :rotation="(360/6)*i">
    <Triangle :fill="i == 0 ? color('yellow') : 'none'" :points="[ [0,0], polarxy( 360/6*-0.5, 1.5), polarxy( 360/6*0.5, 1.5) ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="6" r="1.5" rotation="30" :strokeWidth="4" />
</f-scene>

-

<center>

  👆 <small>Click on a polygon to see the answers</small> ☝

</center>

-

<f-next-button />

---










| height: 100vh

| rows: auto
| cols: 50vw auto
| 1 1
| 2 3

## Simplification of polygons

-

~As you probably know  by now, **every single polygon can be divided into triangles**.~

~Since we already are familiar with triangles and how to solve them, **we can use triangles to solve the polygons**, too.~

&nbsp;

#### Here is how:

<f-sidebar src="math-polygon.md" title="How to solve polygons" overlay style="--sidebar-width: 60vw">
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">Polygons and how to solve them <f-arrow-icon rotation="-45" /></a>
</f-sidebar>

## &nbsp;

<f-next-button title="Next: 2D to 3D" />

-

<f-scene grid responsive class="fullWidthScene">
  <f-group v-for="(t,i) in range( 1, get('polySides', 3) )" :key="'tr'+i" :rotation="i*(360/get('polySides', 3))">
    <Triangle 
      :points="[ [0,0], polarxy( 360/get('polySides', 3)*-0.5, 1.5), polarxy( 360/get('polySides', 3)*0.5, 1.5) ]" 
      :angleLabels="i==0 ? ['A', 'B', 'C'] : false" 
      :angleInfo="i==0 ? true : false"
      :opacity="i==0 ? 1 : 0.25"
      :fill="color('yellow')" 
      :strokeWidth="3"
    />
  </f-group>
</f-scene>

<f-slider set="polySides" from="3" to="12" integer value="3" title="Number of sides" />

---










| height: 100vh

| rows: auto
| cols: 75% auto
| theme: blue
| 1 4
| 2 4
| 3 4


&nbsp;

-

# From 2D to 3D

~Step by step we are getting closer to our final task &ndash; a **polyhedral shape**.~

~We now know about **triangles**, that can be used to make a **polygon** *(regular polygons in our case)*. And regular polygons, combined together in certain manner, form the sides of a **regular polyhedron**.~

&nbsp;

<f-next-button title="Next: Polyhedron" />

-

&nbsp;

-

&nbsp;

---











| chapter: Polyhedra
| section: Regular polyhedra
| id: tr-polyhedra
| height: 100vh

| gap: 0
| rows: auto
| 1 1 1 1 1
| 2 3 4 5 6
| 7 7 7 7 7
| 8 8 8 8 8


## Polyhedra

~**Regular polyhedra** *(polyhedra = polyhedron in plural form)* are comprised of **polygons**.~ 
~There are **5 convex regular polyhedra**, also known as **platonic solids**.~

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-rotation3>
    <f-polyhedron3 hedron="Tetrahedron" rotation="0 10 20" scale="1.8" />
  </f-rotation3>
</f-scene3>

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-polyhedron3 hedron="Cube" rotation="15 10 0" scale="1.8" />
</f-scene3>

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-polyhedron3 hedron="Octahedron" rotation="0 20 20" scale="1.5" />
</f-scene3>

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-polyhedron3 hedron="Dodecahedron" rotation="0 10 20" scale="1.5" />
</f-scene3>

-

<f-scene3 isometric class="fullWidthScene crisp" static>
  <f-polyhedron3 hedron="Icosahedron" rotation="0 10 20" scale="1.5" />
</f-scene3>

-

<f-sidebar src="math-polyhedra.md" title="Polyhedra" overlay style="--sidebar-width: 60vw">
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">About regular polyhedra<f-arrow-icon rotation="-45" /></a>
</f-sidebar>

-

<f-next-button  />

---








| section: Simplification of polyhedron

| rows: auto
| height: 100vh
| 1 1 1
| 2 3 4

## Simplification of polyhedron

-

~Look at these polyhedra and try to find out, **how would you simplify them** to calculate angles and distances?~

👉 <small>*Click on a polyhedron to get the answer*</small>

&nbsp;

<f-next-button />

-

<!-- <f-scene3 isometric class="fullWidthScene"  v-on:mousedown.native="()=>{set('ph1', true);}" v-on:mouseup.native="()=>{set('ph1', false);}">
      <f-group3 rotation="15 30 0">
        <f-group3 rotation="-36 0 180" position="0 0.6 0.8" >
          <f-regularpolygon3 :count="3" position="0 0 0" :fill="color('yellow')" :strokeWidth="3"  opacity="1" scale="1.2 1.2 1.2" v-if="get('ph1')" />
        </f-group3>
        <f-polyhedron3 hedron="Octahedron" opacity="1" rotation="0 45 0" scale="1.5" />
      </f-group3>
</f-scene3>

- -->

<f-scene3 isometric static responsive :key="get('ph1Static', true)" class="crisp" v-on:mousedown.native="()=>{set('ph1Static', false); set('ph1', true);}" v-on:mouseup.native="()=>{set('ph1Static', true); set('ph1', false);}" >
    <f-group3 :rotation=" '0 20 0' " scale="1.3">
      <f-group3 rotation="0 -20 -90" position="0 0 0" >
        <f-regularpolygon3 :count="3" position="0 0 1.1" :fill="color('yellow')" :shading="false" :strokeWidth="3"  opacity="1" :r="0.75" v-if="get('ph1')" />
      </f-group3>
      <f-polyhedron3 opacity="1" :r="1.258" />
    </f-group3>
</f-scene3>

-

<f-scene3 isometric static :key="get('ph2Static', true)" class="crisp" responsive v-on:mousedown.native="()=>{set('ph2Static', false); set('ph2', true); }" v-on:mouseup.native="()=>{set('ph2Static', true); set('ph2', false);}">
  <f-group3 :rotation=" ' 60 0 0' " scale="1.3">
    <f-group3 rotation="-58 0 0" position="0 0 0" >
      <f-regularpolygon3 :count="5" position="0 0 1.2" :fill="color('yellow')" :shading="false" :strokeWidth="3"  opacity="1" :r="0.76" v-if="get('ph2')" />
    </f-group3>
    <f-polyhedron3 hedron="Dodecahedron" opacity="1" :r="1.258" :fill="color('blue')" :shading="true" />
  </f-group3>
</f-scene3>


<!-- <f-scene3 isometric  class="fullWidthScene" v-on:mousedown.native="()=>{set('ph2', true);}" v-on:mouseup.native="()=>{set('ph2', false);}">
    <f-group3 rotation="20 33 0">
      <f-group3 rotation="0 0 45" position="0 0 0.9" >
        <f-regularpolygon3 :count="4" position="0 0 0" :fill="color('yellow')" :strokeWidth="3"  opacity="1" v-if="get('ph2')" />
      </f-group3>
      <f-polyhedron3 hedron="Cube" opacity="1" :scale="1.5" />
    </f-group3>
</f-scene3> -->

---









| rows: auto
| cols: 50vw auto
| 1 1
| 2 3
| 4 4 

## Simplification of polyhedron

-

<blockquote style="background: none;">

  ~We know now, that the **sides of a polyhedron are made of polygons**.~ 

</blockquote>

- ~The first one, *Icosahedron*, had **triangular** faces (shapes that were already know), so you can use the <f-sidebar src="./math-triangle-calculations.md" title="triangle formulas" style="--sidebar-width: 60vw" overlay />, to make the calculations.~ 

- ~The second one, *Dodecahedron*, was a bit more complicated, because its sides are **polygons** *(pentagons)*, so you need an **extra step**:~

1. ~first: **find polygons**, and~ 
2. ~then: **divide polygons to triangles**~

~But, of course, this is also something, that we are <f-sidebar src="./math-polygon.md" title="familiar with" style="--sidebar-width: 60vw" overlay />.~ 

-

<f-scene3 isometric static :key="get('ph2Focus')" responsive v-on:mousedown.native="()=>{set('ph2Focus', false); }" v-on:mouseup.native="()=>{set('ph2Focus', true);}">
  <f-group3 :rotation=" '60 0 0' " scale="1.3">
    <f-group3 rotation="-58 0 0" position="0 0 0" >
      <f-regularpolygon3 :count="5" position="0 0 1.2" :fill="color('yellow')" :shading="false" :strokeWidth="3"  opacity="1" :r="get('ph2Focus', true) ? 0.76 : 0.82" />
    </f-group3>
    <f-group3 rotation="-58 0 -144" :position="get('ph2Focus', true) ? '0 0 0' : '0 0 0.1'" >
      <f-regularpolygon3 :count="3" position="0 0.45 1.4" :fill="color('yellow')" :shading="false" :strokeWidth="3"  opacity="1" :r="get('ph2Focus', true) ? 0.5 : 0.6" scale="1 0.7 1" />
    </f-group3>
    <!-- triangle -->
    <!-- <f-group3 rotation="-90 0 0" position="0 0 0" >
      <f-polygon3 :points=" '0,0 ' + polarx(-36/5, 1) + ',' + polary(-36, 1) + ' ' + polarx(36, 1) + ',' + polary(36,1)  " position="0 -1 1.4" :fill="color('yellow')" :strokeWidth="0"  />
    </f-group3> -->
    <f-polyhedron3 hedron="Dodecahedron"  opacity="1" :r="1.258" />
  </f-group3>
</f-scene3>

-

<f-next-button title="Next: Is thats all?" />

---










| chapter: Pyramids
| section: Material thickness
| id: tr-thickness

| background: lightergray
| height: 100vh
| rows: auto
| cols: 50vw auto
| gap: 5vw
| 1 1
| 2 3
| 4 4

~We're almost done, but there's **one more problem**...~

-

## Material thickness

~If we'd made a nesting box from paper or some other material that has none (or almost almost no)  thickness, we'd be fine by now, but once we use any thicker material, we have a problem:~

<blockquote style="background:none;">

 ~We have to cut the edges of material at **certain angle**, so that they could fit together.~

</blockquote>

&nbsp;

<f-next-button />

-

<f-scene responsive style="background:var(--white); box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.2); border-radius: var(--base)" >
  <!-- <f-box width="1" height="4" position="-1 0.5" />
  <f-box width="4" height="1" position="0.5 -1" />
  <f-line points="-1.5 -1.5, -0.5 -0.5" /> -->
  <f-group position="0.5 0.5">
    <f-line points="-1.5 -1.5, -0.5 -0.5" :stroke="color('red')" />
    <f-line points="-1.5 2.5, -1.5 -1.5, -0.5 -0.5, -0.5 2.5" closed :position=" '0 ' + get('matOffset') " />
    <f-line points="2.5 -1.5, -1.5 -1.5, -0.5 -0.5, 2.5 -0.5" closed :position=" get('matOffset') + ' 0' " />
  </f-group>
</f-scene>

<f-slider set="matOffset" to="0.5" value="0.1" />

---







| section: Dihedral angle
| background: lightergray

| height: 100vh
| rows: auto
| 1 1
| 2 3


## Dihedral angle

-

<blockquote style="background: none">

  ~**The angle between polyhedron sides is called Dihedral angle**~
  
</blockquote>

&nbsp;

~We have to cut our material at the angle that is **half of the dihedral angle**~

~**Why half?**~

~Let's look **inside of a polyhedron**, where we will find...~

## &nbsp;

<f-next-button title="Pyramids" />

-

##### Dihedral angles of regular polyhedra

<f-table :rows="[
{ polyhedron: 'Tetrahedron', 'dihedral angle': '70.53°' },
{ polyhedron: 'Cube', dihedral: '90°' },
{ polyhedron: 'Octahedron', dihedral: '109.47°' },
{ polyhedron: 'Dodecahedron', dihedral: '116.57°' },
{ polyhedron: 'Icosahedron', dihedral: '138.19°' }]"/>


---






| section: Why pyramids
| id: tr-pyramids

| rows: auto
| cols: 50vw auto
| 1 1
| 2 3

## Why pyramids?

-

~If you imagine of a regular polyhedron, that is made of **solid material** and you want to separate all its sides so, that you end up with **similar congruent pieces**.~

&nbsp;

~To achieve this you ***end up with pyramids***, where:~

- ~the **base** of a pyramid **is for the side of polyhedron** and~
- ~the **tip** of the pyramid is at the **center point of the polyhedron**~

&nbsp;

<f-next-button />

-

<f-buttons :buttons="['Dodecahedron','Cube']" set="hedronType" />

##### <small>Show the pyramids</small>
<f-slider set="pyraOffset" v-on:value=" v => { set('updateMe', v) }" from="0" to="1" step="0.01"  />

##### <small>Rotate hedron</small>
<f-slider set="pyraRot" v-on:value=" v => { set('updateMe', v) }" to="180" value="60" />

{{set('ddDih', 63.43495)}}
{{set('ddRot', 72)}}

<f-scene3 v-if="get('hedronType',0) == 0" width="1000" height="1000" responsive isometric webgl class="crisp">
  <f-group3 :rotation=" [ 0, get('pyraRot', 0) , 0 ] " scale="3">
    <!-- first half  -->
    <f-group3>
      <f-group3 :position="[ 0, 0, -get('pyraOffset', 0) ]">
        <f-hedron3 
            count="5" 
            height="1" 
            position="0 0 -1" 
            r="0.764"
            strokeWidth="0"
            :fill="color('blue')"
            :shading="false"
        />
      </f-group3>
      <f-group3 v-for="p in range(0,4,1)" :rotation="[0,0,get('ddRot')*p]" :key="'pyramid'+p">
        <f-group3 :rotation="[get('ddDih'),0,0]">
          <f-group3 :position="[0, 0, -get('pyraOffset', 0)]" :rotation="[0,0,get('ddRot')/2]">
            <f-hedron3 
              count="5" 
              height="1" 
              position="0 0 -1" 
              r="0.764"
              strokeWidth="0"
              :fill="color('yellow')"
              :shading="false"
            />
          </f-group3>
        </f-group3>
      </f-group3>
    </f-group3>
    <!-- second half  -->
    <f-group3 :rotation="[0, 180, get('ddRot')/2]">
      <f-group3 :position="[ 0, 0, -get('pyraOffset', 0) ]">
        <f-hedron3 
            count="5" 
            height="1" 
            position="0 0 -1" 
            r="0.764"
            strokeWidth="0"
            :fill="color('blue')"
            :shading="false"
        />
      </f-group3>
      <f-group3 v-for="p in range(0,4,1)" :rotation="[0,0,get('ddRot')*p]" :key="'pyramid'+p">
        <f-group3 :rotation="[get('ddDih'),0,0]">
          <f-group3 :position="[0, 0, -get('pyraOffset', 0)]" :rotation="[0,0,get('ddRot')/2]">
            <f-hedron3 
              count="5" 
              height="1" 
              position="0 0 -1" 
              r="0.764"
              strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
          </f-group3>
        </f-group3>
      </f-group3>
    </f-group3>
  </f-group3>
</f-scene3>


<f-scene3 v-else-if="get('hedronType') == 1" width="1000" height="1000" responsive webgl isometric class="crisp" >
    <f-group3 :rotation=" '30 ' + get('pyraRot', 0) + ' 0' " scale="3">
      <!-- first pair  -->
      <f-group3 key="ykkonen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
      <!-- second pair  -->
      <f-group3 rotation="90 0 0" key="kakkonen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
       <!-- third pair  -->
      <f-group3 rotation="0 90 0" key="kolmistovainen">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
      </f-group3>
    </f-group3>
</f-scene3>





---









| section: Geometry of pyramids

| rows: auto
| cols: 40vw auto
| 1 2 3
| 1 4 5


## Pyramid

&nbsp;

<blockquote style="background: none;">

  ~Pyramid is a polyhedron formed by connecting a **polygonal base** and a point, called the **apex**.~

</blockquote>

~In our case we deal with **regular pyramids**, where the base is **regular polygon** and apex is exactly above the **center of the base**.~

&nbsp;

<f-sidebar src="math-pyramid.md" title="More about pyramids" style="--sidebar-width: 60vw" overlay>
  <a slot="button" class="tertiary" style="padding:var(--base); background:var(--yellow)">How to solve the pyramids<f-arrow-icon rotation="-45" /></a>
</f-sidebar>

## &nbsp;

<f-next-button />

-

<f-scene3 responsive isometric static>
  <f-group3 rotation="-70 0 20" scale="1.7" position="0.3 0 0">
      <f-hedron3 
            :count="3" 
            :height="1.5" 
            position="0 0 -0.6" 
            :r="1.2"
            :strokeWidth="0"
            opacity="0.75"
      />
    </f-group3>
</f-scene3>

-

<div style="position:relative;">
<f-scene3 responsive isometric static>
  <f-group3 rotation="-70 0 20" scale="1.7" position="0 -1 0" >
      <!-- <f-line3 points="0.6 -0.55 0, 0 0 0, 0 0 1.45" :stroke="color('black')" /> -->
      <f-hedron3 
            :count="4" 
            :height="1.5" 
            :r="1.2"
            :strokeWidth="0"
            opacity="0.5"
      />
    </f-group3>
</f-scene3>
<!-- <f-scene responsive style="position:absolute; top:0; left:0;">
  <f-text position="0 1.6">APEX</f-text>
</f-scene> -->
</div>

-

<f-scene3 responsive isometric static>
  <f-group3 rotation="-70 0 20" scale="1.6">
      <f-hedron3 
            :count="5" 
            :height="1.5" 
            position="0 0 -0.6" 
            :r="1.2"
            :strokeWidth="0"
            opacity="0.75"
      />
    </f-group3>
</f-scene3>

-

<f-scene3 responsive isometric static>
  <f-group3 rotation="-70 0 20" scale="1.6">
      <f-hedron3 
            :count="6" 
            :height="1.5" 
            position="0 0 -0.6" 
            :r="1.2"
            :strokeWidth="0"
            opacity="0.75"
      />
    </f-group3>
</f-scene3>

---







| theme: dark
| chapter: Epilogue
| section: Wrapping up
| cols: 2fr 3fr
| 1 1
| 2 3

## Wrapping up

-

##### Related DesignSTEM projects:

<a href="https://designstem.github.io/scenarios/geometry">From geometry to design</a> - polyhedra and paper

<a href="https://designstem.github.io/scenarios/spirals">Spirals</a> - another trigonomy-related project

&nbsp;

##### Other materials:

<a href="https://polyhedra.tessera.li/" target="_blank">Polyhedra Viewer</a> by Nat Alison (@tesseralis) - watch also her talk at !!Con2019 and fall in love with... polyhedra :)

<a href="http://polyhedra.stacyspeyer.net/" target="_blank">Stacy Speyer</a> - everything from polyhedra art to polyhedra parties

&nbsp;

<a class="tertiary" href="../"><f-leftarrow-icon /> Back to projects</a>

<!-- </section> -->

-

<f-video src="https://www.youtube.com/watch?v=XjvyELtrPF4" /> 
