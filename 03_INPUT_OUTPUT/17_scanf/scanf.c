#include <stdio.h>

int main() {
    char name[50];
    int age;
    float salary;

    printf("===== Employee Information System =====\n");

    printf("Enter your name: ");
    scanf("%49s", name);

    printf("Enter your age: ");
    scanf("%d", &age);

    printf("Enter your salary: ");
    scanf("%f", &salary);

    printf("\n===== Employee Details =====\n");
    printf("Name   : %s\n", name);
    printf("Age    : %d years\n", age);
    printf("Salary : %.2f\n", salary);

    return 0;
}   