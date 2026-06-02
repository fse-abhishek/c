# 05 – First C Program

## Overview

Write your first C program and learn how source code becomes output through compilation and execution.

## Why This Topic Matters

The first C program teaches the basic workflow of writing, compiling, and running C source. It is the first practical step in learning the language.

## Learning Objectives

- Explain the key concepts behind First C Program.
- Write C code that uses First C Program correctly.
- Recognize how First C Program fits into larger C programs and system design.

## Theory

Beginner: A first C program usually prints a message to the console using printf and returns 0 from main. This introduces functions, headers, and the program entry point.

Intermediate: Learn how the source file is compiled, linked, and executed, and how the main function returns an exit code to the operating system.

Advanced: Understand how startup code initializes the runtime environment before main runs, and how return codes and exit status are used in scripts and tools.

## Internal Working

At the compiler level, First C Program is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, First C Program often maps to register operations, branch logic, or system calls.

## Syntax

A simple first C program looks like: #include <stdio.h>
int main(void) { printf("Hello, world!
"); return 0; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("First C Program example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("First C Program example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("First C Program example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("First C Program example output\n");
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

- Forgetting the semicolon after printf.
- Using a wrong format string or missing header.
- Returning from main incorrectly or omitting #include <stdio.h>.

## Best Practices

- Use meaningful output and comments in your first program.
- Compile early and fix simple syntax errors.
- Run the program from a terminal to see its output clearly.

## Interview Questions

### Beginner

- What does int main(void) mean?
- Why do we include <stdio.h>?

### Intermediate

- What does return 0 from main do?
- How does printf work?

### Advanced

- How does the OS use the exit status from main?
- What is the runtime startup sequence before main()?

## Exercises

Easy

- Write a Hello World program in C.

Medium

- Modify the program to print multiple lines and use variables.

Hard

- Create a program that reads a name from input and prints a greeting.

Interview

- Explain the structure of your first C program and what each line does.

## Assignment

Write a simple console program that prints a formatted message and exits cleanly. Document each line with comments.

## Mini Project

Create a small interactive program that asks for a user name and prints a personalized greeting.

## Summary Notes

- The first C program introduces the main building blocks of C.
- It demonstrates compilation, execution, and simple I/O.
- Once you have a first program, you can explore deeper topics with confidence.

## Next Topic

[Next Topic](01_FUNDAMENTALS/06_Compilation_Process/README.md)
