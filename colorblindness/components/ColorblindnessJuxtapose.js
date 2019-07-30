import { Css, utils, colorBlind } from "https://designstem.github.io/fachwerk/fachwerk.js";

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
      
      activeType: "Choose one above",
      imgStatus : "Loading...",

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
      },
      loader: true
    }
  },
  methods: {
    ...utils,
    initImage(img){
      
      this.showMessages("PROCESSING...");

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



      this.changeColorsProxy();
        
    },
    
    changeColorsProxy(){
      var _this = this;
      setTimeout(function(){
        _this.changeColors( _this.cbType.toLowerCase() );
        _this.drawData2Canvas( _this.juxtPos );
      }, 100);
    },
    changeColors(type) {
      this.activeType = type;
      
      console.time("processTime");
      // const bufferData = new Uint8ClampedArray(this.normalImage.data.length);
      let cb;

      for (let i = 0; i < this.normalImage.data.length; i += 4) {
        cb = this.colorblindRaw( 'rgb(' + this.normalImage.data[i] + ',' + this.normalImage.data[i+1] + ',' + this.normalImage.data[i+2] + ')', type );
        
        // bufferData[i]   = cb.R;
        // bufferData[i+1] = cb.G;
        // bufferData[i+2] = cb.B;
        // bufferData[i+3] = this.normalImage.data[i+3];
        
        this.cbImage.data[i] = cb.R;
        this.cbImage.data[i+1] = cb.G;
        this.cbImage.data[i+2] = cb.B;
        this.cbImage.data[i+3] = this.normalImage.data[i+3];
       }

      // this.cbImage.data.set(bufferData);
      console.timeEnd("processTime");
      
      this.imgStatus = this.activeType.toUpperCase();
    },
    drawData2Canvas(xPos){
      this.juxtPos = xPos;
      // drawing images
      this.juxt.ctx.putImageData(this.normalImage.imageData,  0, 0,    0, 0,      xPos, this.imgHeight);
      this.juxt.ctx.putImageData(this.cbImage.imageData,      0, 0,    xPos, 0,   this.imgWidth, this.imgHeight);
      
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

      if(!this.locked){
        // thin separator line
        this.juxt.ctx.lineWidth = 1;
        this.juxt.ctx.strokeStyle = "hsla(0, 0%, 0%, 0.1)";
        this.juxt.ctx.beginPath();
        this.juxt.ctx.moveTo(xPos, 0);
        this.juxt.ctx.lineTo(xPos, this.imgHeight);
        this.juxt.ctx.closePath();
        this.juxt.ctx.stroke();
        
        // red triangles top and bottom
        this.juxt.ctx.save();
        this.juxt.ctx.lineWidth = 8;
        this.juxt.ctx.fillStyle = "#ff0000";
        this.juxt.ctx.strokeStyle = "hsla(0, 0%, 100%, 1)";
        this.juxt.ctx.shadowColor = "hsla(0, 0%, 0%, 0.5)";
        this.juxt.ctx.shadowBlur = 5;

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
      }
    },
    changeImage(e){
      this.imgStatus = "Loading...";
      const reader = new FileReader();
      const _this = this;
      reader.onload = function(event){
        _this.activeType = "";
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
    revealed2Width(pos){
      return this.imgWidth/100*pos;
    },
    showMessages(message){
      this.imgStatus = message;
    },
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
    cbType: {
      // immediate: true,
      handler(newVal, oldVal) {
        this.imgStatus = "PROCESSING... " + newVal;

        this.juxt.ctx.fillStyle = "white";
        this.juxt.ctx.fillRect(0, 0, this.imgWidth, this.imgHeight);

        this.changeColorsProxy();
      },
    },
    // cbType(newVal) { 
    //     this.imgStatus = "Processing...";
    //     this.changeColors(newVal.toLowerCase());
    //     this.drawData2Canvas(this.juxtPos);
    // }
  },
  
  template: `
  <div>
    <!-- {{revealed}} - {{juxtPos}} -->
    <!-- <div v-if="loader">
      <Loader />
    </div> -->
    <div class="cb-juxt" >
        <canvas :id="juxtId" :width="imgWidth" :height="imgHeight" 
            @mousedown="mouseDown = true"
            @mousemove="mouseDrag"
            @mouseup="mouseDown = false"
            @click="mouseClick"
            style="width:100%; height: auto;" :style="[locked ? {'cursor':'default'} : {'cursor':'col-resize'}]"
            ></canvas>
        <!-- <p class="cbs-canvas__info">{{activeType}}</p> -->
        <p class="cbs-canvas__status">{{ imgStatus }}</p>
    </div>

    <f-inline v-if="upload" style="padding:var(--base); position:sticky; bottom:0px; background:var(--yellow); margin:0; justify-content: space-between;">
      <h5>Upload your own image: </h5><input type="file" @change="changeImage">
    </f-inline>
    
  </div>
  `,
  css: `
    .cb-juxt {
      position: relative;
    }
    .cbs-canvas__info {
      position: absolute; 
      top:100px; 
      left:0; 
      z-index: 99;
      background:var(--white); 
      color:var(--lightestgray); 
      padding:var(--base);
    }
    .cbs-canvas__status {
      position: absolute; 
      top:7px; 
      right:0; 
      z-index: 100;
      font-size: var(--base2);
      background:var(--lightergray); 
      color:var(--darkergray); 
      padding:0 var(--base);
    }
    input[type=file]::-webkit-file-upload-button {
      display: inline-block;
      padding: calc(var(--base)/2) var(--base) ;
      margin-right: var(--base);
      background: var(--white);
      border: 2px solid var(--darkgray);
      border-radius: var(--border-radius);
      //color: var(--darkgray);
      font-size: var(--base2);
      font-weight: normal;
      cursor: pointer;
      //border: none;
      //background: none;
    }
  `
};
