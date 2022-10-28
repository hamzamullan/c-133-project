function preload(){

}

function setup(){
    canvas = createCanvas(600,500);
    canvas.position(150,150);

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,0,0,600,500);
}

function take_snapshot(){
    save('capture.png');
}