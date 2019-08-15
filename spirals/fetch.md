<f-fetch src="https://public-api.wordpress.com/wp/v2/sites/spiralsdesignstem.wordpress.com/posts" type="json" v-slot="{ value: pages }">
<div>	
<div v-for="page in pages">
  <h2 v-html="page.title.rendered" />
  <div v-html="page.content.rendered" />
</div>
</div>
</f-fetch>
<f-fetch src="https://public-api.wordpress.com/wp/v2/sites/spiralsdesignstem.wordpress.com/pages" type="json" v-slot="{ value: pages }">
<div>	
<div v-for="page in pages">
  <h2 v-html="page.title.rendered" />
  <div v-html="page.content.rendered" />
</div>
</div>
</f-fetch>