#include<stdio.h>
#include<windows.h>
int main()
{
    COORD c = {40,13};
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), c);
printf("hello abhishek nishad ");
return 0;

}

