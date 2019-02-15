
// https://gist.github.com/NV/522734 

export function hsb2hsl(h, s, b) {
    let hsl = {h:h};
    hsl.l = (2 - s) * b;
    hsl.s = s * b;
  
    if (hsl.l <= 1 && hsl.l > 0) {
        hsl.s /= hsl.l;
    } else {
        hsl.s /= 2 - hsl.l;
    }
  
    hsl.l /= 2;
  
    if (hsl.s > 1) {
      hsl.s = 1;
    }
    
    return hsl;
}
  
export default {}