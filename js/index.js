//1) Elaborar um programa em Javascript que lê 3 valores a,b,c e
//verifica se eles formam ou não um triângulo. Supor que os
//valores lidos são inteiros e positivos. Caso os valores formem
//um triângulo, calcular e escrever a área deste triângulo. Se não
//formam triângulo escrever os valores lidos. ( se a > b + c não
//formam triângulo algum, se a é o maior).
//| b - c | < a < b + c
//| a - c | < b < a + c
////| a - b | < c < a + b

var side1 = parseFloat(prompt("Digite o valor de um lado:"));
var side2 = parseFloat(prompt("Digite o valor de um segundo lado:"));
var side3 = parseFloat(prompt("Digite o valor de um terceiro lado:"));
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  document.body.append(area);
