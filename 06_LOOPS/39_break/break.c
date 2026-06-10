#include<stdio.h>
int main()
{
    int i=1,x;
    while(i<=5)
    {
        printf ("enter a number");
        scanf("%d",&x);
        if(x>0)
        break;
        i++;
    } 
    i==6?printf("ends normally"):printf("appliedbreak");
    return 0;
}