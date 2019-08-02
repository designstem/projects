

| theme: dark
| rows: auto
| cols: 3fr 2fr
| 1 1
| 2 3

# RGB Explorer

-

<!-- Commented out temporarily because of heavy CPU usage -->

<!-- <f-scene3 isometric responsive width="600" height="600" webgl>
	<!-- <f-rotation3 duration="10000"> -->
  <!-- <f-group3 scale="1" rotation="20 120 20" position="-1.2 -2 -1.2">
    <f-group3 v-for="r in range(0,5)">
      <f-group3 v-for="g in range(0,5)">
        <f-box3
          v-for="b in range(0,5)"
          :r="0.4"
          :position="[r*0.4, g*0.4, b*0.4]"
          :fill="rgb(r * 60,g * 60,b * 60)"
          :shading="false"
        />
      </f-group3>
    </f-group3>
  </f-group3> -->
  <!-- </f-rotation3> -->
<!-- </f-scene3> -->

<f-scene3 isometric responsive width="600" height="600" webgl>
<!-- <f-rotation3 duration="10000"> -->
  <f-group3 scale="0.75" :rotation="[50, get('cylRot', 0), 0]" :position="[0, 1, 0]">
  <f-group3 v-for="b in range(0,(get('cylB',100)/10)-1)"
    :key="'b'+b"
    :position="[0, -5.5 + b * 0.9 , 0 ]"
    :scale="[1.4 - b*0.13, 0.4, 1.4 - b*0.13]"
  >
  <f-group3 v-for="h in range(0,get('cylH'))" :key="'h'+h">
      <f-group3 v-if="get('cylB', 100) >= b*10"  :rotation="[0, 30*h, 0]">
        <f-hedron3
          v-if="get('cylH', 11) >= h"
          count="4"
          height="2"
          r="0.75"
          rotation="0 180 45"
          :position="[0, 0, 2]"
          :fill="hsl(ai2hue(h * 30), 100, 10+b*10)"
          :stroke="hsl(ai2hue(h * 30), 100, b*10)"
          :shading="false"
        />
      </f-group3>
    </f-group3>
    </f-group3>
  </f-group3>
<!-- </f-rotation3> -->
</f-scene3>

<f-scene3 isometric responsive width="500" height="500" webgl  >
  <f-group3 scale="0.6" :rotation="[30, get('cylRot', 0), 0]" :position="[0, 0.7, 0]">
  <f-group3 v-for="b in range(0,(get('cylB',100)/10)-1)"
    :key="'b'+b"
    :position="[0, -5.5 + b * 0.9 , 0 ]"
    scale="1, 1, 1"
  >
  <f-group3 v-for="h in range(0,get('cylH'))" :key="'h'+h">
      <f-group3 v-if="get('cylB', 100) >= b*10"  :rotation="[0, 30*h, 0]">
        <f-polygon3
          v-if="get('cylH', 11) >= h"
          points="-1 1, -1 -1, 1 -1, 1 1"
          rotation="0 0 0"
          :position="[0, 0, 2.5]"
          scale="0.66 0.45 1"
          :fill="hsl(ai2hue(h * 30), 100, 10+b*10)"
          :stroke="hsl(ai2hue(h * 30), 100, b*10)"
          :shading="false"
        />
      </f-group3>
    </f-group3>
    </f-group3>
  </f-group3>
</f-scene3>


-

<div style="position:sticky; top:15vh;">
  <f-slider set="cylB" from="10" to="100" title="brightness" value="100"  integer />
  
  <!-- <f-slider set="cylS" to="100" title="saturation" value="20" integer /> -->
  
  <f-slider set="cylH" to="11" title="blah" value="11"  integer />
  
  <f-slider set="cylRot" to="360" title="Rotate tower" value="0"  integer />
</div>



---

| 1 1 1 1
| 2 3 3 3

## Color blindness types

-

<f-slider title="Slice count" set="c" from="8" to="64" integer />
  
-

<div style="display: flex; flex-wrap: wrap">
  
  <div>
  <b>Normal vision</b><br><br>
  <f-scene width="150" height="150" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="hsl(a,100,scale(count,0,2,30,70))"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  </div>

  <div v-for="type in [
    'achromatomaly',
    'achromatopsia',
    'deuteranomaly',
    'deuteranopia',
    'protanomaly',
    'protanopia',
    'tritanomaly',
    'tritanopia'
  ]">
  <b>{{ type }}</b><br><br>
  <f-scene  width="150" height="150" grid>
    <f-group v-for="(count,i) in range(0,2)" :key="i">
    <f-arc
      v-for="(a,j) in range(0,360,360 / get('c',8))"
      :key="j"
      :fill="colorblind(hsl(a,100,scale(count,0,2,30,70)), type)"
      stroke
      :start-angle="a"
      :end-angle="a + (360 / get('c',8))"
      :r="scale(count,0,2,1,1.5)"
      :inner-radius="scale(count,0,2,1,1.5) - 0.25"
    />
    </f-group>
  </f-scene>
  </div>
</div>











---

| 1 1 1
| 2 3 4

## Contrast checker

-

<f-slider title="Background color hue" set="c1" integer />
<f-slider title="Foreground color brightness" set="c2" to="100" integer />

-

<div style="padding: var(--base2)" :style="{
  background: hsl(get('c1',0)),
  '--primary': hsl(0, 0, get('c2',0))
}">

<h2>Halloo {{ contrast(hsl(get('c1',0)),hsl(0, 0, get('c2',0))) < 4.5 ? '⚠️' : ' ' }}</h2>

##### Contrast ratio: {{ contrast(hsl(get('c1',0)),hsl(0, 0, get('c2',0))) }}

Deutsches Ipsum Dolor meliore Hockenheim et Spezi Te Käsefondue utamur genau Exerci Donaudampfschiffahrtsgesellschaftskapitän eu Kaftfahrzeug-Haftpflichtversicherung Principes Hackfleisch eos Fußball His Wiener Schnitzel moderatius Deutsche Mark.

<button>Käsefondue</button>

</div>

-

<div style="padding: var(--base2)" :style="{
  background: colorblind(hsl(get('c1',0))),
  '--primary': colorblind(hsl(0, 0, get('c2',0)))
}">

<h2>Halloo {{ contrast(colorblind(hsl(get('c1',0))),colorblind(hsl(0, 0, get('c2',0))) ) < 4.5 ? '⚠️' : '' }}</h2>

##### Contrast ratio: {{ contrast(colorblind(hsl(get('c1',0))),colorblind(hsl(0, 0, get('c2',0)))) }}

Deutsches Ipsum Dolor meliore Hockenheim et Spezi Te Käsefondue utamur genau Exerci Donaudampfschiffahrtsgesellschaftskapitän eu Kaftfahrzeug-Haftpflichtversicherung Principes Hackfleisch eos Fußball His Wiener Schnitzel moderatius Deutsche Mark.

<button>Käsefondue</button>

</div>
