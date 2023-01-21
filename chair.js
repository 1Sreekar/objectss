img3 = "";
status3 = ""
objects3 = [];

get_name = localStorage.getItem("user_name");

document.getElementById("chair").innerHTML="Welcome   " + get_name + "! This Page is for Identifying the Chair" ;

function preload(){
    img3 = loadImage("chair.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting3").innerHTML = " Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    status3 = true;
    ObjectDetector.detect(img3,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects3 = results;
    }
}

function draw(){
    image(img3,0,0,950,400)
    
    if(status3 != ""){
        for(i = 0 ; i < objects3.length ; i++){
            percent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects3[i].label + " " + percent + "%" , objects3[i].x , objects3[i].y);
            noFill();
            stroke("red");
            rect(objects3[i].x , objects3[i].y , objects3[i].width , objects3[i].height);
        }
    }
}

function back3(){
    window.location = "index.html";
}