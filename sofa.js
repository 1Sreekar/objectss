img2 = "";
status2 = ""
objects2 = [];

get_name = localStorage.getItem("user_name");

document.getElementById("sofa").innerHTML="Welcome   " + get_name + "! This Page is for Identifying the Sofa" ;

function preload(){
    img2 = loadImage("sofa.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting2").innerHTML = " Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    status2 = true;
    ObjectDetector.detect(img2,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects2 = results;
    }
}

function draw(){
    image(img2,0,0,950,400)
    
    if(status2 != ""){
        for(i = 0 ; i < objects2.length ; i++){
            percent = floor(objects2[i].confidence * 100);
            fill("red");
            text(objects2[i].label + " " + percent + "%" , objects2[i].x , objects2[i].y);
            noFill();
            stroke("red");
            rect(objects2[i].x , objects2[i].y , objects2[i].width , objects2[i].height);
        }
    }
}

function back2(){
    window.location = "index.html";
}