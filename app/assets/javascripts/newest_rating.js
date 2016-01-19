function renderNewestRating(rating) {
  var row = rating.slice(0, 1).map(function(transaction,index) {
    return (
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
          +"<div class='four wide column'><h3 id='customer_name'></h3></div>"
          +"<div class='six wide column'><h3 id='transaction_code'></h3></div>"
          +"<div class='two wide column'></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='two wide column'></div>"
          +"<div class='twelve wide column'><h1>"+ transaction.comments.substring(0,250) +"</h1></div>"
          +"<div class='two wide column'></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='sixteen wide column'><h2>Previous Ratings</h2></div>"
          // +"<div class='six wide column' id='previous_transaction'"+ index +"></div>"
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
  fetchNewestRating(allRatings[0].transact_id)
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

function renderTransactionCode(code){
  $("#transaction_code").append(code)
};

function renderCustomerName(customerName){
  $("#customer_name").append(customerName)
};

// function renderPreviousRatingTransactions(previousTransactionRatings){
//   var row = previousTransactionRatings.map(function(transaction,index) {
//     return (
//       +"<div class='two wide column'><h3>" + transaction.person_id + "</h3></div>"
//       +"<div class='one wide column'></div>"
//       +"<div class='four wide column'><h3>" + transaction.created_at + "</h3></div>"
//       +"<div class='six wide column'></div>"
//       +"<div class='three wide column'>" + transaction.stars +"</div>"
//       +"<div class='sixteen wide column'></div>"
//     )}
//   $("#previous_transaction").append(row[0])
// };

// function renderPreviousRatingCustomerName(nameCollection){
//   var name =  nameCollection.map(function(personName, index){
//     return(
//       "<h3 id='people"+index+"'>"+personName.name+"</h3>"
//     )
//     })
//
//     $("#people0").append(name[0])
//     $("#people1").append(name[1])
//     $("#people2").append(name[2])
//     $("#people3").append(name[3])
//     $("#people4").append(name[4])
// };
