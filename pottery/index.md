| 1 2

# <big><big>Pottery<br>B💥om</big></big>

## Learn how not to blow up your kiln

<f-slider title="Process time" :value="get('scale')" to="1.2" />

<f-animation alternate set="scale" from="0.8" to="1" />

<f-animation duration="100000" set="r" alternate />

-

<f-scene3 renderer="webgl" width="400" height="400">

<f-lathe3
  rotation="40 0 0"
  count="32"
  :scale="get('scale',1)"
  :points="[[0.5,0],[0.5,0],[1,0.5],[1,1.1],[0.8,1.1],[0.6,0.5],[0,0.1]]"
/>
</f-scene3>
  
---

# <big><big>Frequency<br>& Movement</big></big>

### Learn about the beginnings of moving pictures, the art and the science behind it and why we are still so mesmerized watching those moving GIFs

# <f-next-button />

---

| 1 2 2

## **1** Make is stop

### Adjust the wheel speed so it stops

Rotation `speed` is {{ get('speed') }} milliseconds per rotation. This is roughly {{ round(get('speed',0) / 1000,2) }} seconds.

<f-slider set="speed" title="Speed" to="2000" step="10" integer />

<f-animation
	:duration="1000 * 5"
  set="s"
/>

<div v-if="get('speed',0) == 1000">
 
Great! So it takes exactly 1 second to make the wheel stop. But why?

</div>

<f-inline>
  <f-prev-button/>
	<f-next-button v-if="get('speed',0) == 1000"/>
</f-inline>

-

<f-scene width="400" height="400">
  <f-circle-pattern
    :rotation="get('s',0)"
    count="60"
   	r="1.8"
  >
  <f-circle slot-scope="s" r="0.05" />
 </f-circle-pattern>
</f-scene>

---

## **2** Make is stop, again

### Adjust the number of lines so the wheel stops

<f-slider set="count" title="Number of elements" value="22" from="1" to="120" integer />

<f-animation
	:duration="1000 * 5"
  set="s"
/>

<div v-if="get('count',22) == 60">
 
Wow! It stopped exactly at `60 lines`. <i>Why</i>? Let's figure it out in the next step.

Lets move to the next step to figure it out.

</div>

<f-inline>
  <f-prev-button/>
	<f-next-button v-if="get('speed',0) == 60"/>
</f-inline>

-

<f-scene width="400" height="400">
  <f-circle-pattern
    :rotation="get('s',0)"
    count="60"
   	r="1.8"
  >
  <f-circle slot-scope="s" r="0.05" />
 </f-circle-pattern>
</f-scene>

			
