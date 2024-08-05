// Book Shelf
const width = 125;
const height = 125;

setDocDimensions(width, height);
const t = new bt.Turtle();

function book (width, height, Postition) {
  t.jump(Postition);
  t.forward(width);
  t.left(90);
  t.forward(height);
  t.left(90);
  t.forward(width);
  t.left(90);
  t.forward(height);
  t.left(90);
  drawLines(t.lines());
}
function RandBook(Position) {
  let width = bt.randIntInRange(3, 8)
  let height = bt.randIntInRange(10, 25)
  book(width,height,Position);
}
function shelf(Left, Right, Height){
  let i = Left;
  while (i < Right){
    let width2 = bt.randIntInRange(3, 8)
    let height2 = bt.randIntInRange(10, 25)
    book(width2,height2,[i,Height]);
    i = i + width2;
  }
}
shelf (2,100,6)