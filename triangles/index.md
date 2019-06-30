
| theme: dark
| cols: 60vw auto
| rows: 12vh auto
| 1 4
| 2 4
| 3 4
| height: 100vh

&nbsp;

-

<div style="z-index:5; position:relative;">

<div style="--base: 32px;">

  # Looking for triangles

</div>

&nbsp;

~*Design a polyhedral shape bird nesting box and learn the geometry behind it.*~

<!-- <f-sidebar src="geometry-triangles.md" title="Geometry of triangles" width="50vw" /> -->

###  &nbsp;

<f-next-button title="Let's start!" />

</div>

-

&nbsp;

-

<div style="position:absolute; top:0; right:0; width:70vw; height:100vh; overflow:hidden;">
<div style="position:absolute; top:-60vh; right:-40vw; width:130vw; height:160vh; overflow:hidden;">

<f-scene3 style="width:100%; height:100%; opacity:0.2" id="fp-hedron" isometric>
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











#### Testslide



Okidoki <f-sidebar src="./Polyhedra.md" width="60vw" title="Polyhedra" overlay />


---










| height: 100vh
| 1 2



### &nbsp;

# The assignment <sup><sup>📝</sup></sup>

&nbsp;

1. Design a nesting box for a bird.
2. The design should be based on a <f-sidebar title="polyhedral shape" src="./Polyhedra.md" width="43vw" />
3. The material should have some thickness (wood, etc).

&nbsp;

<f-next-button />

-

<f-image src="./images/polyhedron-nestbox.jpg" style="background-size: contain; background-repeat:no-repeat; background-position:center center" />



---













| height: 80vh
| 1 2 



# Design problem <sup>🤔</sup>

#### &nbsp;

There are birds that heavily rely on human made nesting boxes.


### Find out….

1. which birds these are.
2. what kind of nesting boxes the birds need.
3. if designers can solve other problems with a similar design approach?

#### &nbsp;

<f-next-button />

-

<f-image src="./images/nesting-boxes__0,5x.jpg" style="background-position: 50% 50%;" />

---









| height: 80vh
| 1 1
| 2 3
| rows: 15vh auto

## &nbsp;

<h3>🙋‍<sup><sup>💬</sup></sup><span style="font-family:var(--font-serif); font-weight:400;font-style:italic;font-size:70%;">Do these birds absolutely HAVE TO live inside a polyhedron?</span></h3>

-

### No, not really...

<!-- A nesting box, as such, doesn't have to be a polyhedron, there are other options too.  -->

## so why are we making one?

> Let's think of our nesting box as a **small-scale model to solve much bigger problems**.👉

#### &nbsp;

<f-next-button />

-

### A few examples: 

- People who are suffering from natural disasters or war zones all over the world often need quick shelter. Some of the most efficient solutions for such constructions are based on <a href="https://www.beale.af.mil/News/Article-Display/Article/948494/beale-airmen-make-a-difference-for-homeless-veterans/" target="_blank">polyhedral design</a>.
- Once we go to Mars (or camping), we might need lightweight and quick- or autoassembled and modular <a href="https://www.geek.com/news/nasa-reveals-top-three-designs-for-space-friendly-homes-on-mars-1781096/" target="_blank">solutions for housing</a>
- And last but not least – the <a href="https://www.archdaily.com/883389/prefab-pop-up-shelter-designed-for-burning-man-and-perfected-for-disaster-relief" target="_blank">Burning Man Festival</a> – which takes us back to the first point.

***TODO: more / better examples***

---









| height: 80vh
| 1 1 1 1 1
| 2 3 4 5 6
| 7 7 7 7 7

# Key steps

Design a nesting house based on a polyhedral shape.

-

## **1**
Find a bird for which to build a nesting box.

-

## **2**
Sketch your ideas.

-

## **3**
Create prototype of nesting box using cardboard or paper. 

-

## **4**
Make  and note all the calculations needed for building the nesting box.

-

## **5**
Build the nesting box from wood or similar materials.

-

<f-next-button />


---












| height: 100vh
| theme: blue 

<center>

<div>

  # “But how?”
  you may ask...

### &nbsp;

  <f-next-button title="Let's see" />

</div>

</center>

---









| height: 80vh
| 1 1
| 2 3
| 4 4
| rows: 25vh auto 15vh

## &nbsp;

# Geometry behind the nesting box

For designing and building a solid polyhedral object you have to:

-

# **1**

**simplify the polyhedral object** into more basic geometrical objects, such as **polygons**, **triangles** and **pyramids**

-

# **2**

**use geometry** to calculate correct **dimensions and angles** of these “building blocks”

-

<f-next-button />

<Separator margin="10vh" />

---











| height: 40vh
| rows: 15vh auto
| 1 1 1
| 2 3 4
| 5 5 5


## Simplifying the polyhedra

-

<f-scene3 isometric class="fullWidthScene" >
  <f-polyhedron3 hedron="Cube" rotation="15 10 0" position="-0.7 0.7 -1" scale="1" />
  <f-polyhedron3 hedron="Octahedron" rotation="0 20 20" position="1 1 0" scale="0.8" />
  <f-polyhedron3 hedron="Icosahedron" rotation="0 10 20" scale="0.8" />
  <f-polyhedron3 hedron="Dodecahedron" rotation="0 10 20" position="1 -1 1" scale="1" />
  <f-polyhedron3 hedron="Tetrahedron" rotation="0 10 20" position="-1 -0.8 1" scale="1.2" />
  
</f-scene3>

<div style="text-align:center">

### Polyhedra <f-rightarrow-icon />

Get to know the 5 regular polyhedral shapes a.k.a. **Platonic solids**

</div>


<!-- <a class="primary" href="../triangles_explorer">Explore polyhedra</a> -->

-

<f-scene3 isometric class="fullWidthScene" >
  <f-group3 rotation="10 30 15" scale="1.5">
  <f-polyhedron3 hedron="Cube" scale="1" opacity="0.4" />
  
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
    />
    </f-group3>
</f-scene3>

<div style="text-align:center">

### <f-leftarrow-icon /> Polygons <f-rightarrow-icon />

Find the polygons: the sides of a polyhedron

</div>

-

<f-scene3 isometric class="fullWidthScene" >

  <f-group3 rotation="10 30 15" scale="1.5">
  <f-polyhedron3 hedron="Cube" scale="1" opacity="0.2" />
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
    :fill="i == 0 ? color('yellow') : ''"
    :rotation="`0 0 ${i*90}`"
    :position="i == 0 ? '0 -0.1 0.7' : '0 0 0.7'"
    />
  </f-group3>
</f-scene3>

<div style="text-align: center">

### <f-leftarrow-icon /> Triangles

Find the triangles: the “building blocks” of polygons

</div>

-

<Separator margin="10vh" />

---











| cols: 50vw auto
| 1 2 
| 3 3


# Let’s start with triangles!

### &nbsp;

**Triangle is the basic element** that polygons and polyhedra are made of.

So let’s see, what type of triangles exist and what kind of relations exist between triangle’s sides and angles, that we can use in our project.

-

<f-scene class="fullWidthScene">
  <f-grid />
  <Triangle :points="[ [-1.5,-1], [1.5,-1], [0,1.498] ]" :angleMarkers="3" />
</f-scene>

-

<f-next-button title="Next: Geometry of triangles" />


<Separator margin="10vh" />

---







| height: 80vh
| 1 1 1
| 2 3 4
| 5 5 5


# Triangle types and calculations

### &nbsp;

-

#### Basics 

What is a triangle and what kind of triangles we know

<f-sidebar src="triangle-types.md" title="Triangle types" width="60vw" overlay /> 

-

#### Geometry

Calculations based on angles and sides

<f-sidebar src="triangle-calculations.md" title="Geometry of triangles" width="60vw" overlay /> 

-

#### Trigonometry

Calculations based on trigonometric functions

<f-sidebar src="triangle-trigonometry.md" title="Trigonometry" width="60vw" overlay />

-

<f-next-button title="Next: Polygons" />

<Separator margin="10vh" />

---










| height: 100vh
| 1 2 
| 3 3

# Polygon: made of triangles

#### &nbsp;

Polygons are geometrical shapes, that form the sides of regular polyhedra and they itself are comprised of triangles. 

By the way, the equilateral triangle itself is the simplest regular polygon.

So, in order to build a polyhedra, let’s first get familiar with it’s sides – the polygons.

<f-sidebar src="geometry-triangles.md" title="Geometry of polygons" width="50vw" /> 

-

<!-- <f-scene class="fullWidthScene">
  <f-grid />
  <Triangle :points="[ [0,0], [-0.5,-0.5], [0.5,-0.5] ]" :angleLabels="false" />
</f-scene> -->

<f-slider set="polySides" from="3" to="12" integer title="Number of sides" />
{{ set('polySlides',3) }}
<f-scene grid class="fullWidthScene">
  <f-group v-for="(t,i) in get('polySides', 3)" :key="'tr'+i" :rotation="i*(360/get('polySides', 3))">
    <Triangle 
      :points="[ [0,0], polarxy( 360/get('polySides', 3)*-0.5, 1.5), polarxy( 360/get('polySides', 3)*0.5, 1.5) ]" 
      :angleLabels="false" 
      :angleInfo="i==0 ? true : false"
      :opacity="i==0 ? 1 : 0.25"
      :fill="color('yellow')"  
    />
  </f-group>
</f-scene>

-



---





| 1 1 1
| 2 3 4
| 5 5 5

# Simplification of polygons <sup>🤔</sup>

Looking at these polygons below, how would you simplify these shapes to calculate angles, sides, circumference, area etc of the polygon? 

-

<f-scene grid class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck1', true);}" v-on:mouseup.native="()=>{set('polyCheck1', false);}" v-on:touchstart.native="()=>{set('polyCheck1', true);}" v-on:touchend.native="()=>{set('polyCheck1', false);}">
  <f-group v-if="get('polyCheck1', false)">
    <Triangle :fill="color('yellow')" :points="[ [0,1], [0,-1.25], [1.27,-1.25] ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="3" r="1.5" rotation="180" position="0 -0.5" :strokeWidth="4" />
</f-scene>

-

<f-scene grid class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck2', true);}" v-on:mouseup.native="()=>{set('polyCheck2', false);}">
  <f-group v-if="get('polyCheck2', false)" v-for="(t,i) in 6" :key="'t'+i" :rotation="(360/5)*i">
    <Triangle :fill="i == 0 ? color('yellow') : 'none'" :points="[ [0,0], polarxy( 360/5*-0.5, 1.5), polarxy( 360/5*0.5, 1.5) ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="5" r="1.5" rotation="180" :strokeWidth="4" />
</f-scene>

-

<f-scene grid class="fullWidthScene" v-on:mousedown.native="()=>{set('polyCheck3', true);}" v-on:mouseup.native="()=>{set('polyCheck3', false);}">
  <f-group v-if="get('polyCheck3', false)" v-for="(t,i) in 6" :key="'t'+i" :rotation="(360/6)*i">
    <Triangle :fill="i == 0 ? color('yellow') : 'none'" :points="[ [0,0], polarxy( 360/6*-0.5, 1.5), polarxy( 360/6*0.5, 1.5) ]" :angleLabels="false" :strokeWidth="1" />
  </f-group>
  <f-regularpolygon count="6" r="1.5" rotation="30" :strokeWidth="4" />
</f-scene>

-

Click on a polygon to see the answers

<!-- <button v-on:mouseup="()=>{set('polyCheck', false);}" v-on:mousedown="()=>{set('polyCheck', true);}">CHECK YOUR ANSWER</button> -->

<!-- <button v-on:click="send('download')">Download</button> -->

---







# Simplification illustrated

---







# Polyhedron: made of polygons

GEOMETRY OF POLYHEDRA

---







# Simplification of polyhedron

Looking at this polyhedron, how would you simplify it to calculate angles and distances?

---







# Simplification of polyhedron: step 1

You can see, that the sides of a polyhedron are polygons

---







# Simplification of polyhedron: step 2

You can see, that the sides of a polyhedron are polygons, that are made of triangles. 

---







# Simplification of polyhedron: example

Instead of piramides you could simplify by cutting a piece that’s easier to work with.

---








# One more problem… material thickness

Once you start to build your nesting box, you may face another problem. Since material has some thickness, you have to cut the edges at a certain angle, in order to fit the sides of a polygons together.

---






# How to calculate the dihedral angles

CALCULATING ANGLES IN PYRAMIDS

---





# Dihedral angle

The angle between two sides of a polygon is called the dihedral angle.

EXPLORE

COMPOUND MITER CALCULATOR

---













