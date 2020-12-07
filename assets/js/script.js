//set day at top of page
var currentDay = moment().format("dddd MMMM Do, YYYY");
$(".current-date").append(currentDay);

//change background colors based on if the time is passed or not
var time = new Date().getHours();
console.log(time);

function keepTrack() {
    if (time < 10){
        $(".9").addClass("bg-warning");
        $(".10").addClass("bg-success");
        $(".11").addClass("bg-success");
        $(".12").addClass("bg-success");
        $(".1").addClass("bg-success");
        $(".2").addClass("bg-success");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 11) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-warning");
        $(".11").addClass("bg-success");
        $(".12").addClass("bg-success");
        $(".1").addClass("bg-success");
        $(".2").addClass("bg-success");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 12) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-warning");
        $(".12").addClass("bg-success");
        $(".1").addClass("bg-success");
        $(".2").addClass("bg-success");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 13) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-warning");
        $(".1").addClass("bg-success");
        $(".2").addClass("bg-success");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 14) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-warning");
        $(".2").addClass("bg-success");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 15) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-secondary");
        $(".2").addClass("bg-warning");
        $(".3").addClass("bg-success");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 16) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-secondary");
        $(".2").addClass("bg-secondary");
        $(".3").addClass("bg-warning");
        $(".4").addClass("bg-success");
        $(".5").addClass("bg-success");
    }
    else if (time < 17) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-secondary");
        $(".2").addClass("bg-secondary");
        $(".3").addClass("bg-secondary");
        $(".4").addClass("bg-warning");
        $(".5").addClass("bg-success");
    }
    else if (time < 18) {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-secondary");
        $(".2").addClass("bg-secondary");
        $(".3").addClass("bg-secondary");
        $(".4").addClass("bg-secondary");
        $(".5").addClass("bg-warning");
    }
    else {
        $(".9").addClass("bg-secondary");
        $(".10").addClass("bg-secondary");
        $(".11").addClass("bg-secondary");
        $(".12").addClass("bg-secondary");
        $(".1").addClass("bg-secondary");
        $(".2").addClass("bg-secondary");
        $(".3").addClass("bg-secondary");
        $(".4").addClass("bg-secondary");
        $(".5").addClass("bg-secondary");
    }
};

//editing text boxes
$(".text-input-box").on("click", function () {
    console.log("clicked");
    var text = $(this).find("p")
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass(this.className)
        .val(text);
    $(this).find("p").replaceWith(textInput);
    textInput.trigger("focus");
});

$(".text-input-box").on("blur", "textarea", function () {
    var text = $(this)
        .val()
        .trim();
    var taskP = $("<p>")
        .addClass(this.className,"fill-in")
        .text(text);
    $(this).replaceWith(taskP);
});


// save/load functions
var stuffToDo = {};
var saveTasks = function () {
    if (!stuffToDo) {
        stuffToDo = {
            nine: [],
            ten: [],
            eleven: [],
            twelve: [],
            one: [],
            two: [],
            three: [],
            four: [],
            five: []
        };
    }
    //stuffToDo = $(".text-input-box").text();

    stuffToDo.nine = document.getElementById("nineAM").textContent;
    stuffToDo.ten = document.getElementById("tenAM").textContent;
    stuffToDo.eleven = document.getElementById("elevenAM").textContent;
    stuffToDo.twelve = document.getElementById("twelveAM").textContent;
    stuffToDo.one = document.getElementById("oneAM").textContent;
    stuffToDo.two = document.getElementById("twoAM").textContent;
    stuffToDo.three = document.getElementById("threeAM").textContent;
    stuffToDo.four = document.getElementById("fourAM").textContent;
    stuffToDo.five = document.getElementById("fiveAM").textContent;

    localStorage.setItem("stuffToDo", JSON.stringify(stuffToDo));
};

var loadTasks = function () {

    if (!stuffToDo) {
        stuffToDo = {
            nine: [],
            ten: [],
            eleven: [],
            twelve: [],
            one: [],
            two: [],
            three: [],
            four: [],
            five: []
        };
    }

    stuffToDo = JSON.parse(localStorage.getItem("stuffToDo"));

    //document.getElementById("nineAM").textContent = stuffToDo.nine;
    $(".nineAM").text(stuffToDo.nine);
    $(".tenAM").text(stuffToDo.ten);
    $(".elevenAM").text(stuffToDo.eleven);
    $(".twelveAM").text(stuffToDo.twelve);
    $(".oneAM").text(stuffToDo.one);
    $(".twoAM").text(stuffToDo.two);
    $(".threeAM").text(stuffToDo.three);
    $(".fourAM").text(stuffToDo.four);
    $(".fiveAM").text(stuffToDo.five);

}

loadTasks();

setInterval(function() {
   saveTasks();
   keepTrack();
},1000);
//console.log($(".text-input-box").text());