| padding: 0

<!-- <section>

<a href="../" class="quaternary"><f-leftarrow-icon /> Back to projects</a>

</section> -->

<!-- <button v-on:click="send('closemenu')">
  Close menu
</button> -->


<dl class="cb-menu" style="cursor:default;">
  
  <div :class="get('section') == 'cb-start' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click.self="send('closemenu'); goto('cb-start')">Start</dt>
  </div>
  
  <div :class="get('section') == 'cb-explore-cb' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('cb-explore-cb')">Understand color blindness</dt>
    <dd v-on:click="goto('cb-explore-cb')">How does it affect people</dd>
    <dd v-on:click="goto('cb-safari')">Photo safari</dd>
    <dd v-on:click="goto('cb-simulate')">Analyze images</dd>
    <dd v-on:click="goto('cb-analyze')">Analyze results</dd>
  </div>
  
  <div :class="get('section') == 'cb-learning-stations' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('cb-learning-stations')">Learning stations</dt>
  </div>

  <div :class="get('section') == 'cb-accessibility' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('cb-accessibility')">What is accessibility</dt>
  </div>
  
  <div :class="get('section') == 'cb-the-eye' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="() => {send('closemenu', false); goto('cb-the-eye');}">The eye</dt>
    <dd v-on:click="goto('cb-rods-and-cones')">Rods and cones</dd>
    <dd v-on:click="goto('cb-color-vision-mapper')">Map your color vision</dd>
  </div>

  <div :class="get('section') == 'cb-color-mixing' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('cb-color-mixing')">Color mixing</dt>
    <dd v-on:click="goto('cb-brightness')">Additive Color System</dd>
    <dd v-on:click="goto('cb-saturation')">Mix RGB colors</dd>
    <dd v-on:click="goto('cb-shampoo')">Task: shampoo colors</dd>
  </div>

  <div :class="get('section') == 'cb-3-properties' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'">
    <dt v-on:click="goto('cb-3-properties')">Three properties of color</dt>
    <dd v-on:click="goto('cb-brightness')">Brightness</dd>
    <dd v-on:click="goto('cb-saturation')">Saturation</dd>
    <dd v-on:click="goto('cb-shampoo')">Task: shampoo colors</dd>
  </div>
  
  <div :class="get('section') == 'cb-contrast-and-harmony' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'" >
    <dt v-on:click="goto('cb-contrast-and-harmony')">Contrast and harmony</dt>
    <dd v-on:click="goto('cb-itten')">J. Itten</dd>
    <dd v-on:click="goto('cb-task1')">Task: guess the contrasts</dd>
    <dd v-on:click="goto('cb-wheels')">Color palettes</dd>
  </div>
  
  <div :class="get('section') == 'cb-workshop' ? ['cb-menu__section', 'cb-menu__section--active'] : 'cb-menu__section'" >
    <dt v-on:click="goto('cb-workshop')">Final task</dt>
    <dd v-on:click="goto('cb-workshop-stem')">STEM path</dd>
    <dd v-on:click="goto('cb-workshop-design')">Design path</dd>
    <dd v-on:click="goto('cb-workshop-test')">Analyze your work</dd>
  </div>
  
</dl>


<!-- 
<f-section-card title="Explore color blindness" section="cb-explore-cb">
</f-section-card>


<f-section-card title="Accessibility" section="cb-accessibility">
</f-section-card>


<f-section-card title="The eye" section="cb-the-eye">
</f-section-card>

<f-section-card title="Color mixing" section="cb-color-mixing">
</f-section-card>

<f-section-card title="Contrast and harmony" section="cb-contrast-and-harmony" >
  <a href="" v-on:click.prevent="goto('cb-itten')">J. Itten</a>
</f-section-card>

<f-section-card title="Workshop" section="cb-workshop">
- Final assignment
</f-section-card> -->


<!-- <f-section-card
  title="Test"
  section="test"
  :completed="get('completed')"
>{{ get('completed') ? 'Test done' : 'Do a test!' }}</f-section-card> -->