
| theme: dark
| cols: 40vw auto
| rows: 10vh auto
| 1 4
| 2 4
| 3 4

&nbsp;

-

<big style="--base: 24px;">

  # Looking for triangles
</big>


#### ~Design a polyhedral shape bird nesting box and learn the geometry behind it.~

<f-sidebar src="geometry-triangles.md" title="Geometry of triangles" width="50vw" />

-

&nbsp;

-

<f-scene3 style="width:100%; height:100%;" id="fp-hedron" renderer="svg">
  <f-rotation3>
  <f-polyhedron3
      hedron="Icosahedron"
      position="0 0 0"
      rotation="10 0 0"
      scale="1"
    />
    </f-rotation3>
</f-scene3>

---

<f-inline>
<Triangle :points="[ [0,0], [1.5,0], [0,1] ]" />
<Triangle :points="[ [-1,1], [-0.5,-1], [1.5,0.5] ]" />
<Triangle :points="[ [-1,1], [1,-1], [1.5,1] ]" />
</f-inline>

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
  <f-text position="-1.5 0.5" :fill="color('gray')" scale="0.5">{{mouse.x.toFixed(3)}} {{mouse.y.toFixed(3)}}</f-text>
  <f-text position="-1.6 -2.6">B</f-text>
  <f-text position="1.6 -2">C</f-text>
  <f-text position="0.2 0.1">A</f-text>
  <f-text position="0.6 -2">ANGLE</f-text>
  <f-text position="1.1 -1">SIDE</f-text>
</f-scene>

{{set('p', '0 1.5, -1.5 -1, 1 0 ')}}
<!-- {{set('p', '[[0, 1.5], [-1.5, -1], [1, 0]]')}} -->


---




# The assignment

1. Design a nesting box for a bird.
2. The design should be based on a polyhedral shape.
3. The material should have some thickness (wood, etc).

---











# Design problem

There are birds that heavily rely on human made nesting boxes.


### Find out….

1. which birds these are.
2. what kind of nesting boxes the birds need.
3. if designers can solve other problems with a similar design approach?

---







# Why polyhedral shape?

People suffering from natural disasters or war zones all over the world often need quick shelter. Some of the most efficient solutions for such constructions are based on polyhedral design.

---







Examples

---








# Key steps

Design a nesting house based on a polyhedral shape.

1. Find a bird for which to build a nesting box.
2. Sketch your ideas.
3. Create prototype of nesting box using cardboard or paper. 
4. Make  and note all the calculations needed for building the nesting box.
5. Build the nesting box from wood or similar materials.

---








# “But how?”
you may ask...

---









# Geometry behind the nesting box

For designing and building a solid polyhedral object you have to:

1. simplify the polyhedral object into more basic geometrical objects, such as polygons, triangles and pyramids
2. use geometry to calculate correct dimensions and angles of these “building blocks”

---

POLYHEDRON

Get to know the regular polyhedral shapes

<a class="primary" href="../triangles_explorer">Explore polyhedra</a>

-

POLYGONS

Find the polygons: the sides of a polyhedron

-

TRIANGES

Find the triangles: the “building blocks” of polygons

---








# Let’s start with triangles!

Triangle is the basic element that polygons and polyhedra are made of.

So let’s see, what type of triangles exist and what kind of relations exist between triangle’s sides and angles, that we can use in our project.


<f-sidebar src="geometry-triangles.md" title="Geometry of triangles" width="50vw" />

---






# Polygon: made of triangles

Polygons are geometrical shapes, that form the sides of regular polyhedra and they itself are comprised of triangles. 
By the way, the equilateral triangle itself is the simplest regular polygon.
So, in order to build a polyhedra, let’s first get familiar with it’s sides – the polygons.

GEOMETRY OF POLYGONS

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













