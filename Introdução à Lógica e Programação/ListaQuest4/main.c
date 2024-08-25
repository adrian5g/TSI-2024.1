#include <stdio.h>

void inverterVetor(float vetor[], int tamanho) {
    int inicio = 0;
    int fim = tamanho - 1;
    while(inicio < fim) {
    
        float temp = vetor[inicio];
        vetor[inicio] = vetor[fim];
        vetor[fim] = temp;

        inicio++;
        fim--;
    }
}

int main() {
    int tamanho;


    printf("Digite o tamanho do vetor: ");
    scanf("%d", &tamanho);

    float vetor[tamanho];

    int i;
    for(i = 0; i < tamanho; i++) {
        printf("Digite o elemento %d: ", i + 1);
        scanf("%f", &vetor[i]);
    }

    inverterVetor(vetor, tamanho);


    printf("Vetor invertido:\n");
    int j;
    for(j = 0; j < tamanho; j++) {
        printf("%.2f ", vetor[j]);
    }
    printf("\n");

    return 0;
}
