# Position

<f-source />

Change image content position

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

Translating repeatedly gives a regular pattern 

-

<f-artboard grid step="100" download>
  <f-group v-for="y in range(0,5)">
    <f-group
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Rotation</mark>

## Rotation around an internal point

Change image content orientation

<f-source />

<f-slider title="rotation" set="r"/>

Rotating repeatedly gives a completely different pattern 

-

<f-artboard grid step="100" download>
  <f-group v-for="y in range(0,5)">
    <f-group
      v-for="x in range(0,5)"
      :position="[x * 100,y * 100]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Rotation</mark>

## Rotation around exterior point

<f-source />

Change image content orientation

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4" />

<f-slider step="1" title="count" set="cc" value="16" from="2" to="32" />

<f-slider title="d" set="d" value="200" from="50" to="400" />

-

<f-artboard step="100" style="background: white" download>
  <f-box
    position="300 300" :r="600 - 1"
    stroke-width="1"
    opacity="0.25"
  />
  <f-line
    v-for="a in range(0,360,360 / get('cc',16))"
    position="300 300"
    x1="0"
    y1="0"
    :x2="polarx(a,500)"
    :y2="polary(a,500)"
    stroke-width="1"
    opacity="0.25"
  />
  <f-group
    v-for="a in range(0,360,360 / get('cc',16)).slice(0, get('cc',16))"
    :rotation="a"
    position="300 300"
  >
    <f-group
      :position="[-50,-get('d')]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
    >
		  <f-target />
  </f-group>
  </f-group>
</f-artboard>

---

<mark>Mirroring</mark>

## Horizontal mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-


<f-artboard grid step="100" style="background: white" download>
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
    <f-group
      :position="[get('d'),-get('d')][x % 2]"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),1 * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
      >
		  <f-target />
    </f-group>
  </f-group>
</f-artboard>

---

<mark>Mirroring</mark>

## Horizontal and vertical mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="dx" set="dx" value="0" from="-50" to="50" integer />

<f-slider title="dy" set="dy" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" download>
  <f-group v-for="y in range(0,5)">
    <f-group v-for="x in range(0,5)" :position="[x * 100,y * 100]">
    <f-group
      :position="[[get('dx'),-get('dx')][x % 2],[get('dy'),-get('dy')][y % 2]]"
      :rotation="get('r')"
      :scale="[[1,-1][x % 2] * get('s',1),[1,-1][y % 2] * get('s',1)]"
      style="transform-origin: 50px 50px"
      :opacity="[1,0.5][x % 2]"  
    >
		  <f-target />
  </f-group>
  </f-group>
</f-artboard>

---

# 3D patterns

#### Element

<f-slider title="Element rotation" set="r3" to="180" />

<f-slider title="Element scale" set="s3" value="1" from="0.1" to="4"/>

#### Scene

<f-slider title="Scene rotation x" set="rx3" value="-45" from="-90" to="0" />

<f-slider title="Scene rotation z" set="rz3" value="0" from="-90" to="0" />

-

<f-scene3 webgl width="600" height="600">
  <f-group3 scale="0.5" :rotation="[get('rx3',-45),0,get('rz3',0)]" position="0 0 0">
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

 