//1) Elaborar um programa em Javascript que lê 3 valores a,b,c e
//verifica se eles formam ou não um triângulo. Supor que os
//valores lidos são inteiros e positivos. Caso os valores formem
//um triângulo, calcular e escrever a área deste triângulo. Se não
//formam triângulo escrever os valores lidos. ( se a > b + c não
//formam triângulo algum, se a é o maior).
//| b - c | < a < b + c
//| a - c | < b < a + c
////| a - b | < c < a + b
//var a = parseInt(prompt("Digite o valor da base:"));
//var b = parseInt(prompt("Digite o valor do lado:"));
//var c = parseInt(prompt("Digite o valor do outro lado:"));

//var c1 = Math.abs(b + c);
//var c2 = Math.abs(b + c);
//var c3 = Math.abs(a - c);
//var c4 = Math.abs(a + c);
//var c5 = Math.abs(a - b);
//var c6 = Math.abs(a + b);

var side1 = parseFloat(prompt("Digite o valor de um lado:"));
var side2 = parseFloat(prompt("Digite o valor de um segundo lado:"));
var side3 = parseFloat(prompt("Digite o valor de um terceiro lado:"));
var s = (side1 + side2 + side3)/2;
var area =  Math.sqrt(s*((s-side1)*(s-side2)*(s-side3)));
  document.body.append(area);
