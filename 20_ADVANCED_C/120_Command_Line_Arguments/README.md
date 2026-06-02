# 120 – Command Line Arguments

## Overview

Command-line arguments let a C program receive input from the command shell at startup.

## Why This Topic Matters

They are a standard way to configure programs and pass data without user prompts.

## Learning Objectives

- Explain the key concepts behind Command Line Arguments.
- Write C code that uses Command Line Arguments correctly.
- Recognize how Command Line Arguments fits into larger C programs and system design.

## Theory

Beginner: main receives argc and argv parameters representing the number of arguments and an array of strings.

Intermediate: Parse numeric and string arguments, and validate the argument count.

Advanced: Use command-line parsing libraries, handle optional flags, and support usage messages.

## Internal Working

At the compiler level, Command Line Arguments is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Command Line Arguments often maps to register operations, branch logic, or system calls.

## Syntax

int main(int argc, char *argv[]) { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Command Line Arguments example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Command Line Arguments example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Command Line Arguments example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Command Line Arguments example output\n");
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

- Using argv[0] incorrectly.
- Not checking argc before accessing argv.
- Treating command-line arguments as numeric values without conversion.

## Best Practices

- Validate argument count.
- Provide helpful usage output.
- Use atoi, strtol, or sscanf for conversions and check for errors.

## Interview Questions

### Beginner

- What are argc and argv?
- How do you access the first command-line argument?

### Intermediate

- Why should you check argc?
- How do you convert argv strings to numbers?

### Advanced

- How can you implement optional flags and usage messages?
- What are common mistakes with command-line parsing?

## Exercises

Easy

- Print all command-line arguments.

Medium

- Read a number from argv and print its square.

Hard

- Implement simple command-line options like -h or --help.

Interview

- Explain how command-line arguments are passed to main.

## Assignment

Create a program that accepts arguments and prints a summary of the inputs.

## Mini Project

Build a command-line utility that accepts options and performs a simple task.

## Summary Notes

- argc counts arguments.
- argv holds strings from the command line.
- Validate and convert arguments carefully.

## Next Topic

[Next Topic](20_ADVANCED_C/121_Memory_Layout/README.md)
