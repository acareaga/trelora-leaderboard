function renderNewestRating(rating) {
  var row = rating.slice(0, 1).map(function(transaction,index) {
    return (
          "<div class='ui grid'>"
          +"<div class='one wide column'><h1><i class='home icon'></i></h1></div>"
          +"<div class='four wide column'><h1>Newest Rating: " + transaction.stars.toFixed(0) + "!</h1></div>"
          +"<div class='eight wide column'></div>"
          +"<div class='three wide column'><h4 class='ui image header' id='member_photo'></h4></div>"
          +"<div class='sixteen wide column'></div>"
          +"<div class='two wide column'></div>"
          +"<div class='twelve wide column'><h1>"+ transaction.comments.substring(0,250) +"</h1></div>"
          +"<div class='two wide column'></div>"
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
          +"<div class='sixteen wide column'><h2>Previous Ratings</h2></div>"
          +"<div class='sixteen wide column'>"
          +"<div class='ui centered grid'>"
          +"<table class='ui very basic celled table'>"
            +"<tbody id='previous_transaction'>"
            +"</tbody>"
          +"</table></div></div>"
      )
  });
  $("#newest_rating").empty().append(row)
};

function fetchTransactionId(allRatings){
  fetchNewestRating(allRatings[0].transact_id)
}

function renderMemberName(rating){
  var member = rating.slice(0, 1).map(function(transaction) {
    return transaction.member_ids
  });
  memberPicture = member[0]
  fetchMemberToPage(memberPicture)
 };

function renderPhotoToPage(photograph){
  var pic = photograph
  var memberCirclePhoto = "<img src='"+ photograph +" 'class='ui tiny circular image'>"

  $("#member_photo").append(memberCirclePhoto)
};

function renderTransactionCode(code){
  $("#transaction_code").append(code)
};

function renderCustomerName(customerName){
  $("#customer_name").append(customerName)
};

function renderPreviousTransactionCustomerName(customerName) {
  $("#previous_transaction_customer_name").append(customerName)
};

function renderPreviousRatingTransactions(arrayOfPreviousTransactions){
  var rows = arrayOfPreviousTransactions.slice(1, 2).map(function(transaction) {
    fetchPreviousTransactionCustomerName(transaction.person_id)
    return (
        "<tr>"
       +"<td class='six wide column'>"
         +"<div class='content'>"
         +"<h3 id='previous_transaction_customer_name'></h3>"
         +"<div class='sub header'>Customer"
         +"</div>"
       +"</td>"
       +"<td class='six wide column'>"
         +"<div class='content'>"
         +"<h3>"+ transaction.created_at +"</h3>"
         +"</div>"
       +"</td>"
       +"<td class='four wide column'>"
         +"<div class='content'>"
         +"<h3>"+ transaction.stars +" Stars</h3>"
         +"</div>"
       +"</td></tr>"
    )
  });

  $("#previous_transaction").empty().append(rows)
};
