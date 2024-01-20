console.log("olá mundo");

const nomeHeroi = "Zumbi";
const xpHeroi = 10001;
var nivel = "";
console.log(nomeHeroi, xpHeroi);

if (xpHeroi < 1000) {
    nivel = "Ferro";
}
else if (xpHeroi > 1000 & xpHeroi < 2000) {
    nivel = "Bronze";
}
else if (xpHeroi > 2000 & xpHeroi < 5000) {
    nivel = "Prata";
}
else if (xpHeroi > 5000 & xpHeroi < 7000) {
    nivel = "Ouro";
}
else if (xpHeroi > 7000 & xpHeroi < 8000) {
    nivel = "Platina";
}
else if (xpHeroi > 8000 & xpHeroi < 9000) {
    nivel = "Ascendente";
}
else if (xpHeroi > 9000 & xpHeroi < 10000) {
    nivel = "Imortal";
}

else if (xpHeroi >= 10001) {
    nivel = "Radiante";
}
console.log("O Herói de nome " + nomeHeroi + " está no nível de " + nivel);
