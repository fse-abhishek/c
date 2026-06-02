# 04 – Program Structure

## Overview

Learn the standard structure of a C program, including headers, functions, and the main entry point.

## Why This Topic Matters

A well-structured program is easier to read, maintain, and extend. Program structure is the foundation of every C application.

## Learning Objectives

- Explain the key concepts behind Program Structure.
- Write C code that uses Program Structure correctly.
- Recognize how Program Structure fits into larger C programs and system design.

## Theory

Beginner: Every C program begins with header includes and a main function. Learn how code is organized into declarations, definitions, and statements.

Intermediate: Understand how functions are declared and defined, how source files are split into modules, and how the compiler organizes translation units.

Advanced: Explore modular program design, header guards, and how structure affects compilation speed, reusability, and binary layout.

## Internal Working

At the compiler level, Program Structure is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Program Structure often maps to register operations, branch logic, or system calls.

## Syntax

A simple C program includes #include directives, function prototypes, and a main function. For example: #include <stdio.h> // Header + int main(void) { ... }.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
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

- Forgetting to include required headers.
- Defining functions after use without prototypes.
- Using global variables without clear structure.

## Best Practices

- Keep functions small and focused.
- Use header files to declare interfaces and source files to implement logic.
- Structure code logically with comments and consistent formatting.

## Interview Questions

### Beginner

- What is the main function in C?
- Why do we include headers in a C program?

### Intermediate

- How do you organize code across multiple source files?
- What is a translation unit?

### Advanced

- How does program structure influence compilation and linking?
- What are good modularization practices for C code?

## Exercises

Easy

- Write a simple C program with a main function and one helper function.

Medium

- Split a small program into a header and source file, then compile both together.

Hard

- Design a modular program with separate components, such as input handling and computation.

Interview

- Describe the standard structure of a C source file and why it matters.

## Assignment

Create a C program with at least two source files and one header file, and document the project structure.

## Mini Project

Build a simple modular utility in C that is split into clearly separated modules for logic and I/O.

## Summary Notes

- Program structure organizes C code into readable modules.
- Headers and source files work together to define interfaces and implementations.
- Good structure is essential for maintainable C software.

## Next Topic

[Next Topic](01_FUNDAMENTALS/05_First_C_Program/README.md)
