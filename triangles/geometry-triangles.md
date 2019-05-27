# Triangles

### What is a triangle

Triangles derive when we join three lines together. 
In every triangle we distinguish **3 sides** and **3 angles**.

<Triangle :points="[ [-1,1], [-0.5,-1], [1.5,0.5] ]" />



The length of the sides is measured in cm, inches, pixels etc. 
Angles are measured in degrees. We name angles by using the letter of their corresponding corner eg. A, B, C 

## &nbsp;

## The types of triangles 

By comparing angles and sides, we distinguish triangles as follows. 



### Scalene triangle

<f-inline>

<Triangle :points="[ [-1, -1],[-1.5, 1],[1.5,-1] ]" :angleMarkers="1" />

<div>

It has all sides and angles unequal, of different size.
Particularly, if one angle of the triangle is greater than 90° then this triangle is called Obtuse.

</div>

</f-inline>

<f-inline>

<Triangle :points="[ [-0.5, 1],[-1.5, -1],[1.5,-1] ]" :angleMarkers="3" />

If all angles are **less than 90°** then it is called **Acute**

</f-inline>

### Isosceles triangle

<f-inline>

<Triangle :points="[ [0,1],[-1.5,-0.5],[1.5,-0.5] ]" :angleMarkers="3" />

It has <b>two sides and angles equal</b>.

</f-inline>


### Equilateral Triangle

<f-inline>

<Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" />

It has **all three sides and angles equal**. 
It can be proved that **each angle is 60°**.

</f-inline>


### Orthogonal or Right Triangle

<f-inline>

<Triangle :points="[ [-1,1],[-1,-1],[1.5,-1] ]" :angleMarkers="3" />

**One angle** of an Orthogonal triangle is **equal to 90°**

</f-inline>




<f-hr style="margin:5vh 0;" />

## How to calculate angles and sides in triangles.

> Rule: The sum of all 3 angles in every triangle is 180°

<f-inline>

<Triangle :points=" [ [get('px1',0),get('py1',1)],[-1,-1],[1.5,-1] ] "  />

<f-slider set="px1" from="-2" to="2" step="0.01" style="width:100%" title="x" />
<f-slider set="py1" from="-2" to="2" step="0.01" style="width:100%" title="y" />


</f-inline>

asdads