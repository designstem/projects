# A transformation

A transformation converts one geometric shape into another. There are many different types of transformations, like reflections or dilations.

transformation is a specific set of rules that convert one geometric figure into another one. Here are a few examples:

We can also combine multiple types of transformation to create more complex ones – for example, a translation followed by a rotation.


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

In the 2D coordinates, we can specify a translation by how far the shape is moved along the axises.

> Adjust the translation along the axises to see the effect

-

<f-scene grid class="r" v-slot="{ svgscale }" responsive>
  <f-group :scale="svgscale">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  <f-group opacity="0.5" :position="[get('t_x1',1),get('t_y1',1)]">
    <f-group :scale="svgscale">
      <f-target transform="translate(-50, 50) scale(1,-1)" />
    </f-group>
  </f-group>
</f-scene>

##### x-axis translation `{{ get('t_x1', 1) }}`

<f-slider set="t_x1" value="1" from="-2" to="2" />

##### y-axis translation `{{ get('t_y1', 1) }}`

<f-slider set="t_y1" value="1" from="-2" to="2" />

-

<f-scene class="r" v-slot="{ svgscale }" responsive download>
  <f-group v-for="y in range(-2,2)">
    <f-group
      v-for="x in range(-2,2)"
      :position="[x * get('t_x2',0),y * get('t_y2',0)]"
    >
      <f-group :scale="svgscale">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
  </f-group>
</f-scene>

-

#### Repeated translation

When <var>translation</var> is applied repeatedly, we willl see the visual patterns emerge.

Here is the simple grid repetition on x and y axis.

##### Repetition in x-axis `{{ get('t_x2',0) }}`

<f-slider set="t_x2" from="0" to="0.75" />

##### Repetition in y-axis `{{ get('t_x2',0) }}`

<f-slider set="t_y2" value="0" from="0" to="0.75" />

---

| background: lightergray
| cols: 2fr 2fr 4fr 2fr

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Scaling

<f-next-button />

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

#### Single scaling

A <var>scaling</var> is a transformation that resizes a shape.

Unlike <var class="gray">translation</var> and <var class="gray">rotation</var> that generate <var>congurate</var> shapes, scaling generates <var>similar</var> shapes.

-

<f-artboard grid step="100" responsive class="r">
    <f-group :scale="2" style="transform-origin: 300px 300px" :position="[600-100,600-100]">
      <f-target />
    </f-group>
  <f-group opacity="0.5" :scale="get('ts',1) * 2" style="transform-origin: 300px 300px">
    <f-group :position="[300 - 50, 300 - 50]">
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

##### Scaling factor `{{ get('ts',0.5) }} ×` 

<f-slider set="ts" value="2" from="0.1" to="10" />

-

<f-artboard grid step="50" responsive class="r" download>
  <f-group v-for="s in range(0.5,10,1)" :scale="scale(s,0.5,10,0.5,get('ps',1))" style="transform-origin: 300px 300px">
    <f-group :position="[300 - 50, 300 - 50]">
      <f-target />
    </f-group>
  </f-group>
</f-artboard>

-

#### Repeated scaling

When <var>scaling</var> is repeated we will multiple shapes in incrementally bigger sizes.

##### Maximum scaling factor `{{ get('ps',1) }} ×`

<f-slider set="ps" value="1" from="1" to="20" />

---


| background: lightergray
| cols: 2fr 2fr 4fr 2fr

| 1 1 1 1
| 2 3 4 5

| rows: auto 1fr

<f-inline style="--inline-justify: space-between">

# Rotation

<f-next-button />

</f-inline>

-

<!-- Commenting out the sliders -->

<div style="display: none">
  <f-slider title="rotation" set="r"  />
  <f-slider title="scale" set="s" value="1" from="0.1" to="4" />
  <f-source />
</div>

#### Single rotation

A <var>rotation</var> is a transformation is a transformation that turns a shape by a certain angle around a fixed point. That point is called the<br><span style="color: var(--red)">●</span> <var>center of rotation</var>.

-

<f-scene step="1" class="r" v-slot="{ svgscale }" responsive>
  <f-group :scale="svgscale">
    <f-target transform="translate(-50, 50) scale(1,-1)" />
  </f-group>
  <f-group :position="[-get('r_x1',1),-get('r_y1',1)]">
    <f-polargrid count="8" />
    <f-group opacity="0.5" :rotation="get('r_r1',45)">
      <f-group :scale="svgscale" :position="[get('r_x1',1),get('r_y1',1)]">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
  </f-group>
  <f-circle :position="[-get('r_x1',1),-get('r_y1',1)]" r="0.08" stroke fill="var(--red)" />
</f-scene>

##### Rotation `{{ get('r_r1',45) }}°`

<f-slider set="r_r1" value="45" integer />

##### X of center `{{ get('r_x1',1) }}`

<f-slider set="r_x1" to="2" />

##### X of center `{{ get('r_y1',1) }}`

<f-slider set="r_y1" to="2" />

-

<f-scene step="1" class="r" v-slot="{ svgscale }" responsive>
    <f-group
      v-for="a in range(0,360,360 / get('r_c',1)).slice(0, get('r_c',1))"
      :rotation="a"
    >
      <f-line
        :x2="3"
        stroke-width="1"
        opacity="0.1"
      />
      <f-group :scale="svgscale" :position="[1,0]">
        <f-target transform="translate(-50, 50) scale(1,-1)" />
      </f-group>
    </f-group>
</f-scene>

<!--
<f-artboard step="100" download responsive class="r">
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
-->

-

#### Repeated rotation

By applying rotation to an element multiple times we can create a circular set of elements with all elements having <var>rotational symmetry</var>.

##### Number of rotations `{{ get('r_c',1) }}`

##### Rotation step `{{ round(360 / get('r_c',1),2) }}°`

<f-slider set="r_c" value="1" from="1" to="72" integer />

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
