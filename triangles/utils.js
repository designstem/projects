
export const angleBetweenPoints = (x1, y1, x2, y2) => {
    let w = x2-x1;
    let h = y2-y1;
    return Math.atan2(h,w) * (180/Math.PI);
}
export const distanceBetweenPoints = (x1, y1, x2, y2) => {
    let w = x2-x1;
    let h = y2-y1;
    return Math.sqrt(w*w + h*h);
}

export const polyInteriorAngle = (n) => {
    return 180*(n-2)/n;
}

export const solvePolygon = (n, r) => {
    let w = 360 / n;
    // let s = 2 * r * Math.sin(w);
    let s = 2 * r * Math.sin( Math.PI / n );
    let h = r * Math.cos( Math.PI / n );
    let interior = (180 * (n-2)) / n;
    return { w:w, s:s, h:h, interior:interior }
}

export const polygonRadiusFromSides = (n, s) => {
    return s / (2 * Math.sin( Math.PI / n) );
}

export const points2Arr = (str) => {
    console.log(str);
    let arr = [];

    str.split(',').forEach(function(entry, i){ 
        let n = entry.trim().split(' ');
        arr.push([n[0], n[1]]);
        console.log("x:" + n[0] + " y:" + n[1]);
    });

    return arr;
}

export const drag2Triangle = (dragPoints) => {
    
    // console.log(JSON.parse(JSON.stringify(obj)));
    
    // return `[ [${obj[0][0].x}, ${obj[0][0].y}] , [${obj[1][0].x}, ${obj[1][0].y}] , [${obj[2][0].x}, ${obj[2][0].y}] ]`;
}




// export function dot( v, w ) // dot-product
// {
//   return v[0]*w[0] + v[1]*w[1] + v[2]*w[2];
// }

// export function cross( v, w ) // cross-product
// {
//   var t = new Array(3);
//   t[0] = v[1]*w[2] - v[2]*w[1];
//   t[1] = v[2]*w[0] - v[0]*w[2];
//   t[2] = v[0]*w[1] - v[1]*w[0];
//   return t;
// }

// export function magnitude( v ) // Vector magnitude
// {
//   return Math.sqrt( v[0]*v[0] + v[1]*v[1] + v[2]*v[2] );
// }



// export function pyramidAngles(sides, radius, height)
// {
//   // Base lies is XY-plane. One corner is at origin. Apex is at x=radius y=0 and z=height.
  
//     var numDec = 1;
//     var q = 2*Math.PI / sides;    // Full circle divided by n
//     var r = radius;        // Radius
//     var vA = new Array(3); var vapex = new Array(3); // Vectors to a corner and the apex
//     vA[0] = r * (1.0 - Math.cos( q ));                    // Corner X-coordinate
//     vA[1] = r * Math.sin( q );                            // Corner Y-coordinate
//     vA[2] = 0;                                       // Corner Z-coordinate
//     vapex[0] = r;                                    // Apex X-coordinate
//     vapex[1] = 0;                                    // Apex Y-coordinate
//     vapex[2] = height;      // Apex Z-coordinate = height
//     var vB = new Array(3); vB[0] = vA[0]; vB[1] = -vA[1]; vB[2] = vA[2];        
//     var nA = new Array(3); var nB = new Array(3);    // Normal vectors
//     nA = cross( vapex, vA ); nB = cross( vapex, vB );
//     var t = Math.acos( nA[1] /magnitude( nA ) );
//     var dh = Math.acos( dot( nA, nB ) / magnitude( nA ) / magnitude( nB ) );

//     return {
//         mBevel: (90 - t*180/Math.PI).toFixed(numDec),
//         bBevel: (90 - t*360/Math.PI).toFixed(numDec),
//         mita: Math.acos( dot( vapex, vA )/magnitude( vapex )/magnitude( vA ) )*180/Math.PI,
//         miterA: mita.toFixed(numDec),
//         miter: (90 - mita).toFixed(numDec),
//         side: (magnitude( vA )).toFixed(3),
//         slope: (Math.acos( nA[2]/magnitude( nA ) )*180/Math.PI).toFixed(numDec),
//         dihedral: (dh* 180/Math.PI).toFixed(numDec)
//     }
// }
