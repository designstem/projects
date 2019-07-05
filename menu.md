
| padding: none

<a href="./index.html" class="tertiary">This is how I get back to scenario index</a>

<br>

### Sample Scenario

#### 1. Some chapter here

<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
<f-card style="border: 4px solid var(--purple); font-weight: normal;" :color="color('purple')">
<h5 style="color: var(--darkgray); margin: 0">Some section</h5>
<p><small>YOU ARE HERE</small></p>
</f-card>
<div v-for="(s,i) in 5" :key="i">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
<h5 style="color: var(--darkgray); margin: 0">Some section</h5>
<p><small>Some description</small></p>
</f-card>
</div>
</div>

<br />

#### 2. Some chapter here

<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
<div v-for="(s,i) in 6" :key="i">
<f-card style="border: 0px solid var(--primary); font-weight: normal;" :color="color('yellow')">
<h5 style="color: var(--darkgray); margin: 0">Some section</h5>
<p><small>Some description</small></p>
</f-card>
</div>
</div>