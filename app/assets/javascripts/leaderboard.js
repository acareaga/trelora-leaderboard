function renderLeaderboard(agent) {

  var rows = agent.members.slice(0, 5).map(function(member) {
    return (
         "<tr>"
        +"<td>"
          +"<h4 class='ui image header'>"
            +"<img src='"+ member.avatar.avatar.url +" 'class='ui tiny circular image'>"
          +"</h4>"
        +"</td>"†
        +"<td>"
          +"<div class='content'>"
          +"<h2>"+ member.name +"</h2>"
          +"<div class='sub header'>Lead Agent"
          +"</div>"
          + "</h4>"
        +"</td>"
        +"<td>"
          +"<div class='ui statistic'>"
            +"<div class='value'>"
              + member.ratings_average.toFixed(1)
            +"</div>"
            +"<div class='label'>"
              +"Rating"
            +"</div>"
          +"</div><br>"
        +"</td></tr>"
      )
  });

  $("#leaderboard").empty().append(rows)
};

function fetchLeaderboard() {
  $.ajax({
    type: "GET",
    url:  "http://api.mytrelora.com/ratings/leaderboard?api_key=dHVyaW5nOnR1cmluZw%3D%3D",
    success: function(leaderboard) {
      $.each(leaderboard, function(index, agent) {
        renderLeaderboard(agent)
      }
    )},
    error: function(xhr) {
      console.log(xhr.responseText)
    }
  })
};
