import os
from pathlib import Path

root = Path(__file__).parent

folders = [
    '01_FUNDAMENTALS/01_Introduction_To_Programming',
    '01_FUNDAMENTALS/02_History_Of_C',
    '01_FUNDAMENTALS/03_Compiler_And_Interpreter',
    '01_FUNDAMENTALS/04_Program_Structure',
    '01_FUNDAMENTALS/05_First_C_Program',
    '01_FUNDAMENTALS/06_Compilation_Process',
    '01_FUNDAMENTALS/07_Errors_In_C',
    '02_BASICS/08_Tokens',
    '02_BASICS/09_Keywords',
    '02_BASICS/10_Identifiers',
    '02_BASICS/11_Variables',
    '02_BASICS/12_Constants',
    '02_BASICS/13_Data_Types',
    '02_BASICS/14_Type_Modifiers',
    '02_BASICS/15_Type_Casting',
    '03_INPUT_OUTPUT/16_printf',
    '03_INPUT_OUTPUT/17_scanf',
    '03_INPUT_OUTPUT/18_getchar',
    '03_INPUT_OUTPUT/19_putchar',
    '03_INPUT_OUTPUT/20_puts',
    '03_INPUT_OUTPUT/21_Format_Specifiers',
    '03_INPUT_OUTPUT/22_Escape_Sequences',
    '04_OPERATORS/23_Arithmetic',
    '04_OPERATORS/24_Relational',
    '04_OPERATORS/25_Logical',
    '04_OPERATORS/26_Assignment',
    '04_OPERATORS/27_Increment_Decrement',
    '04_OPERATORS/28_Bitwise',
    '04_OPERATORS/29_Conditional',
    '04_OPERATORS/30_Sizeof',
    '05_CONDITIONAL_STATEMENTS/31_if',
    '05_CONDITIONAL_STATEMENTS/32_if_else',
    '05_CONDITIONAL_STATEMENTS/33_else_if',
    '05_CONDITIONAL_STATEMENTS/34_Nested_if',
    '05_CONDITIONAL_STATEMENTS/35_switch',
    '06_LOOPS/36_while',
    '06_LOOPS/37_do_while',
    '06_LOOPS/38_for',
    '06_LOOPS/39_break',
    '06_LOOPS/40_continue',
    '06_LOOPS/41_goto',
    '07_PATTERN_PROGRAMMING/42_Star_Patterns',
    '07_PATTERN_PROGRAMMING/43_Number_Patterns',
    '07_PATTERN_PROGRAMMING/44_Character_Patterns',
    '07_PATTERN_PROGRAMMING/45_Advanced_Patterns',
    '08_FUNCTIONS/46_Function_Basics',
    '08_FUNCTIONS/47_Function_Arguments',
    '08_FUNCTIONS/48_Return_Values',
    '08_FUNCTIONS/49_Local_Global_Variables',
    '08_FUNCTIONS/50_Call_By_Value',
    '08_FUNCTIONS/51_Call_By_Reference',
    '08_FUNCTIONS/52_Recursion',
    '08_FUNCTIONS/53_Tail_Recursion',
    '09_ARRAYS/54_1D_Array',
    '09_ARRAYS/55_2D_Array',
    '09_ARRAYS/56_Multidimensional_Array',
    '09_ARRAYS/57_Searching',
    '09_ARRAYS/58_Sorting',
    '10_STRINGS/59_String_Basics',
    '10_STRINGS/60_strlen',
    '10_STRINGS/61_strcpy',
    '10_STRINGS/62_strcat',
    '10_STRINGS/63_strcmp',
    '10_STRINGS/64_String_Programs',
    '11_POINTERS/65_Pointer_Basics',
    '11_POINTERS/66_Pointer_Arithmetic',
    '11_POINTERS/67_Pointers_And_Arrays',
    '11_POINTERS/68_Pointers_And_Strings',
    '11_POINTERS/69_Double_Pointers',
    '11_POINTERS/70_Void_Pointers',
    '11_POINTERS/71_Function_Pointers',
    '12_STRUCTURES_UNIONS/72_Structures',
    '12_STRUCTURES_UNIONS/73_Nested_Structures',
    '12_STRUCTURES_UNIONS/74_Structure_Pointers',
    '12_STRUCTURES_UNIONS/75_Unions',
    '12_STRUCTURES_UNIONS/76_Enum',
    '13_DYNAMIC_MEMORY/77_malloc',
    '13_DYNAMIC_MEMORY/78_calloc',
    '13_DYNAMIC_MEMORY/79_realloc',
    '13_DYNAMIC_MEMORY/80_free',
    '13_DYNAMIC_MEMORY/81_Memory_Leaks',
    '14_FILE_HANDLING/82_File_Basics',
    '14_FILE_HANDLING/83_fopen',
    '14_FILE_HANDLING/84_fclose',
    '14_FILE_HANDLING/85_fprintf',
    '14_FILE_HANDLING/86_fscanf',
    '14_FILE_HANDLING/87_fread',
    '14_FILE_HANDLING/88_fwrite',
    '14_FILE_HANDLING/89_File_Projects',
    '15_PREPROCESSOR/90_include',
    '15_PREPROCESSOR/91_define',
    '15_PREPROCESSOR/92_Macros',
    '15_PREPROCESSOR/93_Header_Files',
    '15_PREPROCESSOR/94_Conditional_Compilation',
    '16_STORAGE_CLASSES/95_auto',
    '16_STORAGE_CLASSES/96_static',
    '16_STORAGE_CLASSES/97_register',
    '16_STORAGE_CLASSES/98_extern',
    '17_BIT_MANIPULATION/99_AND',
    '17_BIT_MANIPULATION/100_OR',
    '17_BIT_MANIPULATION/101_XOR',
    '17_BIT_MANIPULATION/102_NOT',
    '17_BIT_MANIPULATION/103_Left_Shift',
    '17_BIT_MANIPULATION/104_Right_Shift',
    '17_BIT_MANIPULATION/105_Bit_Problems',
    '18_DATA_STRUCTURES/106_Linked_List',
    '18_DATA_STRUCTURES/107_Stack',
    '18_DATA_STRUCTURES/108_Queue',
    '18_DATA_STRUCTURES/109_Trees',
    '18_DATA_STRUCTURES/110_Graphs',
    '18_DATA_STRUCTURES/111_Hashing',
    '19_ALGORITHMS/112_Linear_Search',
    '19_ALGORITHMS/113_Binary_Search',
    '19_ALGORITHMS/114_Bubble_Sort',
    '19_ALGORITHMS/115_Selection_Sort',
    '19_ALGORITHMS/116_Insertion_Sort',
    '19_ALGORITHMS/117_Merge_Sort',
    '19_ALGORITHMS/118_Quick_Sort',
    '19_ALGORITHMS/119_Heap_Sort',
    '20_ADVANCED_C/120_Command_Line_Arguments',
    '20_ADVANCED_C/121_Memory_Layout',
    '20_ADVANCED_C/122_Dangling_Pointers',
    '20_ADVANCED_C/123_Wild_Pointers',
    '20_ADVANCED_C/124_Debugging',
    '20_ADVANCED_C/125_Assertions',
    '21_SYSTEM_PROGRAMMING/126_Processes',
    '21_SYSTEM_PROGRAMMING/127_Threads',
    '21_SYSTEM_PROGRAMMING/128_IPC',
    '21_SYSTEM_PROGRAMMING/129_Semaphores',
    '21_SYSTEM_PROGRAMMING/130_Sockets',
    '21_SYSTEM_PROGRAMMING/131_Linux_System_Calls',
    '22_PROJECTS/132_Calculator',
    '22_PROJECTS/133_ATM_System',
    '22_PROJECTS/134_Library_Management',
    '22_PROJECTS/135_Banking_System',
    '22_PROJECTS/136_Text_Editor',
    '22_PROJECTS/137_Mini_Shell',
    '22_PROJECTS/138_HTTP_Server',
    '22_PROJECTS/139_Mini_Compiler',
]

level_tags = {
    '01_Introduction_To_Programming': 'fundamentals',
    '02_History_Of_C': 'history',
    '03_Compiler_And_Interpreter': 'toolchain',
}


def title_from_folder(folder_name):
    parts = folder_name.split('_', 1)
    if len(parts) == 2:
        return parts[1].replace('_', ' ')
    return folder_name.replace('_', ' ')


def topic_number(folder_name):
    parts = folder_name.split('_', 1)
    return parts[0] if len(parts) > 1 and parts[0].isdigit() else ''


def is_project_topic(path):
    return path.startswith('22_PROJECTS/')


def sanitize_file_name(name):
    return name.replace(' ', '_').replace('/', '_').replace('?', '').replace(':', '')


def example_code(topic, title):
    key = title.lower()
    if 'printf' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    printf("Hello, C world!\\n");\n    return 0;\n}\n```'
    if 'scanf' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    int x;\n    printf("Enter a number: ");\n    scanf("%d", &x);\n    printf("You entered: %d\\n", x);\n    return 0;\n}\n```'
    if 'getchar' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    int ch = getchar();\n    putchar(ch);\n    putchar(\'\\n\');\n    return 0;\n}\n```'
    if 'putchar' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    putchar('A');\n    putchar('\\n');\n    return 0;\n}\n```'
    if 'puts' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    puts("Hello from puts");\n    return 0;\n}\n```'
    if 'format' in key or 'escape' in key or 'sizeof' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    int value = 123;\n    printf("Value = %d\\n", value);\n    return 0;\n}\n```'
    if 'array' in key or 'search' in key or 'sort' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    int arr[] = {3, 1, 2};\n    printf("First element: %d\\n", arr[0]);\n    return 0;\n}\n```'
    if 'pointer' in key or 'structure' in key or 'union' in key or 'enum' in key or 'malloc' in key or 'file' in key or 'thread' in key or 'socket' in key:
        return '```c\n#include <stdio.h>\nint main(void) {\n    printf("Learn C by practicing this topic.\\n");\n    return 0;\n}\n```'
    return '```c\n#include <stdio.h>\nint main(void) {\n    printf("%s example output\\n");\n    return 0;\n}\n```'.replace('%s', title)


def complexity_text(level):
    return {
        'Basic': 'O(1) time and O(1) space, simple statement-based control flow.',
        'Intermediate': 'O(n) time for a linear scan, with O(1) auxiliary space.',
        'Advanced': 'O(n log n) or O(n) depending on the algorithm, with memory allocation where needed.',
        'Production': 'Optimized for real-world maintainability and safe resource handling.'
    }[level]


def generate_readme(title, number, path, next_path):
    topic_lower = title.lower()
    next_link = f'[Next Topic]({next_path}/README.md)' if next_path else 'End of course'
    return f"""# {number} – {title}

## Overview

This topic explains {title} and its role in C programming. It builds a complete foundation from theory to real application.

## Why This Topic Matters

{title} is essential for writing reliable C programs and for understanding how compilers, runtime, and memory interact.

## Learning Objectives

- Understand the purpose of {title}.
- Learn the syntax and common patterns.
- Apply {title} in working C programs.

## Theory

Beginner: {title} is a core concept that you will use in everyday C programs.

Intermediate: {title} connects to broader program structure, data flow, and efficiency.

Advanced: {title} enables professional design decisions, safe memory use, and modular architecture.

## Internal Working

Compiler level explanation.

Memory level explanation.

CPU level explanation.

## Syntax

Syntax breakdown. Review the patterns and required keywords for {title}.

## Examples

### Example 1 (Basic)

{example_code(title, title)}

Explanation: Basic usage of the topic.

Output: The program prints a simple message or demonstrates the core feature.

### Example 2 (Intermediate)

{example_code(title, title)}

Explanation: Introduces a practical use case and additional controls.

Output: Demonstrates intermediate application of the topic.

### Example 3 (Advanced)

{example_code(title, title)}

Explanation: Demonstrates a more advanced pattern.

Output: Runs a stronger example that is closer to real work.

### Example 4 (Production Style)

{example_code(title, title)}

Explanation: Shows professional structure, comments, and safe practices.

Output: Clean output for production-quality code.

## Memory Visualization

```
[ stack ] -> function arguments and local variables
[ heap ] -> allocated data for dynamic behavior
[ text ] -> compiled code and read-only constants
```

## Common Mistakes

- Using incorrect syntax.
- Forgetting error checks.
- Mixing unrelated concepts before mastering the basics.

## Best Practices

- Keep code readable.
- Prefer clear comments.
- Test small examples first.

## Interview Questions

### Beginner

- What is {title} in C?
- Why is {title} useful?

### Intermediate

- How does {title} affect program design?
- What are common errors when using {title}?

### Advanced

- How does {title} behave at runtime?
- How do you optimize code that uses {title}?

## Exercises

Easy

- Practice the basic form of {title}.

Medium

- Add input or a small loop to the example.

Hard

- Build a complete mini program that uses {title} safely.

## Assignment

Practical task: Build one working program that uses {title} and includes comments.

## Mini Project

Create a small feature that demonstrates {title} in a complete flow.

## Summary Notes

- {title} is a foundational topic.
- Review syntax and common mistakes.

## Next Topic

{next_link}
"""


def make_notes(topic_path, title, number):
    notes = {
        'quick_revision.md': f"# Quick Revision – {title}\n\n- Definition: {title}.\n- Key points: core concept, syntax, common usage.\n- Remember: practice with examples.\n",
        'interview_notes.md': f"# Interview Notes – {title}\n\n- Why it matters: real systems use {title}.\n- Common question: explain {title}.\n- Tip: show correct syntax and an example.\n",
        'cheatsheet.md': f"# Cheatsheet – {title}\n\n- Shortcut: use consistent code style.\n- Common patterns: simple example usage.\n",
        'advanced_notes.md': f"# Advanced Notes – {title}\n\n- Deep dive: how {title} behaves at runtime.\n- Performance: keep a clean allocation and control flow model.\n",
    }
    note_dir = root / topic_path / 'notes'
    note_dir.mkdir(parents=True, exist_ok=True)
    for filename, content in notes.items():
        with open(note_dir / filename, 'w', encoding='utf-8') as f:
            f.write(content)


def make_examples(topic_path, title):
    ex_dir = root / topic_path / 'examples'
    ex_dir.mkdir(parents=True, exist_ok=True)
    for idx, label in enumerate(['basic', 'intermediate', 'advanced', 'industry', 'production'], start=1):
        filename = f'example{idx:02d}_{label}.c'
        content = example_code(title, label)
        with open(ex_dir / filename, 'w', encoding='utf-8') as f:
            f.write(content)


def problem_text(title, difficulty):
    core = title.lower().replace('_', ' ')
    return f"""# Problem 01 – {difficulty}

Create a C program demonstrating {core}.\n\nRequirements:\n- Use the core feature clearly.\n- Keep the code readable and documented.\n\nSample Input:\n- There is no input for this example.\n\nSample Output:\n- One example output that proves the program works.\n"""


def make_exercises(topic_path, title):
    ex_root = root / topic_path / 'exercises'
    for level in ['easy', 'medium', 'hard', 'interview']:
        level_dir = ex_root / level
        level_dir.mkdir(parents=True, exist_ok=True)
        with open(level_dir / 'problem01.md', 'w', encoding='utf-8') as f:
            f.write(problem_text(title, level.capitalize()))


def make_solutions(topic_path, title):
    sol_root = root / topic_path / 'solutions'
    for level in ['easy', 'medium', 'hard', 'interview']:
        problem_dir = sol_root / level / 'problem01'
        problem_dir.mkdir(parents=True, exist_ok=True)
        code = example_code(title, level)
        with open(problem_dir / 'solution.c', 'w', encoding='utf-8') as f:
            f.write(code)
        with open(problem_dir / 'README.md', 'w', encoding='utf-8') as f:
            f.write(f"# Solution – {title} ({level.capitalize()})\n\nThis solution demonstrates {title} for the {level} problem.\n")


def make_assignments(topic_path, title, number):
    assign_dir = root / topic_path / 'assignments'
    assign_dir.mkdir(parents=True, exist_ok=True)
    for idx in range(1, 3):
        with open(assign_dir / f'assignment{idx:02d}.md', 'w', encoding='utf-8') as f:
            f.write(f"""# Assignment {idx:02d} – {title}

## Requirements

- Build a C program that uses {title}.\n
## Constraints

- Use C99/C11 compatible syntax.\n- Add comments for each major section.\n
## Sample Input

- Use fixed values or command-line input where relevant.\n
## Sample Output

- Print a meaningful result that shows the topic works.\n
## Evaluation Criteria

- Correctness, code style, comments, and edge-case handling.\n""")


def make_project_module(topic_path, title):
    project_root = root / topic_path
    project_root.mkdir(parents=True, exist_ok=True)
    for filename in ['requirements.md', 'design.md', 'architecture.md']:
        with open(project_root / filename, 'w', encoding='utf-8') as f:
            f.write(f"# {title} – {filename.replace('.md','').title()}\n\nA professional module describing {title}.\n")
    src = project_root / 'source'
    src.mkdir(parents=True, exist_ok=True)
    with open(src / 'main.c', 'w', encoding='utf-8') as f:
        f.write('''#include <stdio.h>\n\nint main(void) {\n    printf("%s project entry point.\\n");\n    return 0;\n}\n'''.replace('%s', title))
    docs = project_root / 'documentation'
    docs.mkdir(parents=True, exist_ok=True)
    with open(docs / 'overview.md', 'w', encoding='utf-8') as f:
        f.write(f"# Documentation – {title}\n\nOverview of the project design, features, and setup.\n")
    tests = project_root / 'test_cases'
    tests.mkdir(parents=True, exist_ok=True)
    with open(tests / 'test_plan.md', 'w', encoding='utf-8') as f:
        f.write(f"# Test Cases – {title}\n\nList the primary test scenarios for {title}.\n")


def make_topic_content(path, next_path=None):
    topic_dir = root / path
    if not topic_dir.exists():
        print(f'Creating missing folder: {topic_dir}')
        topic_dir.mkdir(parents=True, exist_ok=True)
    title = title_from_folder(topic_dir.name)
    number = topic_number(topic_dir.name)
    readme = generate_readme(title, number, path, next_path)
    with open(topic_dir / 'README.md', 'w', encoding='utf-8') as f:
        f.write(readme)
    make_notes(path, title, number)
    make_examples(path, title)
    make_exercises(path, title)
    make_solutions(path, title)
    make_assignments(path, title, number)
    if is_project_topic(path):
        make_project_module(path, title)


def update_root_readme():
    with open(root / 'README.md', 'w', encoding='utf-8') as f:
        f.write("""# C PROGRAMMING MASTERCLASS

A complete, structured repository for learning C from beginner to advanced level.

## Overview

This repository contains 139 topic lessons covering fundamentals, basic syntax, data structures, algorithms, advanced C, system programming, and capstone projects.

## Structure

- 01_FUNDAMENTALS/
- 02_BASICS/
- 03_INPUT_OUTPUT/
- 04_OPERATORS/
- 05_CONDITIONAL_STATEMENTS/
- 06_LOOPS/
- 07_PATTERN_PROGRAMMING/
- 08_FUNCTIONS/
- 09_ARRAYS/
- 10_STRINGS/
- 11_POINTERS/
- 12_STRUCTURES_UNIONS/
- 13_DYNAMIC_MEMORY/
- 14_FILE_HANDLING/
- 15_PREPROCESSOR/
- 16_STORAGE_CLASSES/
- 17_BIT_MANIPULATION/
- 18_DATA_STRUCTURES/
- 19_ALGORITHMS/
- 20_ADVANCED_C/
- 21_SYSTEM_PROGRAMMING/
- 22_PROJECTS/

## How to use this repository

1. Start at `01_FUNDAMENTALS/01_Introduction_To_Programming/README.md`.
2. Complete the theory, examples, notes, and exercises in each topic.
3. Use assignments and projects to deepen your understanding.
4. Follow the learning path through the next-topic links.

## Notes

- Each topic includes a complete README, notes, examples, exercises, solutions, and assignments.
- Project topics include requirements, design, architecture, source code, documentation, and test cases.
""")


def main():
    for index, path in enumerate(folders):
        next_path = folders[index + 1] if index + 1 < len(folders) else None
        make_topic_content(path, next_path)
    update_root_readme()
    print('Course generation complete.')


if __name__ == '__main__':
    main()
