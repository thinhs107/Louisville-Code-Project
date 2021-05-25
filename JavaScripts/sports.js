document
  .getElementById("fetchUserDataBtn")
  .addEventListener("click", fetchNBAData());

async function fetchNBAData() {
  await fetch("https://www.balldontlie.io/api/v1/games")
    .then((res) => res.json())
    .then((playerStats) => {
        //let arrayLength = playerStats.data.length;
        //console.log(arrayLength)
        let output = "<h2>output</h2>";
        for (let i = 0; i < playerStats.data.length; i++) {
          let home_team_score = playerStats.data[i]["home_team_score"];
          let home_team_full_name = playerStats.data[i]["home_team"]["full_name"];
          output += `<ul>
                      <li>${home_team_score}</li>
                      <li>Full Name: ${home_team_full_name}</li>
                    </ul> `
                    ;
        }
        console.log(output)
        document.getElementById('output').innerHTML = output
    
      });
}

async function ParseData() {
  const response = await fetch("https://www.balldontlie.io/api/v1/games").then(
    (res) => res.json()
  );
  console.log(response.json());
}

//async function fetchUserData() {
//   await fetch("https://jsonplaceholder.typicode.com/users/")
//     .then((data) => data.json())
//      .then((data) =>
//        data.forEach((obj) => {
//          Object.entries(obj).forEach(([id, name]) => {
//            console.log(`${id} ${name}`);
//          });
//        })
//      )
//      .catch((err) => {
//        console.error(err);
//      });
//  }

//fetch("https://api-nba-v1.p.rapidapi.com/games/date/2021-03-01", {
//	"method": "GET",
//	"headers": {
//		"x-rapidapi-key": "424d87f2c8msh9865fd79c3da7edp1990dbjsndb3a7944e99d",
//		"x-rapidapi-host": "api-nba-v1.p.rapidapi.com"
//	}
//})
//.then(response => {
//	console.log(response);
//})
//.catch(err => {
//	console.error(err);
//});
