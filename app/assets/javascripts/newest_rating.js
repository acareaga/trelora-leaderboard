function renderNewestRating(rating) {


  var rows = rating.slice(0, 5).map(function(transaction) {
    return (
         "<tr>"
        +"<td>"
          +"<div class='content'>"
          +"<h3>"+ transaction.member_ids +"</h3>"
          +"<div class='sub header'>Customer"
          +"</div>"
        +"</td>"
          +"<td>"
          +"<div class='ui statistic'>"
            +"<div class='value'>"
              + transaction.stars.toFixed(1)
            +"</div>"
            +"<div class='label'>"
              +"Rating"
            +"</div>"
          +"</div><br><br>"
        +"</td></tr>"
      )
  });

  $("#newest_rating").empty().append(rows)
};

function fetchNewestRating() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/transacts/1911/ratings?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
    success: function(ratings) {
      $.each(ratings, function(index, rating) {
        renderNewestRating(rating)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};
