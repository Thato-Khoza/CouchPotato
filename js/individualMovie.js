$(document).ready(function() {
    console.log("jQuery added & ready");

    /*API*/
  const api_key = '7e01193d3f7015b3d6f900efd5b545c2';


    //get URL query
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');


    //check to see if it works
    console.log(id);

    //dynamic http request
    const url = "https://api.themoviedb.org/3/movie/"+ id +"?api_key="+ api_key +"&language=en-US";

    //run dynamic request
    $.getJSON(url, function(result){

        console.log(result);

        //isolated information from returned object
       
        movieName = result.results.original_title;
        rating = result.results.vote_average;
        synopsis = result.results.overview;
        
         //output launch name
         $(".movie-title").text(movieName);
        

       

       
    });


});

  
