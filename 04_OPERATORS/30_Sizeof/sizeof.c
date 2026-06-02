#include<stdio.h>
int main()
{
    int x ,a,b,c;


    b=sizeof(2.4444);
   a= sizeof(5.4);
    c=sizeof (a);
    x=sizeof(8);

    printf("%d %d %d %d",x,a,b,c);

    return 0;
}