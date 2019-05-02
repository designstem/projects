| padding: 0


<div class="grid" style="padding:var(--base8) var(--base2);">




<f-section-card title="1: Explore color blindness" section="cb-explore">
- How does color vision deficiency affects people?
</f-section-card>

<f-section-card title="2: Photo safari" section="cb-safari">
- Gather some photos to analyze
</f-section-card>

<f-section-card title="3: Simulator" section="cb-simulator">
- See how different colorblindness types affect your images
</f-section-card>

<f-section-card title="4: Facts about color blindness" section="cb-facts">
- What we should know about the subject
</f-section-card>

<f-section-card title="5: Color perception" section="cb-eye">
- What happens in the eye and brain?
</f-section-card>

<f-section-card title="5: Design your own" section="cb-designer">
- Design a "poster" of your own
</f-section-card>



<!-- <f-section-card
  title="Test"
  section="test"
  :completed="get('completed')"
>{{ get('completed') ? 'Test done' : 'Do a test!' }}</f-section-card> -->
</div>



<!-- 
<div class="grid" style="--cols: 1fr 1fr 1fr; --gap: var(--base);">
        <f-card v-on:click.native="send('goto', 'cbSimulator')" style="border: 0px solid var(--primary); font-weight: normal;" :color="color('white')" :background="color('purple')">Start here</f-card>
        <f-card v-on:click.native="send('goto', 'cbSafari')"  style="font-weight: normal;" :color="color('yellow')">
            <h5 style="color: var(--darkgray);">Photo safari</h5>
        </f-card>
</div> -->