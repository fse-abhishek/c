# 17 – scanf

## Overview

Study scanf for reading formatted input from the user, including how to handle whitespace and format specifiers safely.

## Why This Topic Matters

Input is the counterpart to output, and scanf is the standard C function for reading typed values from the console.

## Learning Objectives

- Explain the key concepts behind scanf.
- Write C code that uses scanf correctly.
- Recognize how scanf fits into larger C programs and system design.

## Theory

Beginner: scanf reads values from standard input according to a format string, such as %d for integers or %s for strings. Remember to supply variable addresses.

Intermediate: Learn how scanf handles whitespace, how to prevent buffer overflow with string width specifiers, and when input may fail.

Advanced: Understand the return value of scanf, how to check for invalid input, and when to use safer alternatives to avoid security issues.

## Internal Working

At the compiler level, scanf is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, scanf often maps to register operations, branch logic, or system calls.

## Syntax

scanf("%d %f", &count, &ratio); // note the ampersand to pass addresses.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    int x;
    printf("Enter a number: ");
    scanf("%d", &x);
    printf("You entered: %d\n", x);
    return 0;
}
```

Explanation: Production-quality code structure and safe practices.

Output: The program demonstrates clean design and maintainability.

## Memory Visualization


[ stack ] -> local variables, function call frames, return addresses
[ heap ] -> dynamic data used by runtime allocations
[ text ] -> compiled executable code and constant data


## Common Mistakes

- Forgetting the & operator for variables.
- Using %s without a width limit and risking overflow.
- Ignoring the return value of scanf.

## Best Practices

- Validate scanf return values.
- Use width specifiers for strings like %19s.
- Consider fgets plus parsing for safer input.

## Interview Questions

### Beginner

- What does scanf do?
- Why do you pass &x to scanf?

### Intermediate

- How do you prevent scanf buffer overflow?
- What does scanf return?

### Advanced

- Why is scanf not always safe for user input?
- What are safer alternatives to scanf?

## Exercises

Easy

- Read an integer with scanf and print it back.

Medium

- Read a string and a number, then print them in a sentence.

Hard

- Handle invalid input gracefully by checking scanf's return value.

Interview

- Explain how scanf processes formatted input and what can go wrong.

## Assignment

Write a program that reads multiple typed inputs using scanf and displays them clearly.

## Mini Project

Create a command-line prompt that asks for user details and prints a formatted summary.

## Summary Notes

- scanf reads formatted input.
- Always use addresses and validate scanf results.
- Be careful with string input to avoid overflow.

## Next Topic

[Next Topic](03_INPUT_OUTPUT/18_getchar/README.md)
