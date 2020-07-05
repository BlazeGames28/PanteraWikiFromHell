const player = document.querySelector(".player")

const songs = {
    cowboys: "714397",
    primal: "714401",
    psycho: "714407S",
    heresy: "714412"
}

const configPlayer = {
    format: "square",  // Formato do player
    autoplay: "true",  // Tocar automaticamente
    playlist: "false", // Lista de músicas
    layout: "dark",    // Tema do player
    size: "medium",    // Tamanho
    type: "tracks",    // Tipo
    width: "300",      // Comprimento
    height: "300"      // Altura
}

const putID = (id_song) => {
    return "https://www.deezer.com/plugins/player?format="+ configPlayer.format +"&autoplay=" + configPlayer.autoplay + "&playlist=" + configPlayer.playlist + "&width=" + configPlayer.width +"&height=" + configPlayer.height + "&color=007FEB&layout=" + configPlayer.layout + "&size=" + configPlayer.size + "&type=" + configPlayer.type + "&id=" + id_song + "&app_id=1"
}

// ----- Cowboys From Hell -----

// Adiciona evento para cada item da tabela de músicas.

document.querySelectorAll(".song-list td").forEach(elemento => elemento.addEventListener("click", () => {
    switch (elemento.id) {
        case "cowboys1":
            player.src = putID(songs.cowboys)
            break
        case "cowboys2":
            player.src = putID(songs.primal)
            break
        case "cowboys3":
            player.src = putID(songs.psycho)
            break
        case "cowboys4":
            player.src = putID(songs.heresy)
            break
        default:
            console.log("Valor Inválido")
            break
    }
}))