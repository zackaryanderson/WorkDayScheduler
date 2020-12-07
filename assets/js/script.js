$(".text-input-box").on("click",function() {
    console.log("clicked");
    var text = $(this).find("p")
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("text")
        .val(text);
    $(this).find("p").replaceWith(textInput);
    textInput.trigger("focus");
});

$(".text-input-box").on("blur","textarea",function(){
    var text = $(this)
        .val()
        .trim();
    var taskP = $("<p>")
        .addClass("info")
        .text(text);
    $(this).replaceWith(taskP);
});

// save/load functions
var stuffToDo = {};
var saveTasks = function() {
    //stuffToDo = $(".text-input-box").text();

    stuffToDo.nine = $(".nineAM").val();

    localStorage.setItem("stuffToDo",JSON.stringify(stuffToDo));
};

var loadTasks = function(){
    stuffToDo = JSON.parse(localStorage.getItem("stuffToDo"));
    
    //$(".text-input-box").text(stuffToDo);
    $(".nineAM").text(stuffToDo.nine);

    // for (var i = 1; i < 10; i++){
    //     var things = stuffToDo[i];
    //     $(".id-" + [i]).text(stuffToDo[i])
    //     // var things = $("<p>")
    //     //     .addClass("id-" + [i])
    //     //     .text(stuffToDo[i])
    //     //$(".id-" + [i]).text(stuffToDo[i]);
    // } 
}

loadTasks();

//setInterval(function() {
//    saveTasks();
//},5000);
//console.log($(".text-input-box").text());