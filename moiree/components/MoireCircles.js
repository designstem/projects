
export default {
  inject: ["provider"],
  props: {
    gap: { default: 10, type: [Number, String] },
    translate: { default: 0, type: [Number, String] },
    lineWidth: { default: 1, type: [Number, String] }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const { width, height } = ctx.canvas
    const margin = 500;
    const center = {x:width/2, y:height/2};
    ctx.lineWidth = this.lineWidth;

    ctx.clearRect(-margin, -margin, width+margin, height+margin);
    ctx.save();
    ctx.translate(-this.translate, 0);
    for (let i = 0; i < height/this.gap; i++) {
        ctx.beginPath();
        ctx.arc(center.x, center.y, i*this.gap, 0, 2 * Math.PI);
        ctx.stroke();
     }
    
    
    ctx.restore();
    ctx.save();
    ctx.translate(this.translate, 0);
    
    for (let j = 0; j < width/this.gap + margin; j++) {
        ctx.beginPath();
        ctx.arc(center.x, center.y, j*this.gap, 0, 2 * Math.PI);
        ctx.stroke();
     }
     ctx.restore();
  }
};