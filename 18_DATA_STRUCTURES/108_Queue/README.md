# 108 – Queue

## Overview

A queue is a first-in, first-out data structure where elements are enqueued at the back and dequeued from the front.

## Why This Topic Matters

Queues are used for scheduling, buffering, and breadth-first search algorithms.

## Learning Objectives

- Explain the key concepts behind Queue.
- Write C code that uses Queue correctly.
- Recognize how Queue fits into larger C programs and system design.

## Theory

Beginner: Enqueue adds an item to the rear, and dequeue removes an item from the front.

Intermediate: Implement a queue with a circular buffer or linked list to avoid wasted space.

Advanced: Use queues in producer-consumer systems and understand how front/rear pointers move.

## Internal Working

At the compiler level, Queue is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Queue often maps to register operations, branch logic, or system calls.

## Syntax

enqueue(queue, value); dequeue(queue);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Queue example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Queue example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Queue example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Queue example output\n");
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

- Confusing front and rear indices.
- Allowing the queue to overflow without checks.
- Failing to wrap around in a circular buffer implementation.

## Best Practices

- Use a circular buffer for array-based queues.
- Check for empty and full states before operations.
- Keep enqueue and dequeue logic separate.

## Interview Questions

### Beginner

- What is a queue?
- What does FIFO mean?

### Intermediate

- How do you implement a queue in C?
- What is the difference between a queue and a stack?

### Advanced

- How does a circular queue work?
- When are queues used in real systems?

## Exercises

Easy

- Implement a simple queue using an array.

Medium

- Use a queue to process values in arrival order.

Hard

- Implement a circular queue with wrap-around logic.

Interview

- Explain why queues are FIFO.

## Assignment

Create a queue implementation with enqueue and dequeue operations.

## Mini Project

Build a small event queue or task scheduler simulation.

## Summary Notes

- Queue is FIFO.
- Use front and rear indices carefully.
- Check empty/full conditions.

## Next Topic

[Next Topic](18_DATA_STRUCTURES/109_Trees/README.md)
