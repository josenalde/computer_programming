#include <iostream>
//desafio (construção triangulo isosceles)
// por Prof. Josenalde Oliveira, 6.6.2023
int main() {
  int N = 20, j=1;
  int p = N; // para controlar número de espaços antes e depois do simbolo
  // observa-se que na última linha da figura gerada o número de
  // símbolos obedece ao padrão 2*N-1, sendo o critério de parada abaixo
  while (j <= 2*N-1) {
    // espaços à esquerda do símbolo
    for (int i = 1; i < p; i++) std::cout << " ";
    for (int i = 1; i <= j; i++) std::cout << "#"; //imprime os simbolos
    // espaços à direita do símbolo
    for (int i = 1; i < p; i++) std::cout << " ";
    j+=2; // o número de simbolos cresce no padrão impar (1,3,5,7 etc.)
    p--; // o número de espaços vai diminuindo de 1 em 1
    std::cout << std::endl;
  }
  return 0;
}