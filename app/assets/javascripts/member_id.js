function fetchMemberId(rating){
  var collectionOfMemberIds = rating.slice(0,5).map(function(memberIds){
    return(memberIds.member_ids)
  });
  fetchMemberPhoto(collectionOfMemberIds)
};

// avoid globals
var memberCollection = []

// function renderMemberName(rating){
//   var member = rating.slice(0, 1).map(function(transaction) {
//      return (
//        transaction.member_ids
//        )
//    });
//    memberPicture = member[0]
//    fetchMemberToPage(memberPicture)
//  };
//
// function renderPhotoToPage(photograph){
//   var pic = photograph
//   var memberCirclePhoto =
//
//   "<img src='"+ photograph +" 'class='ui tiny circular image'>"
//
//   $("#member_photo").append(memberCirclePhoto)
// };
