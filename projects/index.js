import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

const FLogo = {
  template: `
  <big><big><big>
    <h1>
      <span style="color: var(--red); letter-spacing: -0.06ch;">Design</span><sup style="letter-spacing: -0.05ch; font-size: 0.5em">STEM</sup>
    </h1>  
  </big></big></big>
  `
};

const FGrid = {
  props: {
    cols: { default: "auto", type: [Number, String] },
    rows: { default: "auto", type: [Number, String] },
    gap: { default: "var(--base2)", type: [Number, String] }
  },
  computed: {
    style() {
      return {
        "--cols": this.cols,
        "--rows": this.rows,
        "--gap": this.gap
      };
    }
  },
  template: `
  <div class="grid" :style="style">
    <slot />
  </div>
  `
};

const FImageCard = {
  props: {
    src: { default: "", type: String, description: "Image URL" }
  },
  template: `
  <div 
    :style="{ 
      background: 'url(' + src + ')',
      backgroundSize: 'cover', 
      backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat',
      height: '100%',
      minHeight: 'calc(var(--base) * 33)',
      position: 'relative',
    }"
    >
      <f-theme theme="dark" :style="{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        padding: 'var(--base2)',
        backgroundColor: 'rgba(0,0,0,0.65)',
        boxShadow: 'inset 0 0 30px 10px rgba(0,0,0,0.25)'
      }">
        <slot />
    </f-theme>
    </div>
  `
};

fachwerk({
  title: "Projects",
  components: { FLogo, FGrid, FImageCard },
  editor: "none",
  type: "document",
  menu: false,
  pager: false,
  style: { "--image-min-height": "100px", "--content-padding": "var(--base8)" }
});
