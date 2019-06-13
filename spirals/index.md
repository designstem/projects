<f-fetch src="https://public-api.wordpress.com/wp/v2/sites/spiralsdesignstem.wordpress.com/pages" type="json" v-slot="{ value: pages }">
<div>	
<div v-for="page in pages">
  <h3>{{ page.title.rendered }}</h3>
  <div v-html="page.content.rendered" />
  
---
  
</div>
</div>
</f-fetch>
