// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");


    

    //Active Nav Icon
    
    $('.activeNav').attr('src', 'https://www.clipartmax.com/png/middle/52-528905_how-to-set-use-blue-arrow-blue-svg-vector-clip-art-blue.png');
});

const signingUp = document.getElementById('signing-up');
    signingIn = document.getElementById('signing-in');
    logIn = document.getElementById('log-in');
    logUp = document.getElementById('log-up');

signingUp.addEventListener('click', ()=>{

    logIn.classList.remove('block');
    logUp.classList.remove('none');

    logIn.classList.add('none');
    logUp.classList.add('block');
});

signingIn.addEventListener('click', ()=>{

    logIn.classList.remove('none');
    logUp.classList.remove('block');

    logIn.classList.add('block');
    logUp.classList.add('none');
});













//sighUp slider
//$(function(){

  //  $(".btn").on("click", function(){
    //    $(".panel").toggleClass("panel-slide");
    //});

 //});


 //$(function(){

   // $(".leftBtn").on("click" , function(){
     //   $(".left").removeClass( "Appear" ).addClass( "disAppear") 
       // $(".right").removeClass( "disAppear" ).addClass( "Appear")

    //});
    
//});

//$(function(){

  //  $(".rightBtn").on("click" , function(){
   //     $(".right").removeClass( "Appear" ).addClass( "disAppear") 
     //   $(".left").removeClass( "disAppear" ).addClass( "Appear") ;

    //});
//}); 

