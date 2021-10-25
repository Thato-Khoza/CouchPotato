// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");


    

    //Social media icon hover
    //changes social media icon when hovered
      $(".social-icon").mouseenter(function(){    //on hover   
        $(this).attr('src',($(this).attr('src').replace('.svg','-hover.svg')))   
    });     

    $(".social-icon").mouseleave(function(){     // off hover  
      $(this).attr('src',($(this).attr('src').replace('-hover.svg','.svg')))  
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


  $(".btn").on("click", function(){ //here

      var username = $(".username").val();
      var password = $(".password").val();

      url = "https://owmakerspace.co.za/users/data.json";

   $.getJSON(url, function(result){
      console.log(result.users);

      for(i = 0; i < result.users.length; i++){

          if(result.users[i].username === username){
              
              if(result.users[i].password === password){
                  
                  if(result.users[i].account === "active"){
                      window.location.href = ""; //here
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

