/*
@title: 17 square packing
@author: Sawyer K
*/
//most efficient packing of 17 unit squares in one square
const width = 125;
const height = 125;
setDocDimensions(width, height);

const s = 125 / 4.67553009360455 //26.7349364666
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
square = bt.rotate(square, 50.2582715)
square = bt.translate(square, [-73.399649,21.168877]);
drawLines(square);
square = bt.translate(square, [22.826509,15.644229]);
drawLines(square);
square = bt.translate(square, [-42.285322,2.500477]);
drawLines(square);
square = bt.translate(square, [61.952169,15.8199]);
drawLines(square);
square = bt.translate(square, [-39.193448 ,0.068831]);
drawLines(square);
square = bt.translate(square, [19.699835 ,18.253954]);
drawLines(square);
//reset position
square = [
    [[0, 0], [0, s]],
    [[0, s], [s, s]],
    [[s, s], [s, 0]],
    [[s, 0], [0, 0]]
];
square = bt.translate(square, [49.214949,0]);
drawLines(square);
square = bt.translate(square, [48.992003,41.721721]);
drawLines(square);
square = bt.rotate(square, -53.3080943)
square = bt.translate(square, [-24.973365,-20.244737]);
drawLines(square);