#include <stdio.h>

int main()
{
    const int size = 4;

    float soma = 0.0;
    float notas[size] = {};

    for (int i = 0; i < size; i++)
    {
        printf("digite a nota %i:\n", i + 1);
        scanf("%f", &notas[i]);
        soma += notas[i];
    }

    float media = soma / size;

    printf("sua media: %f\n", media);

    printf("resultado: ");
    if (media < 6.0)
    {
        printf("recuperação :(");
    }
    else
    {
        printf("passou!");
    }
}