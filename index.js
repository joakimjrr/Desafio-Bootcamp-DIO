// ## Instruções para entrega
// Desafio Classificador de nível de Herói
// 
// **O Que deve ser utilizado**
// 
// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// 
// ## Objetivo
// 
// Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:
// 
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 6.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante
// 
// ## Saída
// 
// Ao final deve se exibir uma mensagem:
// "O Herói de nome **{nome}** está no nível de **{nivel}**"

let xp = 9001;                                 // Digite a quantidade de XP 
let nome = "Joaquim Junior"                    // Nome do Jogador
let nivel = ""
let ListaDaLiga = [
  {pontos: 1000, liga: "Ferro"},         // 0
  {pontos: 2000, liga: "Bronze"},        // 1
  {pontos: 5000, liga: "Prata"},         // 2
  {pontos: 7000, liga: "Ouro"},          // 3
  {pontos: 8000, liga: "Platina"},       // 4
  {pontos: 9000, liga: "Ascendente"},    // 5
  {pontos: 10000, liga: "Imortal"},      // 6
  {pontos: 10001, liga: "Radiante"},     // 7
]

console.log ("# Desafio Classificador de nível de Herói")
console.log ("Olá Héroi! Qual é o seu nome?")
console.log ("Seja bem vindo, " + nome +"!")

for(let i = 0; ; i++ ) {
  if(xp <= ListaDaLiga[i].pontos) {
    console.log(nome + " Esta na liga " + ListaDaLiga[i].liga)
    nivel = ListaDaLiga[i].liga
      break
  }
  if(xp >= ListaDaLiga[ListaDaLiga.length - 1].pontos){
    console.log(nome + " Esta na liga " + ListaDaLiga[ListaDaLiga.length - 1].liga)
    nivel = ListaDaLiga[ListaDaLiga.length - 1].liga
      break
  }
}
console.log("O herói de nome " + nome + " está no nível de " + nivel)