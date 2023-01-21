var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();


function Tv(){
    window.location="Tv.html";
    
    
    username = document.getElementById("name").value;
        
    localStorage.setItem("user_name",username);
    
   
}

function Chair(){
    window.location="chair.html";

   
    
}

function Sofa(){
    window.location="sofa.html";

   
    

}

function Table(){
    window.location="table.html";


    

}

function part2(){
    window.location="part2.html";


    

}

