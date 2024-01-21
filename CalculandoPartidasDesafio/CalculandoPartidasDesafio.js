function calculaRanking(vitoria, derrota) {
    return vitoria - derrota;
}

function imprimeRanking(vitoria, derrota) {
    var nivel = "";
    let rankingFinal = calculaRanking(vitoria, derrota);

    if (rankingFinal < 10) {
        nivel = "Ferro";
    }
    else if (rankingFinal >11 & rankingFinal < 20) {
        nivel = "Bronze"; 0
    }
    else if (rankingFinal > 21 & rankingFinal < 50) {
        nivel = "Prata";
    }
    else if (rankingFinal > 51 & rankingFinal < 80) {
        nivel = "Ouro";
    }
    else if (rankingFinal > 81 & rankingFinal < 90) {
        nivel = "Diamante";
    }
    else if (rankingFinal > 91 & rankingFinal < 100) {
        nivel = "Lendário";
    }
    else {
        nivel = "Imortal";
    }

    console.log("O Herói tem de saldo de " + vitoria + " está no nível de " + nivel);
}



imprimeRanking(150, 7);



