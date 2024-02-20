const descricao = document.getElementById("descricao");
const title = document.getElementById("title");
const button = document.getElementById("button");
const descAposApertar = document.getElementById("descAposApertar");
const numberInputs = document.querySelectorAll('input[type="number"]');
function resultado() {
    const numeroUsuario = document.getElementById("numeroUsuario").value;
    const numeroPessoas = document.getElementById("numeroPessoas").value;
    const sorteio = Math.ceil(Math.random() * numeroPessoas);
    if (numeroUsuario > numeroPessoas) {
        title.textContent = "ERRO..."
        descricao.textContent = "Você digitou o número de pessoas sendo maior que o seu número escolhido. Digite novos números";
    }
    else if (numeroUsuario == "") {
        title.textContent = "ERRO..."
        descricao.textContent = "Você esqueceu de digitar algum número. Digite onde não foi preenchido"
    }
    else {
        if (sorteio == numeroUsuario) {
            title.textContent = "GANHOU!"
            descricao.textContent = "PARABÉNS!!! VOCÊ VENCEU O SORTEIO! O NÚMERO SORTEADO FOI O " + numeroUsuario + "!";
            descAposApertar.style.display = "none";
        }
        else {
            title.textContent = "PERDEU..."
            descricao.textContent = "Não foi dessa vez... O número sorteado foi o " + sorteio + ", mas não desista!";
            // descAposApertar.textContent = "Você pode apertar novamente para tentar concorrer novamente!";
            descAposApertar.style.display = "block"
        }
    }
}
