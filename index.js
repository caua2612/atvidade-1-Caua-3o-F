const prompt = require('prompt-sync');
const entrada = prompt();

const meuNome = "cauã";
const altura = "1.75";
const peso = "65";
const sexo = "masculino";
const cidade = "São José";

console.log(meuNome)

console.log(altura)
console.log(peso)
console.log(sexo)
console.log(cidade)

const nomeCompleto = "Cauã duardo dos santos";
const anoNascimento = 2006;
let anoAtual = 2024;
let idade = 17;
const anoFormatura = 2028;

console.log("olá eu sou " +  nomeCompleto + " estamos no ano " + anoAtual + " minha idade é " + idade + " anos " + " e nasci no ano de " + anoNascimento);

idade = idade + 1;
anoAtual = anoAtual + 1;
console.log("Eu vou fazer " + idade + " anos, ano que vem, em " + anoAtual + ". Quero estar cursando Biomedicina, e pretendo me formar em " + anoFormatura);


//Agência de viagens Hawaii Paris Nova York Rio de Janeiro Tokyo
console.log(" ")
console.log("---------------------------------");
console.log("|      âgencia de viagens       |");
console.log("---------------------------------");
console.log(" ");
const listaDeDestinos = new Array(
  " Hawaii",
  " Paris",
  " Nova York",
  " Rio de Janeiro",
  " Tokyo"
  );
console.log(" ")


listaDeDestinos.push(" Coronel Vivida");
console.log(" ")
console.log(listaDeDestinos);
console.log(" ")
listaDeDestinos.push(" São Paulo");
console.log(" ")
listaDeDestinos.push(" China");
console.log(" ")
listaDeDestinos.push(" Japão");
console.log(" ")
console.log(listaDeDestinos);
console.log(" ")
const LoginCerto = "cauã";
const SenhaCerta = 123;
console.log(" ")
console.log("---------------------------------");
console.log("|         Area de login         |");
console.log("---------------------------------");
console.log(" ");
var login = entrada("Qual é o seu login?");
console.log(" ")
var senha = entrada("Digite sua senha:");
console.log(" ")
while(login != LoginCerto || senha != SenhaCerta){
  console.log("login ou senha incorretos");
  console.log(" ")
login =  entrada("Qual é o seu login?")
  console.log(" ")
  senha = entrada(" Digite sua senha:")
  

}
console.log(" ")
console.log("---------------------------------");
console.log("|    Area de dados pessoais     |");
console.log("---------------------------------");
console.log(" ");
var idadeComprador = entrada("Qual a sua idade?");
console.log(" ")
var nomeComprador = entrada("Qual o seu nome?");
console.log(" ")
if (idadeComprador >=18) {
  console.log("Olá senhor(a) " + nomeComprador );
  console.log(" ")
  console.log("Comprador maior de idade");
  console.log(" ")
  console.log ("destinos disponiveis: " +listaDeDestinos)
  console.log(" ")
  console.log ("escolha seu destino");
}


else {
  console.log("olá senhor(a)" + nomeComprador);
  console.log("infelizmente, não será finalizado o procedimento, pois idade informada é menor de 18 anos de idade.");
  console.log("não será finalizado devido a idade");
}

 var contador = 0;
while (contador<9){
  console.log(listaDeDestinos[contador]);
  contador++;
}
var destino = entrada("digite o número que corresponde ao destino selecionado (1-8)");
console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
