import { Vue, components, Css } from "https://designstem.github.io/fachwerk/fachwerk.js";

for (const name in components) {
  Vue.component(name, components[name])
}

export default{
  props: {
    imageUrl: {
      type: String,
      required: false,
      default: 'images/testtable.png'
    }
  },
  mixins: [Css],
  data() {
    return {
      blindnessTypes: {
        'Normal':         [1,0,0,0,0,              0,1,0,0,0,              0,0,1,0,0,              0,0,0,1,0,  0,0,0,0,1],
        'Protanopia':     [0.567,0.433,0,0,0,      0.558,0.442,0,0,0,      0,0.242,0.758,0,0,      0,0,0,1,0,  0,0,0,0,1],
        'Protanomaly':    [0.817,0.183,0,0,0,      0.333,0.667,0,0,0,      0,0.125,0.875,0,0,      0,0,0,1,0,  0,0,0,0,1],
        'Deuteranopia':   [0.625,0.375,0,0,0,      0.7,0.3,0,0,0,          0,0.3,0.7,0,0,          0,0,0,1,0,  0,0,0,0,1],
        'Deuteranomaly':  [0.8,0.2,0,0,0,          0.258,0.742,0,0,0,      0,0.142,0.858,0,0,      0,0,0,1,0,  0,0,0,0,1],
        'Tritanopia':     [0.95,0.05,0,0,0,        0,0.433,0.567,0,0,      0,0.475,0.525,0,0,      0,0,0,1,0,  0,0,0,0,1],
        'Tritanomaly':    [0.967,0.033,0,0,0,      0,0.733,0.267,0,0,      0,0.183,0.817,0,0,      0,0,0,1,0,  0,0,0,0,1],
        'Achromatopsia':  [0.299,0.587,0.114,0,0,  0.299,0.587,0.114,0,0,  0.299,0.587,0.114,0,0,  0,0,0,1,0,  0,0,0,0,1],
        'Achromatomaly':  [0.618,0.320,0.062,0,0,  0.163,0.775,0.062,0,0,  0.163,0.320,0.516,0,    0,0,0,0,1,  0,0,0,0,0]
      },
      activeType: "Choose one above",
      imgStatus : false,
      imgWidth : 320,
      imgHeight: 240,
      inputImage: {
        canvas: null,
        ctx: null,
        imageData: null,
        data: null,
      },
      outputImage: {
        canvas: null,
        ctx: null,
        imageData: null,
        data: null,
      }
    }
  },
  methods: {
    //...utils,
    initImage(img){

      let scale = 1;
      const maxSize = 800;

      if(img.width > maxSize){
        scale = maxSize/img.width;
      }

      

      this.imgWidth = img.width * scale;
      this.imgHeight = img.height * scale;
      this.inputImage.canvas.width = this.imgWidth;
      this.outputImage.canvas.width = this.imgWidth;
      this.inputImage.canvas.height = this.imgHeight;
      this.outputImage.canvas.height = this.imgHeight;
  
      this.inputImage.ctx.drawImage(img, 0, 0, this.imgWidth, this.imgHeight);
      this.outputImage.ctx.drawImage(img, 0, 0, this.imgWidth, this.imgHeight);
      img.style.display = 'none';
      this.inputImage.imageData = this.inputImage.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
      this.inputImage.data = this.inputImage.imageData.data;
      this.outputImage.imageData = this.outputImage.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
      this.outputImage.data = this.outputImage.imageData.data;
      
      console.log("scale " + scale + " img.width " + img.width + " imgWidth " + this.imgWidth);

      const _this = this;
      setTimeout(function(){
        _this.inputImage.ctx.putImageData(_this.inputImage.imageData, 0, 0);
        _this.outputImage.ctx.putImageData(_this.outputImage.imageData, 0, 0);
        _this.imgStatus = false;
        _this.activeType = "Choose from above...";
        //console.log("timeout");
      }, 500)
        
    },
    changeImage(e){
      const reader = new FileReader();
      const _this = this;
      reader.onload = function(event){
        _this.activeType = "";
        _this.imgStatus = "Loading image..";
        const img = new Image();
        img.src = event.target.result;
        img.onload = function(){
          _this.initImage(this);
          //console.log("user image loaded");
          //_this.inputImage.ctx.drawImage(img,0,0);
        }
      }
      reader.readAsDataURL(e.target.files[0]);     
    },
    changeColors(b, k) {
      this.activeType = k;
      for (let i = 0; i < this.inputImage.data.length; i += 4) {
        let newCol = this.ColorMatrix({ R:this.inputImage.data[i], G:this.inputImage.data[i+1], B:this.inputImage.data[i+2], A:this.inputImage.data[i+3]} , b );
      
        this.outputImage.data[i] = newCol.R;
        this.outputImage.data[i+1] = newCol.G;
        this.outputImage.data[i+2] = newCol.B
        this.outputImage.data[i+3] = newCol.A;
      }


      this.inputImage.ctx.putImageData(this.inputImage.imageData, 0, 0);
      this.outputImage.ctx.putImageData(this.outputImage.imageData, 0, 0);
      this.imgStatus = false;
    },
    ColorMatrix(o,m) { 
      let r=((o.R*m[0])+(o.G*m[1])+(o.B*m[2])+(o.A*m[3])+m[4]);
      let g=((o.R*m[5])+(o.G*m[6])+(o.B*m[7])+(o.A*m[8])+m[9]);
      let b=((o.R*m[10])+(o.G*m[11])+(o.B*m[12])+(o.A*m[13])+m[14]);
      let a=((o.R*m[15])+(o.G*m[16])+(o.B*m[17])+(o.A*m[18])+m[19]);
      return({'R':this.fu(r), 'G':this.fu(g), 'B':this.fu(b), 'A':this.fu(a)});
    },
    fu(n) { 
      let nn = Math.round(n); 
      return(nn<0?0:(nn<255?nn:255)); 
    }
  },
  mounted() {
    this.inputImage.canvas = document.getElementById('canvas-input');
    this.outputImage.canvas = document.getElementById('canvas-output');
    this.inputImage.ctx = this.inputImage.canvas.getContext('2d');
    this.outputImage.ctx = this.outputImage.canvas.getContext('2d');
    let img = new Image();
    //img.src = 'book-cover.jpg';
    //img.src = 'images/testtable.png';
    img.src = this.imageUrl;
    const _this = this;
    img.onload = function() {
      //console.log("mounted image loaded");
      _this.imgStatus = "Preparing image";
      _this.initImage(this);
    };
  },
  
  template: `
  <div>
       
    <div style="display:flex; justify-content:space-between; align-items:stretch;">
      <div class="cbs-card">
        <h5>Protanomaly / Protanopia:<br />weak / missing</h5>
        <h2 style="color:var(--red);">RED</h2>
        Simulate:
        <br />
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Protanomaly'], 'Protanomaly');">Weak red (Protanomaly)</button>
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Protanopia'], 'Protanopia')">Missing red (Protanopia)</button>
      </div>


      <div class="cbs-card">
        <h5>Deuteranomaly / Deuteranopia:<br />weak / missing</h5>
        <h2 style="color:var(--green);">GREEN</h2>
        Simulate:
        <br />
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Deuteranomaly'], 'Deuteranomaly')">Weak green (Deuteranomaly)</button>
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Deuteranopia'], 'Deuteranopia')">Missing green (Deuteranopia)</button>
      </div>

      <div class="cbs-card">
        <h5>Tritanomaly / Tritanopia:<br />weak / missing</h5>
        <h2 style="color:var(--blue);">BLUE</h2>
        Simulate:
        <br />
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Tritanomaly'], 'Tritanomaly')">Weak blue (Tritanomaly)</button>
        <button class="button tertiary" @mousedown="imgStatus='Working...'" @click="changeColors(blindnessTypes['Tritanopia'], 'Tritanopia')">Missing blue (Tritanopia)</button>
      </div>
    </div>


    <div class="cbs">
     <div class="cbs-canvas">
        <canvas id="canvas-output" :width="imgWidth" :height="imgHeight" style="width:100%;height:auto;"></canvas>
        <p class="cbs-canvas__info">Color blindness: {{activeType}}</p>
        <p class="cbs-canvas__status" v-if="imgStatus != false">{{ imgStatus }}</p>
      </div>
      <div class="cbs-canvas">
        <canvas id="canvas-input" :width="imgWidth" :height="imgHeight" style="width:100%;height:auto;"></canvas>
        <p class="cbs-canvas__info">Normal vision</p>
      </div>
    </div>

    <f-inline>
      <h4>Try it with your own file: </h4><input type="file" @change="changeImage">
    </f-inline>
    <f-hr  style="margin: 5vh 0 7vh 0;" />
  </div>
  `,
  css: `
    .cbs {
      display:flex; justify-content:space-around; padding: 3vmin 0;
      flex-wrap: wrap; 
    }
    .cbs-card {
      text-align: center;
      height: 100%;
    }
    .cbs-card h5 {
      margin:0;
    }
    .cbs-card button {
      margin-bottom:0.3vh;
    }
    .cbs-canvas {
      flex:0 1 100vw; position: relative;
    }
    .cbs-canvas__info {
      position: absolute; 
      top:0; 
      left:0; 
      background:var(--darkestgray); 
      color:var(--white); 
      padding:0 var(--base);
      font-size:  var(--base2);
    }
    .cbs-canvas__status {
      position: absolute; 
      top:50%; 
      left:0; 
      z-iindex: 100;
      background:var(--darkestgray); 
      color:var(--white); 
      padding:0 var(--base);
      font-size:  var(--base2);
    }

    input[type=file]::-webkit-file-upload-button {
      padding: calc(var(--base) * 1.5) calc(var(--base) * 2);
      display: inline-flex;
      border-radius: var(--border-radius);
      color: var(--white);
      font-weight: bold;
      cursor: pointer;
      border: none;
      background: var(--purple);
    }

    @media (min-width: 1024px) { 
      .cbs {
        flex-direction: row;
        flex-wrap: nowrap; 
        justify-content:space-around; 
        padding: 3vmin 0; 
      }
    }
  `
};
