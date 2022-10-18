let progressBar = document.getElementById("progressbar")
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = 

function scrol(){
  let progressHeight = (window.pageYOffset / totalHeight) * 100;
  progressBar.style.height = progressHeight + "%";
}