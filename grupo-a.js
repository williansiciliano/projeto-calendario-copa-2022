// Começar olhando a chamada 'document.querySelector("#cards").innerHTML =' e entender que a função 'createGame' está dentro da 'createCard'
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
    delay = delay + 0.5; // a cada card criado será adicionado 0.5s ao delay da animação (só podemos botar número na declaração da variável (0.5))
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
    createCard("1ª RODADA", createGame("qatar", "20/11(Dom) - 13:00", "ecuador") + createGame("senegal", "21/11(Seg) - 13:00", "netherlands")) +
    createCard("2ª RODADA", createGame("qatar", "28/11(Sex) - 10:00", "senegal") + createGame("netherlands", "28/11(Sex) - 13:00", "ecuador")) +
    createCard("3ª RODADA", createGame("netherlands", "29/11(Ter) - 12:00", "qatar") + createGame("ecuador", "29/11(Ter) - 12:00", "senegal"))  
    
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
    <li><img src="./assets/icon-${flag1}.svg" alt="Bandeira ${flag1}"><scan>Catar</scan></li><br>     
    <li><img src="./assets/icon-${flag2}.svg" alt="Bandeira ${flag2}"><scan>Equador</scan></li><br>
    <li><img src="./assets/icon-${flag3}.svg" alt="Bandeira ${flag3}"><scan>Senegal</scan></li><br>
    <li><img src="./assets/icon-${flag4}.svg" alt="Bandeira ${flag4}"><scan>Holanda</scan></li><br>
    </ul>
    `
}
// ******************** PERSONALIZAR VALORES DA FUNÇÃO createFlags ********************
document.querySelector("#bandeiras").innerHTML =
    createFlags("qatar", "ecuador", "senegal", "netherlands")