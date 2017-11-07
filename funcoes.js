//exercicio 00
var nome;
function escreverOla(nome){
	console.log("Olá,"+nome+"!");
}
escreverOla("Raphael");
escreverOla("Bruno");
escreverOla("Marcelle");
// exercicio 01
var a, b;
function media(a,b){
	console.log((a + b) / 2);
}
// exercicio 03
function escreverNumerosAte(n) {
    var i = 1;
   do {
       
     console.log(i);
        i++;
       
   }  while (i <= n);

}

//exercicio 04
var y, x, z;
z = 0;
function divisiveisPor(x,y) {

	while (z < y){
		z = z + 1;
		if (z % x == 0) {
			console.log(z);
		}
	}
}
//exercicio 05
var vetor = 0;
function maiorMenor(vetor) {
	var numMaior = Math.max.apply(null,vetor);
	var numMenor = Math.min.apply(null,vetor);

	console.log("Numero Maior: " + numMaior);
	console.log("Numero Menor: " + numMenor);
}