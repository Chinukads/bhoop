img= "";
status="";
function preload(){
    img=loadImage("dog_cat.jpg");
}
function setup(){
    canvas=createCanvas(640, 500);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_bar").innerHTML="status: Detecting Object ";
    
}
function draw(){
    image(img, 0, 0, 640, 500);
    fill("#FF0000");
    text("Doggy",45, 68 );
    noFill();
    stroke("#990000");
    rect(30, 90, 400, 300);
    fill("#FF0000");
    text("Meow Meow" ,400, 100);
    noFill();
    stroke("#FF0000");
    rect(300, 90, 400, 300);

}

function modelLoaded(){
console.log("MODEL LOADED");
status=true;
objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }else{

    
    console.log(results);}
}