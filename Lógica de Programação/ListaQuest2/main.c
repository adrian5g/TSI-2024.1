/* Escreva um programa em C, que contém uma função que recebe por referência duas 
variáveis do tipo float, A e B, como argumento de entrada dessa função, em seguida a 
função salva o valor que está em A, em B, e salva do valor que está em B, em A. Ou seja, 
ele troca os valores das variáveis. O programa deve mostrar, no main(), que os valores 
foram trocados. */

#include <stdio.h>

void trocarValores(float *a, float *b) {
    float temp = *a;
    *a = *b;
    *b = temp;
}

void imprimirValores(float a, float b) {
    printf("A = %.2f\n", a);
    printf("B = %.2f\n", b);
}

int main() {
    float A, B;

    printf("Digite o valor de A: ");
    scanf("%f", &A);
    printf("Digite o valor de B: ");
    scanf("%f", &B);

    printf("\nAntes da troca:\n");
    imprimirValores(A, B);

    trocarValores(&A, &B);

    printf("\nApós a troca:\n");
    imprimirValores(A, B);

    return 0;
}
