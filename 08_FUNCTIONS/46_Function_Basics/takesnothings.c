#include <stdio.h>

void add(void);

int main()
{
    add();
    return 0;
}

void add(void)
{
    int a, b, c;

    printf("Enter two numbers: ");
    scanf("%d %d", &a, &b);

    c = a + b;

    printf("Sum is %d\n", c);
}