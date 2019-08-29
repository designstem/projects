| chapter: Introduction
| section: Start
| padding: 0
| background: ./images/philips_hue_b.jpg
| 1 1 2

<section>

# <big>Let there be a RGB light</big>

<f-inline>
  <f-next-button title="Start building RGB light" />
  <a class="secondary" href="../rgblamp_vision/index.html">Explore interactive tools</a>
</f-inline>

</section>

-

<!--f-image src="https://upload.wikimedia.org/wikipedia/commons/2/21/3_color_LEDs.jpg" /-->

---

| 1 1 1
| 2 3 3
| rows: auto 1fr

## Let's start

-

Look at the [Philips hue](https://www2.meethue.com/en-us) commercial in the right. Dicuss the following topics:

<span class="bullet">?</span> What problem the product solves?
  
<span class="bullet">?</span> How it affects the lives of its users?

<span class="bullet">?</span> How does it work? What it can do? How it reacts to user input?

<span class="bullet">?</span> What electric and software components it might have?

All these questions are the core of <var>design engineering</var>. Let's start exploring how it works.

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

#### <span class="bullet">?</span> What is the need?

#### <span class="bullet">?</span> Who has the need?

#### <span class="bullet">?</span> Why is it important to satisfy the need?

-
