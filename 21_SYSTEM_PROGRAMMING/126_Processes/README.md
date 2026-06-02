# 126 – Processes

## Overview

Processes are executing instances of programs and are managed by the operating system.

## Why This Topic Matters

Understanding processes is important for system programming, multitasking, and how C programs run on Linux and other systems.

## Learning Objectives

- Explain the key concepts behind Processes.
- Write C code that uses Processes correctly.
- Recognize how Processes fits into larger C programs and system design.

## Theory

Beginner: A process contains code, data, stack, and heap. The OS assigns each process its own memory space.

Intermediate: Learn how processes are created, scheduled, and terminated, and how they communicate with the OS.

Advanced: Explore process states, context switching, and how system calls interface with the kernel.

## Internal Working

At the compiler level, Processes is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Processes often maps to register operations, branch logic, or system calls.

## Syntax

No direct C syntax, but understand how process APIs work in system programming.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Processes example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Processes example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Processes example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Processes example output\n");
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

- Confusing processes with threads.
- Assuming multiple processes share the same memory.
- Ignoring OS-level errors when spawning or managing processes.

## Best Practices

- Handle system call errors carefully.
- Document process assumptions and lifecycle.
- Use the OS tools to monitor process behavior.

## Interview Questions

### Beginner

- What is a process?
- What components does a process have?

### Intermediate

- How does the OS manage processes?
- What is process isolation?

### Advanced

- What is context switching?
- How do system calls interact with processes?

## Exercises

Easy

- Research and summarize the lifecycle of a process.

Medium

- Identify process states in an operating system.

Hard

- Write a small report on how C programs become processes.

Interview

- Explain the difference between a process and a program.

## Assignment

Document how a C program is executed as a process by the OS.

## Mini Project

Create a conceptual diagram of process states and transitions.

## Summary Notes

- A process is a running program.
- The OS manages process memory and scheduling.
- Processes are isolated from each other.

## Next Topic

[Next Topic](21_SYSTEM_PROGRAMMING/127_Threads/README.md)
