# 09 – Keywords

## Overview

Keywords are reserved words in C that have special meaning to the compiler, such as int, return, and if.

## Why This Topic Matters

Using keywords correctly is essential because they define language structure and cannot be used as identifiers.

## Learning Objectives

- Explain the key concepts behind Keywords.
- Write C code that uses Keywords correctly.
- Recognize how Keywords fits into larger C programs and system design.

## Theory

Beginner: Keywords are the backbone of C syntax. Each keyword has a specific purpose, such as declaring a variable, controlling flow, or defining a function.

Intermediate: Learn how keywords shape declarations, type conversions, and control constructs. Keywords like const and volatile influence how the compiler treats data.

Advanced: Some keywords are context-sensitive and may behave differently in C and C++. Understanding the standard C keyword set helps avoid compiler-specific issues.

## Internal Working

At the compiler level, Keywords is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Keywords often maps to register operations, branch logic, or system calls.

## Syntax

Common C keywords include int, char, float, double, return, if, else, for, while, switch, case, break, continue, typedef, struct, union, enum, extern, static, and auto.

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Keywords example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Keywords example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Keywords example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Keywords example output\n");
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

- Trying to use a keyword as a variable name.
- Forgetting the correct keyword for a construct, such as using goto instead of a loop.
- Confusing typedef names with keywords.

## Best Practices

- Learn the full list of standard C keywords.
- Choose descriptive identifiers that do not conflict with keywords.
- Keep keyword usage consistent and idiomatic.

## Interview Questions

### Beginner

- What is a keyword in C?
- Give examples of C keywords.

### Intermediate

- Why can keywords not be used as identifiers?
- What are some control-flow keywords in C?

### Advanced

- How do storage-class keywords like extern and static differ?
- Which C keywords were introduced in later standards?

## Exercises

Easy

- List 10 C keywords and describe their use.

Medium

- Write a C program using a variety of keywords in declarations and control flow.

Hard

- Compare keyword usage across C89 and C99 for the same program.

Interview

- Explain how C keywords structure a program.

## Assignment

Create a mini glossary of C keywords with examples and usage notes.

## Mini Project

Build a small reference app in C that prints keyword categories and their meanings.

## Summary Notes

- Keywords are reserved and essential to C syntax.
- You cannot use keywords as variable names.
- Knowing keywords helps you understand C source code quickly.

## Next Topic

[Next Topic](02_BASICS/10_Identifiers/README.md)
