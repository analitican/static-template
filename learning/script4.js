const URL =
  "https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=imperial&APPID=f2801ff0b074e50ca016981cfc22c8ad";

axios
  .get(URL)
  .then(response => console.log(response))
  .catch(error => console.log("Error: ", error));
