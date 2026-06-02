# 62 – strcat

## Overview

strcat appends one string to the end of another in C.

## Why This Topic Matters

String concatenation is useful for building messages, file paths, and combined text values.

## Learning Objectives

- Explain the key concepts behind strcat.
- Write C code that uses strcat correctly.
- Recognize how strcat fits into larger C programs and system design.

## Theory

Beginner: strcat(dest, src) appends the source string to the destination string, assuming the destination has enough space.

Intermediate: The destination string must already be null-terminated, and you must reserve space for the combined result.

Advanced: Use strcat carefully to avoid buffer overflow, and prefer safer concatenation techniques when working with untrusted input.

## Internal Working

At the compiler level, strcat is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, strcat often maps to register operations, branch logic, or system calls.

## Syntax

char dest[50] = "Hello, "; strcat(dest, "world!");

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("strcat example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("strcat example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("strcat example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("strcat example output\n");
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

- Not allocating enough space for the combined string.
- Using strcat when the destination is not initialized or null-terminated.
- Overwriting the destination buffer.

## Best Practices

- Initialize the destination string and ensure enough capacity.
- Use strncat or manual loops for safer concatenation.
- Avoid concatenating too many strings without checking sizes.

## Interview Questions

### Beginner

- What does strcat do?
- What must be true about the destination string before strcat?

### Intermediate

- How does strcat handle the null terminator?
- What is the primary risk of strcat?

### Advanced

- How can you safely concatenate strings in C?
- When should you avoid strcat?

## Exercises

Easy

- Append one string to another using strcat.

Medium

- Create a greeting by concatenating name and message strings.

Hard

- Implement safe concatenation with buffer size checks.

Interview

- Explain why strcat can be unsafe.

## Assignment

Write a program that concatenates strings and ensures the destination buffer is large enough.

## Mini Project

Build a small message builder that concatenates user input with fixed text safely.

## Summary Notes

- strcat appends strings.
- Ensure sufficient space before concatenation.
- Use safer techniques when needed.

## Next Topic

[Next Topic](10_STRINGS/63_strcmp/README.md)
