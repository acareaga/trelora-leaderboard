function fetchPersonId(rating){
  var personIdArray = rating.map(function(personIds){
    return(
      personIds.person_id
    )
  });
  fetchPeople(personIdArray)
}

var nameCollection = []

function fetchPeople(personIdArray){
personIdArray.map(function(people){
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
