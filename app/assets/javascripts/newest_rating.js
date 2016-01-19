function fetchTransactionId(allRatings){
  var transaction = allRatings.slice(0,1).map(function(transactId){
    return (
      transactId.transact_id
    )
  });
  transactUrl = transaction[0]
  fetchNewestRating(transactUrl)
}
          +"<h4 class='ui image header'>"
          +"<img src='"+ member.avatar.avatar.url +" 'class='ui tiny circular image'>"
          +"</h4>"


function renderNewestRating(rating) {
  var rows = rating.slice(0, 1).map(function(transaction) {
    return (
         "<tr>"
        +"<td>"
        +"<h4 class='ui image header' id='member_photo'>"

        +"</h4>"
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
