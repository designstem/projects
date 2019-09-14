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