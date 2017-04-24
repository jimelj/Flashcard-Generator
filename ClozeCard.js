function ClozeCard(text, cloze) {

  this.text = text;
  this.cloze = cloze;

  if (!this.text.includes(this.cloze)) {
    throw 'error due to ' + this.cloze + ' does not appear to be in ' + this.text;
  }
  this.partial = this.text.replace(cloze, '...');
  this.fullText = text;
}

module.exports = ClozeCard;
