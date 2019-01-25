export default {
  props: {
    kf1: {
      default: () => ({ x: 80, y: 370, name:"keyframe" })
    },
    kf2: {
      default: () => ({ x: 780, y: 370, name:"keyframe" })
    },
    progress: {
      default: () => ( 0.5 )
    },
    framecount: {
      default: () => ( 1 )
    },
    value: {}
  },
  data: () => ({
    size: 420,
    currentIndex: 0,
    kFrames: [],
    //frames: [],
    bPoints: [
      {x:590, y:240, name: "handle"},
      {x:650, y:200, name: "handle"},
      {x:730, y:70, name: "handle"},
      {x:790, y:40, name: "handle"}
    ],
    bRect: null,
    draggableType: null,
    draggablePoint: {dragging:false}
  }),
  created: function() {
    this.kFrames = this.computedKframes;
  },
  computed: {
    viewBox() {
      return `0 0 ${this.size*2} ${this.size}`;
    },
    computedKframes() {
      return Array.from([this.kf1, this.kf2]);
    },
    // coordinates() {
    //   return `${this.kFrames[0].x},${this.kFrames[0].y} ${this.kFrames[1].x},${this.kFrames[1].y} `;
    // },
    pathBezier() {
      return `
        M${this.bPoints[0].x} ${this.bPoints[0].y} 
        C${this.bPoints[1].x} ${this.bPoints[1].y} ${this.bPoints[2].x} ${this.bPoints[2].y} ${this.bPoints[3].x} ${this.bPoints[3].y}
      `;
    },
    pathHandler() {
      return `
        M${this.bPoints[0].x} ${this.bPoints[0].y} 
        L${this.bPoints[1].x} ${this.bPoints[1].y} 
        M${this.bPoints[2].x} ${this.bPoints[2].y} 
        L${this.bPoints[3].x} ${this.bPoints[3].y}
      `;
    }
  },
  methods: {
    onSceneMousemove(event) {
      const scene = this.$refs.scene.getBoundingClientRect();
      let rect;
      let leftPos;
      let topPos;

      if (this.currentIndex > -1 && this.draggablePoint.dragging) {
        try {
          switch(this.draggablePoint.name){
            case "handle":
              rect = this.$refs.bBox.getBoundingClientRect();
              console.log("dragging handle");
              leftPos =  event.clientX + this.bPoints[0].x - rect.left;
              topPos = event.clientY + this.bPoints[3].y - rect.top;
              if(leftPos > rect.left-scene.left && leftPos < rect.left+rect.width-scene.left){
                this.draggablePoint.x = leftPos;
                this.draggablePoint.y = topPos;
              }
              break;
            case "keyframe":
              rect = this.$refs.scene.getBoundingClientRect();
              console.log("dragging keyframe");
              leftPos = event.clientX - rect.left;
              topPos = event.clientY - rect.top - 30;
              this.draggablePoint.x = leftPos;
              this.draggablePoint.y = topPos;
              break;
            }
        } catch {}
      }

      // if (this.currentIndex > -1 && this.bPoints[this.currentIndex].dragging || this.kFrames[this.currentIndex].dragging) {
      //   try {
      //     switch(this.draggableType){
      //       case "handle":
      //       rect = this.$refs.bBox.getBoundingClientRect();
      //       console.log("dragging handle");
      //         leftPos =  event.clientX + this.bPoints[0].x - rect.left;
      //         topPos = event.clientY + this.bPoints[3].y - rect.top;
      //         if(leftPos > rect.left-scene.left && leftPos < rect.left+rect.width-scene.left){
      //           this.bPoints[this.currentIndex].x = leftPos;
      //           this.bPoints[this.currentIndex].y = topPos;
      //         }
      //         break;
      //       case "keyframe":
      //       rect = this.$refs.scene.getBoundingClientRect();
      //       console.log("dragging keyframe");
      //         leftPos = event.clientX - rect.left;
      //         topPos = event.clientY - rect.top;
      //         this.kFrames[this.currentIndex].x = leftPos;
      //         this.kFrames[this.currentIndex].y = topPos;
      //         break;
      //       }
         
      //   } catch {}
      // }


      //console.log(this.draggableType);
      //console.log(event.target.name);
      // if (this.currentIndex > -1 && this.bPoints[this.currentIndex].dragging) {
      //   try {
      //     const svg = this.$refs.scene;
      //     this.bRect = svg.createSVGPoint();
      //     this.bRect.x = event.clientX; 
      //     this.bRect.y = event.clientY;
      //     const newpos = this.bRect.matrixTransform(svg.getScreenCTM().inverse());
      //      if(this.bPoints[this.currentIndex].x >= this.bPoints[0].x && this.bPoints[this.currentIndex].x <= this.bPoints[3].x){
      //       this.bPoints[this.currentIndex].x = newpos.x;
      //       this.bPoints[this.currentIndex].y = newpos.y;
      //     }   
      //   } catch {}
      // }

      
    },
    onPointMousedown(index, name, point) {
      this.draggableType = name;
      this.draggablePoint = point;
      this.draggablePoint.dragging = true;
      this.currentIndex = index;
      // switch(name){
      //   case "handle":
      //     this.bPoints[index].dragging = true;
      //     break;
      //   case "keyframe":
      //   this.kFrames[index].dragging = true;
      //   break;
      // }
      
    },
    onPointMouseup() {
      // try {
      //   this.bRect = null;
      //   delete this.bPoints[this.currentIndex].dragging;
      //   this.bPoints[this.currentIndex].dragging = false;
      //   this.$emit("input", this.bPoints);
      //   delete this.kFrames[this.currentIndex].dragging;
      //   this.kFrames[this.currentIndex].dragging = false;
      //   this.$emit("input", this.kFrames);
      // }catch{}
      delete this.draggablePoint.dragging;
      this.draggablePoint.dragging = false;
      this.$emit("input", this.draggablePoint);
      this.draggableType = null;
      this.currentIndex = -1;
    },
    pXonBezier(t){
      return (Math.pow(1 - t, 3) * this.bPoints[0].x) + (3 * Math.pow(1 - t, 2) * t * this.bPoints[1].x) + (3 * (1 - t) * Math.pow(t, 2) * this.bPoints[2].x) +(Math.pow(t, 3) * this.bPoints[3].x);
    },
    pYonBezier(t){
      return (Math.pow(1 - t, 3) * this.bPoints[0].y) + (3 * Math.pow(1 - t, 2) * t * this.bPoints[1].y) + (3 * (1 - t) * Math.pow(t, 2) * this.bPoints[2].y) + (Math.pow(t, 3) * this.bPoints[3].y);
    },
    currentPosition(t){
      let bPos = (this.bPoints[0].y - this.pYonBezier(t)) / (this.bPoints[0].y - this.bPoints[3].y);
      let objPos = {x:null, y:null};
      objPos.x = this.kFrames[0].x + ((this.kFrames[1].x-this.kFrames[0].x)*bPos);
      objPos.y = this.kFrames[0].y + ((this.kFrames[1].y-this.kFrames[0].y)*bPos);
      return objPos;
    }
  },
  template: `
    <div>
      <svg :width=size*2 :height=size+60 :view-box.camel="viewBox" 
      @mousemove="onSceneMousemove"
      @mouseup.stop="onPointMouseup"
      ref="scene"
      style=" border:1px solid black; user-select: none;"
    >
    <!--<text> {{this.currentPosition(progress)}} </text>-->
      <g>
        <circle
          :cx="currentPosition(progress).x"
          :cy="currentPosition(progress).y"
          r="12"
          fill="white"
          stroke-width="3" 
          stroke="purple"
        />
        
       
        <text :x="kf1.x-22" :y="kf1.y-22" font-size="14" fill="grey">START</text>
        <text :x="kf2.x-20" :y="kf2.y-22" font-size="14" fill="grey">STOP</text>

        <circle 
          v-for="(fr,i) in framecount+1"
          :cx="currentPosition((1/framecount)*i).x"
          :cy="currentPosition((1/framecount)*i).y"
          r="2"
          fill="black"
        />

        <circle 
          v-for="(kf,i) in kFrames"
          :cx="kf.x" 
          :cy="kf.y"
          r="6"
          stroke-width="3" 
          stroke="black"
          fill="hsla(0, 0%, 100%, 0.3)"
          :name="kf.name"
          style="cursor:move;"
          @mousedown.stop="onPointMousedown(i, kf.name, kf)"
        />
        
        
      </g>
      <g>
        <rect 
          :x="bPoints[0].x" :y="bPoints[3].y" 
          :width="bPoints[3].x-bPoints[0].x" :height="bPoints[0].y-bPoints[3].y" 
          ref="bBox" 
          fill="hsla(240, 100%, 99%, 0.6)"
          stroke-width="1" stroke="black"
          pointer-events="none">
        </rect>
        <path :d="pathHandler" fill="none" stroke-dasharray="1, 2" stroke-width="1" stroke="black"></path>
        <path :d="pathBezier" fill="none" stroke-width="2" stroke="black"></path>
        
        <circle
            :cx="pXonBezier(progress)"
            :cy="pYonBezier(progress)"
            r="8"
            fill="white"
          stroke-width="3" 
          stroke="purple"
        />

        <circle
            v-for="(point, index) in bPoints.slice(1,3)"
            :cx="point.x"
            :cy="point.y"
            r="8"
            @mousedown.stop="onPointMousedown(index+1, point.name, point)"
            style="cursor:move"
            :name="point.name"
        />
        </g>
      </svg>
      
      
    </div>
  `
};