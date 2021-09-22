var qPrecision = 5e-12; // 5e-12 (test your machine!!!)
var piant = 0, pi, termo, dif;
var i, indiceTermo;
var soma = 0;
var indiceTermo = 1; //primeiro termo é 1 (ímpar)
for (i = 1; ; i+=2) { //loop infinito
  if (indiceTermo % 2 != 0) termo = 1./i;
  else termo = -1./i;
   
  soma += termo; //somatório
  pi = 4*(soma); //pi calculado nesta iteração
  dif = Math.abs(pi - piant);
  //console.log(dif.toFixed(10)) //may be commented
  indiceTermo++;
  if (dif <= qPrecision) break;
  piant = pi; //atualização
  // piant passa a ser o pi calculado neste iteração
}
console.log("PI value for the required precision of %f is %f",qPrecision, pi.toFixed(11))
