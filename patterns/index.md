<f-artboard grid v-slot="{ mouse }" width="100" height="100">
  <f-drag
  	step="5"
    :mouse="mouse"
    points="25 75, 75 75, 75 25, 25 25"
    v-slot="{ points }"
    set="p"
  >
    <f-line :points="points" closed stroke fill="black" />
  </f-drag>
</f-artboard>

<f-slider title="rotation" set="r">

-

<f-artboard grid step="100">
  <f-group v-for="y in range(0,5)">
		<f-line
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
    	:points="get('p')"
      closed
      stroke
      fill="black"
      :rotation="get('r')"
      style="transform-origin: 50px 50px"
    />
  </group>
</f-artboard>