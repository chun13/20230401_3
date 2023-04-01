let points = [[-7, 2], [0, 14], [7, 2], [5, 2], [9, -5], [6, -5], [10, -12], [1, -12], [1, -14], [-1, -14], [-1, -12], [-10, -12], [-6, -5], [-9, -5], [-5, 2]]; //list資料，
let scaleFactor = 0.7; // 初始的圖形大小

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 20;
    }
  }
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  scale(scaleFactor, -scaleFactor); // 根據 scaleFactor 調整整個圖形的大小和方向

  let color1 = color("#a7c957");
  let color2 = color("#f77f00");

  for (let i = 1; i <= 5; i++) { // 畫出五個圖形
    let scaleFactorAdjusted = 0.8 - (i - 1) * 0.1; // 調整圖形大小的因子，從0.7到0.4

    for (let j = 0; j < points.length - 1; j++) {
      let t = map(j, 0, points.length - 2, 0, 1);
      let fillColor = lerpColor(color1, color2, t);
      let strokeColor = lerpColor(color2, color1, t);

      fill(fillColor);
      stroke(strokeColor);
      strokeWeight(5);

      line(points[j][0] * scaleFactorAdjusted, points[j][1] * scaleFactorAdjusted, points[j + 1][0] * scaleFactorAdjusted, points[j + 1][1] * scaleFactorAdjusted);
    }

    let t = 1;
    let fillColor = lerpColor(color1, color2, t);
    let strokeColor = lerpColor(color2, color1, t);

    fill(fillColor);
    stroke(strokeColor);
    strokeWeight(5);

    line(points[points.length - 1][0] * scaleFactorAdjusted, points[points.length - 1][1] * scaleFactorAdjusted, points[0][0] * scaleFactorAdjusted, points[0][1] * scaleFactorAdjusted);
  }

  // 繪製文字
  textSize(40);
  fill(0);
  noStroke();
  textAlign(CENTER, CENTER); //對齊中央
  textFont('Helvetica'); //字形
  textStyle(NORMAL);
  scale(-1, 1); // 在 x 軸上進行縮放
  rotate(PI); // 旋轉 180 度
  text("淡江教科大一學生", 0, 0); // 把位置改成 (0, 0)，即畫面中央
  translate(-width / 2, -height / 2); // 逆向移動畫面，讓文字始終顯示在畫面中央
}
function mouseMoved() {
  scaleFactor = map(mouseX, 0, width, 0.1, 1.5); // 根據滑鼠的位置來調整整個圖形的大小
}
