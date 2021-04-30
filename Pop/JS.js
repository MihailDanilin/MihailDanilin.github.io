let icon = document.querySelectorAll(".divItem")
let imgAr = ["icons8-iron-man-100.png", "icons8-batman-emoji-100.png", "icons8-hawkeye-80.png", "icons8-hulk-80.png", "icons8-captain-america-80.png", "icons8-venom-head-64.png"]
let h3Ar = ["Железный человек", "БетменТ", "Хавкей", "Хулк", "Каптаин Америка", "Просто Веном"]
let worDoc = ["Железный человек (англ. Iron Man); настоящее имя — Энтони Эдвард «Тони» Старк (англ. Anthony Edward \"Tony\" Stark) — персонаж изданий Marvel Comics и их адаптаций, созданный писателем Стэном Ли, сценаристом Ларри Либером и художниками Доном Хэком[en] и Джеком Кёрби; первое появление Железного человека состоялось в комиксе Tales of Suspense #39 в марте 1963 года.", "Бетмен (англ. Batman), изначально Бэт-мен (англ. Bat-man «Человек — летучая мышь») — супергерой, персонаж комиксов издательства DC Comics, впервые появившийся в Detective Comics («Детективные комиксы») № 27 30 марта 1939 года, Бэтмен является одним из самых популярных и известных героев комиксов.", "Бетмен (англ. Batman), изначально Бэт-мен (англ. Bat-man «Человек — летучая мышь») — супергерой, персонаж комиксов издательства DC Comics, впервые появившийся в Detective Comics («Детективные комиксы») № 27 30 марта 1939 года, Бэтмен является одним из самых популярных и известных героев комиксов.", "Соколиный Глаз (иногда — Хоукáй; англ. Hawkeye), также известный как Голиаф (англ. Goliath) и Ронин (англ. Ronin), он же Клинтон Фрэнсис Бартон (англ. Clinton Francis Barton) — супергерой, появляющийся в комиксах издательства «Marvel Comics».", "Халк (англ. Hulk; настоящее имя доктор Роберт Брюс Беннер) — вымышленный персонаж, супергерой комиксов издательства Marvel Comics. Халк был Создан Стэном Ли и Джеком Кёрби, он впервые появился в комиксе «Невероятный Халк» #1 (май 1962 года). С тех пор он стал одним из самых узнаваемых персонажей.", "Капитан Америка (англ. Captain America; настоящее имя — Стивен Роджерс (англ. Steven Rogers) — супергерой комиксов издательства Marvel Comics. Один из самых известных персонажей в мире комиксов. Он был создан писателем Джо Саймоном и художником Джеком Кирби и впервые появился в комиксах 1940-х «Timely Comics».", "Веном (venom в переводе с англ. — «яд») — персонаж, появляющийся в комиксах издательства Marvel Comics, обычно связанных с Человеком-пауком. Первое появление Венома состоялось в The Amazing Spider-Man #300 (май, 1988). Изначально выступавший в качестве суперзлодея, персонаж со временем приобрёл статус антигероя."]

let popo = document.querySelector(".popUp")
let h3 = document.querySelector("h3")
let p = document.querySelector(".ppp")
let imgmi = document.querySelector(".yyy")

icon.forEach( function(e, i) {
	e.onmouseover = function(){
		e.classList.add("animate__animated")
		e.classList.add("animate__wobble")
	}
	e.onmouseout = function(){
		e.className = "divItem"
	}
	e.onclick = function(){
		popo.style.display = "flex"
		h3.textContent = h3Ar[i]
		p.textContent = worDoc[i]
		imgmi.src = imgAr[i]
	}
});
let closeK = document.querySelector(".close")
closeK.onclick = function(){
	popo.style.display = "none"
}
window.onclick = function(e){
	if (e.target.classList.contains("popUp")){
		popo.style.display = "none"
	}
}