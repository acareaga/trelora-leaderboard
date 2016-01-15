function renderMostRecentRatings(rating) {


  var rows = rating.slice(0, 5).map(function(feedback) {
    return (
         "<tr>"
        +"<td>"
          +"<div class='content'>"
          +"<h3>"+ feedback.person_id +"</h3>"
          +"<div class='sub header'>Customer"
          +"</div>"
        +"</td>"
        +"<td class='four wide'>"
          +"<div class='content'>"
          +"<h3>"+ feedback.code +"</h3>"
          +"</div>"
        +"</td>"
        +"<td class='six wide'>"
          +"<div class='content'>"
          +"<h3>"+ feedback.comments +"</h3>"
          +"</div>"
          +"<td>"
          +"<div class='ui statistic'>"
            +"<div class='value'>"
              + feedback.stars.toFixed(1)
            +"</div>"
            +"<div class='label'>"
              +"Rating"
            +"</div>"
          +"</div>"
          +"</td>"
          +"<td class='four wide'>"
            +"<div class='content'>"
            +"<h3>"+ feedback.member_ids +"</h3>"
            +"</div><br><br>"
        +"</td><br><br></tr>"
      )
  });

  $("#most_recent_ratings").empty().append(rows)
};

function fetchMostRecentRatings() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
    success: function(ratings) {
      $.each(ratings, function(index, rating) {
        renderMostRecentRatings(rating)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};
