

<center>
<div>
  <f-slider to="1" value="0" :value="get('somevalue', 0)" style="width:60px; border:1px solid var(--gray); border-radius:18px; padding: 0 8px; box-shadow: 0 1px 5px 0 hsla(0, 0%, 0%, 0.3) " integer v-on:click.native="get('somevalue') == 1 ? set('somevalue', 0) : set('somevalue', 1)" />
  Some value: {{ get('somevalue', 0) }}
</div>

</center>


---

- sidebar close button fixed or sticky? - DONE

- sidebar padding bit bigger?

- camera to orthogonal or dynamic? - DONE
- polyhedron opacity dynamical or 1 - DONE

- captions for image? (description and / or copyright nfrmtion)

---





- sidebar to (almost?) full width on narrow screens


- sidebar - change trigger style (if important etc) or trigger open from another element (button)




- esc to close sidebars? 
- f-sidebar close button to flex (x is not in center)



- document mode text size
- document mode padding 200px if no padding defined for a slide
- document mode - what to do with f-next-button 



- slides row height sometimes strange
- static scene - trigger update once from outside




- katex \newline not working

---


| 1 2
| 3 4

<f-scene class="fullWidthScene" v-for="(p,i) in [ {s:6, r:1.5} ]" :key="'polygon'+i" >
    <!-- <f-group v-for="(l,j) in 2" :key="'l'+j">
      <f-line x1="0" y1="0" :x2="polarx(360/p.s, p.r)" :y2="polary(360/p.s, p.r)" strokeWidth="2" :stroke="color('darkgray')" :rotation="(360/p.s)*j" />
    </f-group> -->
    <f-arc 
      :start-angle="solvePolygon(p.s, p.r).w * 0.5" 
      :end-angle="solvePolygon(p.s, p.r).w * -0.5" 
      :fill="color('red')" opacity="0.7"
      strokeWidth="1" r="0.3" inner-radius="0" rotation="90" />
    <f-arc 
      :start-angle="0" 
      :end-angle="solvePolygon(p.s, p.r).interior" 
      :fill="color('green')" opacity="0.7"
      strokeWidth="1" r="0.3" inner-radius="0" rotation="180"
      :position=" `${polarx(360/p.s, p.r)} ${polary(360/p.s, p.r)}` "
       />
    <f-line x1="0" y1="0" 
      :x2="polarx(solvePolygon(p.s, p.r).w, solvePolygon(p.s, p.r).h )" 
      :y2="polary(solvePolygon(p.s, p.r).w, solvePolygon(p.s, p.r).h )" 
      strokeWidth="1" :stroke="color('darkgray')" stroke-dasharray="0.03" :rotation="solvePolygon(p.s, p.r).w * 0.5" />
    <f-regularpolygon :count="p.s" :r="p.r" :stroke="color('gray')" />
    <f-polygon :points=" '0 0,' + polarx(0, p.r) + ' ' + polary(0, p.r) + ', ' + polarx(360/p.s, p.r) + ' ' + polary(360/p.s, p.r)" :rotation="solvePolygon(p.s, p.r).w" />
    <f-text position="-0.15 0" :fill="color('red')">w</f-text>
    <f-text position="1.45 0" :fill="color('blue')">s</f-text>
    <f-text position="0.8 0.1" :fill="color('orange')">a</f-text>
    <f-text position="0.5 0.45" :fill="color('purple')">r</f-text>
    <f-text position="1.42 -0.9" :fill="color('green')">i</f-text>
</f-scene>

-




<f-scene3 isometric class="fullWidthScene">
  <f-group3 :rotation=" '10 ' + get('cubeRot', 12) + ' 0' " :scale="1.5">
    <f-hedron3 
      :count="4" 
      :height="0.5" 
      rotation="-90 0 45" 
      scale="0.68 0.68 1" 
      position="0 -0.5 0"
      :shading="false"
      :fill="color('yellow')"
    />
    <f-polyhedron3 hedron="Cube" :r="1" opacity="0.1" :shading="true"  />
    <!-- <f-line3 points=" -0.5 -0.5 0.5, 0 0 0 " :stroke="color('black')" />
    <f-line3 points=" 0.5 -0.5 0.5, 0 0 0 " :stroke="color('black')" />
    <f-line3 points=" -0.5 -0.5 -0.5, 0 0 0 " :stroke="color('black')" />
    <f-line3 points=" 0.5 -0.5 -0.5, 0 0 0 " :stroke="color('black')" /> -->
  </f-group3>
  <!-- <Hedron hedron="Dodecahedron" /> -->
</f-scene3>

<f-slider set="cubeRot" from="0" to="360" value="30" step="0.1" />

-

<f-scene3 class="fullWidthScene" isometric >
    <!-- <f-rotation3> -->
    <!-- <f-group3 :rotation=" '0 ' + get('cubeRot', 0) + ' 0' "> -->
    <f-group3 :rotation=" '30 ' + get('cubeRot', 0) + ' 0' " scale="0.8">
    <!-- <f-polyhedron3 hedron="Cube" :r="1" wireframe :scale="2" opacity="0" :fill="color('yellow')" :shading="true"  /> -->
      <!-- first pair  -->
      <f-group3>
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('blue')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
      <!-- second pair  -->
      <f-group3 rotation="90 0 0">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('green')"
              :shading="false"
            />
        </f-group3>
      </f-group3>
       <!-- third pair  -->
      <f-group3 rotation="0 90 0">
        <f-group3 rotation="0 0 45" :position="'0 0 ' + -get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1" 
              :r="1.4142"
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
        <f-group3 rotation="0 180 45" :position="'0 0 ' + get('pyraOffset', 0) + ' '">
          <f-hedron3 
              :count="4" 
              :height="1" 
              position="0 0 -1"
              :r="1.4142" 
              :strokeWidth="0"
              :fill="color('yellow')"
              :opacity="1"
              :shading="false"
            />
        </f-group3>
      </f-group3>
    </f-group3>
  <!-- </f-rotation3> -->
</f-scene3>

<f-slider set="pyraOffset" v-on:value=" v => { set('updateMe', v) }" to="1" step="0.01" />

-

## H'r

<!-- <f-scene>
  <defs>
    <marker id="arrowhead" viewBox="-0.5 -0.5 1 1" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <circle r="1" fill="red" />
    </marker>
  </defs>

  <f-box r="4" />

  <polyline points="0,0 0,1.5 1.5,1.5 1.5,-0.5 -0.5,-0.5 -0.5,-1 0,-1" fill="none" stroke="#000" stroke-width="0.1" marker-end="url(#arrowhead)" marker-start="url(#arrowhead)" marker-mid="url(#arrowhead)" />

  <use xlink:href="./components/SVG-utils.svg#arrowhead" />
</f-scene> -->


<f-scene grid responsive>
  <defs>
    <marker id="arrow" markerWidth="6" markerHeight="6" refX="0" refY="3" orient="auto" markerUnits="strokeWidth">
      <path d="M0,0 L0,6 L6,3 z" :fill="color('red')" />
    </marker>
    <marker id="circle" markerWidth="6" markerHeight="6" refX="3" refY="3" markerUnits="strokeWidth">
      <circle cx="3" cy="3" r="3" stroke="none" :fill="color('red')" />
    </marker>
  </defs>
  <f-line points="0 0, 0 1.5, -1 0.5, 0 -1.5, 1 0, 1 0.5" marker-end="url(#arrow)" marker-start="url(#circle)" marker-mid="url(#circle)" />
</f-scene>



---








<f-slider from="0" to="1" set="pHeight" value="1"  />
{{ get('pHeight', 1) }}
<f-scene3 isometric class="fullWidthScene crisp">
  <f-group3 rotation="-70 0 30" :scale="{ x:1, y:1, z:get('pHeight',1)}">
    <f-regularpolygon3 :count="3" stroke :fill="color('blue')" />
    <f-group3 v-for="(t,i) in 3" :key="'tr'+i" :rotation=" {z:360/3*i} " >
      <f-triangle3 :points="[ [0,0,get('pHeight', 1)], [polarx(0, 1),polary(0, 1),0], [polarx(360/3, 1),polary(360/3, 1),0] ]" opacity="0.5" />
    </f-group3>
  </f-group3>
</f-scene3>

-

<f-scene3 isometric class="fullWidthScene crisp" static  >
  <f-group3 rotation="-70 0 30" :scale="{ x:1, y:1, z:get('pHeight',1)}">
    <f-regularpolygon3 :count="5" stroke :fill="color('green')" />
    <f-group3 v-for="(t,i) in 5" :key="'tr'+i" :rotation=" {z:360/5*i} " >
      <f-triangle3 :points="[ [0,0,get('pHeight', 1)], [polarx(0, 1),polary(0, 1),0], [polarx(360/5, 1),polary(360/5, 1),0] ]" opacity="0.6" />
    </f-group3>
  </f-group3>
  <f-group3 rotation="-70 0 30" :scale="{ x:1, y:1, z:-get('pHeight',1)}">
    <f-regularpolygon3 :count="5" stroke :fill="color('green')" />
    <f-group3 v-for="(t,i) in 5" :key="'tr'+i" :rotation=" {z:360/5*i} " >
      <f-triangle3 :points="[ [0,0,get('pHeight', 1)], [polarx(0, 1),polary(0, 1),0], [polarx(360/5, 1),polary(360/5, 1),0] ]" opacity="0.6" />
    </f-group3>
  </f-group3>
</f-scene3>
