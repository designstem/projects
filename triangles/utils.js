
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

export const realthickness = (angle, thickness) => {
    return thickness / Math.sin(angle/2);
}




