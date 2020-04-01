
$(document).ready(function(){

  $("a").click(function(){
    $(this).siblings("ul").slideToggle();

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
