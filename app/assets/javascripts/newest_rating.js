function fetchTransactionId(allRatings){

  var transaction = allRatings.slice(0,1).map(function(transactId){
    return (
      transactId.transact_id
    )
  });
  transactUrl = transaction[0]
  fetchNewestRating(transactUrl)
}


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


function fetchMostRecentTransactionFromRatings() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
    success: function(data) {
      $.each(data, function(index, allRatings) {
        fetchTransactionId(allRatings)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};


function fetchNewestRating(transactUrl) {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/transacts/"+transactUrl+"/ratings?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
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
