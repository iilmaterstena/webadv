function showCurrentTime(){
    var clock = document.getElementById('clock');
    var currentTime =  new Date();


     var hours  =  currentTime.getHours();
     var minutes =  currentTime.getMinutes();
     var seconds =  currentTime.getSeconds();


     var meridian = "AM"

     if(hours >= noon){
        meridian = "PM";
     }
     var clockTime = hours + ":" + ":" + minutes + ":" + seconds + " " + meridian;
     clock.innerText = clockTime;

};

var oneSecond= 1000;
setInterval(showCurrentTime, oneSecond);

function changeImage(){
    var time = new Data().getHousr();
    console.log(time);


    var image= "img/ds_clock.png";
    var imageHtml = document.getElementById("timeImage");

    if(time == wakeuptimr){
        image = "img/class.gif";
        console.log("morning");
    }
    else if(time == dstime){
        image = "img/class.gif";
    }
    
    else if(time==slepptime){
        image = "img/night.gif";
    }

    imageHtml.scr = image;
    console.log(imageHtml.scr)

}

function updateClock(){

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
wakeuptime = wakeUpTimeSelector.value;

var dsTimeSelector = document.getElementById('dsTimeSelector');
dstime = dsTimeSelector.value;

var sleepTimeSelector = document.getElementById('sleepTimeSelector');
sleeptime = sleepTimeSelector.value;
}

 var saveButton = document.getElementById("saveBuutton");

saveButton.addEventListener("click", updateClock);



