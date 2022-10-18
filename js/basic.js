const music = document.querySelector("audio")
const img = document.querySelector("img")
const play = document.getElementById("play")
const title = document.getElementById("title")
const artist = document.getElementById("artist")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let progress = document.getElementById("progress")
let total_duration =  document.getElementById("duration")
let current_time =  document.getElementById("current-time")
const progress_div = document.getElementById("progress-div")



play.addEventListener(`click` , setMusic)






let isPlaying = false;

const songs = [
  {
    name:"m1",
    title : "Afghan Jelebi",
    artist : "SYED ASRAR SHAH"
  },

  {
    name:"m2",
    title : "Aila Re Aila",
    artist : " Daler Mehandi, Kalpana Patowary"
  },

  {
    name:"m3",
    title : "on the floor",
    artist : "jennifer lopez"
  },
  {
    name:"m4",
    title : "Tomake chere ami",
    artist : "Deepa Narayan Jha"
  },
  {
    name:"m5",
    title : "tumse milke dilka",
    artist : "Sonu Nigam "
  }
]





















function playMusic() {
  isPlaying = true;
  music.play()
  play.classList.replace("fa-play" , "fa-pause")
  img.classList.add("anime")
  play.title = "Pause"
}

function pauseMusic() {
  isPlaying = false;
  music.pause()
  play.classList.replace("fa-pause","fa-play" )
  img.classList.remove("anime")
  play.title = "Play"


  
}

function  setMusic(){
 
  isPlaying ? pauseMusic() : playMusic()
}



const loadSong = (songs) =>{
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/"+songs.name+".mp3";
  img.src = "image/"+songs.name+".jpg"
};

songsIndex = 0;



function nextSongs(){
  songsIndex =(songsIndex + 1) % songs.length;
  loadSong(songs[songsIndex])
  playMusic()
}

function prevSongs(){
  songsIndex =(songsIndex - 1 + songs.length) % songs.length ;
  loadSong(songs[songsIndex])
  playMusic()
};

prev.addEventListener("click" ,prevSongs)
next.addEventListener("click" ,nextSongs);

music.addEventListener("timeupdate", (event) => {
  // console.log(event);
  const {currentTime, duration} = event.srcElement;
  // console.log(currentTime);
  // console.log(duration);

  let progressTime = (currentTime / duration) * 100;
  progress.style.width = `${progressTime}%`;

  // music duration update
  let min_duration = Math.floor(duration / 60);
  let sec_duration = Math.floor(duration % 60);
  
  let tot_duration = `${min_duration}: ${sec_duration}`;
  if(duration){
    total_duration.textContent = `${tot_duration}`
  }

  // current time update

  let min_currentTime = Math.floor(currentTime / 60);
let sec_currentTime = Math.floor(currentTime % 60);

if(sec_currentTime < 10){
  sec_currentTime = `0${sec_currentTime}`

}

let tot_currentTime = `${min_currentTime}: ${sec_currentTime}`;

  current_time.textContent = `${tot_currentTime}`



 
});

//progess on click
progress_div.addEventListener('click' , (event) =>{
  const {duration} = music
let move_progress = (event.offsetX / event.srcElement.clientWidth) * duration;

music.currentTime = move_progress 

})

// if music end next song start
music.addEventListener("ended", nextSongs )




