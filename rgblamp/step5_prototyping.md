| chapter: Prototyping
| section: Prototyping introduction

| 1 1
| 2 2
| 3 4
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(7,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Detailed design','Engineering','Prototyping','Communication']"
    :background="i == 5 ? 'blue' :  'var(--transparent)'"
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

---

| padding: 0
| gap: 0
| 1 1 2 3 4

<section><section>

<caption>🛠️ Assignment</caption>

## Build a RGB lamp

Based on the access to physical hardware build either a **virtual** RGB lamp using <f-link to="https://www.tinkercad.com/">Tinkercad</f-link> or a **phsyical** prototype using Arduino and related hardware.

<section><section>

-

<f-image src="https://cdn.instructables.com/FI6/C4GA/JBQUIJS0/FI6C4GAJBQUIJS0.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds"/>

-

<f-image src="https://cdn.instructables.com/FZ4/Y44J/JBQUIJNJ/FZ4Y44JJBQUIJNJ.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds">

-

<f-image src="https://cdn.instructables.com/FM0/G22Z/JBQUIJO6/FM0G22ZJBQUIJO6.LARGE.jpg?auto=webp&frame=1&width=300&height=1024&fit=bounds" />

<f-notes title="Credits">

https://www.instructables.com/id/RGB-Lamp/

</f-notes>

---

| section: Simple RGB lamp
| 1 1
| 2 3

## RGB LED and lamp tutorials

-

<f-video src="https://www.youtube.com/watch?v=IPOHARgRLE0" />

https://learn.adafruit.com/adafruit-arduino-lesson-3-rgb-leds/overview

-

<f-video src="https://www.youtube.com/watch?v=ix1ZltV9-38" />

https://www.instructables.com/id/RGB-Lamp/

---

| padding: 0

<section><section>

## Simple RGB lamp

#### Simulation

https://www.tinkercad.com/things/aAUrDaUGL2s

#### Parts

Component|Name|Quantity
---|---|---
Arduino Uno R3|U1|`1`
1 LED RGB|D1|`1`
220 Ω resistor|R1, R2, R3|`3` 

</section></section>

-

<f-image src="./images/arduino.png" />

---

| padding: 0

<section><section>

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

</section></section>

-

<f-image src="./images/arduino2.png" />

---

| padding: 0

<section><section>

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


</section></section>

-

<f-image src="./images/arduino3.png" />

