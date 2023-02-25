let fome = 100;
let higiene = 100;
let sono = 100;
let diversao = 100;
let social = 100;
let treino = 0;

function Loop(time = 2) {
    let total = fome + higiene + sono + diversao + social;
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
    higiene = higiene - parseInt(time);
    sono = sono - parseInt(time);
    diversao = diversao - parseInt(time);
    social = social - parseInt(time);

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
    diversao = 100;
    document.getElementById("diversão").innerHTML = diversao + '%';
    document.getElementById("diversão").style.width = diversao + 'px';
}

function Conversar() {
    social = 100;
    document.getElementById("social").innerHTML = social + '%';
    document.getElementById("social").style.width = social + 'px';
}

Start()