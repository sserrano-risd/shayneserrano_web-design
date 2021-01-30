$("document").ready(function(){

    $("img").mouseover(function () {
        $(this).css('opacity','.15');
    });
    $("img").mouseout(function () {
        $(this).css('opacity','1');
    });
})