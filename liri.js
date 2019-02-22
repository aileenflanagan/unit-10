
var axios = require("axios");

require("dotenv").config();
var keys= reqire("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var bands= keys.bands;
var omdb= keys.omdb;




let command=process.argv[2];
let search=process.argv[3];
// let search=process.argv.slice(3).join(" ");
let URL="";

console.log(command, search);

// node liri.js concert-this <artist/band name here>
if (command==="concert-this"){
    URL= "https://rest.bandsintown.com/artists/" + search + "/events?app_id="+bands;
    axios.get(URL).then(
        function(response){
          console.log("Here is the info: "+ response);
        }, 
        function(err){
          console.log("got an error", err);
        }
      )
}
// node liri.js spotify-this-song '<song name here>'
else if(command==="spotify-this-song"){
spotify
  .search({ type: 'track', query: search })
  .then(function(response) {
    console.log(response);
  })
  .catch(function(err) {
    console.log(err);
  });
}
// node liri.js movie-this '<movie name here>'
else if(command==="movie-this"){
    URL="http://www.omdbapi.com/?i="+search +"&apikey="+omdb;
    axios.get(URL).then(
        function(response){
          console.log("Here is the info: "+ response.data[0]);
        }, 
        function(err){
          console.log("got an error", err);
        }
      )
}
// node liri.js do-what-it-says
//need to read file and bring in fs
else if(command==="do-what-it-says"){

}
else
    console.log("Sorry, that is not a function of this program");