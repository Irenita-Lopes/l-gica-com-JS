class Hero {
    nome;
    idade;
    tipo;

    atacar() {
        let mensagem = "";
        let ataque = "";

        switch (this.tipo) {
            case 'mago':
                ataque = "magia";
                break;
            case 'guerreiro':
                ataque = "espada";
                break;
            case 'monge':
                ataque = "artes marciais";
                break;
            case 'ninja':
                ataque = "shuriken";
                break;
        }

        mensagem = `O tipo ${this.tipo} atacou usando ${ataque}.`;
        console.log(mensagem);
    }
}

let zumbi = new Hero();
zumbi.nome = "Zumbi";
zumbi.idade = 35;
zumbi.tipo = "guerreiro";

zumbi.atacar();


