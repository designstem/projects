
| padding: 5vmin

# Triangles

&nbsp;


---


| 1 1
| 2 3
| padding: 5vmin
| theme: blue

## What is a triangle

-

Triangles derive when we join three lines together. 
**In every triangle we distinguish 3 angles** and **3 sides**.

- Angles are measured **in degrees**. 
- We mark angles with uppercase letters **A**, **B** and **C** 

- The length of the sides is measured in cm, inches, pixels etc 
- We mark sides with lowercase letters **a**, **b** and **c**.
- Sometimes the sides are marked by the letters of two adjascent angles, eg **AB**, **AC** or **BC**

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-1.5,1.5], [-1,-1.5], [1.5,0.5] ]" :angleMarkers="3" />
  <f-group position="0.8 0.42">
    <f-group rotation="0" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="-0.43 0" scale="0.7" :fill="color('blue')">ANGLE</f-text>
    <f-icon-arrow />
  </f-group>

  <f-group position="0.6 -1.2">
    <f-group rotation="120" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="0.3 -0.2" scale="0.7" :fill="color('blue')">SIDE</f-text>
  </f-group>

  <f-group position="0 0">
    <f-text :fill="color('green')" position="-1.5 -0.1">a</f-text>
    <f-text :fill="color('green')" position="0.3 -0.9">b</f-text>
    <f-text :fill="color('green')" position="0.1 1.1">c</f-text>
  </f-group>
</f-scene>



---







| 1 1
| 2 3
| 4 5
| 6 7
| padding: 5vmin

### &nbsp;

## The types of triangles 

By comparing angles and sides, we distinguish triangles as follows: 

-

<!-- 2/3 -->

#### 1. Scalene triangle

#### &nbsp;

It has **all sides and angles unequal**, of different size.

**1.1** Particularly, **if one angle of the triangle is greater than 90°** then this triangle is called **Obtuse**.

<f-math blue>A &gt; 90°</f-math>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-1, -1],[1.5,-1],[-1.5, 1] ]" :angleMarkers="1" />
</f-scene>

-

<!-- 4/5 -->

### &nbsp;

**1.2** If all angles are **less than 90°** then it is called **Acute**

<f-math blue>A &lt; 90° \newline B &lt; 90° \newline C &lt; 90°</f-math>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-0.5, 1],[-1.5, -1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

-

<!-- 6/7 -->

#### 2. Isosceles triangle

#### &nbsp;

It has **two sides and angles equal**.

<f-math blue>AB = AC \newline B = C</f-math>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0,1],[-1.5,-0.5],[1.5,-0.5] ]" :angleMarkers="3" />
</f-scene>

---


| 1 2
| 3 4
| padding: 5vmin

<!-- 8/9 -->

#### 3. Equilateral Triangle

#### &nbsp;

It has **all three sides and angles equal**. 
It can be proved that **each angle is 60°**.

<f-math blue>A = B = C = 60° \newline AB = BC = CA</f-math>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" :angleInfo="true" />
</f-scene>

-

#### 4. Orthogonal or Right Triangle

#### &nbsp;

**One angle** of an Orthogonal triangle is **equal to 90°**

<f-math blue>A = 90°</f-math>

-

<f-scene grid class="fullWidthScene">
<Triangle :points="[ [-1,-1],[1.5,-1],[-1,1] ]" :angleMarkers="1" />
</f-scene>


---



