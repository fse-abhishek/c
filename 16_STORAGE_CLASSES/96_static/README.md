# 96 – static

## Overview

The static storage class gives variables static lifetime and, for local variables, preserves their value across function calls.

## Why This Topic Matters

Static variables are useful for persistent state, module-level encapsulation, and efficient reuse of memory.

## Learning Objectives

- Explain the key concepts behind static.
- Write C code that uses static correctly.
- Recognize how static fits into larger C programs and system design.

## Theory

Beginner: A static variable inside a function retains its value between calls. A static global variable is limited to the current file.

Intermediate: Learn how static affects linkage and scope, and when to use it for private data or cached results.

Advanced: Use static carefully to manage state and avoid hidden dependencies across function calls and files.

## Internal Working

At the compiler level, static is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, static often maps to register operations, branch logic, or system calls.

## Syntax

static int count = 0;

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("static example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("static example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("static example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("static example output\n");
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

- Overusing static for state that should be passed explicitly.
- Assuming static variables are thread-safe.
- Mixing static with extern incorrectly.

## Best Practices

- Use static for module-local globals and persistent local state.
- Document the purpose of static variables.
- Avoid hidden state that makes code hard to test.

## Interview Questions

### Beginner

- What does static mean for a variable?
- How does a static local variable behave?

### Intermediate

- What is the linkage of a static global variable?
- How is static different from extern?

### Advanced

- When should you use static variables?
- What are the tradeoffs of static state?

## Exercises

Easy

- Create a static local counter inside a function.

Medium

- Use a static global variable in one file and observe its scope.

Hard

- Refactor code to replace a global variable with a static file-local variable.

Interview

- Explain the effect of static on linkage and lifetime.

## Assignment

Build a function that uses a static local variable to count how many times it is called.

## Mini Project

Create a resource manager that uses static variables for internal state within a module.

## Summary Notes

- static gives a variable permanent lifetime.
- Static locals preserve value across calls.
- Use static for private module state.

## Next Topic

[Next Topic](16_STORAGE_CLASSES/97_register/README.md)
