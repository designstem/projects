| background: ./images/wall.jpg
| tint: 0
| theme: dark

# <big><big>2D and 3D patterns</big></big>

Will be in shape — whatever the shape. Over and over. 

---

| padding: 0

<section><section>

# Orientation on patterns

In order to find inspiration in making your own 2D textures and 3D structures, you will have to be able to recognize, find and order them. 

Next you will find some questions and accompanying tasks to help you. 

</section></section>

-

<f-image src="./images/face.jpg" />

---

# Orientation on patterns

## Exercise 1

Answers these question and find some inspirational images to stimulate your brain:

1. How do you **define** a pattern?

2. How would you **describe** a pattern?

3. Find at least three **meaningful examples** of patterns from 
your daily life. Take pictures of them, make sketches, etc.

4. Find at least three patterns **from other cultures**.

5. And at last: what pattern **defines you**? Think about your daily habits...

---

# Orientation on patterns

## Exercise 2

This is how you can experiment with making patterns:

* Use LEGO®

* Use Tangram puzzles

* Find similar leaves, stones, flowers, packaging, emoji, … etc.

* Use the Adobe Capture app https://www.adobe.com/products/capture.html

* Investigate the world of tessellations

  * with paper cutting http://tessellations.org/methods-diy-papercut.shtml
  
  * this online interactive tool http://www.shodor.org/interactivate/activities/Tessellate/

  * or the Amaziograph https://amaziograph.com/education.html app.

---

# Textures & structures

A pattern is made when a shape is copied repeatedly. 

The definition of <var>texture</var> we use when it’s a 2D surface where the pattern is only repeated in X and Y axes. 

The definition of <var>structure</var> we use for 3D patterns were the Z-axe gets in, for example with LEGO® or in Minecraft. 

Be sure to keep in mind that **repetition is key** at all times!

-

<f-image src="./images/bricks1.png" />

---

| padding: 0

<section><section>

# Geometric operations

To make different designs you can use geometric operations such as:

* translate

* reflect

* rotate

* scale

* affine transformation

</section></section>

-

<f-image src="./images/bricks2.jpg" />

---

# Translate

<f-source />

Change image content position

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

Translating repeatedly gives a regular pattern 

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Rotation</mark>

## Rotation around an internal point

Change image content orientation

<f-source />

<f-slider title="rotation" set="r"/>

Rotating repeatedly gives a completely different pattern 

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Rotation</mark>

## Rotation around exterior point

<f-source />

Change image content orientation

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

-

<f-artboard grid step="100" style="background: white">
  <f-group
    v-for="a in range(0,360,360 / 16).slice(0,16)"
    :rotation="a"
    position="300 300"
  >
    <f-group
      position="-50 -200"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
    >
		  <f-target />
  </f-group>
  </f-group>
</f-artboard>

---

<mark>Mirroring</mark>

## Horizontal mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-


<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
    <f-group
      :position="[get('d'),-get('d')][x % 2]"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),1 * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
      >
		  <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Mirroring</mark>

## Horizontal and vertical mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="dx" set="dx" value="0" from="-50" to="50" integer />

<f-slider title="dy" set="dy" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
    <f-group
      :position="[[get('dx'),-get('dx')][x % 2],[get('dy'),-get('dy')][y % 2]]"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),[1,-1][y % 2] * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
    >
		  <f-target />
  </f-group>
  </f-group>
</f-artboard>

---

# 3D patterns

#### Element

<f-slider title="Element rotation" set="r3" to="180" />

<f-slider title="Element scale" set="s3" value="1" from="0.1" to="4"/>

#### Scene

<f-slider title="Scene rotation x" set="rx3" value="-45" from="-90" to="0" />

<f-slider title="Scene rotation z" set="rz3" value="0" from="-90" to="0" />

-

<f-scene3 webgl width="600" height="600">
  <f-group3 scale="0.5" :rotation="[get('rx3',-45),0,get('rz3',0)]" position="0 0 0">
    <f-group3 v-for="y in range(-2,2,1)">
      <f-hedron3
        v-for="x in range(-2,2,1)"
        :key="x + '-' + y"
        :r="1 / Math.sqrt(2)"
        :count="4"
        :position="[x,y]"
        :rotation="[0,0,get('r3',0) + 45]"
        :scale="get('s3')"
        :height="0.5"
        shading
      />
    </f-group3> 
  </f-group3>
</f-scene3>

---

# Textures & structures

## Exercise 1

In this stage you will make a 2D pattern / texture using only the X and Y axes. You can try to make transformations with a ruler and compass or digitally:

https://www.mathsisfun.com/geometry/symmetry-artist.html

https://www.mathsisfun.com/geometry/transformations.html

* **Describe the grid** that was used with the patterns you found in the orientation exercises.

* **Generate a flat surface tessellation** with a pattern that describes you, by hand or with a digital tool.

<a class="primary" href="../patterns_editor">Go to pattern editor</a>

---

# Textures & structures

## Exercise 2

Now let’s share all the findings!

1. Make a moodboard or poster to show others the examples of 2D & 3D pattern designs that have inspired your ideas and findings.

2. Explain during group discussions the ideas and constructions on your moodboard / poster. 

3. Give each other feedback on the work.

---

# Production method

Depending on the production method you will choose, some materials are more suitable than others.

New techniques are useful for experimenting with material and integrating <var>sequences</var> (series) or <var>algorithms</var>(arithmetic methods) in your design. 

> See also scenario on [algorithms](https://github.com/designstem/scenarios/algorithms)

-

<f-image src="./images/physical1.png" />

---

# Translation

History shows that 2D patterns are translated to 3D as well. Sometimes in a very strict order and relation, like in The Bossche School. https://en.wikipedia.org/wiki/Bossche_School

The famous Le Corbusier invented a language in architecture, where 2D has been translated into 3D. http://papers.cumincad.org/data/works/att/3642.content.pdf

-

<f-image src="./images/house.jpg" />

---

| padding: 0
| 1 1 1 1 1 2 2

<f-image src="./images/wall.jpg" />

-

<section>

<img src="./images/mac.png" />

</section>


---

# The fourth dimension: time

## Exercise

Another addition to designing patterns could be the fourth dimension: time. This can be achieved with **light** (moving shadows alter the 3D view as well), **rhythm** (tapping to a song is a pattern...), **nature**, etc. 

* Even rituals, social habits and cultures show a wide range of patterns. Can you name a few examples of these kind of patterns?

* Go explore the adding of 4D to your patterns. 

* What could be the changes to your designs? How do you sense it?

* What would be the purpose for your pattern? Can you explain why?

---

# Design assignment

Key steps

1. Now that you improved your knowledge and skills, find a way to produce your pattern, texture or structure. You can use stamp, stencil, cut out vinyl, 3D printers, laser cutters, AR/VR... Get your skates on!

2. When you think you're done with making your best 2D/3D pattern, find at least two students to get peer reviews. You will need them in the next stage to make improvements to the design.

---

# Evaluation of your pattern skills 

After having worked with this scenario, your pattern skills have grown. Describe here what you have learned, for instance using these questions:

* How was your skills level on patterns before you started this scenario?

* What was your main goal with this exercise?

* In what step did you struggle the most?

* What have you learned doing this scenario?

* Will you see more patterns in your daily life from now on?
