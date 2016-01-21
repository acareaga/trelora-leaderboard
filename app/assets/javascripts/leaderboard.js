function renderLeaderboard(agent) {
  var rows = agent.members.slice(0, 5).map(function(member) {
    return (
         "<tr>"
        +"<td>"
          +"<h4 class='ui image header' id='leaderboard_member_photo'>"
            +"<img src='"+ member.avatar.avatar.url +" 'class='ui tiny circular image'>"
          +"</h4>"
        +"</td>"
        +"<td>"
          +"<div class='content' id='leaderboard_member_name'>"
          +"<h2>"+ member.name +"</h2>"
          +"<div class='sub header'>Lead Agent"
          +"</div>"
          + "</h4>"
        +"</td>"
        +"<td>"
          +"<div class='ui statistic'>"
            +"<div class='value' id='leaderboard_member_rating'>"
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
