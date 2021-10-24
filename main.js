function setup(){
    canvas= createCanvas(300, 300);
    canvas.position(610,350);
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide()
    classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/OOiB73Tvo/model.json' , modelLoaded)
}
function modelLoaded(){
    console.log("Model Loaded ;)");
}
function draw(){
image(video, 0, 0, 310, 300);    
classifier.classify(video, gotResult);
}
function gotResult(error, result){
if (error) {
    console.error(error);
} else {
 console.log(result);
 document.getElementById("AnsMeOby").innerHTML=result[0].confidence.toFixed(3);
}
}
function Snappy(){
    save("Hand.jpg")
}