// jQuery Code Here
$(document).ready(function() {
    console.log("jQuery added & ready");
 
     
 //get URL query
 const queryString = window.location.search;
 const urlParams = new URLSearchParams(queryString);
 const id = urlParams.get('id');


 //check to see if it works
 console.log(id);

 //dynamic http request
  /*API*/
const api_key = '7e01193d3f7015b3d6f900efd5b545c2';
const URL='https://api.themoviedb.org/3/movie/popular?api_key=7e01193d3f7015b3d6f900efd5b545c2&page=1';
const URL2='https://api.themoviedb.org/3/movie/popular?api_key=7e01193d3f7015b3d6f900efd5b545c2&page=10';
const URL3='https://api.themoviedb.org/3/movie/popular?api_key=7e01193d3f7015b3d6f900efd5b545c2&page=20';


$.getJSON(URL,function(result){
    

    console.log(result.results.length);

    //isolated information from returned object
        movieID = result.results.id; //not in loop, getting one object
        // launch_img = result.links.patch.large; 
        // launch_desc = result.details;
        // launch_succ = result.success; 
        // launch_date = result.date_utc; 
        // flight_num = result.flight_number; 
        // ships = result.ships.length;
        // wikiLink = result.links.wikipedia;


 
    
  
    for(i=0; i < result.results.length; i++){
        var genreCode = result.results[i].genre_ids[0]; //variable that holds the genre
        var genreName = '';

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
                    genreName = "Comedy" 
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

        if(genreName == "Crime"){

        $(".carouselbox.crime").append(
 
        "      <div class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5>"+ stars +"</h5>\
                    <a href = "+"https://api.themoviedb.org/3/movie/"+ movieID +"?api_key="+ api_key +"&language=en-US"+"><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->"

    )
}else if(genreName=="Action"){
    $(".carouselbox.action").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Adventure"){
    $(".carouselbox.adventure").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Animation"){
    $(".carouselbox.animation").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}
} //for loop(movie card repetition)

$.getJSON(URL2,function(result){
    console.log(result);

    console.log(result.results.length);

 
    
  
    for(i=0; i < result.results.length; i++){
        var genreCode = result.results[i].genre_ids[0]; //variable that holds the genre
        var genreName = '';

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
                    genreName = "Comedy" 
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

        if(genreName == "Comedy"){

        $(".carouselbox.comedy").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->"

    )
}else if(genreName=="Action"){
    $(".carouselbox.action").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Adventure"){
    $(".carouselbox.adventure").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Animation"){
        $(".carouselbox.animation").append(
    
            "      <div class='movieCard'>\
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
        </div><!--movieCard-->")
    }
}//for loop(movie card repetition)

$.getJSON(URL,function(result){
    console.log(result);

    console.log(result.results.length);

 
    
  
    for(i=0; i < result.results.length; i++){
        var genreCode = result.results[i].genre_ids[0]; //variable that holds the genre
        var genreName = '';

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
                    genreName = "Comedy" 
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

        if(genreName == "Comedy"){

        $(".carouselbox.comedy").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->"

    )
}else if(genreName=="Action"){
    $(".carouselbox.action").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Adventure"){
    $(".carouselbox.adventure").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}else if(genreName=="Animation"){
    $(".carouselbox.animation").append(
 
        "      <div class='movieCard'>\
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
    </div><!--movieCard-->")
}
} //for loop(movie card repetition)
    
//on click button slider code
 
// COMEDY SLIDE
 $("#ComedyLeft").click(function () { 
    $('.carouselbox.comedy').scrollLeft($('.carouselbox.comedy').scrollLeft() - 800);
 });
 
 $("#ComedyRight").click(function () { 
    $('.carouselbox.comedy').scrollLeft($('.carouselbox.comedy').scrollLeft() + 1350);
 });
// ACTION SLIDE
 $("#ActionLeft").click(function () { 
    $('.carouselbox.action').scrollLeft($('.carouselbox.action').scrollLeft() - 1350);
 });
 
 $("#ActionRight").click(function () { 
    $('.carouselbox.action').scrollLeft($('.carouselbox.action').scrollLeft() + 1350);
 });
 // HORROR SLIDE
 $("#HorrorLeft").click(function () { 
    $('.carouselbox.horror').scrollLeft($('.carouselbox.horror').scrollLeft() - 1350);
 });
 
 $("#HorrorRight").click(function () { 
    $('.carouselbox.horror').scrollLeft($('.carouselbox.horror').scrollLeft() + 1350);
 });
 // ROMANCE SLIDE
 $("#RomanceLeft").click(function () { 
    $('.carouselbox.romance').scrollLeft($('.carouselbox.romance').scrollLeft() - 1350);
 });
 
 $("#RomanceRight").click(function () { 
    $('.carouselbox.romance').scrollLeft($('.carouselbox.romance').scrollLeft() + 1350);
 });
 
});     
});
});
});
 
 
 
 
 

