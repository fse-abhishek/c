# 75 – Unions

## Overview

Unions let multiple members share the same memory location, making them useful for variant data and low-level programming.

## Why This Topic Matters

They allow efficient memory use for different representations of the same data, such as interpreting binary values in multiple ways.

## Learning Objectives

- Explain the key concepts behind Unions.
- Write C code that uses Unions correctly.
- Recognize how Unions fits into larger C programs and system design.

## Theory

Beginner: A union stores one member at a time, and all members share the same memory block.

Intermediate: Use unions for tagged data structures or when storage efficiency is important, but track which field is active.

Advanced: Combine unions with structs and enums to build safe variant records and avoid undefined behavior from invalid member access.

## Internal Working

At the compiler level, Unions is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Unions often maps to register operations, branch logic, or system calls.

## Syntax

union Value { int i; float f; char bytes[4]; };

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

- Reading a union member that was not most recently written.
- Assuming all members can be used simultaneously.
- Using unions without an active tag or discriminator.

## Best Practices

- Use a separate tag field to track the active member.
- Access only the currently stored member.
- Avoid unions for general-purpose data unless memory is critical.

## Interview Questions

### Beginner

- What is a union in C?
- How is a union different from a struct?

### Intermediate

- What happens when you write one union member and read another?
- When should you use a union?

### Advanced

- How do unions enable variant data structures?
- What are safety concerns with unions?

## Exercises

Easy

- Define a union and assign a value to one member.

Medium

- Use a union with a tag to store either an int or a float.

Hard

- Build a simple variant type using a struct and a union.

Interview

- Explain why unions share memory among members.

## Assignment

Create a union-based example that stores one of several data types and accesses it safely.

## Mini Project

Build a small variant record using a union plus a tag field for the active type.

## Summary Notes

- Unions share memory across members.
- Use only the active member.
- Add a tag when storing multiple types.

## Next Topic

[Next Topic](12_STRUCTURES_UNIONS/76_Enum/README.md)
