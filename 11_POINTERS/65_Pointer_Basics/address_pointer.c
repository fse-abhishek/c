#include<stdio.h>
int main ()
{
    int x = 10, *p, **q, ***r;
    p=&x;
    q=&p;
    r=&q;
    ***r=7;
    printf("%d %u\n",x,p);
    printf("%d %d %d",*p,**q,***r);
    return 0;
}