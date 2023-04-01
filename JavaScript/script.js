const MAX_PALPITES = 10;
const HILL_CLIMBING_LIMITE = 3;
let objetivo, palpite, palpites = []; 
let hillClimbingContador = 0; 
let palpitesRestantes = MAX_PALPITES;

function startGame() {
    objetivo = Math.floor(Math.random() * 100) + 1;
    palpites = [];
    hillClimbingContador = 0;
    palpitesRestantes = MAX_PALPITES;

    document.getElementById("palpites").innerHTML = "";
    document.getElementById("submeter").disabled = false;
    document.getElementById("palpite").value = "";
    document.getElementById("palpite").focus();
}

function fazerPalpite() {
    palpite = parseInt(document.getElementById("palpite").value);
    if (isNaN(palpite) || palpite < 1 || palpite > 100) {
        alert("Insira um número válido entre 1 e 100.");
        return;
    }
    palpites.push(palpite);

    if (palpite < objetivo) {
        document.getElementById("palpites").innerHTML += palpite + " - mais alto!<br>";
        palpitesRestantes--;
    } else if (palpite > objetivo) {
        document.getElementById("palpites").innerHTML += palpite + " - mais baixo!<br>";
        palpitesRestantes--;
    } else {
        document.getElementById("palpites").innerHTML += palpite + "<br>";
        document.getElementById("palpites").innerHTML += "Parabéns, você adivinhou!<br>";
        document.getElementById("submeter").disabled = true;
        return;
    }

    if (palpite == getProxPalpite() && hillClimbingContador < HILL_CLIMBING_LIMITE) {
        hillClimbingContador++;
    } else {
        hillClimbingContador = 0;
    }

    if (palpitesRestantes == 0) {
        document.getElementById("palpites").innerHTML += "Desculpe, você ficou sem palpites. o número era " + objetivo + ".<br>";
        document.getElementById("submeter").disabled = true;
        return;
    }

    document.getElementById("palpite").value = "";
    document.getElementById("palpite").focus();

}

function getProxPalpite() {
    let minPont = Number.MAX_SAFE_INTEGER;
    let melhorPalpite = 0;

    for (let i = 1; i <= 100; i++) {
        let pontuacao = 0;

        for (let j = 0; j < palpites.length; j++) {
            let diff = Math.abs(i - palpites[j]);

            if (diff == 0) {
                pontuacao += 10;
            } else if (diff <= 3) {
                pontuacao += 5;
            } else if (diff <= 10) {
                pontuacao += 1;
            }
        }

        if (pontuacao < minPont) {
            minPont = pontuacao;
            melhorPalpite = i;
        }
    }

    return melhorPalpite;
}

document.getElementById("submeter").addEventListener("click", fazerPalpite);
document.getElementById("palpite").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("submeter").click();
    }
});

startGame();    