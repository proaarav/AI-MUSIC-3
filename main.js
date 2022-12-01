leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
song1 = "";
song2 = "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);

    poseNet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Initialised");
}

function gotPoses(results){
    if(results.length > 0){
     console.log(results);
     leftWristX = results[0].pose.leftWrist.x;
     leftWristY = results[0].pose.leftWrist.y;
     console.log(" LeftWristX = " + leftWristX + " LeftWristY = " + leftWristY);
     rightWristX = results[0].pose.rightWrist.x;
     rightWristY = results[0].pose.rightWrist.y;
     console.log(" RightWristX = " + rightWristX + " RightWristY = " + rightWristY);

    }
}


function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function draw(){
 image(video,0,0,600,530);
}