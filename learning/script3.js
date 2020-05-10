fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=imperial&APPID=f2801ff0b074e50ca016981cfc22c8ad"
)
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);

    var icon =
      "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";

    var temp = data.main.temp;

    document.getElementById("1").src = icon;
  });
