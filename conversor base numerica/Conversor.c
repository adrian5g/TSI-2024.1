#include <stdio.h>

void decimalToBinary(int num) {
    int binary[32];
    int i = 0;

    if (num < 0) {
        printf("Don't use negative numbers\n");
        return;
    }

    while (num > 0) {
        binary[i] = num % 2;
        num = num / 2;
        i++;
    }

    printf("The binary number is: ");
    for (int j = i - 1; j >= 0; j--) {
        printf("%d", binary[j]);
    }
    printf("\n");
}

int main() {
    int num;

    printf("Type a decimal number: ");
    scanf("%d", &num);

    decimalToBinary(num);

    return 0;
}
