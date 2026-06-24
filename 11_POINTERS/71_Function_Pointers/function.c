#include <stdio.h>

int add(int a, int b) { return a + b; }
int sub(int a, int b) { return a - b; }

int main() {
    int (*operations[2])(int, int) = {add, sub};

    printf("%d\n", operations[0](10, 5)); // add
    printf("%d\n", operations[1](10, 5)); // sub

    return 0;
}