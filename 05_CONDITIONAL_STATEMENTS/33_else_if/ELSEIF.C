#include <stdio.h>
int main () {
int marks = 75;

if (marks >= 90) {
    printf("Grade A");
}
else if (marks >= 70) {
    printf("Grade B");
}
else if (marks >= 50) {
    printf("Grade C");
}
else {
    printf("Fail");
}

}