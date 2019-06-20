# Triangles

### What is a triangle

Triangles derive when we join three lines together. 
In every triangle we distinguish **3 sides** and **3 angles**.

<f-scene>
<Triangle :points="[ [-1,1], [-0.5,-1], [1.5,0.5] ]" />
</f-scene>


The length of the sides is measured in cm, inches, pixels etc. 
Angles are measured in degrees. We name angles by using the letter of their corresponding corner eg. A, B, C 

## &nbsp;

## The types of triangles 

By comparing angles and sides, we distinguish triangles as follows. 



### Scalene triangle

<f-inline>

<f-scene>
<Triangle :points="[ [-1, -1],[-1.5, 1],[1.5,-1] ]" :angleMarkers="1" />
</f-scene>

<div>

It has all sides and angles unequal, of different size.
Particularly, if one angle of the triangle is greater than 90° then this triangle is called Obtuse.

</div>

</f-inline>

<f-inline>

<f-scene>
<Triangle :points="[ [-0.5, 1],[-1.5, -1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

If all angles are **less than 90°** then it is called **Acute**

</f-inline>

### Isosceles triangle

<f-inline>

<f-scene>
<Triangle :points="[ [0,1],[-1.5,-0.5],[1.5,-0.5] ]" :angleMarkers="3" />
</f-scene>

It has <b>two sides and angles equal</b>.

</f-inline>


### Equilateral Triangle

<f-inline>

<f-scene>
<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

It has **all three sides and angles equal**. 
It can be proved that **each angle is 60°**.

</f-inline>


### Orthogonal or Right Triangle

<f-inline>

<f-scene>
<Triangle :points="[ [-1,1],[-1,-1],[1.5,-1] ]" :angleMarkers="3" />
</f-scene>

**One angle** of an Orthogonal triangle is **equal to 90°**

</f-inline>


### &nbsp;

<f-hr style="border-bottom:1px dotted var(--black)" />

### &nbsp;




### How to calculate angles and sides in triangles.

#### &nbsp;

> **The sum of all 3 angles in every triangle is 180°**

<span style="font-size:80%; line-height:60%;">As you remember, each angle of equilateral triangle is 60°, the sum of which is 180°</span>

#### &nbsp;

<f-inline>

<f-scene>
<Triangle :points=" [ [get('px1',0),get('py1',1)],[-1.5,-1],[1.5,-1] ] " :angleInfo="true" />
</f-scene>

<div style="width: 100%;">


<f-scene v-slot="{ mouse }" width="300">
  <f-drag
    :mouse="mouse"
    points="-1 1, 1 -1, 1 1"
    v-slot="{ points }"
  >
    <Triangle :points="points" :angleLabels="false" :angleInfo="true"  />
  </f-drag>
</f-scene>


<!-- *Change one angle and see how the others are affected*

<f-slider set="px1" from="-2" to="2" step="0.1" value="0" style="width:100%" title="x" />
<f-slider set="py1" from="-2" to="2" step="0.1" value="1.598" style="width:100%" title="y" /> -->






</div>

</f-inline>



asdads