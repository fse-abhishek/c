# 124 – Debugging

## Overview

Debugging is the process of finding and fixing bugs in C programs using tools, printouts, and careful reasoning.

## Why This Topic Matters

All programmers need debugging skills to diagnose crashes, logic errors, and incorrect results.

## Learning Objectives

- Explain the key concepts behind Debugging.
- Write C code that uses Debugging correctly.
- Recognize how Debugging fits into larger C programs and system design.

## Theory

Beginner: Use printf statements, compiler warnings, and simple tests to find where code behaves unexpectedly.

Intermediate: Learn how to use a debugger, examine variables, step through code, and inspect memory.

Advanced: Use sanitizers, watchpoints, and systematic problem-solving to find elusive runtime issues.

## Internal Working

At the compiler level, Debugging is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Debugging often maps to register operations, branch logic, or system calls.

## Syntax

Use tools like gdb or printf to inspect values and execution flow.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Debugging example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Debugging example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Debugging example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Debugging example output\n");
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

- Ignoring compiler warnings and assuming the code is correct.
- Using printf without understanding the program state.
- Making changes without isolating the root cause.

## Best Practices

- Use a debugger for complex bugs.
- Reproduce issues with simple test cases.
- Fix the root cause instead of masking symptoms.

## Interview Questions

### Beginner

- What is debugging?
- How can printf help debug a C program?

### Intermediate

- What is a debugger?
- How do you inspect variables at runtime?

### Advanced

- What are memory sanitizers?
- How do you debug a segmentation fault?

## Exercises

Easy

- Use printf to print a variable's value at key points in a program.

Medium

- Use a debugger to step through a small program and observe its flow.

Hard

- Diagnose and fix a bug that produces incorrect output.

Interview

- Explain your debugging process for a C program.

## Assignment

Debug a small C program with a known bug and document the steps you took to fix it.

## Mini Project

Create a bug report and fix it using a debugger and test cases.

## Summary Notes

- Debugging finds and fixes bugs.
- Use tools and careful reasoning.
- Address the root cause, not just symptoms.

## Next Topic

[Next Topic](20_ADVANCED_C/125_Assertions/README.md)
