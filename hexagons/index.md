<f-slider set="c" from="3" to="32" integer />

<f-scene grid>
	<f-regularpolygon :count="get('c',addone(3))" />
</f-scene>

<f-scene grid>
	<f-regularpolygon :count="get('c',addtwo(3))" />
</f-scene>

