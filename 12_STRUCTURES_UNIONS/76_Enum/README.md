# 76 – Enum

## Overview

Enums define named integer constants that improve code readability and maintainability.

## Why This Topic Matters

Enums make code more self-documenting than raw numeric literals and are useful for representing states or categories.

## Learning Objectives

- Explain the key concepts behind Enum.
- Write C code that uses Enum correctly.
- Recognize how Enum fits into larger C programs and system design.

## Theory

Beginner: An enum defines a set of named values, for example enum Color { Red, Green, Blue };

Intermediate: Learn that enum values are integers and can be assigned explicit values when needed.

Advanced: Use enums for state machines, option flags, and clear code, while understanding how they map to integer types.

## Internal Working

At the compiler level, Enum is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Enum often maps to register operations, branch logic, or system calls.

## Syntax

enum Day { Monday, Tuesday, Wednesday };

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

- Using enum values without clear names.
- Assuming enum values are strings.
- Mixing different enums without explicit casting.

## Best Practices

- Give enum constants meaningful names.
- Use enums to replace magic numbers.
- Document the purpose of each enum value.

## Interview Questions

### Beginner

- What is an enum in C?
- How do you define an enum?

### Intermediate

- What is the underlying type of enum values?
- How do you assign explicit numeric values to enum members?

### Advanced

- How do enums improve code clarity?
- When should you use enums instead of #define constants?

## Exercises

Easy

- Define an enum for states and use it in a switch statement.

Medium

- Assign explicit values to enum members and print them.

Hard

- Use an enum to represent a menu selection or program state.

Interview

- Explain why enums are preferred over raw integers for named values.

## Assignment

Create a program that uses enums to represent options or states and prints the selected value.

## Mini Project

Build a menu or state machine using enums for readability.

## Summary Notes

- Enums define named integer values.
- They improve readability over raw numbers.
- Use them for states, categories, and options.

## Next Topic

[Next Topic](13_DYNAMIC_MEMORY/77_malloc/README.md)
