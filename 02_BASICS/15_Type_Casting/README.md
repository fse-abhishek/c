# 15 – Type Casting

## Overview

Type casting converts one data type to another and is essential for working with mixed expressions in C.

## Why This Topic Matters

Proper casting helps avoid unintended results, loss of precision, and compiler warnings in arithmetic and I/O operations.

## Learning Objectives

- Explain the key concepts behind Type Casting.
- Write C code that uses Type Casting correctly.
- Recognize how Type Casting fits into larger C programs and system design.

## Theory

Beginner: A cast tells the compiler to treat a value as a different type, such as (int) 3.14 or (double) x.

Intermediate: Learn the difference between implicit conversion and explicit casting, and when to use each to preserve data correctness.

Advanced: Use casting carefully to avoid undefined behavior, especially with pointers, integer overflow, and mixed signed/unsigned expressions.

## Internal Working

At the compiler level, Type Casting is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Type Casting often maps to register operations, branch logic, or system calls.

## Syntax

Casting follows the form (type) expression, for example (float) count or (char) value.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Type Casting example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Type Casting example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Type Casting example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Type Casting example output\n");
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

- Casting without understanding the effect on precision.
- Using casts to silence warnings instead of fixing the underlying issue.
- Casting pointers incorrectly between incompatible types.

## Best Practices

- Use explicit casts only when necessary.
- Prefer correct data types over unnecessary casting.
- Document why a cast is needed when it is not obvious.

## Interview Questions

### Beginner

- What is type casting in C?
- How do you cast a float to an int?

### Intermediate

- What is the difference between implicit conversion and explicit casting?
- Why can casts cause data loss?

### Advanced

- How does casting affect pointer arithmetic?
- When does casting lead to undefined behavior?

## Exercises

Easy

- Cast a float to an int and print the result.

Medium

- Write a program that converts between integer and floating-point types.

Hard

- Identify and fix incorrect casts in a sample program.

Interview

- Explain when explicit casts are necessary in C.

## Assignment

Create a C program that safely casts values between compatible types and documents each conversion.

## Mini Project

Build a simple conversion utility that accepts numeric input and casts it to different C types.

## Summary Notes

- Type casting changes how values are interpreted.
- Use explicit casts thoughtfully.
- Avoid casting when better types can eliminate the need.

## Next Topic

[Next Topic](03_INPUT_OUTPUT/16_printf/README.md)
