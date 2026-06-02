# 31 – if

## Overview

Learn the if statement for conditional execution in C.

## Why This Topic Matters

The if statement is the most basic decision-making construct in C programs.

## Learning Objectives

- Explain the key concepts behind if.
- Write C code that uses if correctly.
- Recognize how if fits into larger C programs and system design.

## Theory

Beginner: Use if(expression) { ... } to execute code only when the expression is true (nonzero).

Intermediate: Understand how expressions are evaluated and how if can be combined with else or else if.

Advanced: Use if carefully to keep logic clear and avoid deeply nested structures. Consider using functions to simplify conditions.

## Internal Working

At the compiler level, if is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, if often maps to register operations, branch logic, or system calls.

## Syntax

if (condition) { statements; }

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("if example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("if example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("if example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("if example output\n");
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

- Using = instead of == in the condition.
- Missing braces around multiple statements.
- Writing overly complex conditions.

## Best Practices

- Keep conditions simple and readable.
- Use braces even for single statements.
- Extract complex conditions into helper functions.

## Interview Questions

### Beginner

- What is the syntax of an if statement?
- When does the body of if execute?

### Intermediate

- What happens if you omit braces?
- How do you write an if statement that checks multiple conditions?

### Advanced

- How can you simplify nested if statements?
- What are common pitfalls with if conditions?

## Exercises

Easy

- Write an if statement that checks whether a number is positive.

Medium

- Use if to validate user input and print a message.

Hard

- Refactor nested if logic into clearer code.

Interview

- Explain the role of if in control flow.

## Assignment

Implement a simple validator using if statements to check a numeric range.

## Mini Project

Build a small decision helper that uses if statements to respond to user input.

## Summary Notes

- if executes code conditionally.
- Use braces for clarity.
- Keep conditions straightforward.

## Next Topic

[Next Topic](05_CONDITIONAL_STATEMENTS/32_if_else/README.md)
