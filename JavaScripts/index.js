//Players Stats Tab
function PlayersStats(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  window.onload = async function loadStats() {
    await fetch("../Stats.json")
      .then((res) => res.json())
      //.then(NBAStats => console.log(NBAStats))
      .then((NBAPlayersStats) => {
        let NBAPlayerStatsOutput = "<h2>Top 5 Leaders in Point Per Game</h2>"
        //loop through the JSON files (Get top 10 only)
        for(let i = 0; i < 5; i++){
          console.log(NBAPlayersStats.data[i]["PLAYER"]);
          let _playerName = NBAPlayersStats.data[i]["PLAYER"]
          let _PPG = NBAPlayersStats.data[i]["PTS"]
          let _Image = NBAPlayersStats.data[i]["IMAGE"]
          NBAPlayerStatsOutput += `<ul>
                                      <li><img src = "${_Image}"></li>      
                                      <li> Player Name: ${_playerName}</li>
                                      <li> PPT: ${_PPG}</li>
                                   </ul>`
  
          ;
        }
        document.getElementById('NBAPlayerStatsOutput').innerHTML = NBAPlayerStatsOutput;
      })
  };
  