const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

const polyline = points => {
  return points.map(point => `${point.x},${point.y}`).join(" ");
};

const snapToGrid = (value, snap) => {
    // From https://bl.ocks.org/danasilver/cc5f33a5ba9f90be77d96897768802ca
    return value % snap < snap / 2 ? value - (value % snap) : value + snap - (value % snap)
}

const presets = {
  twoByTwo: [
    { x: 40, y: 40 },
    { x: 80, y: 40 },
    { x: 120, y: 40 },
    { x: 120, y: 80 },
    { x: 120, y: 120 },
    { x: 80, y: 120 },
    { x: 40, y: 120 },
    { x: 40, y: 80 },
    { x: 80, y: 80, height: true }
  ],
  threeByThree: [
    { x: 40, y: 40 },
    { x: 80, y: 40 },
    { x: 120, y: 40 },
    { x: 160, y: 40 },
    { x: 160, y: 80 },
    { x: 160, y: 120 },
    { x: 160, y: 160 },
    { x: 120, y: 160 },
    { x: 80, y: 160 },
    { x: 40, y: 160 },
    { x: 40, y: 120 },
    { x: 40, y: 80 },
    { x: 100, y: 100, height: true }
  ],
  fourByFour: [
    { x: 40, y: 40 },
    { x: 80, y: 40 },
    { x: 120, y: 40 },
    { x: 160, y: 40 },
    { x: 200, y: 40 },
    { x: 200, y: 80 },
    { x: 200, y: 120 },
    { x: 200, y: 160 },
    { x: 200, y: 200 },
    { x: 160, y: 200 },
    { x: 120, y: 200 },
    { x: 80, y: 200 },
    { x: 40, y: 200 },
    { x: 40, y: 160 },
    { x: 40, y: 120 },
    { x: 40, y: 80 },
    { x: 120, y: 120, height: true }
  ]
};
export { cx, cy, polyline, snapToGrid, presets };
