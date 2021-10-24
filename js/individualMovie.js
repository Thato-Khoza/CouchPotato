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

        console.log(result);
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

        "<iframe width='710' height='465' src='https://www.youtube.com/embed/"+ result.videos.results[0].key+"' title='YouTube video player' frameborder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>"
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
       
       
    });


   



});

  
