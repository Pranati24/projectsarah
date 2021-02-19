eyeX= 0;
eyeY= 0;

function preload(){
    glasses= loadImage('glass.png');
}
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}
function modelLoaded(){
    console.log('poseNet is initialized');

}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        eyeX= results[0].pose.eye.x - 10;
        eyeY= results[0].pose.eye.y - 10;
        console.log("eye x="+ eyeX);
        console.log("eye y="+ eyeY);

    } 
}



function draw(){
    image(video,0,0,300,300);
    image(glasses,eyeX,eyeY,30,30);
}
function take_snapshot(){
    save ('myFilterImage.png');
}