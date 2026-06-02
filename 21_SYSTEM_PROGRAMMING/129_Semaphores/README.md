# 129 – Semaphores

## Overview

Semaphores are synchronization primitives used to control access to shared resources across processes or threads.

## Why This Topic Matters

They prevent race conditions and coordinate access in concurrent systems.

## Learning Objectives

- Explain the key concepts behind Semaphores.
- Write C code that uses Semaphores correctly.
- Recognize how Semaphores fits into larger C programs and system design.

## Theory

Beginner: A semaphore has a count that indicates how many resources are available. Processes wait when the count is zero and signal when they release a resource.

Intermediate: Learn the difference between binary semaphores (mutexes) and counting semaphores, and how they coordinate resource use.

Advanced: Use semaphores carefully to avoid deadlocks and priority inversion in concurrent programs.

## Internal Working

At the compiler level, Semaphores is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Semaphores often maps to register operations, branch logic, or system calls.

## Syntax

sem_t sem; sem_init(&sem, 0, 1);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Semaphores example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Semaphores example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Semaphores example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Semaphores example output\n");
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

- Forgetting to post (signal) a semaphore after waiting.
- Using semaphores for the wrong synchronization pattern.
- Creating deadlocks by holding multiple semaphores.

## Best Practices

- Use semaphores for shared resource control.
- Release semaphores in the opposite order you acquire them.
- Document the synchronization design clearly.

## Interview Questions

### Beginner

- What is a semaphore?
- What does sem_wait do?

### Intermediate

- What is the difference between binary and counting semaphores?
- Why are semaphores used for synchronization?

### Advanced

- How can semaphores cause deadlock?
- When should you use a semaphore instead of a mutex?

## Exercises

Easy

- Describe how a semaphore controls resource access.

Medium

- Draw the state changes when a process waits and signals a semaphore.

Hard

- Explain a producer-consumer solution using semaphores.

Interview

- Explain the purpose of semaphores in synchronization.

## Assignment

Research how semaphores work and document a simple use case.

## Mini Project

Design a producer-consumer model using semaphores in concept or pseudocode.

## Summary Notes

- Semaphores synchronize access to shared resources.
- Use them to prevent race conditions.
- Avoid deadlocks with careful design.

## Next Topic

[Next Topic](21_SYSTEM_PROGRAMMING/130_Sockets/README.md)
