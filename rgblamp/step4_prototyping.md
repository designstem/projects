| chapter: Prototyping
| section: Prototyping introduction

| 1 1
| 2 2
| 3 4
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(6,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Engineering','Prototyping','Communication']"
    :background="i == 4 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Prototyping

-

### 1. Build a Prototype

A prototype is an operating version of a solution. Often it is made with different materials than the final version, and generally it is not as polished. Prototypes are a key step in the development of a final solution, allowing the designer to test how the solution will work. 

-

### 2. Test and Redesign

The design process involves multiple iterations and redesigns of your final solution. You will likely test your solution, find new problems, make changes, and test new solutions before settling on a final design. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>


<br>

<f-next-button />

---

| chapter: Prototyping
| section: Prototyping introduction

| 1 1
| 2 2
| 3 4
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(6,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Engineering','Prototyping','Communication']"
    :background="i == 4 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Prototyping

-

### TASK

1. ~Based on your analysis and your planning before, make a scribble of your lamp and lampshade. Remember not only to draw it from the front, but also from the side and from above as a reference for your production.~
2. ~Use cardboard or any other material of your choice and create a dummy for your lampshade. This dummy should help you and others visualize how it will look like and also to find flaws in the design, which you need to eliminate.~
3. ~Based on your dummy, analyse your product and correct it if neccessary.~
4. ~Discuss your protoype in class.~

<br>

<f-next-button />



---

| section: Simple RGB lamp
| 1 1
| 2 3

## RGB LED and lamp tutorials

<br>

~Use the following tutorial videos, to help you get started on producing a functioning RGB lamp!~
-

<f-video src="https://www.youtube.com/watch?v=IPOHARgRLE0" />

https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/overview

-

<f-video src="https://www.youtube.com/watch?v=ix1ZltV9-38" />

https://www.instructables.com/id/RGB-Lamp/

<br>

<f-next-button />

---

| padding: 0

<section>

## Simple RGB lamp

#### Simulation

https://www.tinkercad.com/things/aAUrDaUGL2s

#### Parts

Component|Name|Quantity
---|---|---
Arduino Uno R3|U1|`1`
1 LED RGB|D1|`1`
220 Ω resistor|R1, R2, R3|`3` 


<br>

<f-next-button />

</section>

-

<f-image src="./images/arduino.png" />

---

| padding: 0

<section>

## RGB lamp with manual control

#### Simulation

https://www.tinkercad.com/things/l8m0vNUlJHW

#### Parts


Component|Name|Quantity
---|---|---
Arduino Uno R3|U1|`1`
LED RGB|D1|`1`
330 Ω resistor|R1, R2, R3|`3`
250 kΩ potentiometer|Rpot1, Rpot2, Rpot3|`3`


<br>

<f-next-button />

</section>

-

<f-image src="./images/arduino2.png" />

---

| padding: 0

<section>

## RGB lamp with temperature control

#### Simulation

https://www.tinkercad.com/things/kSrcCWh5J9P

#### Parts

Component|Name|Quantity
---|---|---
Arduino Uno R3|U1|`1`
LED RGB|D1|`1`
1 kΩ resistor|R2, R4|`2`
Temperature sensor TMP36|U1|`1`

<br>

<f-next-button />

</section>

-

<f-image src="./images/arduino3.png" />

---


| padding: 0
| gap: 0
| 1 1 2 3 4

<section>

<caption>🛠️ Assignment</caption>

## Build your RGB lamp

Based on the access to physical hardware, build either a **virtual** RGB lamp using <f-link to="https://www.tinkercad.com/">Tinkercad</f-link> or a **phsyical** prototype using Arduino and related hardware.


<br>

<f-next-button />

<section>

-

<f-image src="https://cdn.instructables.com/FI6/C4GA/JBQUIJS0/FI6C4GAJBQUIJS0.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds"/>

-

<f-image src="https://cdn.instructables.com/FZ4/Y44J/JBQUIJNJ/FZ4Y44JJBQUIJNJ.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds">

-

<f-image src="https://cdn.instructables.com/FM0/G22Z/JBQUIJO6/FM0G22ZJBQUIJO6.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds" />

<f-notes title="Credits">

https://www.instructables.com/id/RGB-Lamp/

</f-notes>
