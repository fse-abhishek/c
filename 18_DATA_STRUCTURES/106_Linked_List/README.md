# 106 – Linked List

## Overview

A linked list is a dynamic sequence of nodes where each node points to the next one.

## Why This Topic Matters

Linked lists demonstrate pointers in action and allow flexible insertion and deletion without contiguous memory.

## Learning Objectives

- Explain the key concepts behind Linked List.
- Write C code that uses Linked List correctly.
- Recognize how Linked List fits into larger C programs and system design.

## Theory

Beginner: Each node contains data and a pointer to the next node. The list is traversed by following these pointers.

Intermediate: Learn how to insert, delete, and search nodes, and how to manage the head pointer.

Advanced: Understand memory allocation for nodes, pointer manipulation, and common linked list variations like doubly linked lists.

## Internal Working

At the compiler level, Linked List is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Linked List often maps to register operations, branch logic, or system calls.

## Syntax

struct Node { int data; struct Node *next; };

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Linked List example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Linked List example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Linked List example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Linked List example output\n");
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

- Losing the head pointer during insertion or deletion.
- Dereferencing NULL next pointers.
- Forgetting to free removed nodes.

## Best Practices

- Keep node operations separate in helper functions.
- Check pointers before dereferencing.
- Free memory for deleted nodes promptly.

## Interview Questions

### Beginner

- What is a linked list?
- How do you traverse a linked list?

### Intermediate

- How do you insert a node at the beginning?
- What is the difference between singly and doubly linked lists?

### Advanced

- How do you delete a node safely?
- What are the memory costs of a linked list?

## Exercises

Easy

- Implement a simple linked list node and print its elements.

Medium

- Insert nodes into a linked list and traverse it.

Hard

- Delete a node from a linked list and free its memory.

Interview

- Explain how a singly linked list stores data.

## Assignment

Create a small linked list implementation with insertion, traversal, and deletion.

## Mini Project

Build a linked list-based collection with basic operations like add, remove, and display.

## Summary Notes

- A linked list is a chain of nodes.
- Use pointers to link nodes.
- Manage memory for node creation and deletion.

## Next Topic

[Next Topic](18_DATA_STRUCTURES/107_Stack/README.md)
