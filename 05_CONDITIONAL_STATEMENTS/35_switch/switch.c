#include<stdio.h>
#include<stdlib.h>
int main ()
{
    int choice,a,b,s;
    while (1){
    printf("\n1. Addition");
    printf("\n2. Check Odd/Even");
    printf("\n3. Print Numbers");
    printf("\n4. exit");
    scanf("%d",&choice);
    switch (choice)
    
    {
        case 1:
        printf("enter teo numbers");
        scanf("%d%d",&a,&b);
        s=a+b;
        printf ("the sum is %d",s);
        break;
        case 2:
        printf("enter a number");
        scanf("%d",&a);
        if (a%2==0){
            printf("even number");
        }
        else{
            printf("odd number");
        }
        break;
        case 3:
        printf("enter a number");
        scanf("%d",&a);
        for (int b=1; b<=a; b++)
        {
            printf("%d",b);
        
        }
        break;
          case 4: exit(0);
      
        default:
        printf("invalid choice");
    }
}
return 0;
    
}