# 90 – include

## Overview

The #include directive inserts header files into source code during preprocessing.

## Why This Topic Matters

Headers provide declarations for library functions and types, enabling modular compilation and reuse.

## Learning Objectives

- Explain the key concepts behind include.
- Write C code that uses include correctly.
- Recognize how include fits into larger C programs and system design.

## Theory

Beginner: Use #include <stdio.h> to import declarations for standard I/O functions like printf and scanf.

Intermediate: Understand the difference between angle bracket includes and quoted includes for system versus local headers.

Advanced: Manage include dependencies carefully to avoid circular includes and long compile times.

## Internal Working

At the compiler level, include is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, include often maps to register operations, branch logic, or system calls.

## Syntax

#include <stdio.h>

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("include example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("include example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("include example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("include example output\n");
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

- Including the same header multiple times without guards.
- Using quotes instead of angle brackets for standard headers.
- Putting function definitions in headers instead of declarations.

## Best Practices

- Use include guards or #pragma once.
- Include only the headers you need.
- Keep header files limited to declarations and macros.

## Interview Questions

### Beginner

- What does #include do?
- Why do we include <stdio.h>?

### Intermediate

- What is the difference between #include <...> and #include "..."?
- Why are header files useful?

### Advanced

- How do include guards prevent multiple inclusion?
- What should and should not go in a header file?

## Exercises

Easy

- Include stdio.h and use printf in a program.

Medium

- Create a custom header file and include it in a source file.

Hard

- Design a pair of headers with include guards to share declarations across files.

Interview

- Explain the purpose of #include and header files.

## Assignment

Write a C program that uses a custom header file for function declarations.

## Mini Project

Create a small module with a header and source file and include it in a main program.

## Summary Notes

- #include brings in declarations from headers.
- Use include guards in custom headers.
- Keep headers focused on interfaces.

## Next Topic

[Next Topic](15_PREPROCESSOR/91_define/README.md)
