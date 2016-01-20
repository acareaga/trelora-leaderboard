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
