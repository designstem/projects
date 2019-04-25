
| theme: yellow

# <big><big>Frequency & Motion</big></big>

<big><big>Learn about the beginnings of moving pictures, the art and the science behind it and why we are still so mesmerized watching those GIF memes.</big></big>

**Skills:** frequency, framerate, sinusoidal wave
**Tools:** turntable, paper, scissors, pencil(s), printer, smartphone/tablet/PC for online tool
**Suitable:** indoor, outdoor, group work, individual work
**Time:** 20min + 15min + 45min (+10 hrs extended exercise)

-

<f-scene>
  <f-spinner :duration="20000">
  	<f-spin-pattern count="60" r="0.5">
  	<f-box
    	height="0.08"
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

## **1**&nbsp;Make it stop

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
    	height="0.08"
      width="0.5"
      position="1 0"
      :fill="color('black')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

---

## **2**&nbsp;Make it stop x 2

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

-

<f-scene>
  <f-spinner :duration="get('d',1000)">
  	<f-spin-pattern count="60" r="0.5">
  	<f-box
    	height="0.08"
      width="0.5"
      position="1 0"
      :fill="color('black')"
      stroke
    />
    </f-spin-pattern>
  </f-spinner>
</f-scene>

