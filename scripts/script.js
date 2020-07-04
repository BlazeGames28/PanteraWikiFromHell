const songs = {
    cowboys: "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=714397&app_id=1",
    primal: "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=714401&app_id=1",
    psycho: "https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=300&height=300&color=007FEB&layout=dark&size=medium&type=tracks&id=714407&app_id=1"
}

const player = document.querySelector(".player")

// Cowboys From Hell

const cowboys1 = document.getElementById("cowboys1")
const cowboys2 = document.getElementById("cowboys2")
const cowboys3 = document.getElementById("cowboys3")

cowboys1.addEventListener('click', () => {
    player.src = songs.cowboys
})

cowboys2.addEventListener('click', () => {
    player.src = songs.primal
})

cowboys3.addEventListener('click', () => {
    player.src = songs.psycho
})