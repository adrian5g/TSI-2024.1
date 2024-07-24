#include <stdio.h>

int main() {
    int oldNum = 0;
    int currentNum = 1;

    printf("%i\n", oldNum);
    printf("%i\n", currentNum);

    for (size_t i = 0; i < 10; i++) {
        int n = currentNum;

        currentNum = n + oldNum;
        oldNum = n;

        printf("%i\n", currentNum);   
    }
}