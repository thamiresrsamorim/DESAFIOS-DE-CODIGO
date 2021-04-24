/* Animal
Desafio
Neste problema, você deverá ler 3 palavras que definem o tipo de animal possível segundo o esquema abaixo, da esquerda para a direita.  Em seguida conclua qual dos animais seguintes foi escolhido, através das três palavras fornecidas.

Entrada
A entrada contém 3 palavras, uma em cada linha, necessárias para identificar o animal segundo a figura acima, com todas as letras minúsculas.

Saída
Imprima o nome do animal correspondente à entrada fornecida.
*/

let x = gets(); 
let y = gets(); 
let z = gets();

if ((x === "vertebrado") && (y === "ave")  && (z === "carnivoro")) {
  console.log("aguia");
} else if ((x === "vertebrado") && (y === "ave")  && (z === "onivoro")) {
  console.log("pomba");
} else if ((x === "vertebrado") && (y === "mamifero")  && (z === "onivoro")) {
  console.log("homem");
} else if ((x === "vertebrado") && (y === "mamifero")  && (z === "herbivoro")) {
  console.log("vaca");
} else if ((x === "invertebrado") && (y === "inseto")  && (z === "hematofago")) {
  console.log("pulga");
} else if ((x ===  "invertebrado") && (y === "inseto")  && (z === "herbivoro")) {
  console.log("lagarta");
} else if ((x  === "invertebrado") && (y === "anelideo") && (z === "hematofago")) {
  console.log("sanguessuga");
} else {
  console.log("minhoca");
}

