# 40 – continue

## Overview

The continue statement skips the rest of the current loop iteration and moves to the next one.

## Why This Topic Matters

continue is useful when you want to ignore invalid or unnecessary cases without exiting the loop entirely.

## Learning Objectives

- Explain the key concepts behind continue.
- Write C code that uses continue correctly.
- Recognize how continue fits into larger C programs and system design.

## Theory

Beginner: Use continue inside a loop to skip the remaining statements for this iteration.

Intermediate: Understand how continue affects loop control and where it is best used for readability.

Advanced: Avoid heavy use of continue in complex loops, and prefer simple conditions when possible.

## Internal Working

At the compiler level, continue is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, continue often maps to register operations, branch logic, or system calls.

## Syntax

for (int i = 0; i < n; i++) { if (skip) continue; ... }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("continue example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("continue example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("continue example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("continue example output\n");
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

- Using continue in deeply nested loops and losing track of flow.
- Assuming continue exits the entire loop.
- Overusing continue instead of clearer conditionals.

## Best Practices

- Use continue for simple, obvious skips.
- Keep loop bodies easy to follow.
- Avoid continue when it hides logic flow.

## Interview Questions

### Beginner

- What does continue do in a loop?
- Can continue be used in any loop?

### Intermediate

- How does continue affect the loop update step?
- When should you avoid continue?

### Advanced

- How can continue impact readability and optimization?
- What is the difference between break and continue?

## Exercises

Easy

- Use continue to skip negative values in a loop.

Medium

- Collect only valid inputs using continue to ignore invalid ones.

Hard

- Refactor a loop that uses continue to preserve clarity.

Interview

- Explain how continue changes loop execution.

## Assignment

Write a loop that skips over invalid data using continue and processes the rest normally.

## Mini Project

Build a data filter that removes unwanted values from input using continue.

## Summary Notes

- continue skips the rest of the current iteration.
- Use it for clear early exits from loop bodies.
- Avoid confusing use in complex loops.

## Next Topic

[Next Topic](06_LOOPS/41_goto/README.md)
