# Patterns playground

<f-card background border="var(--lightgray)">

## Second transformation

<button :style="{ margin: '2px', background: i == get('type1',0) ? 'var(--lightgray)' : ''}" v-for="(b,i) in [
  'None',
  'Translate',
  'Rotate',
  'Scale',
  'Reflect X',
  'Reflect Y',
  'Rect grid',
  'Brick grid',
  'Hex grid',
  'Circle grid 1',
  'Circle grid 2'
]" v-on:click="() => set('type1', i)">
{{ b }}
</button>

&nbsp;

<f-slider v-if="[6,7,8].indexOf(get('type1',0)) !== -1" title="Grid step" value="1" from="0" to="2" set="step1" step="0.01" />

<div v-if="get('type1',0) == 1">

  <f-slider title="X offset" from="0" to="2" set="x1" step="0.01" />
  <f-slider title="Y offset" from="0" to="2" set="y1" step="0.01" />  

</div>

<f-slider v-if="get('type1',0) == 2" title="Rotation" set="rotation1" step="0.01" />

<f-slider v-if="get('type1',0) == 3" title="Scale" set="scale1" value="1" from="0.1" to="4" step="0.01" />

<div v-if="[9,10].indexOf(get('type1',0)) !== -1">
  <f-slider title="Circluar grid count" value="6" from="2" to="32" set="c1" integer />
  <f-slider title="Circular grid radius" value="1" from="0" to="2" set="r1" step="0.01" />
</div>

<f-card background border="var(--lightgray)">

## First transformation

<button :style="{ margin: '2px', background: i == get('type2',0) ? 'var(--lightgray)' : ''}" v-for="(b,i) in [
  'None',
  'Translate',
  'Rotate',
  'Scale',
  'Reflect X',
  'Reflect Y',
  'Rect grid',
  'Brick grid',
  'Hex grid',
  'Circle grid 1',
  'Circle grid 2'
]" v-on:click="() => set('type2', i)">
{{ b }}
</button>

&nbsp;

<f-slider v-if="[6,7,8].indexOf(get('type2',0)) !== -1" title="Grid step" value="1" from="0" to="2" set="step2" step="0.01" />

<div v-if="get('type2',0) == 1">

  <f-slider title="X offset" from="0" to="2" set="x2" step="0.01" />
  <f-slider title="Y offset" from="0" to="2" set="y2" step="0.01" />  

</div>

<f-slider v-if="get('type2',0) == 2" title="Rotation" set="rotation2" step="0.01" />

<f-slider v-if="get('type2',0) == 3" title="Scale" set="scale2" value="1" from="0.1" to="4" step="0.01" />

<div v-if="[9,10].indexOf(get('type2',0)) !== -1">
  <f-slider title="Circluar grid count" value="6" from="2" to="32" set="c2" integer />
  <f-slider title="Circular grid radius" value="1" from="0" to="2" set="r2" step="0.01" />
</div>

<f-card background border="var(--lightgray)">

## Element

<f-buttons :buttons="['Box','Circle','Letter']" set="el" />

<div v-if="get('el') !== 2">

#### Radius

<f-slider value="0.25" from="0.1" to="1" set="r" />

</div>

&nbsp;

</f-card>

</f-card>

</f-card>

-

<f-scene grid>
  <f-mirror-x><f-circle position="0.1 0.1" /></f-mirror-x>
</f-scene>

<f-scene grid width="400" height="400">
  	<component :is="['f-group','f-group','f-group','f-group','f-mirror-x','f-mirror-y', 'f-grid-pattern','f-brick-pattern','f-hex-pattern','f-circle-pattern','f-spin-pattern'][get('type1',0)]"
    :step="get('step1',0)"
    :r="[4,5].indexOf(get('type1',0)) !== -1 ? 4 : get('r1',0)"
    :count="get('c1',6)"
    :position="[get('x1',0),get('y1',0)]"
    :rotation="get('rotation1',0)"
    :scale="get('scale1',1)"
   	>
  	<component :is="['f-group','f-group','f-group','f-group','f-mirror-x','f-mirror-y', 'f-grid-pattern','f-brick-pattern','f-hex-pattern','f-circle-pattern','f-spin-pattern'][get('type2',0)]"
    :step="get('step2',0)"
    :r="[4,5].indexOf(get('type2',0)) !== -1 ? 4 : get('r2',0)"
    :count="get('c2',6)"
    :position="[get('x2',0),get('y2',0)]"
    :rotation="get('rotation2',0)"
    :scale="get('scale2',1)"
   	>
			<component :is="['f-box','f-circle','f-text'][get('el',0)]" style="font-size: 50px" :r="get('r',0.25)">a</component>
    </component>
    </component>
</f-scene>