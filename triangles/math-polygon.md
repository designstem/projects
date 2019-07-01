
| padding: 5vmin

# From triangles to polygons

&nbsp;

Polygons are shapes **more complex than triangles**, having **more sides and angles than 3**. 


---

| padding: 5vmin
| 1 2


## Polygons are composed by triangles.

For example a polygon with four edges can be divided into two triangles, properly connected.

-

<f-scene grid class="fullWidthScene">
    <Triangle points="-1.5 -0.8, 1 -0.5, -1.2 1.2" :angleMarkers="0" :angleLabels="false" :fill="color('green')" />
    <Triangle points="1 -0.5, 1.7 0.7, -1.2 1.2" :angleMarkers="0" :angleLabels="false" :fill="color('yellow')" />
</f-scene>

---


| padding: 5vmin

In a different way, the diagonals of a polygon divide the whole shape into triangles.

-

<f-scene grid class="fullWidthScene">
    <f-line points="-1.5 -0.8, 1.7 0.7" style="stroke-dasharray:0.05 0.07" :stroke="color('blue')" />
    <f-line points="1 -0.5, -1.2 1.2" style="stroke-dasharray:0.05 0.07" :stroke="color('blue')" />
    <f-polygon points="-1.5 -0.8, 1 -0.5, 1.7 0.7, -1.2 1.2" />
</f-scene>

---




| padding: 5vmin

# Normal polygons

- Normal polygons are polygons with **all sides and angles equal**. 
- Are **formed by triangles**, usually isosceles.
- For example 6 triangles connected together form a regular polygon. 
- Normal polygons are **characterized by the number of edges or sides**. 


---



<div class="cells" style="--transition-duration:0.1s; grid-template-columns: 1fr 1fr; grid-template-rows: none; grid-template-areas: 'a1 a2' 'a3 a4'; grid-gap: var(--content-gap); padding: var(--content-padding);">

<div v-for="(p,i) in [ {name:'Square', sides:4}, {name:'Pentagon', sides:5}, {name:'Hexagon', sides:6}, {name:'Heptagon', sides:7} ]" :key="'poly'+i" class="cell">
<f-scene class="fullWidthScene">
    <f-circle r="1.5" strokeWidth="1" :stroke="color('gray')" />
    <f-arc
      r="0.5"
      inner-radius="0"
      :start-angle="polyInteriorAngle(p.sides)*-0.5"
      :end-angle="polyInteriorAngle(p.sides)*0.5"
      pad-angle="0"
      :fill="color('yellow')"
      stroke
      rotation="180"
      position="0 -1.5"
      opacity="0.7"
    />
    <f-group v-for="(l,i) in p.sides" :key="'l'+i" 
      :rotation="(360/p.sides)*i">
      <f-line x1="0" y1="0" :x2="polarx(360/p.sides, 1.5)" :y2="polary(360/p.sides, 1.5)" strokeWidth="0.5" :stroke="color('gray')" stroke-dasharray="0.04 0.05" />
    </f-group>
    <f-regularpolygon :count="p.sides" r="1.5" />
    <f-text position="0 -1.25" scale="0.8">{{ polyInteriorAngle(p.sides) }}°</f-text>
    <f-text position="0 0">{{ p.name }}</f-text>
</f-scene> 

<p style="text-align: center;"><b>{{p.name}}</b>: {{p.sides}} sides, edges</p>

</div>
</div>






---

# Calculations in normal polygons

In a normal polygon normally we use the following measures:

- the side s;
- the interior angle, the angle of the edge, the angle between two consecutive sides;
- the apothem a, the distance of the center to the midle of the side;
- the radius r, the distance from the center to an edge.

In a polygon with n sides, if we define the radius r that denotes its size, we can estimate the above measures using the formulas

<f-math>w = \frac {360}{n}</f-math>
<f-math>s = 2 × r × sin(w)</f-math>
<f-math>a = r × cos( \frac {w}{2} )</f-math>
<f-math>Interior angle = \frac {180(n-2)}{n}</f-math>




