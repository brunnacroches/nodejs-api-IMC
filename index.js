// AGORA VEREMOS COM APLICAR ISSO NA NOSSA CALCULADORA DE IMC

// vamos criar uma nova chave chamada status que vai retornar se a pessoa esta abaixo
//do peso, normal, acima do peso e etc. 



const express = require('express');
const app = express();

const calculadoraIMC = require('./calculadoraIMC');

app.get('/', (req, res) => {
    let peso = req.query.peso;
    let altura = req.query.altura;

    let imc = calculadoraIMC.efetuarCalculoIMC(peso, altura);
    let status = calculadoraIMC.retornaStatusIMC(imc); // criamos uma VARIAVEL chamada STATUS para receber o RETORNO da FUNCAO retornaStatusIMC

    let json = {imc: imc, status: status}; // em seguida CRIAMOS uma VARIAVEL chamada JSON  associamos a ela um JSON de DUAS CHAVES com o IMC e o STATUS

    res.json(json);  // por fim enviamos nosso JSON como RESPOSTA de volta para o FRONT-END
});

app.listen(8080 , () => {
    let data = new Date();
    console.log('Servidor node iniciado em: ' + data);
});