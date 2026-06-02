# 98 – extern

## Overview

extern declares a variable or function with external linkage, allowing it to be shared across source files.

## Why This Topic Matters

It is important for separate compilation, module interfaces, and global state management in larger C programs.

## Learning Objectives

- Explain the key concepts behind extern.
- Write C code that uses extern correctly.
- Recognize how extern fits into larger C programs and system design.

## Theory

Beginner: Use extern int count; in a header to declare a global variable defined elsewhere.

Intermediate: Understand that extern does not allocate storage; it only declares that the symbol exists in another translation unit.

Advanced: Use extern to share functions and variables across multiple source files while avoiding duplicate definitions.

## Internal Working

At the compiler level, extern is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, extern often maps to register operations, branch logic, or system calls.

## Syntax

extern int sharedCount;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("extern example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("extern example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("extern example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("extern example output\n");
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

- Defining a variable in multiple files instead of declaring it extern.
- Assuming extern creates storage.
- Using extern incorrectly for local variables.

## Best Practices

- Declare shared variables in headers with extern.
- Define the variable once in a single source file.
- Minimize shared global state and document it clearly.

## Interview Questions

### Beginner

- What does extern mean in C?
- How do you share a variable between files?

### Intermediate

- What is the difference between extern and a normal variable definition?
- Why is extern useful for modular programs?

### Advanced

- How does extern affect linkage?
- What are best practices for external global variables?

## Exercises

Easy

- Declare an extern variable in one file and define it in another.

Medium

- Use extern to share a global counter across source files.

Hard

- Refactor a program to limit extern variables and improve modularity.

Interview

- Explain how extern differs from defining a variable.

## Assignment

Create a program with an extern variable declared in a header and defined in one source file.

## Mini Project

Build a simple multi-file program that uses extern declarations for shared configuration.

## Summary Notes

- extern declares an externally defined symbol.
- Define the variable once, declare it elsewhere.
- Use it for shared module interfaces.

## Next Topic

[Next Topic](17_BIT_MANIPULATION/99_AND/README.md)
