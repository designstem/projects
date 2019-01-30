# Spirals

> This is a place for spirals scenario. Right now no real content yet. 

## Equations of 2D Archimedian spirals

Assume that a point is described by its ***polar coordinates (r, θ)***. Remember that **r is the radius**, the distance of the point from the center of the axes and **θ is the angle** formed between the radius and x axis (see next figure).

<br><br>

<f-next-button />

---

| 1 1 1 1
| 2 3 3 3

Any point on a circle can be described through <f-sidebar width="60vw" src="./MathCartesian.md">cartesian</f-sidebar> and <f-sidebar width="60vw" src="./MathPolar.md">polar</f-sidebar> coordinates.

-

<f-slider 
    title="Circle radius"
    :value="100" 
    v-on:value="i => set('radius', i)"
    from="0"
    to="200" 
/>
<f-slider 
    title="Active point"
    :value="8" 
    v-on:value="i => set('active', i)"
    from="0"
    to="35"
    :step="1" 
/>

<br>

<f-next-button />

-

<f-artboard width="600" height="400" style="width:100%; height:50vh;">
    <g transform="translate(300 200)">
        <Spiral :cycles="1" :padding="0" :startX="get('radius', 100)" :activePoint="get('active', 8)" :info="false" />
    </g>
</f-artboard>


---


| 1 1 1 1
| 2 3 3 3

# Spiral

-

<f-slider 
    title="Start radius"
    :value="100" 
    v-on:value="i => set('radius', i)"
    from="0"
    to="200" 
/>

<f-slider 
    title="Cycles"
    :value="2" 
    v-on:value="i => set('cycles', i)"
    from="0"
    to="20" 
/>
<f-slider 
    title="Spiral growth"
    :value="20" 
    v-on:value="i => set('padding', i)"
    from="0"
    to="200" 
/>
<!-- <f-slider 
    title="Active point"
    :value="8" 
    v-on:value="i => set('active', i)"
    from="0"
    :to="get('cycles')*36"
    :step="1" 
/> -->



-

<f-artboard width="600" height="600" style="width:100%; height:70vh;"  
   >
    <g transform="translate(300 300)">
        <Spiral 
          
          :cycles="get('cycles')" 
          :padding="get('padding')" 
          :startX="get('radius', 100)" 
          
          :info="true" 

          />
    </g>
</f-artboard>
