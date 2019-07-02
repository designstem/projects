
| padding: 5vmin

# From triangles to polygons

&nbsp;

Polygons are shapes **more complex than triangles**, having **more sides and angles than 3**. 


---

| padding: 5vmin
| 1 2


## Polygons are composed by triangles.

For example a polygon with four edges can be divided into two triangles.

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

# Regular polygons

- Regular polygons are polygons with **all sides and angles equal**. 
- They are **formed by triangles**, usually isosceles.
- For example 6 triangles connected together form a regular polygon. 
- Regular polygons are **characterized by the number of edges or sides**. 


---



<div class="cells" style="--transition-duration:0.1s; grid-template-columns: 1fr 1fr; grid-template-rows: none; grid-template-areas: 'a1 a2' 'a3 a4'; grid-gap: var(--content-gap); padding: var(--content-padding);">

<div v-for="(p,i) in [ {name:'Equilateral Triangle', sides:3}, {name:'Square', sides:4}, {name:'Pentagon', sides:5}, {name:'Hexagon', sides:6}, {name:'Heptagon', sides:7}, {name:'Octagon', sides:8} ]" :key="'poly'+i" class="cell">
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



| padding: 5vmin
| 1 1
| 2 4
| 3 4

# Calculations in regular polygons

In a regular polygon usually we use the following measures:

-

- **the side: <f-math inline blue>s</f-math>**;
- the **interior angle <f-math inline green>i</f-math>**: the angle of the edge, the angle between two consecutive sides;
- the **exterior angle <f-math inline red>w</f-math>**: the supplementary to the interior angle, but also the angle of triangles that meet in the middle of the polygon;
- the **apothem <f-math inline orange>a</f-math>**: the distance of the center to the middle of the side;
- the **radius** <f-math inline purple>r</f-math>, the distance from the center to an edge.

-

In a polygon with <f-math inline>n</f-math> sides, if we define the radius <f-math inline purple>r</f-math> that denotes its size, we can estimate the above measures using the formulas

In any regular polygon we calculate the **exterior (also central) angle** <f-math inline red>w</f-math> with a formula <f-math inline>\color{red} w \color{black} = \frac {360}{n}</f-math> and **interior angle** <f-math inline green>i</f-math> with <f-math inline>\color{green} i \color{black} = \frac {180(n-2)}{n}</f-math>.


If we know the **radius** <f-math inline purple>r</f-math>, we can **find length of a side** <f-math inline blue>s</f-math> like that: <f-math inline>\color{blue} s \color{black} = 2 \cdot \color{purple} r \color{black} \cdot sin( \frac {\pi}{n} )</f-math> and the **apothem** <f-math inline orange>a</f-math> with <f-math inline>\color{orange} a = \color{purple} r \color{black} \cdot cos( \frac { \pi }{n} )</f-math>

If we know the length of a side <f-math inline blue>s</f-math>, and want to find **radius** <f-math inline purple>r</f-math>, we use <f-math inline>\color{purple} r \color{black} = \frac {\color{blue}s\color{black}}{2 \cdot sin(\frac {\pi}{n})}  </f-math>


-

<f-scene class="fullWidthScene" v-for="(p,i) in [ {s:6, r:1.5} ]" :key="'polygon'+i" style="position:sticky; top:20vh;">
    <f-arc 
      :start-angle="0" 
      :end-angle="solvePolygon(p.s, p.r).w" 
      :fill="color('red')" opacity="0.4"
      strokeWidth="1" r="0.3" inner-radius="0" :rotation="solvePolygon(p.s, p.r).w"
      :position=" `${polarx(0, p.r)} ${polary(0, p.r)}` " />
    <f-arc 
      :start-angle="0" 
      :end-angle="solvePolygon(p.s, p.r).w" 
      :fill="color('red')" opacity="0.7"
      strokeWidth="1" r="0.3" inner-radius="0" :rotation="solvePolygon(p.s, p.r).w" />
    <f-arc 
      :start-angle="0" 
      :end-angle="solvePolygon(p.s, p.r).interior" 
      :fill="color('green')" opacity="0.7"
      strokeWidth="1" r="0.3" inner-radius="0" :rotation="solvePolygon(p.s, p.r).interior"
      :position=" `${polarx(0, p.r)} ${polary(0, p.r)}` "
    />
    <f-line x1="0" y1="0" 
      :x2="polarx(solvePolygon(p.s, p.r).w, solvePolygon(p.s, p.r).h )" 
      :y2="polary(solvePolygon(p.s, p.r).w, solvePolygon(p.s, p.r).h )" 
      strokeWidth="1" :stroke="color('darkgray')" stroke-dasharray="0.03" :rotation="solvePolygon(p.s, p.r).w * 0.5" />
    <f-regularpolygon :count="p.s" :r="p.r" :stroke="color('gray')" />
    <f-polygon :points=" '0 0,' + polarx(0, p.r) + ' ' + polary(0, p.r) + ', ' + polarx(360/p.s, p.r) + ' ' + polary(360/p.s, p.r)" :rotation="solvePolygon(p.s, p.r).w" />
    <f-text position="-0.2 0" :fill="color('red')">w¹</f-text>
    <f-text position="0.5 -1.55" :fill="color('red')">w</f-text>
    <f-text position="1.45 0" :fill="color('blue')">s</f-text>
    <f-text position="0.8 0.1" :fill="color('orange')">a</f-text>
    <f-text position="0.5 0.45" :fill="color('purple')">r</f-text>
    <f-text position="0 -1" :fill="color('green')">i</f-text>
</f-scene>