let contandoDobra = 0;
let dobra = "";

const nomeNave = prompt("Qual o nome da Nave?");

dobra = prompt("Deseja entrar em Dobra Espacial?\n1. Sim\n2. Não");

while (dobra == "1") {
  contandoDobra += 1;
  dobra = prompt("Deseja entrar em Dobra Espacial?\n1.Sim\n2.Não");
}

alert(
  "Nome da Nave: " +
    nomeNave +
    "\nQuantidade de Dobras: " +
    contandoDobra +
    " Dobras"
);
