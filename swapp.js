$(document).ready(function() {

  $("#change-red").on("click",function() {
      $(".div1").css("background-color","red");

  });

  $("#change-green").on("click",function() {
      $(".div2").css("background-color","green");

  });

  $("#change-blue").on("click",function() {
      $(".div3").css("background-color","blue");

  });

  $("#make-big").on("click",function() {
    $(".div4").toggleClass("big-div");

  });

  $("#make-small").on("click", function() {
    $(".div5").toggleClass("small-div");
  });


  $("#animate-div").on("click",function(){
    $(".div6").toggleClass("animate");

  });

});
