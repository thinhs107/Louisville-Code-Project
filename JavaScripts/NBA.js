document
  .getElementById("fetchUserDataBtn")
  .addEventListener("click", fetchNBAData());

async function fetchNBAData() {
  await fetch("https://www.balldontlie.io/api/v1/games")
    .then((res) => res.json())
    .then((GameStats) => {
        //let arrayLength = GameStats.data.length;
        //console.log(arrayLength)
        let output= '';
        for (let i = 0; i < 5; i++) {
          let home_team_abb = GameStats.data[i]["home_team"]["abbreviation"];
          let home_team_score = GameStats.data[i]["home_team_score"];
          let away_team_abb = GameStats.data[i]["visitor_team"]["abbreviation"];
          let away_team_score = GameStats.data[i]["visitor_team_score"];
          /*output += `<ul class = "nba-scores">
                      <li>Full Name: ${home_team_full_name} | ${home_team_score} </li>
                      <li>Full Name: ${away_team_full_name} | ${away_team_score}</li>
                    </ul> `*/
            output += `<div class = "nba-scores">
                      <div>Full Name: ${home_team_abb} | ${home_team_score} </div>
                      <div>Full Name: ${away_team_abb} | ${away_team_score}</div>
                      </div>
                      `
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
