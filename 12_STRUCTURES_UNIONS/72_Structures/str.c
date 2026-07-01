#include<stdio.h>
struct book
{
    int book_id;
    char title[20];
    float price;
};
struct book input()
{
    struct book b;
    printf("Enter book ID: ");
    scanf("%d", &b.book_id);
    printf("Enter title: ");
    scanf("%s", b.title);
    printf("Enter price: ");
    scanf("%f", &b.price);
    return b;
}
void display(struct book b)
{
    printf("\n %d %s %.2f", b.book_id, b.title, b.price);

}
void main ()
{
    struct book b1,b2;
    b1=input();
    display(b1);
    b2=b1;
    display(b2);
    
}