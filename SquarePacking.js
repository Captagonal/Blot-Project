/*
@title: 17 square packing
@author: Sawyer K
*/
//most efficient packing of 17 unit squares in one square
const width = 125;
const height = 125;
setDocDimensions(width, height);

const s = 125 / 4.67553009360455 
var square = [
    [[0, 0], [0, s]],
    [[0, s], [s, s]],
    [[s, s], [s, 0]],
    [[s, 0], [0, 0]]
];
drawLines(square);
square = bt.translate(square, [0,125-s]);
drawLines(square);
square = bt.translate(square, [0,-s]);
drawLines(square);
square = bt.translate(square, [s,s]);
drawLines(square);
square = bt.translate(square, [125-(3*s),0]);
drawLines(square);
square = bt.translate(square, [s,0]);
drawLines(square);
square = bt.translate(square, [0,-s]);
drawLines(square);
square = bt.translate(square, [0,-125+(2*s)]);
drawLines(square);