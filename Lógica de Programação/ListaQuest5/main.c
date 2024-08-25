/* Sabendo que o índice de massa corporal (IMC), é calculado pela fórmula: IMC = 
peso*altura2, ou seja, float imc = peso*altura*altura, e sabendo também que a tabela de 
IMC é dada pela tabela abaixo, escreva uma função em C que retorna o valor do IMC, 
escreva também um segunda função que recebe como parâmetro de entrada o valor do 
IMC, e baseado na tabela dada, escreve na tela qual a situação de saúde, do usuário que 
digitou seu peso e altura. */

#include <stdio.h>

float calcularIMC(float peso, float altura) {
    return peso / (altura * altura);
}

void determinarSituacaoSaude(float imc) {
    if(imc < 17) {
        printf("Situação de saúde: Muito abaixo do peso\n");
    } else if(imc >= 17 && imc <= 18.49) {
        printf("Situação de saúde: Abaixo do peso\n");
    } else if(imc >= 18.50 && imc <= 24.99) {
        printf("Situação de saúde: Peso normal\n");
    } else if(imc >= 25 && imc <= 29.99) {
        printf("Situação de saúde: Acima do peso\n");
    } else if(imc >= 30 && imc <= 34.99) {
        printf("Situação de saúde: Obesidade I\n");
    } else if(imc >= 35 && imc <= 39.99) {
        printf("Situação de saúde: Obesidade II (severa)\n");
    } else if(imc >= 40) {
        printf("Situação de saúde: Obesidade III (mórbida)\n");
    }
}

int main() {
    float peso, altura, imc;

    printf("Digite seu peso em kg: ");
    scanf("%f", &peso);
    printf("Digite sua altura em metros: ");
    scanf("%f", &altura);

    imc = calcularIMC(peso, altura);

    printf("Seu IMC é: %.2f\n", imc);

    determinarSituacaoSaude(imc);

    return 0;
}