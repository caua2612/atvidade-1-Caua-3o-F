const meuNome = "Cauã";

const altura = "1.75";
const peso = "65";
const sexo = "Masculino";
const cidade = "São José";

console.log(meuNome)

console.log(altura)
console.log(peso)
console.log(sexo)
console.log(cidade)

const nomeCompleto = "Cauã Eduardo dos Santos";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2028;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando engenharia mecanica, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris Nova York Rio de Janeiro Tokyo
const listaDeDestinos = new Array(
  "Hawaii",
  "Paris",
  "Nova York",
  "Rio de Janeiro",
  "Tokyo"
  );

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.pus("São Paulo");
listaDeDestinos.pus("China");
listaDeDestinos.pus("Japão");