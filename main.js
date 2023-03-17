var tamanho = 0;
var pulsoEsquerdo = 0;
var pulsoDireito = 0;
function preload(){
}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 550);
    canvas = createCanvas(550, 550);
    canvas.position(560, 110);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    background("rgb(251, 242, 244)");
    textSize(tamanho);
    fill("black");
    stroke("cyan");
    text("Heitor", 50, 400);
}
function modelLoaded(){
    console.log("poseNet iniciado")
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        pulsoDireito = results[0].pose.rightWrist.x;
        pulsoEsquerdo = results[0].pose.leftWrist.x;
        tamanho = pulsoEsquerdo - pulsoDireito;
    }
}