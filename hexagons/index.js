import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

// n number of edges
// p perimeter
// http://mathworld.wolfram.com/RegularPolygon.html
function edgeLength(n, p) {
  return p / n;
}

// n = number of edges
// s = edge length
// http://mathworld.wolfram.com/RegularPolygon.html
function inradius(n, s) {
  return s / (2 * Math.tan(Math.PI / n));
}

// r = inradius
// s = edge length
// http://mathworld.wolfram.com/RegularPolygon.html
function circumradius(r, s) {
  return Math.sqrt(Math.pow(r, 2) + Math.pow(s / 2, 2));
}

function crEP(n, p) {
  var s = edgeLength(n, p);
  var r = inradius(n, s);
  var cr = circumradius(r, s);
  return cr;
}

function rEP(n, p) {
  var s = edgeLength(n, p);
  var r = inradius(n, s);
  return r;
}

fachwerk({ title: 'Hexagons', style: { '--accent': 'var(--red)', '--purple': 'var(--red)'}, utils: { edgeLength, inradius, circumradius, crEP, rEP } });
