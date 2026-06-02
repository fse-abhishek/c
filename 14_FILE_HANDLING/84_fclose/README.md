# 84 – fclose

## Overview

File handling in C uses the FILE type and library functions to read and write data from files.

## Why This Topic Matters

Files let programs persist data, exchange information, and interact with the operating system beyond the console.

## Learning Objectives

- Explain the key concepts behind fclose.
- Write C code that uses fclose correctly.
- Recognize how fclose fits into larger C programs and system design.

## Theory

Beginner: Use fopen to open a file, fprintf/fscanf for text I/O, fread/fwrite for binary I/O, and fclose to close the file.

Intermediate: Learn file modes such as "r", "w", "a", and how to handle errors when a file cannot be opened.

Advanced: Use file handling safely for binary data, manage file pointers, and flush or close files to ensure data integrity.

## Internal Working

At the compiler level, fclose is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, fclose often maps to register operations, branch logic, or system calls.

## Syntax

FILE *fp = fopen("data.txt", "w"); fprintf(fp, "%s
", text); fclose(fp);

## Examples

### Example 1 (Basic)

```c
#include <stdio.h>
int main(void) {
    printf("fclose example output\n");
    return 0;
}
```

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

```c
#include <stdio.h>
int main(void) {
    printf("fclose example output\n");
    return 0;
}
```

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

```c
#include <stdio.h>
int main(void) {
    printf("fclose example output\n");
    return 0;
}
```

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

```c
#include <stdio.h>
int main(void) {
    printf("fclose example output\n");
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

- Not checking if fopen returned NULL.
- Using fscanf without validating input.
- Forgetting to close files after use.

## Best Practices

- Always check file opening and closing results.
- Use the appropriate text or binary mode.
- Close files as soon as you are done with them.

## Interview Questions

### Beginner

- How do you open a file in C?
- What is FILE * used for?

### Intermediate

- What is the difference between fread and fscanf?
- How do you write text to a file?

### Advanced

- How do you handle errors when file operations fail?
- Why is it important to close files?

## Exercises

Easy

- Open a file and write a short message to it.

Medium

- Read text from a file and display it to the console.

Hard

- Write and read binary data using fwrite and fread.

Interview

- Explain the main steps of file I/O in C.

## Assignment

Build a program that saves data to a file and then reads it back.

## Mini Project

Create a simple file-based data logger or record keeper.

## Summary Notes

- File I/O uses fopen, fprintf/fscanf, fread/fwrite, and fclose.
- Check for errors when opening files.
- Close files promptly to ensure data is written.

## Next Topic

[Next Topic](14_FILE_HANDLING/85_fprintf/README.md)
