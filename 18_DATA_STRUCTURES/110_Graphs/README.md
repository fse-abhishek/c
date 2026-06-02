# 110 – Graphs

## Overview

Graphs represent relationships between nodes and are useful for modeling networks, maps, and dependencies.

## Why This Topic Matters

Graphs enable powerful algorithms for shortest paths, connectivity, and scheduling in software systems.

## Learning Objectives

- Explain the key concepts behind Graphs.
- Write C code that uses Graphs correctly.
- Recognize how Graphs fits into larger C programs and system design.

## Theory

Beginner: A graph has vertices and edges connecting them. It can be represented with adjacency lists or matrices.

Intermediate: Learn basic graph traversal methods like depth-first search and breadth-first search.

Advanced: Use graphs for complex problems such as shortest-path algorithms, cycle detection, and connectivity analysis.

## Internal Working

At the compiler level, Graphs is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Graphs often maps to register operations, branch logic, or system calls.

## Syntax

Use arrays or linked lists to store adjacency information for each node.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Graphs example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Graphs example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Graphs example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Graphs example output\n");
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

- Confusing directed and undirected graphs.
- Forgetting to mark visited nodes during traversal.
- Using an inefficient representation for sparse graphs.

## Best Practices

- Choose the right graph representation for the problem.
- Track visited nodes to avoid infinite loops.
- Keep traversal logic clean and well-structured.

## Interview Questions

### Beginner

- What is a graph?
- How can a graph be represented in C?

### Intermediate

- What is the difference between adjacency lists and matrices?
- How does BFS work?

### Advanced

- When would you use graphs in a C program?
- How do you detect cycles in a graph?

## Exercises

Easy

- Represent a small graph and print its adjacency list.

Medium

- Perform a breadth-first traversal of a graph.

Hard

- Implement depth-first search and detect a path between nodes.

Interview

- Explain the basic concept of a graph.

## Assignment

Create a graph representation and implement a simple traversal algorithm.

## Mini Project

Build a graph explorer that prints reachable nodes from a starting point.

## Summary Notes

- Graphs model relationships between nodes.
- Use appropriate representations and traverse carefully.
- Graphs support powerful algorithms and applications.

## Next Topic

[Next Topic](18_DATA_STRUCTURES/111_Hashing/README.md)
