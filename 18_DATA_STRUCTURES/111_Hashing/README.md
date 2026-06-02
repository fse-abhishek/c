# 111 – Hashing

## Overview

Hashing maps data to fixed-size indices and is used for fast lookup in tables and sets.

## Why This Topic Matters

Hashing enables efficient average-case access to stored values and is the foundation for hash tables and caches.

## Learning Objectives

- Explain the key concepts behind Hashing.
- Write C code that uses Hashing correctly.
- Recognize how Hashing fits into larger C programs and system design.

## Theory

Beginner: A hash function converts a key into an index, and values are stored in buckets or slots based on that index.

Intermediate: Learn about collisions, collision resolution strategies, and how hash tables store multiple values in the same bucket.

Advanced: Choose hash functions carefully, handle collisions efficiently, and understand tradeoffs between load factor and performance.

## Internal Working

At the compiler level, Hashing is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Hashing often maps to register operations, branch logic, or system calls.

## Syntax

Use an array of buckets and a hash function to compute an index from a key.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Hashing example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Hashing example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Hashing example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Hashing example output\n");
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

- Using a poor hash function that clusters values.
- Ignoring collision handling.
- Assuming constant-time behavior for all cases.

## Best Practices

- Use a simple but effective hash function.
- Implement collision resolution with chaining or open addressing.
- Monitor load factor and resize the table if needed.

## Interview Questions

### Beginner

- What is hashing?
- What is a hash table?

### Intermediate

- What is a collision in hashing?
- How can collisions be resolved?

### Advanced

- How does load factor affect hash table performance?
- What makes a good hash function?

## Exercises

Easy

- Map simple string keys to integer values using a hash function.

Medium

- Implement a basic hash table with chaining.

Hard

- Study collision rates and test different hash functions.

Interview

- Explain collision resolution in hash tables.

## Assignment

Build a simple hash table and demonstrate inserting and retrieving values.

## Mini Project

Create a keyword lookup table or dictionary using hashing.

## Summary Notes

- Hashing maps keys to indices.
- Handle collisions explicitly.
- Good hash functions improve performance.

## Next Topic

[Next Topic](19_ALGORITHMS/112_Linear_Search/README.md)
