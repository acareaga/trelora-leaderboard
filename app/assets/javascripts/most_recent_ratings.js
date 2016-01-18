function renderMostRecentRatings(rating) {
  var starDifference = rating.slice(0, 5).map(function(feedback){return feedback.star_diff = 5 - feedback.stars})
  var rows = rating.slice(0, 5).map(function(feedback,index) {
    return (
         "<tr>"
        +"<td>"
          +"<div class='content'>"
          +"<h3 id='people"+index+"'></h3>"
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
        fetchPersonId(rating)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};

function fetchPersonId(rating){
  var personIdArray = rating.slice(0,5).map(function(personIds){
    return(
      personIds.person_id
    )
  });
  fetchPeople(personIdArray)
}

var nameCollection = []
function fetchPeople(personIdArray){
personIdArray.slice(0,5).map(function(people){
  return (
    $.ajax({
      type: "GET",
      url: "http://api.mytrelora.com/people/"+ people +"?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
      success:function(people){
      $.each(people, function (index,person) {
        nameCollection.push(person)
      })
    }
    })
  )
});
setTimeout(function(){renderNames(nameCollection)}, 1000);
}

function renderNames(nameCollection){
var name =  nameCollection.map(function(personName, index){
  return(
    "<h3 id='people"+index+"'>"+personName.name+"</h3>"
  )
  })

  $("#people0").append(name[0])
  $("#people1").append(name[1])
  $("#people2").append(name[2])
  $("#people3").append(name[3])
  $("#people4").append(name[4])


}
