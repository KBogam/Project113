function preload()
{
  
}

function setup()
{
    canvas = createCanvas(600,400);
    canvas.position(100,110);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,220,60,200,245);

    fill(255,0,0);
    stroke(255,0,0);
    circle(40,40,56);
    circle(40,360,56);
    circle(560,40,56);
    circle(560,360,56);

    fill(200,87,45);
    stroke(200,87,45);
    rect(25,0,560,20);
    rect(25,380,560,20);
    rect(6,0,20,560);
    rect(570,0,20,560);



    
   
}
