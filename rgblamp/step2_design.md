| chapter: Research
| section: Design introduction

| 1 1
| 2 2
| 3 4
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(7,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Detailed design','Engineering','Prototyping','Communication']"
    :background="i == 2 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Design

-

### 1. Specify Requirements

Design requirements state the important characteristics that your solution must meet to succeed. One of the best ways to identify the design requirements for your solution is to analyze the concrete example of a similar, existing product, noting each of its key features.

-

### 2. Brainstorm Solutions

There are always many good possibilities for solving design problems. If you focus on just one before looking at the alternatives, it is almost certain that you are overlooking a better solution. Good designers try to generate as many possible solutions as they can. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>

---

| section: Assignment: Design your own lamp
| padding: 0

<section><section>

<caption>Assignment</caption>

## Design your own RGB Lamp

Grab a piece of paper and design/sketch your own lamp.

#### Key questions:

* What is its function?  (e.g. aesthetics, decoration, information, communication, health, psychology)
* How will your RGB lamp interact with the environment?
* Which input from the environment does your lamp react to? (e.g. time, light, noise, music, temperature, heart rate, feelings)

</section></section>

-

<f-image src="./imgs/cap2_2.png" />

<f-notes title="Credits">

https://www.flickr.com/photos/62449696@N00/9522596028

</f-notes>
