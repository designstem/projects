<div style="padding:var(--content-padding)">

# Triangles

### What is a triangle

Triangles derive when we join three lines together. 
In every triangle we distinguish **3 sides** and **3 angles**.

<f-scene grid width="400" height="400">
  <Triangle :points="[ [-1.5,1.5], [-1,-1.5], [1.5,0.5] ]" />
  <f-group position="0.8 0.42">
    <f-group rotation="0" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="-0.43 0" scale="0.7" :fill="color('blue')">ANGLE</f-text>
  </f-group>

  <f-group position="0.7 -0.7">
    <f-group rotation="120" >
      <f-line points="0 0, 0.3 0"></f-line>
      <f-line points="0.2 0.1, 0.3 0, 0.2 -0.1"></f-line>
    </f-group>
    <f-text position="0.3 -0.2" scale="0.7" :fill="color('blue')">SIDE</f-text>
  </f-group>
</f-scene>


The length of the sides is measured in cm, inches, pixels etc. 
Angles are measured in degrees. We name angles by using the letter of their corresponding corner eg. A, B, C 

### &nbsp;

<f-hr style="border-bottom:1px dotted var(--black)" />

### &nbsp;

## The types of triangles 

By comparing angles and sides, we distinguish triangles as follows: 

#### &nbsp;

#### **1** Scalene triangle

It has **all sides and angles unequal**, of different size.

<f-inline>

<f-scene grid>
<Triangle :points="[ [-1, -1],[1.5,-1],[-1.5, 1] ]" :angleMarkers="1" />
</f-scene>

<div style="width:60%;">

Particularly, **if one angle of the triangle is greater than 90°** then this triangle is called **Obtuse**.

</div>

</f-inline>

<f-inline>

<f-scene grid>
<Triangle :points="[ [-0.5, 1],[-1.5, -1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

<div style="width:60%;">

If all angles are **less than 90°** then it is called **Acute**

</div>

</f-inline>

#### &nbsp;

#### **2** Isosceles triangle

<f-inline>

<f-scene grid>
<Triangle :points="[ [0,1],[-1.5,-0.5],[1.5,-0.5] ]" :angleMarkers="3" />
</f-scene>

<div style="width:60%;">

It has **two sides and angles equal**.

</div>

</f-inline>

#### &nbsp;

#### **3** Equilateral Triangle

<f-inline>

<f-scene grid>
<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

<div style="width:60%;">

It has **all three sides and angles equal**. 
It can be proved that **each angle is 60°**.

</div>

</f-inline>

#### &nbsp;

#### **4** Orthogonal or Right Triangle

<f-inline>

<f-scene grid>
<Triangle :points="[ [-1,1],[-1,-1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

<div style="width:60%;">

**One angle** of an Orthogonal triangle is **equal to 90°**

</div>

</f-inline>

#### &nbsp;

<f-hr style="border-bottom:1px dotted var(--black)" />

### &nbsp;




### How to calculate angles and sides in triangles.

#### &nbsp;

<blockquote>

<f-inline style="margin-bottom:0">

<f-fact-icon size="large" />

#### The sum of all 3 angles in every triangle is 180°

</f-inline>

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


# &nbsp;


#### **A** In any triangle if we know angles A and B and want to calculate angle C. 


<f-inline style="align-items:flex-start;">

<div style="flex:0 0 60%">

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
</div>

<f-scene grid class="fullWidthScene" style="flex:0 0 40%">
  <Triangle :points="[ [-1.5,-0.5],[1.5,-0.5],[2.021-1.5,1.166532-0.5] ]" angleInfo="true" />
</f-scene>

</f-inline>

## &nbsp;

#### **B** In a isosceles triangle, we know angle A and we want to calculate angles B or C.


<f-inline style="align-items:flex-start;">

<div style="flex:0 0 60%">

If we know the degrees of angle <var class="red">A</var> we can calculate angles <var class="blue">B</var> and <var class="green">C</var> by using the formula 

<f-math>
  \color{blue} ∠B \color{black} or \color{red} ∠C \color{black} = \frac {180 - \color{red} A \color{black} }{2}
</f-math>

Example: if <var class="red">A=100°</var> then 

<f-math>
  \color{blue} B \color{black} = \frac {180° - \color{red} 100° \color{black} }{2} = \frac {80°}{2} = 40°
</f-math>

</div>

<f-scene grid class="fullWidthScene" style="flex:0 0 40%">
  <Triangle :points="[ [0,1],[-1.5,-0.8],[1.5,-0.8] ]" angleInfo="true" />
</f-scene>

</f-inline>


## &nbsp;

#### **C** In a right triangle we know sides a and b and we want to calculate the third side c.

For that we have to know the Theorem of Pythagoras

# &nbsp;

<blockquote>

## ~<f-fact-icon /> The Theorem of Pythagoras:~

#### ~In every orthogonal (right)  triangle with sides a, b and c (A is the right angle) it holds a²=b²+c²~

</blockquote> 


# &nbsp;

<f-inline style="align-items:flex-start;">

<div style="flex:0 0 60%">

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

</div>

<f-scene grid class="fullWidthScene" style="flex:0 0 40%">
  <Triangle :points="[ [-0.5,-1],[1,-1],[-0.5,1] ]" :angleLabels="false" />
  <f-text :fill="color('red')" position="0.5 0.2">a</f-text>
  <f-text :fill="color('blue')" position="-0.7 0">b</f-text>
  <f-text :fill="color('green')" position="0.2 -1.2">c</f-text>
</f-scene>

</f-inline>






</div> <!-- KEEP IT! -->