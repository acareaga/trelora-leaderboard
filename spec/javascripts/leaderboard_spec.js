//= require jquery

describe("leaderboard", function() {

  beforeEach(function() {
    jasmine.Ajax.install();
    spyOn(window, "treloraApiKey").andReturn("xxx");
    var html = "<div id='leaderboard'></div>";
    fixture.set(html);
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it("returns the correct data for the ranking", function() {

    var leaderboardUrl = 'http://api.mytrelora.com/ratings/leaderboard?api_key=xxx'
    var leaderboardResponse = JSON.stringify({
      leaderboard: {
        members: [
          {
            id: 1,
            name: "Toby Reschke",
            avatar: {
              avatar: {
                url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/Toby_20FACE.jpg"                    }
              }
            },
            ratings_average: 5
          },
          {
            id: 6,
            name: "Greg Hanson",
            avatar: {
              avatar: {
                url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/Greg.png"
              }
            },
            ratings_average: 5
          }
        ]
      }
    })

    jasmine.Ajax.stubRequest(leaderboardUrl).andReturn({
      "responseText": leaderboardResponse
    });

    renderSlides()

    var expectedAgents = [
      ["Toby Reschke", "Lead Agent"],
      ["Greg Hanson", "Lead Agent"]
    ]

    var actualAgents = $('#leaderboard tr');

    expect(actualAgents).toEqual(expectedAgents);

  })
});
