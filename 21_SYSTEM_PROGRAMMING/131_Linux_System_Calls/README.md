# 131 – Linux System Calls

## Overview

Linux system calls are low-level interfaces that let C programs request services from the kernel.

## Why This Topic Matters

They provide direct access to OS features such as files, processes, and device I/O, which is essential for system programming.

## Learning Objectives

- Explain the key concepts behind Linux System Calls.
- Write C code that uses Linux System Calls correctly.
- Recognize how Linux System Calls fits into larger C programs and system design.

## Theory

Beginner: System calls like open, read, write, and fork are invoked through wrapper functions and let user code interact with the kernel.

Intermediate: Learn how system calls differ from library functions, and how to handle errors returned by the kernel.

Advanced: Use system calls for low-level control, performance tuning, and OS-specific programming while being mindful of portability.

## Internal Working

At the compiler level, Linux System Calls is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Linux System Calls often maps to register operations, branch logic, or system calls.

## Syntax

int fd = open("file.txt", O_RDONLY);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Linux System Calls example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Linux System Calls example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Linux System Calls example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Linux System Calls example output\n");
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

- Confusing library functions with system calls.
- Ignoring error return values.
- Using OS-specific system calls without portability guards.

## Best Practices

- Check system call return values.
- Document OS-specific assumptions.
- Use higher-level libraries when portability is required.

## Interview Questions

### Beginner

- What is a system call?
- Give an example of a Linux system call.

### Intermediate

- How do you handle errors from system calls?
- What is the role of the kernel in system calls?

### Advanced

- How do system calls affect portability?
- Why do system calls require wrappers in C?

## Exercises

Easy

- Research a common Linux system call and describe its purpose.

Medium

- Explain the difference between open/read/write and fopen/fread/fwrite.

Hard

- Design a C program that uses a Linux system call for file access or process control.

Interview

- Describe how a system call crosses from user mode to kernel mode.

## Assignment

Document a Linux system call example and its error handling.

## Mini Project

Create a small system programming concept demonstration using one or two Linux system calls.

## Summary Notes

- System calls request kernel services.
- Check returns and handle errors.
- Remember portability tradeoffs.

## Next Topic

[Next Topic](22_PROJECTS/132_Calculator/README.md)
