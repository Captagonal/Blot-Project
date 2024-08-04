// check out the workshop tab to get started
// welcome to blot!

// check out this guide to learn how to program in blot
// https://blot.hackclub.com/editor?guide=start

const width = 125;
const height = 125;

setDocDimensions(width, height);

const t = new bt.Turtle()
const size = 50
const shape = (n, size) => {
  const t = new bt.Turtle()
  for (let i = 0; i < n; i++) t.forward(size).left(360/n)
  return t.lines();
}

drawLines(bt.translate(shape(3,100), [(25/2),35/2]))
drawLines(bt.translate(bt.rotate(shape(3,50),180),[37.7,17.5]))



