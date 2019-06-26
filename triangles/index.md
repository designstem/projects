
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


<f-scene grid width="400" style="flex:0 0 40%">
  <Triangle :points="[ [-0.5,-1],[1,-1],[-0.5,1] ]" />
  <f-text :fill="color('red')" position="0.5 0.2">a</f-text>
  <f-text :fill="color('blue')" position="-0.7 0">b</f-text>
  <f-text :fill="color('green')" position="0.2 -1.2">c</f-text>
</f-scene>


<f-scene grid width="500" height="500">
  <Triangle :points="[ [1.5,-0.5],[2.0211-1.5,1.166531-0.5],[-1.5,-0.5] ]" angleInfo="true" />
</f-scene>



Okidoki <f-sidebar src="./geometry-triangles.md" width="60vw" title="Triangle math" />



<f-inline>

<f-scene grid v-slot="{ mouse }" width="200">
  <f-drag
    :mouse="mouse"
    points="-1 1, 1 -1, 1 1"
    v-slot="{ points }"
    set="pD"
  >
    <f-line :points="points" closed />
  </f-drag>
</f-scene>

<f-scene grid style="width:600px; height:600px;">
  <Triangle :points="get('pD', [ [0,0], [1.5,0], [0,1] ] )" :angleInfo="true"  />
</f-scene>

</f-inline>



<f-scene grid v-slot="{ mouse }" width="300">
  <f-drag
    :mouse="mouse"
    points="-1 1, 1 -1, 1 1"
    v-slot="{ points }"
  >
    <Triangle :points="points" :angleLabels="false" />
  </f-drag>
</f-scene>

<!-- <f-scene grid width="300">
  <Triangle :points="[ [0,1],[-1.5,-1],[1.5,-1] ]" :angleLabels="false" />
</f-scene> -->




<f-scene v-slot="{ mouse }" width="400" height="300">
  <f-grid opacity="0.1"  />
  <f-arc
    r="0.5"
    start-angle="213"
    end-angle="285"
    inner-radius="0"
    stroke="none"
    :fill="color('yellow')"
    position="1.49 -0.73"
  />
  <f-line stroke-width="4" points="-1.7 -1.7, 0 1.7" /> 
  <f-line stroke-width="4" :stroke="color('blue')" points="-0.2 1.7, 1.7 -1" /> 
  <f-line stroke-width="4" points="1.7 -0.7, -1.7 -1.4" /> 
  <f-text position="-1.5 1.7" :fill="color('gray')" scale="0.5">{{mouse.x.toFixed(3)}} {{mouse.y.toFixed(3)}}</f-text>
  <f-text position="-1.6 -2.6">B</f-text>
  <f-text position="1.6 -2">C</f-text>
  <f-text position="0.2 0.1">A</f-text>
  <f-text position="0.6 -2">ANGLE</f-text>
  <f-text position="1.1 -1">SIDE</f-text>
</f-scene>

{{set('p', '0 1.5, -1.5 -1, 1 0 ')}}
<!-- {{set('p', '[[0, 1.5], [-1.5, -1], [1, 0]]')}} -->


---







| height: 100vh


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









| height: 100vh
| 1 2 



### &nbsp;

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

| height: 100vh
| 1 1
| 2 3
| rows: 15vh auto

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

<center>

<div>

  # “But how?”
  you may ask...

### &nbsp;

  <f-next-button title="Let's see" />

</div>

</center>

---






| height: 100vh
| 1 1
| 2 2
| 3 4
| 5 5

# Geometry behind the nesting box

-

For designing and building a solid polyhedral object you have to:

-

# **1**

**simplify the polyhedral object** into more basic geometrical objects, such as **polygons**, **triangles** and **pyramids**

-

# **2**

**use geometry** to calculate correct **dimensions and angles** of these “building blocks”

-

<f-next-button />








---

| height: 100vh
| 1 1 1
| 2 3 4


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
      -0.5    -0.5    0.7,
       0.5    -0.5    0.7,
       0.5     0.5    0.7,
      -0.5     0.5    0.7,
      -0.5    -0.5    0.7
    "
    :stroke="color('darkergray')"
    stroke-width="6"
    :fill="color('yellow')"
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
      -0.5    -0.5    0.7,
       0.5    -0.5    0.7,
       0         0    0.7,
      -0.5    -0.5    0.7
    "
    :stroke="color('darkergray')"
    stroke-width="3"
    :fill="i == 0 ? color('yellow') : ''"
    :rotation="`0 0 ${i*90}`"
    :position="i == 0 ? '0 0 0.2' : '0 0 0'"
    />
  </f-group3>
</f-scene3>

<div style="text-align: center">

### <f-leftarrow-icon /> Triangles

Find the triangles: the “building blocks” of polygons

</div>


---






| height: 100vh
| cols: 50vw auto
| 1 2 
| 3 3


# Let’s start with triangles!

### &nbsp;

**Triangle is the basic element** that polygons and polyhedra are made of.

So let’s see, what type of triangles exist and what kind of relations exist between triangle’s sides and angles, that we can use in our project.

<f-sidebar src="geometry-triangles.md" title="Geometry of triangles" width="50vw" /> 

-

<f-scene class="fullWidthScene">
  <f-grid />
  <Triangle :points="[ [-1.5,-1], [1.5,-1], [0,1.498] ]" />
</f-scene>

-

<f-next-button title="Next: Polygons" />


---




| height: 100vh
| cols: 50vw auto
| 1 2 
| 3 3

# Polygon: made of triangles

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
    <Triangle :points="[ [0,0], polarxy( 360/get('polySides', 3)*-0.5, 1.5), polarxy( 360/get('polySides', 3)*0.5, 1.5) ]" :angleLabels="false" :opacity="i==0 ? 1 : 0.25" />
  </f-group>
</f-scene>

-



---







# Simplification of polygons 

Looking at these polygons below, how would you simplify the shapes to calculate angles and distances?

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













