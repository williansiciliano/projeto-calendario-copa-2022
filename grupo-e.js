function createGame(player1, DateHour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
    <strong>${DateHour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
    `
}

let delay = 0; // iniciando o valor da variável 'delay' para -0.4 segundos que, somando a '0,4' depois, fica ZERO.

function createCard(round, games) { // esta função cria uma div class = "card" (cartãozinho de uma partida na agenda), que era o conteúdo da <main id="cards">
    delay = delay + 0.5; // a cada card criado será adicionado 0.3s ao delay da animação (só podemos botar número na declaração da variável (0.3))
    return ` 
    <div class="card" style="animation-delay: ${delay}s" >
        <h2>${round}</h2>
        <ul>
            ${games}        
        </ul>
    </div>
    `
} // recortamos e colamos o conteúdo de <main id="cards"> nesta função e reposicionamos, lá no mesmo local anterior, este mesmo conteúdo através da chamada desta função, que tem exatamente o mesmo conteúdo anterior da <main id="cards"> 

// ******************** PERSONALIZAR VALORES DA FUNÇÃO createCard ********************
document.querySelector("#cards").innerHTML = 
    createCard("1ª RODADA", createGame("germany", "23/11(Qua) - 10:00", "japan") + createGame("spain", "23/11(Qua) - 13:00", "costa-rica")) +
    createCard("2ª RODADA", createGame("japan", "27/11(Dom) - 7:00", "costa-rica") + createGame("spain", "27/11(Dom) - 16:00", "germany")) +
    createCard("3ª RODADA", createGame("japan", "01/12(Qui) - 16:00", "spain") + createGame("costa-rica", "01/12(Qui) - 16:00", "germany"))  
    
// Abaixo, o script de animação de mudança de imagem do header 
var imgHeader = document.getElementById("img")

function mudarImg() {
    imgHeader.setAttribute('src', './images/qatar-flag.png')
}

function mudarDeNovo(){
    imgHeader.setAttribute('src', './images/simbol-3-496x496.png')
}    
    
// Abaixo, o script para criação das bandeiras dos grupos - ******************** PERSONALIZAR VALORES DE <SCAN> ********************
function createFlags(flag1, flag2, flag3, flag4) {
    return `
    <ul>
    <li><img src="./assets/icon-${flag1}.svg" alt="Bandeira ${flag1}"><scan>Alemanha</scan></li><br>     
    <li><img src="./assets/icon-${flag2}.svg" alt="Bandeira ${flag2}"><scan>Costa Rica</scan></li><br>
    <li><img src="./assets/icon-${flag3}.svg" alt="Bandeira ${flag3}"><scan>Espanha</scan></li><br>
    <li><img src="./assets/icon-${flag4}.svg" alt="Bandeira ${flag4}"><scan>Japão</scan></li><br>
    </ul>
    `
}
// ******************** PERSONALIZAR VALORES DA FUNÇÃO createFlags ********************
document.querySelector("#bandeiras").innerHTML =
    createFlags("germany", "costa-rica", "spain", "japan")