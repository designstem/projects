| chapter: Introduction
| section: Start
| padding: 0
| background: ./images/philips_hue_b.jpg
| 1 1 2

<section>

# <big>Let there be an RGB light</big>

<f-inline>
  <f-next-button title="Start building RGB light" />
  <a class="secondary" href="../rgblamp_vision/index.html">Explore interactive tools</a>
</f-inline>

</section>

-

<!--f-image src="https://upload.wikimedia.org/wikipedia/commons/2/21/3_color_LEDs.jpg" /-->

<f-notes title="Credits">

https://www2.meethue.com/en-us

</f-notes>

---

| 1 1 1
| 2 3 3
| rows: auto 1fr

## Let's start

-

Look at the [Philips hue](https://www2.meethue.com/en-us) commercial on the right. Dicuss the following questions. Write down your answers:

1. What problem does the product solve?
  
2. How does it affect the lives of its users?

3. How does it work? What can it do? How does it react to user input?

4. Which electric and software components might it have?

<br> 

All these questions are at the core of <var>design engineering</var>. Let's start exploring how it works.

<br>



-

<f-video src="https://www.youtube.com/watch?v=7TOsFqqJgj4" />

---

| 1 1 1
| 2 2 3
| rows: auto 1fr

<div class="grid" style="--cols: repeat(6,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Engineering','Prototyping','Communication']"
    :background="i == 0 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Define the Problem

The engineering design process starts when you ask the following questions about problems that you observe:

#### 1. What is the need?

#### 2. Who has the need?

#### 3. Why is it important to satisfy the need?

<f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">
Find out more about engineering design process</f-link>



-
