
$(document).ready(function(){

  $("a").click(function(){
    $(this).siblings("ul").toggle();

  })


  $(".fa-bars").click(
   function(){
     $(".hamburger-menu").show();
   }
 )
 $(".fa-bars").click(
   function(){
     $(".hamburger-menu").hide();
   }
 )


})
