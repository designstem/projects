export default {
  template: `
    <div
      style="
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: -1;
        background: url(images/model2.jpg) 85% center / cover no-repeat;
      "
    >
    <div
      class="blink"
      style="
        background: url(images/snake_empty.png) 85% center / cover no-repeat;
        width: 100%;
        height: 100%;
      "
    ></div>
    </div>
  `,
  css: `
    .blink {
      animation: pulse 5s infinite;
      background-color: yellow;
    }
    
    @keyframes pulse {
      0% {
        opacity: .3;
      }
      100% {
        opacity: 1
      }
    }
  `
}