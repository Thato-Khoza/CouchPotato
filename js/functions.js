// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");

 var array=[];
    

    //Social media icon hover
    //changes social media icon when hovered
      $(".social-icon").mouseenter(function(){    //on hover   
        $(this).attr('src',($(this).attr('src').replace('.svg','-hover.svg')))   
    });     

    $(".social-icon").mouseleave(function(){     // off hover  
      $(this).attr('src',($(this).attr('src').replace('-hover.svg','.svg')))  
    }); 
  
//shows overlay card on click{
$('.carouselbox').on('click', '.movieCard', function(){
    console.log("click");
    if($(this).find(".overlayBlock").css("opacity") == "0") { 
      console.log("click");
      $(this).find(".overlayBlock").css("opacity", "1");
    }else if($(this).find(".overlayBlock").css("opacity") == "1"){
        $(this).find(".overlayBlock").css("opacity", "0");
        console.log("hide");
    }
});

//add to watch later{
  $('.carouselbox').on('click', '.movieCard', function(){
    
    array.push((this).div)
    localStorage.setItem("my_Movies", JSON.stringify(array)); //store colors
    console.log(localStorage.getItem("my_Movies"))
    

});

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


// Authentication

$(function(){


  $(".login-btn").on("click", function(){ //here

      var username = $("#username").val();
      var password = $("#password").val();

      url = "https://owmakerspace.co.za/users/data.json";

   $.getJSON(url, function(result){
      console.log(result.users);

      for(i = 0; i < result.users.length; i++){

          if(result.users[i].username === username){
              
              if(result.users[i].password === password){
                  
                  if(result.users[i].account === "active"){
                      window.location.href = "../pages/index.html"; //here
                      sessionStorage.setItem("username", username)
                  }else {
                      $(".message").css("background-color", "orange")
                      $(".message").text("Your account has been suspended! Contact support")
                  }


              }else {
                  $(".message").css("background-color", "tomato")
                  $(".message").text("Your Password or Email does not match")
              }




          }else {
              $(".message").css("background-color", "tomato")
              $(".message").text("Your Password or Email does not match")
          }//checking for user

      }
          
  
  
  
  
  
  
  
    }); // end of http request

  }); //end of click event
  url = "https://owmakerspace.co.za/users/data.json";

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

