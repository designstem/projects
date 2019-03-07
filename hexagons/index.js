import { fachwerk } from "https://designstem.github.io/fachwerk/fachwerk.js";

function addone(value) {
  return value + 1
}

function addtwo(value) {
  return addone(value) + 1
}

fachwerk({ utils: { addone, addtwo }})