//Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("ola Mundo!")

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let numero1 =145;
let numero2 = 5;
let soma = numero1 + numero2;
alert (soma);

//3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
let isNumber = 20
if (typeof isNumber == "número") {
  alert("É um número")
} {
  alert("Não é um número");
}

//4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
const isString = "isso é uma string"
if (typeof isString == "string") {
  alert ("É uma string");
} else {
  alert("Não é uma string")
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
const isBoolean = true
if (typeof isBoolean == "Boolean"){
  alert("É um Booleano");
} else {
  alert ("Não é Booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
// Você pode criar outras variáveis ou pode usar as do exercício 2.
// Na resolução dos exercícios 1 ao 8 vamos usar as variáveis do exercício 2.
// Teste mudando os números das variáveis numberOne e numberTwo.

const numberOne = 25
const numberTwo = 20
const sub = numberOne - numberTwo
alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const numberthree = 5
const numberfor = 5
const mult = numberthree * numberfor
alert(mult)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const numberfive = 25
const numbersix = 5
const div = numberfive / numbersix
alert(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
const isEvenNumber = 4
if (isEvenNumber % 2 == 0) {
  alert('É um número par')
} else {
  alert('Não é um número par')
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
const isOddNumber = 5

if (isOddNumber % 2 != 0) {
  alert('É um número ímpar')
} else {
  alert('Não é um número ímpar')
}


