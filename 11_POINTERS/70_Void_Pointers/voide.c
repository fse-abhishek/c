#include <stdio.h>
#include <string.h>

/* Structure */
struct Student
{
    int rollNo;
    char name[50];
    float marks;
};

/* Generic display function */
void displayData(void *ptr, char type)
{
    switch(type)
    {
        case 'i':
            printf("Integer Value: %d\n", *(int *)ptr);
            break;

        case 'f':
            printf("Float Value: %.2f\n", *(float *)ptr);
            break;

        case 'c':
            printf("Character Value: %c\n", *(char *)ptr);
            break;

        case 's':
            printf("String Value: %s\n", (char *)ptr);
            break;

        default:
            printf("Unknown Data Type\n");
    }
}

/* Generic swap function using void pointer */
void swap(void *a, void *b, size_t size)
{
    char temp[size];

    memcpy(temp, a, size);
    memcpy(a, b, size);
    memcpy(b, temp, size);
}

/* Display student structure */
void displayStudent(void *ptr)
{
    struct Student *s = (struct Student *)ptr;

    printf("\nStudent Information\n");
    printf("-------------------\n");
    printf("Roll No : %d\n", s->rollNo);
    printf("Name    : %s\n", s->name);
    printf("Marks   : %.2f\n", s->marks);
}

int main()
{
    int num1 = 100;
    int num2 = 200;

    float price = 999.99f;

    char grade = 'A';

    char city[] = "Delhi";

    struct Student st1 = {101, "Rahul Sharma", 88.50};

    printf("=== Display Different Data Types ===\n");

    displayData(&num1, 'i');
    displayData(&price, 'f');
    displayData(&grade, 'c');
    displayData(city, 's');

    printf("\n=== Before Swapping Integers ===\n");
    printf("num1 = %d\n", num1);
    printf("num2 = %d\n", num2);

    swap(&num1, &num2, sizeof(int));

    printf("\n=== After Swapping Integers ===\n");
    printf("num1 = %d\n", num1);
    printf("num2 = %d\n", num2);

    printf("\n=== Structure Using Void Pointer ===\n");
    displayStudent(&st1);

    return 0;
}