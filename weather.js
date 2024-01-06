let loc=document.getElementById('location');
let apik='06982c9bb21bb95bb14d4589cd8e8efd';
let api='https://api.openweathermap.org/data/2.5/weather?q=';
function search()
{
     let query=api+loc.value+'&APPID='+apik;
     fetch(query).then((data)=>{
        return data.json();
     }).then((data)=>{
            document.getElementById('name').innerText="Weather of " + data.name;
            document.getElementById('description').innerText=data["weather"]["0"]["description"];
            document.getElementById('temp').src="Temperature :" + data["main"]["temp"];
            document.getElementById('wind').innerText="Wind speed :" + data["wind"]["speed"] + "km/hr";
            document.getElementById('humidity').innerText="Humidity :" + data["main"]["humidity"];
            document.getElementById('pressure').innerText="Pressure :" + data["main"]["pressure"];
        })
}