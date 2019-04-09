import { Css } from "https://designstem.github.io/fachwerk/fachwerk.js";
// import { Vue, components, Css } from "http://127.0.0.1:8887/fachwerk.js";

// for (const name in components) {
//   Vue.component(name, components[name])
// }

export default{
  props: {
    juxtId: {
        type: String,
        required: false,
        default: 'juxt-canvas'
    },
    imageUrl: {
      type: String,
      required: false,
      default: 'images/testtable.png'
    },
    cbType: {
        type: String,
        required: false,
        default: 'Protanopia'
    },
    revealed: {
        type: Number,
        required: false,
        default: 50
    },
    upload: {
      type: Boolean,
      required: false,
      default: true
  },
    locked: {
        type: Boolean,
        required: false,
        default: false
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
      imgStatus : "loading...",

      imgWidth : 600,
      imgHeight: 600,
      mouseDown: false,
      
      juxtPos: 0,

      juxt: {
         canvas: null,
         ctx: null 
      },
      normalImage: {
        imageData: null,
        data: null,
      },
      cbImage: {
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
      this.juxt.canvas.width = this.imgWidth;
      this.juxt.canvas.height = this.imgHeight;
        
      this.juxt.ctx.drawImage(img, 0, 0, this.imgWidth, this.imgHeight);
      img.style.display = 'none';
      
      this.normalImage.imageData = this.juxt.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
      this.normalImage.data = this.normalImage.imageData.data;
      this.cbImage.imageData = this.juxt.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
      this.cbImage.data = this.cbImage.imageData.data;

      this.changeColors(this.blindnessTypes[this.cbType], this.cbType);
      //console.log("scale " + scale + " img.width " + img.width + " imgWidth " + this.imgWidth);

      

      const _this = this;
      setTimeout(function(){
        //_this.juxt.ctx.putImageData(_this.cbImage.imageData, 0, 0);
        _this.drawData2Canvas( _this.juxtPos );
      }, 500)
        
    },
    mouseDrag(e){
        if(!this.mouseDown){
            return;
        } else {
            if(this.locked){
                return;
            } else {
                let rect = this.juxt.canvas.getBoundingClientRect();
                let xPos = (e.clientX-rect.left)*(this.imgWidth/rect.width);
                this.drawData2Canvas(xPos);
            }
        }
    },
    mouseClick(e){
        if(this.locked){
            return;
        } else {
            let rect = this.juxt.canvas.getBoundingClientRect();
            let xPos = (e.clientX-rect.left)*(this.imgWidth/rect.width);
            this.drawData2Canvas(xPos);
        }
    },
    drawData2Canvas(xPos){
        this.juxtPos = xPos;
        // drawing images
        this.juxt.ctx.putImageData(this.normalImage.imageData,  0, 0,    0, 0,      xPos, this.imgHeight);
        this.juxt.ctx.putImageData(this.cbImage.imageData,      0, 0,    xPos, 0,   this.imgWidth, this.imgHeight);
        
        // thin separator line
        this.juxt.ctx.lineWidth = 1;
        this.juxt.ctx.strokeStyle = "hsla(0, 0%, 0%, 0.1)";
        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(xPos, 0);
        this.juxt.ctx.lineTo(xPos, this.imgHeight);
        this.juxt.ctx.closePath();
        this.juxt.ctx.stroke();

        // 'padding' lines top and bottom
        this.juxt.ctx.lineWidth = 8;
        this.juxt.ctx.strokeStyle = "hsla(0, 0%, 100%, 1)";

        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(0, 4);
        this.juxt.ctx.lineTo(this.imgWidth, 4);
        this.juxt.ctx.closePath();
        this.juxt.ctx.stroke();
        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(0, this.imgHeight-4);
        this.juxt.ctx.lineTo(this.imgWidth, this.imgHeight-4);
        this.juxt.ctx.closePath();
        this.juxt.ctx.stroke();


        // red triangles top and bottom
        this.juxt.ctx.save();

        this.juxt.ctx.fillStyle = "#ff0000";
        this.juxt.ctx.strokeStyle = "hsla(0, 0%, 100%, 1)";
        this.juxt.ctx.shadowColor = "hsla(0, 0%, 0%, 0.5)";
        this.juxt.ctx.shadowBlur = 8;

        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(xPos, 40);
        this.juxt.ctx.lineTo(xPos+20, 8);
        this.juxt.ctx.lineTo(xPos-20, 8);
        this.juxt.ctx.closePath();
        this.juxt.ctx.fill();
        this.juxt.ctx.stroke();

        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(xPos, this.imgHeight - 40);
        this.juxt.ctx.lineTo(xPos+20, this.imgHeight - 8);
        this.juxt.ctx.lineTo(xPos-20, this.imgHeight - 8);
        this.juxt.ctx.closePath();
        this.juxt.ctx.fill();
        this.juxt.ctx.stroke();

        this.juxt.ctx.restore();
        
    },
    changeImage(e){
      const reader = new FileReader();
      const _this = this;
      reader.onload = function(event){
        _this.activeType = "";
        _this.imgStatus = "Loading...";
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
      for (let i = 0; i < this.normalImage.data.length; i += 4) {
        let newCol = this.ColorMatrix({ R:this.normalImage.data[i], G:this.normalImage.data[i+1], B:this.normalImage.data[i+2], A:this.normalImage.data[i+3]} , b );
      
        this.cbImage.data[i] = newCol.R;
        this.cbImage.data[i+1] = newCol.G;
        this.cbImage.data[i+2] = newCol.B
        this.cbImage.data[i+3] = newCol.A;
      }

      this.imgStatus = this.activeType;
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
    },
    revealed2Width(pos){
        return this.imgWidth/100*pos;
    }
  },
  mounted() {
    this.juxtPos = this.revealed2Width(this.revealed);
    
    this.juxt.canvas = document.getElementById( this.juxtId );
    this.juxt.ctx = this.juxt.canvas.getContext('2d');
    let img = new Image();

    img.src = this.imageUrl;
    const _this = this;
    img.onload = function() {
      //console.log("mounted image loaded");
      _this.initImage(this);
    };
  },
  watch: { 
    revealed(newVal) { 
        this.juxtPos = this.revealed2Width(newVal);
        this.drawData2Canvas(this.juxtPos);
    },
    cbType(newVal) { 
        this.changeColors(this.blindnessTypes[newVal], newVal);
        this.drawData2Canvas(this.juxtPos);
    }
},
  
  template: `
  <div>
    <!-- {{revealed}} - {{juxtPos}} -->
    <div class="cb-juxt" >
        <canvas :id="juxtId" :width="imgWidth" :height="imgHeight" 
            @mousedown="mouseDown = true"
            @mousemove="mouseDrag"
            @mouseup="mouseDown = false"
            @click="mouseClick"
            style="width:100%; height: auto;" :style="[locked ? {'cursor':'default'} : {'cursor':'col-resize'}]"
            ></canvas>
        <!-- <p class="cbs-canvas__info">{{activeType}}</p> -->
        <p class="cbs-canvas__status" v-if="imgStatus != false">{{ imgStatus }}</p>
    </div>


    <f-inline v-if="upload">
      <h5>Try it with your own image: </h5><input type="file" @change="changeImage">
    </f-inline>
    
  </div>
  `,
  css: `
    .cb-juxt {
      padding-bottom: var(--base2); 
      position: relative;
    }
    
    .cbs-canvas__info {
      position: absolute; 
      top:100px; 
      left:0; 
      z-index: 99;
      background:var(--darkestgray); 
      color:var(--white); 
      padding:var(--base);
    }
    .cbs-canvas__status {
      position: absolute; 
      bottom:40px; 
      right:20px; 
      z-index: 100;
      font-size: var(--base2);
      background:var(--darkestgray); 
      color:var(--white); 
      padding:0 var(--base);
    }
    input[type=file]::-webkit-file-upload-button {
      padding: calc(var(--base) * 1.5) calc(var(--base) * 2);
      display: inline-flex;
      border-radius: var(--border-radius);
      color: var(--white);
      font-weight: bold;
      cursor: pointer;
      border: none;
      background: var(--darkestgray);
    }
  `
};
