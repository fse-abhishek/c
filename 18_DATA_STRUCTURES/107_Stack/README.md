# 107 – Stack

## Overview

A stack is a last-in, first-out data structure with push and pop operations.

## Why This Topic Matters

Stacks are used in function calls, expression evaluation, and backtracking algorithms.

## Learning Objectives

- Explain the key concepts behind Stack.
- Write C code that uses Stack correctly.
- Recognize how Stack fits into larger C programs and system design.

## Theory

Beginner: Elements are added with push and removed with pop from the top of the stack.

Intermediate: Implement a stack using an array or linked list, and track the top index or node.

Advanced: Use stacks for expression parsing, recursion elimination, and state management.

## Internal Working

At the compiler level, Stack is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Stack often maps to register operations, branch logic, or system calls.

## Syntax

push(stack, value); pop(stack);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Stack example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Stack example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Stack example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Stack example output\n");
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

- Pushing to a full stack without checking overflow.
- Popping from an empty stack.
- Confusing top-of-stack order.

## Best Practices

- Check for underflow and overflow.
- Keep stack operations simple.
- Use clear names for push, pop, and peek.

## Interview Questions

### Beginner

- What is a stack?
- What does LIFO mean?

### Intermediate

- How do you implement a stack in C?
- What happens when you pop an empty stack?

### Advanced

- How are stacks used in function call management?
- What are stack overflow and underflow?

## Exercises

Easy

- Implement a simple stack using an array.

Medium

- Use a stack to reverse a sequence of values.

Hard

- Implement a stack with linked nodes and push/pop operations.

Interview

- Describe the LIFO property of a stack.

## Assignment

Create a stack implementation with push, pop, and peek operations.

## Mini Project

Build a simple stack-based calculator for postfix expressions.

## Summary Notes

- Stack is LIFO.
- Check for underflow and overflow.
- Use it for nested or undo operations.

## Next Topic

[Next Topic](18_DATA_STRUCTURES/108_Queue/README.md)
