
| section: cb-color-mixing
| theme: light
| rows: auto
| 1 2

<!-- ##### EXPLAIN  -->

##### Color mixing
# Light and color

<!-- <f-hr style="margin:var(--base6) 0" /> -->

~Color is derived from light, either natural or artificial. With little light, little or no color is present. With a lot of light comes lots of color.~

<br>

#### Task
Go outside or look out of your window before the sun comes up. Experience how you steadily can see more colors while the sun rises and how the intensitiy of the colors changes.
(Alternatively: If you have curtains or shutters, close them and look at the room you are in and at the colors you can see. Then slowly open them and see how the colors of the objects in the room start to change with more light entering).

<br>

~**Our eyes have three color receptor cells or cones: red, green and blue. As a result, all incoming light is reduced to these three colors. All perceived colors are generated by a mixture of these three colors, depending on the intensity of the light. Find out more on the next page.**~

<f-next-button title="Additive Color"  style="margin: var(--base6) 0" />

-

<f-image src="./images/color_blindness_accessibility_20--opt.jpg" style="background-position:50% 50%; min-height: 90vh;" />

<!-- <figure style="width:100%; height:100%; display:flex; justify-content:center; align-items: center; margin: 0;">
  <img src="./images/color_blindness_accessibility_20--opt.jpg" />
</figure> -->








---

| height: 100%
| padding: 0
| gap: 0
| theme: dark
| 1 2

<section style="padding:var(--content-padding)">

<!-- ##### EXPLAIN  -->
##### Color mixing
# Additive Color System

~In the Additive Color System, **<span style="color:red;" v-on:mouseover="set('activeCol', 'red')">RED</span>**, **<span style="color:lime;" v-on:mouseover="set('activeCol', 'lime')">GREEN</span>** and **<span style="color:hsl(230, 100%, 70%);" v-on:mouseover="set('activeCol', 'blue')">BLUE</span>** are the primary colors. When all three colors overlap, **WHITE** light is produced.~

#### Task

1. ~Have a look at the RGB Model for additive color mixing and find out about its three secondary colors (which are also the primary colors for the CMY Model, called Subtractive Color System). What are secondary colors?~

2. ~Find out where the RGB Model is used?~

3. ~Complementary colors are opposite of each other and form white light. Find out about the complementary color pairs in the RGB Model.~

<br>

<details>
	<summary>Check your answers - but don't cheat.</summary>
 
**Answer key**
 
1. The three secondary colors are: Magenta (mixed through red and blue light), Cyan (mixed through green and blue light) and yellow (mixed through red and green light).

2. Typical RGB input devices are color TV and video cameras, image scanners and digital cameras. Typical RGB output devices are TV sets of various technologies (CRT, LCD, plasma, OLED, quantum dots…), computer and mobile phone displays, video projectors, multicolor LED displays and large screens such as JumboTron. Color printers, on the other hand are not RGB devices, but subtractive color devices (typically CMYK color model).
If you want to find out about the subtractive color model, see this [wikipedia text on the subtractive color model](https://en.wikipedia.org/wiki/Subtractive_color).

3. Green and Magenta, Blue and Yellow, Red and Cyan.

</details>

&nbsp;

<f-next-button title="RGB Task"  />

</section>

-

<div style="background-color:var(--black); height:100vh; position:sticky; top:0;">

<f-scene responsive>
  
  <f-circle 
    v-for="(c,i) in ['red', 'lime', 'blue']" 
    :key="'add'+i"
    :fill="c" 
    :x="polarx( i*(360/3), 0.7 )"  
    :y="polary( i*(360/3), 0.7 )" 
    :stroke="get('activeCol') == c ? 'white' : 'none'"
    style="mix-blend-mode: screen;"
    
  />

</f-scene>

</div>

---







| cols: 3fr 2fr
| rows: auto
| padding: 0
| 1 2

<section style="padding:var(--content-padding)">

##### Color mixing
# Mix RGB Colors

&nbsp;

#### Task
~**Now that you know about the RGB color system, look at the two colors. They are both made up in parts of red, green and blue.**~

&nbsp;

1. ~In your mind, try to disassemble them into their three color components (red, green and blue). How much red, green and blue would you need to create these colors? A lot? Only little?~

2. ~Take some notes of your assumptions. Test your ideas on the next page.~

&nbsp;

<f-next-button />

</section>

-

<div style="position:sticky; top:0; height:100vh; width:100%; display: flex; flex-direction:column;">
  <div style="background: rgb( 255 , 0, 255 ); flex: 1 1 50%;"></div>
  <div style="background: rgb( 255 , 201, 53 ); flex: 1 1 50%;"></div>
</div>



<!-- <f-scene responsive width="300" height="200">
<f-box 
      width="6"
      height="4"
      x="0"
      stroke="none"
      :fill="rgb( 255 , 0, 255 )"
    />
 </f-scene>
<f-scene responsive width="300" height="200">
 <f-box 
      width="6"
      height="4"
      x="0"
      stroke="none"
      :fill="rgb( 255 , 201, 53 )"
    />
 </f-scene> -->












---

| rows: auto
| 1 1
| 2 3
| 4 4

<!-- ##### EXPLAIN  -->
##### Color mixing
# Mix RGB Colors

~**Now, check your assumptions by adjusting the RGB controllers so that you receive a color that is as similar as possible to the given example.**~

-

<div>
  <f-scene responsive width="600" height="300">
    <f-box 
      width="6"
      height="12"
      stroke="none"
      x="-2"
      :fill="rgb( get('r1', 0) , get('g1', 0), get('b1', 0) )"
    />
    <f-box 
      width="4"
      height="12"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 0, 255 )"
    />
  </f-scene>
  <f-slider set="r1" from="0" to="255" integer title="R" />
  <f-slider set="g1" from="0" to="255" integer title="G" />
  <f-slider set="b1" from="0" to="255" integer title="B" />
</div>

-

<div>
  <!-- <f-scene width="600" height="300" style="width:100%; height:40vh;"> -->
  <f-scene responsive width="600" height="300">
    <f-box 
      width="6"
      height="12"
      stroke="none"
      x="-2"
      :fill="rgb( get('r2', 0) , get('g2', 0), get('b2', 0) )"
    />
    <f-box 
      width="4"
      height="12"
      x="2"
      stroke="none"
      :fill="rgb( 255 , 201, 53 )"
    />
  </f-scene>
  <f-slider set="r2" from="0" to="255" integer title="R" />
  <f-slider set="g2" from="0" to="255" integer title="G" />
  <f-slider set="b2" from="0" to="255" integer title="B" />
</div>

-

<f-next-button style="margin:var(--base6) 0" />