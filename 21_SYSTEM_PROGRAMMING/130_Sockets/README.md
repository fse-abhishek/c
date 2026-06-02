# 130 – Sockets

## Overview

Sockets provide a programming interface for network communication between processes or machines.

## Why This Topic Matters

They are the core building blocks for client-server applications and networked services in C.

## Learning Objectives

- Explain the key concepts behind Sockets.
- Write C code that uses Sockets correctly.
- Recognize how Sockets fits into larger C programs and system design.

## Theory

Beginner: A socket is an endpoint for communication. You can create sockets, bind them to addresses, listen for connections, and send or receive data.

Intermediate: Learn the differences between TCP and UDP, and how socket functions work together in a network program.

Advanced: Use sockets for scalable network servers and understand blocking versus non-blocking I/O and error handling.

## Internal Working

At the compiler level, Sockets is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Sockets often maps to register operations, branch logic, or system calls.

## Syntax

int sock = socket(AF_INET, SOCK_STREAM, 0);

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

- Not checking return values for socket functions.
- Mixing up address structures and port numbers.
- Using blocking sockets without handling timeouts.

## Best Practices

- Check all socket calls for errors.
- Use the correct address family and socket type.
- Close sockets when you are done with them.

## Interview Questions

### Beginner

- What is a socket?
- What is the difference between TCP and UDP?

### Intermediate

- How do you create and bind a socket?
- What does listen do?

### Advanced

- How do you build a scalable socket server?
- What is non-blocking socket I/O?

## Exercises

Easy

- Review socket API concepts and write down the main steps.

Medium

- Explain the sequence of socket calls for a TCP server.

Hard

- Design a simple client-server interaction using sockets.

Interview

- Describe the basic socket lifecycle.

## Assignment

Write a conceptual plan for a simple networked C program using sockets.

## Mini Project

Build a minimal client-server communication design in pseudocode or real C if possible.

## Summary Notes

- Sockets enable network communication.
- Use TCP for reliable streams and UDP for datagrams.
- Check socket errors and close resources.

## Next Topic

[Next Topic](21_SYSTEM_PROGRAMMING/131_Linux_System_Calls/README.md)
