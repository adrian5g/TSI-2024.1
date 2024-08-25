#include <stdio.h>

// Função para calcular o IMC
float calcularIMC(float peso, float altura) {
    return peso / (altura * altura);
}

// Função para determinar a situação de saúde com base no IMC
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

    // Solicita o peso e a altura do usuário
    printf("Digite seu peso em kg: ");
    scanf("%f", &peso);
    printf("Digite sua altura em metros: ");
    scanf("%f", &altura);

    // Calcula o IMC
    imc = calcularIMC(peso, altura);

    // Exibe o valor do IMC
    printf("Seu IMC é: %.2f\n", imc);

    // Determina e exibe a situação de saúde com base no IMC
    determinarSituacaoSaude(imc);

    return 0;
}