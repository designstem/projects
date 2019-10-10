<f-sheet
id="1lX3zJ_3jYKIsIqeoFdPa3xPiVjBy4Avd8aHKefLUmOU"
v-slot="{ value: terms }"
>
<div>
    
  <div v-for="s in unique(terms.map(t => t.scenario)).slice(0,2)">
  
  <h2>{{ s }} </h2>

  <div v-for="row in terms.filter(t => t.scenario === s)">

  <big><var>{{ row.english }}</var></big>

  <f-table :rows="Object.entries(row).filter(([key, value]) => key !== 'scenario' && key !== 'english').map(([key, value]) => ({ language: titlecase(key), term: '<var>' + value + '</var>' }))" />

  #### &nbsp;


  <!--
  <span v-for="([key, value], j) in Object.entries(row).filter(([key, value]) => key !== 'scenario' && key !== 'english')">

  <var class="gray">{{ value }} ({{ key }})</var>

  </span>
  
  -->

  </div>

  </div>

</div>
</f-sheet>