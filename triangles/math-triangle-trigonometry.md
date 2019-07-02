

| padding: 5vmin

# Trigonometric functions

# &nbsp;

## Use of trigonometric functions to combine angles and sides in right triangles.

The ratios of the sides of a right triangle are called trigonometric ratios. 
The three common trigonometric ratios are the **sine (sin)**, **cosine (cos)**, and **tangent (tan)**. 



<blockquote>
  <section>
<f-inline>

<f-fact-icon size="large" style="flex:1 0 100px;" />

In a triangle with angles **A**, **B** and **C** and sides **a**, **b** and **c** are **sine**, **cosine** and **tangens** defined as follows 

</f-inline>
    <f-math>
      sin(B) = \frac {b}{a} , sin(C) = \frac {c}{a}
    </f-math>
    <f-math>
      cos(B) = \frac {c}{a} , cos(C) = \frac {b}{a}
    </f-math>
    <f-math>
      tan(B) = \frac {b}{c} , tan(C) = \frac {b}{c}
    </f-math>
  </section>
</blockquote>

---









| 1 2
| padding: 5vmin

Example. In the following right triangle, angle B can be estimated in terms of trigonometric functions as 

<f-math inline>cos(B) = \frac {8}{17} \approx 0.47</f-math> 
or
<f-math inline>sin(B) = \frac {15}{17} \approx 0.88</f-math> 
or
<f-math inline>tan(B) = \frac {15}{8} \approx 1.87</f-math> 

The actual value of angle B in degrees derives from the inverse function. For example if sinB0.88,  then sin-10.8828. The inverse trigonometric functions can be found and estimated by a typical calculator.

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [1.5,-0.5],[-1,1],[-1,-0.5] ]" />
  <f-text :fill="color('blue')" position="0.4 0.45">17</f-text>
  <f-text :fill="color('blue')" position="-1.2 0.2">8</f-text>
  <f-text :fill="color('blue')" position="0 -0.8">15</f-text>
</f-scene>

---

# &nbsp;

***TODO: more options to calculate sides and angles w trig. functions? SOH-CAH-TOA concept maybe?***