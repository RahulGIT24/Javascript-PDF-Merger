const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

const merge = async (p1,p2) => {
  await merger.add(p1);
  await merger.add(p2);
  await merger.save('Public/merged.pdf'); //save under given name and reset the internal document
};

module.exports = {merge}