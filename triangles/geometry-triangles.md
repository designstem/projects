
| 1 1
| 2 3

# Triangles

## What is a triangle

-

Triangles derive when we join three lines together. 
**In every triangle we distinguish 3 sides** and **3 angles**.

The length of the sides is measured in cm, inches, pixels etc and **named a, b and c**.
Angles are measured **in degrees**. We name angles by using the letter of their corresponding corner eg. **A, B, C** 

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-1.5,1.5], [-1,-1.5], [1.5,0.5] ]" />
  <f-group position="0.8 0.42">
    <f-group rotation="0" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="-0.43 0" scale="0.7" :fill="color('blue')">ANGLE</f-text>
  </f-group>

  <f-group position="0.6 -1.2">
    <f-group rotation="120" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="0.3 -0.2" scale="0.7" :fill="color('blue')">SIDE</f-text>
  </f-group>

  <f-group position="0 0">
    <f-text :fill="color('green')" position="-1.5 0">a</f-text>
    <f-text :fill="color('green')" position="0.3 -0.8">b</f-text>
    <f-text :fill="color('green')" position="0.1 1.2">c</f-text>
  </f-group>
</f-scene>


---







| 1 1
| 2 3
| 4 5
| 6 7

### &nbsp;

## The types of triangles 

By comparing angles and sides, we distinguish triangles as follows: 

#### &nbsp;

#### **1** Scalene triangle

It has **all sides and angles unequal**, of different size.

-

<!-- 2/3 -->

**1.1** Particularly, **if one angle of the triangle is greater than 90°** then this triangle is called **Obtuse**.

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-1, -1],[1.5,-1],[-1.5, 1] ]" :angleMarkers="1" />
</f-scene>

-

<!-- 4/5 -->

**1.2** If all angles are **less than 90°** then it is called **Acute**

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-0.5, 1],[-1.5, -1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

-

<!-- 6/7 -->

#### **2** Isosceles triangle

It has **two sides and angles equal**.
<var>B</var> = <var>C</var>
<var>AB</var> = <var>AC</var>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0,1],[-1.5,-0.5],[1.5,-0.5] ]" :angleMarkers="3" />
</f-scene>

---


| 1 2
| 3 4

<!-- 8/9 -->

#### **3** Equilateral Triangle

It has **all three sides and angles equal**. 
It can be proved that **each angle is 60°**.

<var>A</var> = <var>B</var> = <var>C</var> = 60°
<var>AB</var> = <var>BC</var> = <var>AC</var>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" :angleInfo="true" />
</f-scene>

-

#### **4** Orthogonal or Right Triangle

**One angle** of an Orthogonal triangle is **equal to 90°**

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-1,1],[-1,-1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>


---












### &nbsp;

## How to calculate angles and sides in triangles.

#### &nbsp;

<blockquote>

<section>

<f-inline style="margin-bottom:0">

<f-fact-icon size="large" />

#### The sum of all 3 angles in every triangle is 180°

</f-inline>

</section>

</blockquote> 



<f-inline>

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" angleInfo="true" />
</f-scene>

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-1,1],[-1,-1],[1,-1] ]" :angleMarkers="3" angleInfo="true" />
</f-scene>

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0.3,1.6],[-1.5,-1],[1.2,-1.2] ]" :angleMarkers="3" angleInfo="true" />
</f-scene>

</f-inline>





---

| 1 1
| 2 3

# &nbsp;

#### **A** In any triangle if we know angles A and B and want to calculate angle C. 

-

For example, if we assume that 

<f-math>
\color{red} ∠A = 30° \color{black} and \color{blue} ∠B = 50°
</f-math>

then, since

<f-math>
\color{red} ∠A \color{black} + \color{blue} ∠B \color{black} + \color{green} ∠C \color{black} = 180°
</f-math>

<f-math>
\color{green} ∠C \color{black} = 180° - ( \color{red} ∠A \color{black} + \color{blue} ∠B \color{black} ) = 180° - ( \color{red} 30° \color{black} + \color{blue} 50° \color{black} ) = 180° - 80° = 100°
</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-1.5,-0.5],[1.5,-0.5],[2.021-1.5,1.166532-0.5] ]" angleInfo="true" />
</f-scene>

---









| 1 1
| 2 3

## &nbsp;

#### **B** In a isosceles triangle, we know angle A and we want to calculate angles B or C.

-

If we know the degrees of angle <var class="red">A</var> we can calculate angles <var class="blue">B</var> and <var class="green">C</var> by using the formula 

<f-math>
  \color{blue} ∠B \color{black} or \color{red} ∠C \color{black} = \frac {180 - \color{red} A \color{black} }{2}
</f-math>

Example: if <var class="red">A=100°</var> then 

<f-math>
  \color{blue} B \color{black} = \frac {180° - \color{red} 100° \color{black} }{2} = \frac {80°}{2} = 40°
</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [0,1],[-1.5,-0.8],[1.5,-0.8] ]" angleInfo="true" />
</f-scene>

---









| 1 1
| 2 3

## &nbsp;

#### **C** In a right triangle we know sides a and b and we want to calculate the third side c.

#### &nbsp;

For that we have to know the Theorem of Pythagoras

<blockquote>
<section>

<f-inline>

<f-fact-icon size="large" />

### ~The Theorem of Pythagoras:~

</f-inline>

#### ~In every orthogonal (right)  triangle with sides a, b and c (A is the right angle) it holds a²=b²+c²~

</section>
</blockquote> 


### &nbsp;

-

**For example:** let <var class="red">a=5</var> and <var class="blue">b=4</var> then 

<f-math>
  \color{red} a^2 \color{black} = \color{blue} b^2 \color{black} + \color{green} c^2
</f-math>

<f-math>
  \color{green} c^2 \color{black} = \color{red} a^2 \color{black} - \color{blue} b^2 \color{black} = \color{red} 5^2 \color{black} - \color{blue} 4^2 \color{black} = \color{red} 25 \color{black} - \color{blue} 16 \color{black} = 9
</f-math>

<f-math>
\color{green} c \color{black} = \sqrt {9} = 3
</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-0.5,-1],[1,-1],[-0.5,1] ]" :angleLabels="false" />
  <f-text :fill="color('red')" position="0.5 0.2">a</f-text>
  <f-text :fill="color('blue')" position="-0.7 0">b</f-text>
  <f-text :fill="color('green')" position="0.2 -1.2">c</f-text>
</f-scene>

---








| 1 1
| 2 3

#### **D** In a isoskeles triangle, we know all the sides and we want to calculate the height from angle A

-

Let <var class="red">a</var>=10 and <var class="blue">b</var>=<var class="green">c</var>=16. 

The triangle AHC is orthogonal and the unknown height <var class="purple">h</var> is one of its vertical sides. 
In that triangle holds the theorem of Pythogoras so 

<f-math>
  AC^2 = AH^2 + HC^2
</f-math>

We notice that AH intersects BC in the middle H, so HC is half of BC, ie. 

<f-math>
  HC = \frac {10}{2} = 5.
</f-math>

The height <var class="purple">h</var> is estimated by

<f-math>
  \color{purple} h^2 \color{black} = AH^2 = AC^2 + HC^2 = 16^2 + 5^2 = 256 + 25 = 281
  \color{purple} h \color{black} = \sqrt {281} \approx 16.7
</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [0,1.5],[1,-1],[-1,-1] ]" />
  <f-line :points="[ [0,1.5],[0,-1] ]" />
  <f-box :fill="color('purple')" r="0.25" opacity="0.5" position="0.125 -0.875" />
  <f-text :fill="color('green')" position="0.7 0.3">c</f-text>
  <f-text :fill="color('blue')" position="-0.7 0.3">b</f-text>
  <f-text :fill="color('red')" position="0 -1.2">a</f-text>
  <f-text :fill="color('purple')" position="-0.2 0.3">h</f-text>
  <f-text position="-0.2 -0.9">H</f-text>
</f-scene>

---










# &nbsp;

## Use of trigonometric functions to combine angles and sides in right triangles.

The ratios of the sides of a right triangle are called trigonometric ratios. 
The three common trigonometric ratios are the **sine (sin)**, **cosine (cos)**, and **tangent (tan)**. 

These are defined as follows 


<blockquote>
  <section>
    <f-math>
      sin(B) = \frac {b}{a} , sin(C) = \frac {c}{a},
      cos(B) = \frac {c}{a} , cos(C) = \frac {b}{a},
      tan(B) = \frac {b}{c} , tan(C) = \frac {b}{c}
    </f-math>
  </section>
</blockquote>

