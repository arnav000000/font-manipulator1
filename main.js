function setup()
{
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,100);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on('pose',gotposes);
} 
function draw()
{
    background('#f3f7f2');
}
function modelloaded()
{
    console.log("poseNet is intialized");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
    }
}