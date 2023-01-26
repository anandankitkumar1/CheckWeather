async function getData(){
    var input = document.getElementById("inputS").value;
    
    var url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=ed5ff6ac09c96143cd9182f8a41ab7e0&units=metric`;
    var data = await fetch(url);
    var jsonData = await data.json(); 
    console.log(jsonData);
    displayData(jsonData);
    


function displayData(data){
var time =  data["list"][0]["dt_txt"];
var city = data["city"]["name"];
var country = data["city"]["country"];
var temp = data["list"][0]["main"]["temp"];
var img = document.getElementById("icon");
var icn = jsonData["list"][0]["weather"][0]["icon"];
var feels = jsonData["list"][0]["weather"][0]["description"];
var speed = jsonData["list"][0]["wind"]["speed"];
var pressure = data["list"][0]["main"]["pressure"];
var tempMax = data["list"][0]["main"]["temp_max"];
var tempMin = data["list"][0]["main"]["temp_min"];
var sunrice = data["city"]["sunrise"];
var sunset = data["city"]["sunset"];
img.src = `http://openweathermap.org/img/wn/${icn}@2x.png`;
document.getElementById("dt_txt").innerText = time ;
document.getElementById("name").innerText = city + ", " ;
document.getElementById("country").innerText = country ;
document.getElementById("temp").innerText = temp + " °C";
document.getElementById("feels_like").innerText = feels;
document.getElementById("speed").innerText = speed;
document.getElementById("pressure").innerText = pressure;
document.getElementById("maxTemp").innerText = tempMax;
document.getElementById("minTemp").innerText = tempMin;
document.getElementById("sunrice").innerText = sunrice;
document.getElementById("sunset").innerText = sunset;
var map = document.getElementById("gmap_canvas");
map.src = `https://maps.google.com/maps?q=${city}t&t=&z=13&ie=UTF8&iwloc=&output=embed`;
};
  
 }
