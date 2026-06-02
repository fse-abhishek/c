# 13 – Data Types

## Overview

Data types define the kind of data a variable can hold, such as integers, floating point values, and characters.

## Why This Topic Matters

Choosing the right data type is critical for memory use, precision, and correct behavior in C programs.

## Learning Objectives

- Explain the key concepts behind Data Types.
- Write C code that uses Data Types correctly.
- Recognize how Data Types fits into larger C programs and system design.

## Theory

Beginner: Learn the basic built-in types like int, char, float, and double, and how they represent values in memory.

Intermediate: Understand signed versus unsigned types, the size of each type, and when to use each one.

Advanced: Explore platform-specific type sizes, type conversions, and how integer promotion affects expressions.

## Internal Working

At the compiler level, Data Types is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Data Types often maps to register operations, branch logic, or system calls.

## Syntax

Type declarations look like int value; char letter; float ratio;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Data Types example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Data Types example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Data Types example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Data Types example output\n");
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

- Assuming type sizes are the same on every platform.
- Using the wrong type for large or precise values.
- Not handling type conversion explicitly.

## Best Practices

- Pick the smallest type that safely holds your values.
- Use fixed-width types like int32_t when portability matters.
- Avoid implicit narrowing conversions.

## Interview Questions

### Beginner

- What are the basic data types in C?
- What is the difference between int and float?

### Intermediate

- What are signed and unsigned types?
- Why does char sometimes behave like a number?

### Advanced

- How does integer promotion affect mixed-type expressions?
- When should you use fixed-width integer types?

## Exercises

Easy

- Declare variables of different basic types and print their values.

Medium

- Write a program that converts between int and float types.

Hard

- Demonstrate the effect of signed and unsigned overflow in C.

Interview

- Describe how C represents different data types in memory.

## Assignment

Create a C program that uses multiple data types and prints the results with correct formatting.

## Mini Project

Build a simple unit-converter tool that uses different numeric types and validates input.

## Summary Notes

- Data types determine how values are stored and interpreted.
- Use appropriate types for precision, range, and portability.
- Type conversions must be handled carefully to avoid errors.

## Next Topic

[Next Topic](02_BASICS/14_Type_Modifiers/README.md)
