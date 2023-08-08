/******************************************************************************

                              Online C++ Compiler.
               Code, Compile, Run and Debug C++ program online.
Write your code in this editor and press "Run" button to compile and execute it.

*******************************************************************************/

#include <iostream>

using namespace std;

int main()
{
    // solucao 1 - percorrendo todo o vetor
    /*
    int s[] = {1, 4, 5, 1, 1, 4, 8, 10, 12, 1};
    int alvo = 10, qtd = 0; //qtd: quantos alvos encontrou
    
    for (int i = 0; i < 6; i++) {
        (s[i] == alvo) ? qtd+=1 : qtd=qtd;
    }
    cout << "Solução 1: " << qtd << endl;
    
    
    // solucao 2 - ordenando crescente
    int s[] = {1, 4, 5, 1, 1, 4, 8, 10, 12, 1};
    alvo = 10, qtd = 0; //qtd: quantos alvos encontrou
    
    // calcular o tamanho do vetor
    int t = sizeof(s) / sizeof(s[0]);
    //cout << "t: " << t << endl;
    int aux;
    //ordenar vetor
    for (int i = 0; i < t-1; i++) {
        if (s[i] > s[i+1]) {
            aux = s[i];
            s[i] = s[i+1];
            s[i+1] = aux;
            i = -1; //reset
        }
    }
    
    // imprimir vetor ordenado
    //for (int i = 0; i < t; i++) {
    //    cout << s[i] << ", ";
    //}
    //cout << endl;
    
    for (int i = 0; i < t; i++) {
        if (s[i] > alvo) break;
        if (s[i] == alvo) qtd += 1;
    }
    cout << "solução 2: " << qtd << endl;
    */
    // solucao 3 - ordenando crescente e dividindo
    int s[] = {1, 4, 5, 1, 1, 4, 8, 10, 12, 1};
    int alvo = 12, qtd = 0; //qtd: quantos alvos encontrou
    
    // calcular o tamanho do vetor
    int t = sizeof(s) / sizeof(s[0]);
    int d = t / 2;
    //cout << "t: " << t << endl;
    int aux;
    //ordenar vetor
    for (int i = 0; i < t-1; i++) {
        if (s[i] > s[i+1]) {
            aux = s[i];
            s[i] = s[i+1];
            s[i+1] = aux;
            i = -1; //reset
        }
    }
    int inicioBusca, fimBusca;
    if (alvo > s[d]) { // à direita
        inicioBusca = d + 1;
        fimBusca = t;
    } else {
        inicioBusca = 0; //a partir do início do vetor
        fimBusca = d + 1;
    }
    
    for (int i = inicioBusca; i < fimBusca; i++) {
        (s[i] == alvo) ? qtd += 1 : qtd=qtd;
    }
    
    cout << "Solução 3: " << qtd << endl;
   
    return 0;
}
