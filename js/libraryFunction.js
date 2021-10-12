// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");

    /*API*/
const URL='https://api.themoviedb.org/3/movie/550?api_key=7e01193d3f7015b3d6f900efd5b545c2';

$.getJSON(URL,function(result){
    console.log(result);


    //insert comedy row
    for(i=0;i<result.length;i++){
        if(result[i].genres[0].name == "Comedy"){


            $('.row movie-insert comedy').append(

                "<div class = 'col-md-4 col-sm-6 col-12'>\
                <div class='movieCard'>\
                    <img class='movieImg' src=''/>\
                    <div class='overlayBlock'>\
                        <div class='divheart'>\
                            <img src='../img/other/heart_icon.svg'/>\
                        </div><!--divheart-->\
                        <div class='overlay'>\
                            <div class='hover-text'>\
                                <h6>"+ result[i].original_title+"</h6>\
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
    }



});


    
});



