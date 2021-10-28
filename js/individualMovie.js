$(document).ready(function() {
    console.log("jQuery added & ready");

    /*API*/
  const api_key = '7e01193d3f7015b3d6f900efd5b545c2';


    //get URL query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const movie_id = urlParams.get('id');


    //check to see if it works
    console.log(movie_id);

    //dynamic http request
    const url = "https://api.themoviedb.org/3/movie/"+ movie_id +"?api_key="+api_key+"&language=en-US&append_to_response=videos,credits,images";


    


    //run dynamic request
    $.getJSON(url, function(result){

      
        console.log(result.title);
        

        //isolated information from returned object
       
        var movieName = result.title;
        var rating = result.vote_average;
        var synopsis = result.overview;
        var releaseDate = new Date(result.release_date).toLocaleString('en-us',{month:'long', year:'numeric'}) ; //changes month to word
        var time = result.runtime;
        
         //output movie name
         $(".movie-title").text(movieName);

          //output description
          $(".movie-synopsis .psynopsis").text(synopsis);

          //output genres

          for(i=0; i< result.genres.length; i++){

            $(".movie-genre").append(

              "<div class='btnGenre'>"+result.genres[i].name+"</div>"

            )

          }//genres

          //output release date
          $(".movie-date p").text(releaseDate);

         //TIME
         var totalMinutes = time;

         //convert time to hours and minutes
         if(time===0){
          $('.convertedHour').text('Time not provided');
          $('.convertedMin').text(' ');   
        
         }else{
          var hours = Math.floor(totalMinutes / 60);          
          var minutes = totalMinutes % 60;
          //output time
          $('.convertedHour').text(hours + " Hours");
          $('.convertedMin').text(minutes + " Minutes");   

         }
          

        

       //output rating
       $(".numRating").text(rating);



       //output trailer
       $(".image-block").append(

        "<iframe width='100%' height='465' src='https://www.youtube.com/embed/"+ result.videos.results[0].key+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
       )


       //ouput cast
       $(".castList").append(
         ""+result.credits.cast[0].name+""

       )
       for(i=1; i<result.credits.cast.length; i++){
        $(".castList").append(
          ","+result.credits.cast[i].name+""
       )

        }

        //similar movies

        //dynamic http request
        for(j=1; j<2; j++){ //loops through all code for the various pages

  
    
          const similarURL='https://api.themoviedb.org/3/movie/'+ movie_id +'/similar?api_key='+api_key+'&page='+j;
        
          
          
          
          
          $.getJSON(similarURL,function(result){

      for(i=0; i<result.results.length;i++){

         //Creating variable for rating value
         var rating = Math.round(result.results[i].vote_average/2); //rounds up the rating devided by 2

      
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

      $(".carouselbox.similar").append(
 
        "      <div class='movieCard'>\
        <img class='movieImg' src='https://image.tmdb.org/t/p/w500"+result.results[i].poster_path+"'/>\
        <div class='overlayBlock'>\
            <div class='divheart'>\
                <img src='../img/other/heart_icon.svg'/>\
            </div><!--divheart-->\
            <div class='overlay'>\
                <div class='hover-text'>\
                    <h6>" + result.results[i].original_title +"</h6>\
                    <h5 class='stars'>"+ stars +"</h5>\
                    <a href = 'individualMovie.html?id="+ result.results[i].id +"'><div class='button1 movieButton'>Discover</div></a>\
                    <div class='button2 movieButton'>Watch Later</div>\
                </div><!--hoverText-->\
             </div><!--overlay-->\
        </div><!--overlayBlock-->\
    </div><!--movieCard-->")

      }
   

    })
  }
       
    });

     
  
  // POPULAR SLIDE
 $("#SimilarLeft").click(function () { 
  $('.carouselbox.similar').scrollLeft($('.carouselbox.similar').scrollLeft() - 800);
});

$("#SimilarRight").click(function () { 
  $('.carouselbox.similar').scrollLeft($('.carouselbox.similar').scrollLeft() + 800);
});

});     
