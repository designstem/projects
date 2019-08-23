| chapter: Engineering
| section: Engineering introduction

| 1 1
| 2 2
| 3 4
| rows: auto auto 1fr

<div class="grid" style="--cols: repeat(7,1fr); --gap: 10px">
  <f-card
    v-for="(c,i) in ['Problem definition','Background research','Design','Detailed design','Engineering','Prototyping','Communication']"
    :background="i == 4 ? 'blue' :  'var(--transparent)'"
    border="blue"
    :title="c"/>
</div>

-

# Engineering

-

### 1. Develop the Solution

Development involves the refinement and improvement of a solution, and it continues throughout the design process, often even after a product ships to customers.

-

### 2. Test and Redesign

The design process involves multiple iterations and redesigns of your final solution. You will likely test your solution, find new problems, make changes, and test new solutions before settling on a final design. <f-link to="https://www.sciencebuddies.org/science-fair-projects/engineering-design-process/engineering-design-process-steps">Read more</a>

---

| 1 1
| 2 3
| rows: auto 1fr

<caption>Assignment</caption>

## Engineering your own RGB Lamp

-

Create a spreadsheet  and make a detailed description of how the values of the three different channels (red, green, blue) will react to the input from the environment.

#### Key questions

* What is the relationship between environmental parameters and colors?
* How do you interpolate the missing values? (E.g. spline, keyframes)

-

Outside temperature|Color|Red|Green|Blue
---|---|---|---|---
Cold|Blue|`0`|`10`|`200`
Warm|Yellow|`200`|`200`|`0`
Hot|Red|`200`|`0`|`10`