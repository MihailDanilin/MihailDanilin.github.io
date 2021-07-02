let pesni = ["TIMA-MOKRIE_KROSSI.mp3", "RASA-PCHELOVOD.mp3", "LittleBig-UNO.mp3", "Niletto - Любимка.mp3"]
let nasv = ["Тима Белорусских - Мокрые сапоги", "RASA - Пчеловод", "LittleBig - UNO", "NILETTO - Любимка"]
let kartin = ["uuu.jpg", "PCHELOVOD.jpg", "UNO.png", "iii.jpg"]
let songTitle = document.querySelector("h2")
let fill = document.querySelector(".fill")
let bar = document.querySelector(".seekBar")
let song_num = 0
let song = new Audio()
let back = document.querySelector(".left")
let next = document.querySelector(".right")

function playSong(){
	song.src = pesni[song_num]
	songTitle.textContent = nasv[song_num]
	setTimeout(function(){
		song.play();
	},0)
}
function pauseSong(){
	song.src = pesni[song_num]
	songTitle.textContent = nasv[song_num]
	setTimeout(function(){
		song.pause();
	},0)
}

window.onload = pauseSong()
function playOrPauseSong(){
	if(song.paused){
		song.play();
		document.querySelector(".playOrPause").src = "pause.png"
	}
	else{
		song.pause();
		document.querySelector(".playOrPause").src = "play.png"
	}
}
function nextSong(){
	song_num+=1
	if(song_num == pesni.length){
		song_num=0
	}
	playSong()
	document.querySelector(".img").src = kartin[song_num]
	document.querySelector(".imgMain").src = kartin[song_num]
	document.querySelector(".playOrPause").src = "pause.png"
}
function backSong(){
	song_num-=1
	if(song_num == -1){
		song_num = pesni.length-1
	}
	playSong()
	document.querySelector(".img").src = kartin[song_num]
	document.querySelector(".imgMain").src = kartin[song_num]
	document.querySelector(".playOrPause").src = "pause.png"
}
song.addEventListener("timeupdate", function(){
	let position = song.currentTime / song.duration
	if(position == 1){
		nextSong()
	}
		fill.style.width = position*100 + "%"
})
bar.addEventListener("click", function(e){
	if (!song.ended){
		song.currentTime = e.offsetX*song.duration/bar.clientWidth
		fill.style.width = e.offsetX+"px"
	}
})