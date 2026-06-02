# 63 – strcmp

## Overview

strcmp compares two strings lexicographically and returns a value indicating their ordering.

## Why This Topic Matters

String comparison is crucial for searching, sorting, and validating text data in C.

## Learning Objectives

- Explain the key concepts behind strcmp.
- Write C code that uses strcmp correctly.
- Recognize how strcmp fits into larger C programs and system design.

## Theory

Beginner: strcmp returns 0 when strings are equal, a negative value if the first string is smaller, and a positive value if it is larger.

Intermediate: Use strcmp for exact comparisons, and understand that it compares character codes sequentially.

Advanced: Avoid using strcmp for partial matching or when case-insensitive comparison is required without the appropriate function.

## Internal Working

At the compiler level, strcmp is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, strcmp often maps to register operations, branch logic, or system calls.

## Syntax

if (strcmp(a, b) == 0) { ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("strcmp example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("strcmp example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("strcmp example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("strcmp example output\n");
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

- Comparing strcmp directly to true or false.
- Ignoring the sign of the return value.
- Using strcmp for null or uninitialized strings.

## Best Practices

- Check for equality with == 0.
- Use strncmp for limited-length comparisons.
- Validate strings before comparing them.

## Interview Questions

### Beginner

- What does strcmp return when two strings match?
- How do you compare strings in C?

### Intermediate

- What does a negative strcmp result mean?
- Why is strcmp not suitable for case-insensitive comparison?

### Advanced

- How can you compare only the first n characters of two strings?
- What are common pitfalls of strcmp?

## Exercises

Easy

- Compare two strings with strcmp and print whether they match.

Medium

- Sort a small list of strings using strcmp.

Hard

- Implement case-insensitive comparison using strcmp and manual conversion.

Interview

- Explain the return convention of strcmp.

## Assignment

Create a string comparison program that checks equality and ordering of inputs.

## Mini Project

Build a small string sorter or searcher that uses strcmp for comparisons.

## Summary Notes

- strcmp compares strings lexicographically.
- Check for == 0 for equality.
- Use it carefully for exact matching.

## Next Topic

[Next Topic](10_STRINGS/64_String_Programs/README.md)
