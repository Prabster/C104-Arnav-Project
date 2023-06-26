Webcam.set({
    width:370,
    height:350,
    image_format:"png",
    png_quality:90
})

camera = document.getElementById("camera");
Webcam.attach(camera);

function captureImage() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='captureImage' src=" + data_uri + ">"
    });
};

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eHvPryfqs/model.json", modelLoaded);

function modelLoaded() {
    alert("Model Is Loaded");
}

console.log(ml5.version);