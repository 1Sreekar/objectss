img1 = "";
status1 = ""
objects1 = [];

get_name = localStorage.getItem("user_name");

document.getElementById("tv").innerHTML="Welcome   " + get_name + "! This Page is for Identifying the Tv" ;

function preload(){
    img1 = loadImage("Tv.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting1").innerHTML = " Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    status1 = true;
    ObjectDetector.detect(img1,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects1 = results;
    }
}

function draw(){
    image(img1,0,0,950,400)
    
    if(status1 != ""){
        for(i = 0 ; i < objects1.length ; i++){
            percent = floor(objects1[i].confidence * 100);
            fill("red");
            text(objects1[i].label + " " + percent + "%" , objects1[i].x , objects1[i].y);
            noFill();
            stroke("red");
            rect(objects1[i].x , objects1[i].y , objects1[i].width , objects1[i].height);
        }
    }
}

function back1(){
    window.location = "index.html";
}