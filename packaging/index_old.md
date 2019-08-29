<f-slider set="r" from="0.8" to="1.2" value="1" step="0.05" />

<f-scene grid width="200" height="200">
	<f-grid-pattern step="1" scale="0.75">
	<f-box :r="get('r')" />
  </f-grid-pattern>
</f-scene>

<f-scene grid width="200" height="200">
	<f-brick-pattern step="1" scale="0.75">
	<f-box :r="get('r')" />
  </f-brick-pattern>
</f-scene>

<f-scene grid width="200" height="200">
	<f-hex-pattern step="1" scale="0.75">
	<f-line :points="polarpoints(6,get('r',0) / 2)" closed />
  </f-hex-pattern>
</f-scene>

<f-scene grid width="200" height="200">
	<f-hex-pattern step="1" scale="0.75">
	<f-circle :r="get('r',0) / 2" />
  </f-hex-pattern>
</f-scene>