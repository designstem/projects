| chapter: Introduction
| section: Start
| padding: 0
| background: ./images/philips_hue_b.jpg
| 1 1 2

<section><section>

# <big>Let there be a RGB light</big>

<f-inline>
  <f-next-button title="Start building RGB light" />
  <a class="secondary" href="../rgblamp_vision/index.html">Explore interactive tools</a>
</f-inline>

</section></section>

-

<!--f-image src="https://upload.wikimedia.org/wikipedia/commons/2/21/3_color_LEDs.jpg" /-->

---

| 1 1 1
| 2 3 3
| rows: auto 1fr

## Introduction

-

***TODO: Content*** 

-

<f-video src="https://www.youtube.com/watch?v=7TOsFqqJgj4" />


---

| section: Engineering design process
| 1 1 1 1 1 1 1
| 2 3 4 5 6 7 8
| rows: auto 1fr
| gap: 50px 15px

## Engineering design process

The engineering design process is a series of steps that engineers follow to come up with a solution to a problem. Many times the solution involves designing a product (like a machine or computer code) that meets certain criteria and/or accomplishes a certain task. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</f-link>

-

<f-card title="Problem definition" color="var(--darkgray)">
</f-card>

-

<f-card title="Research" color="var(--darkgray)">
</f-card>

-

<f-card title="Design" color="var(--darkgray)">
</f-card>

-

<f-card title="Detailed design" color="var(--darkgray)">
</f-card>

-

<f-card title="Engineering" color="var(--darkgray)" style="opacity: 0.5">
  Optional
</f-card>

-

<f-card title="Prototyping" color="var(--darkgray)" style="opacity: 0.5">
  Optional
</f-card>

-

<f-card title="Communication" color="var(--darkgray)">
</f-card>

---

| 1 1 1
| 2 2 3
| rows: auto 1fr

<div class="grid" style="--cols: repeat(7,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Detailed design','Engineering','Prototyping','Communication']"
    :background="i == 0 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Define the Problem

The engineering design process starts when you ask the following questions about problems that you observe:

#### <span class="bullet">?</span> What is the need?

#### <span class="bullet">?</span> Who has the need?

#### <span class="bullet">?</span> Why is it important to satisfy the need?

-
