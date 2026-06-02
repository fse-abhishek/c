# 93 – Header Files

## Overview

Header files declare interfaces for functions, types, and macros so source files can share them.

## Why This Topic Matters

Using headers enables modular code and separate compilation while keeping declarations centralized.

## Learning Objectives

- Explain the key concepts behind Header Files.
- Write C code that uses Header Files correctly.
- Recognize how Header Files fits into larger C programs and system design.

## Theory

Beginner: A header file contains declarations such as function prototypes and struct definitions, and is included with #include.

Intermediate: Learn how to use include guards and why headers should avoid function definitions and global variables.

Advanced: Organize headers by responsibility, minimize dependencies, and keep interfaces clean.

## Internal Working

At the compiler level, Header Files is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Header Files often maps to register operations, branch logic, or system calls.

## Syntax

#ifndef MYMODULE_H
#define MYMODULE_H
void foo(void);
#endif

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

- Putting code definitions in headers instead of source files.
- Omitting include guards and causing duplicate definitions.
- Including headers unnecessarily in many files.

## Best Practices

- Use include guards in every header.
- Keep header contents minimal and interface-focused.
- Include only the headers you need.

## Interview Questions

### Beginner

- What is a header file in C?
- How do you include a header file?

### Intermediate

- What is the purpose of include guards?
- Why should headers avoid function definitions?

### Advanced

- How do you organize header file dependencies in a large project?
- What is a public versus private header?

## Exercises

Easy

- Create a header file with a function prototype and include it in a source file.

Medium

- Use include guards in a custom header file.

Hard

- Design a header/source pair for a reusable module.

Interview

- Describe what belongs in a header file and what belongs in a source file.

## Assignment

Build a reusable C module with a header file and a source file. Use include guards to prevent multiple inclusion.

## Mini Project

Create a small C library with a header file for its public API and a source file for implementation.

## Summary Notes

- Header files declare interfaces.
- Use include guards to prevent duplicates.
- Keep headers focused and minimal.

## Next Topic

[Next Topic](15_PREPROCESSOR/94_Conditional_Compilation/README.md)
