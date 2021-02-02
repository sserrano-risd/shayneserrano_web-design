$("document").ready(function(){

    $("#ic01").mouseover(function () {
        $(this).css('opacity','.15');
        $("#plani").show();
    });
    $("#ic01").mouseout(function () {
        $(this).css('opacity','1');
        $("#plani").hide();
    });

    $("#ic02").mouseover(function () {
         $(this).css('opacity','.15');
         $("#tri").show();
    });
    $("#ic02").mouseout(function () {
         $(this).css('opacity','1');
         $("#tri").hide();
    });

    $("#ic03").mouseover(function () {
         $(this).css('opacity','.15');
         $("#geoid").show();
    });
    $("#ic03").mouseout(function () {
         $(this).css('opacity','1');
         $("#geoid").hide();
    });
    
    $("#ic04").mouseover(function () {
        $(this).css('opacity','.15');
        $("#browns").show();
   });
   $("#ic04").mouseout(function () {
        $(this).css('opacity','1');
        $("#browns").hide();
   });
})