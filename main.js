  var canvas = new fabric.Canvas("myCanvas")

ball_y = 0;
ball_x = 0;
hole_x = 400;
hole_y = 800;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	var golf_image = fabric.Image.fromURL("golf-h.png", function(Img){
		golf_image = Img;
		golf_image.scaleToWidth(100);
		golf_image.scaleToHeight(100);
		golf_image.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(golf_image);
		
	});

new_image();
}



function new_image()
{

	fabric.Image.fromURL("ball.png", function(Img){
		golfb_image = Img;

		golfb_image.scaleToWidth(50);
		golfb_image.scaleToHeight(50);
		golfb_image.set({
			top:ball_y,
			left:ball_x

		});
		canvas.add(golfb_image);
	});

};




window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if((ball_x == hole_x)&&(ball_y == hole_y)){
		canvas.remove(golfb_image);
		document.getElementById("hd3").innerHTML="You have hit the goal!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{

		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	
	
	function up()
	{
		if(ball_y>=0){
			ball_y = ball_y-block_image_height;
			console.log("Up");
		canvas.remove(golfb_image);
		new_image();
		}

	}

	function down()
	{
		if(ball_y<=500){
			ball_y = ball_y+block_image_height;
			canvas.remove(golfb_image);
			console.log("Down");
			new_image();
		}
	
		
		
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x = ball_x-block_image_width;
			console.log("Left");
			canvas.remove(golfb_image);
			new_image();
		}
	
	}

	function right()
	{
		if(ball_x <=1050)
		{
		ball_x = ball_x+block_image_width;
		console.log("Right");
		canvas.remove(golfb_image);
		new_image();
		}
	
	
	}
	
	
}



	}
	