#include <stdio.h>

int main() {
    int n;

    printf("Digite o numero que deseja\n");
    scanf("%i", &n);

    int numero_anterior = 0;
    int numero_atual = 1;

    int i;
    for (i = 0; i < n; i++) {
        int num = numero_atual;

        numero_atual = num + numero_anterior;
        numero_anterior = num;
    }

    printf("o numero %i da sequencia de fibonacci: %i", n, numero_atual);
}