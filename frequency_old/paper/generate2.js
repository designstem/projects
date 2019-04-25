
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

doc.pipe(
  fs.createWriteStream(`./paper/colors1.pdf`)
);

// Array.from({ length: 14 }).forEach((_, index) => {

//   doc
//     .circle(pt(w / 2), pt(h / 2), pt((index * 5) + 35))
//     .stroke("#888")
//     .lineWidth(pt(0.25));

// })

doc
  .circle(pt(w / 2), pt(h / 2), pt((13 * 5) + 35))
  .stroke("#888")
  .lineWidth(pt(0.25));

var length = process.argv[3];

var length = 300

Array.from({ length }).forEach((_, index) => {
  doc
    .moveTo(
      cx((360 / length) * index, 100) + pt(w / 2),
      cy((360 / length) * index, 100) + pt(h / 2)
    )
    .lineTo(
      pt(cx((360 / length) * index, w / 2.1) + w / 2),
      pt(cy((360 / length) * index, w / 2.1) + h / 2)
    )
    .lineWidth(pt(2))
    .stroke(['#ff0000','#00ff00','#0000ff'][index % 3]);

});

doc
  .circle(pt(w / 2), pt(h / 2), pt(4))
  .lineWidth(pt(0.5))
  .fillAndStroke("white", "black");

// doc
//   .fontSize(12)
//   .fill("black")
//   .text('DesignSTEM', pt(w / 2.28), pt(h / 2.32))
//   .text(`${process.argv[2]} RPM`, pt(w / 2.15), pt(h / 2.22))
//   .text(
//     `${process.argv[3]} frames / ${
//       process.argv[4] ? process.argv[4] : "15"
//     } FPS`,
//     pt(w / 2.42),
//     pt(h / 1.85)
//   );

doc.end();

