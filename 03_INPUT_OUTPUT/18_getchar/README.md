# 18 – getchar

## Overview

Learn how getchar provides simple character-based I/O in C.

## Why This Topic Matters

Character I/O functions are useful for low-level input/output tasks, simple text processing, and building command-line utilities.

## Learning Objectives

- Explain the key concepts behind getchar.
- Write C code that uses getchar correctly.
- Recognize how getchar fits into larger C programs and system design.

## Theory

Beginner: getchar reads or writes one character at a time. getchar is easy to use and can be combined with loops to process text.

Intermediate: Understand buffered I/O, how newline characters are handled, and how to use these functions safely in loops and interactive programs.

Advanced: Use character I/O efficiently in performance-sensitive code, and combine it with formatted output or file streams when needed.

## Internal Working

At the compiler level, getchar is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, getchar often maps to register operations, branch logic, or system calls.

## Syntax

Example: int ch = getchar(); putchar(ch);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    int ch = getchar();
    putchar(ch);
    putchar('\n');
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    int ch = getchar();
    putchar(ch);
    putchar('\n');
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    int ch = getchar();
    putchar(ch);
    putchar('\n');
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    int ch = getchar();
    putchar(ch);
    putchar('\n');
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

- Not checking for EOF when using getchar.
- Forgetting to add a newline with putchar or puts.
- Using puts with strings that contain format specifiers (puts does not interpret them, but it's still good to know).

## Best Practices

- Handle EOF and errors explicitly.
- Use puts for simple string output and putchar for single characters.
- Keep character loops simple and clear.

## Interview Questions

### Beginner

- What does getchar do?
- How do you write a character with putchar?

### Intermediate

- How do you detect end-of-file with getchar?
- When would you use puts instead of printf?

### Advanced

- How does buffered I/O affect getchar and putchar performance?
- What are common pitfalls in character-based input loops?

## Exercises

Easy

- Read one character and print it back with putchar.

Medium

- Create a loop that copies input to output until EOF.

Hard

- Implement a simple character-based line editor or filter.

Interview

- Describe the difference between getchar, putchar, and puts.

## Assignment

Write a C program that reads characters until newline and echoes them back to the console.

## Mini Project

Create a simple text filter or analyzer using single-character I/O.

## Summary Notes

- Character I/O is fundamental for simple text processing.
- Always handle EOF and buffer boundaries.
- Use the right function for the job: getchar for input, putchar/puts for output.

## Next Topic

[Next Topic](03_INPUT_OUTPUT/19_putchar/README.md)
