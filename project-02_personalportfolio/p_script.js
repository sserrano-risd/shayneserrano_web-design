$.getJSON("projects.json", function(projects) {
     let html = '';
     $.each(projects, function(i, works) {

         html += `
         <div class="project" id="${works.id}-detail">
         <section class="archactive">
         <div class="close">
             <p>x</p>
         </div>
         <div class="projimages">`;
         
          let highestImageCount = 3;

          let allJsonKeys = Object.keys(works);

          let allJsonValues = Object.values(works);

         for(j=1; j<highestImageCount*2+1; j++) {
              if(allJsonKeys[j].match(/^img/) && !(allJsonKeys[j].match(/^imgl/))) {

               
               let image = allJsonValues[j];

               let label = allJsonValues[j+1];

               if(image == undefined) {
                    break;
               } else {
                html += 
                `<div class="imgs">
                     <img src=${image}>
                     <p>${label}</p>
                </div>`;
               }
              }  
         } 

         html += `</div>
         <div class="projtext">
             <h2 id="blue">${works.contentname}</h2>
             <br>
             <h4>Project</h4>
             <p>${works.project}</p>
             <br>
             <h4>Course</h4>
             <p>${works.course}</p>
             <br>
             <h4>Critic</h4>
             <p>${works.critic}</p>
             <br>
             <h4>Description</h4>
             <p>${works.description}</p>
         </div>
         </section>
         </div>`
     });
 
     $(".project-details").append(html);
 });

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
     if($(".active").hasClass("showgrad")) {
          viewNum = 1;
     } else if($(".active").hasClass("showundergrad")) {
          viewNum = 2;
     } else {
          viewNum = 3;
     }
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
               translate = (viewNum-1) * 100;
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
$(".show").click(function() {
     $(".show").removeClass("active");
     $(this).addClass("active");

     if($(this).hasClass("showall")) {
          $(".projicon").show();

     } else if($(this).hasClass("showgrad")) {
          $(".projicon").hide();
          $(".grad").show();

     } else if($(this).hasClass("showundergrad")) {
          $(".projicon").hide();
          $(".undergrad").show();
     }
});

// $("ic01").click(function() {
//      console.log("Click Work");
//      $(".archactive").slideUp();
// });

$(document).on('click', '.projicon', function(){ 
     console.log("Click Work");

     let thisProj = $(this).children("img").attr("id");

     $(".project").hide();

     $(`#${thisProj}-detail`).show();

     $(".project-details").show();
});

$(document).on('click', '.close', function(){ 
     console.log("Click Work");
     $(".project-details").hide();
});


});