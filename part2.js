imgg = "";
statuss = ""
objects = [];

get_name = localStorage.getItem("user_name");

document.getElementById("part2").innerHTML="Welcome   " + get_name + "! This Page is for Identifying the Fridge" ;

function preload(){
    imgg = loadImage("1674255197846.jpg");
}

function setup(){
    canvas = createCanvas(950,400);
    canvas.position(200,115);
   
    ObjectDetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("detecting").innerHTML = " Status : Detecting Objects"; 
}

function modelLoaded(){
    console.log("Model is Ready");
    statuss = true;
    ObjectDetector.detect(imgg,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        objects = results;
    }
}

function draw(){
    image(imgg,0,0,950,400)
    
    if(statuss != ""){
        for(i = 0 ; i < objects.length ; i++){
            percent = floor(objects[i].confidence * 100);
            fill("red");
            text(objects[i].label + " " + percent + "%" , objects[i].x , objects[i].y);
            noFill();
            stroke("red");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height);
        }
    }
}

function backk(){
    window.location = "index.html";
}