# Patterns playground

<f-card background border="var(--lightgray)">

### Third transformation

<button :style="{ margin: '2px 0', border: 'none', background: i == get('type1',0) ? 'var(--yellow)' : '', }" v-for="(b,i) in [
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

<p />

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

<f-slider v-if="[4,5].indexOf(get('type1',0)) !== -1" title="Reflection offset" value="0" from="-1" to="4" set="rstep1" />

<f-card background border="var(--lightgray)">

### Second transformation

<button :style="{ margin: '2px 0', border: 'none', background: i == get('type2',0) ? 'var(--yellow)' : '', }" v-for="(b,i) in [
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

<p />

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

<f-slider v-if="[4,5].indexOf(get('type2',0)) !== -1" title="Reflection offset" value="0" from="-1" to="4" set="rstep2" />

<f-card background border="var(--lightgray)">

### First transformation

<button :style="{ margin: '2px 0', border: 'none', background: i == get('type3',0) ? 'var(--yellow)' : '', }" v-for="(b,i) in [
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
]" v-on:click="() => set('type3', i)">
{{ b }}
</button>

<p />

<f-slider v-if="[6,7,8].indexOf(get('type3',0)) !== -1" title="Grid step" value="1" from="0" to="2" set="step3" step="0.01" />

<div v-if="get('type3',0) == 1">

  <f-slider title="X offset" from="0" to="2" set="x3" step="0.01" />
  <f-slider title="Y offset" from="0" to="2" set="y3" step="0.01" />  

</div>

<f-slider v-if="get('type3',0) == 2" title="Rotation" set="rotation3" step="0.01" />

<f-slider v-if="get('type3',0) == 3" title="Scale" set="scale3" value="1" from="0.1" to="4" step="0.01" />

<div v-if="[9,10].indexOf(get('type3',0)) !== -1">
  <f-slider title="Circluar grid count" value="6" from="2" to="32" set="c3" integer />
  <f-slider title="Circular grid radius" value="1" from="0" to="2" set="r3" step="0.01" />
</div>

<f-slider v-if="[4,5].indexOf(get('type3',0)) !== -1" title="Reflection offset" value="0" from="-1" to="4" set="rstep3" />

<f-card background border="var(--lightgray)">

### Element

<f-buttons :buttons="['Character','Box','Circle']" set="el" />

<f-slider v-if="get('el') > 0" title="Radius" value="0.25" from="0.1" to="1" set="r" />

<f-slider v-if="get('el') > 0" title="Border radius" value="3" from="1" to="30" integer set="stroke" />

<f-buttons v-if="get('el') > 0" :buttons="['Empty','Filled']" set="fill" />

<f-slider v-if="get('el') > 0" title="Opacity" value="1" from="0.001" to="1" set="opacity" />


&nbsp;

</f-card>

</f-card>

</f-card>

</f-card>

-

<f-scene grid width="400" height="400">
  	<component :is="['f-group','f-group','f-group','f-group','f-mirror-x','f-mirror-y', 'f-grid-pattern','f-brick-pattern','f-hex-pattern','f-circle-pattern','f-spin-pattern'][get('type1',0)]"
    :step="[4,5].indexOf(get('type1',0)) !== -1 ? get('rstep1',0) : get('step1',1)"
    :r="[4,5].indexOf(get('type1',0)) !== -1 ? 4 : get('r1',0)"
    :count="get('c1',6)"
    :position="[get('x1',0),get('y1',0)]"
    :rotation="get('rotation1',0)"
    :scale="get('scale1',1)"
   	>
  	<component :is="['f-group','f-group','f-group','f-group','f-mirror-x','f-mirror-y', 'f-grid-pattern','f-brick-pattern','f-hex-pattern','f-circle-pattern','f-spin-pattern'][get('type2',0)]"
    :step="[4,5].indexOf(get('type2',0)) !== -1 ? get('rstep2',0) : get('step2',1)"
    :r="[4,5].indexOf(get('type2',0)) !== -1 ? 4 : get('r2',0)"
    :count="get('c2',6)"
    :position="[get('x2',0),get('y2',0)]"
    :rotation="get('rotation2',0)"
    :scale="get('scale2',1)"
   	>
    <component :is="['f-group','f-group','f-group','f-group','f-mirror-x','f-mirror-y', 'f-grid-pattern','f-brick-pattern','f-hex-pattern','f-circle-pattern','f-spin-pattern'][get('type3',0)]"
    :step="[4,5].indexOf(get('type3',0)) !== -1 ? get('rstep3',0) : get('step3',1)"
    :r="[4,5].indexOf(get('type3',0)) !== -1 ? 4 : get('r3',0)"
    :count="get('c3',6)"
    :position="[get('x3',0),get('y3',0)]"
    :rotation="get('rotation3',0)"
    :scale="get('scale3',1)"
   	>
			<component :is="['f-text','f-box','f-circle'][get('el',0)]" style="font-size: 50px" :r="get('el',0) == 1 ? get('r',0.25) * 2 : get('r',0.25)"
      :stroke-width="get('stroke', 3)"
      :fill="get('el', 0) == 0 ? color('primary') : ['rgba(0,0,0,0)',color('primary')][get('fill',0)]"
      :opacity="get('opacity',1)"
      >a</component>
    </component>
    </component>
    </component>
</f-scene>