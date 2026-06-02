# 95 – auto

## Overview

The auto storage class declares automatic variables with block scope and automatic lifetime.

## Why This Topic Matters

Automatic variables are the default for local variables and are essential for most function-local data.

## Learning Objectives

- Explain the key concepts behind auto.
- Write C code that uses auto correctly.
- Recognize how auto fits into larger C programs and system design.

## Theory

Beginner: auto int x = 0; is equivalent to int x = 0 inside a function. The variable exists only while the block executes.

Intermediate: Learn that auto is usually omitted because it is the default storage class for local variables.

Advanced: Understand the distinction between automatic lifetime and static lifetime in C.

## Internal Working

At the compiler level, auto is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, auto often maps to register operations, branch logic, or system calls.

## Syntax

auto int count = 0;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("auto example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("auto example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("auto example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("auto example output\n");
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

- Using auto explicitly when it is unnecessary.
- Confusing auto with modern C++ auto type deduction.
- Assuming auto variables persist after the function returns.

## Best Practices

- Use plain variable declarations for locals.
- Remember that local variables have automatic lifetime by default.
- Reserve auto for clarity only when it adds value. 

## Interview Questions

### Beginner

- What does auto mean in C?
- What is the lifetime of an auto variable?

### Intermediate

- Why is auto usually omitted in C?
- How does auto compare to static?

### Advanced

- What is automatic storage duration?
- How does auto behave across function calls?

## Exercises

Easy

- Declare a local variable with auto and print it.

Medium

- Demonstrate that the variable disappears when the function returns.

Hard

- Explain why auto is usually omitted in C code.

Interview

- Describe automatic storage duration in C.

## Assignment

Write a function that uses an auto local variable and explain its lifetime.

## Mini Project

Create a program with several local variables and document their storage duration.

## Summary Notes

- auto declares a local variable with automatic lifetime.
- It is the default for local variables in C.
- Do not confuse it with C++ type deduction.

## Next Topic

[Next Topic](16_STORAGE_CLASSES/96_static/README.md)
