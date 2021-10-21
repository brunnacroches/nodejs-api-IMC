// AGORA VEREMOS COM APLICAR ISSO NA NOSSA CALCULADORA DE IMC

// vamos criar uma nova chave chamada status que vai retornar se a pessoa esta abaixo
//do peso, normal, acima do peso e etc. 



function efetuarCalculoIMC(peso, altura){  /// ??? ///
  let imc = peso / (altura * altura);  /// ??? ///

  return imc;  /// ??? ///
}  /// ??? ///

function retornaStatusIMC(imc)    // criamos essa funcao que RECEBE o parametro IMC
{
  let status;                     // dentro da funcao acima ADD uma VARIAVEL chamada STATUS 
                                  //e uma ESTRUTURA CONDICIONAL para CHECAR e DEFINIR o status do USUARIO

  if(imc < 18.5)
  {
      status = 'Abaixo do peso';
  }
  else if(imc >= 18.5 && imc < 24.9)
  {
      status = 'Peso Normal';
  }
  else if(imc >= 24.9 && imc < 30)
  {
      status = 'Acima do peso';
  }
  else
  {
      status = 'Obeso';
  }

                                  //e uma ESTRUTURA CONDICIONAL para CHECAR e DEFINIR o status do USUARIO//
  return status; /// ??? ////
}

exports.efetuarCalculoIMC = efetuarCalculoIMC;  /// ??? ///
exports.retornaStatusIMC = retornaStatusIMC; // para finalizar as alteracoes no arquivo calculadoraIMC nos EXPORTAMOS a funcao retornaStatuIMC