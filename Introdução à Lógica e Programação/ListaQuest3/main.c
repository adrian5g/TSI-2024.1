/* Escreva uma função que recebe como parâmetro de entrada um vetor do tipo float, e 
também recebe como parâmetro de entrada o tamanho deste vetor, e essa função retorna 
qual é o maior elemento do vetor. */

#include <stdio.h>

float encontrarMaiorElemento(float vetor[], int tamanho) {
    float maior = vetor[0];

    for (int i = 1; i < tamanho; i++) {
        if(vetor[i] > maior) {
            maior = vetor[i];
        }
    }

    return maior;
}

int main() {
    int tamanho;

    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    float vetor[tamanho];

    int i;
    for (i = 0; i < tamanho; i++) {
        printf("Digite o elemento %d: ", i + 1);
        scanf("%f", &vetor[i]);
    }

    float maiorElemento = encontrarMaiorElemento(vetor, tamanho);

    printf("O maior elemento do vetor é: %.2f\n", maiorElemento);

    return 0;
}