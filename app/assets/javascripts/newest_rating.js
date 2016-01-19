function renderNewestRating(rating) {
  var row = rating.slice(0, 1).map(function(transaction) {
    // debugger;
    return (
        //  "<tr>"
        // +"<td>"
        // +"<h4 class='ui image header' id='member_photo'>"
        // +"</h4>"
        //   +"</td></div>"
        //
        //   +"<td>"
        //   +"<div class='ui statistic'>"
        //     +"<div class='value'>"
        //       + "Newest Rating: " + transaction.stars.toFixed(1)
        //     +"</div>"
        //     +"<div class='label'>"
        //       +"Rating"
        //     +"</div>"
        //   +"</div><br><br>"
        // +"</td></tr>"
        //
        //
        // +"<td>"
        //   +"<div class='content'>"
        //   +"<h3 id='people'></h3>"
        //   +"<div class='sub header'>Customer"
        //   +"</div>"
        // +"</td>"
        //
        // +"<tr>"
        // +"<td class='six wide'>"
        //   +"<div class='content'>"
        //   +"<h3>"+ transaction.comments +"</h3>"
        //   +"</div>"
        //   +"<td>"
        // +"<td class='four wide'>"
        //   +"<div class='content'>"
        //   +"<h3>"+ transaction.code +"</h3>"
        //   +"</div>"
        // +"</td></tr>"

          "<div class='ui grid'>"
          +"<div class='one wide column'><h1><i class='home icon'></i></h1></div>"
          +"<div class='four wide column'><h1>Newest Rating: " + transaction.stars.toFixed(0) + "!</h1></div>"
          +"<div class='eight wide column'></div>"
          +"<div class='three wide column'><h4 class='ui image header' id='member_photo'></h4></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='four wide column'></div>"
          +"<div class='four wide column'><h2>"+ transaction.code +"</h2></div>"
          +"<div class='four wide column'><h2>- " + transaction.stars.toFixed(0) + " Stars!</h2></div>"
          +"<div class='four wide column'></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='four wide column'></div>"
          +"<div class='four wide column'><h3>_CUSTOMER NAME_</h3></div>"
          +"<div class='four wide column'><h3>_TRANSACTION CODE_</h3></div>"
          +"<div class='four wide column'></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='two wide column'></div>"
          +"<div class='twelve wide column'><h1>"+ transaction.comments.substring(0,250) +"</h1></div>"
          +"<div class='two wide column'></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='sixteen wide column'><h2>Previous Ratings</h2></div>"
          +"<div class='two wide column'><h3>_PERSON_</h3></div>"
          +"<div class='one wide column'></div>"
          +"<div class='four wide column'><h3>_TIME SINCE MOST RECENT_</h3></div>"
          +"<div class='six wide column'></div>"
          +"<div class='three wide column'>_STAR RATING_</div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='two wide column'><h3>_PERSON_</h3></div>"
          +"<div class='one wide column'></div>"
          +"<div class='four wide column'><h3>_TIME SINCE MOST RECENT_</h3></div>"
          +"<div class='six wide column'></div>"
          +"<div class='three wide column'>_STAR RATING_</div>"
      )
  });
  $("#newest_rating").empty().append(row)
};

function fetchTransactionId(allRatings){
  var transaction = allRatings.slice(0,1).map(function(transactId){
    return (
      transactId.transact_id
    )
  });
  transactUrl = transaction[0]
  fetchNewestRating(transactUrl)
}

function renderMemberName(rating){
  var member = rating.slice(0, 1).map(function(transaction) {
    return (
      transaction.member_ids
      )
  });
  memberPicture = member[0]
  fetchMemberToPage(memberPicture)
 };

function renderPhotoToPage(photograph){
  var pic = photograph
  var memberCirclePhoto =

  "<img src='"+ photograph +" 'class='ui tiny circular image'>"

  $("#member_photo").append(memberCirclePhoto)
};
