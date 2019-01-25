# RGB Mixing	
This page lets you play with the RGB scheme, combining red, green, and blue light to make any color.
The sliders control the red green and blue lights, each ranging from 0 (off) to 255 (maximum). 

## Pure Red Light
<f-artboard grid="true" :width="600" :height="200">
  <f-circle
    v-for="x in range(0, 255, 25)"
    :x="100+1.5*x"
    :y="100"
    :r="50"
    :stroke-width="0"
    :fill="rgb(x,0,0)"
    :opacity="1"
  />
</f-artboard>

<!--f-animation-data :from="0" :to="10" :duration="5000">
  <f-scene slot-scope="data" grid="true" :width="600" :height="300">
    <f-circle 
    	      :x="-2.5+data.value/2"
	      :fill="rgb(25*Math.floor(data.value),0,0)">
  </f-scene>
</f-animation-data-->



<f-slider-data :sliders="[
   { title: 'Red', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(data.value[0],0,0)"/>
  </f-scene>
</f-slider-data>

## Pure Green Light

<f-artboard grid="true" :width="600" :height="200">
  <f-circle
    v-for="x in range(0, 255, 10)"
    :x="100+1.5*x"
    :y="100"
    :r="50"
    :stroke-width="0"
    :fill="rgb(0,x,0)"
    :opacity="1"
  />
</f-artboard>

<f-slider-data :sliders="[
   { title: 'Green', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(0,data.value[0],0)"/>
  </f-scene>
</f-slider-data>

## Pure Blue Light

<f-artboard grid="true" :width="600" :height="200">
  <f-circle
    v-for="x in range(0, 255, 10)"
    :x="100+1.5*x"
    :y="100"
    :r="50"
    :stroke-width="0"
    :fill="rgb(0,0,x)"
    :opacity="1"
  />
</f-artboard>

<f-slider-data :sliders="[
   { title: 'Blue', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(0,0,data.value[0])"/>
  </f-scene>
</f-slider-data>


## Grey Light
The red, green and blue lights have equal value.

<f-artboard grid="true" :width="600" :height="200">
  <f-circle
    v-for="x in range(0, 255, 10)"
    :x="100+1.5*x"
    :y="100"
    :r="50"
    :stroke-width="0"
    :fill="rgb(x,x,x)"
    :opacity="1"
  />
</f-artboard>

<f-slider-data :sliders="[
   { title: 'Gray', from: 0, to: 255, value: 150}
   ]">	    
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(data.value[0],data.value[0],data.value[0])"/>
  </f-scene>

</f-slider-data>

## Full fight spectrum 

<f-rgb-data red="100" green="100" blue="100">
  <f-scene slot-scope="data">
    <f-circle :fill="rgb(...data.value)" />
  </f-scene>
</f-rgb-data>


