# 49 – Local Global Variables

## Overview

Explore the difference between local and global variables and how scope affects visibility in C.

## Why This Topic Matters

Managing scope correctly prevents name clashes and makes programs easier to understand and maintain.

## Learning Objectives

- Explain the key concepts behind Local Global Variables.
- Write C code that uses Local Global Variables correctly.
- Recognize how Local Global Variables fits into larger C programs and system design.

## Theory

Beginner: Local variables exist inside a block or function, while global variables are declared outside any function and are visible throughout the file.

Intermediate: Learn how scope and lifetime differ for local and global variables, and how extern can share globals across files.

Advanced: Restrict global variables to only where they are necessary, and prefer local variables or function parameters for safer design.

## Internal Working

At the compiler level, Local Global Variables is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Local Global Variables often maps to register operations, branch logic, or system calls.

## Syntax

int count; // global
int main(void) { int value = 0; ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Local Global Variables example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Local Global Variables example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Local Global Variables example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Local Global Variables example output\n");
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

- Overusing global variables and creating hidden dependencies.
- Assuming local variables persist between function calls.
- Using extern without understanding linkage.

## Best Practices

- Prefer local variables when possible.
- Keep global variables minimal and well-documented.
- Use static or extern appropriately for cross-file access.

## Interview Questions

### Beginner

- What is the difference between local and global variables?
- Where is a local variable stored?

### Intermediate

- How does extern work with global variables?
- What is variable lifetime?

### Advanced

- Why is it better to minimize global variables?
- How can globals affect thread safety?

## Exercises

Easy

- Declare one global and one local variable and print both.

Medium

- Use a global variable across two functions in the same file.

Hard

- Refactor a program to reduce the use of global variables.

Interview

- Explain the tradeoffs of local versus global variables.

## Assignment

Build a program that uses both local and global variables and documents their scope.

## Mini Project

Create a configuration or state tracker using a minimal set of globals for shared state.

## Summary Notes

- Local variables are limited in scope.
- Global variables are accessible across functions.
- Use globals sparingly and document them.

## Next Topic

[Next Topic](08_FUNCTIONS/50_Call_By_Value/README.md)
