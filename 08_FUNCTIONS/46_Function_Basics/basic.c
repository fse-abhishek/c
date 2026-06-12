#include <stdio.h>
void add();
int main()

{
    add();
    add();
    add();

}

void add()
{
    int a, b;
    printf("Enter two numbers: ");
    scanf("%d%d", &a, &b);
    printf("Sum = %d\n", a + b);

}


    