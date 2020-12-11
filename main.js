Song1="";
Song2="";
leftWristX= 0;
leftWristY= 0;
rightWristX= 0;
rightWristY= 0;
scoreLeftWrist=0;
scoreRightWrist=0;
SWIP="";

function preload()
{
Song1= loadSound("Song1.mp3");
Song2= loadSound("Song2.mp3");  
}

function setup()
{
canvas=createCanvas(600, 500);
canvas.center();
video=createCapture(VIDEO);
video.hide(); 
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);  
}

function draw()
{
image(video, 0, 0, 600, 500);
fill("#FF0000");
stroke("#FF0000"); 


Songstatus = Song1.isPlaying();

if (scoreLeftWrist > 0.2)
{
console.log("Inside The Score Left Wrist Condition "+ Songstatus);    
circle(leftWristX,leftWristY,20);
Song2.stop();  
if (Songstatus == false)
{
Song1.play();
console.log("Song1 is playing"); 
document.getElementById("songname").innerHTML = "Born For this";
}    
}  
Songstatus2 = Song2.isPlaying();

if (scoreRightWrist > 0.2)
{
console.log("Inside The Score Right Wrist Condition "+ Songstatus2);    
circle(rightWristX,rightWristY,20);
Song1.stop();  
if (Songstatus2 == false)
{
Song2.play();
console.log("Song2 is playing");  
document.getElementById("songname").innerHTML = "Ninjago Season 5 Intro";
}    
}  
}

function modelLoaded()
{
console.log('poseNet Is Initialized');    
}

function gotPoses(results)
{
if (results.length > 0)
{
console.log(results);
scorerightWrist= results[0].pose.keypoints[10].score;
scoreLeftWrist= results[0].pose.keypoints[9].score;  
leftWristX=results[0].pose.leftWrist.x;
leftWristY=results[0].pose.leftWrist.y;
console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);

rightWristX=results[0].pose.rightWrist.x;
rightWristY=results[0].pose.rightWrist.y;
console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
}
}
