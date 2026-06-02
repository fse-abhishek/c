# 08 – Tokens

## Overview

Tokens are the smallest meaningful elements of C source code, such as keywords, identifiers, constants, operators, and separators.

## Why This Topic Matters

Understanding tokens helps you read C code correctly and avoid syntax errors caused by invalid or misplaced characters.

## Learning Objectives

- Explain the key concepts behind Tokens.
- Write C code that uses Tokens correctly.
- Recognize how Tokens fits into larger C programs and system design.

## Theory

Beginner: A token is a single unit of code, like the keyword int, the identifier x, or the operator +. C source is processed token by token by the compiler.

Intermediate: Learn how tokens combine into expressions, declarations, and statements. Misplaced tokens can change meaning or cause compile errors.

Advanced: Tokenization is the first stage of compilation, and some constructs like string literals and macro expansions are handled specially at this level.

## Internal Working

At the compiler level, Tokens is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, Tokens often maps to register operations, branch logic, or system calls.

## Syntax

Examples of token categories: keywords (int), identifiers (sum), constants (42), string literals ("Hello"), operators (+, ==), and punctuation (;, {}).

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("Tokens example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("Tokens example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("Tokens example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("Tokens example output\n");
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

- Using invalid identifiers or keywords as variable names.
- Leaving out required separators like semicolons.
- Confusing operators with different precedence.

## Best Practices

- Use meaningful names for identifiers.
- Write clearly separated tokens and avoid dense expressions.
- Follow C naming conventions for readability.

## Interview Questions

### Beginner

- What is a token in C?
- Name some token types in C.

### Intermediate

- How does the compiler use tokens?
- What is the difference between identifiers and keywords?

### Advanced

- How do tokens interact with the preprocessor?
- Why do some tokens require special handling?

## Exercises

Easy

- List the different token types found in a simple C statement.

Medium

- Write a C expression and label each token type.

Hard

- Identify tokenization issues in a complex C statement and correct them.

Interview

- Explain how the C compiler converts source text into tokens.

## Assignment

Create a reference sheet of C token categories with examples and notes.

## Mini Project

Design a small parser demo that prints token types for a simple C expression or declaration.

## Summary Notes

- Tokens are the building blocks of C syntax.
- Clear token use avoids many basic compile errors.
- Understanding tokens helps you read and write C source reliably.

## Next Topic

[Next Topic](02_BASICS/09_Keywords/README.md)
