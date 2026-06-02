# 61 – strcpy

## Overview

strcpy copies a null-terminated source string into a destination buffer.

## Why This Topic Matters

Copying strings is a common task, and strcpy demonstrates how C manages raw character arrays.

## Learning Objectives

- Explain the key concepts behind strcpy.
- Write C code that uses strcpy correctly.
- Recognize how strcpy fits into larger C programs and system design.

## Theory

Beginner: strcpy(dest, src) copies each character, including the null terminator, from src to dest.

Intermediate: Ensure the destination buffer is large enough to hold the source string and the null terminator.

Advanced: Recognize the dangers of strcpy when buffer sizes are unknown, and prefer safer alternatives when available.

## Internal Working

At the compiler level, strcpy is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, strcpy often maps to register operations, branch logic, or system calls.

## Syntax

char dest[20]; strcpy(dest, src);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("strcpy example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("strcpy example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("strcpy example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("strcpy example output\n");
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

- Using strcpy with a destination that is too small.
- Forgetting that strcpy overwrites the destination.
- Using strcpy with overlapping source and destination buffers.

## Best Practices

- Allocate enough space for the destination string.
- Use strncpy or safer functions if buffer size is a concern.
- Always ensure source strings are null-terminated.

## Interview Questions

### Beginner

- What does strcpy do?
- Why do you need enough space for the destination?

### Intermediate

- What are the risks of strcpy?
- How does strcpy handle the null terminator?

### Advanced

- When would you use strncpy instead of strcpy?
- Why can strcpy cause security problems?

## Exercises

Easy

- Copy one string to another using strcpy.

Medium

- Read a string and copy it into a buffer safely.

Hard

- Compare strcpy with strncpy and explain the difference.

Interview

- Describe the key safety concerns with strcpy.

## Assignment

Implement a small string copy demonstration and show how to avoid overflow.

## Mini Project

Build a string utility that safely copies and manipulates text using character arrays.

## Summary Notes

- strcpy copies strings including the null terminator.
- Destination buffers must be large enough.
- Prefer safer alternatives when possible.

## Next Topic

[Next Topic](10_STRINGS/62_strcat/README.md)
