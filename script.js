const botoes = document.querySelectorAll("button");


botoes.forEach(function (botao) {
    let curtiu = false;


    botao.addEventListener("click", function () {
        const contador = botao.querySelector("span");


        let quantidade = Number(contador.textContent);


        if (curtiu === false) {
            quantidade++;
            curtiu = true;
            botao.classList.add("curtido");
        } else {
            quantidade--;
            curtiu = false;
            botao.classList.remove("curtido");
        }


        contador.textContent = quantidade;
    });
});
