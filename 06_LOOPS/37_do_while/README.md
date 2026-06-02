# 37 – do while

## Overview

Learn the while loop for repeating code while a condition remains true.

## Why This Topic Matters

while loops are essential for repeating work when the number of iterations is not known in advance.

## Learning Objectives

- Explain the key concepts behind do while.
- Write C code that uses do while correctly.
- Recognize how do while fits into larger C programs and system design.

## Theory

Beginner: while(condition) { statements; } repeats the body as long as the condition is true.

Intermediate: Understand loop initialization, condition checks, and the risk of infinite loops if the condition never becomes false.

Advanced: Use while loops for event-driven or sentinel-based processing, and combine them with break for clean exits.

## Internal Working

At the compiler level, do while is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, do while often maps to register operations, branch logic, or system calls.

## Syntax

while (count < 10) { count++; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("do while example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("do while example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("do while example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("do while example output\n");
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

- Forgetting to update the loop variable.
- Creating an infinite loop.
- Using while when a for loop would be clearer.

## Best Practices

- Keep loop conditions simple.
- Ensure the loop can terminate.
- Use comments for non-obvious loop logic.

## Interview Questions

### Beginner

- What is a while loop?
- How does while differ from for?

### Intermediate

- How do you prevent infinite loops?
- When should you use while instead of for?

### Advanced

- How can while loops be used for input-driven processing?
- What are loop invariants?

## Exercises

Easy

- Write a while loop that prints numbers from 1 to 5.

Medium

- Use while to read input until a sentinel value is entered.

Hard

- Implement a loop with a complex stop condition and validation.

Interview

- Describe a situation where while is the best loop choice.

## Assignment

Build a program that uses while to process user input until a stop condition is met.

## Mini Project

Create a loop-based menu or input processor using while.

## Summary Notes

- while repeats while a condition is true.
- Make sure the condition can become false.
- Use it for sentinel-driven loops or unknown iteration counts.

## Next Topic

[Next Topic](06_LOOPS/38_for/README.md)
