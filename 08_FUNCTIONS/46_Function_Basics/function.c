#include <stdio.h>

void add();
void multiplication();
void subtraction();
void division();

int main()
{
    add();
    multiplication();
    subtraction();
    division();

    
    return 0;
}

void add()
{
    int a, b;
    printf("Enter a and b: ");
    scanf("%d%d", &a, &b);
    printf("Sum = %d\n", a + b);
}

void multiplication()
{
    int a, b;
    printf("Enter a and b: ");
    scanf("%d%d", &a, &b);
    printf("Multiplication = %d\n", a * b);
}

void subtraction()
{
    int a, b;
    printf("Enter a and b: ");
    scanf("%d%d", &a, &b);
    printf("Subtraction = %d\n", a - b);
}

void division()
{
    int a, b;
    printf("Enter a and b: ");
    scanf("%d%d", &a, &b);

    if (b != 0)
        printf("Division = %d\n", a / b);
    else
        printf("Cannot divide by zero\n");
}
