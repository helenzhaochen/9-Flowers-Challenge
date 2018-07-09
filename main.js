var drawing = SVG('drawing-area');

var drawflower= function(x,y,z,color) {
    var flowerGroup = drawing.group()
        .center(x,y)
        .scale(z)
    
    drawing
      .ellipse(100, 300)
      .center(400, 200)
      .rotate(0)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(500, 240)
      .rotate(45)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(530, 330)
      .rotate(90)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(300, 240)
      .rotate(135)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(300, 330)
      .rotate(270)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(500, 430)
      .rotate(135)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(400, 460)
      .rotate(0)
      .fill(color)
      .addTo(flowerGroup);

    drawing
      .ellipse(100, 300)
      .center(300, 430)
      .rotate(45)
      .fill(color)
      .addTo(flowerGroup);
    }

drawflower(100,0,0.5,'pink');
drawflower(100,0,0.3,'pink');
drawflower(260,220,0.5,'aqua');
drawflower(500,30,0.4,'blueviolet');
drawflower(500,260,0.7,'magenta');
drawflower(750,70,0.5,'mediumspringgreen');
drawflower(980,490,0.3,'gold');
drawflower(1100,0,0.4,'coral');
drawflower(1080,260,0.5,'maroon');
drawflower(60,400,0.45,'yellow');




