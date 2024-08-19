// Eu adicionei um evento para quando o formulário for enviado
document.getElementById('imc-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Peguei os valores de peso, altura, idade, sexo e nível de atividade
    const peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);
    const idade = parseInt(document.getElementById('idade').value);
    const sexo = document.getElementById('sexo').value;
    const nivelAtividade = document.getElementById('atividade').value;

    // Converti a altura de centímetros para metros
    altura = altura / 100;

    // Validei para garantir que todos os valores são válidos
    if (isNaN(peso) || isNaN(altura) || isNaN(idade)) {
        alert('Por favor, insira valores válidos.');
        return;
    }

    // Calculei o IMC
    const imc = peso / (altura * altura);
    let categoria = '';

    // Determinei a categoria de IMC com base no valor calculado
    if (imc < 18.5) {
        categoria = 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    // Calculei a Taxa de Metabolismo Basal (TMB)
    let tmb;
    if (sexo === 'male') {
        tmb = 88.36 + (13.4 * peso) + (4.8 * altura * 100) - (5.7 * idade);
    } else {
        tmb = 447.6 + (9.2 * peso) + (3.1 * altura * 100) - (4.3 * idade);
    }

    // Calculei as calorias diárias recomendadas com base no nível de atividade
    const niveis = {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        active: 1.725,
        very_active: 1.9
    };
    const caloriasDiarias = tmb * niveis[nivelAtividade];

    // Exibi o resultado na página
    document.getElementById('resultado').innerHTML = `
        <p>Seu IMC é ${imc.toFixed(2)} (${categoria}).</p>
        <p>Taxa de Metabolismo Basal (TMB): ${tmb.toFixed(2)} calorias/dia.</p>
        <p>Calorias diárias recomendadas: ${caloriasDiarias.toFixed(2)} calorias/dia.</p>
    `;
});
