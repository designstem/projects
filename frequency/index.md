
| theme: yellow

# <big><big>Frequency & Motion</big></big>

<big>Learn about the beginnings of moving pictures, the art and the science behind it and why we are still so mesmerized watching those GIF memes.</big>

**Skills:** frequency, framerate, sinusoidal wave
**Tools:** turntable, paper, scissors, pencil(s), printer, smartphone/tablet/PC for online tool
**Suitable:** indoor, outdoor, group work, individual work
**Time:** 20min + 15min + 45min (+10 hrs extended exercise)

-

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

<f-notes>

#### Notes

This concept is divided into three main sections:

1. Hands-on activity with the turntable to explore the meaning of frequency and movement.

2. Virtual learning object to elaborate and test how frequency can be presented as a form of sinusoidal wave and how frame rate affects our perception of movement. 

3. Creative work to combine art and motion on a turntable.
</f-notes>

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







