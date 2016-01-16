``// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require semantic-ui
//= require jquery.slick
//= require_tree .

$(document).ready(function(){
  fetchLeaderboard()
  fetchMostRecentRatings()
  fetchNewestRating()
  slider()
});

// <script> LOAD CONTENT ON INTERVAL
// function loadNowPlaying(){
//   $("#now_playing").load("now_playing.php");
// }
// setInterval(function(){loadNowPlaying()}, 5000);
// </script>


// var key = <%= ENV['KEY'] %>
// API endpoint serving ruby objects


// call 1 --> result ====> call2(result)
   // call 1 success: function(result) { functionToTriggerCall2(result) }

// pass ruby objects to javascript

// "<div>" +
//   "<h1>" + member.name + "</h1>" +
// "</div>"
// $("#leaderboard").append(
//   + "<h5>"
//   + agent.members.map(function(member) {return member.name})
//   + "</h5>"
//   )
// remove the existing content before
// jQuery empty()
// "    " replaceWith()
// "    " text()


// setTimeout()
// setInterval()
