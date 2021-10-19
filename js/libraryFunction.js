// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");

    /*API*/
const URL='https://api.themoviedb.org/3/movie/popular?api_key=7e01193d3f7015b3d6f900efd5b545c2';

$.getJSON(URL,function(result){
    console.log(result);

    console.log(result.results.length);

    //insert comedy row
    for(i=0; i < result.results.length; i++){

        var genreCode = result.results[i].genre_ids[0]; //variable that holds the genre


        //Creating variable for rating value
        var rating = Math.round(result.results[i].vote_average/2); //rounds up the rating devided by 2

        //filter
        // Movies of page 0 filter 
        if(genreCode === 28){
             genreName = "Action"; 
            }
             else if(genreCode === 12){
                  genreName = "Adventure" 
                }else if(genreCode === 16){
                     genreName = "Animation" 
                }else if(genreCode === 35){ 
                    genreName = "Comady" 
                }else if(genreCode === 80){
                     genreName = "Crime" 
                }else if(genreCode === 99){
                     genreName = "Docomentary" 
                };

        
        
        //output star rating
        function star(rating) {
            var starHTML = ''; //creates empty string where stars will be placed
            var rate = parseInt(rating); //changes rating to int
            var count = 0; //sets counter to zero
            var max = 5; // maximum rating
         
            while(count < rate) { //outputs a star while the counter is less than the user rating
              starHTML += '<i class="material-icons white">grade</i>';
              count++;
            }
            while(max > rate) { //outputs dark stars for the rating the user didnt give
                starHTML += '<i class="material-icons gray">grade</i>';
                max--;
              }
         
        
            return starHTML;
          };

          var stars = star(rating);
                 

        $(".row.movie-insert.comedy").append(


                "<div class = 'col-md-4 col-sm-6 col-12'>\
                <div class='movieCard'>\
                    <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
                    <div class='overlayBlock'>\
                        <div class='divheart'>\
                            <img src='../img/other/heart_icon.svg'/>\
                        </div><!--divheart-->\
                        <div class='overlay'>\
                            <div class='hover-text'>\
                                <h6>" + result.results[i].original_title +"</h6>\
                                <h5>"+ stars +"</h5>\
                                <div class='button1 movieButton'>Discover</div>\
                                <div class='button2 movieButton'>Watch Later</div>\
                            </div><!--hoverText-->\
                         </div><!--overlay-->\
                    </div><!--overlayBlock-->\
                </div><!--movieCard-->\
             </div><!--col-->"
            


            )
           

        }
        
        });
  
// for(i=0; i < 10; i++){
//         $(".row.movie-insert.comedy").append(

//             "<div class='movieCard'>\
//             <img class='movieImg' src=''/>\
//                 <div class='overlayBlock'>\
//                     <div class='divheart'>\
//                         <img src='../img/other/heart_icon.svg'/>\
//                         </div>\
//                            <div class='overlay'>\
//                                <div class='hover-text'>\
//                                    <h6>Movie Name</h6>\
//                                    <h5>Rating</h5>\
//                                 <div class='button1 movieButton'>Discover</div>\
//                             <div class='button2 movieButton'>Watch Later</div>\
//                         </div>\
//                     </div>\
//                 </div>\
//                 </div>"
//         )
//     }

// }); //for(movie card repetition)



    
});




