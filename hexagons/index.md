| background: ./images/bee.jpg
| theme: dark
| 1 3
| 2 3

# <big><big>Of Bees and Packages</big></big>

<big>How to optimize packaging, reduce loss of space and avoid material waste</big>

-

<f-next-button title="Start" />

<f-notes>

### Learning goals

* To promote interest towards learning both design and STEM

* To learn about concepts in geometry and maths

</f-notes>
---
| 1 1 1
| 2 3 4
| 5 5 5

# Learn about history of human made packages
-

<f-image src="https://cdn.pixabay.com/photo/2012/04/13/10/58/paint-31831_960_720.png" />

-

<big><span class="bullet">1</span></big>

<big>Packages evolution is strongly related to human history:</big>

<f-video src="https://www.youtube.com/watch?time_continue=4&v=xz9UM9ZVvXY" />
-
<big><span class="bullet">2</span></big>
<f-card
  title="TASK:"
>
  Look for packages around you and find differences between them
</f-card>
-

<f-next-button />

---

| 1 1 1
| 2 2 3
| 2 2 4
| 5 5 5

# Nowadays packaging is also marketing

<big>… and sometimes marketing is misleading! </big>

-

<f-image src="https://www.vzhh.de/sites/default/files/styles/crop_default/public/medien/167/bilder/Bensdorp_Kakao_final.png?itok=3xMh-LGX" />

X-Ray of a cereal package, showing the amount of product in relation to the size of the packaging.

-

<big><span class="bullet">1</span></big>

<big>Do some of the packages you’ve found have misleading packaging?</big> 

-

<big><span class="bullet">2</span></big>

  *<big>What do you think and feel about it?</big>

  *<big>Would you want to change it? </big>

  *<big>Why and how?</big>

-

<f-next-button />

---

| 1 1 4 4
| 2 3 5 6
| 2 3 5 6
| 7 7 7 7

# Costly packaging

-

Sometimes the value of the package is higher than the value of the product itself

-

<f-image src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Travel_mug.jpg" />

-

# Precious packaging

-

Sometime the package is part of the value

-

<f-image src="https://c.pxhere.com/photos/77/00/cosmetics_advertising_perfumes_perfume_studio_the_practice_of_acuteness_detail-1084407.jpg!d" />

-

<f-next-button />

---

| 1 2


# Ethic packaging

<big> **All the times**, reducing packaging is an ethic mission! </big>

<f-next-button />
-

<f-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Make_a_difference%2C_understanding_Pendleton%27s_recycling_program_DVIDS536228.jpg/1200px-Make_a_difference%2C_understanding_Pendleton%27s_recycling_program_DVIDS536228.jpg" />

---

| 1 2


# Packaging in nature

<big> Nature has always evolved the best packaging for its products. </big>

<big> **How can we optimize packaging?** </big>

<f-next-button />
-

<f-image src="https://svgsilh.com/svg/32532.svg" />

---

| 1 2
| 3 3


# Explore

<big> Bring/take a milk or juice carton (square shape). </big>
  1. Cut off the top of the carton and fill it with rice until it is full.
  2. Weight the rice on a scale without the carton.
  3. Take note of the weight.

-

<f-image src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />

-

<f-next-button title="The experiment continues ..."/>

---

| 1 1 1 2
| 3 3 3 3
| 4 4 4 4


# Explore

  4. Cut off also the bottom of the carton and cut along one of the sides.
  5. Change the base of the carton into different regular shapes and check if the resulting boxes contain different amount of rice.

-

<f-image src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />

-

<table>
  <tbody>
    <tr>
      <td>
        <f-scene >
          <f-regularpolygon
            count="4"
            :stroke="color('red')"
          />
        </f-scene>
      </td>
      <td>
        <f-scene >
          <f-regularpolygon
            count="3"
            :stroke="color('red')"
          />
        </f-scene>
      </td>
      <td>
        <f-scene >
          <f-regularpolygon
            count="5"
            :stroke="color('red')"
          />
        </f-scene>
      </td>
      <td>
        <f-scene >
          <f-regularpolygon
            count="6"
            :stroke="color('red')"
          />
        </f-scene>
      </td>
      <td>
        <f-scene >
          <f-circle
            :stroke="color('red')"
          />
        </f-scene>
      </td>
    </tr>
    <tr>
      <td>Weight:</td>
      <td>Weight:</td>
      <td>Weight:</td>
      <td>Weight:</td>
      <td>Weight:</td>
    </tr>
  </tbody>
</table>

-

<f-next-button />

---

| 1 2
| 3 3

<big> <span class="bullet">1</span>Which shape optimize carton volume?</big>

<big> <span class="bullet">2</span>What can you say about the relation between the perimeter of the base and the volume of the carton?</big>

-

<f-image src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />

-

<f-next-button/>

---

| 1 1 1 1
| 2 2 3 3
| 2 2 3 3
| 4 4 4 4

# Drawing polygons with fixed perimeter

-

## Experiment how polygons area changes

<big><span class="bullet">1</span> Start changing only the dimension of a square and a triangle with the same ***perimeter*** `p = {{ get('p') }}`</big>
<f-slider set="p" from="1" to="10"  >
</f-slider>
***A*** Which is the ratio between square and triangle areas?
***B*** What can you say about the volume of a milk carton with triangle base?

<big><span class="bullet">1</span> Now keep a fixed perimeter of `10` and change the ***number of edges*** `n = {{ get('n') }}`</big>
<f-slider set="n" from="3" to="32" integer >
</f-slider>
***A*** How the ratio between square and polygons changes?
***B*** Given a fixed perimeter, which is the polygon with the bigger area?
***C*** What can you say about the volume of the milk carton?
***D*** Have you ever seen packages with a not square base?

-

<f-scene grid step="0.5" >
	<f-group :rotation="get('r',0)">
		<f-circle opacity="0.1" :r="crEP(get('n',3),get('p',1))" :stroke="color('yellow')/>
		<f-circle :r="crEP(32,get('p',1))" opacity="0.2" />
		<f-line
			closed
			:points="polarpoints(Math.floor(4),crEP(4,get('p',1)))"
			:stroke="color('blue')"
		/>
		<f-line
			closed
			:points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
			:stroke="color('red')"
		/>
		<f-circle opacity="0.1" :r="rEP(get('n',3),get('p',1))" / :stroke="color('green')>
		<f-line
			opacity="0"
			:x2="polarpoints(get('n',3),rEP(get('n',3),get('p',1)))[0].x"
			:y2="polarpoints(get('n',3),rEP(get('n',3),get('p',1)))[0].y"
		/>
	</f-group>
</f-scene>

<details>
	<summary>Geom properties involved</summary>
	1 perimeter of the polygon
  1 edge length of the polygon 
	2 inradius
	3 circumradius
</details>

You can always ***rotate*** the polygons with the parameter `r`
<f-slider set="r" from="0" to="360"  >
</f-slider>

-

<f-next-button/>

---

| 1 1
| 2 2
| 2 2
| 3 3

# Optional: tools for understanding regular shapes

-

## <span class="bullet">1</span>Concept of regular polygons (particular attention to the hexagon) and their main characteristics:

<big>https://www.mathsisfun.com/geometry/interior-angles-polygons.html</big>

## <span class="bullet">2</span>Advanced concepts of regular polygons and measures:

<big>http://mathworld.wolfram.com/RegularPolygon.html</big>

## <span class="bullet">3</span>How to build a regular polygon:

<big>https://www.geogebra.org/m/WCFMxSce</big>

## <span class="bullet">4</span>Circumcircle of a polygon

<big>https://www.mathopenref.com/polygoncircumcircle.html</big>

-

<f-next-button/>

---

| 1 3
| 2 3
| 2 3
| 4 3

# Multiple packaging

-

<big><span class="bullet">1</span>Take a lemon or an orange. Think about its parts and its packaging subdivision. Sometimes natural packagings do not optimize the amount per se, but they maximize the outer container utilization.</big>

-

<f-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Citrus_Limonum._Lemon_Wellcome_M0005888.jpg/681px-Citrus_Limonum._Lemon_Wellcome_M0005888.jpg" />

-

<f-next-button/>

---

| 1 1
| 2 3
| 2 3
| 4 4

# If we have to store multiple packages?

-

<big>If there are multiple pieces of the product, they have to be stacked/stored with the least waste of space in between the packages.</big>

***perimeter*** `p`
<f-slider set="p" from="1" to="10"  >
</f-slider>
***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer >
</f-slider>
***rotation*** `r`
<f-slider set="r" from="0" to="360"  >
</f-slider>
-

<f-scene grid>
  <f-group scale="1">
    <f-grid-pattern cols="3" rows="3" step="1">
      <f-box :stroke="color('black')" />
      <f-group :rotation="get('r',0)">
        <f-line 
          closed
          :points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
          :stroke="color('blue')"
        />
      />
    </f-grid-pattern>
  </f-group> 
</f-scene>

-

<f-next-button/>

---

| 1 1 1
| 2 2 2
| 3 4 5
| 3 4 5
| 6 6 6

# If we have to store multiple packages?

-

<big>Try to fill all the gaps between packages optimizing perimeter in different pattern.</big>

***perimeter*** `p`
<f-slider set="p" from="1" to="10"  >
</f-slider>
***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer >
</f-slider>
***rotation*** `r`
<f-slider set="r" from="0" to="360"  >
</f-slider>

-

<f-scene grid>
  <f-group scale="1">
    <f-grid-pattern cols="3" rows="3" step="1">
      <f-group :rotation="get('r',0)">
        <f-line 
          closed
          :points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
          :stroke="color('blue')"
        />
      />
    </f-grid-pattern>
  </f-group> 
</f-scene>

-

<f-scene grid>
  <f-group scale="1">
    <f-hex-pattern cols="3" rows="3" step="0.5">
      <f-group :rotation="get('r',0)">
        <f-line 
          closed
          :points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
          :stroke="color('blue')"
        />
      />
    </f-grid-pattern>
  </f-group> 
</f-scene>

-

<f-scene grid>
  <f-group scale="1">
    <f-spin-pattern>
      <f-group :rotation="get('r',0)">
        <f-line 
          closed
          :points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
          :stroke="color('blue')"
        />
      />
    </f-grid-pattern>
  </f-group> 
</f-scene>

-

<f-next-button/>

---

| 1 2
| 3 3

# Optimize the outer container

<big>After this work, can you evaluate which is the optimal shape to store the maximum amount of rice with minimal cardboard material without loss of space in between the cartons? </big>

-

<f-image src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />

-

<f-next-button/>

---

| 1 2
| 1 2
| 3 3

# Also animals package their goods

<big>Find out how honeycombs are built and why bees choose hexagons and not other regular polygons. Watch the following video:
https://www.youtube.com/watch?v=QEzlsjAqADA
</big>

-

<f-image src="https://images.pexels.com/photos/928978/pexels-photo-928978.jpeg" />

-

<f-next-button/>

---

| background: ./images/bee.jpg
| theme: dark
| tint: 0.5
| 1 1
| 2 2

# <big><big>Of Bees and Packages</big></big>

## <span class="bullet">1</span> Verify that the hexagon has the maximum area (= bigger beehive cell) among the stackable polygons with same perimeter.

## <span class="bullet">2</span> Verify that the hexagon has the minimum perimeter (= min amount of vax, the packging!) among the stackable polygons with same area.

-

<f-next-button />

---

| 1 2
| 1 2
| 1 2
| 1 2
| 3 3

# Natural marketing in packaging 

## Sometimes in nature the packaging itself is part of the product.

### <span class="bullet">1</span> Take an apple. Think about its skin, core and seeds. What is product and what is packaging?

### <span class="bullet">2</span> Do you know about a human made product having a package that is part of the product?  

-

<f-image src="https://cdn.pixabay.com/photo/2012/04/13/14/02/apple-32524_1280.png" />

-

<f-next-button/>

---

| 1 2
| 1 2
| 1 2
| 1 2
| 1 3

# Design object task 

## Think about an object which does not have a reusable package

### <span class="bullet">1</span>Imagine how you can design a new reusable package, possibly suitable for different purposes

### <span class="bullet">2</span>Evaluate what’s the best material for your package; keep in mind that it has to be reusable 

### <span class="bullet">3</span>What if you have to store several packages, how could you optimize the shape of your package in order to reduce loss of space between them?

## *Remember: You have learned how to optimize your packaging to reduce costs and waste, apply your knowledge to this problem*

-



<center>
  <f-scene>
    <f-rotation>
      <f-circle-pattern :r="0.5 - (get('r') / 2)">
        <f-hex-pattern cols="2" rows="3" step="0.5" :r="get('r')">
          <f-group :rotation="get('r',0)">
        <f-line 
          closed
          :points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
          :stroke="color('blue')"
        />
      />
        </f-circle-pattern>
      </f-circle-pattern>
    </f-rotation>
  </f-scene>
</center>

-

***perimeter*** `p`
<f-slider set="p" from="1" to="10"  >
</f-slider>
***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer >
</f-slider>
***fun*** `f`
<f-slider set="r" from="0" to="360"  >
</f-slider>

---


