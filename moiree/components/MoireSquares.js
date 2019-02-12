
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

    ctx.clearRect(-margin, -margin, width+margin, height+margin);


    let cols = width / this.width;
    let rows = height / this.width;
    
    ctx.save();

    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        if ((x % 2 == 0 && y % 2 == 1) || (x % 2 == 1 && y %2 == 0)) {
            ctx.fillStyle = "transparent";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fillRect(x*this.width, y*this.width, this.width, this.width);
      }
    }

    ctx.translate(center.x, center.y);
    ctx.rotate((Math.PI / 180) * this.rotate);
    ctx.translate(-center.x, -center.y); 

    for (let x = 0; x < cols; x++) {
        
      for (let y = 0; y < rows; y++) {
        if ((x % 2 == 0 && y % 2 == 1) || (x % 2 == 1 && y %2 == 0)) {
            ctx.fillStyle = "transparent";
        } else {
          ctx.fillStyle = "black";
        }
        ctx.fillRect(x*this.width, y*this.width, this.width, this.width);
      }
    }

    ctx.restore();
  }
};