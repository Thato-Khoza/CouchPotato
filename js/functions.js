// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");


    
});

/*sighUp slider*/
$(function(){

    $(".btn").on("click", function(){
        $(".panel").toggleClass("panel-slide");
    });

 });


 $(function(){

    $(".leftBtn").on("click" , function(){
        $(".left").removeClass( "Appear" ).addClass( "disAppear") 
        $(".right").removeClass( "disAppear" ).addClass( "Appear")

    });
    
});

$(function(){

    $(".rightBtn").on("click" , function(){
        $(".right").removeClass( "Appear" ).addClass( "disAppear") 
        $(".left").removeClass( "disAppear" ).addClass( "Appear") ;

    });
});


