let fome = 100;
let higiene = 100;
let sono = 100;
let diversao = 100;
let social = 100;
let treino = 0;
let total = fome + higiene + sono + diversao + social;

//Código do minigame de Pedra-Papel-Tesoura
let choices = ["pedra", "papel", "tesoura"];
let userChoice = "";
let resultado = 0;
let tesoura = document.createElement('img');
tesoura.src = "img/tesoura.png";
tesoura.classList.add("botaoDeTesoura");
tesoura.style.display = "none";
document.body.appendChild(tesoura);

let pedra = document.createElement('img');
pedra.src = "img/pedra.png";
pedra.classList.add("botaoDePedra");
pedra.style.display = "none";
document.body.appendChild(pedra);

let papel = document.createElement('img');
papel.src = "img/papel.png";
papel.classList.add("botaoDePapel");
papel.style.display = "none";
document.body.appendChild(papel);

let brincarContainer = document.getElementById('brincarContainer');
brincarContainer.appendChild(papel, pedra, tesoura);

let computerChoice = "";
let jogadaFeita = false;

function escolher() {
    if (jogadaFeita) return;
    jogadaFeita = true;
    tesoura.style.display = "block";
    pedra.style.display = "block";
    papel.style.display = "block";

    tesoura.removeEventListener("click", escolhaTesoura);
    pedra.removeEventListener("click", escolhaPedra);
    papel.removeEventListener("click", escolhaPapel);

    tesoura.addEventListener("click", escolhaTesoura);
    pedra.addEventListener("click", escolhaPedra);
    papel.addEventListener("click", escolhaPapel);
}

function escolhaTesoura() {
    userChoice = "tesoura";
    pedra.style.display = "none";
    papel.style.display = "none";
    tesoura.style.display = "none";
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    resultado = verificarVencedor();
    diversao = diversao + resultado;
    document.getElementById("diversão").innerHTML = diversao + '%';
    document.getElementById("diversão").style.width = diversao + 'px';
}

function escolhaPedra() {
    userChoice = "pedra";
    pedra.style.display = "none";
    papel.style.display = "none";
    tesoura.style.display = "none";
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    resultado = verificarVencedor();
    diversao = diversao + resultado;
    document.getElementById("diversão").innerHTML = diversao + '%';
    document.getElementById("diversão").style.width = diversao + 'px';
}

function escolhaPapel() {
    userChoice = "papel";
    pedra.style.display = "none";
    papel.style.display = "none";
    tesoura.style.display = "none";
    computerChoice = choices[Math.floor(Math.random() * choices.length)];
    resultado = verificarVencedor();
    diversao = diversao + resultado;
    document.getElementById("diversão").innerHTML = diversao + '%';
    document.getElementById("diversão").style.width = diversao + 'px';
}

function verificarVencedor() {
    alert("Você escolheu " + userChoice + ".\nO computador escolheu " + computerChoice + ".");
    if (userChoice === computerChoice) {
        alert("Empate!");
        resultado = 0;
    } else if (userChoice === "pedra" && computerChoice === "tesoura" ||
        userChoice === "papel" && computerChoice === "pedra" ||
        userChoice === "tesoura" && computerChoice === "papel") {
        alert("Você ganhou!");
        resultado = 30;
    } else {
        alert("O computador ganhou!");
        resultado = 0;
    }
    jogadaFeita = false;
    return resultado;
}


//Resto do código

function Loop(time = 2) {
    if (fome <= 0 || higiene <= 0 || sono <= 0 || diversao <= 0 || social <= 0) {
        document.getElementById("pet").src = "img/preto.jpg";
        document.getElementById("pet").innerHTML = "Você deixou seu pet morrer"
    } else if (total > 400) {
        document.getElementById("pet").src = "img/azul.jpg";
    }
    else if (total > 300) {
        document.getElementById("pet").src = "img/verde.jpg";

    }
    else if (total > 200) {
        document.getElementById("pet").src = "img/cinza.jpg";

    }
    else if (total > 100) {
        document.getElementById("pet").src = "img/amarelo.jpg";

    }
    else if (total > 50) {
        document.getElementById("pet").src = "img/vermelho.jpg";
    }

    fome = fome - parseInt(time);
    if (fome < 0) {
        fome = 0;
    }
    if (fome > 100){
        fome = 100;
    }
    higiene = higiene - parseInt(time);
    if (higiene < 0) {
        higiene = 0;
    }
    if (higiene > 100){
        higiene = 100;
    }
    sono = sono - parseInt(time);
    if (sono < 0) {
        sono = 0;
    }
    if (sono > 100){
        sono = 100;
    }
    diversao = diversao - parseInt(time);
    if (diversao < 0) {
        diversao = 0;
    }
    if (diversao > 100){
        diversao = 100;
    }
    social = social - parseInt(time);
    if (social < 0) {
        social = 0;
    }
    if (social > 100){
        social = 100;
    }

    document.getElementById("fome").innerHTML = fome + '%';
    document.getElementById("higiene").innerHTML = higiene + '%';
    document.getElementById("sono").innerHTML = sono + '%';
    document.getElementById("diversão").innerHTML = diversao + '%';
    document.getElementById("social").innerHTML = social + '%';
}

function Start() {
    let temporizador = setInterval(Loop, 1000);
    if (total <= 0) {
        temporizador = 0;
    }
}

function Alimentar() {
    fome = 100;
    document.getElementById("fome").innerHTML = fome + '%';
    document.getElementById("fome").style.width = fome + 'px';
}

function Limpar() {
    higiene = 100;
    document.getElementById("higiene").innerHTML = higiene + '%';
    document.getElementById("higiene").style.width = higiene + 'px';
}

function Dormir() {
    sono = 100;
    document.getElementById("sono").innerHTML = sono + '%';
    document.getElementById("sono").style.width = sono + 'px';
}

function Brincar() {
    escolher();
  }

function Conversar() {
    social = 100;
    document.getElementById("social").innerHTML = social + '%';
    document.getElementById("social").style.width = social + 'px';
}

Start()
