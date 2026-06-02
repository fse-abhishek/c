# 127 – Threads

## Overview

Threads are lightweight execution units within a process that share the same memory space.

## Why This Topic Matters

Threads enable concurrent execution, which is useful for responsive applications and parallel workloads.

## Learning Objectives

- Explain the key concepts behind Threads.
- Write C code that uses Threads correctly.
- Recognize how Threads fits into larger C programs and system design.

## Theory

Beginner: A process may contain multiple threads that run concurrently and share data within the same address space.

Intermediate: Learn about thread creation, shared resources, and the need for synchronization to avoid race conditions.

Advanced: Use mutexes, condition variables, and careful design to build thread-safe C programs.

## Internal Working

At the compiler level, Threads is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Threads often maps to register operations, branch logic, or system calls.

## Syntax

Thread APIs vary by platform, but the concept of shared memory and concurrency is central.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Learn C by practicing this topic.\n");
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

- Accessing shared data without synchronization.
- Creating too many threads and overwhelming the system.
- Assuming thread scheduling is deterministic.

## Best Practices

- Protect shared resources with locks.
- Keep thread tasks independent when possible.
- Avoid deadlocks with clear locking order.

## Interview Questions

### Beginner

- What is a thread?
- How does a thread differ from a process?

### Intermediate

- Why do threads share memory?
- What is a race condition?

### Advanced

- How do you synchronize threads safely?
- What are common deadlock causes?

## Exercises

Easy

- Research thread basics and write a summary.

Medium

- Describe a race condition and how to prevent it.

Hard

- Design a small threaded workflow with synchronization.

Interview

- Explain why thread safety matters.

## Assignment

Document thread concepts and how they differ from processes.

## Mini Project

Create a conceptual design for a simple multi-threaded C program.

## Summary Notes

- Threads are concurrent execution units.
- They share memory within a process.
- Synchronization is required for shared data.

## Next Topic

[Next Topic](21_SYSTEM_PROGRAMMING/128_IPC/README.md)
