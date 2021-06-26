window.onload = function (){
 
  let latitude;
  let longitude;
  let time = document.getElementById("time");
  let city = document.getElementById("city");
  let temp = document.getElementById("temp");
  let des = document.getElementById("des");
  let icon = document.getElementById("icon");
  if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position){
      latitude = position.coords.longitude;
      longitude = position.coords.latitude;
        console.log(latitude);
        console.log(longitude);
      var apiUrl = `https://api.weatherbit.io/v2.0/current?lat=${latitude}&lon=${longitude}&key=db6763b7f46e414985b8a80b6e6cc259`;
      fetch(apiUrl)
      .then(response=>{
        return response.json();})
      .then(data=>{
        console.log(data)
        console.log(data.data)
        time.innerHTML =data.data[0].ob_time;
        city.textContent = data.data[0].city_name;
        temp.textContent = data.data[0].temp;
        des.textContent = data.data[0].weather.description;
        let iconCode = data.data[0].weather.icon;
        icon.innerHTML = '<img src="https://www.weatherbit.io/static/img/icons/'+iconCode+'.png">';
      })
    })
  }

}
//https://www.weatherbit.io/static/img/icons/{icon_code}.png
//icon.innerHTML = '<img src="https://www.weatherbit.io/static/img/icons/c04d.png">'
