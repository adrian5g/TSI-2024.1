#include <stdio.h>

int somaMatematica(int a1, int an, int n) {
    return (n/2)*(a1+an);
}


void somarProgramacao() {
    int i = 0, soma = 0 ;

    while (i <= 1000) {
        soma += i; 
    }
 
    printf("A soma vale %d\n", soma);
}


int main() {
    int contador = 1;
    while (contador > 5) {
        contador = contador + 1;
        printf("%i\n", contador);
    }

    // somarProgramacao();
    // printf("%i\n", somaMatematica(1, 100, 100));
}