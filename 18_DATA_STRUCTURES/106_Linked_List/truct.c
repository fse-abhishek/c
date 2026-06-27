#include <stdio.h>
#include <stdlib.h>

struct node
{
    int info;
    struct node *link;
};

struct node *START = NULL;

// Function to create a new node
struct node* createNode()
{
    struct node *n;
    n = (struct node *)malloc(sizeof(struct node));

    if (n == NULL)
    {
        printf("Memory allocation failed!\n");
        exit(1);
    }

    return n;
}

// Function to insert node at the end
void insertNode()
{
    struct node *temp, *t;

    temp = createNode();

    printf("Enter a number: ");
    scanf("%d", &temp->info);

    temp->link = NULL;

    if (START == NULL)
    {
        START = temp;
    }
    else
    {
        t = START;

        while (t->link != NULL)
        {
            t = t->link;
        }

        t->link = temp;
    }
}

// Function to display the linked list
void display()
{
    struct node *t = START;

    if (START == NULL)
    {
        printf("List is empty.\n");
        return;
    }

    printf("Linked List: ");

    while (t != NULL)
    {
        printf("%d -> ", t->info);
        t = t->link;
    }

    printf("NULL\n");
}

int main()
{
    int n, i;

    printf("How many nodes do you want to insert? ");
    scanf("%d", &n);

    for (i = 0; i < n; i++)
    {
        insertNode();
    }

    display();

    return 0;
}