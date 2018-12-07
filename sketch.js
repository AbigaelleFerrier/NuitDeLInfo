var y = 300;
var d = 150;
var j = 15;
var og = 45;
var od = 30;
var mo = 10;
var omo = 15
var vitesse = 9;
var direction = 1;
var timer = 0;
var nieu = true;
function setup() 
{
	createCanvas(1200, 1200);
}
function draw() 
{ 	
	if( y < -181)
	{
		y = 1380;
	}
    else if (y > 1381)
	{
		y = -180;
	}
	
	if( d < -181)
	{
		d = 1380;
	}
    else if (d > 1381)
	{
		d = -180;
	}
	////////////////////////////////////////
	if(keyIsDown(CONTROL))
	{
		nieu = false;
		
	}
	///////////////////////////////////////
	background(255);
	fill(0, 255, 0); 
	ellipse(y, d, 150, 150);
	if(nieu)
	{	
		fill(255, 0, 0); 
		ellipse(y-og, d-j, 25, 25);
		fill(255, 0, 0); 
		ellipse(y+od, d-j, 25, 25);
	}
	else
	{
		strokeWeight(10)
		line(y-og-10, d-j-10, y-og+10, d-j+10);
		strokeWeight(10)
		line(y-og-10, d-j+10, y-og+10, d-j-10);
		strokeWeight(10)		
		line(y+od-10, d-j-10, y+od+10, d-j+10);
		strokeWeight(10)
		line(y+od-10, d-j+10, y+od+10, d-j-10);	
	}
	fill(255, 0, 0);
	strokeWeight(1)
	ellipse(y-mo, d+j, omo, omo);
	///////////////////////////////////////
	
	nieu = true;
	
	///////////////////////////////////////
	
	if(keyIsDown(SHIFT))
	{
		line(y-og, d-j-25,y-og-10, d-j-25)
		line(y-og, d-j-25,y-og+10, d-j-35)
		line(y+od, d-j-25,y+od+10, d-j-25)
		line(y+od, d-j-25,y+od-10, d-j-35)
		if(keyIsDown(LEFT_ARROW))
		{
			y -= vitesse*1.5;
			if (og == -45)
			{
				og = -og;
				od = -od;
				mo = -mo;
			}
		}
		if(keyIsDown(RIGHT_ARROW))
		{
			y += vitesse*1.5; 
				if (og == 45)
				{
					og = -og;
					od = -od;
					mo = -mo;
				}
		}
		if(keyIsDown(DOWN_ARROW))
		{
			d += vitesse*1.5;
		}
		if(keyIsDown(UP_ARROW))
		{
			d -= vitesse*1.5;
		}
	}
	else
	{
		if(keyIsDown(LEFT_ARROW))
		{
		y -= vitesse;
			if (og == -45)
			{
				og = -og;
				od = -od;
				mo = -mo;
			}
		}
		if(keyIsDown(RIGHT_ARROW))
		{
			y += vitesse; 
				if (og == 45)
				{
					og = -og;
					od = -od;
					mo = -mo;
				}
		}
		if(keyIsDown(DOWN_ARROW))
		{
			d += vitesse;
		}
		if(keyIsDown(UP_ARROW))
		{
			d -= vitesse;
		}
	}
		
	if(keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW) || keyIsDown(DOWN_ARROW) || keyIsDown(UP_ARROW))
	{
		if(omo == 15 && timer == 3)
		{
			omo += 8;
			timer = 0;
		}
		else if (timer == 3)
		{
			omo -= 8;
			timer = 0;
		}
		else
		{
			timer += 1;
		}
	}

}