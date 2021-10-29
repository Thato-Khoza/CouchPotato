// jQuery Code Here
if(!localStorage.getItem("movieStorage")){
    localStorage.setItem("movieStorage", "");
  } //array

$(document).ready(function() {
    // console.log("jQuery added & ready");
 

 //dynamic http request
  /*API*/
  const api_key = '7e01193d3f7015b3d6f900efd5b545c2';

for(j=1; j<30; j++){ //loops through all code for the various pages

  
    
const URL='https://api.themoviedb.org/3/movie/popular?api_key='+api_key+'&page='+j;




$.getJSON(URL,function(result){
    

   
    console.log(result.results.length);

    
for(i=0; i < result.results.length; i++){
        var genreCode = result.results[i].genre_ids[0]; //variable that holds the genre
        var genreName = ''; //sets genre name to an empty string

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
 
        "      <div data-id='"+ result.results[i].id +"' class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5>"+ stars +"</h5>\
                    <a href = 'individualMovie.html?id="+ result.results[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->" //credits to REINHARDT
    
   

    )
}else if(genreName=="Action"){
    $(".carouselbox.action").append(
 
        "      <div data-id='"+ result.results[i].id +"' class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5>"+ stars +"</h5>\
                    <a href = 'individualMovie.html?id="+ result.results[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->")
}else if(genreName=="Adventure"){
    $(".carouselbox.adventure").append(
 
        "      <div data-id='"+ result.results[i].id +"' class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5>"+ stars +"</h5>\
                    <a href = 'individualMovie.html?id="+ result.results[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->")
}else if(genreName=="Animation"){
    $(".carouselbox.animation").append(
 
        "      <div data-id='"+ result.results[i].id +"' class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5>"+ stars +"</h5>\
                    <a href = 'individualMovie.html?id="+ result.results[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->")
    
}

} //for loop(movie card repetition)
$(".button2").click(function(){
    var cardMovie = $(this).parent().parent().parent().parent()[0];
    var ID = $(cardMovie).data("id");
    var temp = localStorage.getItem("movieStorage"); //gets storage data
    var movieStorage ;

    if(temp == ""){ //if array empty, creates object to store data
        movieStorage = [];
    }else{
        movieStorage = temp.split("-");
    }

    var ifExist = movieStorage.every(item =>{ //bestaan daar iets in die array??
        return item != ID;
    });

    if(ifExist){
        movieStorage.push(ID + "");
        localStorage.setItem("movieStorage", movieStorage.join("-"));
    };

    console.log(cardMovie);
}); //button click watch later

});


} // end of api for loop

var watchLaterList = localStorage.getItem("movieStorage").split("-");

for(var i = 0; i < watchLaterList.length; i++){
    var watchLaterListUrl = 'https://api.themoviedb.org/3/movie/'+ watchLaterList[i] +'?api_key=fbdaccb39dfca477ec685d5da0f0e705&language=en-US'; }

    $.getJSON(watchLaterListUrl, function(watchData){

        $(".carouselbox").append(
 
            "<div data-id='"+ watchData.id +"' class='movieCard'>\
            <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+watchData.poster_path+"'/>\
            <div class='overlayBlock'>\
                <div class='divheart'>\
                    <img src='../img/other/heart_icon.svg'/>\
                </div><!--divheart-->\
                <div class='overlay'>\
                    <div class='hover-text'>\
                        <h6>" + watchData.original_title +"</h6>\
                        <a href = 'individualMovie.html?id="+ watchData.id +"'><div class='button1 movieButton'>Discover</div></a>\
                        <div class='button2 movieButton'>Watch Later</div>\
                    </div><!--hoverText-->\
                 </div><!--overlay-->\
            </div><!--overlayBlock-->\
        </div><!--movieCard-->")

        console.log(watchLaterList);
});



//on click button slider code
 
// COMEDY SLIDE
 $("#AnimationLeft").click(function () { 
    $('.carouselbox.animation').scrollLeft($('.carouselbox.animation').scrollLeft() - 800);
 });
 
 $("#AnimationRight").click(function () { 
    $('.carouselbox.animation').scrollLeft($('.carouselbox.animation').scrollLeft() + 800);
 });
// ACTION SLIDE
 $("#ActionLeft").click(function () { 
    $('.carouselbox.action').scrollLeft($('.carouselbox.action').scrollLeft() - 800);
 });
 
 $("#ActionRight").click(function () { 
    $('.carouselbox.action').scrollLeft($('.carouselbox.action').scrollLeft() + 800);
 });
 // HORROR SLIDE
 $("#AdventureLeft").click(function () { 
    $('.carouselbox.adventure').scrollLeft($('.carouselbox.adventure').scrollLeft() - 800);
 });
 
 $("#AdventureRight").click(function () { 
    $('.carouselbox.adventure').scrollLeft($('.carouselbox.adventure').scrollLeft() + 800);
 });
 // ROMANCE SLIDE
 $("#CrimeLeft").click(function () { 
    $('.carouselbox.crime').scrollLeft($('.carouselbox.crime').scrollLeft() - 800);
 });
 
 $("#CrimeRight").click(function () { 
    $('.carouselbox.crime').scrollLeft($('.carouselbox.crime').scrollLeft() + 800);
 });

 //WATCH LATER
 $("#WatchLaterLeft").click(function () { 
    $('.carouselbox.watchLater').scrollLeft($('.carouselbox.watchLater').scrollLeft() - 800);
 });
 
 $("#WatchLaterRight").click(function () { 
    $('.carouselbox.watchLater').scrollLeft($('.carouselbox.watchLater').scrollLeft() + 800);
 });
 
});     


 
 // function to filter the dates 

function movieFilter() {

    const api_key = '7e01193d3f7015b3d6f900efd5b545c2';
var ArrayMovie=[]
    
const URL='https://api.themoviedb.org/3/movie/popular?api_key='+api_key;
var movieDate=$("#year").find(":selected").text();
console.log(movieDate);
var movieRating=$("#ratingCheck").find(":selected").text();

movieRating=movieRating.split(" ");

// star rating 
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


$.getJSON(URL,function(result){
 ArrayMovie.push(result) 
 $("#filterSearch").empty()
 $("#filterSearch").append("Search Results")
   $(".carouselbox.animation").empty()



arrMovieResult=ArrayMovie[0].results


for(var i=0;i<arrMovieResult.length;i++){
   
    // splitting the date format into year eg 2001-01-12 returns 2001
    var dateParts = arrMovieResult[i].release_date.split("-");

  
if(dateParts[0]==movieDate /*&&  movieRating[0] == star(Math.round(arrMovieResult[i].vote_average/2)*/)
{
 
    $(".carouselbox.animation").append(
 
        "      <div class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+arrMovieResult[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" +arrMovieResult[i].title+"</h6>\
                    <h5>" +star(Math.round(arrMovieResult[i].vote_average/2))+"</h5>\
                    <a href = 'individualMovie.html?id="+ arrMovieResult[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->")




}
}
})


}
  //output data
  $(".accountText h6").text(sessionStorage.getItem("username"));
  $(".User_Name").text(sessionStorage.getItem("username"));
 
 
 
 
 

