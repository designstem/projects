<f-sheet
id="1lX3zJ_3jYKIsIqeoFdPa3xPiVjBy4Avd8aHKefLUmOU"
v-slot="{ value: terms }"
>
<div>
  
  # DesignSTEM glossary

  <div v-for="s in unique(terms.map(t => t.scenario)).slice(0,2)">

  ### &nbsp; 

  <h2 style="display: flex; align-items: center">
    {{ titlecase(s) }}
    <a class="tertiary" style="margin-left: 2ch;" :href="'../' + s">Go to scenario</h2>

  <div class="grid" style="--gap: 60px 40px">

  <div v-for="row in terms.filter(t => t.scenario === s)">

  ### <var>{{ row.english }}</var>

  <f-table :rows="Object.entries(row).filter(([key, value]) => key !== 'scenario' && key !== 'english').map(([key, value]) => ({ language: titlecase(key), term: '<var>' + value + '</var>' }))" />

  </div>

  </div>

  </div>

</div>
</f-sheet>