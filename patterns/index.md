<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
		<f-group
      :position="[get('d'),-get('d')][x % 2]"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),[1,-1][y % 2] * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][y % 2]"
    >
      <f-letter />
    </f-group>
  </f-group>
</f-artboard>

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
		<f-group
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-letter />
    </f-group>
  </group>
</f-artboard>

---

#### Element

<f-slider title="Element rotation" set="r3" to="180" />

<f-slider title="Element scale" set="s3" value="1" from="0.1" to="4"/>

#### Scene

<f-slider title="Scene rotation" set="rx3" value="-45" from="-90" to="0" />

<f-slider title="Scene rotation" set="rz3" value="0" from="-90" to="0" />

-

<f-scene3 webgl width="600" height="600">
  <f-group3 scale="0.5" :rotation="[get('rx3',-45),0,get('rz3',0)]" position="0 0.5 0">
    <f-group3 v-for="y in range(-2,2,1)">
      <f-hedron3
        v-for="x in range(-2,2,1)"
        :key="x + '-' + y"
        :r="1 / Math.sqrt(2)"
        :count="4"
        :position="[x,y]"
        :rotation="[0,0,get('r3',0) + 45]"
        :scale="get('s3')"
        :height="0.5"
        shading
      />
    </f-group3> 
  </f-group3>
</f-scene3>


---

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

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="a in range(0,360,360 / 16).slice(0,16)" :rotation="a" position="300 300">
		<f-line
      position="-50 -200"
      :scale="get('s')"
    	:points="get('p')"
      closed
      stroke
      fill="black"      
      style="transform-origin: 50px 50px"
      :rotation="get('r')"  
      :opacity="scale(a,0,360,1,0.1)"
    />
  </f-group>
</f-artboard>

---

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

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
		<f-line
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
    	:points="get('p')"
      closed
      stroke
      fill="black"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    />
  </group>
</f-artboard>

---

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

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
		<f-line
      :position="[get('d'),-get('d')][x % 2]"
    	:points="get('p')"
      closed
      stroke
      fill="black"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),1 * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"
    />
  </group>
</f-artboard>

---

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

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" style="background: white">
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
		<f-line
      :position="[get('d'),-get('d')][x % 2]"
    	:points="get('p')"
      closed
      stroke
      fill="black"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),[1,-1][y % 2] * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][y % 2]"
    />
  </group>
</f-artboard>