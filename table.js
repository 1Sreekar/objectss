img4 = "";
status4 = ""
objects4 = [];

get_name = localStorage.getItem("user_name");

document.getElementById("table").innerHTML="Welcome   " + get_name + "! This Page is for Identifying the Table" ;

function preload(){
    img4 = loadImage("table.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting4").innerHTML = " Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    status4 = true;
    ObjectDetector.detect(img4,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects4 = results;
    }
}

function draw(){
    image(img4,0,0,950,400)
    
    if(status4 != ""){
        for(i = 0 ; i < objects4.length ; i++){
            percent = floor(objects4[i].confidence * 100);
            fill("red");
            text(objects4[i].label + " " + percent + "%" , objects4[i].x , objects4[i].y);
            noFill();
            stroke("red");
            rect(objects4[i].x , objects4[i].y , objects4[i].width , objects4[i].height);
        }
    }
}

function back5(){
    window.location = "index.html";
}