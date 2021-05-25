/*API Key = fa285b2656b8a9bc7a0d6822429f8b9b */

document
  .getElementById("fetchWeatherDataBtn")
  .addEventListener("click", fetchWeatherData());


async function fetchWeatherData(){
    var key =  'fa285b2656b8a9bc7a0d6822429f8b9b';
    await fetch('https://api.openweathermap.org/data/2.5/weather?q=' +'Louisville'+ '&appid=' + key + '&units=imperial')
        .then((res) => res.json())
        .then((data) => console.log(data))
        .then((data) => {
            let result = '<h'
        })
        .catch((err) => {
            console.error(err);
          });
    }


    async function fetchNBAData() {
        await fetch("https://www.balldontlie.io/api/v1/games")
         .then((res) => res.json())   
         .then((data) =>      {
            let output = '<h2>output</h2>'
            data.forEach(function(team){
                output += `
                   <ul>
                       <li>ID: ${team.home_team}</li>
                       <li>Full Name: ${team.full_name}</li>
                       <li>name: ${team.name}</li>
                   </ul>
                `;
            });
        })
          //console.log(data))
         //.then((data) => document.getElementById('output').innerHTML = data.home_team)
         .catch((err) => {
            console.error(err);
          });
      }