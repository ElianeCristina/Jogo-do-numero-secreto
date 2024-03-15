//Jogo do Número Secreto
alert("Seja bem-vindo ao Jogo do Número Secreto!");
let numeroMaximo = 10;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let chute;
console.log(`O número secreto é: ${numeroSecreto}`);
let tentativas = 1;

while (true) {
    chute = prompt("Escolha um número entre 0 e 10");

    if (chute == numeroSecreto) {
        // Criando os elementos da mensagem de êxito
        let mensagemExito = document.createElement('div');
        mensagemExito.classList.add('container__informacoes'); // Adicionando a classe para aplicar os estilos CSS
        let imgTrophy = document.createElement('img');
        imgTrophy.src = './img/trophy.png';
        imgTrophy.alt = 'ícone de um troféu';
        let containerTexto = document.createElement('div');
        containerTexto.classList.add('container__texto'); // Adicionando a classe para aplicar os estilos CSS
        let titulo = document.createElement('h1');
        titulo.textContent = 'Você ';
        let spanAzul = document.createElement('span');
        spanAzul.classList.add('container__texto-azul'); // Adicionando a classe para aplicar os estilos CSS
        spanAzul.textContent = 'acertou!';
        let subtitulo = document.createElement('h2');
        subtitulo.textContent = 'Você descobriu o número secreto!';
        titulo.appendChild(spanAzul);
        containerTexto.appendChild(titulo);
        containerTexto.appendChild(subtitulo);
        mensagemExito.appendChild(imgTrophy);
        mensagemExito.appendChild(containerTexto);

        // Removendo a mensagem de tentativa, se existir
        let mensagemAnterior = document.querySelector('.container__informacoes');
        if (mensagemAnterior) {
            mensagemAnterior.remove();
        }

        // Inserindo a mensagem de êxito no DOM
        document.querySelector('.container').appendChild(mensagemExito);

        // Exibindo a quantidade de tentativas
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        alert(`Muito bem! Você acertou o Número Secreto. Você descobriu com: ${tentativas} ${palavraTentativa}`);
        break;
    } else {
        // Escondendo a mensagem de tentativa, se existir
        let mensagemAnterior = document.querySelector('.container__informacoes');
        if (mensagemAnterior) {
            mensagemAnterior.style.display = 'none';
        }

        if (chute < numeroSecreto) {
            alert(`O número secreto é maior que o chute: ${chute}`);
        } else {
            alert(`O número secreto é menor que o chute: ${chute}`);
        }
        tentativas++;
    }
}