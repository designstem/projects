
export default {
  inject: ["provider"],
  props: {
    width: { default: 10, type: [Number, String] },
    rotate: { default: 0, type: [Number, String] }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const { width, height } = ctx.canvas
    const margin = 500;
    const center = {x:width/2, y:height/2};
    //ctx.lineWidth = this.lineWidth;

    ctx.clearRect(-margin, -margin, width+margin, height+margin);
    ctx.save();
   // ctx.rotate(-this.rotate);
    let left = 0;
    for(let a=0; a<height/this.width; a++) {
        for(let b=0; b<width/this.width; b+=2) {
            let startX = b * this.width;
            if(a%2==0) startX = (b+1) * this.width;
            ctx.fillRect(startX + left,(a*this.width) ,this.width,this.width);
        }
    }
    ctx.translate(center.x, center.y);
    ctx.rotate((Math.PI / 180) * this.rotate);
    ctx.translate(-center.x, -center.y); 
    for(let a=0; a<height/this.width; a++) {
        for(let b=0; b<width/this.width; b+=2) {
            let startX = b * this.width;
            if(a%2==0) startX = (b+1) * this.width;
            ctx.fillRect(startX + left,(a*this.width) ,this.width,this.width);
        }
    }
      ctx.restore();
  }
};