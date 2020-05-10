console.log("About to do my first fetch");

catchMark()
  .then(response => {
    console.log("Yay");
  })

  .catch(error => {
    console.log("error!");
    console.error(error);
  });

async function catchMark() {
  const response = await fetch(
    "https://images.pexels.com/photos/3968443/pexels-photo-3968443.jpeg"
  );
  const blob = await response.blob();
  document.getElementById("mark").src = URL.createObjectURL(blob);
}

fetch("https://sid7c.csb.app/class.json")
  .then(function(resp) {
    return resp.json();
  })
  .then(function(data) {
    console.log(data);
  });
