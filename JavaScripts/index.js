//Splash Screen

//const splash = document.querySelector('.splash');

//document.addEventListener('DOMContentLoaded', (e)=>{
//  setTimeout(() => {
//    splash.classList.add('display-none');
//  }, 4000)
//})



//Players Stats Tab
function PlayersStats(evt, sports) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(sports).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
async function loadStats(q) {
    await fetch("../Stats.json")
      .then((res) => res.json())
      //.then(NBAStats => console.log(NBAStats))
      .then((NBAPlayersStats) => {
        let _NBAPlayerStatsOutput = "";
        let _DESC = "";
        let _STAT = "";
        let _SortValue = [];
        let _TopPlayers = 5;
        if(q === 'PTS'){
          //Create another a function that sort and return top players
          _DESC = 'Point Per Game'
          _STAT = 'PTS'
          _NBAPlayerStatsOutput = `<h3> Top 5 Leaders in ${_DESC}:</h3>`
          _SortValue = sortPlayer(NBAPlayersStats, _STAT)
        }
        if(q === 'REB'){
          _DESC = 'Rebound'
          _STAT = 'REB'
          _NBAPlayerStatsOutput = `<h3> Top 5 Leaders in ${_DESC}:</h3>`
          _SortValue = sortPlayer(NBAPlayersStats, _STAT)
          //console.log(_SortValue);
        }
        if(q === 'AST'){
          _DESC = 'Assits'
          _STAT = 'AST'
          _SortValue = sortPlayer(NBAPlayersStats, _STAT)
          _NBAPlayerStatsOutput = `<h3> Top 5 Leaders in ${_DESC}:</h3>`
        }
        //loop through the JSON files (Get top 5 players only)
        for(let i = 0; i < _TopPlayers; i++){
          //console.log(NBAPlayersStats.data[i]["PLAYER"]);
          //<li><img src = "${_Image}"></li>    
          let _playerName = _SortValue[i]["PLAYER"]
          let _playerStats = _SortValue[i][_STAT]
          let _Image = _SortValue[i]["IMAGE"]
          _NBAPlayerStatsOutput += `<ul>      
                                      <li> Player Name: ${_playerName}</li>  
                                      <li> ${_DESC}: ${_playerStats}</li>                                   
                                   </ul>`
  
          ;
        }
        document.getElementById('NBAPlayerStatsPPT').innerHTML = _NBAPlayerStatsOutput;
      })
  };

  
  function topPlayers(id){
    console.log(id)
    let TopPlayers;
    if(id === 'top05'){
      return TopPlayers = 5;
    }
    if(id === 'top10'){
      return TopPlayers = 10;
    }
    if(id === 'top15'){
      return TopPlayers = 15;
    }
    if(id === 'top20'){
      return TopPlayers = 20;
    }

  }
  //Drop Down
  function PlayersStatDropDown(){
    document.getElementById("NBADropdown").classList.toggle("show");
  }

  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  //Sort Player
  function sortPlayer(NBAPlayersStats,STAT){
    var SortValue = [];
    for(let j = 0; j < NBAPlayersStats.data.length; j++){
      SortValue.push(NBAPlayersStats.data[j])
    }
    //console.log(SortValue);
    SortValue.sort(function (a, b) {
      return  b[STAT] - a[STAT];
      //console.log(a - b);
    });
    //console.log(SortValue);
    return SortValue;
  }
  