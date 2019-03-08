<f-pager />

| 1 1 1 1
| 2 2 2 4
| 3 3 3 4
| 0 0 0 5

# Drawing polygons

### Experiment how polygons area changes

**1** Change only the ***perimeter*** `p`
**2** Keep a fixed perimeter and change the ***number of edges*** `n`
<details>
	<summary>Geom properties involved</summary>
	# 1 edge length
	2 inradius
	3 circumradius
</details>
 
-

<f-slider set="p" from="1" to="10"  >
</f-slider>

-

<f-slider set="n" from="3" to="32" integer >
</f-slider>

-

<f-scene grid step="0.5" height="400">
	<f-group :rotation="get('r',0)">
		<f-circle opacity="0.1" :r="crEP(get('n',3),get('p',1))" />
		<f-circle :r="crEP(32,get('p',1))" opacity="0.2" />
		<f-line
			closed
			:points="polarpoints(Math.floor(4),crEP(4,get('p',1)))"
			:stroke="color('red')"
		/>
		<f-line
			closed
			:points="polarpoints(Math.floor(get('n',3)),crEP(get('n',3),get('p',1)))"
			:stroke="color('blue')"
		/>
		<f-circle opacity="0.1" :r="rEP(get('n',3),get('p',1))" />
		<f-line
			opacity="0"
			:x2="polarpoints(get('n',3),rEP(get('n',3),get('p',1)))[0].x"
			:y2="polarpoints(get('n',3),rEP(get('n',3),get('p',1)))[0].y"
		/>
	</f-group>
</f-scene>

-

You can always ***rotate*** the polygons with the parameter `r`

<f-slider set="r" from="0" to="360"  >
</f-slider>

<f-notes>
Some notes
</f-notes>

