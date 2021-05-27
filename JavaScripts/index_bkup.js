var slidePosition = 1;
SlideShow(slidePosition);

// forward/Back controls
function plusSlides(n) {
  SlideShow((slidePosition += n));
}

//  images controls
function currentSlide(n) {
  SlideShow((slidePosition = n));
}

function SlideShow(n) {
  var i;
  var slides = document.getElementsByClassName("Containers");
  var circles = document.getElementsByClassName("dots");
  if (n > slides.length) {
    slidePosition = 1;
  }
  if (n < 1) {
    slidePosition = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition - 1].style.display = "block";
  circles[slidePosition - 1].className += " enable";
}

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
      let NBAPlayerStatsOutput = "<h2>Top 10 Leaders in Point Per Game</h2>"
      //loop through the JSON files (Get top 10 only)
      for(let i = 0; i < 10; i++){
        console.log(NBAPlayersStats.data[i]["PLAYER"]);
        let _playerName = NBAPlayersStats.data[i]["PLAYER"]
        let _PPG = NBAPlayersStats.data[i]["PTS"]
        let _Image = NBAPlayersStats.data[i]["IMAGE"]
        NBAPlayerStatsOutput += `<ul>
                                    <li> Player Name: ${_playerName}</li>
                                    <li> PPT: ${_PPG}</li>
                                    <img src = "${_Image}">
                                 </ul>`

        ;
      }
      document.getElementById('NBAPlayerStatsOutput').innerHTML = NBAPlayerStatsOutput;
    })
};
