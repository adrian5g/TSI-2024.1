#include <stdio.h>

int main() {
    float nota1;
    float nota2;
    float peso1 = 1;
    float peso2 = 2;

    printf("Digite a nota 1\r\n");
    scanf("%f", &nota1);
    printf("Digite a nota 2\r\n");
    scanf("%f", &nota2);

    float media = (nota1 * peso1 + nota2 * peso2) / (peso1 + peso2);

    printf("%f", media);
}