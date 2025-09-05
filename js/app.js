//Array que guarda a lista de amigos
let amigos = [];
let amigoSecreto = [];

//Função que adiciona os amigos na lista
function adicionar (){
    let nome = document.getElementById('nome-amigo').value;
    amigos.push(nome);

//Listando amigos já adicionados
participantes = document.getElementById('lista-amigos');
participantes.innerHTML = `${amigos}`;

}

//Função que sorteia
function sortear(){
    amigoSecreto = [];
    for (let i = 0; i < amigos.length; i++){       
        let sorteio;
        do {
            sorteio = Math.floor(Math.random() * amigos.length);
        }
        while (sorteio === i || amigoSecreto.includes(amigos[sorteio]));

        amigoSecreto[i] = amigos[sorteio];
    }
    apresentarResultado();    
}

//Função que reinicia o jogo()
function reiniciar() {
    window.location.reload();
}

function apresentarResultado(){
    let resultado = document.getElementById('lista-sorteio');
    for (let i = 0; i < amigos.length; i++){
        resultado.innerHTML = resultado.innerHTML + `${amigos[i]} -> ${amigoSecreto[i]} <br>`;

    }
}