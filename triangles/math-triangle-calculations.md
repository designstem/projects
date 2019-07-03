

| padding: 5vmin

# Calculations in triangles

&nbsp;


---


| theme: blue
| padding: 5vmin
| gap: 0
| 1 1 1
| 2 3 4


#### ~How to calculate angles and sides in triangles.~

&nbsp; 

First rule, we have to know, is...


<blockquote>
  <section>
    <f-inline style="margin-bottom:0">

<f-fact-icon size="large" style="padding-right: var(--base3)" />

#### ~The sum of all 3 angles in every triangle is equal to 180°~

</f-inline>

</section>
</blockquote> 


-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [0,1.598],[-1.5,-1],[1.5,-1] ]" :angleMarkers="3" angleInfo />
</f-scene>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-1,1],[-1,-1],[1,-1] ]" :angleMarkers="3" angleInfo />
</f-scene>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [0.3,1.6],[-1.5,-1],[1.2,-1.2] ]" :angleMarkers="3" angleInfo />
</f-scene>



---

| 1 1
| 2 3
| padding: 5vmin


#### **A** In any triangle if we know angles A and B and want to calculate angle C. 

-

For example, if we assume that <f-math inline>\color{red} ∠A = 30° \color{black} and \color{blue} ∠B = 50°</f-math> then, since <f-math inline>\color{red} ∠A \color{black} + \color{blue} ∠B \color{black} + \color{green} ∠C \color{black} = 180°</f-math>

<f-math inline>\color{green} ∠C \color{black} = 180° - ( \color{red} ∠A \color{black} + \color{blue} ∠B  \color{black} ) = \newline 180° - ( \color{red} 30° \color{black} + \color{blue} 50° \color{black} ) = \newline 180° - 80° = 100°</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-1.5,-0.5],[1.5,-0.5],[2.021-1.5,1.166532-0.5] ]" :angleMarkers="3" angleInfo />
</f-scene>

---









| 1 1
| 2 3
| padding: 5vmin

#### **B** In a isosceles triangle, we know angle A and we want to calculate angles B or C.

-

If we know the degrees of angle <f-math inline red>A</f-math> we can calculate angles <f-math inline blue>B</f-math> and <f-math inline green>C</f-math> by using the formula 

<f-math inline>\color{blue} ∠B \color{black} or \color{red} ∠C \color{black} = \frac {180 - \color{red} A \color{black} }{2}</f-math>

Example: if <f-math inline red>A=100°</f-math> then 

<f-math inline>\color{blue} B \color{black} = \frac {180° - \color{red} 100° \color{black} }{2} = \frac {80°}{2} = 40°</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [0,1],[-1.5,-0.8],[1.5,-0.8] ]" :angleMarkers="3" angleInfo />
</f-scene>

---









| 1 1
| 2 3
| padding: 5vmin

#### **C** In a right triangle we know sides a and b and we want to calculate the third side c.

#### &nbsp;

For that we have to know the Theorem of Pythagoras

<blockquote>
<section>

<f-inline>

<f-fact-icon size="large" />

### ~The Theorem of Pythagoras:~

</f-inline>

#### ~In every orthogonal (right)  triangle with sides a, b and c (A is the right angle) it holds a²=b²+c²~

</section>
</blockquote> 


### &nbsp;

-

**For example:** let side <var class="red">a=5</var> and <var class="blue">b=4</var> then 

<f-math inline>\color{red} a^2 \color{black} = \color{blue} b^2 \color{black} + \color{green} c^2
</f-math>

<f-math inline>\color{green} c^2 \color{black} = \color{red} a^2 \color{black} - \color{blue} b^2 \color{black} = \newline \color{red} 5^2 \color{black} - \color{blue} 4^2 \color{black} = \newline \color{red} 25 \color{black} - \color{blue} 16 \color{black} = 9
</f-math>

<f-math inline>\color{green} c \color{black} = \sqrt {9} = 3</f-math>

-

<f-scene grid class="fullWidthScene">
  <Triangle :points="[ [-0.5,-1],[1,-1],[-0.5,1] ]" :angleMarkers="1"  />
  <f-text :fill="color('red')" position="0.4 0.2">a</f-text>
  <f-text :fill="color('blue')" position="-0.7 0">b</f-text>
  <f-text :fill="color('green')" position="0.2 -1.2">c</f-text>
</f-scene>

---








| 1 1
| 2 3
| padding: 5vmin

#### **D** In a isoskeles triangle, we know all the sides and we want to calculate the height from angle A

-

Let <var class="red">a</var>=10 and <var class="blue">b</var>=<var class="green">c</var>=16. 

The triangle AHC is orthogonal and the unknown height <var class="purple">h</var> is one of its vertical sides. 
In that triangle holds the theorem of Pythogoras so 

<f-math inline>AC^2 = AH^2 + HC^2</f-math>

We notice that AH intersects BC in the middle H, so HC is half of BC, ie. 

<f-math inline>HC = \frac {10}{2} = 5</f-math>

The height <var class="purple">h</var> is estimated by

<f-math inline>\color{purple} h^2 \color{black} = AH^2 = AC^2 + HC^2 = 16^2 + 5^2 = 256 + 25 = 281
  \color{purple} h \color{black} = \sqrt {281} \approx 16.7</f-math>

-

<f-scene grid class="fullWidthScene">
  <f-box :fill="color('yellow')" stroke r="0.25" opacity="0.5" position="0.125 -0.875" />
  <Triangle :points="[ [0,1.5],[1,-1],[-1,-1] ]" />
  <f-line points="0 1.5, 0 -1" style="stroke-dasharray: 0.04 0.07;" strokeWidth="2" :stroke="color('blue')" />
  <f-text :fill="color('green')" position="0.7 0.3">c</f-text>
  <f-text :fill="color('green')" position="-0.7 0.3">b</f-text>
  <f-text :fill="color('green')" position="0 -1.2">a</f-text>
  <f-text :fill="color('green')" position="-0.15 -0.15">h</f-text>
  <f-text :fill="color('blue')" position="-0.15 -0.9">H</f-text>
</f-scene>

---

