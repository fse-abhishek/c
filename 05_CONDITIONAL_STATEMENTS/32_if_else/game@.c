#include <stdio.h>

int main() {
    int balance, withdraw;

    printf("Enter your account balance: ");
    scanf("%d", &balance);

    printf("Enter amount to withdraw: ");
    scanf("%d", &withdraw);

    if (withdraw <= balance) {
        balance = balance - withdraw;
        printf("Withdrawal Successful!\n");
        printf("Remaining Balance: %d\n", balance);
    }
    else {
        printf("Insufficient Balance!\n");
    }

    return 0;
}