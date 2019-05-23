import { hsl } from 'https://designstem.github.io/fachwerk/fachwerk.js';

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


export const string2Coords = (string) => {

    let arr = [];

    string.split(',').forEach(function(entry, i){ 
        let n = entry.trim().split(' ');
        arr.push([n[0], n[1]]);
        //console.log("x:" + n[0] + " y:" + n[1]);
    });


    return arr;

}




export function dot( v, w ) // dot-product
{
  return v[0]*w[0] + v[1]*w[1] + v[2]*w[2];
}

export function cross( v, w ) // cross-product
{
  var t = new Array(3);
  t[0] = v[1]*w[2] - v[2]*w[1];
  t[1] = v[2]*w[0] - v[0]*w[2];
  t[2] = v[0]*w[1] - v[1]*w[0];
  return t;
}

export function magnitude( v ) // Vector magnitude
{
  return Math.sqrt( v[0]*v[0] + v[1]*v[1] + v[2]*v[2] );
}



export function pyramidAngles(sides, radius, height)
{
  // Base lies is XY-plane. One corner is at origin. Apex is at x=radius y=0 and z=height.
  
    var numDec = 1;
    var q = 2*Math.PI / sides;    // Full circle divided by n
    var r = radius;        // Radius
    var vA = new Array(3); var vapex = new Array(3); // Vectors to a corner and the apex
    vA[0] = r * (1.0 - Math.cos( q ));                    // Corner X-coordinate
    vA[1] = r * Math.sin( q );                            // Corner Y-coordinate
    vA[2] = 0;                                       // Corner Z-coordinate
    vapex[0] = r;                                    // Apex X-coordinate
    vapex[1] = 0;                                    // Apex Y-coordinate
    vapex[2] = height;      // Apex Z-coordinate = height
    var vB = new Array(3); vB[0] = vA[0]; vB[1] = -vA[1]; vB[2] = vA[2];        
    var nA = new Array(3); var nB = new Array(3);    // Normal vectors
    nA = cross( vapex, vA ); nB = cross( vapex, vB );
    var t = Math.acos( nA[1] /magnitude( nA ) );
    var dh = Math.acos( dot( nA, nB ) / magnitude( nA ) / magnitude( nB ) );

    return {
        mBevel: (90 - t*180/Math.PI).toFixed(numDec),
        bBevel: (90 - t*360/Math.PI).toFixed(numDec),
        mita: Math.acos( dot( vapex, vA )/magnitude( vapex )/magnitude( vA ) )*180/Math.PI,
        miterA: mita.toFixed(numDec),
        miter: (90 - mita).toFixed(numDec),
        side: (magnitude( vA )).toFixed(3),
        slope: (Math.acos( nA[2]/magnitude( nA ) )*180/Math.PI).toFixed(numDec),
        dihedral: (dh* 180/Math.PI).toFixed(numDec)
    }

    // document.getElementById("nPyramidMBevel").value = (90 - t*180/PI).toFixed(numDec) + String.fromCharCode(176);
    // document.getElementById("nPyramidBBevel").value = (90 - t*360/PI).toFixed(numDec) + String.fromCharCode(176);
    // var mita = acos( dot( vapex, vA )/magnitude( vapex )/magnitude( vA ) )*180/PI;
    // document.getElementById("nPyramidMitera").value = mita.toFixed(numDec) + String.fromCharCode(176);
    // document.getElementById("nPyramidMiter").value = (90 - mita).toFixed(numDec) + String.fromCharCode(176);
    // document.getElementById("nPyramidSide").value = (magnitude( vA )).toFixed(3);
    // document.getElementById("nPyramidSlope").value = (acos( nA[2]/magnitude( nA ) )*180/PI).toFixed(numDec) + String.fromCharCode(176);
    // document.getElementById("nPDihedral").value = (dh* 180/PI).toFixed(numDec) + String.fromCharCode(176);
    //setFlipAngles( 90 - t*180/PI, 90 - t*360/PI, 90 - mita, 0, 0, 0 );

}





//export default {}