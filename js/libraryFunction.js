// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");

    /*API*/
const URL='https://api.themoviedb.org/3/movie/550?api_key=7e01193d3f7015b3d6f900efd5b545c2';

$.getJSON(URL,function(result){
    console.log(result);


    //insert comedy row
    for(i=0;i<result.length;i++){
        

            $('.row.movie-insert.comedy').append(

                "<div class = 'col-md-4 col-sm-6 col-12'>\
                <div class='movieCard'>\
                    <img class='movieImg' src=''/>\
                    <div class='overlayBlock'>\
                        <div class='divheart'>\
                            <img src='../img/other/heart_icon.svg'/>\
                        </div><!--divheart-->\
                        <div class='overlay'>\
                            <div class='hover-text'>\
                                <h6>" + result[i].original_title + "</h6>\
                                <h5>Rating</h5>\
                                <div class='button1 movieButton'>Discover</div>\
                                <div class='button2 movieButton'>Watch Later</div>\
                            </div><!--hoverText-->\
                         </div><!--overlay-->\
                    </div><!--overlayBlock-->\
                </div><!--movieCard-->\
             </div><!--col-->"



            )
        
    }

    
  
for(i=0; i < 10; i++){
        $(".carouselbox").append(

        "<div class='movieCard'>\
                <img class='movieImg' src=''/>\
                <div class='overlayBlock'>\
                    <div class='divheart'>\
                        <img src='../img/other/heart_icon.svg'/>\
                        </div>\
                           <div class='overlay'>\
                               <div class='hover-text'>\
                                   <h6>Movie Name</h6>\
                                   <h5>Rating</h5>\
                                <div class='button1 movieButton'>Discover</div>\
                            <div class='button2 movieButton'>Watch Later</div>\
                        </div>\
                    </div>\
                </div>\
        </div>"
    )
} //for loop(movie card repetition)
    
//on click button slider code
var span = document.getElementsByTagName('span');
var div= document.getElementsByClassName('movieCard');
var l = 0;
span[1].onclick = () =>{
    l++;
    for(var i of div)
    {
        if(l==0){i.style.left = "0px";}
        if(l==1){i.style.left = "-740px";}
        if(l==2){i.style.left = "-1480px";}
        if(l==3){i.style.left = "-2220px";}
        if(l==4){i.style.left = "-2960px";}
        if(l>4){l=4;}
    }
}
span[0].onclick = () =>{
    l--;
    for(var i of div)
    {
        if(l==0){i.style.left = "0px";}
        if(l==1){i.style.left = "-740px";}
        if(l==2){i.style.left = "-1480px";}
        if(l==3){i.style.left = "-2220px";}
        if(l==4){i.style.left = "-2960px";}
        if(l<0){l=0;}
    }
}
});     
});




