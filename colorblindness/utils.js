import { hsl, colorBlind } from 'https://designstem.github.io/fachwerk/fachwerk.js';

export const colorblindRaw = (color, type = "deuteranomaly") => 
    colorBlind[type](color, true);

export function colorWheelArcClick(active) {
    this.set('activeColor', active);
}

export const hsb2hsl = (h0, s0, b0) => {
    let s = s0*0.01;
    let b = b0*0.01;
    let l = (2 - s) * b / 2;

    if (l != 0) {
        if (l == 1) {
            s = 0;
        } else if (l < 0.5) {
            s = s * b / (l * 2);
        } else {
            s = s * b / (2 - l * 2);
        }
    }
    return hsl( h0, s*100, l*100);
}

//export default {}