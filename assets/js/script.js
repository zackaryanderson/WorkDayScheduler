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
    
