var timerHeaderEl = document.getElementById("currentDay");
var past = document.getElementsByClassName("past")
var present = document.getElementsByClassName("present");
var future = document.getElementsByClassName("future")

setInterval(timeHeader, 500);

function timeHeader() {
  timerHeaderEl.innerHTML = moment().format("[Today is] dddd, MMM Do, YYYY, h:mm:s");
};

setInterval(timeOfDay, 10000)

function timeOfDay() {
    var time = moment().hour();
    console.log(time)
    var timeFuture;
    var timePresent;
    $(".form-control").each(function(){
        var id = parseInt($(this).attr("id"))
        if (time > id) {
            $(this).addClass("past")
        } else  if (time === id) {
            $(this).addClass("present")
            $(this).removeClass("past")
        } else {
            $(this).addClass("future")
            $(this).removeClass("past")
            $(this).removeClass("present")
        }
    })
}

$(".btn").on("click", function(){
    var key = $(this).parent().siblings().attr("id")
    var value = $(this).parent().siblings().val()
    localStorage.setItem(key, value)
})

function displayTask() {
    $(".form-control").each(function(){
        var value = $(this).parent().siblings().val()
        if(value != "undefined"){
            $(this).attr("placeholder",localStorage.getItem("value"))
        }
    })
}

timeOfDay();
displayTask();  
