| padding: none
| theme: light

| 1 1 2

<section style="padding: var(--base5)">

<a href="./index.html" class="tertiary">This is how I get back</a>

# Sample Scenario

<big>Here comes a sample scenario. It could have multiple entrypoints, images, you name it.</big>

<f-inline>
<a class="primary" href="./index2.html">Let's get started</a><a class="secondary">Another entrypoint?</a> ...
</f-inline>

<br>

### **1** Some chapter here

<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
<div v-for="(s,i) in 6" :key="i">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
<h5 style="color: var(--darkgray); margin: 0">Some section</h5>
<p><small>Some description</small></p>
</f-card>
</div>
</div>

<br />

### **2** Some chapter here

<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
<div v-for="(s,i) in 6" :key="i">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
<h5 style="color: var(--darkgray); margin: 0">Some section</h5>
<p><small>Some description</small></p>
</f-card>
</div>
</div>

</section>

-

<br><br><br>

<f-scene>
  <f-circle-pattern :r="0.5 - (get('r', 1) / 2)" count="6">
    <f-circle-pattern :r="get('r', 1)" count="6">
      <component
        :is="['f-regularpolygon','f-circle'][get('type',0)]"
        :r="get('r', 1)"
        :stroke="color('purple')" 
      />
    </f-circle-pattern>
  </f-circle-pattern>
</f-scene>

<f-animation
  from="0"
  to="1"
  alternate
  easing="easeInQuad"
  v-on:value="r => set('r', r)"
/>
