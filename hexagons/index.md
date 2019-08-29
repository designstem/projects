| chapter: Of Bees and Packages
| section: Start
| 1 1 1 2 2

***TODO*** Content


***TODO*** layout

# <big>Of Bees and Packages</big>

How to optimize packaging, reduce loss of space and avoid material waste

<f-next-button title="Start" />

-

<img src="https://etc.usf.edu/clipart/6800/6853/honey-bee_6853_md.gif" />

<f-notes style="--primary: var(--darkgray)" >

### Learning goals

* To promote interest towards learning both design and STEM

* To learn about concepts in geometry and maths

Image credits: https://etc.usf.edu/clipart/6800/6853/honey-bee_6853.htm

</f-notes>

---

| section: History of packages

<img src="https://etc.usf.edu/clipart/64900/64993/64993_dollcase_md.gif" />

-

## History of human made packages

1. Packages evolution is strongly related to human history. Watch the video overview.

  <details>
    <summary>Watch the video overview</summary>
    <f-video src="https://www.youtube.com/watch?time_continue=4&v=xz9UM9ZVvXY" />
  </details>

2. Look for packages around you and find differences between them

---

| section: Packages as marketing

| 1 2 2
| rows: auto 1fr 

## Nowadays packaging is also marketing

...and sometimes marketing is misleading! 

Here is a X-Ray of a cereal package, showing the amount of product in relation to the size of the packaging.

1. Do some of the packages you’ve found have misleading packaging?

2. What do you think and feel about it? Would you want to change it? Why and how?


-

<img src="https://www.vzhh.de/sites/default/files/styles/crop_default/public/medien/167/bilder/Bensdorp_Kakao_final.png?itok=3xMh-LGX" />

-***ERIK: Can we use this image?***
The source is from https://www.vzhh.de/themen/mogelpackungen/luftpackungen/mogelpackungen-jede-menge-luft-nach-oben and has "© Verbraucherzentrale Hamburg (vzhh)"***

---

| 1 2 3 4
| 5 5 6 6

### Costly packaging

Sometimes the value of the package is higher than the value of the product itself

-

<img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Travel_mug.jpg" style="width: 50%" />

-

### Precious packaging

Sometime the package is part of the value

-

<img src="https://c.pxhere.com/photos/77/00/cosmetics_advertising_perfumes_perfume_studio_the_practice_of_acuteness_detail-1084407.jpg!d" />

-

### Ethic packaging

 **All the times**, reducing packaging is an ethic mission! 

-

<f-image src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Make_a_difference%2C_understanding_Pendleton%27s_recycling_program_DVIDS536228.jpg/1200px-Make_a_difference%2C_understanding_Pendleton%27s_recycling_program_DVIDS536228.jpg" />

---

| section: Packages in nature

## Packaging in nature

Nature has always evolved the best packaging for its products. 

**How can we optimize packaging?** 

-

<img src="https://etc.usf.edu/clipart/84800/84862/84862_lime_quat_md.gif" />

---

| section: Exercise: milk carton
| 1 1 2

## Exercise

***TODO layout***

Bring/take a milk or juice carton (square shape). 

1. Cut off the top of the carton and fill it with rice until it is full.

2. Weight the rice on a scale without the carton.

3. Take note of the weight.

4. Cut off also the bottom of the carton and cut along one of the sides.

5. Change the base of the carton into different regular shapes and check if the resulting boxes contain different amount of rice.

  <table>
    <tbody>
      <tr>
        <td>
          <f-scene width="200" height="200">
            <f-regularpolygon
              scale="1.75"
              count="3"
              :stroke="color('red')"
            />
          </f-scene>
        </td>
        <td>
          <f-scene width="200" height="200">
            <f-regularpolygon
              scale="1.75"
              count="4"
              :stroke="color('red')"
            />
          </f-scene>
        </td>
        <td>
          <f-scene width="200" height="200">
            <f-regularpolygon
              scale="1.75"
              count="5"
              :stroke="color('red')"
            />
          </f-scene>
        </td>
        <td>
          <f-scene width="200" height="200">
            <f-regularpolygon
              scale="1.75"
              count="6"
              :stroke="color('red')"
            />
          </f-scene>
        </td>
        <td>
          <f-scene width="200" height="200">
            <f-circle
              scale="1.75"
              :stroke="color('red')"
              stroke-width="5"
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

6. Which shape optimize carton volume?

7. What can you say about the relation between the perimeter of the base and the volume of the carton?

-

<!--
<img src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />
-->

---

| section: Explore polygon area and perimeter

| 1 1 1 1
| 2 2 3 3
| 2 2 3 3
| 4 4 4 4
| rows: auto 1fr 1fr auto

***TODO format***

## Drawing polygons with fixed perimeter

-

### Experiment how polygons area changes

<span class="bullet">1</span> Start changing only the dimension of a square and a triangle with the same ***perimeter*** `p = {{ get('p') }}`

<f-slider set="p" from="1" to="10" />

***A*** Which is the ratio between square and triangle areas?

***B*** What can you say about the volume of a milk carton with triangle base?

<span class="bullet">2</span> Now keep a fixed perimeter of `10` and change the ***number of edges*** `n = {{ get('n') }}`

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

<f-slider set="r" from="0" to="360" />


---

| section: Tools for understanding regular shapes
| 1 2 2


<caption>Optional</caption>

## Tools for understanding regular shapes

-

1. Concept of regular polygons (particular attention to the hexagon) and their main characteristics:
https://www.mathsisfun.com/geometry/interior-angles-polygons.html

2. Advanced concepts of regular polygons and measures:
http://mathworld.wolfram.com/RegularPolygon.html

3. How to build a regular polygon:
https://www.geogebra.org/m/WCFMxSce

4. Circumcircle of a polygon
https://www.mathopenref.com/polygoncircumcircle.html

---

| section: Stacking multiple packages
| 1 1 2

## Multiple packaging

Take a lemon or an orange. Think about its parts and its packaging subdivision.

Sometimes natural packagings do not optimize the amount per se, but they maximize the **outer container utilization**.

-

<img src="https://etc.usf.edu/clipart/2200/2241/orange_1_md.gif" />

---

| 1 1
| 2 3

## If we have to store multiple packages?

-

If there are multiple pieces of the product, they have to be stacked/stored with the least waste of space in between the packages.

***perimeter*** `p`
<f-slider set="p" from="1" to="10"/>

***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer />

***rotation*** `r`
<f-slider set="r" from="0" to="360" />

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


---

| 1 1 1
| 2 3 3

## If we have to store multiple packages?

-

Try to fill all the gaps between packages optimizing perimeter in different pattern.

***perimeter*** `p`
<f-slider set="p" from="1" to="10" />

***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer />

***rotation*** `r`
<f-slider set="r" from="0" to="360" />

-

<f-scene grid width="220" height="220">
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

<f-scene grid width="220" height="220">
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

<f-scene grid width="220" height="220">
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

---

***TODO: Integrate***

## Optimize the outer container

After this work, can you evaluate which is the optimal shape to store the maximum amount of rice with minimal cardboard material without loss of space in between the cartons?

-

<img src="https://cdn.pixabay.com/photo/2012/04/03/14/50/box-25203_960_720.png" />

---

| section: Animal packaging

***TODO layout***

## Also animals package their goods

Find out how honeycombs are built and why bees choose hexagons and not other regular polygons. Watch the following video:

-

<f-video src="https://www.youtube.com/watch?v=QEzlsjAqADA" />


---

| section: Bees and packaging

## Of Bees and Packages

1. Verify that the hexagon has the maximum area (= bigger beehive cell) among the stackable polygons with same perimeter.

2. Verify that the hexagon has the minimum perimeter (= min amount of vax, the packging!) among the stackable polygons with same area.

---

| section: Natural marketing
| padding: 0

<section>

## Natural marketing in packaging 

Sometimes in nature the **packaging is part of the product**.

1. Take an apple. Think about its skin, core and seeds. What is product and what is packaging?

2. Do you know about a human made product having a package that is part of the product?  

</section>

-

<img src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pd20-040030-chim.jpg?auto=format&bg=F4F4F3&con=3&cs=srgb&dpr=1&fm=jpg&ixlib=php-1.1.0&mark=rawpixel-watermark.png&markalpha=90&markpad=13&markscale=10&markx=25&q=75&usm=15&vib=3&w=1600&s=c48b69e5dbf54bc2ab39026b09c62468" />

<f-notes title="Credits">

https://www.rawpixel.com/image/321681/free-illustration-image-pear-antique-antique-book

</f-notes>

---

| 1 1 1 1
| 2 2 3 4
| rows: auto 1fr

## Design object task 

***TODO: What?***

-

### Think about an object which does not have a reusable package

1. Imagine how you can design a new reusable package, possibly suitable for different purposes

2. Evaluate what’s the best material for your package; keep in mind that it has to be reusable 

3. What if you have to store several packages, how could you optimize the shape of your package in order to reduce loss of space between them?

**Remember:** You have learned how to optimize your packaging to reduce costs and waste, apply your knowledge to this problem

-

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

-

***perimeter*** `p`
<f-slider set="p" from="1" to="10" />

***number of edges*** `n`
<f-slider set="n" from="3" to="32" integer />

***fun*** `f`
<f-slider set="r" from="0" to="360" />

---

| section: Wrapping up
| 1 1 1 2 2

## Wrapping up

#### Related DesignSTEM projects

<a href="../waste">Waste is a Design Mistake</a> explores the material and packaging optimization in 3D.

<a href="../patterns">2D/3D Patterns</a> allows to play around with 2D pattern compositions.

<a class="tertiary" href="../"><f-leftarrow-icon /> Back to projects</a>

-

<img src="https://etc.usf.edu/clipart/6800/6853/honey-bee_6853_md.gif" />



