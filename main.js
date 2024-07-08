window.onload = function() {
    const calcular = document.getElementById("calcular");
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    
    // Limpa os valores do formulário quando a página recarrega
    apagaFormulario(peso, altura);
    
    calcular.addEventListener("click", (e)=>{
        // Previne que a página recarregue sem mostrar o resultado
        e.preventDefault(); 
        if(peso.value != '' && altura.value != '') {
            exibeResultado(peso, altura);
        }
    });

    // TESTES PARA VISUALIZAÇÃO NO CONSOLE
    console.log(calculaImc(53, 1.73))
    console.log(calculaImc(72, 1.73))
    console.log(calculaImc(80, 1.73))
    console.log(calculaImc(100, 1.73))
}

function apagaFormulario(peso, altura) {
    // Limpa os valores do formulário
    peso.value = '';
    altura.value = '';
}

function calculaImc(peso, altura) {
    // Transforma os valores recebidos para os tipos Int/Float
    const pesoNum = Number(peso);
    const alturaNum = Number(altura);

    // Realiza o cálculo do IMC
    let imc = Number(pesoNum / (alturaNum * alturaNum)).toFixed(2);

    // O código abaixo serve para vizualizar os teste no console
    // Exibe no console a classificação correta de acordo com o IMC
    switch (true) {
        case (imc < 18.5):
            console.log(`Classificação: Abaixo do peso (IMC < 18.5`)
            break;
        case (imc >= 18.5 && imc < 24.9):
            console.log(`Classificação: Peso normal (18.5 ≤ IMC < 24.9)`)
            break;
        case (imc >= 25 && imc < 29.9):
            console.log(`Classificação: Sobrepeso (25 ≤ IMC < 29.9)`)
            break;
        case (imc >= 30):
            console.log(`Classificação: Obesidade (IMC ≥ 30)`)
            break;
        default:
            console.log("erro");
            break
    }

    // Retorna o valor do IMC para ser usado em outra funções
    return Number(imc);
}

function exibeResultado(peso, altura) {
    const resultado = document.getElementById("resultado");
    const imc = calculaImc(peso.value, altura.value);

    // Apaga os resultados anteriores ao realizar um novo cálculo de IMC
    resultado.innerHTML = '';

    // Exibe a classificação correta na página de acordo com o IMC
    switch(true) {
        case (imc < 18.5):
            resultado.innerHTML += `<p>Classificação: Abaixo do peso (IMC < 18.5)</p>`
            break;
        case (imc >= 18.5 && imc < 24.9):
            resultado.innerHTML += `<p>Classificação: Peso normal (18.5 ≤ IMC < 24.9)</p>`
            break;
        case (imc >= 25 && imc < 29.9):
            resultado.innerHTML += `<p>Classificação: Sobrepeso (25 ≤ IMC < 29.9)</p>`
            break;
        case (imc >= 30):
            resultado.innerHTML += `<p>Classificação: Obesidade (IMC ≥ 30)</p>`
            break;
        default:
            console.log("erro");
            break
    }

    // Exibe o IMC calculado na página
    resultado.innerHTML += `<p>O seu IMC é: <strong>${imc}</strong></p>`
    console.log(`O seu IMC é: ${imc}`)
}