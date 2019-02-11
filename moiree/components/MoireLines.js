
export default {
  inject: ["provider"],
  props: {
    gap: { default: 10, type: [Number, String] },
    rotate: { default: 0, type: [Number, String] },
    lineWidth: { default: 1, type: [Number, String] }
  },
  render() {
    if (!this.provider.context) return;
    const ctx = this.provider.context;
    const { width, height } = ctx.canvas
    const margin = 500;
    
    ctx.lineWidth = this.lineWidth;

    ctx.clearRect(-margin, -margin, width+margin, height+margin);
    ctx.save();
    for (let i = 0; i < width/this.gap; i ++) {
        ctx.beginPath();
        ctx.moveTo(i*this.gap, 0);
        ctx.lineTo(i*this.gap, height);
        ctx.stroke();
     }
    
    ctx.translate(width/2, height/2);
    ctx.rotate((Math.PI / 180) * this.rotate); // rotate
    ctx.translate(-width/2, -height/2); // translate back
    
    for (let j = 0; j < width/this.gap + margin; j ++) {
        ctx.beginPath();
        ctx.moveTo(j*this.gap-margin, -margin);
        ctx.lineTo(j*this.gap-margin, height+margin);
        ctx.stroke();
     }
     ctx.restore();
  }
};