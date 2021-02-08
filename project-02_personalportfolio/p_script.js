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

   $("#ic05").mouseover(function () {
        $(this).css('opacity','.15');
        $("#urban").show();
   });
   $("#ic05").mouseout(function () {
        $(this).css('opacity','1');
        $("#urban").hide();
   });
   
   $("#ic06").mouseover(function () {
        $(this).css('opacity','.15');
        $("#tech").show();
   });
   $("#ic06").mouseout(function () {
        $(this).css('opacity','1');
        $("#tech").hide();
   });

   $("#ic07").mouseover(function () {
        $(this).css('opacity','.15');
        $("#plexi").show();
   });
   $("#ic07").mouseout(function () {
        $(this).css('opacity','1');
        $("#plexi").hide();
   });
   $("#ic08").mouseover(function () {
        $(this).css('opacity','.15');
        $("#rising").show();
});
   $("#ic08").mouseout(function () {
        $(this).css('opacity','1');
        $("#rising").hide();
});

//    $(".trib").mouseover(function () {
//         $(this).css('opacity','.5');
// });
//    $(".trib").mouseout(function () {
//         $(this).css('opacity','1');
// });

//    $(".trib").click(function(){
//         $(".scroll").css("animation-play-state","running");
// });

let translate = 0;
let viewNum = 3;

$(".arrow").click(function(){
     if($(this).hasClass("trib")) {
          if(translate/100 < viewNum-1) {
               translate += 100;
          } else {
               translate = 0;
          }    
     } else if($(this).hasClass("tria")) {
          if(translate/100 > 0) {
               translate -= 100;
          } else {
               translate = 200;
          }
     }
     $(".scroll").css({
          "transform" : `translateX(-${translate}vw)`
     }); 
     // $(".scroll").transition({
     //      x: '-${translate}vw'
     // });
});

var icon = document.querySelector(".icon");

     for(var i = 0; i < icon.children.length; i++){
          icon.appendChild(icon.children[Math.random() * i | 0]);
};

// $(".filter").click(function(){
//      if($(this).hasClass("showall")) {
//           $(".grad .undergrad").css({
//                "display" : `block`
//           });
//      } else if($(this).hasClass("showgrad")) {
//           $(".undergrad").css({
//                "display" : `none`
//           });
//           $(".grad").css({
//                "display" : `block`
//           });
//      } else if($(this).hasClass("showundergrad")) {
//           $(".undergrad").css({
//                "display" : `block`
//           });
//           $(".grad").css({
//                "display" : `none`
//           });
//      };
// });


})