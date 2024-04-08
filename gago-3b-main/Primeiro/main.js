const botoes = document.querySelectorAll(".botao");
const texto = document.querySelectorAll(".aba-conteudo");


for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){

        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            texto[j].classList.remove("ativo");
        }

        botoes[i].classList.add("ativo");
        texto[i].classList.add("ativo");
    }
}

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-04-20T00:00:00");

contadores[0].textContent = calculaTempo(tempoObjetivo1);

function calculaTempo(tempoObjetivo1){
    let tempoAtual = newDate();
    let tempoFinal = tempoObjetivo1 - tempoAtual;
    let segundos = Math.floor(tempoFinal /1000);
    let minutos = Math.floor (segundos /60);
    let horas = Math.floor (minutos /60);
    let dias = Math.floor (horas /24);

    segundos %= 60;
    minutos %= 60;
    horas %= 24;

    if (tempoFinal > 0){
        return dias + " dias " + horas + " horas " + minutos + " minutos " + segundos +" segundos ";
    }else{
        return "Prazo Finalizado";
    }

}



function atualizarCronometro(){
    for (let i=0; i<contadores.length;i++){
        contadores[i].textContent = calculaTempo(tempos[i]);
    }
}



