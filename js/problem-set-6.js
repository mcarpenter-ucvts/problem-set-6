/*
 * Hello. 2 points.
 *
 * Write a function that draws "Hello, World!" on the canvas. You should
 * begin drawing at [10, 50], relative to the canvas, and your text should
 * be a 48px sans-serif font. Make sure the canvas is clear before drawing!
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Hello" button, your output should match that of the example.
 */

function sayHello() {
  var ctx = document.getElementById('canvas1').getContext('2d');
  ctx.font = '48px sans-serif';
  ctx.strokeText('Hello, World!', 10, 50);

}

/*
 * Rectangle. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. You should prompt
 * the user for the height and width. You should also prompt the user for the
 * X- and Y-coordinates of the topleft corner of the rectangle.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Rectangle" button, your output should match that of the example.
 *
 * Certain values, such as heights and widths that are logically too small or
 * practically too large, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Width values less than 1
 *     - Height values less than 1
 *     - X- or Y- coordinates less than 5
 *     - Combinations of heights/widths and X-/Y-coordinates that would make
 *       it impossible to draw the rectangle within the bounds of the canvas
 */

function drawRectangle() {
  let rectangle = document.getElementById("canvas2").getContext("2d");
  let rectHeight;
  let rectWidth;
  let resmileyFace;
  let rectY;
  //Add limits to width height x and y at home.
  do{rectHeight = Number(prompt("Height:"))
}while(rectHeight >= canvas2.height && rectHeight < 1);
console.log(rectHeight)

  do{rectWidth = Number(prompt("Width:"))
}while(rectWidth >= canvas2.width && rectWidth < 1);
console.log(rectWidth)

  do{resmileyFace = Number(prompt("X-Coordinate:"))
}while(resmileyFace <= canvas2.width && resmileyFace < 5)
console.log(resmileyFace)

do{rectY = Number(prompt("Y-Coordinate:"))
}while(rectY <= canvas2.height && rectY < 5)

if(rectHeight > canvas2.height && rectWidth > canvas2.width && resmileyFace > canvas2.width && rectY > canvas2.height){
  alert("These rectangle dimensions are improper! Please try again!");
}
else{
  console.log(rectY)
  rectangle.clearRect(0, 0, canvas2.width, canvas2.height);
  rectangle.strokeRect(resmileyFace, rectY, rectWidth, rectHeight);
}


}


/*
 * Color. 3 points.
 *
 * Write a function that draws a rectangle on the canvas. By default, the
 * rectangle will have a height and width of 50px and 100px, respectively. It
 * will be positioned at [10, 10] on the canvas. You'll need to prompt the
 * user to enter a color for the rectangle.
 *
 * Support the following colors:
 *     - black
 *     - blue
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Color" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawColoredRectangle() {
  let op = document.getElementById("canvas3").getContext("2d");
  let color = String(prompt("Color:"));
  if (color == "black" || color == "blue" || color =="green" || color == "orange" || color == "purple" || color == "red" || color == "yellow"){
    op.fillStyle = color;
    op.fillRect(10, 10, 100, 50);
  } else {
    alert(color+" is not a supported color");
    op.clearRect(0, 0, 1024, 512);
  }
}


/*
 * Triangle. 5 points.
 *
 * Write a function that draws a right triangle on the canvas. The triangle
 * should be outlined only, not filled. You'll need to prompt the user for the
 * lengths of each of the sides. By default, position your triangle so that
 * its leftmost and topmost points have X- and Y-coordinates of 10.
 *
 * When drawing your right triangles, the left side shall be designated as the
 * first side and will be smallest of the three side lengths. The bottom side
 * shall be designated as the second side and will be second smallest of the
 * three side lengths. The hypotenuse shall be designated as the third side
 * and will be the largest of the three side lengths.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Triangle" button, your output should match that of the example.
 *
 * Certain values, such as side lengths that make it impossible to create a
 * valid right triangle, should be prohibited. Check the example to see what
 * your code should do in these instances.
 *
 * Here is a list of prohibited values:
 *     - Combinations of side lengths that would make it impossible to draw
 *       a valid triangle
 *     - Combinations of side lengths that would make it impossible to draw
 *       the triangle within the bounds of the canvas
 */

function drawTriangle() {
let triangle = document.getElementById("canvas4").getContext("2d");
let side1 = Number(prompt("Please enter a positive integer for your left side length."));
let side2 = Number(prompt("Please enter a positive integer for your bottom side length."));
let side3 = Number(prompt("Please enter a positive integer for your hypotenuse length."));
let triangleX = 10;
let triangleY = 10;
let drawEnabled = false;
triangle.clearRect(0, 0, canvas4.width, canvas4.height)
console.log(side1);
console.log(side2);
console.log(side3);

if((side1*side1 + side2*side2 == side3*side3) && side1>0 && side2>0 && side3>0 && canvas4.width-triangleX-side1>=0 && canvas4.height-triangleY-side2>=0){
  drawEnabled = true;
}
else{
  alert("Those parameters will not fit the canvas.")
}
if(drawEnabled == true){
  triangle.beginPath();
  triangle.moveTo(triangleX, triangleY);
  triangle.lineTo(triangleX, triangleY+side1);
  triangle.lineTo(triangleX+side2, triangleY+side1);
  triangle.lineTo(triangleX, triangleY);
  triangle.closePath();
  triangle.stroke();
}

}

/*
 * Smile. 7 points.
 *
 * Write a function that draws a smiley face on the canvas. The head should
 * be a perfect circle with a radius specified by the user. The eyes should
 * also be perfect circles with radii that are 10% of that of the head. The
 * radius of the mouth should be 70% of that of the head. A nose is not
 * required, and the position of the eyes and mouth are up to you (provided)
 * they are on the face.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Smile" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawSmileyFace() {
  let radius;
  let canvas = document.getElementById('canvas5');
  let ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
	while(true){
		radius=Number(prompt("Please enter a good radius please"));
		if(radius>=1 && radius<=canvas.width && Number.isInteger(radius)){
			break;
		}
	}
  let x=canvas.width;
  let y=canvas.height;
  let eyeRadius=radius*.1
  let mouthRadius=radius*.7
  ctx.beginPath();
  ctx.arc(x/2, y/2, radius, 0, Math.PI*2); // Face
  ctx.stroke();

  ctx.beginPath(); //Right Eye
  ctx.arc(x/2 - radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); //Left Eye
  ctx.arc(x/2+radius/3, y/2-radius/4, eyeRadius,0, Math.PI*2);
  ctx.stroke();

  ctx.beginPath(); //Mouth
  ctx.arc(x/2, y/2, mouthRadius,0, Math.PI);
  ctx.stroke();

}

/*
 * Star. 9 points.
 *
 * Write a function that draws a five-point star on the canvas. Prompt the
 * user for the outer radius (i.e., a circle that would connect each of the
 * star's outer points) and inner radius (i.e., a circle that would connect
 * each of the star's inner points). The center of the star should be placed
 * at [125, 125].
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Star" button, your output should match that of the example.
 *
 * Certain values, such as radii that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawStar() {
    let canvas = document.getElementById('canvas6');
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

      let outerRadius=Number(prompt("Enter a valid outer radius"));
      let innerRadius=Number(prompt("Enter a valid inner radius"));
      if (outerRadius>=innerRadius && canvas.width>=outerRadius+125 && canvas.height>=outerRadius+125 && innerRadius>=1 && outerRadius>=1){
        let points=5;
        let outerx=[];
        let outery=[];
        let innerx=[];
        let innery=[];
        for(let i=0;i<points;i++){
          outerx.push(Math.cos((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          outery.push(Math.sin((Math.PI*2*i)/points-(Math.PI/2))*outerRadius+125);
          innerx.push(Math.cos(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
          innery.push(Math.sin(((Math.PI*2*i)/points)-(Math.PI/2)+(Math.PI/points))*innerRadius+125);
        }
        ctx.beginPath();
        ctx.moveTo(outerx[0], outery[0]);
        for(let j=0;j<outerx.length;j++){
          ctx.lineTo(innerx[j], innery[j]);
          ctx.lineTo(outerx[j+1], outery[j+1]);
        }
        ctx.lineTo(outerx[0], outery[0]);
        ctx.stroke();
        ctx.closePath();
    }
    else{
        alert('invalid inputs');
      }
  }

/*
 * Stop Sign. 7 points.
 *
 * Write a function that draws a stop sign. The stop sign should be outlined
 * in black, but filled red. At the center of the stop sign, the same height
 * as the length of the sides, should be the word STOP (all capitals, white).
 * Each side length should be 80px.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Stop Sign" button, your output should match that of the example.
 *
 * The leftmost and topmost sides should have X- and Y-coordinates of 10.
 */

function drawStopSign() {
  let stopSign = document.getElementById("canvas7").getContext("2d");
  stopSign.clearRect(0, 0, canvas7.height, canvas7.width)
  let side = 80;
  let c = Number((80/Math.sqrt(2)).toFixed(0));
  let stopX = 70;
  let stopY = 10;

  stopSign.beginPath();
  stopSign.moveTo(stopX,stopY);
  stopSign.lineTo(stopX+side,stopY);
  stopSign.lineTo(stopX+side+c,stopY+c);
  stopSign.lineTo(stopX+side+c,stopY+side+c);
  stopSign.lineTo(stopX+side,stopY+side+c+c);
  stopSign.lineTo(stopX,stopY+side+c+c);
  stopSign.lineTo(stopX-c,stopY+side+c);
  stopSign.lineTo(stopX-c,stopY+c);
  stopSign.lineTo(stopX,stopY);
  stopSign.fillStyle="red";
  stopSign.fill();
  stopSign.closePath();

  stopSign.fillStyle="white";
  stopSign.font="65px sans-serif";
  stopSign.fillText("STOP", 22, 133);
}

/*
 * Pyramid. 7 points.
 *
 * Write a function that draws a block pyramid, where the user specifies the
 * side length of each block. By default, we'll draw a pyramid with a base
 * of five blocks. Give the leftmost point of the pyramid an X-coordinates of
 * 10. Give the bottom of the pyramid a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "Pyramid" button, your output should match that of the example.
 *
 * Certain values, such as lengths that are logically too small or practically
 * too large, should be prohibited. Check the example to see what your code
 * should do in these instances.
 */

function drawPyramid() {
  let op = document.getElementById("canvas8").getContext("2d");
  op.clearRect(0,0,1024,512);

  let s = Number(prompt("Length:"));
  let x = 10;
  let y = 502;

  if (isNaN(s)){
    alert("Your input is not a number");
  } else if (s>100){
    alert("The pyramid will not fit on the canvas");
  } else {
    op.beginPath();
    let odd = true;
    for (let a=0; a<5;a++){
      for (let i=0; i<5-a; i++){
        op.moveTo(x,y);
        op.lineTo(x+s,y);
        op.lineTo(x+s,y-s);
        op.lineTo(x,y-s);
        op.lineTo(x,y);
        if (odd){
          x+=s;
        } else {
          x-=s;
        }
      }
      if (odd){
        x-=s*3/2;
      } else {
        x+=s*3/2;
      }
      y-=s
      odd = !odd;
    }
    op.stroke();
  }
}

/*
 * House. 7 points.
 *
 * Write a function that draws a two-story house. The house should have a
 * rectangular frame, a front door, two square windows on the first floor,
 * two square windows on the second floor, and a triangular roof. Your house
 * and front door should be painted a solid color of the user's choice (these
 * colors should be different). The windows should be light blue, and the roof
 * should be gray. Give the leftmost point of your house an X-coordinate of
 * 150, and the bottom of your house a Y-coordinate of 10 less than the
 * height of the canvas.
 *
 * Support the following front door and/or house colors:
 *     - blue
 *     - brown
 *     - green
 *     - orange
 *     - purple
 *     - red
 *     - yellow
 *
 * You'll need to use the appropriate Canvas API methods to do this. If you're
 * unsure what your code should do, click the "Example" button to see. When you
 * click the "House" button, your output should match that of the example.
 *
 * Check the example to see what your code should do if the user enters an
 * unsupported color.
 */

function drawHouse(){let houseDraw = document.getElementById("canvas9").getContext("2d");
  houseDraw.clearRect(0,0,canvas9.width, canvas9.height);
  let houseColor = prompt("Enter a house color.");
  let doorColor = prompt("Enter a door color.");
  if ((houseColor == "blue" || houseColor == "brown"|| houseColor == "green" || houseColor == "orange" || houseColor == "purple" || houseColor == "red" || houseColor == "yellow") && (doorColor == "blue" || doorColor == "brown"|| doorColor == "green" || doorColor == "orange" || doorColor == "purple" || doorColor == "red" || doorColor == "yellow")){
//housebody
    houseDraw.fillStyle="black";
    houseDraw.fillRect(150,300,724,450);
    houseDraw.fillStyle=houseColor;
    houseDraw.fillRect(151,301,722,448);
    houseDraw.fill();
//roofo
    houseDraw.beginPath();
    houseDraw.moveTo(150,300);
    houseDraw.lineTo(510,10);
    houseDraw.lineTo(860,300);
    houseDraw.lineTo(150,300);
    houseDraw.fillStyle="black";
    houseDraw.fill();
    houseDraw.closePath();
    houseDraw.beginPath();
    houseDraw.moveTo(150,300);
    houseDraw.lineTo(510,12);
    houseDraw.lineTo(870,300);
    houseDraw.lineTo(150,300);
    houseDraw.fillStyle="gray";
    houseDraw.fill();
    houseDraw.closePath();
    //window
    houseDraw.fillStyle="black";
    houseDraw.fillRect(260,620,80,80);
    houseDraw.fillRect(260,400,80,80);
    houseDraw.fillRect(684,620,80,80);
    houseDraw.fillRect(684,400,80,80);
    houseDraw.fillStyle="lightblue";
    houseDraw.fillRect(261,620,80,80);
    houseDraw.fillRect(261,400,80,80);
    houseDraw.fillRect(685,620,80,80);
    houseDraw.fillRect(685,400,80,80);
//door
    houseDraw.fillStyle="black"
    houseDraw.fillRect(462,590,100,160);
    houseDraw.fillStyle=doorColor;
    houseDraw.fillRect(462,590,100,160);
//doorknob
    houseDraw.beginPath();
    houseDraw.arc(545,670,8,0,Math.PI*2,true);
    houseDraw.fillStyle="black";
    houseDraw.fill();
    houseDraw.closePath();
    houseDraw.beginPath();
    houseDraw.arc(545,670,7,0,Math.PI*2,true);
    houseDraw.fillStyle="yellow";
    houseDraw.fill();
    houseDraw.closePath();

  } else {
    alert("One of your colors is not supported");
  }}
