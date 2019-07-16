<f-scene responsive>
  <f-grid-pattern :cols="2+Math.round(4/get('step2r',0.6))" :rows="2+Math.round(4/get('step2r',0.6))" :step="get('step2r',0.3)">
    <f-group :rotation=" get('rndRot', 0) " > 
      <f-line
        :points="[ 
          { x: -get('width2r', 0)/2, y: 0 }, 
          { x: get('width2r', 0), y: 0 }, 
        ]"  
        :stroke-width="2"  
      /> 
    </f-group>
  </f-grid-pattern>
</f-scene>

-

<f-slider title="Grid size" 
    from="0.26"
    to="1"
    :value="0.3"
    set="step2r"
/>
<f-slider title="Line length" 
    from="-2"
    to="2"
    :value="0.01"
    set="width2r"
/>
<f-slider title="Rotation" 
    from="-180"
    to="180"
    :value="0.01"
    set="rotation2r"
    plain="false"
/>

<button 
    v-on:click="set( 'rndRot', randomizer( -90, 180) )" class="tertiary">Randomize rotation</button>