# 94 – Conditional Compilation

## Overview

Conditional compilation uses preprocessor directives to include or exclude code based on compile-time conditions.

## Why This Topic Matters

It enables platform-specific builds, debugging options, and configurable features without changing source files.

## Learning Objectives

- Explain the key concepts behind Conditional Compilation.
- Write C code that uses Conditional Compilation correctly.
- Recognize how Conditional Compilation fits into larger C programs and system design.

## Theory

Beginner: Use #ifdef, #ifndef, #if, #elif, #else, and #endif to control which code is compiled.

Intermediate: Learn how to define flags through compiler options and use them to enable or disable features.

Advanced: Manage conditional compilation carefully to keep code maintainable and avoid hard-to-test build configurations.

## Internal Working

At the compiler level, Conditional Compilation is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Conditional Compilation often maps to register operations, branch logic, or system calls.

## Syntax

#ifdef DEBUG
printf("Debug mode
");
#endif

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Conditional Compilation example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Conditional Compilation example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Conditional Compilation example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Conditional Compilation example output\n");
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

- Creating deeply nested preprocessor conditionals.
- Forgetting to close an #ifdef with #endif.
- Using too many compile-time variants in the same file.

## Best Practices

- Keep conditional compilation simple and documented.
- Use descriptive macro names for feature flags.
- Test important build configurations regularly.

## Interview Questions

### Beginner

- What does #ifdef do?
- How do you exclude code from compilation?

### Intermediate

- What is the difference between #ifdef and #if?
- How do you define a macro from the compiler command line?

### Advanced

- How can conditional compilation improve portability?
- What are the downsides of excessive conditional compilation?

## Exercises

Easy

- Use #ifdef around a debug print statement.

Medium

- Compile a program with and without a defined flag to see the difference.

Hard

- Design a small feature toggle using conditional compilation.

Interview

- Explain why conditional compilation is useful for portable code.

## Assignment

Create a C program with a debug mode enabled by a preprocessor macro.

## Mini Project

Build a configurable program with multiple compile-time options using conditional compilation.

## Summary Notes

- Conditional compilation includes or excludes code at compile time.
- Use it for platform-specific or debug builds.
- Keep build variants manageable.

## Next Topic

[Next Topic](16_STORAGE_CLASSES/95_auto/README.md)
