| section: cb-elaborate-overview
| rows: auto
| 1 2


<!-- ##### Elaborate Overview  -->
# Workshop

~Now that you found out about the different topics surrounding designing for colorblind, it's time for some action.
There are two different paths that you could take for the final task.
Either you could choose the STEM or the DESIGN focus.~

<mark> Here we need to add two links - one to the STEM path and one to the Design path, leading to the separate slides with the separate tasks.</mark>

#### ~Choose your path:~
<br>
<button v-on:click="send('goto', 'workshopSTEM')">STEM path</button>
<br>
<button v-on:click="send('goto', 'workshopDESIGN')">DESIGN path</button> 

-

<mark>
	Here we need to add a picture.
</mark>

---



| id: workshopSTEM
| section: elaborate for biology
| height: 100vh
| 1 2



<!-- ##### Elaborate STEM students -->
# Workshop STEM

<f-hr style="margin:var(--base6) 0" />

~Congratulations! You chose the STEM path and this is your quest:
Create a new color scheme for a calculator with white buttons, which is also works for people with color vision deficiency.~

<br>

1. **Product**: First, group the buttons and find hierarchies. Which are important buttons that you use often? How many different colors would you need?
2. **Color design**: Decide upon a color scheme which also works for color blind people with protanopia and deuteranopia.
3. **Mockup**: Mix the colors you chose with watercolors and paint in the white buttons on the [calculator worksheet](https://www.google.de).

<br>

<mark> Here we need to add a picture of the calculator.</mark>
<mark> We need to add a link to a pdf with the calculator in task no. 3 - Link is now to google (color-me-in-sheet).</mark>

-
### This is the model calculator:

<figure style="width:100%; height:100%; display:flex; justify-content:center; align-items: center; margin: 0;">
  <img src="./images/color_blindness_accessibility_white_calculator.jpg" />
</figure>






---





| id: workshopDESIGN
| section: elaborate for design
| height: 100vh
| 1 2



<!-- ##### Elaborate DESIGN students -->
# Workshop DESIGN

<f-hr style="margin:var(--base6) 0" />

~Congratulations! You chose the DESIGN path and this is your quest:
Design a calculator app that works for people with color vision deficiency, but at the same time will be appealing to people with normal color vision.~

<br>

1. **Product**: First, group the buttons and find hierarchies. Which are important buttons that you use often?  How many colors would you need for your color scheme?
2. **Target group**: Think about who will use it. What is most important to them? How does that affect your design?
3. **Layout**: Scribble a layout for your calculator app. Use the calculator displayed here as a reference.
4. **Color design**: Decide upon a color scheme which also works for color blind people with protanopia and deuteranopia.
5. **Mockup**: Make a mockup of your design in a graphic program and apply your color scheme to it.

<br>

<mark> Here we need to add a picture of the calculator.</mark>
<mark> We need to add a link to a pdf with the calculator (color-me-in-sheet).</mark>

-

### This is the model calculator:

<figure style="width:100%; height:100%; display:flex; justify-content:center; align-items: center; margin: 0;">
  <img src="./images/color_blindness_accessibility_white_calculator.jpg" />
</figure>






---



<!--

EVALUATE PHASE

-->



| height: 100vh
| id: cbSimulator2
| 1 1 2 2 2
| 3 3 2 2 2



<!-- ##### Evaluate testing  -->
# TEST YOUR DESIGN

<f-hr style="margin:var(--base6) 0" />

~Lets see how well your design works for people with color vision deficiency.
Upload your picture into the CVD-simulator and check whether it works.~

<p />

<f-card :title="get('cbType', 'protanopia') == 'protanopia' ? 'Simulating Protanopia 👉' : 'Simulate Protanopia'"   background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType', 'protanopia') == 'protanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'protanopia')">

<p v-if="get('cbType', 'protanopia') == 'protanopia'" style="font-size:100%;">reduced sensitivity to <b>RED</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'deuteranopia' ? 'Simulating Deuteranopia 👉' : 'Simulate Deuteranopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType') == 'deuteranopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'deuteranopia')" >

<p v-if="get('cbType') == 'deuteranopia'" style="font-size:100%;">reduced sensitivity to <b>GREEN</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'tritanopia' ? ' 👉 Simulating Tritanopia' : 'Simulate Tritanopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5);" :style="get('cbType') == 'tritanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'tritanopia')">

<p v-if="get('cbType') == 'tritanopia'" style="font-size:100%">reduced sensitivity to <b>BLUE</b> light</p>

</f-card>

<p />

<br>

1. Check if your color schemes is flawed.
2. Adjust your color scheme, if necessary, and check again.
3. Present your design in class and be ready to explain your choices.


<f-next-button style="margin:var(--base4) 0" />



-

<div style=" position:sticky; top:var(--content-padding)">

<p style="--base:8px;"><i>Drag the red triangular handlers or click on image to see the difference</i></p>

<ColorblindnessJuxtapose 
  :imageUrl="'images/colorblind-subway.png'" 
  :revealed="25" 
  :locked="false"
  :cbType="get('cbType', 'protanopia')"
  style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)"
/>

</div>



<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Aim. 
  ~In this phase the students should reflect on their design decisions and be able to present their final results in class. This is the chance for you to grade the student's work but also to allow feedback and discussions among the students about the challenges of the task.
  <br>
You could also start discussions on a meta level, e.g. *Reflect on what you learned. What was new for you or interesting? Do you think the information will be useful for you in your daily work? Do you think it is necessary to bear this in mind when designing products?*~

</f-notes>




---

| section: evaluate
| height: 100vh
| 1 2



<!-- ##### Evaluate meta  -->
# EVALUATE

<f-hr style="margin:var(--base6) 0" />

~Lets reflect on what you achieved.~

<br>

1. Think of other methods to make information accessible other than color coding it. What could you do else?
2. Reflect on what you learned. What was new for you or interesting? 
3. Do you think the information will be useful for you as a designer?
4. What about the social relevance - do you think that designing for people with CVD helps them in their daily lives?

<br>

<mark> Here we need to add a picture.</mark>




<f-notes>
  
  <summary>Teachers notes</summary>
  
  ### Hint for teachers. 
  ~In the first task, the students will probably come up with alternatives like patterns or symbols. If you have the time in your lesson, maybe you could let them incooperate this in their design. Let them make a version B to their color scheme.~

</f-notes>

---
