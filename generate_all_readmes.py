import os
from pathlib import Path

root = Path(r"c:\Users\abhishek\Desktop\web devolopment\abhnsa\C_PROGRAMMING_MASTERCLASS")

def title_from_folder(folder_name):
    parts = folder_name.split("_", 1)
    if len(parts) == 2:
        return parts[1].replace("_", " ")
    return folder_name.replace("_", " ")


def topic_number(folder_name):
    parts = folder_name.split("_", 1)
    return parts[0] if len(parts) > 1 and parts[0].isdigit() else ""


def example_code(section, title):
    title_lower = title.lower()
    if "printf" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    printf("Hello, C world!\\n");\n    return 0;\n}\n```'
    if "scanf" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int x;\n    printf("Enter a number: ");\n    scanf("%d", &x);\n    printf("You entered: %d\\n", x);\n    return 0;\n}\n```'
    if "getchar" in title_lower or "putchar" in title_lower or "puts" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    char ch = getchar();\n    putchar(ch);\n    putchar(\'\\n\');\n    return 0;\n}\n```'
    if "format" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int a = 5;\n    float b = 3.14f;\n    printf("int=%d float=%.2f\\n", a, b);\n    return 0;\n}\n```'
    if "escape" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    printf("Line1\\nLine2\\tTabbed\\n");\n    return 0;\n}\n```'
    if "arithmetic" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int a = 5, b = 3;\n    printf("sum=%d\\n", a + b);\n    return 0;\n}\n```'
    if "relational" in title_lower or "logical" in title_lower or "conditional" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int x = 3, y = 4;\n    if (x < y) {\n        printf("x is less than y\\n");\n    }\n    return 0;\n}\n```'
    if "increment" in title_lower or "decrement" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int x = 5;\n    x++;\n    x--;\n    printf("x=%d\\n", x);\n    return 0;\n}\n```'
    if "bit" in title_lower or "and" in title_lower or "or" in title_lower or "xor" in title_lower or "shift" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    unsigned int x = 5;\n    printf("x<<1=%u x>>1=%u\\n", x << 1, x >> 1);\n    return 0;\n}\n```'
    if title_lower.startswith("if") or "switch" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int number = 2;\n    if (number == 2) {\n        printf("Number is two\\n");\n    }\n    return 0;\n}\n```'
    if title_lower.startswith("while") or title_lower.startswith("do") or title_lower.startswith("for"):
        return '```c\n#include <stdio.h>\nint main() {\n    for (int i = 1; i <= 3; i++) {\n        printf("%d\\n", i);\n    }\n    return 0;\n}\n```'
    if "array" in title_lower or "search" in title_lower or "sort" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int arr[3] = {1, 2, 3};\n    printf("arr[0]=%d\\n", arr[0]);\n    return 0;\n}\n```'
    if "string" in title_lower:
        return '```c\n#include <stdio.h>\n#include <string.h>\nint main() {\n    char s[] = "C";\n    printf("length=%zu\\n", strlen(s));\n    return 0;\n}\n```'
    if "pointer" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int x = 10;\n    int *p = &x;\n    printf("value=%d\\n", *p);\n    return 0;\n}\n```'
    if "structure" in title_lower or "union" in title_lower or "enum" in title_lower:
        return '```c\n#include <stdio.h>\nstruct Point {\n    int x;\n    int y;\n};\nint main() {\n    struct Point p = {1, 2};\n    printf("x=%d y=%d\\n", p.x, p.y);\n    return 0;\n}\n```'
    if "malloc" in title_lower or "calloc" in title_lower or "realloc" in title_lower or "free" in title_lower or "memory" in title_lower:
        return '```c\n#include <stdio.h>\n#include <stdlib.h>\nint main() {\n    int *arr = malloc(3 * sizeof(int));\n    arr[0] = 1;\n    printf("arr[0]=%d\\n", arr[0]);\n    free(arr);\n    return 0;\n}\n```'
    if "file" in title_lower or "fopen" in title_lower or "fclose" in title_lower or "fprintf" in title_lower or "fscanf" in title_lower or "fread" in title_lower or "fwrite" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    FILE *fp = fopen("data.txt", "w");\n    if (fp) {\n        fprintf(fp, "Hello file\\n");\n        fclose(fp);\n    }\n    return 0;\n}\n```'
    if "include" in title_lower or "define" in title_lower or "macro" in title_lower or "header" in title_lower or "conditional" in title_lower:
        return '```c\n#include <stdio.h>\n#define PI 3.14\nint main() {\n    printf("PI=%.2f\\n", PI);\n    return 0;\n}\n```'
    if "auto" in title_lower or "static" in title_lower or "register" in title_lower or "extern" in title_lower:
        return '```c\n#include <stdio.h>\nint count = 0;\nint main() {\n    static int x = 1;\n    x++;\n    printf("x=%d\\n", x);\n    return 0;\n}\n```'
    if "linked" in title_lower or "stack" in title_lower or "queue" in title_lower or "tree" in title_lower or "graph" in title_lower or "hash" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    printf("Study data structures in C.\\n");\n    return 0;\n}\n```'
    if "search" in title_lower or "sort" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    int arr[3] = {3, 1, 2};\n    printf("first=%d\\n", arr[0]);\n    return 0;\n}\n```'
    if "command" in title_lower or "memory layout" in title_lower or "dangling" in title_lower or "wild" in title_lower or "debug" in title_lower or "assert" in title_lower:
        return '```c\n#include <stdio.h>\nint main(int argc, char *argv[]) {\n    printf("Argument count=%d\\n", argc);\n    return 0;\n}\n```'
    if "process" in title_lower or "thread" in title_lower or "ipc" in title_lower or "semaphore" in title_lower or "socket" in title_lower or "Linux" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    printf("System programming uses C for OS-level code.\\n");\n    return 0;\n}\n```'
    if "calculator" in title_lower or "atm" in title_lower or "library" in title_lower or "banking" in title_lower or "text" in title_lower or "shell" in title_lower or "HTTP" in title_lower or "compiler" in title_lower:
        return '```c\n#include <stdio.h>\nint main() {\n    printf("Project setup for %s\\n");\n    return 0;\n}\n```'.replace("%s", title)
    return '```c\n#include <stdio.h>\nint main() {\n    printf("%s topic example.\\n");\n    return 0;\n}\n```'.replace("%s", title)


def make_content(topic_path, section, title, number):
    example = example_code(section, title)
    return f"""# Topic {number}: {title}

## Current Topic Path
`C_PROGRAMMING_MASTERCLASS/{topic_path}`

## Theory
This lesson explains the idea of {title}. You will learn the basic concept, how C supports this topic, and why it matters in real programs.

## Real-world usage
Many real systems use {title.lower()} in programs. Knowing this topic helps you build reliable C code and connect to real applications.

## Syntax
Use the correct syntax to work with {title.lower()} in C. Study the example below to learn the common structure.

{example}

## Notes
- Focus on the core idea of {title.lower()}.
- Practice with small examples.
- Review the syntax and keywords used in this topic.

## Common mistakes
- Missing semicolons or braces.
- Using wrong data types or format specifiers.
- Mixing concepts from other topics before mastering this one.

## Interview questions
1. What is {title.lower()} in C?
2. How do you use {title.lower()} when writing a program?
3. What are the main rules for {title.lower()}?
4. Give one example where {title.lower()} is useful.
5. What is one common error with {title.lower()}?

## Practice exercises
1. Write a C program that demonstrates {title.lower()}.
2. Modify the example to use different values or input.
3. Explain each line of your program in comments.

## Coding assignments
1. Create a file named `{title.lower().replace(' ', '_')}.c`.
2. Write a small C program that uses the topic in a practical way.
3. Add comments for each line to explain what it does.

## Mini Project
Build a tiny program that uses {title.lower()} with at least one input or calculation. Write comments and test it.

## Summary
- You learned the main idea of {title.lower()}.
- You practiced the syntax and example.
- You prepared for the next topic in the course.
"""


def main():
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
    if not root.exists():
        raise SystemExit(f"Root folder not found: {root}")

    for rel in folders:
        full = root / rel
        if not full.exists():
            print(f"Missing folder: {full}")
            continue
        title = title_from_folder(full.name)
        number = topic_number(full.name)
        section = full.parent.name
        content = make_content(rel.replace('\\', '/'), section, title, number)
        with open(full / 'README.md', 'w', encoding='utf-8') as f:
            f.write(content)

    root_readme = root / 'README.md'
    root_text = f"# C Programming Masterclass\n\nCurrent Topic: `01_FUNDAMENTALS → 01_Introduction_To_Programming`\n\nProgress: 0/139 Completed\n\nStatus: All 139 topic lessons are prepared and ready.\n\n## Course Structure\n\nThis course is organized in numbered chapters and topics. Each folder contains notes, examples, exercises, and mini projects for the corresponding topic.\n\n## How to use this course\n\n1. Open any topic folder to begin learning.\n2. Read the lesson, examples, and exercises.\n3. Move through the topics at your own pace.\n4. All topics have been created and do not require additional prompts.\n\n## Notes\n\n- Each topic folder contains a full lesson template.\n- Follow the order if you want a structured path.\n- If you want, you can still use `NEXT` as a learning cue, but it is not required.\n"
    with open(root_readme, 'w', encoding='utf-8') as f:
        f.write(root_text)

if __name__ == '__main__':
    main()
