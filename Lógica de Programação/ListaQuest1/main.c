/* Escreva um programa em C, que solicita as 4 notas do aluno, utilizando uma função para 
isso, salvando essas notas em um vetor de tamanho 4. Em seguida o programa deve 
passar esse vetor para uma segunda função, criada por você, que retorna a média das 
notas. */

#include <stdio.h>

void solicitarNotas(float notas[], int tamanho) {
    int i;
    for (i = 0; i < tamanho; i++) {
        printf("Digite a nota %d: ", i + 1);
        scanf("%f", &notas[i]);
    }
}

float calcularMedia(float notas[], int tamanho) {
    float soma = 0.0;
    int i;
    for (i = 0; i < tamanho; i++) {
        soma += notas[i];
    }
    return soma / tamanho;
}

int main() {
    int tamanho = 4;
    float notas[tamanho];

    solicitarNotas(notas, tamanho);

    float media = calcularMedia(notas, tamanho);

    printf("Sua media foi: %.2f\n", media);

    return 0;
}