function renderWeather(){
  $.ajax({
    type: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?zip=80202,us&appid=2de143494c0b295cca9337e1e96b00e0",
    success: function(currentWeather){
      var weather = currentWeather.weather[0].main
      renderGifToPage(weather)
    }
  })
};

function renderGifToPage(weather){
  if (weather == "Clouds"){
    $('.background').css("background-image", "url(http://i.giphy.com/hL8a3mIQK8Ehy.gif)");
  }else if (weather == "Rain") {
        $('.background').css("background-image", "url(http://i.giphy.com/KWuI55w6kpMFq.gif)");
  }else if (weather == "Snow") {
    $('.background').css("background-image", "url(http://i.giphy.com/Yy26NRbpB9lDi.gif)");
  }
};
