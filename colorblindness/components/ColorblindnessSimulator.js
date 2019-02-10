import { Vue, components, utils } from "https://designstem.github.io/fachwerk/fachwerk.js";

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
  data() {
    return {
        blindnessTypes: {
            'Normal':         [1,0,0,0,0, 0,1,0,0,0, 0,0,1,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Protanopia':     [0.567,0.433,0,0,0, 0.558,0.442,0,0,0, 0,0.242,0.758,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Protanomaly':    [0.817,0.183,0,0,0, 0.333,0.667,0,0,0, 0,0.125,0.875,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Deuteranopia':   [0.625,0.375,0,0,0, 0.7,0.3,0,0,0, 0,0.3,0.7,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Deuteranomaly':  [0.8,0.2,0,0,0, 0.258,0.742,0,0,0, 0,0.142,0.858,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Tritanopia':     [0.95,0.05,0,0,0, 0,0.433,0.567,0,0, 0,0.475,0.525,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Tritanomaly':    [0.967,0.033,0,0,0, 0,0.733,0.267,0,0, 0,0.183,0.817,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Achromatopsia':  [0.299,0.587,0.114,0,0, 0.299,0.587,0.114,0,0, 0.299,0.587,0.114,0,0, 0,0,0,1,0, 0,0,0,0,1],
            'Achromatomaly':  [0.618,0.320,0.062,0,0, 0.163,0.775,0.062,0,0, 0.163,0.320,0.516,0,0,0,0,0,1,0,0,0,0,0]
          },
          activeType: "Choose one above",
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
  computed: {
    
  },
  methods: {
    ...utils,
    initImage(img){

        this.imgWidth = img.width;
        this.imgHeight = img.height;
        this.inputImage.canvas.width = img.width;
        this.outputImage.canvas.width = img.width;
        this.inputImage.canvas.height = img.height;
        this.outputImage.canvas.height = img.height;
  
        this.inputImage.ctx.drawImage(img, 0, 0, img.width, img.height);
        //this.outputImage.ctx.drawImage(img, 0, 0, img.width, img.height);
        img.style.display = 'none';
        this.inputImage.imageData = this.inputImage.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
        this.inputImage.data = this.inputImage.imageData.data;
        this.outputImage.imageData = this.outputImage.ctx.getImageData(0, 0, this.imgWidth, this.imgHeight);
        this.outputImage.data = this.outputImage.imageData.data;
        
        var _this = this;
        setTimeout(function(){
          _this.inputImage.ctx.putImageData(_this.inputImage.imageData, 0, 0);
          _this.outputImage.ctx.putImageData(_this.outputImage.imageData, 0, 0);
          //console.log("timeout");
        }, 500)
        
      },
      changeImage(e){
        var reader = new FileReader();
        var _this = this;
        reader.onload = function(event){
          var img = new Image();
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
        for (var i = 0; i < this.inputImage.data.length; i += 4) {
          var newCol = this.ColorMatrix({ R:this.inputImage.data[i], G:this.inputImage.data[i+1], B:this.inputImage.data[i+2], A:this.inputImage.data[i+3]} , b );
      
          this.outputImage.data[i] = newCol.R;
          this.outputImage.data[i+1] = newCol.G;
          this.outputImage.data[i+2] = newCol.B
          this.outputImage.data[i+3] = newCol.A;
        }
        this.inputImage.ctx.putImageData(this.inputImage.imageData, 0, 0);
        this.outputImage.ctx.putImageData(this.outputImage.imageData, 0, 0);
  
      },
      ColorMatrix(o,m) { 
        var r=((o.R*m[0])+(o.G*m[1])+(o.B*m[2])+(o.A*m[3])+m[4]);
        var g=((o.R*m[5])+(o.G*m[6])+(o.B*m[7])+(o.A*m[8])+m[9]);
        var b=((o.R*m[10])+(o.G*m[11])+(o.B*m[12])+(o.A*m[13])+m[14]);
        var a=((o.R*m[15])+(o.G*m[16])+(o.B*m[17])+(o.A*m[18])+m[19]);
        return({'R':this.fu(r), 'G':this.fu(g), 'B':this.fu(b), 'A':this.fu(a)});
      },
      fu(n) { 
        var nn = Math.round(n); 
        return(nn<0?0:(nn<255?nn:255)); 
      }
  },
  mounted() {
    this.inputImage.canvas = document.getElementById('canvas-input');
    this.outputImage.canvas = document.getElementById('canvas-output');
    this.inputImage.ctx = this.inputImage.canvas.getContext('2d');
    this.outputImage.ctx = this.outputImage.canvas.getContext('2d');
    var img = new Image();
    //img.src = 'book-cover.jpg';
    //img.src = 'images/testtable.png';
    img.src = this.imageUrl;
    var _this = this;
    img.onload = function() {
      //console.log("mounted image loaded");
      _this.initImage(this);
    };
  },
  
  
  
  // data: () => ({
  //   letter: "g",
  //   step: 0.5,
  //   rotation: 0,
  //   scale: 1,
  //   opacity:1,
  //   presets: ['§', '∞', 'ῳ', 'ڮ', 'ﮔ', 'ଙ', 'ณ', 'ድ', 'ᚍ', 'ᚡ', 'ㄔ', 'ꂊ', 'ꁮ', '⡺', '⧰', '㌽', '𝌘', '☮', '✮', '☣', '░', '❅', '💩', 'Letterepeater', '. . .', 'Designˢᵀᴱᴹ'],
  // }),
  // methods: { 
  //   ...utils
  // },
  template: `
  <div>
    <div class="buttons" style="justify-content:center; padding-top:3vmin;">  
      <div 
        v-for="(type, key) in blindnessTypes"
        v-on:click="changeColors(blindnessTypes[key], key)"
        class="button_tertiary" 
        >
        {{key}}
      </div>
    </div>

    <div style="
      display:flex; justify-content:space-around; padding: 3vmin;
    ">
      <div style="flex:0 1 50vmin;">
        <h4>Normal vision</h4>
        <canvas id="canvas-input" :width="imgWidth" :height="imgHeight" style="width:100%;height:auto;"></canvas>
      </div>
      <div style="flex:0 1 50vmin;">
        <h4>Color blindness: {{activeType}}</h4>
        <canvas id="canvas-output" :width="imgWidth" :height="imgHeight" style="width:100%;height:auto;"></canvas>
      </div>
    </div>
    <f-hr />
    <input type="file" @change="changeImage" class="button_secondary">
  </div>
  `
};
