#include <stdio.h>

int main() {
    int numero_anterior = 0;
    int numero_atual = 1;

    int i;
    for (i = 0; i < 5; i++) {
        int num = numero_atual;

        numero_atual = num + numero_anterior;
        numero_anterior = num;

        printf("%i", numero_atual);
    }
}