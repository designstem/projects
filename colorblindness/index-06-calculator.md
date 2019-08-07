| section: cb-workshop
| rows: auto
| 1 1
| 2 3


<!-- ##### Elaborate Overview  -->
# Workshop

-

~Now that you found out about the different topics surrounding designing for colorblind, it's time for some action.
There are two different paths that you could take for the final task.
Either you could choose the STEM or the DESIGN focus.~

<p style="--base:6px;">Should we explain here a bit more about what the "different paths" mean?</p>

<!-- <mark> Here we need to add two links - one to the STEM path and one to the Design path, leading to the separate slides with the separate tasks.</mark> -->

-

#### ~Choose your path:~

<button class="primary" v-on:click="send('goto', 'cb-workshop-stem')">STEM path</button>

<button class="primary" v-on:click="send('goto', 'cb-workshop-design')">DESIGN path</button> 

---







| id: cb-workshop-stem
| rows: auto
| 1 1
| 2 3
| 4 3

<!-- ##### Elaborate STEM students -->
# Workshop STEM

-

~Congratulations! You chose the STEM path and this is your quest:
Create a new color scheme for a calculator with white buttons, which is also works for people with color vision deficiency.~

<br />

1. ~**Product**: First, group the buttons and find hierarchies. Which are important buttons that you use often? How many different colors would you need?~
2. ~**Color design**: Decide upon a color scheme which also works for color blind people with protanopia and deuteranopia.~
3. ~**Mockup**: Mix the colors you chose with watercolors and paint in the white buttons on the [calculator worksheet](https://www.google.de).~

<br />

<!-- <mark> Here we need to add a picture of the calculator.</mark> -->
<mark> We need to add a link to a pdf with the calculator in task no. 3 - Link is now to google (color-me-in-sheet).</mark>

-

<figure style="width:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; margin:0; position:sticky; top:15vh;">
  <img src="./images/color_blindness_accessibility_white_calculator.jpg" />
  <figcaption>
  
  *This is the model calculator*
  
  </figcaption>
</figure>

-

<f-next-button />

---








| id: cb-workshop-design
| rows: auto
| 1 1
| 2 3
| 4 3



<!-- ##### Elaborate DESIGN students -->
# Workshop DESIGN

-

~Congratulations! You chose the DESIGN path and this is your quest:
Design a calculator app that works for people with color vision deficiency, but at the same time will be appealing to people with normal color vision.~

<br />

1. ~**Product**: First, group the buttons and find hierarchies. Which are important buttons that you use often? How many colors would you need for your color scheme?~
2. ~**Target group**: Think about who will use it. What is most important to them? How does that affect your design?~
3. ~**Layout**: Scribble a layout for your calculator app. Use the calculator displayed here as a reference.~
4. ~**Color design**: Decide upon a color scheme which also works for color blind people with protanopia and deuteranopia.~
5. ~**Mockup**: Make a mockup of your design in a graphic program and apply your color scheme to it.~

<br />

<!-- <mark> Here we need to add a picture of the calculator.</mark> -->
<mark> We need to add a link to a pdf with the calculator (color-me-in-sheet).</mark>

-

<figure style="width:100%; display:flex; justify-content:center; flex-direction:column; align-items: center; margin: 0; position:sticky; top:15vh;">
  <img src="./images/color_blindness_accessibility_white_calculator.jpg" />
  <figcaption>This is the model calculator</figcaption>
</figure>

-

<f-next-button />

---











<calculator-designer />

---





<!--

EVALUATE PHASE

-->



| rows: auto
| id: cb-workshop-test
| 1 2
| 3 2



<!-- ##### Evaluate testing  -->
# Test your design

<br />

~Lets see how well your design works for people with color vision deficiency.
Upload your picture into the CVD-simulator and check whether it works.~

<f-card :title="get('cbType', 'protanopia') == 'protanopia' ? 'Simulating Protanopia 👉' : 'Simulate Protanopia'"   background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType', 'protanopia') == 'protanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'protanopia')">

<p v-if="get('cbType', 'protanopia') == 'protanopia'" style="font-size:100%;">reduced sensitivity to <b>RED</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'deuteranopia' ? 'Simulating Deuteranopia 👉' : 'Simulate Deuteranopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType') == 'deuteranopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'deuteranopia')" >

<p v-if="get('cbType') == 'deuteranopia'" style="font-size:100%;">reduced sensitivity to <b>GREEN</b> light</p>

</f-card>

<f-card :title="get('cbType') == 'tritanopia' ? ' 👉 Simulating Tritanopia' : 'Simulate Tritanopia'" background="var(--lightergray)" color="var(--darkgray)" style="margin-bottom:calc(var(--base)*0.5); height:auto;" :style="get('cbType') == 'tritanopia' ? {background:'var(--lightblue)'} : {background:'var(--lightergray)'}" @click.native="set('cbType', 'tritanopia')">

<p v-if="get('cbType') == 'tritanopia'" style="font-size:100%">reduced sensitivity to <b>BLUE</b> light</p>

</f-card>


<br>

1. Check if your color schemes is flawed.
2. Adjust your color scheme, if necessary, and check again.
3. Present your design in class and be ready to explain your choices.


-

<div style=" position:sticky; top:15vh;">

<p style="--base:8px;"><i>Drag the red triangular handlers or click on image to see the difference</i></p>

<colorblindness-juxtapose 
    :imageUrl="'images/colorblind-subway.png'" 
    :revealed="25" 
    :locked="false"
    :cbType="get('cbType', 'protanopia')"
    style="box-shadow:0 0 4px 0 hsla(0,0%,0%,0.3);padding:var(--base) var(--base2); border-radius:var(--base)"
/>

</div>

-

<f-notes>
<summary>Teachers notes</summary>
  
### Aim. 

~In this phase the students should reflect on their design decisions and be able to present their final results in class. This is the chance for you to grade the student's work but also to allow feedback and discussions among the students about the challenges of the task.~

~You could also start discussions on a meta level, e.g. *Reflect on what you learned. What was new for you or interesting? Do you think the information will be useful for you in your daily work? Do you think it is necessary to bear this in mind when designing products?*~

</f-notes>

<f-next-button style="margin:var(--base4) 0" />

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
