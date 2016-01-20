
describe("leaderboard calls", function() {

  beforeEach(function() {
    jasmine.Ajax.install();
    spyOn(window, "treloraApiKey").andReturn("xxx")
  });

  afterEach(function() {
    jasmine.Ajax.uninstall();
  });

  it("specifying response when you need it", function() {

    jasmine.Ajax.stubRequest('http://api.mytrelora.com/ratings/leaderboard?api_key=xxx').andReturn({
        "responseText":

        JSON.stringify({
          leaderboard: {
            members: [
              {
                id: 1,
                name: "Toby Reschke",
                atname: "toby",
                avatar: {
                  avatar: {
                    url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/Toby_20FACE.jpg",
                    small: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/small_Toby_20FACE.jpg"
                    },
                    default: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/default_Toby_20FACE.jpg"
                    },
                    medium: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/medium_Toby_20FACE.jpg"
                    },
                    large: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/large_Toby_20FACE.jpg"
                    },
                    high_def: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/1/high_def_Toby_20FACE.jpg"
                    }
                  }
                },
                ratings_average: 5
              },
              {
                id: 6,
                name: "Greg Hanson",
                atname: "greg",
                avatar: {
                  avatar: {
                    url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/Greg.png",
                    small: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/small_Greg.png"
                    },
                    default: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/default_Greg.png"
                    },
                    medium: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/medium_Greg.png"
                    },
                    large: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/large_Greg.png"
                    },
                    high_def: {
                      url: "https://mytrelora-production.s3.amazonaws.com/members/avatar/6/high_def_Greg.png"
                    }
                  }
                },
                ratings_average: 5
              }
            ]
          }
        })



      });
});
