#include <stdio.h>

int main() {
    int num = 10;
    int *ptr = &num;

    *ptr = 20;  // Change num using the pointer

    printf("num = %d\n", num);

    return 0;
}