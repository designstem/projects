| theme: blue

# <big><big>Mimimal use of material</big></big>

<big><big>Waste is a design mistake I</big></big>

---

| 2 2
| 1 3

# Bone Chair by Joris Laarman

Due to innovative digital techniques we can create customized, smart and more complex forms. 

Joris Laarman used topology optimization software based on the findings of professor Claus Mattheck to develop a chair with a bone-like structure.

***NOTE: Can we use Joris photos?***

-

<f-image src="https://www.jorislaarman.com/wp-content/uploads/2015/11/boneweblast-1500x630.jpg" />

-

<f-video src="https://www.youtube.com/watch?v=z5HSzxGsUdI" />


<f-note>
Source: https://www.jorislaarman.com/work/bone-chair/
</f-note>

---

| 1 1 1 2
<f-activity-icon />

# Chalk challenge

1. Take a sidewalk chalk and weigh it.

2. Place it vertically and put a weight on it.

3. Use a knife, rasp or file to take some material off. ***Note:*** the length of the chalk must stay the same.

4. Try to leave just as much chalk as you need to keep a strong construction. Be careful that is does not break.

5. If you think you have reached the optimum… Let’s put the weight back on.

6. Did it break? If it doesn’t try to scrape off some more and test it again.

Use [this form](https://docs.google.com/document/d/1WHGHGWO3R43I0yfy42PP_W9IsvWljxmRGcs1dD0aDh8/edit) to document your results.

***TODO: Convert to PDF?***

-

<img src="http://pngimg.com/uploads/chalk/chalk_PNG11.png" />

---

# Why we mimic nature?

~There’s a **duality** between nature and engineering, when it comes to lightweight constructions.~

* ~Nature survives with a **minimal use of energy**. So that means, it’s super efficient! As engineers we can learn from nature to reduce material, energy and thus costs.~

* ~Nature has the **ability to adapt** to its changing surroundings during its life time. Think about the skin of a sea cucumber which is extremely flexible, but becomes very rigid in a blink of an eye when it’s threatened. As engineers we can learn from nature’s strategy to make more resilient structures.~

---

| 1 1 
| 2 3
| rows: auto 1fr

# A little bit about engineering

-

~Making constructions is not only a matter of choosing the right material. It’s the combination of material, form and production process, which makes the construction light and strong.~

**~Form, material and production process is a trinity.~**

~You can imagine when it comes to lightweight constructions the balance of the trinity becomes more critical!~

-

<f-scene width="300" height="400">
  <f-group v-for="(a,i) in [0 + 180,120 + 180,240 + 180]">
    <f-circle :x="polarx(a, 1)" :y="polary(a,1)" r="1.1" fill="hsla(200,25%,75%,0.5)" />
    <f-text :x="polarx(a, 1)" :y="polary(a,1)"> {{ ['form','material','production'][i] }} </f-text>
  </f-group>
</f-scene>

---

# A little bit more about engineering

Besides the trinity (form, material and production process) the efficiency of a construction is depending on the **kind of load** the construction has to carry. 

Loads on a construction could be: bending, pressure, tension, shear, torsion, vibration… etc.

When designing an object an engineer investigates all its possible loads. 

---

# Trees & Bones

Take for instance the growth of trees and bones. 
During their lifecycle both these natural structures make optimal use of material in dealing with stresses and loads. But in different ways. 

***IMAGE***

---

# Trees ability to adapt

Trees **only add material where it is needed** by producing thicker tree rings at heavier loaded spots. 

e.g. When a tree is constantly exposed to wind at one side, it grows thicker at the other side. 

<f-note>
Image source: pxhere.com
https://pxhere.com/nl/photo/720601
Creative Commons CC0 > no attribution required
</f-note>

---

# Bones ability to adapt

Bones also produce extra material where needed, but they are also able to eliminate material in less loaded spots.

***IMAGES***

<f-note>
mage bottom right is taken from a scientific article (available on internet under CC BY-NC-ND 4.0).
https://www.researchgate.net/figure/Trabecular-architecture-in-the-mid-frontal-section-of-the-proximal-femur-left-To-the_fig33_248475019
A full APA-reference underneath the image is a bit much / Now I placed a short ‘in-text citation’. However this has to correspond with a full reference elsewhere on out website… I reckon... 
</f-note>

---

# Adaptive growth

This growing and killing of material in response to mechanical forces is called **adaptive growth**.
 
An everyday (visible) example of adaptive growth is the growth of callus on the soles of feet!

---

| theme: blue

<center><div>

# <var>Nature is a smart engineer</var>

# <var>Are you?</var>

</big></big>

</div></center>

---

| section: optimize
| 1 1
| 2 3
| 4 5
| 6 6

# Four ways to optimize

The following four hands-on exercises introduce some useful principles in the designing and building of structures, with **minimal use of material** and therefore **maximized efficiency**.

-

<f-card @click.native="goto('folds')" background="var(--gray)" color="white" title="Optimization with folds" />

-
<f-card @click.native="goto('sticks')" background="var(--gray)" color="white" title="Optimization with sticks and strings" />

-

<f-card @click.native="goto('cells')" background="var(--gray)" color="white" title="Optimization with cells" />

-

<f-card @click.native="goto('deformation')" background="var(--gray)" color="white" title="Optimization with deformation" />

-

<button class="primary" v-on:click="goto('assignment')">Final assigment</button>

---

| section: folds

# Optimization with folds

### Palm trees

Palm Trees have very clever leaves. In nice weather the leaves spread out to catch the sunlight, but during storms they fold up. The folding makes the leaves compact and thus stronger and more resistant to these circumstances. 

***IMAGE***

---

# Optimization with folds

### Shells

Shells are designed with the purpose of carrying external loads efficiently.
The folds help the thin layered shells to be resistant to predators and rough circumstances. 

***IMAGE***

---

# Optimization with folds

So now we have looked at nature and we understand that through folding materials you can **add strength** to them.

By folding the edges of the metal top of the Pallas table Konstantin Krcic added strength to it.  

***IMAGE***

---

# Optimization with folds

In the pictures you see two identical A4 papers folded in **hexagonal like** shapes.

Which one do you think is the strongest?

***IMAGE***

---

# Optimization with folds

See what happens when you place the papers **horizontally** on the table and put a weight on it. 

***IMAGE***

---

# Optimization with folds

See what happens when you place the papers **vertically** on the table and put a weight on it. 

---

# Optimization with folds

<f-activity-icon />

### Exercise 1

Take some paper and try different ways of folding to make a strong paper construction.

<a class="tertiary" src="https://drive.google.com/file/d/1eI9cVsdktE5wh2lVQHV3nnVB5rvTbVWa/view"><f-arrow-icon rotation="90" />Download rectangular shape template</a>

<a class="tertiary" src="https://drive.google.com/file/d/1vNI9KdNpWQHcdm1R6C7aWIkSFIZ6SnTx/view"><f-arrow-icon rotation="90" />Download hexagonal shape template</a>

***TODO: Copy PDFs to scenario, add legends***

<button v-on:click="goto('optimize')">Back to optimizations</button>

---

| section: sticks

# Optimization with sticks and strings

Useful and efficient structures can be built using **only tension** or **only compression**.

Simple suspension bridges are examples of **tensile structures**.

Arch bridges are examples of **compressive structures**.

***IMAGE***

---

# Optimization with sticks and strings

Tension and compression members can also be combined.

***IMAGE***

---

# Optimization with sticks and strings

Ropes and cables are lightweight, flexible and strong. Perfect for carrying loads!

A sailing ship can sail because of its ***rigging***.

Another example of tension and compression members combined!

***IMAGE***

---

# Optimization with sticks and strings

Cables and ropes in functional constructions (like bridges and boats) echo the tendon, ligaments and muscles in animal skeletons.

***IMAGE***

---

# Optimization with sticks and strings

*~Ligament and membrane, muscle and tendon, run between bone and bone~*

*~The beauty and strength of the mechanical construction lie not in one part or in another, but in the harmonics concatenation which all parts, soft and hard, rigid and flexible, tension bearing and pressure-bearing, make up together~*

Thompson, D. A. W., & Bonner, J. T. (2014). On Growth and Form. Cambridge, United Kingdom: Cambridge University Press.

***IMAGE***

---

# Optimization with sticks and strings

## Exercise 1

Try to build a space frame using ice-cream sticks and strings/lines.
For a building description of a space frame, look at the next page.

---

| 1 1
| 2 3
| rows: auto 1fr

# Optimization with sticks and strings

## Exercise 2: Examples and resources


-

***Image***

Mattheck, C. (2007). Secret design rules of nature: Optimum shapes without computers. Karlsruhe: Forschungszentrum Karlsruhe.

-

[Computer-free Design Using the Method of Force Cones](https://drive.google.com/file/d/1sVGEyxQY4fR1GYB_fR4cGckL2a33bWHL/view
)


[Example Topologies Found by the Method of Force Cones](https://drive.google.com/file/d/1OWZg59j0lppItRTOMVeWjzVCiyoABjKM/view
)

**Further verification of the method of force cones**

***TODO: Link broken***

---

# [Building description space frame]

---

# Exercise 2

Now build a model of a functional structure using only sticks and strings. 

Continue for inspiration and information ***TODO: Continue to where?***

<button v-on:click="goto('optimize')">Back to optimizations</button>

---

| section: cells

# Optimization with cells

A hexagon is a form we see everywhere in nature when energy optimization is needed. 

For example in a honeycomb, radiolaria or dried clay.

---

# Optimization with cells

## Exercise 1

Hexagons can also be found in a vast variety of man-made materials.
For example, core infill for composite sandwiches used in aerospace structures. 

It’s lightweight and when it’s pressed into a mould, it adapt to its form. 

Beeboard you’ll find in your everyday kitchen cabinet door.

> #### What you will need
* Two sheets of paper format A3, if you use thicker paper you probably need a ruler and a cutter to etch the lines first
* Pencil
* Double-sided tape
* Cutter

---

# Optimization with cells

## Exercise 1: the steps

There are many ways to cut and etch paper. A laser cutter would probably be the fastest and most precise way to do it. But etching the paper with a ruler and cutter is fine too. First of all print the pattern in attachment.

1.  Fold your sheets as seen in the illustration below. The blue lines must be folded inwards. The red lines must be folded outwards. When done, you’ll see the half of the honeycomb shape.

2.  Tape the ‘hills’ with double-sided tape. Than, put the other sheet on top of it, so you’ll have long honeycomb shape cylinders.

3. Cut the taped sheets into shorter parts. Tape those shorter part on top of each other. 

4. Stretch the parts, so the honeycomb beeboard will appear.

---

# Optimization with cells

## Exercise 2: Soap bubbles

The 3D version of a honeycomb you get when you stack balls in a crate and put weight on them, causing the walls to be pressed to each other. 

The physicist Kelvin proposed that a 14-faced polyhedron (tetrakaidecahedron) can be considered the most ideal form to spread the forces exposed to it.

Imagine the balls are soap bubbles, they even start to share the walls!

***TODO: TOOL by Kristjan***

---

| 1 1
| 2 3

# Optimization with cells

-

When you look at soap bubbles, you see they’re not regular; they vary in size and shape. 

This depends on the external forces, but also on the material properties of the bubble itself, like surface tension, viscosity or the competitive growth of the bubbles due to the air or gas. 

-

Researching the Voronoi diagram

Let’s see if we can mimic dried clay and soap bubbles and modify them into possible emergency plans!   

---

# Optimization with cells

~Georgy Voronoy was a Russian mathematician. A Voronoi diagram is built out of various polygons. Imagine you’re are in region and you’re looking for the closest hospital. The region is divided in areas (polygons) with nodes. Every node represents a hospital.~

~**At any point in the polygon you’re closer to the node it contains than to any other node in the whole region.**~

~And, at any point along the boundaries of the polygons, you are at the same distance from at least two nodes. This makes these diagrams very useful for many applications such as mapping and zoning, for example to find the nearest hospital.~

---

| 1 1
| 2 3
| rows: auto 1fr

# Optimization with cells

## Exercise 3

-

Now make your own Voronoi diagram based on the nodes that represents...

-

<f-video src="https://www.youtube.com/watch?v=bmaUtG4CbOs" />

---

# Optimization with cells

### Back to the bone!

When you cut a thigh bone you’ll see a foam structure that is optimally formed by the forces it has to carry. So, bone is strong and light. 

And: like foam bone could eliminate material by adapting to the change of the environment, but of course not at the same speed soap bubbles do! 

<button v-on:click="goto('optimize')">Back to optimizations</button>

---

| section: deformation
| 1 1
| 2 3

# Optimization by deformation

The deformation (and even failure) of existing materials and structures under load can be very instructive for the designing and building of new ones.

-

First of all, deformation teaches us about fundamental loads and stresses.

Prof. Dr. Claus Mattheck uses rubber plates and sheets of aluminum foil to help you visualize loads and stresses in structures.

***TODO: TOOL: Virtual rubber sheet***

-

***IMAGE***

Mattheck, C. (2011). Thinking tools after nature. Karlsruhe: Karlsruhe Institute of Technology.

---

# Optimization by deformation

Deformation also acts as a warning signal.

-

<f-image src="https://s0.geograph.org.uk/photos/34/64/346439_5a87708d.jpg" />

https://www.geograph.org.uk/photo/346439
Nearly collapsed by Robin Webster
Licensed under CC BY-SA 2.0

---

# Optimization by deformation

Last but not least:
deformation can be seen as a kind of **shape optimization**.

Let’s go back to the rubber plates and sheets of  aluminum foil of Prof. Dr. Mattheck.

The way these (isotropic) **materials** bend, fold, stretch and twist can be seen as an effective adaptation to loads.

-

**IMAGE**

Mattheck, C. (2011). Thinking tools after nature. Karlsruhe: Karlsruhe Institute of Technology.

---

# Optimization by deformation

## Example 1

Holes and notches in a piece of rubber under stress deform in such a way that local concentrations of stresses are reduced and loads are distributed evenly.
The shapes that ‘occur’ in this way are to be found all over in the natural and manmade world!
  
-

**IMAGE**

Mattheck, C. (2018). Pauli explains the form in nature. Karlsruhe: Karlsruhe Institute of Technology.

---

# Optimization by deformation

## Example 2

The way aluminum foil deforms (and eventually tears) under tension tells us a lot about lines of **compression and tension**.

Here too, deformation offers us clues about the optimal shape given a particular load.
 
-

Mattheck, C. (2018). Pauli explains the form in nature. Karlsruhe: Karlsruhe Institute of Technology.

---

The shape of components under stress can be used as a **template** for a new design that’s better suited for a particular load.

Basic idea:

* Apply force and observe the  deformation.

* Use the deformation as the basis of a manufactured form.

Again … listen to the trees!

-

***IMAGE***

Mattheck, C. (2011). Thinking tools after nature. Karlsruhe: Karlsruhe Institute of Technology.

---

# Optimization by deformation

## Exercise

**IMAGE**

1. Take a sponge and a piece of chamois cloth (‘shammy’).

2. Push, pull, bend, twist and/or tear them any way you want. 

3. Observe the deformations closely and try to understand the loads and stresses that led to these shapes.

4. Use the three shapes that appeal to you most, or in which you sense some technical use.

5. Make a quick sketch of a product that utilizes these shapes.

<button v-on:click="goto('optimize')">Back to optimizations</button>

---

| section: assignment

| 1 1
| 2 3
| 4 4

| rows: auto auto 1fr

# Design assignment

-

You have practised with different ways and techniques to optimize strength and adaptability in your construction when designing a new product.

Design a usable object using one or more of the techniques (optimization with folds, optimization with sticks and strings, optimization with cells, optimization by deformation).

-

1. Choose your preferred technique(s).

2. Find a reference in nature or in an existing design object and describe why it appeals to you.

3. Make at least three 2D sketches. 

4. Choose one of or combine your 2D sketches and make a 3D sketch model of it.

5. Evaluate your model, add or adjust where needed.  

6. Make your final object.

-

<a class="primary" href="./index.html">Back to waste scenario</a>




















.























