Webcam.set({
    width:350,
    height:300,
    image_format :'png',
    png_quality: 90
})

document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
});
}


console.log('ml5 version:', ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/k-8I2E3np/model.json", modelLoaded);

function modelLoaded(){
    console.log("Model is loaded");
}

 function speak(){
     var synth = Window.speechsynthsis;
     speak_data_1 = "The gestuer you are doing is " + Prediction1;
     var  utterThis= new SpeechSynthesisUtterance(speak_data_1);
     synth.speak(utterThis);
 }

 function check(){
     document.getElementById('captured_image');
     classifier.classify(img, got_Result);
 }

 function got_Result(error, results){
     if (error){
         console.error(error);
     }

     else {
         console.log(result);
         document.getElementById("result_gesture_name").innerHTML = result[0].lable;
         Prediction1 = results[0].label;
         speak();
         if (results[0].label == "peace" )
         {
             document.getElementById("update_gesuture").innerHTML = "&#127995;";
         }

         if (results[0].label == "great" )
         {
             document.getElementById("update_gesuture").innerHTML = "&#128076;";
         }

         if (results[0].label == "nice" )
         {
             document.getElementById("update_gesuture").innerHTML = "&#128077;";
         }
     }
 }