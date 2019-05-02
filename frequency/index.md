<f-animation set="x" from="-4" to="4" />

<f-scene grid>
	<f-group scale="0.5">
	<f-circle />
	<f-point
  	:stroke="color('red')"
    stroke-width="10"
    :position="[Math.cos(get('x')),Math.sin(get('x'))]"
  />
  <f-line :x2="Math.cos(get('x'))" :y2="Math.sin(get('x'))" />

  <f-line x1="-4" x2="4" :y1="Math.sin(get('x'))" :y2="Math.sin(get('x'))" stroke-width="1" stroke="blue" />

  </f-group>
</f-scene>

<f-scene grid>
	<f-group scale="0.5">
  <f-line
  	:points="range(-4,4,0.1).map(x => [x,Math.sin(x)])"
  />
  <f-point
  	:stroke="color('red')"
    stroke-width="10"
    :x="get('x')"
    :y="Math.sin(get('x'))"
  />
  </f-group>
</f-scene>

<p />

<f-scene grid>
	<f-group scale="0.5">
  <f-line
  	:points="range(-4,4,0.1).map(y => [Math.cos(y),y])"
  />
  <f-point
  	:stroke="color('red')"
    stroke-width="10"
    :x="Math.cos(get('x'))"
    :y="get('x')"
  />
  </f-group>
</f-scene>

---

| section: START
| theme: yellow

# <big><big>Frequency & Motion</big></big>


~In everyday life most of the information of our surroundings is perceived visually or audibly.~

~Our brain processes this data and gives a meaningful context to it (e.g. colour vision), but sometimes it fails to process this info and we might experience visual anomalies like wheels rolling opposite to a driving direction ([wagon-wheel effect](https://en.wikipedia.org/wiki/Wagon-wheel_effect)) or moving elements on a still picture ([optical art](https://en.wikipedia.org/wiki/Op_art)).~

If you are ready to trick your brain and explore your creativity, prepare your turntable and press the START button!


**Facilities:** turntable, paper, scissors, pencil(s), printer, smartphone/tablet/PC for online tool
**People:** Individual work or small groups
**Time:** 20min + 15min + 45min + 10 hrs extended exercise

-

<!--
<f-scene>
  <f-spinner :duration="20000">
  	<f-spin-pattern count="60" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('red')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>
-->

<f-notes>

#### Notes

This concept is divided into three main sections:

1. Hands-on activity with the turntable to explore the meaning of frequency and movement.

2. Virtual learning object to elaborate and test how frequency can be presented as a form of sinusoidal wave and how frame rate affects our perception of movement. 

3. Creative work to combine art and motion on a turntable.

</f-notes>


---

# Collage

***ERIK: Upload images to https://github.com/designstem/scenarios/tree/master/frequency/images***

***KIKA: Assemble the collage***

---

| section: DISCUSS_1

| padding: 0
| gap: 0

| 1 2 3
| 1 4 5
| 1 6 7

<section><section>

#### <f-fact-icon /> Discuss

# What is frequency?

Watch the following videos and define frequency with your own words and describe all possible ways to experience it.

</section></section>

-

<f-video src="https://www.youtube.com/watch?v=heRuLp7CyTM" />

-

<f-video src="https://www.youtube.com/watch?v=yrfibt6Bkwc" />

-

<f-video src="https://www.youtube.com/watch?v=upvYAAh8RuU" />

-

<f-video src="https://www.youtube.com/watch?v=lmIFXIXQQ_E" />

-

<f-video src="https://www.youtube.com/watch?v=wvJAgrUBF4w" />

-

<f-video src="https://www.youtube.com/watch?v=FO566k4nA3g" />

---

| section: ACTIVITY_1

### <f-activity-icon /> Activity 1

# Make a ...

***ERIK: title***

You are now ready to make your own visual experiments! 

1. <a href="" class="tertiary">Download PDF template</a> ***ERIK: upload file*** (or use printout by the teacher)

1. Use scissors to cut out circles from a paper and draw on it anything you would like to see spinning on a turntable. 

3. Put the paper circle on the turntable and start spinning.

4. Draw different variations to find visually the most appealing and interesting combination of movement.


<f-notes>

### ...

***ERIK: Needs title***

> ##### You will need
Printed plain circles, turntable, scissors, pencils

By experimentation, students should discover how the speed of motion affects our visual perception on shapes and/or colour.

Let students draw different ideas on cut-out circles and have them on the turntable’s platter rotating at different speed levels.

It’s all about discovering new shapes and their alignment on a circle to produce visually exciting blends through movement.

> ##### <f-fact-icon size="small" /> Tip
Optionally,  it’s possible to involve music records to the exploration phase to experiment with the sound at different speed levels.

***ERIK: Organize this better***

<f-scene width="200" height="200">
  <f-circle r="1.9" />
  <f-circle r="0.7" />
  <f-circle r="0.1" />
</f-scene>

This is the plain circle which you should print and let students to cut out, you can download it from here: 

***ERIK: Add link***

> ##### <f-fact-icon size="small" /> Tips
1. print the sheet 100% size
2. print more than 1 sheet for every student


</f-notes>

---

| section: THEORY_1

#  Introduction

***ERIK: Better title***

~As you might have noticed with your drawings in order, to have a smooth animation or optical illusion, you have to manipulate two variables:~

* ~How close are the drawn elements to each other on the circle?~

* ~What is the rotation speed of the turntable?~

~Both variables can be described as [frequency](https://en.wikipedia.org/wiki/Frequency) and be expressed on a form of [sine waves](https://en.wikipedia.org/wiki/Sine_wave). Frequency is an important parameter used in science and engineering to specify the rate of a phenomenon.~

---

| theme: dark

<center><div>

<f-fact-icon />

<p />

~The most common way to experience noticeable visual distortion<br>caused by frequency is having the phenomenon occurring on a screen.~
<br> 
~Watch following clip and notice how<br>wheels of the wagon are moving~

<p />

<f-next-button title="Go" /> ***TODO: t=55m***
</div><center>

---

| theme: dark

<f-video src="https://www.youtube.com/watch?v=89TltTWEXzU&feature=youtu.be&t=55m" />

---

| 1 1 2

# Framerate

~You just experienced a [stroboscopic effect](https://en.wikipedia.org/wiki/Stroboscopic_effect) occurring on a movie clip. It is visible because the recording has slower [frame rate](https://en.wikipedia.org/wiki/Frame_rate) than the rate of [revolutions](https://en.wikipedia.org/wiki/Revolutions_per_minute) the object had in a given timeframe.~

~In other words, as the movie clip is just a frequent series of pictures (frames) played really fast (movies usually have 24 fps) and wheels were rotating fast enough not to be in sync in every frame to produce natural visual impression of movement.~

-

***ERIK: Animation here***

---

| section: ACTIVIY_2

***ERIK: Add title***

You will have circles with different amount of spokes.

Your task is to:

1. Cut circles out of the paper;

2. Draw in between the spokes;

3. Have the paper to rotate on the turntable;

4. Observe the rotation on your smartphone / tablet / PC screen

<a class="primary" href="../frequency_camera">Open frequency camera app</a>

***ERIK: Add QR Code?***

5. While the paper is still rotating on the turntable try to find specific platter velocity as to stop your drawing rotating on the screen of your device (stroboscopic effect).

<f-notes>

# <f-activity-icon /> ...

***ERIK: Add title***

> ##### You will need
Printed grid circles, turntable, scissors, pencils, smartphone/tablet/PC for online tool

Now it’s time to add some STEM components. 

Students will acquire deeper knowledge about frequency and frame rate while producing artwork on the circles with grid.

These circles will be used to replica [stroboscopic effect](https://en.wikipedia.org/wiki/Stroboscopic_effect).

Students have to find the precise spinning speed to demonstrate the effect through the lens of smartphone/tablet/PC camera using frame rate tool. 

<a class="primary" href="../frequency_camera">Open frequency camera app</a>

***BOTH: How to organize this better***

<f-scene width="200" height="200">
  <f-circle r="1.9" />
  <f-line
    v-for="a in range(0,360,360/10)"
    :x2="polarx(a,1.9)"
    :y2="polary(a,1.9)"
  />
  <f-circle
    r="0.7"
    :fill="color('white')"
  />
  <f-circle
    r="0.1"
    :fill="color('white')"
  />
</f-scene>

This is the circle with spokes. There are ***ERIK: Do we need a count?*** different circles in total which you should print and let students to cut out. You can download them from here: 

***ERIK: Add download link***

> ##### <f-fact-icon size="small" /> Tips
1. Print the sheet 100% size
2. Print more than 1 sheet for every student


</f-notes>

---

| section: THEORY_2

# Frequency

~Now, as you have been experimenting with spinning velocity and how the frame rate affects our perception of movement, it’s time to define frequency in a form of *wave*. Perhaps the most common waveform is the visual representation of sound.~

~The same applies to colours as they are recognized by our brain because of different wavelengths of emitted light.~

***ERIK: Link to color scenario*** 
-

***ERIK: Image / animation***

---

# Sinusoidial wave

~Frequency can be expressed with sinusoidal wave having two variables: time and cycle. On a two-dimensional space, if X-axis will represent time and Y-axis a cycle, we can start presenting frequency with the sinusoidal wave.~

~On sinusoidal wave time lapses from left to right on the horizontal axis. Highest frequency has more cycles on a vertical axis representing faster rate.~

-

***ERIK: Image / animation***

---

# <f-activity-icon /> ...

***ERIK: Needs title***

How can frequency be interpreted in different ways?  Your task is to use a design STEM wave tool and find answers to the questions brought up in there.

***ERIK: Not sure where to link here. Current interactive slides are about framerate / animation mostly. Should we link to https://pudding.cool/2018/02/waveforms/ ?***

<f-notes>

# ...

***ERIK: Title needed***

> ##### You will need
smartphone / tablet / PC for online tool

Students will learn how to present frequency on a sinusoidal wave. To let them experiment and test their new knowledge about frequency in a more mathematical way of thinking, you’ll be using the sinusoidal-wave tool accessible from here: 

***ERIK: Where to link to?***
</f-notes>

---

# <f-activity-icon /> Final task

***ERIK: A better structure, in steps? Visual examples?***

As a final task, you will prepare an analog animation using rotational movement. You can visualize abstract morphing or use more illustrative style for the animation. Experiment and use your knowledge gathered from previous exercises to achieve visually attractive outcome. 

***ERIK: Link to worksheets***

Answer the questions:

1. What constraints did you experience with the process?

2. Which variable (e.g. framerate, speed of the rotating device, spokes) had the most critical part in your animation?

<f-notes>

### Final assignment

Final assignment is an individual work for students is to create analogue animation and capture it with any device that can record a video file.

There are many paths for students to take:

* They can make it as a flat 2D animation
* They can go more complex and make it with a 3D shape

There is possibility to manipulate visuals with strobe light or use any other device than turntable to rotate the artwork.

It is teacher, who can decide according to the planned curriculum, how complex the pathway should be to take.

</f-notes>

---

| 1 1
| 2 3

# Examples

-

<f-video src="https://www.youtube.com/watch?v=D6imyhJYEIY" />

Animated card by Dres Tetz (video with instructions)

-

<f-video src="https://www.youtube.com/watch?v=9n-DtqB0sNc" />

Strobe Animated Sculptures by John Edmark

---

## **1** Make it stop

### Adjust the wheel speed so it stops

~Rotation speed is `{{ get('d', 1000) }}` *milliseconds* per rotation. This is roughly <code>{{ get('d', 1000) / 1000}}</code> *seconds*.~
          
<f-slider
  set="d"
  value="1000"
  to="2000"
  step="10"
  integer
  title=""
/>

<div v-if="get('d') == 0">

~Hey, this is cheating! The wheel has to have *some* speed :)~

</div>

<div v-if="get('d') == 500">

~Almost there! Wait...it seems it is still moving?~

</div>

<div v-if="
  get('d') > 950
  && get('d') != 1000
  && get('d') < 1001
">

~Getting close!~

</div>

<div v-if="get('d') == 1000">

~Great! So it takes exactly **1 second** to make the wheel stop. *But why*?~

~Let's move to the next step to figure it out.~

<f-next-button />

</div>

-

<f-scene>
  <f-spinner :duration="get('d',1000)">
  	<f-spin-pattern count="60" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('primary')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

---

## **2** Make it stop II

### Adjust the number of lines so the wheel stops

~Number of lines is **{{ get('c', 60) }}**.~
          
<f-slider
  set="c"
  value="30"
  to="120"
  integer
  title=""
/>

<div v-if="get('c') == 0">

~Really? Like <i>really really really</i>?~

</div>

<div v-if="get('c') == 15">

~Did it stop? My eyes are not sure.~

</div>

<div v-if="get('c') == 30">

~Yes, it kind of stopped but this flicker is kind of annoying. Can you do better?.~

</div>


<div v-if="get('c') == 60">

~Wow! It stopped exactly at **60 lines**. *Why*? Let's figure it out in the next step.~

<f-prev-button />
<f-next-button />

</div>

<div v-if="get('c') == 90">

~Ok, you can call it stopping, I call it a flicker. Try some more!~

</div>

<div v-if="get('c') == 120">

~Very good, it stopped! But can you do it with smaller number of lines as well?~

</div>


-

<f-scene>
  <f-spinner :duration="1000">
  	<f-spin-pattern :count="get('c')" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('primary')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

---

## **3** All together now

### Adjust the rotation speed and the number of lines so the wheel stops

~Rotation speed is `{{ get('d2', 1000) }}` *milliseconds* per rotation.~

~Number of lines is **{{ get('c2', 60) }}**.~

<f-slider
  set="d2"
  value="1000"
  to="2000"
  step="10"
  integer
  title=""
/>

<f-slider
  set="c2"
  value="30"
  to="120"
  integer
  title=""
/>


<div v-if="get('d2') == 1000 && get('c2') == 60">

~Yep! We ended up in a place where we have **1 second** for a full rotation and **60 lines** on a wheel. Do you know how fast your monitor updates it's picture? It is **60 Hetz** or **60 times per second**. See? The wheel *never stopped*. It is moving *right now*. It is all an *illusion*.~

<f-prev-button />
<f-next-button />

</div>

-

<f-scene>
  <f-spinner :duration="get('d2')">
  	<f-spin-pattern :count="get('c2')" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('primary')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

---

## **4** An illusion

~This illusion is the very foundation of cinema: by showing a set of image frames in movement in certain **frequency** it tricks the eye and we [perceive](https://en.wikipedia.org/wiki/Persistence_of_vision) it as a continuous movement.~

~This applies to all moving image: from <a target="_blank"  href="">obsure</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Phenakistiscope">19th</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Zoopraxiscope">century</a> <a target="_blank" href="https://en.wikipedia.org/wiki/Kinetoscope">gadgets</a> to <a target="_blank" href="https://www.youtube.com/watch?v=En__V0oEJsU">film projector</a> to current <a target="_blank" href="https://giphy.com/search/muybridge">GIF crazyness</a>.~

### Now, select image you want to show on a wheel

<f-buttons :buttons="['line','metropolis','horse','dancer']" />

<p />

### Play around with image count and size

~Number of images is <code>{{ get('c3') }}</code>~

<f-slider
  set="c3"
  value="30"
  to="120"
  integer
  title=""
/>

~Image size is <code>{{ size }}px</code>.~

<f-slider
  set="s3"
  value="30"
  to="10"
  integer
  title=""
/>

<f-prev-button />
<f-next-button />

-

<f-scene>
  <f-spinner duration="1000">
  	<f-spin-pattern :count="get('c3')" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('primary')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

---

## **5** What next?

### **A** Take it for a spin

~Hook up a vinyl player and use the  <b>printouts</b> to explore motion and frequency in real world.~

### **B** Experiment with lower framerates

~While we cannot adjust the computer screen update frequency so easily, <a href="https://designstem.github.io/vinylfrequency_camera" target="_blank">we can use an app</a> to control camera framerate.~

### **C** Explore color in motion

~There are some <a v-on:click="set('dots5',true)">color dots</a> you can play with.~

<div v-if="get('dots5')">

~Rotation speed is **{{ get('s5') }} ms.**~

<f-slider
  set="s5"
  value="1000"
  to="2000"
  step="10"
  integer
  title=""
/>

~*Why the color dots turn gray at certain speeds?*~

</div>

-

<f-scene>
  <f-spinner :duration="get('d',1000)">
  	<f-spin-pattern count="60" r="0.5">
  	<f-box
    	height="0.06"
      width="0.5"
      position="1 0"
      :fill="color('primary')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>







