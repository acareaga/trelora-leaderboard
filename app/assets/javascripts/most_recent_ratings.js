function renderMostRecentRatings(rating) {
  var starDifference = rating.slice(0, 5).map(function(feedback){return feedback.star_diff = 5 - feedback.stars})
  var rows = rating.slice(0, 5).map(function(feedback,index) {
    return (
         "<tr>"
        +"<td class='five wide column'>"
          +"<div class='content'>"
          +"<h3 id='people"+index+"'></h3>"
          +"<div class='sub header'>Customer"
          +"</div>"
        +"</td>"
        +"<td class='three wide'>"
          +"<div class='content'>"
          +"<h3>"+ feedback.code.replace(/_/g, ' ') +"</h3>"
          +"</div>"
        +"</td>"
        +"<td class='six wide'>"
          +"<div class='content'>"
          +"<h3>"+ feedback.comments.substring(0,250) +"</h3>"
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
            +"<h4 class='ui image header' id='most_recent_member_photos"+index+"'>"
            +"</h4><br><br>"
        +"</td><br><br></tr>"
      )
  });

  $("#most_recent_ratings").empty().append(rows)
};

function renderMemberPhotos(memberCollection) {
  var rows = memberCollection.map(function(member) {
    return (
      "<h4 class='ui image header'>"
        +"<img src='"+ member +" 'class='ui tiny circular image'>"
      +"</h4>"
    )
  });
  $("#most_recent_member_photos0").empty().append(rows[0])
  $("#most_recent_member_photos1").empty().append(rows[1])
  $("#most_recent_member_photos2").empty().append(rows[2])
  $("#most_recent_member_photos3").empty().append(rows[3])
  $("#most_recent_member_photos4").empty().append(rows[4])

};
function fetchMember(collectionOfMemberIds){
  var memberCollection = []
  collectionOfMemberIds.slice(0,5).map(function(member){
    memberCollection.push(fetchMemberPhoto(member))
  });
  renderMemberPhotos(memberCollection);
};

function fetchPeople(personIdArray){
  var nameCollection = []
  personIdArray.slice(0, 5).map(function(people){
    nameCollection.push(fetchCustomerNames(people))
  });
  renderNames(nameCollection);
};
function fetchMemberId(rating){
  var collectionOfMemberIds = rating.slice(0,5).map(function(memberIds){
    return(memberIds.member_ids)
  });
  fetchMemberPhoto(collectionOfMemberIds)
};

function fetchPersonId(rating){
  var personIdArray = rating.map(function(personIds){
    return(
      personIds.person_id
    )
  });
  fetchPeople(personIdArray)
}

function renderNames(nameCollection){
  var name =  nameCollection.map(function(personName, index){
    return(
      "<h3 id='people"+index+"'>"+personName+"</h3>"
    )
  })
  $("#people0").append(name[0])
  $("#people1").append(name[1])
  $("#people2").append(name[2])
  $("#people3").append(name[3])
  $("#people4").append(name[4])
}
