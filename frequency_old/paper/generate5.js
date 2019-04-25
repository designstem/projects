const fs = require("fs");
const PDFDocument = require("pdfkit");

pt = mm => mm / (25.4 / 72);

const cx = (deg, radius) => {
  return Math.cos((deg - 90) * (Math.PI / 180)) * radius;
};

const cy = (deg, radius) => {
  return Math.sin((deg - 90) * (Math.PI / 180)) * radius;
};

const w = 210;
const h = 297;

const doc = new PDFDocument({ size: [pt(w), pt(h)] });

doc.pipe(fs.createWriteStream(`./paper/images2.pdf`));

// Array.from({ length: 14 }).forEach((_, index) => {

//   doc
//     .circle(pt(w / 2), pt(h / 2), pt((index * 5) + 35))
//     .stroke("#888")
//     .lineWidth(pt(0.25));

// })

doc
  .circle(pt(w / 2), pt(h / 2 - 40), pt(13 * 5 + 35))
  .stroke("#888")
  .lineWidth(pt(0.25));

doc
  .circle(pt(w / 2), pt(h / 2 - 40), pt(0 * 5 + 35))
  .stroke("#888")
  .lineWidth(pt(0.25));

doc
  .circle(pt(w / 2), pt(h / 2 - 40), pt(4))
  .lineWidth(pt(0.5))
  .fillAndStroke("white", "black");

var length = process.argv[3];
var a = process.argv[3];

// var length = 74;

// // 250 20  
// // 399

// 220 20 
// 315 -> 28
//var a = 54

Array.from({ length: a }).forEach((_, i) => {
  doc
    .rotate((360 / a) * i, { origin: [pt(w / 2), pt(h / 2 - 40)]})
    .image(
      "./images/hammer/hammer00" +
        (i % 21 + 1) +
        ".png",
      pt(w / 2) - (20 / 2),
      pt(h / 2) - (28 / 2) + pt(50),
      { width: 20 }
    )
    .rotate((360 / a) * i * -1, { origin: [pt(w / 2), pt(h / 2 - 40)] })
});


doc
  .fontSize(12)
  .fill("black")
  .translate(0, pt(40) * -1)
  .text('DesignSTEM', pt(w / 2.28), pt(h / 2.32))
  .text(`${process.argv[2]} RPM`, pt(w / 2.15), pt(h / 2.22))
  .text(
    `${process.argv[3]} frames / ${
      process.argv[4] ? process.argv[4] : "15"
    } FPS`,
    pt(w / 2.42),
    pt(h / 1.85)
  );

doc.end();
