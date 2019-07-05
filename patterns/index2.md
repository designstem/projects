# A transformation

A transformation converts one geometric shape into another. There are many different types of transformations, like reflections or dilations.

transformation is a specific set of rules that convert one geometric figure into another one. Here are a few examples:

We can also combine multiple types of transformation to create more complex ones – for example, a translation followed by a rotation.


---

| background: lightergray

# Position

<f-source />

Change image content position

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

Translating repeatedly gives a regular pattern

-

<f-artboard grid step="100" download responsive>
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

| background: lightergray
| cols: 2fr 2fr 4fr 2fr

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Translation

<f-next-button />

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

#### Single translation

A <var>translation</var> is a <var class="gray">transformation</var> that moves a figure in a specific direction, without changing its angle or shape.

In the coordinate plane, we can specify a translation by how far the shape is moved along the **x-axis** and the **y-axis**. 

-

<f-artboard grid step="100" responsive class="r">
  <f-group scale="2" style="transform-origin: 300px 300px">
  <f-group :position="[300-50,300-50]">
    <f-target />
  </f-group>
  <f-group opacity="0.5" :position="[get('tx',300)-50-150,get('ty',300)-50-150]">
    <f-target />
  </f-group>
  <f-line
    :x1="300"
    :y1="300"
    :x2="get('tx',300) - 150"
    :y2="get('ty',300) - 150"
  />
  </f-group>
</f-artboard>

##### x-axis translation `{{ get('tx',300) - 300 - 150 }}`

<f-slider set="tx" step="1" value="500" from="300" to="600" />

##### y-axis translation `{{ get('ty',300) - 300 - 150 }}`

<f-slider set="ty" step="1" value="500" from="300" to="600" />

-

<f-artboard grid step="50" download responsive class="r">
  <f-group v-for="y in range(0,5)">
    <f-group
      v-for="x in range(0,5)"
      :position="[x * get('px',100),y * get('py',100)]"
      :rotation="get('r')"
      :scale="get('s')"
      style="transform-origin: 50px 50px"
    >
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

-

#### Repeated translation

When <var>translation</var> is applied repeatedly, we willl see the visual patterns emerge.

Here is the simple grid repetition on x and y axis.

##### Repetition step in x-axis `{{ get('px',100) }}`

<f-slider set="px" step="1" value="100" from="0" to="500" />

##### Repetition step in y-axis `{{ get('py',100) }}`

<f-slider set="py" step="1" value="100" from="0" to="500" />

---

| background: lightergray

# Position

<f-source />

Change image content position

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

Translating repeatedly gives a regular pattern

-

<f-artboard grid step="100" download responsive>
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

| background: lightergray

<mark>Rotation</mark>

## Rotation around an internal point

Change image content orientation

<f-source />

<f-slider title="rotation" set="r"/>

Rotating repeatedly gives a completely different pattern

-

<f-artboard grid step="100" download responsive>
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

| background: lightergray

<mark>Rotation</mark>

## Rotation around exterior point

<f-source />

Change image content orientation

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4" />

<f-slider step="1" title="count" set="cc" value="16" from="2" to="32" />

<f-slider title="d" set="d" value="200" from="50" to="400" />

-

<f-artboard step="100" download responsive>
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

| background: lightergray

<mark>Mirroring</mark>

## Horizontal mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="distance" set="d" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" style="background: white" download responsive>
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

| background: lightergray

<mark>Mirroring</mark>

## Horizontal and vertical mirroring

<f-source />

<f-slider title="rotation" set="r"/>

<f-slider title="scale" set="s" value="1" from="0.1" to="4"/>

<f-slider title="dx" set="dx" value="0" from="-50" to="50" integer />

<f-slider title="dy" set="dy" value="0" from="-50" to="50" integer />

-

<f-artboard grid step="100" download responsive>
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

| background: lightergray

# 3D patterns

#### Element

<f-slider title="Element rotation" set="r3" to="180" />

<f-slider title="Element scale" set="s3" value="1" from="0.1" to="2"/>

#### Scene

<f-slider title="Scene rotation x" set="rx3" value="-45" from="-90" to="0" />

<f-slider title="Scene rotation z" set="rz3" value="0" from="-90" to="0" />

-

<f-scene3 webgl width="600" height="600" responsive>
  <f-group3 scale="0.5" :rotation="[get('rx3',-45),0,get('rz3',0)]" position="0 0 0">
    <f-group3 v-for="y in range(-2,2,1)">
      <f-hedron3
        v-for="x in range(-2,2,1)"
        :position="[x,y]"
        :rotation="[0,0,get('r3',0) + 45]"
        :scale="get('s3') / 2"
        :key="x + '-' + y"
        :count="4"
        :shading="false"
        :fill="color('blue')"
        :height="0.1"
        :opacity="0.9"
      />
    </f-group3> 
  </f-group3>
</f-scene3>
