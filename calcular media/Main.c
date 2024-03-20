#include <stdio.h>

int main() {
    float nota1;
    float nota2;
    float nota3;
    float nota4;

    printf("Digite a pirmeira nota \r\n");
    scanf("%f", &nota1);
    printf("Digite a segunda nota \r\n");
    scanf("%f", &nota2);
    printf("Digite a terceira nota \r\n");
    scanf("%f", &nota3);
    printf("Digite a quarta nota \r\n");
    scanf("%f", &nota4);

    float media = (nota1 + nota2 + nota3 + nota4) / 4;
    printf("Sua media e %f \r\n", media);

    if (media < 2) {
        printf("Voce esta reprovado!");
    } else if (media < 6) {
        printf("Voce esta de recuperacao!");
    } else {
        printf("Voce passou!");
    }
}