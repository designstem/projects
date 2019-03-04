import { utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

export default {
  template: `
    <f-aframe>
      <a-entity position="0 2 -5" scale="2 3 0">
        <a-image src="./images/bill.jpg" />
        <a-light position="0 0 0" color="rgb(255,255,0)" />
      </a-entity>
    </f-aframe>
  `
}