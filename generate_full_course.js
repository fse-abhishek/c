const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname);

const folders = [
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
];

function titleFromFolder(folderName) {
    const parts = folderName.split('_');
    if (parts.length > 1) return parts.slice(1).join(' ').replace(/_/g, ' ');
    return folderName.replace(/_/g, ' ');
}

function topicNumber(folderName) {
    const parts = folderName.split('_', 2);
    return parts.length === 2 && /^\d+$/.test(parts[0]) ? parts[0] : '';
}

function isProjectTopic(p) {
    return p.startsWith('22_PROJECTS/');
}

function ensureDir(dirPath) {
    if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function exampleCode(title) {
    const key = title.toLowerCase();
    if (key.includes('printf')) {
        return '#include <stdio.h>\nint main(void) {\n    printf("Hello, C world!\\n");\n    return 0;\n}';
    }
    if (key.includes('scanf')) {
        return '#include <stdio.h>\nint main(void) {\n    int x;\n    printf("Enter a number: ");\n    scanf("%d", &x);\n    printf("You entered: %d\\n", x);\n    return 0;\n}';
    }
    if (key.includes('getchar')) {
        return '#include <stdio.h>\nint main(void) {\n    int ch = getchar();\n    putchar(ch);\n    putchar(\'\\n\');\n    return 0;\n}';
    }
    if (key.includes('putchar')) {
        return '#include <stdio.h>\nint main(void) {\n    putchar(\'A\');\n    putchar(\'\\n\');\n    return 0;\n}';
    }
    if (key.includes('puts')) {
        return '#include <stdio.h>\nint main(void) {\n    puts("Hello from puts");\n    return 0;\n}';
    }
    if (key.includes('array') || key.includes('search') || key.includes('sort')) {
        return '#include <stdio.h>\nint main(void) {\n    int arr[] = {3, 1, 2};\n    printf("First element: %d\\n", arr[0]);\n    return 0;\n}';
    }
    if (key.includes('pointer') || key.includes('structure') || key.includes('union') || key.includes('enum') || key.includes('malloc') || key.includes('file') || key.includes('thread') || key.includes('socket')) {
        return '#include <stdio.h>\nint main(void) {\n    printf("Learn C by practicing this topic.\\n");\n    return 0;\n}';
    }
    return `#include <stdio.h>\nint main(void) {\n    printf("${title} example output\\n");\n    return 0;\n}`;
}

function normalizeTitle(title) {
    return title.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
}

function topicKey(title) {
    return normalizeTitle(title).toLowerCase();
}

function categoryFromSection(section) {
    if (!section) return '';
    return section.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
}

function getTopicData(title, section) {
    const normalized = normalizeTitle(title);
    const key = topicKey(title);
    const category = categoryFromSection(section);
    const data = {
        overview: `This lesson explains ${normalized} and its practical role in C programming. It combines the core concept, real code examples, and professional best practices for ${normalized}.`,
        why: `Understanding ${normalized} is important for writing stable, efficient C programs and for mastering the broader ${category} area of the language.`,
        objectives: [
            `Explain the key concepts behind ${normalized}.`,
            `Write C code that uses ${normalized} correctly.`,
            `Recognize how ${normalized} fits into larger C programs and system design.`,
        ],
        theory: {
            beginner: `Beginner: ${normalized} introduces a foundational aspect of C that appears in most programs. This section explains the main idea in simple terms and how beginners can start using it immediately.`,
            intermediate: `Intermediate: ${normalized} is explored through common patterns, examples, and how it interacts with memory, control flow, or program structure. You will learn not only how it works, but why it matters in practical programs.`,
            advanced: `Advanced: ${normalized} is used in larger systems and projects. This section shows how to apply it safely, optimize performance, and avoid pitfalls when scale or portability matters.`,
        },
        internalWorking: `At the compiler level, ${normalized} is translated into machine instructions by parsing, semantic analysis and code generation. At the memory level, it affects the layout of data, use of the stack, heap, and static storage. At the CPU level, ${normalized} often maps to register operations, branch logic, or system calls.`,
        syntax: `The syntax for ${normalized} depends on the exact topic, but this section highlights the most important patterns in C source code so you can read and write correct programs.`,
        memoryVisualization: `
[ stack ] -> local variables, function call frames, return addresses
[ heap ] -> dynamic data used by runtime allocations
[ text ] -> compiled executable code and constant data
`,
        commonMistakes: [
            `Assuming ${normalized} works the same across all compilers and standard versions.`,
            `Skipping important error checks or undefined behavior when using ${normalized}.`,
            `Writing overly complex code instead of simple, maintainable examples.`,
        ],
        bestPractices: [
            `Keep ${normalized} implementations simple and readable.`,
            `Follow C standard conventions and avoid compiler-specific extensions unless necessary.`,
            `Test your code with representative inputs and edge cases before moving on.`,
        ],
        interview: {
            beginner: [`What is ${normalized} in C?`, `Why is ${normalized} important for a C programmer?`],
            intermediate: [`How do you use ${normalized} in a real C program?`, `What mistakes should you avoid when using ${normalized}?`],
            advanced: [`How does ${normalized} interact with memory and performance?`, `How would you explain ${normalized} when designing a reusable library?`],
        },
        exercises: {
            easy: `Write a short C program that demonstrates ${normalized} with clear comments.`,
            medium: `Extend the example to handle multiple cases or inputs while using ${normalized}.`,
            hard: `Implement a complete small utility that relies on ${normalized} and handles errors or edge conditions gracefully.`,
            interview: `Explain ${normalized} in your own words and demonstrate it with a sample code snippet.`,
        },
        assignment: `Create a working C program that demonstrates ${normalized} with at least one practical input or calculation. Include comments explaining each step and any edge-case handling.`,
        miniProject: `Build a small module or tool that uses ${normalized} as a key feature and can be tested with real sample data.`,
        summary: [`${normalized} is a key skill for C programmers.`, `Master the syntax, common pitfalls, and best practices for ${normalized}.`, `Use examples and exercises to deepen your knowledge.`],
        noteQuick: `# Quick Revision – ${normalized}

- Topic: ${normalized}
- Focus: core concept, syntax, and common usage.
- Review the examples, exercises, and common pitfalls.
`,
        noteInterview: `# Interview Notes – ${normalized}

- Remember the definition and real-world purpose of ${normalized}.
- Practice explaining this topic clearly and concisely.
- Highlight how it is used in larger C programs and systems.
`,
        noteCheatsheet: `# Cheatsheet – ${normalized}

- Use consistent code patterns.
- Validate input and avoid undefined behavior.
- Keep examples simple and easy to read.
`,
        noteAdvanced: `# Advanced Notes – ${normalized}

- Apply ${normalized} in more complex programs.
- Understand how it affects memory, performance, and portability.
- Refactor sample code into reusable functions or modules when possible.
`,
    };

    if (section === '01_FUNDAMENTALS') {
        if (key.includes('history')) {
            data.overview = `Explore the history of the C language, from its origins at Bell Labs through ANSI standardization and modern ISO updates.`;
            data.why = `Learning the history of C explains why the language works the way it does, and why portability, simplicity, and system-level control became central design goals.`;
            data.theory.beginner = `Beginner: The C language was created by Dennis Ritchie in the early 1970s as a systems programming language for Unix. It introduced a small set of keywords, efficient compiled code, and direct memory control.`;
            data.theory.intermediate = `Intermediate: ANSI C standardized the language in 1989, followed by C99, C11, C17, and C23. Each revision added features while preserving compatibility. Understanding this evolution helps you write portable and maintainable code.`;
            data.theory.advanced = `Advanced: Modern C programmers should know how language history affects compiler behavior, library interfaces, and cross-platform development. This knowledge helps when updating legacy code or choosing the right standard for a project.`;
            data.syntax = `History is a conceptual topic, so there is no single syntax. Instead, focus on comparing code styles from K&R C, ANSI C, and later standard editions to understand compatibility.`;
            data.commonMistakes = [`Confusing K&R-style function definitions with ANSI standard prototypes.`, `Assuming old C extensions are portable across compilers.`, `Using deprecated header files or language constructs without understanding their history.`];
            data.bestPractices = [`Target a modern C standard such as C11 or C17 for new projects.`, `Write code that is clear and portable rather than relying on compiler-specific behavior.`, `Document the standard version and language assumptions in your codebase.`];
            data.interview = {
                beginner: [`What are the origins of the C programming language?`, `Who created C and why?`],
                intermediate: [`What is ANSI C and why was it important?`, `How do C89, C99, and C11 differ?`],
                advanced: [`What motivations led to the creation of C?`, `How do historical C features influence modern systems programming?`],
            };
            data.exercises = {
                easy: `Write a short README-style summary of the major C standards and when they were published.`,
                medium: `Compare two C code examples from different standard eras and explain the differences.`,
                hard: `Create a compatibility checklist for porting legacy C code from older compilers to modern environments.`,
                interview: `Prepare an explanation of C history that connects language design to real-world software development.`,
            };
            data.assignment = `Research the key milestones in C language history and create a documented timeline or small C program that prints the major versions and their features.`;
            data.miniProject = `Build a simple CLI tool in C that displays C standard versions, compiler support, and compatibility notes.`;
            data.summary = [`The history of C explains why its syntax and standardization exist.`, `C evolved through ANSI and ISO standards to remain both powerful and portable.`, `Modern C programmers benefit from knowing this evolution when maintaining or writing system software.`];
        } else if (key.includes('compiler') || key.includes('interpreter')) {
            data.overview = `Understand how compilers and interpreters turn C source code into executable programs, and why compilation matters in the C toolchain.`;
            data.why = `Most C programs rely on a compiler to generate optimized machine code, so mastering this topic helps you write code that compiles efficiently and correctly.`;
            data.theory.beginner = `Beginner: A compiler reads C source files, checks syntax, and translates them into object code or binaries. An interpreter executes code directly, but C is usually compiled. This section clarifies the difference.`;
            data.theory.intermediate = `Intermediate: Learn the stages of compilation: preprocessing, parsing, semantic analysis, optimization, and code generation. Each stage has practical implications for macros, types, and performance.`;
            data.theory.advanced = `Advanced: Dive into compiler flags, optimization levels, and how the toolchain handles linking, libraries, and target architectures. Understanding this allows you to tune builds and debug compile-time issues.`;
            data.syntax = `There is no unique C syntax for compilers, but you should know how to use compilation commands, include directives, and compiler options to control behavior.`;
            data.commonMistakes = [`Using incorrect compiler flags for the desired standard.`, `Confusing compile-time errors with runtime behavior.`, `Ignoring warnings that indicate portability or type-safety issues.`];
            data.bestPractices = [`Compile with warnings enabled and fix them early.`, `Use standard flags like -std=c17 or -std=c23, and test across compilers when possible.`, `Keep build instructions and dependencies documented.`];
            data.interview = {
                beginner: [`What is the difference between a compiler and an interpreter?`, `Why is C typically compiled instead of interpreted?`],
                intermediate: [`What are the main stages of a C compiler?`, `How does linking work in C?`],
                advanced: [`How do compiler optimizations affect C program behavior?`, `What is the role of the preprocessor in the compilation pipeline?`],
            };
            data.exercises = {
                easy: `Compile a small C program using a standard compiler command and observe the output binary.`,
                medium: `Experiment with compiler flags like -Wall and -std=c17 to see how warnings and standards change behavior.`,
                hard: `Write a build script or Makefile that compiles a small C project with separate source files and headers.`,
                interview: `Explain the compilation stages and how they affect the final executable.`,
            };
            data.assignment = `Create a small multi-file C program and write build instructions that use the correct compiler commands, flags, and include paths.`;
            data.miniProject = `Develop a simple C project with a README and compile script that demonstrates clean build practices and portable source code.`;
            data.summary = [`Compilers translate C into executable code.`, `Understanding the toolchain helps you write buildable, portable programs.`, `Compiler options and warnings are essential for reliable C development.`];
        } else if (key.includes('program structure')) {
            data.overview = `Learn the standard structure of a C program, including headers, functions, and the main entry point.`;
            data.why = `A well-structured program is easier to read, maintain, and extend. Program structure is the foundation of every C application.`;
            data.theory.beginner = `Beginner: Every C program begins with header includes and a main function. Learn how code is organized into declarations, definitions, and statements.`;
            data.theory.intermediate = `Intermediate: Understand how functions are declared and defined, how source files are split into modules, and how the compiler organizes translation units.`;
            data.theory.advanced = `Advanced: Explore modular program design, header guards, and how structure affects compilation speed, reusability, and binary layout.`;
            data.syntax = `A simple C program includes #include directives, function prototypes, and a main function. For example: #include <stdio.h> // Header + int main(void) { ... }.`;
            data.commonMistakes = [`Forgetting to include required headers.`, `Defining functions after use without prototypes.`, `Using global variables without clear structure.`];
            data.bestPractices = [`Keep functions small and focused.`, `Use header files to declare interfaces and source files to implement logic.`, `Structure code logically with comments and consistent formatting.`];
            data.interview = {
                beginner: [`What is the main function in C?`, `Why do we include headers in a C program?`],
                intermediate: [`How do you organize code across multiple source files?`, `What is a translation unit?`],
                advanced: [`How does program structure influence compilation and linking?`, `What are good modularization practices for C code?`],
            };
            data.exercises = {
                easy: `Write a simple C program with a main function and one helper function.`,
                medium: `Split a small program into a header and source file, then compile both together.`,
                hard: `Design a modular program with separate components, such as input handling and computation.`,
                interview: `Describe the standard structure of a C source file and why it matters.`,
            };
            data.assignment = `Create a C program with at least two source files and one header file, and document the project structure.`;
            data.miniProject = `Build a simple modular utility in C that is split into clearly separated modules for logic and I/O.`;
            data.summary = [`Program structure organizes C code into readable modules.`, `Headers and source files work together to define interfaces and implementations.`, `Good structure is essential for maintainable C software.`];
        } else if (key.includes('first c program')) {
            data.overview = `Write your first C program and learn how source code becomes output through compilation and execution.`;
            data.why = `The first C program teaches the basic workflow of writing, compiling, and running C source. It is the first practical step in learning the language.`;
            data.theory.beginner = `Beginner: A first C program usually prints a message to the console using printf and returns 0 from main. This introduces functions, headers, and the program entry point.`;
            data.theory.intermediate = `Intermediate: Learn how the source file is compiled, linked, and executed, and how the main function returns an exit code to the operating system.`;
            data.theory.advanced = `Advanced: Understand how startup code initializes the runtime environment before main runs, and how return codes and exit status are used in scripts and tools.`;
            data.syntax = `A simple first C program looks like: #include <stdio.h>\nint main(void) { printf("Hello, world!\n"); return 0; }`;
            data.commonMistakes = [`Forgetting the semicolon after printf.`, `Using a wrong format string or missing header.`, `Returning from main incorrectly or omitting #include <stdio.h>.`];
            data.bestPractices = [`Use meaningful output and comments in your first program.`, `Compile early and fix simple syntax errors.`, `Run the program from a terminal to see its output clearly.`];
            data.interview = {
                beginner: [`What does int main(void) mean?`, `Why do we include <stdio.h>?`],
                intermediate: [`What does return 0 from main do?`, `How does printf work?`],
                advanced: [`How does the OS use the exit status from main?`, `What is the runtime startup sequence before main()?`],
            };
            data.exercises = {
                easy: `Write a Hello World program in C.`,
                medium: `Modify the program to print multiple lines and use variables.`,
                hard: `Create a program that reads a name from input and prints a greeting.`,
                interview: `Explain the structure of your first C program and what each line does.`,
            };
            data.assignment = `Write a simple console program that prints a formatted message and exits cleanly. Document each line with comments.`;
            data.miniProject = `Create a small interactive program that asks for a user name and prints a personalized greeting.`;
            data.summary = [`The first C program introduces the main building blocks of C.`, `It demonstrates compilation, execution, and simple I/O.`, `Once you have a first program, you can explore deeper topics with confidence.`];
        } else if (key.includes('compilation process')) {
            data.overview = `Learn the compilation process for C programs, including preprocessing, compiling, assembling, and linking.`;
            data.why = `Understanding the compilation stages helps you debug errors, manage dependencies, and optimize build performance.`;
            data.theory.beginner = `Beginner: The compilation process takes source code and transforms it into an executable. The main stages are preprocessing, compilation, assembly, and linking.`;
            data.theory.intermediate = `Intermediate: Each stage has a specific role: the preprocessor handles macros and includes, the compiler generates assembly, the assembler creates object code, and the linker combines object files.`;
            data.theory.advanced = `Advanced: Mastering the process makes it easier to use separate compilation, libraries, debug symbols, and optimization flags while avoiding common build issues.`;
            data.syntax = `There is no single C syntax for this topic, but build commands such as gcc -c, gcc -o, and gcc -E are essential to know.`;
            data.commonMistakes = [`Running the wrong compiler command for linking.`, `Using outdated object files when rebuilding.`, `Ignoring preprocessor output and assuming source code is compiled directly.`];
            data.bestPractices = [`Use explicit compile and link commands for clarity.`, `Keep headers and source files organized to reduce rebuild times.`, `Use build tools or scripts for repeatable compilation.`];
            data.interview = {
                beginner: [`What are the main stages of compiling a C program?`, `What does the linker do?`],
                intermediate: [`What is the role of the preprocessor?`, `Why do we use object files?`],
                advanced: [`How do compiler and linker flags affect build output?`, `What is separate compilation and why is it useful?`],
            };
            data.exercises = {
                easy: `Compile a C source file and inspect the generated object file.`,
                medium: `Run the preprocessor only and review the expanded source output.`,
                hard: `Build a small program from multiple source files with a Makefile or build script.`,
                interview: `Describe the four stages of the C build process and why each is important.`,
            };
            data.assignment = `Use a compiler to preprocess, compile, assemble, and link a C program step by step, and document each output file.`;
            data.miniProject = `Create a small build script or Makefile that compiles a multi-file C program reliably.`;
            data.summary = [`The compilation process is how source code becomes an executable.`, `Each stage performs a specific task, from macro expansion to symbol resolution.`, `Knowing the process helps you solve build and dependency problems.`];
        } else if (key.includes('errors')) {
            data.overview = `Study common C errors and how to interpret compiler and runtime diagnostics to fix code quickly.`;
            data.why = `Most C developers spend time debugging errors, so this topic builds essential troubleshooting skills for both beginners and experienced programmers.`;
            data.theory.beginner = `Beginner: Learn the difference between syntax errors, compile-time errors, and runtime errors. Recognize typical messages and how to correct them.`;
            data.theory.intermediate = `Intermediate: Understand warnings, undefined behavior, and how to use debugging tools like gdb to inspect program state.`;
            data.theory.advanced = `Advanced: Diagnose memory corruption, segmentation faults, and logic bugs with a systematic approach and by using sanitizers or assertions.`;
            data.syntax = `Errors often arise from missing semicolons, mismatched braces, incorrect format strings, or wrong types. Learning correct syntax reduces these mistakes.`;
            data.commonMistakes = [`Ignoring warnings and letting them accumulate.`, `Assuming a runtime crash is unrelated to earlier logic errors.`, `Not checking pointer and array bounds carefully.`];
            data.bestPractices = [`Fix compiler warnings immediately.`, `Use assertions and defensive coding to catch mistakes early.`, `Test small pieces of code before combining them into larger programs.`];
            data.interview = {
                beginner: [`What is a compile-time error?`, `How do you fix a syntax error in C?`],
                intermediate: [`What is undefined behavior and why is it dangerous?`, `How do you handle runtime errors in C?`],
                advanced: [`How do you debug a segmentation fault in a C program?`, `What tools can help find memory corruption?`],
            };
            data.exercises = {
                easy: `Intentionally introduce a syntax error and fix it using the compiler message.`,
                medium: `Identify and fix a logic error in a small C program.`,
                hard: `Use a debugger or sanitizer to locate a runtime memory error.`,
                interview: `Describe your strategy for debugging a crash in a C program.`,
            };
            data.assignment = `Write a small C program that demonstrates a common error, then fix it and explain the correction in comments.`;
            data.miniProject = `Create a troubleshooting guide for common C errors, including examples and fixes.`;
            data.summary = [`Errors are a normal part of learning C.`, `Use compiler diagnostics, warnings, and debugging tools to solve them.`, `Good habits make error handling faster and more reliable.`];
        }
    } else if (section === '02_BASICS') {
        // Provide specific content for the basic syntax topics.
        if (key.includes('tokens')) {
            data.overview = `Tokens are the smallest meaningful elements of C source code, such as keywords, identifiers, constants, operators, and separators.`;
            data.why = `Understanding tokens helps you read C code correctly and avoid syntax errors caused by invalid or misplaced characters.`;
            data.theory.beginner = `Beginner: A token is a single unit of code, like the keyword int, the identifier x, or the operator +. C source is processed token by token by the compiler.`;
            data.theory.intermediate = `Intermediate: Learn how tokens combine into expressions, declarations, and statements. Misplaced tokens can change meaning or cause compile errors.`;
            data.theory.advanced = `Advanced: Tokenization is the first stage of compilation, and some constructs like string literals and macro expansions are handled specially at this level.`;
            data.syntax = `Examples of token categories: keywords (int), identifiers (sum), constants (42), string literals ("Hello"), operators (+, ==), and punctuation (;, {}).`;
            data.commonMistakes = [`Using invalid identifiers or keywords as variable names.`, `Leaving out required separators like semicolons.`, `Confusing operators with different precedence.`];
            data.bestPractices = [`Use meaningful names for identifiers.`, `Write clearly separated tokens and avoid dense expressions.`, `Follow C naming conventions for readability.`];
            data.interview = {
                beginner: [`What is a token in C?`, `Name some token types in C.`],
                intermediate: [`How does the compiler use tokens?`, `What is the difference between identifiers and keywords?`],
                advanced: [`How do tokens interact with the preprocessor?`, `Why do some tokens require special handling?`],
            };
            data.exercises = {
                easy: `List the different token types found in a simple C statement.`,
                medium: `Write a C expression and label each token type.`,
                hard: `Identify tokenization issues in a complex C statement and correct them.`,
                interview: `Explain how the C compiler converts source text into tokens.`,
            };
            data.assignment = `Create a reference sheet of C token categories with examples and notes.`,
            data.miniProject = `Design a small parser demo that prints token types for a simple C expression or declaration.`,
            data.summary = [`Tokens are the building blocks of C syntax.`, `Clear token use avoids many basic compile errors.`, `Understanding tokens helps you read and write C source reliably.`];
        } else if (key.includes('keywords')) {
            data.overview = `Keywords are reserved words in C that have special meaning to the compiler, such as int, return, and if.`;
            data.why = `Using keywords correctly is essential because they define language structure and cannot be used as identifiers.`;
            data.theory.beginner = `Beginner: Keywords are the backbone of C syntax. Each keyword has a specific purpose, such as declaring a variable, controlling flow, or defining a function.`;
            data.theory.intermediate = `Intermediate: Learn how keywords shape declarations, type conversions, and control constructs. Keywords like const and volatile influence how the compiler treats data.`;
            data.theory.advanced = `Advanced: Some keywords are context-sensitive and may behave differently in C and C++. Understanding the standard C keyword set helps avoid compiler-specific issues.`;
            data.syntax = `Common C keywords include int, char, float, double, return, if, else, for, while, switch, case, break, continue, typedef, struct, union, enum, extern, static, and auto.`;
            data.commonMistakes = [`Trying to use a keyword as a variable name.`, `Forgetting the correct keyword for a construct, such as using goto instead of a loop.`, `Confusing typedef names with keywords.`];
            data.bestPractices = [`Learn the full list of standard C keywords.`, `Choose descriptive identifiers that do not conflict with keywords.`, `Keep keyword usage consistent and idiomatic.`];
            data.interview = {
                beginner: [`What is a keyword in C?`, `Give examples of C keywords.`],
                intermediate: [`Why can keywords not be used as identifiers?`, `What are some control-flow keywords in C?`],
                advanced: [`How do storage-class keywords like extern and static differ?`, `Which C keywords were introduced in later standards?`],
            };
            data.exercises = {
                easy: `List 10 C keywords and describe their use.`,
                medium: `Write a C program using a variety of keywords in declarations and control flow.`,
                hard: `Compare keyword usage across C89 and C99 for the same program.`,
                interview: `Explain how C keywords structure a program.`,
            };
            data.assignment = `Create a mini glossary of C keywords with examples and usage notes.`;
            data.miniProject = `Build a small reference app in C that prints keyword categories and their meanings.`;
            data.summary = [`Keywords are reserved and essential to C syntax.`, `You cannot use keywords as variable names.`, `Knowing keywords helps you understand C source code quickly.`];
        } else if (key.includes('identifiers')) {
            data.overview = `Identifiers are the names you give to variables, functions, types, and labels in C.`;
            data.why = `Good identifier naming is critical for readable, maintainable code and prevents naming conflicts.`,
            data.theory.beginner = `Beginner: Identifiers consist of letters, digits, and underscores, and must not begin with a digit. They are used for variable names, function names, and more.`;
            data.theory.intermediate = `Intermediate: Learn the rules for scope and linkage, such as block scope versus file scope, and how identifier visibility affects program behavior.`;
            data.theory.advanced = `Advanced: Use consistent naming conventions and avoid collisions between identifiers in different translation units or external libraries.`;
            data.syntax = `Identifiers are formed like myVariable, calculate_sum, or MAX_BUFFER. They cannot contain spaces or punctuation other than underscores.`;
            data.commonMistakes = [`Starting an identifier with a digit.`, `Using reserved names starting with an underscore in global scope.`, `Giving variables unclear or conflicting names.`];
            data.bestPractices = [`Use descriptive identifier names.`, `Follow a consistent style for variables, functions, and types.`, `Avoid single-letter names except in short loops or temporary values.`];
            data.interview = {
                beginner: [`What is an identifier in C?`, `What characters can an identifier contain?`],
                intermediate: [`What is the difference between scope and linkage?`, `Why should you avoid reserved names starting with underscore?`],
                advanced: [`How does identifier visibility affect separate compilation?`, `What naming conventions help prevent conflicts?`],
            };
            data.exercises = {
                easy: `Create sample identifiers for variables, functions, and types.`,
                medium: `Identify invalid identifiers and fix them.`,
                hard: `Design a naming scheme for a small C module with multiple files.`,
                interview: `Explain the rules and best practices for C identifiers.`,
            };
            data.assignment = `Write a short C program using well-named identifiers and explain the naming choices.`;
            data.miniProject = `Create a naming guideline document and example code demonstrating good identifier use.`;
            data.summary = [`Identifiers name your code elements.`, `Follow the rules for valid identifiers and good naming conventions.`, `Clear names improve readability and reduce bugs.`];
        } else if (key.includes('variables')) {
            data.overview = `Variables store data in memory and are a fundamental concept for programming in C.`;
            data.why = `Understanding variables is essential for writing any C program, because they hold values that your program manipulates.`;
            data.theory.beginner = `Beginner: Learn about variable declarations, initialization, and basic types. Variables have a type, name, and storage location in memory.`;
            data.theory.intermediate = `Intermediate: Learn about scope, lifetime, and how storage classes such as static and extern influence variables.`;
            data.theory.advanced = `Advanced: Explore how variables are stored in stack, heap, or static memory, and how type choices impact performance and safety.`;
            data.syntax = `Declare a variable with type and name, e.g. int count = 0; or float balance;`;
            data.commonMistakes = [`Using uninitialized variables.`, `Confusing local and global scopes.`, `Choosing the wrong data type for the value.`];
            data.bestPractices = [`Initialize variables when declaring them.`, `Use the smallest appropriate type for values.`, `Keep variable scope as narrow as possible.`];
            data.interview = {
                beginner: [`What is a variable in C?`, `How do you declare a variable?`],
                intermediate: [`What does scope mean for a variable?`, `What is a storage class?`],
                advanced: [`How does variable lifetime differ between stack and static memory?`, `Why should you avoid global variables when possible?`],
            };
            data.exercises = {
                easy: `Declare variables of different types and assign values to them.`,
                medium: `Write a program that uses local and global variables and observe the output.`,
                hard: `Refactor a program to reduce the use of global variables and improve structure.`,
                interview: `Discuss how C stores variables in memory.`,
            };
            data.assignment = `Create a C program with several variable types and demonstrate correct initialization and scope.`;
            data.miniProject = `Build a calculator-style program that uses variables to store inputs and results.`;
            data.summary = [`Variables hold data in memory.`, `Use proper initialization and scope.`, `Choosing the right type makes your program safer and more efficient.`];
        } else if (key.includes('constants')) {
            data.overview = `Constants are fixed values in C that do not change during program execution.`;
            data.why = `Using constants improves readability, maintainability, and prevents accidental modification of values that should remain fixed.`;
            data.theory.beginner = `Beginner: Constants are values like 42 or 'A' that a program uses directly. C has literal constants and symbolic constants created with #define or const.`;
            data.theory.intermediate = `Intermediate: Learn the difference between preprocessor constants and typed const variables. Use const for safer code and #define for macro-style values.`;
            data.theory.advanced = `Advanced: Understand how constants interact with memory, type safety, and compiler optimizations.`;
            data.syntax = `Examples: const int MAX = 100; #define BUFFER_SIZE 256`;
            data.commonMistakes = [`Modifying a const variable.`, `Using macros without parentheses in expressions.`, `Mixing string literals with mutable char arrays incorrectly.`];
            data.bestPractices = [`Prefer typed const variables over raw macros when possible.`, `Use meaningful names for constant values.`, `Avoid hard-coded literals scattered through code.`];
            data.interview = {
                beginner: [`What is a constant in C?`, `How do you define a constant?`],
                intermediate: [`What is the difference between const and #define?`, `Why use constants in C programs?`],
                advanced: [`How does the compiler optimize constant expressions?`, `When should you use an enum for constants?`],
            };
            data.exercises = {
                easy: `Define a constant and use it in a calculation.`,
                medium: `Use const variables and macros for configuration values in a program.`,
                hard: `Discuss the pros and cons of const versus #define in a sample program.`,
                interview: `Explain how constants improve code quality.`,
            };
            data.assignment = `Create a C program that uses constants for configuration values and prints results using those constants.`;
            data.miniProject = `Build a settings module that uses defined constants and const variables for program parameters.`;
            data.summary = [`Constants represent fixed values.`, `Prefer meaningful symbolic constants for maintainable code.`, `Use const and macros carefully for readability and safety.`];
        } else if (key.includes('data types')) {
            data.overview = `Data types define the kind of data a variable can hold, such as integers, floating point values, and characters.`;
            data.why = `Choosing the right data type is critical for memory use, precision, and correct behavior in C programs.`;
            data.theory.beginner = `Beginner: Learn the basic built-in types like int, char, float, and double, and how they represent values in memory.`;
            data.theory.intermediate = `Intermediate: Understand signed versus unsigned types, the size of each type, and when to use each one.`;
            data.theory.advanced = `Advanced: Explore platform-specific type sizes, type conversions, and how integer promotion affects expressions.`;
            data.syntax = `Type declarations look like int value; char letter; float ratio;`;
            data.commonMistakes = [`Assuming type sizes are the same on every platform.`, `Using the wrong type for large or precise values.`, `Not handling type conversion explicitly.`];
            data.bestPractices = [`Pick the smallest type that safely holds your values.`, `Use fixed-width types like int32_t when portability matters.`, `Avoid implicit narrowing conversions.`];
            data.interview = {
                beginner: [`What are the basic data types in C?`, `What is the difference between int and float?`],
                intermediate: [`What are signed and unsigned types?`, `Why does char sometimes behave like a number?`],
                advanced: [`How does integer promotion affect mixed-type expressions?`, `When should you use fixed-width integer types?`],
            };
            data.exercises = {
                easy: `Declare variables of different basic types and print their values.`,
                medium: `Write a program that converts between int and float types.`,
                hard: `Demonstrate the effect of signed and unsigned overflow in C.`,
                interview: `Describe how C represents different data types in memory.`,
            };
            data.assignment = `Create a C program that uses multiple data types and prints the results with correct formatting.`;
            data.miniProject = `Build a simple unit-converter tool that uses different numeric types and validates input.`;
            data.summary = [`Data types determine how values are stored and interpreted.`, `Use appropriate types for precision, range, and portability.`, `Type conversions must be handled carefully to avoid errors.`];
        } else if (key.includes('type modifiers')) {
            data.overview = `Type modifiers change the behavior of base data types by altering signedness, width, or storage.`;
            data.why = `Modifiers such as short, long, signed, and unsigned allow you to fine-tune memory use and value range.`;
            data.theory.beginner = `Beginner: Learn common type modifiers like unsigned int and long long, and how they affect the values a variable can hold.`;
            data.theory.intermediate = `Intermediate: Understand when to use modifiers for performance, portability, and to avoid overflow. The same base type can behave very differently with modifiers.`;
            data.theory.advanced = `Advanced: Combine modifiers with fixed-width types and platform-specific details to write safe, portable code that uses the right storage size.`;
            data.syntax = `Type modifiers are used like unsigned int count; long long total;`;
            data.commonMistakes = [`Assuming long is always 64 bits.`, `Mixing signed and unsigned values in comparisons.`, `Using modifiers without understanding the resulting range.`];
            data.bestPractices = [`Prefer explicit width types such as int32_t for portable code.`, `Use unsigned only when you need non-negative values.`, `Check type size assumptions on your target platform.`];
            data.interview = {
                beginner: [`What is a type modifier in C?`, `Give examples of type modifiers.`],
                intermediate: [`How does unsigned differ from signed?`, `Why use long long instead of int?`],
                advanced: [`What are the portability concerns with long and short?`, `When should you use fixed-width integer types?`],
            };
            data.exercises = {
                easy: `Declare variables using modifiers like unsigned and long.`,
                medium: `Write a program that shows the range of signed versus unsigned values.`,
                hard: `Demonstrate how modifier choices affect arithmetic and overflow.`,
                interview: `Explain the tradeoffs of using type modifiers in C.`,
            };
            data.assignment = `Use type modifiers to declare variables with specific ranges and document the choices.`;
            data.miniProject = `Create a simple C program that prints type size and range information for several modified types.`;
            data.summary = [`Type modifiers refine base types.`, `Understand signedness and width to avoid bugs.`, `Use modifiers deliberately for better code quality.`];
        } else if (key.includes('type casting')) {
            data.overview = `Type casting converts one data type to another and is essential for working with mixed expressions in C.`;
            data.why = `Proper casting helps avoid unintended results, loss of precision, and compiler warnings in arithmetic and I/O operations.`;
            data.theory.beginner = `Beginner: A cast tells the compiler to treat a value as a different type, such as (int) 3.14 or (double) x.`;
            data.theory.intermediate = `Intermediate: Learn the difference between implicit conversion and explicit casting, and when to use each to preserve data correctness.`;
            data.theory.advanced = `Advanced: Use casting carefully to avoid undefined behavior, especially with pointers, integer overflow, and mixed signed/unsigned expressions.`;
            data.syntax = `Casting follows the form (type) expression, for example (float) count or (char) value.`;
            data.commonMistakes = [`Casting without understanding the effect on precision.`, `Using casts to silence warnings instead of fixing the underlying issue.`, `Casting pointers incorrectly between incompatible types.`];
            data.bestPractices = [`Use explicit casts only when necessary.`, `Prefer correct data types over unnecessary casting.`, `Document why a cast is needed when it is not obvious.`];
            data.interview = {
                beginner: [`What is type casting in C?`, `How do you cast a float to an int?`],
                intermediate: [`What is the difference between implicit conversion and explicit casting?`, `Why can casts cause data loss?`],
                advanced: [`How does casting affect pointer arithmetic?`, `When does casting lead to undefined behavior?`],
            };
            data.exercises = {
                easy: `Cast a float to an int and print the result.`,
                medium: `Write a program that converts between integer and floating-point types.`,
                hard: `Identify and fix incorrect casts in a sample program.`,
                interview: `Explain when explicit casts are necessary in C.`,
            };
            data.assignment = `Create a C program that safely casts values between compatible types and documents each conversion.`;
            data.miniProject = `Build a simple conversion utility that accepts numeric input and casts it to different C types.`;
            data.summary = [`Type casting changes how values are interpreted.`, `Use explicit casts thoughtfully.`, `Avoid casting when better types can eliminate the need.`];
        }
    } else if (section === '03_INPUT_OUTPUT') {
        if (key.includes('printf')) {
            data.overview = `Learn how printf formats and prints output in C, including placeholders, field width, and precision.`;
            data.why = `printf is the standard way to display information, debug programs, and create user-facing text output in C.`;
            data.theory.beginner = `Beginner: printf sends formatted text to standard output. It uses a format string with specifiers like %d, %f, and %s to insert variable values.`;
            data.theory.intermediate = `Intermediate: Use width and precision specifiers, escape sequences, and argument ordering. Learn how printf handles type conversions internally.`;
            data.theory.advanced = `Advanced: Understand undefined behavior when format specifiers do not match argument types, and how to use printf safely in complex output code.`;
            data.syntax = `printf("Value = %d\n", value); // %d for integer, %f for float, %s for string.`;
            data.commonMistakes = [`Using the wrong format specifier for a given type.`, `Forgetting the newline at the end of output.`, `Passing a non-matching argument count to printf.`];
            data.bestPractices = [`Always match format specifiers to argument types.`, `Use \n for line breaks and avoid trailing spaces.`, `Test formatted output with representative values.`];
            data.interview = {
                beginner: [`What does printf do in C?`, `Give an example of a printf format specifier.`],
                intermediate: [`What happens if a printf specifier does not match the argument type?`, `How do you print a floating-point value with two decimal places?`],
                advanced: [`Why is printf considered unsafe in some cases?`, `How can you avoid format-string vulnerabilities?`],
            };
            data.exercises = {
                easy: `Print a message using printf and a simple format specifier.`,
                medium: `Format several values in one printf call using width and precision.`,
                hard: `Create a formatted report with aligned columns using printf.`,
                interview: `Discuss common printf mistakes and how to avoid them.`,
            };
            data.assignment = `Build a C program that prints formatted values for integers, floats, and strings using printf.`;
            data.miniProject = `Create a simple table output program with aligned columns using printf formatting.`;
            data.summary = [`printf is the standard C output function.`, `Match format specifiers to argument types.`, `Use formatting features to produce clear output.`];
        } else if (key.includes('scanf')) {
            data.overview = `Study scanf for reading formatted input from the user, including how to handle whitespace and format specifiers safely.`;
            data.why = `Input is the counterpart to output, and scanf is the standard C function for reading typed values from the console.`;
            data.theory.beginner = `Beginner: scanf reads values from standard input according to a format string, such as %d for integers or %s for strings. Remember to supply variable addresses.`;
            data.theory.intermediate = `Intermediate: Learn how scanf handles whitespace, how to prevent buffer overflow with string width specifiers, and when input may fail.`;
            data.theory.advanced = `Advanced: Understand the return value of scanf, how to check for invalid input, and when to use safer alternatives to avoid security issues.`;
            data.syntax = `scanf("%d %f", &count, &ratio); // note the ampersand to pass addresses.`;
            data.commonMistakes = [`Forgetting the & operator for variables.`, `Using %s without a width limit and risking overflow.`, `Ignoring the return value of scanf.`];
            data.bestPractices = [`Validate scanf return values.`, `Use width specifiers for strings like %19s.`, `Consider fgets plus parsing for safer input.`];
            data.interview = {
                beginner: [`What does scanf do?`, `Why do you pass &x to scanf?`],
                intermediate: [`How do you prevent scanf buffer overflow?`, `What does scanf return?`],
                advanced: [`Why is scanf not always safe for user input?`, `What are safer alternatives to scanf?`],
            };
            data.exercises = {
                easy: `Read an integer with scanf and print it back.`,
                medium: `Read a string and a number, then print them in a sentence.`,
                hard: `Handle invalid input gracefully by checking scanf's return value.`,
                interview: `Explain how scanf processes formatted input and what can go wrong.`,
            };
            data.assignment = `Write a program that reads multiple typed inputs using scanf and displays them clearly.`;
            data.miniProject = `Create a command-line prompt that asks for user details and prints a formatted summary.`;
            data.summary = [`scanf reads formatted input.`, `Always use addresses and validate scanf results.`, `Be careful with string input to avoid overflow.`];
        } else if (key.includes('getchar') || key.includes('putchar') || key.includes('puts')) {
            const functionName = key.includes('getchar') ? 'getchar' : key.includes('putchar') ? 'putchar' : 'puts';
            data.overview = `Learn how ${functionName} provides simple character-based I/O in C.`;
            data.why = `Character I/O functions are useful for low-level input/output tasks, simple text processing, and building command-line utilities.`;
            data.theory.beginner = `Beginner: ${functionName} reads or writes one character at a time. ${functionName} is easy to use and can be combined with loops to process text.`;
            data.theory.intermediate = `Intermediate: Understand buffered I/O, how newline characters are handled, and how to use these functions safely in loops and interactive programs.`;
            data.theory.advanced = `Advanced: Use character I/O efficiently in performance-sensitive code, and combine it with formatted output or file streams when needed.`;
            data.syntax = `Example: int ch = getchar(); putchar(ch);`;
            data.commonMistakes = [`Not checking for EOF when using getchar.`, `Forgetting to add a newline with putchar or puts.`, `Using puts with strings that contain format specifiers (puts does not interpret them, but it's still good to know).`];
            data.bestPractices = [`Handle EOF and errors explicitly.`, `Use puts for simple string output and putchar for single characters.`, `Keep character loops simple and clear.`];
            data.interview = {
                beginner: [`What does getchar do?`, `How do you write a character with putchar?`],
                intermediate: [`How do you detect end-of-file with getchar?`, `When would you use puts instead of printf?`],
                advanced: [`How does buffered I/O affect getchar and putchar performance?`, `What are common pitfalls in character-based input loops?`],
            };
            data.exercises = {
                easy: `Read one character and print it back with putchar.`,
                medium: `Create a loop that copies input to output until EOF.`,
                hard: `Implement a simple character-based line editor or filter.`,
                interview: `Describe the difference between getchar, putchar, and puts.`,
            };
            data.assignment = `Write a C program that reads characters until newline and echoes them back to the console.`;
            data.miniProject = `Create a simple text filter or analyzer using single-character I/O.`;
            data.summary = [`Character I/O is fundamental for simple text processing.`, `Always handle EOF and buffer boundaries.` , `Use the right function for the job: getchar for input, putchar/puts for output.`];
        } else if (key.includes('format specifiers') || key.includes('escape sequences')) {
            const topicName = key.includes('format specifiers') ? 'format specifiers' : 'escape sequences';
            data.overview = `Discover how ${topicName} control formatted text output and special characters in C strings.`;
            data.why = `These concepts are essential for producing readable output and handling newlines, tabs, and other special characters correctly.`;
            data.theory.beginner = `Beginner: Format specifiers like %d, %f, and %s tell printf how to display different data types. Escape sequences like \n and \t represent special characters in string literals.`;
            data.theory.intermediate = `Intermediate: Learn additional specifiers, precision control, and how escape sequences are interpreted by the compiler and runtime.`;
            data.theory.advanced = `Advanced: Understand how incorrect format specifiers cause undefined behavior and how escape sequences can be used to build multi-line, human-friendly output.`;
            data.syntax = `Example: printf("%5.2f\n", value); // width and precision, \n is newline.`;
            data.commonMistakes = [`Using %d with a float value.`, `Writing \n inside a string without escaping it.`, `Assuming \t aligns columns perfectly on all consoles.`];
            data.bestPractices = [`Match values to format specifiers exactly.`, `Use escape sequences for clear layout and line breaks.`, `Avoid combining escape sequences in unclear ways.`];
            data.interview = {
                beginner: [`What is a format specifier?`, `What does \n represent?`],
                intermediate: [`How do you print a string with printf?`, `What does %0.2f do?`],
                advanced: [`Why can mismatched format specifiers cause crashes?`, `How are escape sequences processed in string literals?`],
            };
            data.exercises = {
                easy: `Print values using %d, %f, and %s.`,
                medium: `Format output with width and precision, and use \n to break lines.`,
                hard: `Create a formatted table of values with aligned columns.`,
                interview: `Explain why format specifiers must match the data type exactly.`,
            };
            data.assignment = `Write a program that prints a multi-line report using format specifiers and escape sequences.`;
            data.miniProject = `Build a console-based table output tool with formatted numbers and strings.`;
            data.summary = [`Format specifiers control how values are printed.`, `Escape sequences let you include special characters in output.`, `Correct matching and formatting prevents bugs and improves clarity.`];
        }
    } else if (section === '04_OPERATORS') {
        const pics = key;
        if (pics.includes('arithmetic')) {
            data.overview = `Study arithmetic operators in C for addition, subtraction, multiplication, division, and remainder.`;
            data.why = `Arithmetic operators are the foundation of numerical computation in C programs, from simple calculations to algorithms.`;
            data.theory.beginner = `Beginner: Learn the basic arithmetic operators +, -, *, /, and % and how they work with integer and floating-point values.`;
            data.theory.intermediate = `Intermediate: Understand operator precedence, integer division behavior, and common pitfalls such as division by zero.`;
            data.theory.advanced = `Advanced: Explore how arithmetic expressions are evaluated, how overflow behaves, and when to use integer versus floating-point arithmetic.`;
            data.syntax = `Example: int sum = a + b; double ratio = total / count;`;
            data.commonMistakes = [`Using integer division when floating-point precision is needed.`, `Dividing by zero.`, `Misunderstanding operator precedence.`];
            data.bestPractices = [`Use parentheses for clarity in complex expressions.`, `Choose the proper numeric type for your operations.`, `Check for division by zero and overflow.`];
            data.interview = {
                beginner: [`What arithmetic operators does C support?`, `How do you compute the remainder of a division?`],
                intermediate: [`What is integer division?`, `Why does 3 / 2 produce 1 in C?`],
                advanced: [`How do you avoid overflow in arithmetic expressions?`, `When should you use floating-point instead of integer arithmetic?`],
            };
            data.exercises = {
                easy: `Write a C program that performs basic arithmetic operations.`,
                medium: `Calculate average values using both integer and floating-point arithmetic.`,
                hard: `Implement a simple calculator with operator selection and error handling.`,
                interview: `Explain the difference between integer and floating-point arithmetic in C.`,
            };
            data.assignment = `Build a calculator program that performs addition, subtraction, multiplication, and division with user input.`;
            data.miniProject = `Create a command-line calculator that supports multiple operations and validates input.`;
            data.summary = [`Arithmetic operators perform numeric calculations.`, `Watch out for integer division and overflow.`, `Use clear expressions and correct types.`];
        } else if (pics.includes('relational')) {
            data.overview = `Learn relational operators for comparing values and using those comparisons in conditional logic.`;
            data.why = `Comparisons are essential for controlling flow, making decisions, and implementing logic in C programs.`;
            data.theory.beginner = `Beginner: Relational operators include ==, !=, <, >, <=, and >=. They compare values and return 1 for true or 0 for false.`;
            data.theory.intermediate = `Intermediate: Use relational operators in if statements, loops, and expressions. Understand how comparisons differ for signed and unsigned values.`;
            data.theory.advanced = `Advanced: Combine relational expressions with logical operators and consider how floating-point comparisons can be imprecise.`;
            data.syntax = `Example: if (a > b) { ... } else if (a == b) { ... }`;
            data.commonMistakes = [`Using = instead of == in comparisons.`, `Comparing floating-point values for exact equality.`, `Mixing signed and unsigned values in comparisons.`];
            data.bestPractices = [`Use parentheses for clarity in combined comparisons.`, `Avoid exact equality for floating-point values.`, `Write comparisons that are easy to read and understand.`];
            data.interview = {
                beginner: [`What is the relational operator for equality in C?`, `What value does a comparison expression return?`],
                intermediate: [`Why should you avoid comparing floats using ==?`, `How do you write a range check with relational operators?`],
                advanced: [`How can signed/unsigned comparisons produce unexpected results?`, `What is short-circuit evaluation with combined relational expressions?`],
            };
            data.exercises = {
                easy: `Write comparisons using ==, !=, <, and >.`,
                medium: `Use relational operators in if statements to control program flow.`,
                hard: `Create a program that validates numeric input using multiple comparisons.`,
                interview: `Discuss how C represents boolean results from relational expressions.`,
            };
            data.assignment = `Implement a value comparison utility that reports equal, greater, or smaller results.`;
            data.miniProject = `Build a simple validation module that checks input values against limits and conditions.`;
            data.summary = [`Relational operators compare values.`, `Use them in control flow and decision-making.`, `Be careful with floating-point and signed/unsigned comparisons.`];
        } else if (pics.includes('logical')) {
            data.overview = `Logical operators combine boolean conditions using AND, OR, and NOT in C.`;
            data.why = `Logical operators are essential for building complex decision-making and control flow in C programs.`;
            data.theory.beginner = `Beginner: The logical operators are &&, ||, and !. They work with expressions that evaluate to true or false.`;
            data.theory.intermediate = `Intermediate: Learn how short-circuit evaluation works, and how operator precedence affects combined conditions.`;
            data.theory.advanced = `Advanced: Use logical operators in robust conditions, avoid ambiguous expressions, and understand how nonzero values are treated as true.`;
            data.syntax = `Example: if (a > 0 && b < 10) { ... }`;
            data.commonMistakes = [`Confusing bitwise & and | with logical && and ||.`, `Relying on nonzero values without clear conditions.`, `Writing overly complex logical expressions.`];
            data.bestPractices = [`Use parentheses to clarify combined conditions.`, `Prefer simple, readable logic over dense expressions.`, `Use ! only when it improves clarity.`];
            data.interview = {
                beginner: [`What does && mean in C?`, `How does ! change a condition?`],
                intermediate: [`What is short-circuit evaluation?`, `How does || behave when the first operand is true?`],
                advanced: [`Why should you avoid using assignment inside logical expressions?`, `How do logical operators compare with bitwise operators?`],
            };
            data.exercises = {
                easy: `Write simple if statements using && and ||.`,
                medium: `Combine several conditions and test different inputs.`,
                hard: `Create a validation routine with nested logical conditions.`,
                interview: `Explain how && and || evaluate expressions in C.`,
            };
            data.assignment = `Build a C program that checks user input with multiple logical conditions.`,
            data.miniProject = `Create a simple rule-based decision engine that uses logical operators.`;
            data.summary = [`Logical operators combine boolean conditions.`, `Understand short-circuit evaluation and readability.`, `Avoid confusing logical and bitwise operators.`];
        } else if (pics.includes('assignment')) {
            data.overview = `Assignment operators store values in variables and allow compound updates like += and -=.`;
            data.why = `Assignment is how programs modify state, so understanding it is essential for nearly every C program.`;
            data.theory.beginner = `Beginner: The = operator assigns a value to a variable. Compound forms like +=, -=, *=, and /= update a variable in place.`;
            data.theory.intermediate = `Intermediate: Learn the difference between assignment and comparison, and how compound assignment combines operations with assignment.`;
            data.theory.advanced = `Advanced: Understand how assignment expressions evaluate to the assigned value and how this can be used in larger expressions.`;
            data.syntax = `Example: count += 1; value = total / n;`;
            data.commonMistakes = [`Using = instead of == in comparisons.`, `Forgetting that assignment returns a value in expressions.`, `Overusing compound assignment in unclear code.`];
            data.bestPractices = [`Use assignment clearly and avoid complex expression chains.`, `Keep assignment separate from comparison when possible.`, `Use compound operators to express updates concisely when it remains readable.`];
            data.interview = {
                beginner: [`What is the assignment operator in C?`, `How do you increase a variable by one?`],
                intermediate: [`What is the difference between = and ==?`, `How does += work?`],
                advanced: [`How does assignment in expressions evaluate?`, `When should you avoid using assignment inside conditions?`],
            };
            data.exercises = {
                easy: `Assign values to variables and print them.`,
                medium: `Use compound assignment to update a value in a loop.`,
                hard: `Refactor code to use assignment more clearly and efficiently.`,
                interview: `Explain why = and == are not the same.`,
            };
            data.assignment = `Write a C program that uses assignment and compound operators to update counters and totals.`;
            data.miniProject = `Create a score-tracking utility that updates values using assignment operators.`;
            data.summary = [`Assignment stores values in variables.`, `Compound assignment combines update and assignment.`, `Keep assignments clear to avoid confusing expressions.`];
        } else if (pics.includes('increment') || pics.includes('decrement')) {
            data.overview = `Increment and decrement operators modify numeric values by one with ++ and --.`;
            data.why = `These operators are common in loops and counters, so mastering them improves your control structures and code brevity.`;
            data.theory.beginner = `Beginner: The ++ operator increases a value by one, and -- decreases it by one. They can appear before or after the variable.`;
            data.theory.intermediate = `Intermediate: Learn the difference between prefix (++x) and postfix (x++) forms, and how they affect expression evaluation.`;
            data.theory.advanced = `Advanced: Avoid undefined behavior by not modifying the same variable multiple times in one expression, and use ++/-- in clear, simple contexts.`;
            data.syntax = `Example: count++; ++count; value = count++;`;
            data.commonMistakes = [`Using x++ and ++x interchangeably in expressions without understanding the difference.`, `Modifying the same variable multiple times in one expression.`, `Using postfix increment where prefix is clearer.`];
            data.bestPractices = [`Use ++ and -- in simple statements, especially loops.`, `Prefer prefix form when the result is used immediately.`, `Avoid complex expressions that combine multiple increments.`];
            data.interview = {
                beginner: [`What does x++ do?`, `What does ++x do?`],
                intermediate: [`How do prefix and postfix increment differ?`, `When should you avoid using ++ in expressions?`],
                advanced: [`Why is x = i++ + ++i undefined?`, `How do compilers optimize increment operations?`],
            };
            data.exercises = {
                easy: `Increment a variable and print the result.`,
                medium: `Use ++ and -- in a loop to count upward and downward.`,
                hard: `Explain the difference between prefix and postfix forms with code examples.`,
                interview: `Describe the behavior of prefix versus postfix increment in C.`,
            };
            data.assignment = `Implement a small loop using increment and decrement operators to produce a sequence.`;
            data.miniProject = `Build a counter utility that uses increment/decrement operations to navigate values.`;
            data.summary = [`++ and -- change values by one.`, `Prefix and postfix forms behave differently in expressions.`, `Use them in simple, readable code.`];
        } else if (pics.includes('bitwise')) {
            data.overview = `Bitwise operators manipulate individual bits in integer values, enabling low-level control in C.`;
            data.why = `Bitwise operations are essential for embedded programming, flags, masks, and performance-critical code.`;
            data.theory.beginner = `Beginner: Learn bitwise AND (&), OR (|), XOR (^), NOT (~), and shifts (<<, >>). These operate on binary representations of integers.`;
            data.theory.intermediate = `Intermediate: Use bitwise operators for masking, setting, clearing, and testing bits. Understand signed versus unsigned shift behavior.`;
            data.theory.advanced = `Advanced: Apply bitwise operations in optimized algorithms, device drivers, and compact data structures while avoiding undefined behavior.`;
            data.syntax = `Example: flags |= 0x01; value &= ~0x04;`;
            data.commonMistakes = [`Using >> on signed negative values.`, `Confusing logical and bitwise operators.`, `Forgetting to cast or use unsigned values for shifts.`];
            data.bestPractices = [`Prefer unsigned types for bitwise operations.`, `Use named constants for bit masks.`, `Document bit-field layouts and assumptions.`];
            data.interview = {
                beginner: [`What does & do between two integers?`, `What is the result of 1 << 3?`],
                intermediate: [`How do you test a bit in a value?`, `What is the difference between logical and bitwise operators?`],
                advanced: [`Why should you use unsigned when shifting bits?`, `How do you clear a specific bit using a mask?`],
            };
            data.exercises = {
                easy: `Use bitwise AND, OR, and XOR on simple integers.`,
                medium: `Create and test bit masks for specific bits.`,
                hard: `Implement a flags system using bitwise operations.`,
                interview: `Explain how bitwise operations differ from arithmetic operations.`,
            };
            data.assignment = `Write a C program that manipulates bit flags for permissions or settings.`,
            data.miniProject = `Create a small bitmask-based configuration manager or status word handler.`;
            data.summary = [`Bitwise operators work on individual bits.`, `Use unsigned types and masks clearly.`, `Bitwise logic is powerful for low-level programming.`];
        } else if (pics.includes('conditional')) {
            data.overview = `The conditional operator in C evaluates one of two expressions based on a boolean condition.`;
            data.why = `It provides concise decision-making in expressions, often used for simple conditional assignments.`;
            data.theory.beginner = `Beginner: The conditional operator has the form condition ? expression1 : expression2 and returns one of the two values depending on the condition.`;
            data.theory.intermediate = `Intermediate: Use the conditional operator for simple selections, but avoid nested conditionals that reduce readability.`;
            data.theory.advanced = `Advanced: Understand operator precedence and when the conditional operator is appropriate versus if/else statements.`;
            data.syntax = `Example: result = (score >= 50) ? pass : fail;`;
            data.commonMistakes = [`Nesting conditional operators in a hard-to-read way.`, `Using it for complex control flow instead of if/else.`, `Confusing the ? : syntax.`];
            data.bestPractices = [`Use it for simple conditional assignments.`, `Keep the expressions concise and readable.`, `Prefer if/else when the logic is complex.`];
            data.interview = {
                beginner: [`What is the conditional operator in C?`, `How do you use the ? : operator?`],
                intermediate: [`What is the difference between ?: and if/else?`, `When should you avoid the conditional operator?`],
                advanced: [`How does precedence affect chained conditional expressions?`, `Can the conditional operator be used with non-scalar values?`],
            };
            data.exercises = {
                easy: `Use the conditional operator to choose between two values.`,
                medium: `Replace a simple if/else block with the conditional operator.`,
                hard: `Demonstrate the operator in a clean, readable expression.`,
                interview: `Explain when to use the conditional operator versus if/else.`,
            };
            data.assignment = `Write a program that uses the conditional operator to assign values based on a condition.`;
            data.miniProject = `Build a small decision helper that uses the conditional operator for concise logic.`;
            data.summary = [`The conditional operator selects between two expressions.`, `Use it for simple, readable conditional assignments.`, `Avoid nesting it into confusing expressions.`];
        } else if (pics.includes('sizeof')) {
            data.overview = `The sizeof operator reports the size of a type or object in bytes at compile time.`;
            data.why = `Knowing object sizes is important for memory allocation, portability, and understanding how data layouts vary across platforms.`;
            data.theory.beginner = `Beginner: sizeof returns the number of bytes required to store a type or variable. For example, sizeof(int) may be 4 on many systems.`;
            data.theory.intermediate = `Intermediate: Learn how sizeof behaves with arrays, pointers, and structures, and how it is evaluated at compile time.`;
            data.theory.advanced = `Advanced: Use sizeof in portable code, especially when allocating memory or handling binary data. Understand how padding affects structure sizes.`;
            data.syntax = `Example: size_t bytes = sizeof(int);`;
            data.commonMistakes = [`Using sizeof on a pointer when you intended the pointed-to array.`, `Assuming type sizes are fixed across all platforms.`, `Using sizeof(char *) instead of sizeof(char) * length.`];
            data.bestPractices = [`Use sizeof(variable) instead of sizeof(type) when possible.`, `Use size_t for size-related values.`, `Be aware of padding in structures.`];
            data.interview = {
                beginner: [`What does sizeof return?`, `How do you use sizeof with an array?`],
                intermediate: [`Why is sizeof useful for malloc?`, `How does sizeof differ for pointers and arrays?`],
                advanced: [`How does structure padding affect sizeof results?`, `Why is sizeof evaluated at compile time?`],
            };
            data.exercises = {
                easy: `Print the size of common types like int, char, and double.`,
                medium: `Use sizeof to allocate memory for an array dynamically.`,
                hard: `Investigate the size of a struct with different member layouts.`,
                interview: `Explain why sizeof is important for portable memory management.`,
            };
            data.assignment = `Create a C program that reports sizes of types and demonstrates sizeof with arrays and pointers.`;
            data.miniProject = `Build a utility that prints structure layouts and storage sizes for diagnostic purposes.`;
            data.summary = [`sizeof reports memory size in bytes.`, `Use it for allocation and portability.`, `Be careful with pointers versus arrays.`];
        }
    } else if (section === '05_CONDITIONAL_STATEMENTS') {
        if (key === 'if') {
            data.overview = `Learn the if statement for conditional execution in C.`;
            data.why = `The if statement is the most basic decision-making construct in C programs.`;
            data.theory.beginner = `Beginner: Use if(expression) { ... } to execute code only when the expression is true (nonzero).`;
            data.theory.intermediate = `Intermediate: Understand how expressions are evaluated and how if can be combined with else or else if.`;
            data.theory.advanced = `Advanced: Use if carefully to keep logic clear and avoid deeply nested structures. Consider using functions to simplify conditions.`;
            data.syntax = `if (condition) { statements; }`;
            data.commonMistakes = [`Using = instead of == in the condition.`, `Missing braces around multiple statements.`, `Writing overly complex conditions.`];
            data.bestPractices = [`Keep conditions simple and readable.`, `Use braces even for single statements.`, `Extract complex conditions into helper functions.`];
            data.interview = {
                beginner: [`What is the syntax of an if statement?`, `When does the body of if execute?`],
                intermediate: [`What happens if you omit braces?`, `How do you write an if statement that checks multiple conditions?`],
                advanced: [`How can you simplify nested if statements?`, `What are common pitfalls with if conditions?`],
            };
            data.exercises = {
                easy: `Write an if statement that checks whether a number is positive.`,
                medium: `Use if to validate user input and print a message.`,
                hard: `Refactor nested if logic into clearer code.`,
                interview: `Explain the role of if in control flow.`,
            };
            data.assignment = `Implement a simple validator using if statements to check a numeric range.`;
            data.miniProject = `Build a small decision helper that uses if statements to respond to user input.`;
            data.summary = [`if executes code conditionally.`, `Use braces for clarity.`, `Keep conditions straightforward.`];
        } else if (key === 'if else') {
            data.overview = `Learn if-else statements for binary decision-making in C.`;
            data.why = `if-else allows your program to choose one of two paths based on a condition.`;
            data.theory.beginner = `Beginner: Use if(condition) { ... } else { ... } to handle both true and false cases. `;
            data.theory.intermediate = `Intermediate: Learn how to structure if-else chains cleanly and how else is paired with the nearest unmatched if.`;
            data.theory.advanced = `Advanced: Avoid long if-else chains by using functions, switch statements, or lookup tables when appropriate.`;
            data.syntax = `if (x > 0) { ... } else { ... }`;
            data.commonMistakes = [`Misplacing else with nested if blocks.`, `Writing overly long else chains.`, `Forgetting that else pairs with the nearest if.`];
            data.bestPractices = [`Use if-else for clear two-way decisions.`, `Keep each branch short and focused.`, `Use comments when conditions are non-obvious.`];
            data.interview = {
                beginner: [`What is the purpose of else?`, `How do if and else work together?`],
                intermediate: [`What is the dangling else problem?`, `How can you avoid confusing if-else nesting?`],
                advanced: [`When should you replace if-else with switch or function pointers?`, `How does else association work in C?`],
            };
            data.exercises = {
                easy: `Write a program that prints whether a number is even or odd using if-else.`,
                medium: `Use if-else to validate input and provide feedback.`,
                hard: `Refactor a nested if-else sequence into clearer code.`,
                interview: `Describe how if-else chooses between two alternatives.`,
            };
            data.assignment = `Build a program that makes one decision with if-else and prints the result.`;
            data.miniProject = `Create a small survey tool that responds with different messages based on input.`;
            data.summary = [`if-else chooses between two paths.`, `Keep each branch readable.`, `Be mindful of else association.`];
        } else if (key === 'else if') {
            data.overview = `Learn else-if chains for multi-way decision making in C.`;
            data.why = `else if lets you test multiple conditions sequentially and execute the first matching branch.`;
            data.theory.beginner = `Beginner: Use if(condition) { ... } else if(other) { ... } else { ... } to handle more than two cases.`;
            data.theory.intermediate = `Intermediate: Understand that only the first true branch executes, and the conditions are evaluated left to right.`;
            data.theory.advanced = `Advanced: Use else-if chains sparingly and consider switch statements or polymorphic structures for many alternatives.`;
            data.syntax = `if (score >= 90) { ... } else if (score >= 80) { ... } else { ... }`;
            data.commonMistakes = [`Using overlapping conditions that never execute the intended branch.`, `Creating very long else-if chains.`, `Forgetting the final else to catch unexpected cases.`];
            data.bestPractices = [`Order conditions from most specific to most general.`, `Keep each branch small and meaningful.`, `Use comments to explain complex branches.`];
            data.interview = {
                beginner: [`What is else if used for?`, `How does an else-if chain work?`],
                intermediate: [`What happens when multiple conditions are true?`, `How do you order else-if conditions?`],
                advanced: [`When should you use switch instead of else if?`, `How do else-if chains affect readability?`],
            };
            data.exercises = {
                easy: `Write a grade calculator using else-if branches.`,
                medium: `Use else-if to categorize numeric input.`,
                hard: `Refactor an else-if chain for better clarity.`,
                interview: `Explain how else-if selects the first matching condition.`,
            };
            data.assignment = `Implement a category chooser using else-if branches with clear logic.`;
            data.miniProject = `Build a small menu system that chooses actions based on user input.`;
            data.summary = [`else if handles multiple cases sequentially.`, `Order conditions carefully.`, `Avoid overly long else-if chains.`];
        } else if (key.includes('nested if')) {
            data.overview = `Nested if statements let you make decisions inside other decisions.`;
            data.why = `Nested conditions are useful for multi-level validation and hierarchical logic.`;
            data.theory.beginner = `Beginner: Nest an if statement inside another to check related conditions step by step.`;
            data.theory.intermediate = `Intermediate: Keep nested logic shallow and clear to avoid readability issues.`;
            data.theory.advanced = `Advanced: Use nested if sparingly and refactor complex nested logic into functions or switch statements.`;
            data.syntax = `if (a > 0) { if (b > 0) { ... } }`;
            data.commonMistakes = [`Creating deeply nested conditions that are hard to trace.`, `Missing braces around nested blocks.`, `Using nested if when a simpler structure would suffice.`];
            data.bestPractices = [`Limit nesting depth.`, `Use helper functions to simplify nested logic.`, `Keep each nested block small and focused.`];
            data.interview = {
                beginner: [`What does nested if mean?`, `How do you write an if inside another if?`],
                intermediate: [`What are the readability concerns with nested if?`, `How can nested if be simplified?`],
                advanced: [`When should you replace nested if with other structures?`, `How do nested conditions affect control flow?`],
            };
            data.exercises = {
                easy: `Write nested if statements to check two conditions in sequence.`,
                medium: `Use nested if to validate related input values.`,
                hard: `Refactor nested conditions into clearer helper functions.`,
                interview: `Describe when nested if is appropriate and when to avoid it.`,
            };
            data.assignment = `Implement multi-stage validation using nested if statements and explain the logic.`;
            data.miniProject = `Build a decision tree that uses nested conditionals to classify input.`;
            data.summary = [`Nested if allows hierarchical decisions.`, `Keep nesting simple and readable.`, `Refactor complex nested logic into functions.`];
        } else if (key.includes('switch')) {
            data.overview = `The switch statement selects one of many possible branches based on an integer value.`;
            data.why = `switch is ideal for multi-way control flow when you have discrete values to match.`;
            data.theory.beginner = `Beginner: Use switch(expression) with case labels and an optional default to handle different values cleanly.`;
            data.theory.intermediate = `Intermediate: Understand fall-through behavior, the role of break, and how switch differs from if-else.`;
            data.theory.advanced = `Advanced: Use switch for efficient multi-way selection and avoid subtle bugs from unintended fall-through.`;
            data.syntax = `switch (choice) { case 1: ...; break; default: ...; }`;
            data.commonMistakes = [`Forgetting a break and causing fall-through.`, `Using non-integer expressions.`, `Not including a default case when needed.`];
            data.bestPractices = [`Use break for separate cases.`, `Use default to handle unexpected values.`, `Keep case blocks short and clear.`];
            data.interview = {
                beginner: [`What is switch used for in C?`, `How do you define a case label?`],
                intermediate: [`What happens if you omit break in a case?`, `When is switch better than if-else?`],
                advanced: [`How can fall-through be used intentionally?`, `What are the limitations of switch in C?`],
            };
            data.exercises = {
                easy: `Write a switch statement that prints a message for values 1-3.`,
                medium: `Use switch to map numeric choices to actions.`,
                hard: `Implement a simple menu with switch and default handling.`,
                interview: `Explain why switch can be more readable than multiple if-else branches.`,
            };
            data.assignment = `Create a menu-driven program that uses switch to choose between operations.`;
            data.miniProject = `Build a small command parser that uses switch cases for different commands.`;
            data.summary = [`switch handles multiple discrete cases.`, `Use break to prevent fall-through unless intentional.`, `Include default for unexpected values.`];
        }
    } else if (section === '06_LOOPS') {
        if (key.includes('while')) {
            data.overview = `Learn the while loop for repeating code while a condition remains true.`;
            data.why = `while loops are essential for repeating work when the number of iterations is not known in advance.`;
            data.theory.beginner = `Beginner: while(condition) { statements; } repeats the body as long as the condition is true.`;
            data.theory.intermediate = `Intermediate: Understand loop initialization, condition checks, and the risk of infinite loops if the condition never becomes false.`;
            data.theory.advanced = `Advanced: Use while loops for event-driven or sentinel-based processing, and combine them with break for clean exits.`;
            data.syntax = `while (count < 10) { count++; }`;
            data.commonMistakes = [`Forgetting to update the loop variable.`, `Creating an infinite loop.`, `Using while when a for loop would be clearer.`];
            data.bestPractices = [`Keep loop conditions simple.`, `Ensure the loop can terminate.`, `Use comments for non-obvious loop logic.`];
            data.interview = {
                beginner: [`What is a while loop?`, `How does while differ from for?`],
                intermediate: [`How do you prevent infinite loops?`, `When should you use while instead of for?`],
                advanced: [`How can while loops be used for input-driven processing?`, `What are loop invariants?`],
            };
            data.exercises = {
                easy: `Write a while loop that prints numbers from 1 to 5.`,
                medium: `Use while to read input until a sentinel value is entered.`,
                hard: `Implement a loop with a complex stop condition and validation.`,
                interview: `Describe a situation where while is the best loop choice.`,
            };
            data.assignment = `Build a program that uses while to process user input until a stop condition is met.`;
            data.miniProject = `Create a loop-based menu or input processor using while.`;
            data.summary = [`while repeats while a condition is true.`, `Make sure the condition can become false.`, `Use it for sentinel-driven loops or unknown iteration counts.`];
        } else if (key.includes('do while')) {
            data.overview = `Learn the do-while loop, which executes its body at least once before testing the condition.`;
            data.why = `do-while is useful when the loop must run once before checking whether to repeat.`;
            data.theory.beginner = `Beginner: do { statements; } while(condition);`;
            data.theory.intermediate = `Intermediate: Understand that the body executes before the condition is evaluated, so the loop always runs at least once.`;
            data.theory.advanced = `Advanced: Use do-while for menus and input validation that require one initial execution and repeated checks.`;
            data.syntax = `do { printf("Enter value: "); scanf("%d", &x); } while (x != 0);`;
            data.commonMistakes = [`Forgetting the semicolon after while.`, `Using do-while when the body should not always execute once.`, `Not updating loop variables inside the loop.`];
            data.bestPractices = [`Use do-while only when the first iteration must execute.`, `Keep the condition clear and simple.`, `Avoid complex logic in the loop body.`];
            data.interview = {
                beginner: [`What is the difference between do-while and while?`, `When is do-while used?`],
                intermediate: [`Why does do-while always execute once?`, `How do you end a do-while loop?`],
                advanced: [`What are good use cases for do-while loops?`, `How does readability compare to while or for loops?`],
            };
            data.exercises = {
                easy: `Write a do-while loop that asks for a number and repeats until zero.`,
                medium: `Use do-while for a simple menu selection loop.`,
                hard: `Implement a validation loop that repeats until valid input is received.`,
                interview: `Describe a case where do-while is preferable to while.`,
            };
            data.assignment = `Create a simple input loop using do-while that continues until the user chooses to exit.`;
            data.miniProject = `Build an interactive menu-driven application using do-while.`;
            data.summary = [`do-while executes at least once.`, `Use it for post-condition loops.`, `Stop the loop with a clear exit condition.`];
        } else if (key === 'for') {
            data.overview = `The for loop repeats code with an initialization, condition, and update step.`;
            data.why = `for is ideal for counted loops and concise iteration over a known range.`;
            data.theory.beginner = `Beginner: A for loop has the form for(init; condition; update) { body } and is commonly used for numeric iteration.`;
            data.theory.intermediate = `Intermediate: Learn how for loops manage the loop variable and how to use them for arrays and repetitive tasks.`;
            data.theory.advanced = `Advanced: Use for loops for compact iteration patterns, and understand when other loops are more readable.`;
            data.syntax = `for (int i = 0; i < 10; i++) { ... }`;
            data.commonMistakes = [`Using the wrong loop condition and causing infinite loops.`, `Modifying the loop variable incorrectly inside the body.`, `Choosing for when while is clearer.`];
            data.bestPractices = [`Keep the loop header clear and simple.`, `Use for for counted iteration.`, `Avoid modifying the loop variable unexpectedly inside the body.`];
            data.interview = {
                beginner: [`What are the three parts of a for loop?`, `How do you write a basic for loop?`],
                intermediate: [`What happens if the condition is always true?`, `How can you use for to iterate an array?`],
                advanced: [`When should you use while instead of for?`, `How do you write a for loop with multiple variables?`],
            };
            data.exercises = {
                easy: `Write a for loop that prints numbers from 1 to 10.`,
                medium: `Use a for loop to sum the numbers in an array.`,
                hard: `Implement nested for loops for a pattern or matrix output.`,
                interview: `Explain how the loop update step works in a for loop.`,
            };
            data.assignment = `Create a C program that uses a for loop to process a list of values.`;
            data.miniProject = `Build a simple pattern printer or table generator using nested for loops.`;
            data.summary = [`for is ideal for counted loops.`, `Keep the loop header concise.`, `Use it for array and sequence iteration.`];
        } else if (key.includes('break')) {
            data.overview = `The break statement exits the nearest enclosing loop or switch statement immediately.`;
            data.why = `break is useful for terminating loops early when a condition is met or when no further processing is needed.`;
            data.theory.beginner = `Beginner: Use break inside a loop to stop iterating before the loop condition becomes false.`;
            data.theory.intermediate = `Intermediate: Learn when break improves clarity versus when it creates confusing control flow.`;
            data.theory.advanced = `Advanced: Use break intentionally to simplify loop logic and avoid deeply nested conditions.`;
            data.syntax = `for (int i = 0; i < n; i++) { if (found) break; }`;
            data.commonMistakes = [`Using break too often and making loops hard to follow.`, `Assuming break exits multiple nested loops.`, `Overusing break instead of writing clearer conditions.`];
            data.bestPractices = [`Use break for early exit when it simplifies logic.`, `Keep loops readable even when break is present.`, `Document why the break occurs if it is not obvious.`];
            data.interview = {
                beginner: [`What does break do in a loop?`, `Where can break be used?`],
                intermediate: [`Does break exit all nested loops?`, `When should you use break?`],
                advanced: [`How does break affect readability and maintainability?`, `What alternatives exist to break?`],
            };
            data.exercises = {
                easy: `Use break to exit a loop when a condition is true.`,
                medium: `Search an array and break when a match is found.`,
                hard: `Refactor code to avoid unnecessary breaks while keeping behavior.`,
                interview: `Describe when break is appropriate in loop logic.`,
            };
            data.assignment = `Write a search loop that breaks when a target is found and prints the result.`;
            data.miniProject = `Build a simple search utility that stops early when it locates a value.`;
            data.summary = [`break exits the nearest loop.`, `Use it for early loop termination.`, `Avoid overusing it in complex logic.`];
        } else if (key.includes('continue')) {
            data.overview = `The continue statement skips the rest of the current loop iteration and moves to the next one.`;
            data.why = `continue is useful when you want to ignore invalid or unnecessary cases without exiting the loop entirely.`;
            data.theory.beginner = `Beginner: Use continue inside a loop to skip the remaining statements for this iteration.`;
            data.theory.intermediate = `Intermediate: Understand how continue affects loop control and where it is best used for readability.`;
            data.theory.advanced = `Advanced: Avoid heavy use of continue in complex loops, and prefer simple conditions when possible.`;
            data.syntax = `for (int i = 0; i < n; i++) { if (skip) continue; ... }`;
            data.commonMistakes = [`Using continue in deeply nested loops and losing track of flow.`, `Assuming continue exits the entire loop.`, `Overusing continue instead of clearer conditionals.`];
            data.bestPractices = [`Use continue for simple, obvious skips.`, `Keep loop bodies easy to follow.`, `Avoid continue when it hides logic flow.`];
            data.interview = {
                beginner: [`What does continue do in a loop?`, `Can continue be used in any loop?`],
                intermediate: [`How does continue affect the loop update step?`, `When should you avoid continue?`],
                advanced: [`How can continue impact readability and optimization?`, `What is the difference between break and continue?`],
            };
            data.exercises = {
                easy: `Use continue to skip negative values in a loop.`,
                medium: `Collect only valid inputs using continue to ignore invalid ones.`,
                hard: `Refactor a loop that uses continue to preserve clarity.`,
                interview: `Explain how continue changes loop execution.`,
            };
            data.assignment = `Write a loop that skips over invalid data using continue and processes the rest normally.`;
            data.miniProject = `Build a data filter that removes unwanted values from input using continue.`;
            data.summary = [`continue skips the rest of the current iteration.`, `Use it for clear early exits from loop bodies.`, `Avoid confusing use in complex loops.`];
        } else if (key.includes('goto')) {
            data.overview = `The goto statement jumps to a labeled statement, providing an unconditional branch within a function.`;
            data.why = `goto is rarely recommended, but it can simplify cleanup code in error-handling paths and legacy code.`;
            data.theory.beginner = `Beginner: Use goto label; to jump to a labeled statement. It bypasses structured control flow and should be used sparingly.`;
            data.theory.intermediate = `Intermediate: Understand why most code avoids goto and how it can make flow harder to follow. Use it only for simple cleanup or state-machine code when necessary.`;
            data.theory.advanced = `Advanced: Recognize patterns where goto is acceptable, such as breaking out of nested loops or implementing error handling in low-level C code.`;
            data.syntax = `if (error) goto cleanup; ... cleanup: // handle cleanup`;
            data.commonMistakes = [`Using goto for general flow control instead of structured loops.`, `Creating spaghetti code with many jumps.`, `Jumping across variable initializations and scoping boundaries incorrectly.`];
            data.bestPractices = [`Avoid goto unless it clearly simplifies error handling.`, `Use a single cleanup label in resource-managed code.`, `Keep the jump target local and easy to understand.`];
            data.interview = {
                beginner: [`What does goto do in C?`, `Why is goto usually discouraged?`],
                intermediate: [`When might goto be acceptable?`, `What are the dangers of using goto?`],
                advanced: [`How can goto be used safely in cleanup or state-machine code?`, `What are alternatives to goto for nested control flow?`],
            };
            data.exercises = {
                easy: `Write a simple function that uses goto to jump to cleanup code.`,
                medium: `Convert a nested loop with goto into more structured control flow.`,
                hard: `Analyze a small code sample that uses goto and explain its flow.`,
                interview: `Discuss the pros and cons of using goto in C.`,
            };
            data.assignment = `Use goto in a simple error-handling example and document why it was appropriate.`;
            data.miniProject = `Build a small resource cleanup module with a single goto-based cleanup path.`;
            data.summary = [`goto jumps to a labeled statement.`, `Use it sparingly and only when it improves clarity.`, `Avoid using it for general control flow.`];
        }
    } else if (section === '07_PATTERN_PROGRAMMING') {
        data.overview = `Pattern programming uses loops and output formatting to create visual designs with text.`;
        data.why = `It helps practice nested loops, control flow, and output formatting while building confidence with algorithmic thinking.`;
        data.theory.beginner = `Beginner: Patterns are created by printing characters in rows and columns. Start with simple star or number patterns and observe how loops control the output.`;
        data.theory.intermediate = `Intermediate: Use nested loops, conditional logic, and variable spacing to build more complex patterns and shapes.`;
        data.theory.advanced = `Advanced: Combine patterns with functions, user input, and dynamic sizes to create reusable pattern generators.`;
        data.syntax = `Pattern code typically uses nested for loops, conditional printing, and formatted output.`;
        data.commonMistakes = [`Getting loop boundaries wrong and printing the wrong number of characters.`, `Forgetting to reset counters in nested loops.`, `Using hard-coded sizes instead of variables.`];
        data.bestPractices = [`Solve patterns with clear loop structure.`, `Use helper functions to separate pattern logic.`, `Test patterns with multiple input sizes.`];
        data.interview = {
            beginner: [`What is pattern programming in C?`, `How do nested loops help draw patterns?`],
            intermediate: [`How do you control spacing in star patterns?`, `What is the role of nested loops in pattern design?`],
            advanced: [`How would you build a reusable pattern generator function?`, `How can you optimize pattern code for clarity?`],
        };
        data.exercises = {
            easy: `Print a simple star pattern using nested loops.`,
            medium: `Create a number pattern with aligned columns.`,
            hard: `Build a dynamic pattern generator that uses user input for size.`,
            interview: `Explain how nested loops produce structured output patterns.`,
        };
        data.assignment = `Implement a pattern generator that prints a chosen shape based on user input.`;
        data.miniProject = `Create a menu-driven pattern printing program with several design options.`;
        data.summary = [`Pattern programming practices loops and formatting.`, `Nested loops are the key tool.`, `Keep pattern logic structured and parametrized.`];
        if (key.includes('star patterns')) data.overview = `Learn to build classic star patterns using nested loops and spacing.`;
        if (key.includes('number patterns')) data.overview = `Explore number-based patterns that combine loops and arithmetic output.`;
        if (key.includes('character patterns')) data.overview = `Create patterns using letters and symbols to practice character output. `;
        if (key.includes('advanced patterns')) data.overview = `Build more complex patterns that use nested loops, arithmetic, and conditional formatting.`;
    } else if (section === '08_FUNCTIONS') {
        // Similar section-specific cases for functions
        if (key.includes('function basics')) {
            data.overview = `Functions let you encapsulate reusable blocks of code with a name and parameters.`;
            data.why = `Functions improve modularity, readability, and reuse in C programs. They are the building blocks of structured code.`;
            data.theory.beginner = `Beginner: A function is declared with a return type, name, and parameter list. The main function can call other functions to perform work.`;
            data.theory.intermediate = `Intermediate: Learn about function prototypes, parameter passing, and how functions separate logic from implementation.`;
            data.theory.advanced = `Advanced: Explore how functions affect program structure, maintainability, and how they interact with the call stack and memory.`;
            data.syntax = `int add(int a, int b) { return a + b; }`;
            data.commonMistakes = [`Forgetting to declare a function prototype before use.`, `Using the wrong return type.`, `Mixing up parameter order or types.`];
            data.bestPractices = [`Keep functions small and focused.`, `Use clear names and parameter lists.`, `Document function behavior and return values.`];
            data.interview = {
                beginner: [`What is a function in C?`, `How do you call a function?`],
                intermediate: [`Why use function prototypes?`, `What is the difference between declaration and definition?`],
                advanced: [`How do functions affect the call stack?`, `What makes a function reusable and testable?`],
            };
            data.exercises = {
                easy: `Write a function that returns the sum of two numbers.`,
                medium: `Call a helper function from main with different inputs.`,
                hard: `Refactor a repeating code block into a reusable function.`,
                interview: `Explain why functions are useful for structuring C programs.`,
            };
            data.assignment = `Implement several small functions for arithmetic and call them from main.`;
            data.miniProject = `Build a small program that uses functions for separate tasks like input, processing, and output.`;
            data.summary = [`Functions encapsulate logic.`, `Use them to make code modular and reusable.`, `Declare prototypes when functions are used before their definitions.`];
        } else if (key.includes('function arguments')) {
            data.overview = `Function arguments are values passed into functions so they can operate on different data.`;
            data.why = `Arguments make functions reusable and flexible instead of hard-coding values inside them.`;
            data.theory.beginner = `Beginner: Define a function with parameters and call it with arguments, such as int add(int a, int b).`;
            data.theory.intermediate = `Intermediate: Understand how arguments are matched to parameters by position and how passing by value works.`;
            data.theory.advanced = `Advanced: Use arguments to write reusable functions and know how data is copied into parameter variables on the stack.`;
            data.syntax = `int add(int a, int b) { return a + b; }`;
            data.commonMistakes = [`Passing arguments in the wrong order.`, `Using incompatible types without casting.`, `Expecting changes to the original variable when passing by value.`];
            data.bestPractices = [`Use descriptive parameter names.`, `Keep argument lists short and meaningful.`, `Document expected argument types and behavior.`];
            data.interview = {
                beginner: [`What is a function argument?`, `How do arguments relate to parameters?`],
                intermediate: [`How are arguments passed to functions in C?`, `What happens when you pass an int argument?`],
                advanced: [`Why does C use pass-by-value for arguments?`, `How can you modify caller data using function arguments?`],
            };
            data.exercises = {
                easy: `Write a function with two arguments and call it from main.`,
                medium: `Create a function that accepts multiple argument types.`,
                hard: `Design a function that uses arguments to configure its behavior.`,
                interview: `Explain how function arguments are passed in C.`,
            };
            data.assignment = `Implement functions with arguments for different operations, and test them with sample inputs.`;
            data.miniProject = `Build a calculator program where each operation is a separate function with arguments.`;
            data.summary = [`Function arguments provide inputs to functions.`, `They are passed by value in C.`, `Use clear parameter names and types.`];
        } else if (key.includes('return values')) {
            data.overview = `Return values let a function send results back to its caller in C.`;
            data.why = `Functions become useful building blocks when they can compute and return values.`;
            data.theory.beginner = `Beginner: A function uses return to provide a value, such as int add(int a, int b) { return a + b; }.`;
            data.theory.intermediate = `Intermediate: Understand that only one return value is returned directly, and how to use pointers or structs for multiple outputs.`;
            data.theory.advanced = `Advanced: Use return values carefully to avoid returning pointers to local variables and to manage error reporting.`;
            data.syntax = `int result = add(2, 3);`;
            data.commonMistakes = [`Returning a pointer to a local variable.`, `Using the wrong return type.`, `Not returning a value from a non-void function.`];
            data.bestPractices = [`Match return types to the data being returned.`, `Use return for early exits when appropriate.`, `Avoid returning invalid pointers or references.`];
            data.interview = {
                beginner: [`What does return do in a function?`, `How do you receive a function's return value?`],
                intermediate: [`What happens if a non-void function reaches the end without return?`, `How do you return multiple values in C?`],
                advanced: [`Why is returning a pointer to a local variable unsafe?`, `How do return values influence function design?`],
            };
            data.exercises = {
                easy: `Write a function that returns the sum of two numbers.`,
                medium: `Use a function return value in an expression.`,
                hard: `Implement a function that returns an error code and document it.`,
                interview: `Explain the purpose of return values in functions.`,
            };
            data.assignment = `Create functions that compute results and return them to main for display.`;
            data.miniProject = `Build a program with multiple functions where each returns a calculated value.`;
            data.summary = [`Return values pass results back to the caller.`, `Only one value is returned directly.`, `Avoid returning invalid pointer values.`];
        } else if (key.includes('local global variables')) {
            const topic = 'Local and Global Variables';
            data.overview = `Explore the difference between local and global variables and how scope affects visibility in C.`;
            data.why = `Managing scope correctly prevents name clashes and makes programs easier to understand and maintain.`;
            data.theory.beginner = `Beginner: Local variables exist inside a block or function, while global variables are declared outside any function and are visible throughout the file.`;
            data.theory.intermediate = `Intermediate: Learn how scope and lifetime differ for local and global variables, and how extern can share globals across files.`;
            data.theory.advanced = `Advanced: Restrict global variables to only where they are necessary, and prefer local variables or function parameters for safer design.`;
            data.syntax = `int count; // global\nint main(void) { int value = 0; ... }`;
            data.commonMistakes = [`Overusing global variables and creating hidden dependencies.`, `Assuming local variables persist between function calls.`, `Using extern without understanding linkage.`];
            data.bestPractices = [`Prefer local variables when possible.`, `Keep global variables minimal and well-documented.`, `Use static or extern appropriately for cross-file access.`];
            data.interview = {
                beginner: [`What is the difference between local and global variables?`, `Where is a local variable stored?`],
                intermediate: [`How does extern work with global variables?`, `What is variable lifetime?`],
                advanced: [`Why is it better to minimize global variables?`, `How can globals affect thread safety?`],
            };
            data.exercises = {
                easy: `Declare one global and one local variable and print both.`,
                medium: `Use a global variable across two functions in the same file.`,
                hard: `Refactor a program to reduce the use of global variables.`,
                interview: `Explain the tradeoffs of local versus global variables.`,
            };
            data.assignment = `Build a program that uses both local and global variables and documents their scope.`;
            data.miniProject = `Create a configuration or state tracker using a minimal set of globals for shared state.`;
            data.summary = [`Local variables are limited in scope.`, `Global variables are accessible across functions.`, `Use globals sparingly and document them.`];
        } else if (key.includes('call by value')) {
            data.overview = `Call by value passes a copy of data to functions rather than the original variable.`;
            data.why = `Understanding call by value explains why changes inside a function do not affect the caller's variables by default.`;
            data.theory.beginner = `Beginner: In C, function arguments are passed by value, meaning the function receives a copy of each argument.`;
            data.theory.intermediate = `Intermediate: Learn how changes to parameters affect only the local copy and not the original argument.`;
            data.theory.advanced = `Advanced: Use pointers when you need to modify caller data, and understand the memory layout of copied arguments.`;
            data.syntax = `void update(int x) { x = x + 1; }`;
            data.commonMistakes = [`Expecting a function to modify the original argument without using a pointer.`, `Passing arrays incorrectly and misunderstanding how pointers work.`, `Confusing call by value with call by reference.`];
            data.bestPractices = [`Use clear names to distinguish local parameters from caller variables.`, `Pass pointers or structs when you need to update data.`, `Document whether a function modifies its arguments.`];
            data.interview = {
                beginner: [`What does call by value mean in C?`, `Why does changing a parameter not change the original variable?`],
                intermediate: [`How can you modify a value in the caller from a function?`, `What happens when you pass an array to a function?`],
                advanced: [`How does call by value impact performance for large structs?`, `When does C effectively use call by reference through pointers?`],
            };
            data.exercises = {
                easy: `Write a function that takes an int parameter and change it inside the function.`,
                medium: `Show that the original variable retains its value after the function call.`,
                hard: `Convert the function to use pointers to modify the caller's value.`,
                interview: `Explain call by value with a code example.`,
            };
            data.assignment = `Create a function that receives values by copy and demonstrate the behavior clearly.`;
            data.miniProject = `Build a small C module that uses call by value for read-only arguments and pointers for updates.`;
            data.summary = [`C uses call by value for function arguments.`, `The caller's original data is not modified unless pointers are used.`, `Use pointers for functions that need to change caller state.`];
        } else if (key.includes('call by reference')) {
            data.overview = `Call by reference uses pointers to allow a function to modify data in the caller's scope.`;
            data.why = `This is essential when functions need to update values, return multiple results, or work with large data structures efficiently.`;
            data.theory.beginner = `Beginner: Pass the address of a variable using & and receive it as a pointer parameter. The function can then modify the original value.`;
            data.theory.intermediate = `Intermediate: Understand pointer syntax, dereferencing with *, and how call by reference differs from call by value.`;
            data.theory.advanced = `Advanced: Use call by reference for efficient data updates, avoid null pointer errors, and understand pointer aliasing.`;
            data.syntax = `void update(int *p) { *p = *p + 1; }`;
            data.commonMistakes = [`Passing a pointer that is not initialized.`, `Dereferencing NULL or invalid pointers.`, `Confusing & and * in the function call and definition.`];
            data.bestPractices = [`Validate pointer arguments before use.`, `Use clear naming like ptr or outValue.`, `Document whether a function modifies its arguments.`];
            data.interview = {
                beginner: [`What is call by reference in C?`, `How do you pass a variable by reference?`],
                intermediate: [`Why use pointers to modify caller data?`, `What does * do with a pointer parameter?`],
                advanced: [`How can call by reference improve performance?`, `What are the risks of using pointer parameters?`],
            };
            data.exercises = {
                easy: `Write a function that increments a variable through a pointer.`,
                medium: `Use call by reference to swap two values.`,
                hard: `Implement a function that fills an array through a pointer argument.`,
                interview: `Explain call by reference with an example.`,
            };
            data.assignment = `Build a function that modifies multiple values using pointer arguments.`,
            data.miniProject = `Create a small utility that sorts or updates data using call-by-reference functions.`;
            data.summary = [`Call by reference uses pointers to modify caller data.`, `Always validate pointer arguments.`, `Use it for efficient updates and multi-result functions.`];
        } else if (key.includes('recursion')) {
            data.overview = `Recursion is when a function calls itself to solve a problem by breaking it into smaller parts.`;
            data.why = `Recursion is a powerful technique for solving problems with repetitive structure, such as factorials, Fibonacci, and tree traversal.`;
            data.theory.beginner = `Beginner: A recursive function has a base case and a recursive step that calls itself with smaller or simpler input.`;
            data.theory.intermediate = `Intermediate: Understand how recursion uses the call stack and why base cases are required to stop the recursion.`;
            data.theory.advanced = `Advanced: Learn how recursion can be converted to iteration, and how to manage stack depth and performance in recursive algorithms.`;
            data.syntax = `int factorial(int n) { if (n <= 1) return 1; return n * factorial(n - 1); }`;
            data.commonMistakes = [`Omitting a base case and causing infinite recursion.`, `Using recursion for problems better solved with iteration.`, `Ignoring stack overflow risks for deep recursion.`];
            data.bestPractices = [`Define a clear base case first.`, `Keep recursive functions simple and avoid excessive state.`, `Use recursion when it makes the solution more readable.`];
            data.interview = {
                beginner: [`What is recursion?`, `What is a base case?`],
                intermediate: [`How does recursion use the call stack?`, `Why must a recursive function have a base case?`],
                advanced: [`When should you avoid recursion?`, `How do you convert recursion into iteration?`],
            };
            data.exercises = {
                easy: `Write a recursive factorial function.`,
                medium: `Implement a recursive Fibonacci generator.`,
                hard: `Use recursion to traverse a simple tree or directory-like structure.`,
                interview: `Explain how recursion works and what happens on the stack.`,
            };
            data.assignment = `Create a recursive function for a mathematical or structural problem and document the base case and recursive step.`;
            data.miniProject = `Build a small recursive algorithm, such as computing combinations or traversing nested data.`;
            data.summary = [`Recursion solves problems by self-calling functions.`, `Always include a base case.`, `Be aware of stack limits and performance.`];
        } else if (key.includes('tail recursion')) {
            data.overview = `Tail recursion is a recursive function whose final action is a recursive call, allowing some compilers to optimize it.`;
            data.why = `Understanding tail recursion helps write efficient recursive functions and recognize when recursion can be transformed into iteration.`;
            data.theory.beginner = `Beginner: Tail recursion occurs when the recursive call is the last operation in the function, with no additional work afterward.`;
            data.theory.intermediate = `Intermediate: Learn why tail recursion can be optimized by compilers and how it differs from regular recursion.`;
            data.theory.advanced = `Advanced: Use tail recursion when possible to reduce stack usage, and know when the compiler performs tail-call optimization.`;
            data.syntax = `int sum(int n, int total) { if (n == 0) return total; return sum(n - 1, total + n); }`;
            data.commonMistakes = [`Adding work after the recursive call, which prevents tail-call optimization.`, `Relying on compiler optimization that may not be available.`, `Using tail recursion where simple iteration is clearer.`];
            data.bestPractices = [`Write tail-recursive functions when recursion is still the right abstraction.`, `Prefer iteration if it is simpler and clearer.`, `Document the recursion style and expected stack behavior.`];
            data.interview = {
                beginner: [`What is tail recursion?`, `How is tail recursion different from regular recursion?`],
                intermediate: [`Why can tail recursion be optimized?`, `Give an example of a tail-recursive function.`],
                advanced: [`Does C guarantee tail-call optimization?`, `How do you convert a recursive algorithm to a tail-recursive form?`],
            };
            data.exercises = {
                easy: `Write a tail-recursive factorial function.`,
                medium: `Rewrite a simple recursive function in tail-recursive form.`,
                hard: `Compare a tail recursive implementation with an iterative equivalent.`,
                interview: `Explain why tail recursion can be more efficient than ordinary recursion.`,
            };
            data.assignment = `Implement a tail-recursive function and describe how it differs from a standard recursive version.`;
            data.miniProject = `Create a tail-recursive solution for a counting or accumulation problem.`;
            data.summary = [`Tail recursion calls itself as the last action.`, `It can be optimized by compilers.`, `Use it carefully and prefer clarity.`];
        }
    } else if (section === '09_ARRAYS') {
        if (key === '1d array') {
            data.overview = `Learn one-dimensional arrays for storing sequences of values in C.`;
            data.why = `Arrays are the simplest way to store and access multiple values in a single variable.`;
            data.theory.beginner = `Beginner: A 1D array stores values in contiguous memory. Access elements with index notation like arr[0].`;
            data.theory.intermediate = `Intermediate: Understand how arrays and pointers are related, and how to iterate over elements with loops.`;
            data.theory.advanced = `Advanced: Use arrays efficiently, avoid out-of-bounds access, and prefer size constants or macros for maintainability.`;
            data.syntax = `int arr[5] = {1, 2, 3, 4, 5};`;
            data.commonMistakes = [`Accessing arr[5] in a five-element array.`, `Forgetting array bounds when looping.`, `Treating arrays like dynamically resizable containers.`];
            data.bestPractices = [`Use named constants for array sizes.`, `Initialize arrays when possible.`, `Use loops to process array elements safely.`];
            data.interview = {
                beginner: [`What is a one-dimensional array?`, `How do you access an array element?`],
                intermediate: [`How are arrays stored in memory?`, `What happens when you go out of bounds?`],
                advanced: [`How does array decay to a pointer in function calls?`, `Why are arrays not bounds-checked in C?`],
            };
            data.exercises = {
                easy: `Declare a 1D array and print its elements.`,
                medium: `Use a loop to sum array values.`,
                hard: `Implement a function that finds the maximum value in an array.`,
                interview: `Explain the relationship between arrays and pointers.`,
            };
            data.assignment = `Write a program that reads values into an array and computes summary statistics.`;
            data.miniProject = `Build a small array-based utility such as average, min/max, or search.`;
            data.summary = [`1D arrays store values contiguously.`, `Use loops to access array elements.`, `Avoid out-of-bounds access.`];
        } else if (key === '2d array') {
            data.overview = `Study two-dimensional arrays for representing tables and matrices in C.`;
            data.why = `2D arrays are useful for grids, matrix math, and structured data with rows and columns.`;
            data.theory.beginner = `Beginner: A 2D array is an array of arrays. Access elements with arr[row][col].`;
            data.theory.intermediate = `Intermediate: Understand memory layout for 2D arrays and how nested loops iterate rows and columns.`;
            data.theory.advanced = `Advanced: Use 2D arrays for matrix operations, and be mindful of row-major order and pointer compatibility.`;
            data.syntax = `int matrix[3][3] = {{1,2,3}, {4,5,6}, {7,8,9}};`;
            data.commonMistakes = [`Mixing up row and column indexes.`, `Assuming a 2D array is a true dynamically resizable matrix.`, `Using wrong bounds in nested loops.`];
            data.bestPractices = [`Use constants for row and column sizes.`, `Keep loops simple and well-nested.`, `Document the meaning of each dimension.`];
            data.interview = {
                beginner: [`How do you declare a 2D array?`, `How do you access element [1][2]?`],
                intermediate: [`What is row-major order?`, `How do you loop through a 2D array?`],
                advanced: [`How can you pass a 2D array to a function?`, `What are the limits of static 2D arrays in C?`],
            };
            data.exercises = {
                easy: `Declare and initialize a 2D array and print its values.`,
                medium: `Use nested loops to compute row or column sums.`,
                hard: `Implement matrix addition or transpose using a 2D array.`,
                interview: `Describe how a 2D array is stored in memory.`,
            };
            data.assignment = `Create a program that processes a 2D array of numbers and prints results.`,
            data.miniProject = `Build a matrix utility that adds, multiplies, or transposes 2D arrays.`,
            data.summary = [`2D arrays represent row/column data.`, `Use nested loops to access elements.`, `Be aware of row-major order.`];
        } else if (key.includes('multidimensional array')) {
            data.overview = `Multidimensional arrays extend the array concept to three or more dimensions for complex data structures.`;
            data.why = `They are useful for advanced data representations such as 3D grids, multi-channel datasets, and higher-dimensional models.`;
            data.theory.beginner = `Beginner: A multidimensional array has multiple bracketed dimensions, such as int cube[2][3][4].`;
            data.theory.intermediate = `Intermediate: Learn how nested loops traverse each dimension and how memory layout is computed.`;
            data.theory.advanced = `Advanced: Use multidimensional arrays carefully because complexity grows quickly, and consider flattening to 1D arrays when performance matters.`;
            data.syntax = `int cube[2][3][4];`;
            data.commonMistakes = [`Getting the dimensions in the wrong order.`, `Using overly deep nested loops without structure.`, `Assuming multidimensional arrays are dynamically sized.`];
            data.bestPractices = [`Use meaningful dimension names and constants.`, `Keep loops manageable and consider helper functions.`, `Choose the right dimensionality for the problem.`];
            data.interview = {
                beginner: [`How do you declare a 3D array in C?`, `How many indexes does a 3D array use?`],
                intermediate: [`How do you traverse a multidimensional array?`, `What is the memory layout of a 3D array?`],
                advanced: [`When should you flatten a multidimensional array?`, `How do dimension sizes affect memory usage?`],
            };
            data.exercises = {
                easy: `Declare a 3D array and set a few values.`,
                medium: `Use nested loops to print elements of a 3D array.`,
                hard: `Create a simple 3D data structure for a small problem.`,
                interview: `Explain the challenges of multidimensional arrays.`,
            };
            data.assignment = `Build a program that stores and prints a small multidimensional dataset.`,
            data.miniProject = `Implement a 3D grid or voxel-style data processor.`,
            data.summary = [`Multidimensional arrays extend arrays to higher dimensions.`, `Use nested loops and constants.`, `Think carefully about memory and readability.`];
        } else if (key.includes('searching')) {
            data.overview = `Searching algorithms scan arrays to find values or determine if a value exists.`;
            data.why = `Searching is a common operation in programs, and efficient search improves performance on large datasets.`;
            data.theory.beginner = `Beginner: Linear search checks each array element until a match is found. It is simple and works on unsorted arrays.`;
            data.theory.intermediate = `Intermediate: Learn when binary search is faster for sorted arrays and how it reduces comparisons.`;
            data.theory.advanced = `Advanced: Choose the right search algorithm for the problem, considering array organization, cost, and code clarity.`;
            data.syntax = `for (int i = 0; i < n; i++) { if (arr[i] == target) return i; }`;
            data.commonMistakes = [`Searching an unsorted array with binary search.`, `Using wrong loop boundaries.`, `Not handling the case when the value is not found.`];
            data.bestPractices = [`Use linear search for small or unsorted data.`, `Use binary search only on sorted arrays.`, `Handle the not-found case explicitly.`];
            data.interview = {
                beginner: [`What is linear search?`, `How do you search an array for a value?`],
                intermediate: [`What is binary search and when can it be used?`, `How does array sorting affect search choice?`],
                advanced: [`What are the time complexities of linear and binary search?`, `How would you search a custom data structure efficiently?`],
            };
            data.exercises = {
                easy: `Implement a linear search function for an array.`,
                medium: `Search an array for a target value and report its index.`,
                hard: `Implement binary search on a sorted array and compare it to linear search.`,
                interview: `Discuss the benefits of binary search over linear search.`,
            };
            data.assignment = `Build a search utility that finds values in an array and reports success or failure.`;
            data.miniProject = `Create a small search benchmark comparing linear and binary search on sample data.`;
            data.summary = [`Searching finds values in arrays.`, `Use the right algorithm for the data organization.`, `Binary search is faster on sorted arrays.`];
        } else if (key.includes('sorting')) {
            data.overview = `Sorting arranges array elements in a defined order, such as ascending or descending.`;
            data.why = `Sorted data enables faster search, predictable output, and many algorithmic optimizations.`;
            data.theory.beginner = `Beginner: Learn simple sorting techniques like bubble sort and selection sort for small arrays.`;
            data.theory.intermediate = `Intermediate: Understand the difference between stable and unstable sorts and how to evaluate sorting performance.`;
            data.theory.advanced = `Advanced: Explore efficient algorithms like quick sort and merge sort, and learn when to use each based on data size.`;
            data.syntax = `Buble sort example uses nested loops to swap adjacent elements until the array is ordered.`;
            data.commonMistakes = [`Using inefficient sorts for large arrays.`, `Forgetting to reset state in nested loops.`, `Mixing up comparison directions for ascending vs descending order.`];
            data.bestPractices = [`Choose the simplest algorithm that is fast enough.`, `Test sorting with already sorted and reverse-sorted data.`, `Keep comparisons clear and consistent.`];
            data.interview = {
                beginner: [`What does it mean to sort an array?`, `Name a simple sorting algorithm.`],
                intermediate: [`What is bubble sort and how does it work?`, `What is the difference between stable and unstable sorting?`],
                advanced: [`When should you use merge sort or quick sort?`, `How does sorting complexity affect large datasets?`],
            };
            data.exercises = {
                easy: `Implement bubble sort for a small array.`,
                medium: `Use selection sort or insertion sort to sort values.`,
                hard: `Compare the performance of two sorting algorithms on sample data.`,
                interview: `Explain why some sorting algorithms are faster than others.`,
            };
            data.assignment = `Implement a sorting algorithm and test it with several input sets.`;
            data.miniProject = `Build a sort-and-search program that sorts an array and then searches for values.`;
            data.summary = [`Sorting orders array elements.`, `Use appropriate sorting algorithms for the data size.`, `Understand basic sort complexity.`];
        }
    } else if (section === '10_STRINGS') {
        if (key.includes('string basics')) {
            data.overview = `Strings in C are arrays of characters terminated by a null character.`;
            data.why = `Strings are essential for text handling, user messages, and data input/output.`;
            data.theory.beginner = `Beginner: Understand that a C string is a char array ending with '\0'. This is the basis for all text manipulation in C.`;
            data.theory.intermediate = `Intermediate: Learn how to initialize strings, read them, and avoid buffer overflow.`;
            data.theory.advanced = `Advanced: Use string functions carefully and understand memory layout when manipulating strings.`;
            data.syntax = `char name[20] = "C Programmer";`;
            data.commonMistakes = [`Forgetting the null terminator.`, `Reading more characters than the buffer can hold.`, `Using strcpy without ensuring enough space.`];
            data.bestPractices = [`Reserve one extra character for '\0'.`, `Use safe string functions when possible.`, `Initialize strings before use.`];
            data.interview = {
                beginner: [`What is a string in C?`, `How is a string terminated?`],
                intermediate: [`Why does a char array need \0?`, `How do you print a string?`],
                advanced: [`What are the dangers of string buffer overflow?`, `How do C strings differ from strings in higher-level languages?`],
            };
            data.exercises = {
                easy: `Declare a string and print it.`,
                medium: `Read a string from input and display it.`,
                hard: `Join two strings manually using character operations.`,
                interview: `Explain how a C string is stored in memory.`,
            };
            data.assignment = `Write a program that stores and prints a user name using a char array.`;
            data.miniProject = `Create a small text-based greeting tool that uses strings for input and output.`;
            data.summary = [`C strings are char arrays ending with \0.`, `Always allocate enough space.`, `Be careful with string operations to avoid overflow.`];
        } else if (key.includes('strlen')) {
            data.overview = `strlen calculates the length of a C string by counting characters before the null terminator.`;
            data.why = `Knowing string length is essential for loops, buffer handling, and many string operations.`;
            data.theory.beginner = `Beginner: strlen returns the number of characters before '\0' in a char array. It does not count the terminator.`;
            data.theory.intermediate = `Intermediate: Use strlen to determine loop bounds and allocate memory safely for string manipulation.`;
            data.theory.advanced = `Advanced: Understand that strlen runs in O(n) time and should be used carefully inside loops to avoid repeated scans.`;
            data.syntax = `size_t len = strlen(str);`;
            data.commonMistakes = [`Using strlen on a non-null-terminated array.`, `Calling strlen repeatedly in a loop unnecessarily.`, `Confusing length with buffer capacity.`];
            data.bestPractices = [`Store strlen results if you need the length multiple times.`, `Ensure the string is null-terminated before calling strlen.`, `Use sizes consistently with buffer allocations.`];
            data.interview = {
                beginner: [`What does strlen do?`, `What value does strlen return?`],
                intermediate: [`Why should you not modify the string while using strlen?`, `Is strlen a constant-time operation?`],
                advanced: [`How can repeated calls to strlen affect performance?`, `What happens if a string is not null-terminated?`],
            };
            data.exercises = {
                easy: `Use strlen to print the length of a string.`,
                medium: `Read a string and display its length.`,
                hard: `Use strlen to validate string length before copying it.`,
                interview: `Explain why strlen is O(n) time.`,
            };
            data.assignment = `Build a program that reads a string and prints its length using strlen.`;
            data.miniProject = `Create a small string analyzer that reports length, word count, and character categories.`;
            data.summary = [`strlen counts characters before \0.`, `It is linear time.`, `Use it carefully with buffer sizes.`];
        } else if (key.includes('strcpy')) {
            data.overview = `strcpy copies a null-terminated source string into a destination buffer.`;
            data.why = `Copying strings is a common task, and strcpy demonstrates how C manages raw character arrays.`;
            data.theory.beginner = `Beginner: strcpy(dest, src) copies each character, including the null terminator, from src to dest.`;
            data.theory.intermediate = `Intermediate: Ensure the destination buffer is large enough to hold the source string and the null terminator.`;
            data.theory.advanced = `Advanced: Recognize the dangers of strcpy when buffer sizes are unknown, and prefer safer alternatives when available.`;
            data.syntax = `char dest[20]; strcpy(dest, src);`;
            data.commonMistakes = [`Using strcpy with a destination that is too small.`, `Forgetting that strcpy overwrites the destination.`, `Using strcpy with overlapping source and destination buffers.`];
            data.bestPractices = [`Allocate enough space for the destination string.`, `Use strncpy or safer functions if buffer size is a concern.`, `Always ensure source strings are null-terminated.`];
            data.interview = {
                beginner: [`What does strcpy do?`, `Why do you need enough space for the destination?`],
                intermediate: [`What are the risks of strcpy?`, `How does strcpy handle the null terminator?`],
                advanced: [`When would you use strncpy instead of strcpy?`, `Why can strcpy cause security problems?`],
            };
            data.exercises = {
                easy: `Copy one string to another using strcpy.`,
                medium: `Read a string and copy it into a buffer safely.`,
                hard: `Compare strcpy with strncpy and explain the difference.`,
                interview: `Describe the key safety concerns with strcpy.`,
            };
            data.assignment = `Implement a small string copy demonstration and show how to avoid overflow.`;
            data.miniProject = `Build a string utility that safely copies and manipulates text using character arrays.`;
            data.summary = [`strcpy copies strings including the null terminator.`, `Destination buffers must be large enough.`, `Prefer safer alternatives when possible.`];
        } else if (key.includes('strcat')) {
            data.overview = `strcat appends one string to the end of another in C.`;
            data.why = `String concatenation is useful for building messages, file paths, and combined text values.`;
            data.theory.beginner = `Beginner: strcat(dest, src) appends the source string to the destination string, assuming the destination has enough space.`;
            data.theory.intermediate = `Intermediate: The destination string must already be null-terminated, and you must reserve space for the combined result.`;
            data.theory.advanced = `Advanced: Use strcat carefully to avoid buffer overflow, and prefer safer concatenation techniques when working with untrusted input.`;
            data.syntax = `char dest[50] = "Hello, "; strcat(dest, "world!");`;
            data.commonMistakes = [`Not allocating enough space for the combined string.`, `Using strcat when the destination is not initialized or null-terminated.`, `Overwriting the destination buffer.`];
            data.bestPractices = [`Initialize the destination string and ensure enough capacity.`, `Use strncat or manual loops for safer concatenation.`, `Avoid concatenating too many strings without checking sizes.`];
            data.interview = {
                beginner: [`What does strcat do?`, `What must be true about the destination string before strcat?`],
                intermediate: [`How does strcat handle the null terminator?`, `What is the primary risk of strcat?`],
                advanced: [`How can you safely concatenate strings in C?`, `When should you avoid strcat?`],
            };
            data.exercises = {
                easy: `Append one string to another using strcat.`,
                medium: `Create a greeting by concatenating name and message strings.`,
                hard: `Implement safe concatenation with buffer size checks.`,
                interview: `Explain why strcat can be unsafe.`,
            };
            data.assignment = `Write a program that concatenates strings and ensures the destination buffer is large enough.`;
            data.miniProject = `Build a small message builder that concatenates user input with fixed text safely.`;
            data.summary = [`strcat appends strings.`, `Ensure sufficient space before concatenation.`, `Use safer techniques when needed.`];
        } else if (key.includes('strcmp')) {
            data.overview = `strcmp compares two strings lexicographically and returns a value indicating their ordering.`;
            data.why = `String comparison is crucial for searching, sorting, and validating text data in C.`;
            data.theory.beginner = `Beginner: strcmp returns 0 when strings are equal, a negative value if the first string is smaller, and a positive value if it is larger.`;
            data.theory.intermediate = `Intermediate: Use strcmp for exact comparisons, and understand that it compares character codes sequentially.`;
            data.theory.advanced = `Advanced: Avoid using strcmp for partial matching or when case-insensitive comparison is required without the appropriate function.`;
            data.syntax = `if (strcmp(a, b) == 0) { ... }`;
            data.commonMistakes = [`Comparing strcmp directly to true or false.`, `Ignoring the sign of the return value.`, `Using strcmp for null or uninitialized strings.`];
            data.bestPractices = [`Check for equality with == 0.`, `Use strncmp for limited-length comparisons.`, `Validate strings before comparing them.`];
            data.interview = {
                beginner: [`What does strcmp return when two strings match?`, `How do you compare strings in C?`],
                intermediate: [`What does a negative strcmp result mean?`, `Why is strcmp not suitable for case-insensitive comparison?`],
                advanced: [`How can you compare only the first n characters of two strings?`, `What are common pitfalls of strcmp?`],
            };
            data.exercises = {
                easy: `Compare two strings with strcmp and print whether they match.`,
                medium: `Sort a small list of strings using strcmp.`,
                hard: `Implement case-insensitive comparison using strcmp and manual conversion.`,
                interview: `Explain the return convention of strcmp.`,
            };
            data.assignment = `Create a string comparison program that checks equality and ordering of inputs.`;
            data.miniProject = `Build a small string sorter or searcher that uses strcmp for comparisons.`;
            data.summary = [`strcmp compares strings lexicographically.`, `Check for == 0 for equality.`, `Use it carefully for exact matching.`];
        } else if (key.includes('string programs')) {
            data.overview = `This topic covers common string programming tasks such as concatenation, comparison, searching, and manipulation.`;
            data.why = `String handling is a key skill for text processing, configuration parsing, and user interaction in C programs.`;
            data.theory.beginner = `Beginner: Learn the basic string functions such as strlen, strcpy, strcat, and strcmp, and how strings are stored as char arrays.`;
            data.theory.intermediate = `Intermediate: Use string functions safely, manage buffer sizes, and combine them to perform useful text operations.`;
            data.theory.advanced = `Advanced: Build reusable string utilities and understand performance and safety implications of C string handling.`;
            data.syntax = `char name[50]; strcpy(name, "Hello"); strcat(name, " world");`;
            data.commonMistakes = [`Mixing string and character operations incorrectly.`, `Not reserving enough space for concatenated strings.`, `Using strcpy or strcat unsafely.`];
            data.bestPractices = [`Use safe copying and concatenation practices.`, `Keep string buffers sized appropriately.`, `Test string code with edge cases such as empty and full strings.`];
            data.interview = {
                beginner: [`How do you store text in C?`, `What function returns the length of a string?`],
                intermediate: [`How do you append one string to another?`, `How do you compare two strings?`],
                advanced: [`What are safe alternatives to strcpy and strcat?`, `How do you avoid buffer overflow while handling strings?`],
            };
            data.exercises = {
                easy: `Use string functions to copy and compare strings.`,
                medium: `Build a small string manipulation program with user input.`,
                hard: `Implement a string search or replace function with proper memory safety.`,
                interview: `Describe how C strings are represented and manipulated.`,
            };
            data.assignment = `Write a set of string manipulation examples using C standard library functions.`;
            data.miniProject = `Create a simple text-based utility such as a password checker or word counter.`;
            data.summary = [`String programming is essential for text tasks.`, `Use C string functions with care.`, `Maintain buffer safety and correct termination.`];
        }
    } else if (section === '11_POINTERS') {
        if (key.includes('pointer basics')) {
            data.overview = `Pointers store memory addresses and are a core feature of C programming.`;
            data.why = `Pointers enable dynamic memory, efficient data structures, and direct memory access in C programs.`;
            data.theory.beginner = `Beginner: Learn how to declare a pointer type, assign the address of a variable, and dereference the pointer to access the value.`;
            data.theory.intermediate = `Intermediate: Understand pointer syntax, pointer arithmetic, and how pointers relate to arrays and function arguments.`;
            data.theory.advanced = `Advanced: Use pointers safely, avoid invalid memory access, and understand how pointers are represented at the hardware level.`;
            data.syntax = `int x = 10; int *p = &x; printf("%d\n", *p);`;
            data.commonMistakes = [`Dereferencing a null or uninitialized pointer.`, `Confusing pointer types and pointer arithmetic.`, `Using the address-of operator incorrectly.`];
            data.bestPractices = [`Initialize pointers before use.`, `Use descriptive names for pointers.`, `Validate pointers before dereferencing when uncertain.`];
            data.interview = {
                beginner: [`What is a pointer in C?`, `How do you get the address of a variable?`],
                intermediate: [`What does * do with a pointer?`, `How do pointers relate to arrays?`],
                advanced: [`How can pointers improve performance?`, `What are the dangers of pointer misuse?`],
            };
            data.exercises = {
                easy: `Declare a pointer, assign it to a variable, and print the value via dereference.`,
                medium: `Use a pointer to modify a variable in a function.`,
                hard: `Write a function that takes a pointer and updates the value it points to.`,
                interview: `Explain the relationship between pointers and memory addresses.`,
            };
            data.assignment = `Build a program that demonstrates pointer declaration, assignment, and dereferencing.`;
            data.miniProject = `Create a small example that uses pointers to swap values or traverse an array.`;
            data.summary = [`Pointers store addresses.`, `Dereference them with *.`, `Initialize and validate pointers before use.`];
        } else if (key.includes('pointer arithmetic')) {
            data.overview = `Pointer arithmetic lets you move through memory by adding or subtracting on pointer values.`;
            data.why = `It is useful for iterating arrays, working with buffers, and implementing low-level data structures.`;
            data.theory.beginner = `Beginner: Adding 1 to a pointer advances it to the next element of its pointed-to type. Subtracting moves it backward.`;
            data.theory.intermediate = `Intermediate: Understand how pointer arithmetic depends on the pointed type's size and how to use it safely with arrays.`;
            data.theory.advanced = `Advanced: Use pointer arithmetic in performance-sensitive code, but avoid it when it reduces readability or safety.`;
            data.syntax = `int arr[5]; int *p = arr; p++;`;
            data.commonMistakes = [`Advancing a pointer past the array bounds.`, `Using pointer arithmetic on non-array pointers.`, `Confusing byte offsets with element offsets.`];
            data.bestPractices = [`Use pointer arithmetic only with arrays or allocated blocks.`, `Keep pointer math simple and documented.`, `Prefer array indexing when it is clearer.`];
            data.interview = {
                beginner: [`What happens when you increment a pointer?`, `How does pointer arithmetic relate to array elements?`],
                intermediate: [`Why does p+1 move by sizeof(*p) bytes?`, `How do you iterate an array with a pointer?`],
                advanced: [`What are the dangers of pointer arithmetic across array boundaries?`, `How does pointer comparison work?`],
            };
            data.exercises = {
                easy: `Walk through a small array using pointer increments.`,
                medium: `Use pointer arithmetic to access array elements.`,
                hard: `Implement a function that processes an array using pointers only.`,
                interview: `Explain how pointer arithmetic differs from integer arithmetic.`,
            };
            data.assignment = `Create a program that iterates an array using pointer arithmetic and prints the values.`;
            data.miniProject = `Build a pointer-based array search or copy routine.`;
            data.summary = [`Pointer arithmetic moves by element size.`, `Use it with arrays and allocated blocks.`, `Stay within bounds.`];
        } else if (key.includes('pointers and arrays')) {
            data.overview = `Pointers and arrays are closely related in C, allowing efficient access to sequential data.`;
            data.why = `Understanding this relationship unlocks idiomatic C programming and helps avoid common memory mistakes.`;
            data.theory.beginner = `Beginner: An array name decays to a pointer to its first element, so a pointer can traverse an array.`;
            data.theory.intermediate = `Intermediate: Learn when an array is passed to a function as a pointer, and how indexing and pointer arithmetic both access elements.`;
            data.theory.advanced = `Advanced: Distinguish between arrays stored in fixed memory and pointers that can point to dynamic or arbitrary memory.`;
            data.syntax = `int arr[5]; int *p = arr; printf("%d\n", p[2]);`;
            data.commonMistakes = [`Treating arrays and pointers as always identical.`, `Using sizeof on a decayed pointer to find array length.`, `Passing the wrong pointer type to a function expecting an array.`];
            data.bestPractices = [`Use array syntax for clarity when possible.`, `Pass explicit sizes with pointers to functions.`, `Initialize pointer variables before use.`];
            data.interview = {
                beginner: [`How are arrays and pointers related in C?`, `What does an array name represent when passed to a function?`],
                intermediate: [`Why is sizeof(arr) different inside and outside functions?`, `How do p[i] and *(p + i) relate?`],
                advanced: [`When should you use pointers instead of arrays?`, `How do pointer and array declarations differ?`],
            };
            data.exercises = {
                easy: `Access an array element using both array indexing and pointers.`,
                medium: `Write a function that takes a pointer and a length to process array data.`,
                hard: `Compare array and pointer behavior in function calls.`,
                interview: `Explain the relationship between arrays and pointers in C.`,
            };
            data.assignment = `Create a program that passes an array to a function as a pointer and prints its elements.`;
            data.miniProject = `Build a small array utility using pointer-based traversal.`;
            data.summary = [`Arrays decay to pointers when passed to functions.`, `Pointer arithmetic and array indexing are closely related.`, `Be careful with pointer ownership and array lengths.`];
        } else if (key.includes('pointers and strings')) {
            data.overview = `Pointers and strings work together in C because strings are represented as character arrays, often accessed through pointers.`;
            data.why = `Using pointers for strings is essential for efficient text processing and library functions in C.`;
            data.theory.beginner = `Beginner: A string variable can be treated as a pointer to its first character, and string functions expect char pointers.`;
            data.theory.intermediate = `Intermediate: Learn how string literals and char arrays differ, and how pointers simplify string traversal and manipulation.`;
            data.theory.advanced = `Advanced: Manage string lifetimes and avoid modifying string literals by using writable buffers when necessary.`;
            data.syntax = `char *s = "Hello"; printf("%s\n", s);`;
            data.commonMistakes = [`Modifying a string literal through a char pointer.`, `Confusing char * and char[] for string storage.`, `Using pointer arithmetic incorrectly with strings.`];
            data.bestPractices = [`Use const char * for string literals.`, `Allocate writable buffers for mutable strings.`, `Use library functions for common string operations.`];
            data.interview = {
                beginner: [`How are strings represented in C?`, `What does %s print in printf?`],
                intermediate: [`Why should string literals be const?`, `How do you traverse a string with a pointer?`],
                advanced: [`What are the risks of modifying string literals?`, `How do pointers enable efficient string handling?`],
            };
            data.exercises = {
                easy: `Declare a string and print it using printf.`,
                medium: `Use a pointer to iterate over each character in a string.`,
                hard: `Copy a string using pointer arithmetic and manual loops.`,
                interview: `Explain how pointers are used with strings in C.`,
            };
            data.assignment = `Build a program that uses pointers to read and print a string character by character.`;
            data.miniProject = `Create a small string parser that counts words or characters using pointer traversal.`;
            data.summary = [`Strings are arrays of char accessed with pointers.`, `Use const for string literals.`, `Pointer traversal is a powerful string technique.`];
        } else if (key.includes('double pointers')) {
            data.overview = `Double pointers are pointers to pointers, enabling multiple levels of indirection in C.`;
            data.why = `They are useful for dynamic arrays, pointer arrays, and modifying pointers inside functions.`;
            data.theory.beginner = `Beginner: A double pointer has type int** for a pointer that points to an int*.`;
            data.theory.intermediate = `Intermediate: Learn how to allocate and manage pointers to pointers, such as arrays of string pointers.`;
            data.theory.advanced = `Advanced: Use double pointers for complex data structures, and understand how dereferencing works at each level.`;
            data.syntax = `int x = 10; int *p = &x; int **pp = &p;`;
            data.commonMistakes = [`Confusing *p and **pp dereferencing.`, `Allocating incorrect sizes for pointer arrays.`, `Using double pointers when a single pointer suffices.`];
            data.bestPractices = [`Keep double-pointer logic clear and documented.`, `Use typedefs for complex pointer types when appropriate.`, `Validate pointers at each level before dereferencing.`];
            data.interview = {
                beginner: [`What is a double pointer?`, `How do you declare an int** variable?`],
                intermediate: [`How do you access the value pointed to by a double pointer?`, `When would you use int** instead of int*?`],
                advanced: [`How can double pointers be used for dynamic multi-dimensional arrays?`, `What are the risks of multiple levels of indirection?`],
            };
            data.exercises = {
                easy: `Declare a double pointer and assign it to a single pointer.`,
                medium: `Use a double pointer to modify a pointer inside a function.`,
                hard: `Implement a simple pointer-to-pointer data structure, such as an array of strings.`,
                interview: `Explain how a double pointer works in C.`,
            };
            data.assignment = `Create a program that demonstrates double pointers and shows how dereferencing works.`;
            data.miniProject = `Build a pointer table or dynamic array manager using double pointers.`;
            data.summary = [`Double pointers point to pointers.`, `Use them for advanced pointer structures.`, `Keep indirection clear and well-documented.`];
        } else if (key.includes('void pointers')) {
            data.overview = `Void pointers are generic pointers that can point to any data type in C.`;
            data.why = `They provide flexibility for writing generic functions and data structures while requiring explicit casting for use.`;
            data.theory.beginner = `Beginner: void* can hold the address of any object type, but you must cast it back to the correct type before dereferencing.`;
            data.theory.intermediate = `Intermediate: Use void pointers for generic APIs, callbacks, and data buffers while preserving type safety through casts.`;
            data.theory.advanced = `Advanced: Understand that arithmetic is not allowed on void pointers without casting, and that type information is lost until cast back.`;
            data.syntax = `void *ptr = &value; int *ip = (int *)ptr;`;
            data.commonMistakes = [`Dereferencing a void pointer without casting.`, `Losing track of the actual pointed type.`, `Using void pointers where typed pointers would be safer.`];
            data.bestPractices = [`Use void pointers for generic containers and interfaces.`, `Cast them only when you know the correct type.`, `Document the expected type carried by each void pointer.`];
            data.interview = {
                beginner: [`What is a void pointer?`, `Why can void pointers be used with any data type?`],
                intermediate: [`How do you use a void pointer to access an int?`, `Why is arithmetic not allowed on void pointers?`],
                advanced: [`When is it appropriate to use void pointers in a C API?`, `How do you ensure type safety with void pointers?`],
            };
            data.exercises = {
                easy: `Store the address of an int in a void pointer and cast it back to int*.`,
                medium: `Use a void pointer to pass different data types to a generic function.`,
                hard: `Implement a generic container using void pointers and size information.`,
                interview: `Explain the purpose of void pointers in C.`,
            };
            data.assignment = `Create a generic function that accepts a void pointer and a size parameter for processing data.`,
            data.miniProject = `Build a small generic container or callback mechanism using void pointers.`,
            data.summary = [`Void pointers are type-agnostic.`, `Cast them back to the correct type before use.`, `Use them carefully in generic code.`];
        } else if (key.includes('function pointers')) {
            data.overview = `Function pointers store the address of a function and allow calling functions dynamically.`;
            data.why = `They enable callbacks, plugin-like designs, and cleaner code when choosing behavior at runtime.`;
            data.theory.beginner = `Beginner: Declare a function pointer with the correct signature and assign it to an existing function.`;
            data.theory.intermediate = `Intermediate: Learn how to call a function through a pointer and how to pass function pointers as arguments.`;
            data.theory.advanced = `Advanced: Use function pointers for callback systems, lookup tables, and modular design while keeping signatures consistent.`;
            data.syntax = `int (*proc)(int, int) = add; int result = proc(2, 3);`;
            data.commonMistakes = [`Using the wrong function pointer signature.`, `Confusing function pointer syntax.`, `Dereferencing a function pointer incorrectly.`];
            data.bestPractices = [`Use typedefs to simplify function pointer syntax.`, `Keep signatures consistent and documented.`, `Check for NULL before calling through a pointer if appropriate.`];
            data.interview = {
                beginner: [`What is a function pointer?`, `How do you call a function through a pointer?`],
                intermediate: [`How do you pass a function pointer to another function?`, `Why use function pointers?`],
                advanced: [`How can function pointers enable callback patterns?`, `What are typical use cases in C libraries?`],
            };
            data.exercises = {
                easy: `Declare a function pointer and call a simple function through it.`,
                medium: `Pass a function pointer to another function and use it for callbacks.`,
                hard: `Implement a small dispatch table using function pointers.`,
                interview: `Explain how function pointers improve flexibility in C.`,
            };
            data.assignment = `Build a callback example using function pointers and document the design.`;
            data.miniProject = `Create a small command dispatcher that uses function pointers to execute selected actions.`;
            data.summary = [`Function pointers call functions dynamically.`, `Match the pointer signature to the target function.`, `Use them for callbacks and flexible behavior.`];
        }
    } else if (section === '12_STRUCTURES_UNIONS') {
        if (key.includes('structures') && !key.includes('nested')) {
            data.overview = `Structures group related data fields into a single composite type in C.`;
            data.why = `Structures let you model real-world entities by combining different data types into a single record.`;
            data.theory.beginner = `Beginner: A struct contains named members, such as int id; char name[20];. You can create variables of the struct type.`;
            data.theory.intermediate = `Intermediate: Learn how to initialize structs, access members with the dot operator, and pass structs to functions.`;
            data.theory.advanced = `Advanced: Use structs for complex data models, understand padding and alignment, and design structs for performance.`;
            data.syntax = `struct Person { int id; char name[50]; } p;`;
            data.commonMistakes = [`Forgetting to provide values for all members.`, `Misreading the memory layout because of padding.`, `Using struct pointers without initializing them.`];
            data.bestPractices = [`Group related data logically.`, `Use typedef for readability when appropriate.`, `Keep struct definitions consistent with their use cases.`];
            data.interview = {
                beginner: [`What is a struct in C?`, `How do you access a struct member?`],
                intermediate: [`How do you pass a struct to a function?`, `What is the dot operator used for?`],
                advanced: [`How does padding affect struct size?`, `When should you use a pointer to a struct?`],
            };
            data.exercises = {
                easy: `Define a struct and initialize it with sample values.`,
                medium: `Write a function that accepts a struct and prints its members.`,
                hard: `Use an array of structs to store and process multiple records.`,
                interview: `Explain the purpose of structs in C.`,
            };
            data.assignment = `Create a struct representing a real-world object and use it in a program.`;
            data.miniProject = `Build a record manager using an array of structs and simple operations.`;
            data.summary = [`Structures combine related fields.`, `Access members with the dot operator.`, `Be aware of memory layout and padding.`];
        } else if (key.includes('nested structures')) {
            data.overview = `Nested structures contain one struct inside another to model hierarchical data.`;
            data.why = `They let you represent complex objects with sub-objects in a natural way.`;
            data.theory.beginner = `Beginner: A struct member can be another struct type, allowing nested data organization.`;
            data.theory.intermediate = `Intermediate: Access nested members with the dot operator twice, such as parent.child.value.`;
            data.theory.advanced = `Advanced: Use nested structs to represent records with embedded details and manage memory carefully.`;
            data.syntax = `struct Address { char city[20]; };
struct Person { char name[20]; struct Address addr; };`;
            data.commonMistakes = [`Confusing nested member access with pointers.`, `Forgetting to initialize inner struct members.`, `Using too many nested levels that reduce readability.`];
            data.bestPractices = [`Use nested structs for natural hierarchical data.`, `Keep nesting to a reasonable level.`, `Document each nested structure clearly.`];
            data.interview = {
                beginner: [`What is a nested struct?`, `How do you access a member of a nested struct?`],
                intermediate: [`Why use nested structures?`, `How do you initialize nested struct members?`],
                advanced: [`How does nested struct layout affect memory?`, `When should you use pointers to nested structs instead?`],
            };
            data.exercises = {
                easy: `Define a struct with another struct member and initialize it.`,
                medium: `Print values from a nested struct member.`,
                hard: `Design a nested record structure for a real-world entity.`,
                interview: `Explain how nested structures are used in C.`,
            };
            data.assignment = `Create a nested struct model for a complex object and use it in a program.`;
            data.miniProject = `Build a small data model with nested structs representing a person and their address.`;
            data.summary = [`Nested structs model hierarchical data.`, `Access members with repeated dot notation.`, `Keep nested structures readable.`];
        } else if (key.includes('structure pointers')) {
            data.overview = `Structure pointers refer to struct variables and enable dynamic access and modification of struct data.`;
            data.why = `They are useful for passing large structs to functions efficiently and for dynamic memory structures.`;
            data.theory.beginner = `Beginner: Use a pointer to a struct with the -> operator, such as p->id, to access members through a pointer.`;
            data.theory.intermediate = `Intermediate: Learn how to allocate structs dynamically and pass pointers to functions for efficient access.`;
            data.theory.advanced = `Advanced: Use struct pointers in linked lists, trees, and other pointer-based data structures.`;
            data.syntax = `struct Person *p = &person; p->age = 30;`;
            data.commonMistakes = [`Using . instead of -> when you have a pointer.`, `Dereferencing a null or uninitialized struct pointer.`, `Allocating struct pointers incorrectly.`];
            data.bestPractices = [`Initialize struct pointers before use.`, `Prefer arrow notation for pointer members.`, `Use dynamic allocation only when needed.`];
            data.interview = {
                beginner: [`How do you access a struct member through a pointer?`, `What does p->field mean?`],
                intermediate: [`How do you allocate a struct and assign a pointer to it?`, `Why use a struct pointer instead of a struct value?`],
                advanced: [`How are struct pointers used in linked data structures?`, `What are the risks of dereferencing invalid pointers?`],
            };
            data.exercises = {
                easy: `Use a struct pointer to access members of a struct variable.`,
                medium: `Pass a struct pointer to a function and modify its fields.`,
                hard: `Allocate a struct dynamically and use a pointer to initialize it.`,
                interview: `Explain the difference between . and -> with structs.`,
            };
            data.assignment = `Build a program that uses a pointer to a struct and modifies its fields through the pointer.`;
            data.miniProject = `Create a dynamic record manager using pointers to structs.`;
            data.summary = [`Struct pointers use -> to access members.`, `Initialize pointers before use.`, `Use them for efficient struct handling.`];
        } else if (key.includes('unions')) {
            data.overview = `Unions let multiple members share the same memory location, making them useful for variant data and low-level programming.`;
            data.why = `They allow efficient memory use for different representations of the same data, such as interpreting binary values in multiple ways.`;
            data.theory.beginner = `Beginner: A union stores one member at a time, and all members share the same memory block.`;
            data.theory.intermediate = `Intermediate: Use unions for tagged data structures or when storage efficiency is important, but track which field is active.`;
            data.theory.advanced = `Advanced: Combine unions with structs and enums to build safe variant records and avoid undefined behavior from invalid member access.`;
            data.syntax = `union Value { int i; float f; char bytes[4]; };`;
            data.commonMistakes = [`Reading a union member that was not most recently written.`, `Assuming all members can be used simultaneously.`, `Using unions without an active tag or discriminator.`];
            data.bestPractices = [`Use a separate tag field to track the active member.`, `Access only the currently stored member.`, `Avoid unions for general-purpose data unless memory is critical.`];
            data.interview = {
                beginner: [`What is a union in C?`, `How is a union different from a struct?`],
                intermediate: [`What happens when you write one union member and read another?`, `When should you use a union?`],
                advanced: [`How do unions enable variant data structures?`, `What are safety concerns with unions?`],
            };
            data.exercises = {
                easy: `Define a union and assign a value to one member.`,
                medium: `Use a union with a tag to store either an int or a float.`,
                hard: `Build a simple variant type using a struct and a union.`,
                interview: `Explain why unions share memory among members.`,
            };
            data.assignment = `Create a union-based example that stores one of several data types and accesses it safely.`;
            data.miniProject = `Build a small variant record using a union plus a tag field for the active type.`;
            data.summary = [`Unions share memory across members.`, `Use only the active member.`, `Add a tag when storing multiple types.`];
        } else if (key.includes('enum')) {
            data.overview = `Enums define named integer constants that improve code readability and maintainability.`;
            data.why = `Enums make code more self-documenting than raw numeric literals and are useful for representing states or categories.`;
            data.theory.beginner = `Beginner: An enum defines a set of named values, for example enum Color { Red, Green, Blue };`;
            data.theory.intermediate = `Intermediate: Learn that enum values are integers and can be assigned explicit values when needed.`;
            data.theory.advanced = `Advanced: Use enums for state machines, option flags, and clear code, while understanding how they map to integer types.`;
            data.syntax = `enum Day { Monday, Tuesday, Wednesday };`;
            data.commonMistakes = [`Using enum values without clear names.`, `Assuming enum values are strings.`, `Mixing different enums without explicit casting.`];
            data.bestPractices = [`Give enum constants meaningful names.`, `Use enums to replace magic numbers.`, `Document the purpose of each enum value.`];
            data.interview = {
                beginner: [`What is an enum in C?`, `How do you define an enum?`],
                intermediate: [`What is the underlying type of enum values?`, `How do you assign explicit numeric values to enum members?`],
                advanced: [`How do enums improve code clarity?`, `When should you use enums instead of #define constants?`],
            };
            data.exercises = {
                easy: `Define an enum for states and use it in a switch statement.`,
                medium: `Assign explicit values to enum members and print them.`,
                hard: `Use an enum to represent a menu selection or program state.`,
                interview: `Explain why enums are preferred over raw integers for named values.`,
            };
            data.assignment = `Create a program that uses enums to represent options or states and prints the selected value.`;
            data.miniProject = `Build a menu or state machine using enums for readability.`;
            data.summary = [`Enums define named integer values.`, `They improve readability over raw numbers.`, `Use them for states, categories, and options.`];
        }
    } else if (section === '13_DYNAMIC_MEMORY') {
        if (key.includes('malloc') || key.includes('calloc') || key.includes('realloc') || key.includes('free') || key.includes('memory leaks')) {
            data.overview = `Dynamic memory allocation lets C programs request and release memory at runtime using functions such as malloc, calloc, realloc, and free.`;
            data.why = `Dynamic memory is essential for flexible data structures, variable-size arrays, and managing memory lifetimes beyond automatic stack scope.`;
            data.theory.beginner = `Beginner: malloc allocates raw memory, calloc allocates zero-initialized memory, realloc resizes allocated memory, and free releases it.`;
            data.theory.intermediate = `Intermediate: Learn how to check for allocation failures, avoid leaks, and why each function has different behavior.`;
            data.theory.advanced = `Advanced: Use dynamic allocation safely to build linked structures, understand fragmentation, and prevent dangling pointers and memory leaks.`;
            data.syntax = `int *arr = malloc(10 * sizeof(int)); if (arr) { ... free(arr); }`;
            data.commonMistakes = [`Not checking the result of malloc.`, `Forgetting to call free for allocated memory.`, `Using memory after it has been freed.`];
            data.bestPractices = [`Always check allocation results.`, `Free memory in the same function or module that allocates it when possible.`, `Use descriptive pointer names and set freed pointers to NULL.`];
            data.interview = {
                beginner: [`What does malloc do?`, `How do you free memory in C?`],
                intermediate: [`What is the difference between malloc and calloc?`, `When should you use realloc?`],
                advanced: [`How do you detect memory leaks in C?`, `What causes a dangling pointer?`],
            };
            data.exercises = {
                easy: `Allocate an array with malloc and free it after use.`,
                medium: `Use calloc and compare its behavior with malloc.`,
                hard: `Resize a dynamically allocated array with realloc and handle failures.`,
                interview: `Explain the life cycle of dynamically allocated memory.`,
            };
            data.assignment = `Write a program that allocates memory dynamically for an array, uses it, and frees it cleanly.`;
            data.miniProject = `Create a dynamic list or buffer manager that grows with user input.`;
            data.summary = [`Dynamic memory is allocated at runtime.`, `Always free allocated memory.`, `Avoid using memory after free.`];
        }
    } else if (section === '14_FILE_HANDLING') {
        if (key.includes('file basics') || key.includes('fopen') || key.includes('fclose') || key.includes('fprintf') || key.includes('fscanf') || key.includes('fread') || key.includes('fwrite') || key.includes('file projects')) {
            data.overview = `File handling in C uses the FILE type and library functions to read and write data from files.`;
            data.why = `Files let programs persist data, exchange information, and interact with the operating system beyond the console.`;
            data.theory.beginner = `Beginner: Use fopen to open a file, fprintf/fscanf for text I/O, fread/fwrite for binary I/O, and fclose to close the file.`;
            data.theory.intermediate = `Intermediate: Learn file modes such as "r", "w", "a", and how to handle errors when a file cannot be opened.`;
            data.theory.advanced = `Advanced: Use file handling safely for binary data, manage file pointers, and flush or close files to ensure data integrity.`;
            data.syntax = `FILE *fp = fopen("data.txt", "w"); fprintf(fp, "%s\n", text); fclose(fp);`;
            data.commonMistakes = [`Not checking if fopen returned NULL.`, `Using fscanf without validating input.`, `Forgetting to close files after use.`];
            data.bestPractices = [`Always check file opening and closing results.`, `Use the appropriate text or binary mode.`, `Close files as soon as you are done with them.`];
            data.interview = {
                beginner: [`How do you open a file in C?`, `What is FILE * used for?`],
                intermediate: [`What is the difference between fread and fscanf?`, `How do you write text to a file?`],
                advanced: [`How do you handle errors when file operations fail?`, `Why is it important to close files?`],
            };
            data.exercises = {
                easy: `Open a file and write a short message to it.`,
                medium: `Read text from a file and display it to the console.`,
                hard: `Write and read binary data using fwrite and fread.`,
                interview: `Explain the main steps of file I/O in C.`,
            };
            data.assignment = `Build a program that saves data to a file and then reads it back.`,
            data.miniProject = `Create a simple file-based data logger or record keeper.`,
            data.summary = [`File I/O uses fopen, fprintf/fscanf, fread/fwrite, and fclose.`, `Check for errors when opening files.`, `Close files promptly to ensure data is written.`];
        }
    } else if (section === '15_PREPROCESSOR') {
        if (key.includes('include')) {
            data.overview = `The #include directive inserts header files into source code during preprocessing.`;
            data.why = `Headers provide declarations for library functions and types, enabling modular compilation and reuse.`;
            data.theory.beginner = `Beginner: Use #include <stdio.h> to import declarations for standard I/O functions like printf and scanf.`;
            data.theory.intermediate = `Intermediate: Understand the difference between angle bracket includes and quoted includes for system versus local headers.`;
            data.theory.advanced = `Advanced: Manage include dependencies carefully to avoid circular includes and long compile times.`;
            data.syntax = `#include <stdio.h>`;
            data.commonMistakes = [`Including the same header multiple times without guards.`, `Using quotes instead of angle brackets for standard headers.`, `Putting function definitions in headers instead of declarations.`];
            data.bestPractices = [`Use include guards or #pragma once.`, `Include only the headers you need.`, `Keep header files limited to declarations and macros.`];
            data.interview = {
                beginner: [`What does #include do?`, `Why do we include <stdio.h>?`],
                intermediate: [`What is the difference between #include <...> and #include "..."?`, `Why are header files useful?`],
                advanced: [`How do include guards prevent multiple inclusion?`, `What should and should not go in a header file?`],
            };
            data.exercises = {
                easy: `Include stdio.h and use printf in a program.`,
                medium: `Create a custom header file and include it in a source file.`,
                hard: `Design a pair of headers with include guards to share declarations across files.`,
                interview: `Explain the purpose of #include and header files.`,
            };
            data.assignment = `Write a C program that uses a custom header file for function declarations.`;
            data.miniProject = `Create a small module with a header and source file and include it in a main program.`,
            data.summary = [`#include brings in declarations from headers.`, `Use include guards in custom headers.`, `Keep headers focused on interfaces.`];
        } else if (key.includes('define') || key.includes('macros')) {
            data.overview = `The preprocessor #define directive creates macros for constants and simple code substitutions.`;
            data.why = `Macros allow compile-time constants, function-like replacements, and conditional compilation in C.`;
            data.theory.beginner = `Beginner: Use #define MAX 100 to create a symbolic constant. Macros can also accept arguments, like #define SQUARE(x) ((x)*(x)).`;
            data.theory.intermediate = `Intermediate: Understand the differences between macros and constants or inline functions, including how macros are expanded textually.`;
            data.theory.advanced = `Advanced: Use macros carefully to avoid side effects and to keep expansions safe with parentheses.`;
            data.syntax = `#define PI 3.14
#define SQUARE(x) ((x) * (x))`;
            data.commonMistakes = [`Forgetting parentheses around macro parameters.`, `Using macros that evaluate arguments multiple times.`, `Using macros where const variables or functions are better.`];
            data.bestPractices = [`Use parentheses around macro expansions.`, `Prefer const variables and inline functions when appropriate.`, `Keep macros simple and well-documented.`];
            data.interview = {
                beginner: [`What does #define do?`, `How do you create a macro?`],
                intermediate: [`What are the risks of function-like macros?`, `When should you use const instead of #define?`],
                advanced: [`How do you write safe macros that avoid unintended side effects?`, `What is the difference between macros and inline functions?`],
            };
            data.exercises = {
                easy: `Define a constant macro and print its value.`,
                medium: `Create a simple function-like macro and use it.`,
                hard: `Rewrite a macro as an inline function and compare the results.`,
                interview: `Explain the tradeoffs between macros and constants.`,
            };
            data.assignment = `Build a program using #define macros for constants and simple value calculations.`;
            data.miniProject = `Create a macro-based configuration section for a small C program.`,
            data.summary = [`#define creates macros and constants.`, `Use parentheses to avoid expansion bugs.`, `Prefer safer alternatives when appropriate.`];
        } else if (key.includes('header files')) {
            data.overview = `Header files declare interfaces for functions, types, and macros so source files can share them.`;
            data.why = `Using headers enables modular code and separate compilation while keeping declarations centralized.`;
            data.theory.beginner = `Beginner: A header file contains declarations such as function prototypes and struct definitions, and is included with #include.`;
            data.theory.intermediate = `Intermediate: Learn how to use include guards and why headers should avoid function definitions and global variables.`;
            data.theory.advanced = `Advanced: Organize headers by responsibility, minimize dependencies, and keep interfaces clean.`;
            data.syntax = `#ifndef MYMODULE_H
#define MYMODULE_H
void foo(void);
#endif`;
            data.commonMistakes = [`Putting code definitions in headers instead of source files.`, `Omitting include guards and causing duplicate definitions.`, `Including headers unnecessarily in many files.`];
            data.bestPractices = [`Use include guards in every header.`, `Keep header contents minimal and interface-focused.`, `Include only the headers you need.`];
            data.interview = {
                beginner: [`What is a header file in C?`, `How do you include a header file?`],
                intermediate: [`What is the purpose of include guards?`, `Why should headers avoid function definitions?`],
                advanced: [`How do you organize header file dependencies in a large project?`, `What is a public versus private header?`],
            };
            data.exercises = {
                easy: `Create a header file with a function prototype and include it in a source file.`,
                medium: `Use include guards in a custom header file.`,
                hard: `Design a header/source pair for a reusable module.`,
                interview: `Describe what belongs in a header file and what belongs in a source file.`,
            };
            data.assignment = `Build a reusable C module with a header file and a source file. Use include guards to prevent multiple inclusion.`;
            data.miniProject = `Create a small C library with a header file for its public API and a source file for implementation.`;
            data.summary = [`Header files declare interfaces.`, `Use include guards to prevent duplicates.`, `Keep headers focused and minimal.`];
        } else if (key.includes('conditional compilation')) {
            data.overview = `Conditional compilation uses preprocessor directives to include or exclude code based on compile-time conditions.`;
            data.why = `It enables platform-specific builds, debugging options, and configurable features without changing source files.`;
            data.theory.beginner = `Beginner: Use #ifdef, #ifndef, #if, #elif, #else, and #endif to control which code is compiled.`;
            data.theory.intermediate = `Intermediate: Learn how to define flags through compiler options and use them to enable or disable features.`;
            data.theory.advanced = `Advanced: Manage conditional compilation carefully to keep code maintainable and avoid hard-to-test build configurations.`;
            data.syntax = `#ifdef DEBUG
printf("Debug mode\n");
#endif`;
            data.commonMistakes = [`Creating deeply nested preprocessor conditionals.`, `Forgetting to close an #ifdef with #endif.`, `Using too many compile-time variants in the same file.`];
            data.bestPractices = [`Keep conditional compilation simple and documented.`, `Use descriptive macro names for feature flags.`, `Test important build configurations regularly.`];
            data.interview = {
                beginner: [`What does #ifdef do?`, `How do you exclude code from compilation?`],
                intermediate: [`What is the difference between #ifdef and #if?`, `How do you define a macro from the compiler command line?`],
                advanced: [`How can conditional compilation improve portability?`, `What are the downsides of excessive conditional compilation?`],
            };
            data.exercises = {
                easy: `Use #ifdef around a debug print statement.`,
                medium: `Compile a program with and without a defined flag to see the difference.`,
                hard: `Design a small feature toggle using conditional compilation.`,
                interview: `Explain why conditional compilation is useful for portable code.`,
            };
            data.assignment = `Create a C program with a debug mode enabled by a preprocessor macro.`;
            data.miniProject = `Build a configurable program with multiple compile-time options using conditional compilation.`;
            data.summary = [`Conditional compilation includes or excludes code at compile time.`, `Use it for platform-specific or debug builds.`, `Keep build variants manageable.`];
        }
    } else if (section === '16_STORAGE_CLASSES') {
        if (key.includes('auto')) {
            data.overview = `The auto storage class declares automatic variables with block scope and automatic lifetime.`;
            data.why = `Automatic variables are the default for local variables and are essential for most function-local data.`;
            data.theory.beginner = `Beginner: auto int x = 0; is equivalent to int x = 0 inside a function. The variable exists only while the block executes.`;
            data.theory.intermediate = `Intermediate: Learn that auto is usually omitted because it is the default storage class for local variables.`;
            data.theory.advanced = `Advanced: Understand the distinction between automatic lifetime and static lifetime in C.`;
            data.syntax = `auto int count = 0;`;
            data.commonMistakes = [`Using auto explicitly when it is unnecessary.`, `Confusing auto with modern C++ auto type deduction.`, `Assuming auto variables persist after the function returns.`];
            data.bestPractices = [`Use plain variable declarations for locals.`, `Remember that local variables have automatic lifetime by default.`, `Reserve auto for clarity only when it adds value. `];
            data.interview = {
                beginner: [`What does auto mean in C?`, `What is the lifetime of an auto variable?`],
                intermediate: [`Why is auto usually omitted in C?`, `How does auto compare to static?`],
                advanced: [`What is automatic storage duration?`, `How does auto behave across function calls?`],
            };
            data.exercises = {
                easy: `Declare a local variable with auto and print it.`,
                medium: `Demonstrate that the variable disappears when the function returns.`,
                hard: `Explain why auto is usually omitted in C code.`,
                interview: `Describe automatic storage duration in C.`,
            };
            data.assignment = `Write a function that uses an auto local variable and explain its lifetime.`;
            data.miniProject = `Create a program with several local variables and document their storage duration.`;
            data.summary = [`auto declares a local variable with automatic lifetime.`, `It is the default for local variables in C.`, `Do not confuse it with C++ type deduction.`];
        } else if (key.includes('static')) {
            data.overview = `The static storage class gives variables static lifetime and, for local variables, preserves their value across function calls.`;
            data.why = `Static variables are useful for persistent state, module-level encapsulation, and efficient reuse of memory.`;
            data.theory.beginner = `Beginner: A static variable inside a function retains its value between calls. A static global variable is limited to the current file.`;
            data.theory.intermediate = `Intermediate: Learn how static affects linkage and scope, and when to use it for private data or cached results.`;
            data.theory.advanced = `Advanced: Use static carefully to manage state and avoid hidden dependencies across function calls and files.`;
            data.syntax = `static int count = 0;`;
            data.commonMistakes = [`Overusing static for state that should be passed explicitly.`, `Assuming static variables are thread-safe.`, `Mixing static with extern incorrectly.`];
            data.bestPractices = [`Use static for module-local globals and persistent local state.`, `Document the purpose of static variables.`, `Avoid hidden state that makes code hard to test.`];
            data.interview = {
                beginner: [`What does static mean for a variable?`, `How does a static local variable behave?`],
                intermediate: [`What is the linkage of a static global variable?`, `How is static different from extern?`],
                advanced: [`When should you use static variables?`, `What are the tradeoffs of static state?`],
            };
            data.exercises = {
                easy: `Create a static local counter inside a function.`,
                medium: `Use a static global variable in one file and observe its scope.`,
                hard: `Refactor code to replace a global variable with a static file-local variable.`,
                interview: `Explain the effect of static on linkage and lifetime.`,
            };
            data.assignment = `Build a function that uses a static local variable to count how many times it is called.`;
            data.miniProject = `Create a resource manager that uses static variables for internal state within a module.`;
            data.summary = [`static gives a variable permanent lifetime.`, `Static locals preserve value across calls.`, `Use static for private module state.`];
        } else if (key.includes('register')) {
            data.overview = `The register storage class is a hint that a variable may be stored in a CPU register for faster access.`;
            data.why = `Although modern compilers ignore it, register teaches historical performance hints and the distinction between storage classes.`;
            data.theory.beginner = `Beginner: register int count; suggests that the variable should be kept in a register, but the compiler decides the actual storage.`;
            data.theory.intermediate = `Intermediate: Understand that register variables cannot have their address taken with & in standard C.`;
            data.theory.advanced = `Advanced: Use register only as historical knowledge, since modern compilers optimize better without this hint.`;
            data.syntax = `register int i = 0;`;
            data.commonMistakes = [`Assuming register guarantees a CPU register.`, `Trying to take the address of a register variable.`, `Using register for modern performance tuning.`];
            data.bestPractices = [`Avoid register in new code.`, `Trust the compiler's optimizer for register allocation.`, `Use it only when maintaining old C code that still includes it.`];
            data.interview = {
                beginner: [`What is the register keyword?`, `Can you take the address of a register variable?`],
                intermediate: [`Why is register rarely used today?`, `What was the original purpose of register?`],
                advanced: [`How do modern compilers allocate registers?`, `Is register still meaningful in modern C?`],
            };
            data.exercises = {
                easy: `Declare a variable with register and observe that the code still compiles.`,
                medium: `Note that you cannot use & with a register variable in standard C.`,
                hard: `Compare register with normal variables in old C examples.`,
                interview: `Explain why register is considered obsolete in modern C.`,
            };
            data.assignment = `Write a small program using register variables and document their historical purpose.`;
            data.miniProject = `Create a comparison note or sample program showing register and non-register declarations.`;
            data.summary = [`register is a historical hint for register allocation.`, `Modern compilers ignore it.`, `Avoid using register in new code.`];
        } else if (key.includes('extern')) {
            data.overview = `extern declares a variable or function with external linkage, allowing it to be shared across source files.`;
            data.why = `It is important for separate compilation, module interfaces, and global state management in larger C programs.`;
            data.theory.beginner = `Beginner: Use extern int count; in a header to declare a global variable defined elsewhere.`;
            data.theory.intermediate = `Intermediate: Understand that extern does not allocate storage; it only declares that the symbol exists in another translation unit.`;
            data.theory.advanced = `Advanced: Use extern to share functions and variables across multiple source files while avoiding duplicate definitions.`;
            data.syntax = `extern int sharedCount;`;
            data.commonMistakes = [`Defining a variable in multiple files instead of declaring it extern.`, `Assuming extern creates storage.`, `Using extern incorrectly for local variables.`];
            data.bestPractices = [`Declare shared variables in headers with extern.`, `Define the variable once in a single source file.`, `Minimize shared global state and document it clearly.`];
            data.interview = {
                beginner: [`What does extern mean in C?`, `How do you share a variable between files?`],
                intermediate: [`What is the difference between extern and a normal variable definition?`, `Why is extern useful for modular programs?`],
                advanced: [`How does extern affect linkage?`, `What are best practices for external global variables?`],
            };
            data.exercises = {
                easy: `Declare an extern variable in one file and define it in another.`,
                medium: `Use extern to share a global counter across source files.`,
                hard: `Refactor a program to limit extern variables and improve modularity.`,
                interview: `Explain how extern differs from defining a variable.`,
            };
            data.assignment = `Create a program with an extern variable declared in a header and defined in one source file.`;
            data.miniProject = `Build a simple multi-file program that uses extern declarations for shared configuration.`;
            data.summary = [`extern declares an externally defined symbol.`, `Define the variable once, declare it elsewhere.`, `Use it for shared module interfaces.`];
        }
    } else if (section === '17_BIT_MANIPULATION') {
        if (key.includes('and')) {
            data.overview = `The bitwise AND operator performs a bit-by-bit conjunction between two integer values.`;
            data.why = `It is useful for masking bits, testing flags, and performing low-level bit manipulation.`;
            data.theory.beginner = `Beginner: Use & to combine bits. A bit is 1 only when both operands have a 1 in that position.`;
            data.theory.intermediate = `Intermediate: Use bitwise AND to test whether specific bits are set in a value.`,
            data.theory.advanced = `Advanced: Use masks and bit fields efficiently in low-level code and system programming.`;
            data.syntax = `if (flags & 0x04) { ... }`;
            data.commonMistakes = [`Confusing bitwise AND with logical AND.`, `Using & with boolean logic instead of bit masks.`, `Not masking before checking bits.`];
            data.bestPractices = [`Use named constants for bit masks.`, `Keep bitwise expressions clear.`, `Use unsigned types for bitwise operations.`];
            data.interview = {
                beginner: [`What does the & operator do bitwise?`, `How do you test if a bit is set?`],
                intermediate: [`What is a bit mask?`, `How does bitwise AND differ from logical AND?`],
                advanced: [`How do you use bitwise AND to clear bits?`, `Why prefer unsigned types for bitwise operations?`],
            };
            data.exercises = {
                easy: `Use & to test whether a bit is set in a value.`,
                medium: `Define a mask and use it to extract specific bits.`,
                hard: `Implement a flag system using bitwise AND for checks.`,
                interview: `Explain the difference between bitwise and logical AND.`,
            };
            data.assignment = `Create a flag-checker program using bitwise AND and readable macros.`;
            data.miniProject = `Build a simple permission flags system using bitwise operations.`;
            data.summary = [`Bitwise AND tests bits.`, `Use masks and unsigned values.`, `Differentiate it from logical AND.`];
        } else if (key.includes('or')) {
            data.overview = `The bitwise OR operator combines bits from two operands, setting a result bit when either input bit is 1.`;
            data.why = `It is useful for setting or combining bits in masks and control flags.`;
            data.theory.beginner = `Beginner: Use | to turn bits on. If either bit is 1, the result bit becomes 1.`;
            data.theory.intermediate = `Intermediate: Use bitwise OR to set specific bits without affecting others.`;
            data.theory.advanced = `Advanced: Combine multiple mask values with OR to build configuration flags and bit patterns.`;
            data.syntax = `flags |= 0x02;`;
            data.commonMistakes = [`Using | when you meant || in boolean logic.`, `Not properly masking before setting bits.`, `Overwriting bits unintentionally.`];
            data.bestPractices = [`Use named masks.`, `Set bits clearly with |=.`, `Keep bitwise expressions readable.`];
            data.interview = {
                beginner: [`What does the | operator do?`, `How do you set a bit using OR?`],
                intermediate: [`How is bitwise OR different from logical OR?`, `When do you use OR with masks?`],
                advanced: [`How do you combine multiple flags using OR?`, `Why use unsigned types with OR?`],
            };
            data.exercises = {
                easy: `Set a bit in a value using |.`,
                medium: `Combine several flags with bitwise OR.`,
                hard: `Implement a bitfield setter using OR and masks.`,
                interview: `Explain the effect of bitwise OR on two binary values.`,
            };
            data.assignment = `Write a program that sets flags using bitwise OR and displays the result.`;
            data.miniProject = `Create a flag manager that toggles settings with bitwise OR.`;
            data.summary = [`Bitwise OR sets bits.`, `Use it for flags and masks.`, `Avoid confusing it with logical OR.`];
        } else if (key.includes('xor')) {
            data.overview = `Bitwise XOR returns 1 when exactly one bit is 1 in the input operands.`;
            data.why = `XOR is useful for toggling bits and implementing parity or simple encryption/decryption logic.`;
            data.theory.beginner = `Beginner: XOR (^) sets a bit when the operands differ, and clears it when they are the same.`;
            data.theory.intermediate = `Intermediate: Use XOR to toggle bits, compare bit patterns, or implement swap operations without a temporary variable.`;
            data.theory.advanced = `Advanced: Apply XOR in algorithms for checksums, bitwise transforms, and binary operations.`;
            data.syntax = `flags ^= 0x04;`;
            data.commonMistakes = [`Using ^ for exponentiation instead of bitwise XOR.`, `Expecting XOR to behave like logical XOR on boolean values.`, `Misusing XOR with signed values.`];
            data.bestPractices = [`Use XOR for toggling and parity checks.`, `Document non-obvious XOR usage clearly.`, `Prefer simpler code if XOR makes logic unclear.`];
            data.interview = {
                beginner: [`What does the ^ operator do?`, `When does XOR produce 1?`],
                intermediate: [`How can XOR be used to toggle a bit?`, `What is the result of x ^ x?`],
                advanced: [`How is XOR used in encryption or checksum algorithms?`, `What are practical uses for XOR in C?`],
            };
            data.exercises = {
                easy: `Use XOR to toggle a bit in a value.`,
                medium: `Show that x ^ x equals 0 for any integer.`,
                hard: `Implement a simple XOR-based swap of two variables.`,
                interview: `Explain the behavior of the XOR operator.`,
            };
            data.assignment = `Create a program that toggles bits using XOR and demonstrates the result.`;
            data.miniProject = `Build a simple bit toggler or parity checker using XOR.`;
            data.summary = [`XOR sets bits when inputs differ.`, `Use it for toggling and comparison.`, `Document XOR logic clearly.`];
        } else if (key.includes('not')) {
            data.overview = `The bitwise NOT operator inverts every bit of an integer value.`;
            data.why = `It is useful for bitwise complement operations and creating inverse masks.`;
            data.theory.beginner = `Beginner: ~x flips all bits in x, producing the bitwise complement.`;
            data.theory.intermediate = `Intermediate: Use NOT to create inverted masks or to compute negative values in two's complement representation.`;
            data.theory.advanced = `Advanced: Understand how bitwise NOT interacts with signed integers and why unsigned types are safer for bitwise operations.`;
            data.syntax = `unsigned int mask = ~0u;`;
            data.commonMistakes = [`Using ~ on signed integers without considering representation.`, `Assuming ~ creates a simple arithmetic negation.`, `Applying ~ to values where the meaning is unclear.`];
            data.bestPractices = [`Use unsigned types for bitwise NOT operations.`, `Use it for mask inversion and complement calculations.`, `Keep bitwise expressions explicit and documented.`];
            data.interview = {
                beginner: [`What does the ~ operator do?`, `How does bitwise NOT affect bits?`],
                intermediate: [`Why is unsigned safer with bitwise NOT?`, `What is the result of ~0?`],
                advanced: [`How does bitwise NOT relate to two's complement negation?`, `What are use cases for inverted masks?`],
            };
            data.exercises = {
                easy: `Use ~ on an unsigned integer and print the result.`,
                medium: `Create an inverted mask and apply it to a value.`,
                hard: `Explain the output of bitwise NOT on signed and unsigned numbers.`,
                interview: `Describe the effect of bitwise NOT on a binary value.`,
            };
            data.assignment = `Build a program that inverts bit masks with ~ and demonstrates the result.`;
            data.miniProject = `Create a bit mask toolkit with invert, set, clear, and toggle operations.`;
            data.summary = [`Bitwise NOT inverts every bit.`, `Use unsigned types for clarity.`, `Employ it for mask inversion.`];
        } else if (key.includes('left shift') || key.includes('right shift') || key.includes('bit problems')) {
            const shiftDir = key.includes('left shift') ? 'left shift' : key.includes('right shift') ? 'right shift' : 'bit manipulation';
            data.overview = `Learn ${shiftDir} operations for moving bits and solving low-level data problems in C.`;
            data.why = `Shift operators are used for efficient arithmetic, scaling, and bit packing, while bit problems teach practical manipulation skills.`;
            data.theory.beginner = `Beginner: << shifts bits left, effectively multiplying by powers of two. >> shifts bits right, dividing by powers of two for unsigned values.`;
            data.theory.intermediate = `Intermediate: Understand how signed and unsigned shifts differ, and how shifts relate to bit masks and flags.`;
            data.theory.advanced = `Advanced: Use shifts for compact data encoding, binary arithmetic, and performance-sensitive bit-level operations.`;
            data.syntax = `value <<= 1; result = flags >> 2;`;
            data.commonMistakes = [`Shifting negative signed values without knowing the implementation.`, `Shifting by a count greater than the bit width.`, `Using shifts where multiplication or division would be clearer.`];
            data.bestPractices = [`Prefer unsigned values for shifts.`, `Use shifts for power-of-two scaling and bit packing.`, `Document shift counts and bit-width assumptions.`];
            data.interview = {
                beginner: [`What does << do?`, `What does >> do?`],
                intermediate: [`How do shifts relate to multiplication and division?`, `What happens if you shift by 32 on a 32-bit value?`],
                advanced: [`How do signed and unsigned right shifts differ?`, `How can shifts be used in bitfield manipulation?`],
            };
            data.exercises = {
                easy: `Shift a value left and right and print the results.`,
                medium: `Use shifts to multiply and divide powers of two.`,
                hard: `Solve a bit-packed data problem using shifts and masks.`,
                interview: `Explain how << and >> operate on binary values.`,
            };
            data.assignment = `Create a program that uses shifts to encode and decode simple bit-packed values.`;
            data.miniProject = `Build a small pack/unpack utility using bit shifts and masks.`;
            data.summary = [`Shift operators move bits left or right.`, `Use unsigned values for safety.`, `Shifts are useful for low-level bit handling.`];
        }
    } else if (section === '18_DATA_STRUCTURES' || section === '19_ALGORITHMS') {
        if (key.includes('linked list')) {
            data.overview = `A linked list is a dynamic sequence of nodes where each node points to the next one.`;
            data.why = `Linked lists demonstrate pointers in action and allow flexible insertion and deletion without contiguous memory.`;
            data.theory.beginner = `Beginner: Each node contains data and a pointer to the next node. The list is traversed by following these pointers.`;
            data.theory.intermediate = `Intermediate: Learn how to insert, delete, and search nodes, and how to manage the head pointer.`;
            data.theory.advanced = `Advanced: Understand memory allocation for nodes, pointer manipulation, and common linked list variations like doubly linked lists.`;
            data.syntax = `struct Node { int data; struct Node *next; };`;
            data.commonMistakes = [`Losing the head pointer during insertion or deletion.`, `Dereferencing NULL next pointers.`, `Forgetting to free removed nodes.`];
            data.bestPractices = [`Keep node operations separate in helper functions.`, `Check pointers before dereferencing.`, `Free memory for deleted nodes promptly.`];
            data.interview = {
                beginner: [`What is a linked list?`, `How do you traverse a linked list?`],
                intermediate: [`How do you insert a node at the beginning?`, `What is the difference between singly and doubly linked lists?`],
                advanced: [`How do you delete a node safely?`, `What are the memory costs of a linked list?`],
            };
            data.exercises = {
                easy: `Implement a simple linked list node and print its elements.`,
                medium: `Insert nodes into a linked list and traverse it.`,
                hard: `Delete a node from a linked list and free its memory.`,
                interview: `Explain how a singly linked list stores data.`,
            };
            data.assignment = `Create a small linked list implementation with insertion, traversal, and deletion.`,
            data.miniProject = `Build a linked list-based collection with basic operations like add, remove, and display.`,
            data.summary = [`A linked list is a chain of nodes.`, `Use pointers to link nodes.`, `Manage memory for node creation and deletion.`];
        } else if (key.includes('stack')) {
            data.overview = `A stack is a last-in, first-out data structure with push and pop operations.`;
            data.why = `Stacks are used in function calls, expression evaluation, and backtracking algorithms.`;
            data.theory.beginner = `Beginner: Elements are added with push and removed with pop from the top of the stack.`;
            data.theory.intermediate = `Intermediate: Implement a stack using an array or linked list, and track the top index or node.`;
            data.theory.advanced = `Advanced: Use stacks for expression parsing, recursion elimination, and state management.`;
            data.syntax = `push(stack, value); pop(stack);`;
            data.commonMistakes = [`Pushing to a full stack without checking overflow.`, `Popping from an empty stack.`, `Confusing top-of-stack order.`];
            data.bestPractices = [`Check for underflow and overflow.`, `Keep stack operations simple.`, `Use clear names for push, pop, and peek.`];
            data.interview = {
                beginner: [`What is a stack?`, `What does LIFO mean?`],
                intermediate: [`How do you implement a stack in C?`, `What happens when you pop an empty stack?`],
                advanced: [`How are stacks used in function call management?`, `What are stack overflow and underflow?`],
            };
            data.exercises = {
                easy: `Implement a simple stack using an array.`,
                medium: `Use a stack to reverse a sequence of values.`,
                hard: `Implement a stack with linked nodes and push/pop operations.`,
                interview: `Describe the LIFO property of a stack.`,
            };
            data.assignment = `Create a stack implementation with push, pop, and peek operations.`;
            data.miniProject = `Build a simple stack-based calculator for postfix expressions.`,
            data.summary = [`Stack is LIFO.`, `Check for underflow and overflow.`, `Use it for nested or undo operations.`];
        } else if (key.includes('queue')) {
            data.overview = `A queue is a first-in, first-out data structure where elements are enqueued at the back and dequeued from the front.`;
            data.why = `Queues are used for scheduling, buffering, and breadth-first search algorithms.`;
            data.theory.beginner = `Beginner: Enqueue adds an item to the rear, and dequeue removes an item from the front.`;
            data.theory.intermediate = `Intermediate: Implement a queue with a circular buffer or linked list to avoid wasted space.`;
            data.theory.advanced = `Advanced: Use queues in producer-consumer systems and understand how front/rear pointers move.`;
            data.syntax = `enqueue(queue, value); dequeue(queue);`;
            data.commonMistakes = [`Confusing front and rear indices.`, `Allowing the queue to overflow without checks.`, `Failing to wrap around in a circular buffer implementation.`];
            data.bestPractices = [`Use a circular buffer for array-based queues.`, `Check for empty and full states before operations.`, `Keep enqueue and dequeue logic separate.`];
            data.interview = {
                beginner: [`What is a queue?`, `What does FIFO mean?`],
                intermediate: [`How do you implement a queue in C?`, `What is the difference between a queue and a stack?`],
                advanced: [`How does a circular queue work?`, `When are queues used in real systems?`],
            };
            data.exercises = {
                easy: `Implement a simple queue using an array.`,
                medium: `Use a queue to process values in arrival order.`,
                hard: `Implement a circular queue with wrap-around logic.`,
                interview: `Explain why queues are FIFO.`,
            };
            data.assignment = `Create a queue implementation with enqueue and dequeue operations.`;
            data.miniProject = `Build a small event queue or task scheduler simulation.`,
            data.summary = [`Queue is FIFO.`, `Use front and rear indices carefully.`, `Check empty/full conditions.`];
        } else if (key.includes('trees')) {
            data.overview = `Trees are hierarchical data structures made of nodes with parent-child relationships.`;
            data.why = `They represent structured data like file systems, expression trees, and search trees.`;
            data.theory.beginner = `Beginner: A tree node contains value and child pointers. Binary trees have left and right children.`;
            data.theory.intermediate = `Intermediate: Learn about traversal orders, insertion, and searching in tree structures.`;
            data.theory.advanced = `Advanced: Use trees for efficient sorted data storage and implement balanced or binary search trees for performance.`;
            data.syntax = `struct Node { int value; struct Node *left, *right; };`;
            data.commonMistakes = [`Losing child pointers when inserting nodes.`, `Forgetting to handle empty trees.`, `Using recursion without a base case.`];
            data.bestPractices = [`Define clear node structures.`, `Use helper functions for insertion and traversal.`, `Free tree nodes recursively when done.`];
            data.interview = {
                beginner: [`What is a tree?`, `What is a binary tree?`],
                intermediate: [`How do you traverse a tree?`, `What is the root of a tree?`],
                advanced: [`What is a balanced tree?`, `How do trees improve search performance?`],
            };
            data.exercises = {
                easy: `Define a binary tree node and create a small tree.`,
                medium: `Traverse a tree in-order and print values.`,
                hard: `Insert values into a binary search tree and search for a target.`,
                interview: `Describe the main types of tree traversal.`,
            };
            data.assignment = `Create a binary tree and implement a traversal function.`;
            data.miniProject = `Build a binary search tree with insert and search operations.`,
            data.summary = [`Trees are hierarchical structures.`, `Use nodes with child pointers.`, `Traversal algorithms are key to tree operations.`];
        } else if (key.includes('graphs')) {
            data.overview = `Graphs represent relationships between nodes and are useful for modeling networks, maps, and dependencies.`;
            data.why = `Graphs enable powerful algorithms for shortest paths, connectivity, and scheduling in software systems.`;
            data.theory.beginner = `Beginner: A graph has vertices and edges connecting them. It can be represented with adjacency lists or matrices.`;
            data.theory.intermediate = `Intermediate: Learn basic graph traversal methods like depth-first search and breadth-first search.`;
            data.theory.advanced = `Advanced: Use graphs for complex problems such as shortest-path algorithms, cycle detection, and connectivity analysis.`;
            data.syntax = `Use arrays or linked lists to store adjacency information for each node.`;
            data.commonMistakes = [`Confusing directed and undirected graphs.`, `Forgetting to mark visited nodes during traversal.`, `Using an inefficient representation for sparse graphs.`];
            data.bestPractices = [`Choose the right graph representation for the problem.`, `Track visited nodes to avoid infinite loops.`, `Keep traversal logic clean and well-structured.`];
            data.interview = {
                beginner: [`What is a graph?`, `How can a graph be represented in C?`],
                intermediate: [`What is the difference between adjacency lists and matrices?`, `How does BFS work?`],
                advanced: [`When would you use graphs in a C program?`, `How do you detect cycles in a graph?`],
            };
            data.exercises = {
                easy: `Represent a small graph and print its adjacency list.`,
                medium: `Perform a breadth-first traversal of a graph.`,
                hard: `Implement depth-first search and detect a path between nodes.`,
                interview: `Explain the basic concept of a graph.`,
            };
            data.assignment = `Create a graph representation and implement a simple traversal algorithm.`;
            data.miniProject = `Build a graph explorer that prints reachable nodes from a starting point.`,
            data.summary = [`Graphs model relationships between nodes.`, `Use appropriate representations and traverse carefully.`, `Graphs support powerful algorithms and applications.`];
        } else if (key.includes('hashing')) {
            data.overview = `Hashing maps data to fixed-size indices and is used for fast lookup in tables and sets.`;
            data.why = `Hashing enables efficient average-case access to stored values and is the foundation for hash tables and caches.`;
            data.theory.beginner = `Beginner: A hash function converts a key into an index, and values are stored in buckets or slots based on that index.`;
            data.theory.intermediate = `Intermediate: Learn about collisions, collision resolution strategies, and how hash tables store multiple values in the same bucket.`;
            data.theory.advanced = `Advanced: Choose hash functions carefully, handle collisions efficiently, and understand tradeoffs between load factor and performance.`;
            data.syntax = `Use an array of buckets and a hash function to compute an index from a key.`;
            data.commonMistakes = [`Using a poor hash function that clusters values.`, `Ignoring collision handling.`, `Assuming constant-time behavior for all cases.`];
            data.bestPractices = [`Use a simple but effective hash function.`, `Implement collision resolution with chaining or open addressing.`, `Monitor load factor and resize the table if needed.`];
            data.interview = {
                beginner: [`What is hashing?`, `What is a hash table?`],
                intermediate: [`What is a collision in hashing?`, `How can collisions be resolved?`],
                advanced: [`How does load factor affect hash table performance?`, `What makes a good hash function?`],
            };
            data.exercises = {
                easy: `Map simple string keys to integer values using a hash function.`,
                medium: `Implement a basic hash table with chaining.`,
                hard: `Study collision rates and test different hash functions.`,
                interview: `Explain collision resolution in hash tables.`,
            };
            data.assignment = `Build a simple hash table and demonstrate inserting and retrieving values.`;
            data.miniProject = `Create a keyword lookup table or dictionary using hashing.`,
            data.summary = [`Hashing maps keys to indices.`, `Handle collisions explicitly.`, `Good hash functions improve performance.`];
        }
    } else if (section === '19_ALGORITHMS') {
        if (key.includes('linear search')) {
            data.overview = `Linear search checks each element in a list until it finds the desired value.`;
            data.why = `It is the simplest search algorithm and a good starting point for understanding search techniques.`;
            data.theory.beginner = `Beginner: Linear search scans elements sequentially until it finds a match or reaches the end.`;
            data.theory.intermediate = `Intermediate: It works on unsorted data and has O(n) worst-case time complexity.`;
            data.theory.advanced = `Advanced: Use linear search for small datasets or when data is not sorted, and compare it with faster search methods.`;
            data.syntax = `for (int i = 0; i < n; i++) { if (arr[i] == target) return i; }`;
            data.commonMistakes = [`Forgetting to check every element.`, `Not handling the not-found case.`, `Using it on large datasets where a better algorithm exists.`];
            data.bestPractices = [`Use linear search for small or unsorted data.`, `Check the returned result properly.`, `Document the algorithm's complexity.`];
            data.interview = {
                beginner: [`What is linear search?`, `What is its worst-case complexity?`],
                intermediate: [`When should you use linear search?`, `How do you detect that the item is not found?`],
                advanced: [`How does linear search compare to binary search?`, `What is the time complexity of linear search?`],
            };
            data.exercises = {
                easy: `Implement linear search on an array.`,
                medium: `Search for a value and report whether it exists.`,
                hard: `Compare linear search time with binary search on different datasets.`,
                interview: `Explain why linear search is O(n).` ,
            };
            data.assignment = `Write a program that performs linear search and reports the index of the found item or a not-found message.`;
            data.miniProject = `Create a simple search tool that uses linear search on user-entered data.`;
            data.summary = [`Linear search scans elements sequentially.`, `It is simple but O(n) time.`, `Use it for small or unsorted data.`];
        } else if (key.includes('binary search')) {
            data.overview = `Binary search efficiently finds values in a sorted array by halving the search range each step.`;
            data.why = `It is much faster than linear search for large sorted datasets and is a fundamental algorithm in computer science.`;
            data.theory.beginner = `Beginner: Binary search compares the target with the middle element and narrows the search interval accordingly.`;
            data.theory.intermediate = `Intermediate: It requires sorted input and has O(log n) time complexity. Handling the midpoint and boundaries correctly is important.`;
            data.theory.advanced = `Advanced: Use binary search for fast lookups, and understand edge cases such as duplicates and integer overflow in midpoint calculations.`;
            data.syntax = `while (low <= high) { mid = (low + high) / 2; ... }`;
            data.commonMistakes = [`Using binary search on unsorted data.`, `Getting the mid calculation wrong and causing infinite loops.`, `Ignoring duplicates or boundary cases.`];
            data.bestPractices = [`Ensure the array is sorted before searching.`, `Use low + (high - low) / 2 to avoid overflow.`, `Handle the not-found case clearly.`];
            data.interview = {
                beginner: [`What does binary search require as input?`, `What is the time complexity of binary search?`],
                intermediate: [`Why must the array be sorted?`, `How do you update low and high pointers?`],
                advanced: [`How do you avoid overflow in midpoint calculation?`, `How do you handle duplicate values?`],
            };
            data.exercises = {
                easy: `Implement binary search on a sorted array.`,
                medium: `Search for a target and return its index or -1.`,
                hard: `Adapt binary search for duplicate values or range queries.`,
                interview: `Explain why binary search is faster than linear search.`,
            };
            data.assignment = `Create a program that uses binary search on a sorted array and reports the result.`;
            data.miniProject = `Build a small binary search utility with sorted input and interactive queries.`;
            data.summary = [`Binary search is O(log n).`, `It requires sorted input.`, `Handle midpoints and boundaries carefully.`];
        } else if (key.includes('bubble sort') || key.includes('selection sort') || key.includes('insertion sort') || key.includes('merge sort') || key.includes('quick sort') || key.includes('heap sort')) {
            const algo = key.includes('bubble sort') ? 'Bubble Sort' : key.includes('selection sort') ? 'Selection Sort' : key.includes('insertion sort') ? 'Insertion Sort' : key.includes('merge sort') ? 'Merge Sort' : key.includes('quick sort') ? 'Quick Sort' : 'Heap Sort';
            data.overview = `Learn ${algo}, a sorting algorithm used to order elements in an array.`;
            data.why = `Sorting algorithms are foundational in computer science and help you compare efficiency and implementation strategies.`;
            data.theory.beginner = `Beginner: ${algo} rearranges elements until the array is sorted. It is a good starting point for learning sorting logic.`;
            data.theory.intermediate = `Intermediate: Understand the algorithm's comparisons, swaps, and complexity characteristics.`;
            data.theory.advanced = `Advanced: Compare ${algo} to other sorting methods and choose the best algorithm based on data size and behavior.`;
            data.syntax = `Use loops and comparisons to move values into sorted order.`;
            data.commonMistakes = [`Off-by-one errors in loop boundaries.`, `Failing to swap elements correctly.`, `Using an inefficient algorithm for large data sets.`];
            data.bestPractices = [`Understand the algorithm's tradeoffs.`, `Test sorting with different input orderings.`, `Comment the loop logic for clarity.`];
            data.interview = {
                beginner: [`What is ${algo}?`, `How does ${algo} sort values?`],
                intermediate: [`What is the time complexity of ${algo}?`, `How does ${algo} compare to other sorts?`],
                advanced: [`When is ${algo} appropriate to use?`, `What are its stability characteristics?`],
            };
            data.exercises = {
                easy: `Implement ${algo} for a small array.`,
                medium: `Sort input values and print the sorted array.`,
                hard: `Analyze the algorithm's behavior on sorted or reverse-sorted input.`,
                interview: `Explain the main idea behind ${algo}.` ,
            };
            data.assignment = `Build a sorting program using ${algo} and demonstrate it with sample data.`;
            data.miniProject = `Create a sort benchmark comparing ${algo} with another sorting algorithm.`;
            data.summary = [`${algo} is a classic sorting algorithm.`, `Use it to understand sorting fundamentals.`, `Know its complexity and when it is appropriate.`];
        }
    } else if (section === '20_ADVANCED_C') {
        if (key.includes('command line arguments')) {
            data.overview = `Command-line arguments let a C program receive input from the command shell at startup.`;
            data.why = `They are a standard way to configure programs and pass data without user prompts.`;
            data.theory.beginner = `Beginner: main receives argc and argv parameters representing the number of arguments and an array of strings.`;
            data.theory.intermediate = `Intermediate: Parse numeric and string arguments, and validate the argument count.`,
            data.theory.advanced = `Advanced: Use command-line parsing libraries, handle optional flags, and support usage messages.`;
            data.syntax = `int main(int argc, char *argv[]) { ... }`;
            data.commonMistakes = [`Using argv[0] incorrectly.`, `Not checking argc before accessing argv.`, `Treating command-line arguments as numeric values without conversion.`];
            data.bestPractices = [`Validate argument count.`, `Provide helpful usage output.`, `Use atoi, strtol, or sscanf for conversions and check for errors.`];
            data.interview = {
                beginner: [`What are argc and argv?`, `How do you access the first command-line argument?`],
                intermediate: [`Why should you check argc?`, `How do you convert argv strings to numbers?`],
                advanced: [`How can you implement optional flags and usage messages?`, `What are common mistakes with command-line parsing?`],
            };
            data.exercises = {
                easy: `Print all command-line arguments.`,
                medium: `Read a number from argv and print its square.`,
                hard: `Implement simple command-line options like -h or --help.`,
                interview: `Explain how command-line arguments are passed to main.`,
            };
            data.assignment = `Create a program that accepts arguments and prints a summary of the inputs.`;
            data.miniProject = `Build a command-line utility that accepts options and performs a simple task.`;
            data.summary = [`argc counts arguments.`, `argv holds strings from the command line.`, `Validate and convert arguments carefully.`];
        } else if (key.includes('memory layout')) {
            data.overview = `Memory layout explains how a C program's memory is organized into sections like text, data, heap, and stack.`;
            data.why = `Understanding memory layout helps diagnose bugs, optimize performance, and reason about pointers and storage duration.`;
            data.theory.beginner = `Beginner: C programs typically have a text segment for code, a data segment for globals, a heap for dynamic allocations, and a stack for local variables.`;
            data.theory.intermediate = `Intermediate: Learn how static and dynamic memory are allocated, and how the stack grows during function calls.`;
            data.theory.advanced = `Advanced: Use memory layout knowledge to avoid stack overflow, manage heap allocation, and understand pointer behavior.`;
            data.syntax = `There is no syntax, but visualize segments and how variables are placed in memory.`;
            data.commonMistakes = [`Assuming all memory is laid out the same on every platform.`, `Confusing stack and heap allocation.`, `Using pointers without understanding where the data lives.`];
            data.bestPractices = [`Keep stack-allocated objects small.`, `Free heap memory when it is no longer needed.`, `Use static storage only for data that must persist.`];
            data.interview = {
                beginner: [`What are the main memory regions of a C program?`, `Where are local variables stored?`],
                intermediate: [`What is the difference between heap and stack?`, `Where do global variables live?`],
                advanced: [`How can memory layout affect program behavior?`, `Why can heap fragmentation occur?`],
            };
            data.exercises = {
                easy: `Describe the four main memory regions of a C program.`,
                medium: `Identify where a local array and malloced array are stored.`,
                hard: `Explain what happens to variables when a function returns.`,
                interview: `Describe the stack, heap, data, and text segments.`,
            };
            data.assignment = `Write a document or comment-rich program explaining where each variable is stored in memory.`;
            data.miniProject = `Create a memory layout diagram and sample code demonstrating each region.`;
            data.summary = [`Programs have text, data, heap, and stack segments.`, `Local variables are on the stack.`, `Dynamic allocations come from the heap.`];
        } else if (key.includes('dangling pointers')) {
            data.overview = `Dangling pointers refer to memory that has been freed or gone out of scope, leading to unsafe access.`;
            data.why = `Preventing dangling pointers is crucial for reliable C programs and avoiding crashes or security vulnerabilities.`;
            data.theory.beginner = `Beginner: A pointer becomes dangling when it points to memory that is no longer valid, such as after free or when a local variable goes out of scope.`;
            data.theory.intermediate = `Intermediate: Learn to set pointers to NULL after freeing memory and to avoid returning pointers to local variables.`;
            data.theory.advanced = `Advanced: Use careful ownership and lifetime management to ensure pointers always reference valid memory.`;
            data.syntax = `int *p = malloc(sizeof(int)); free(p); p = NULL;`;
            data.commonMistakes = [`Using a pointer after calling free.`, `Returning a pointer to a local stack variable.`, `Not resetting a pointer after freeing its memory.`];
            data.bestPractices = [`Set pointers to NULL after freeing.`, `Never return a pointer to a local variable.`, `Document ownership and lifetime of dynamically allocated memory.`];
            data.interview = {
                beginner: [`What is a dangling pointer?`, `How can a pointer become dangling?`],
                intermediate: [`Why should you set a freed pointer to NULL?`, `What happens if you dereference a dangling pointer?`],
                advanced: [`How do you avoid dangling pointers in complex code?`, `What is the relationship between pointers and object lifetime?`],
            };
            data.exercises = {
                easy: `Create a pointer, free the memory, and set it to NULL.`,
                medium: `Identify a dangling pointer bug in a sample program.`,
                hard: `Refactor code to eliminate a dangling pointer scenario.`,
                interview: `Explain why dangling pointers are dangerous.`,
            };
            data.assignment = `Write a program that allocates memory, frees it, and demonstrates safe pointer handling.`,
            data.miniProject = `Create a small memory manager that tracks allocation and avoids dangling references.`,
            data.summary = [`Dangling pointers point to invalid memory.`, `Set freed pointers to NULL.`, `Avoid returning pointers to local variables.`];
        } else if (key.includes('wild pointers')) {
            data.overview = `Wild pointers are uninitialized pointers that point to unpredictable memory locations.`;
            data.why = `Recognizing and avoiding wild pointers prevents undefined behavior and security issues in C programs.`;
            data.theory.beginner = `Beginner: A wild pointer is a pointer variable that has not been initialized before its first use.`;
            data.theory.intermediate = `Intermediate: Always initialize pointers to NULL or to a valid address before dereferencing them.`;
            data.theory.advanced = `Advanced: Use static analysis, code review, and disciplined initialization to eliminate wild pointer risks.`;
            data.syntax = `int *p = NULL;`;
            data.commonMistakes = [`Dereferencing a pointer that was never initialized.`, `Assuming an uninitialized pointer contains a safe default address.`, `Mixing wildcard pointer use with pointer arithmetic incorrectly.`];
            data.bestPractices = [`Initialize pointers to NULL or a valid address.`, `Check pointer values before dereferencing.`, `Avoid leaving pointers uninitialized in structs or arrays.`];
            data.interview = {
                beginner: [`What is a wild pointer?`, `How do you prevent wild pointers?`],
                intermediate: [`Why is it unsafe to dereference an uninitialized pointer?`, `What value should you assign to a pointer if it has no address yet?`],
                advanced: [`How can wild pointers lead to security vulnerabilities?`, `What tools help detect uninitialized pointer use?`],
            };
            data.exercises = {
                easy: `Declare a pointer and initialize it to NULL.`,
                medium: `Demonstrate a wild pointer by using an uninitialized pointer and fix it.`,
                hard: `Analyze code for uninitialized pointers and correct them.`,
                interview: `Explain why wild pointers are dangerous in C.`,
            };
            data.assignment = `Write safe pointer initialization code and explain why it prevents wild pointers.`,
            data.miniProject = `Create a small pointer validation helper that checks for NULL before use.`,
            data.summary = [`Wild pointers are uninitialized pointers.`, `Initialize pointers to NULL or valid memory.`, `Always validate pointers before dereferencing.`];
        } else if (key.includes('debugging')) {
            data.overview = `Debugging is the process of finding and fixing bugs in C programs using tools, printouts, and careful reasoning.`;
            data.why = `All programmers need debugging skills to diagnose crashes, logic errors, and incorrect results.`;
            data.theory.beginner = `Beginner: Use printf statements, compiler warnings, and simple tests to find where code behaves unexpectedly.`;
            data.theory.intermediate = `Intermediate: Learn how to use a debugger, examine variables, step through code, and inspect memory.`;
            data.theory.advanced = `Advanced: Use sanitizers, watchpoints, and systematic problem-solving to find elusive runtime issues.`;
            data.syntax = `Use tools like gdb or printf to inspect values and execution flow.`;
            data.commonMistakes = [`Ignoring compiler warnings and assuming the code is correct.`, `Using printf without understanding the program state.`, `Making changes without isolating the root cause.`];
            data.bestPractices = [`Use a debugger for complex bugs.`, `Reproduce issues with simple test cases.`, `Fix the root cause instead of masking symptoms.`];
            data.interview = {
                beginner: [`What is debugging?`, `How can printf help debug a C program?`],
                intermediate: [`What is a debugger?`, `How do you inspect variables at runtime?`],
                advanced: [`What are memory sanitizers?`, `How do you debug a segmentation fault?`],
            };
            data.exercises = {
                easy: `Use printf to print a variable's value at key points in a program.`,
                medium: `Use a debugger to step through a small program and observe its flow.`,
                hard: `Diagnose and fix a bug that produces incorrect output.`,
                interview: `Explain your debugging process for a C program.`,
            };
            data.assignment = `Debug a small C program with a known bug and document the steps you took to fix it.`;
            data.miniProject = `Create a bug report and fix it using a debugger and test cases.`,
            data.summary = [`Debugging finds and fixes bugs.`, `Use tools and careful reasoning.`, `Address the root cause, not just symptoms.`];
        } else if (key.includes('assertions')) {
            data.overview = `Assertions check assumptions in code and abort execution if an expected condition is false.`;
            data.why = `They help catch programming errors early and document invariants during development.`;
            data.theory.beginner = `Beginner: Use assert(expression) from <assert.h> to verify that an expression should always be true.`;
            data.theory.intermediate = `Intermediate: Assertions are used during development and can be disabled in production builds with NDEBUG.`;
            data.theory.advanced = `Advanced: Use assertions to enforce invariants and catch invalid internal states before they lead to undefined behavior.`;
            data.syntax = `assert(ptr != NULL);`;
            data.commonMistakes = [`Using assertions for user input validation.`, `Leaving assertions enabled for expected runtime errors.`, `Using assert with side effects in the expression.`];
            data.bestPractices = [`Use assertions for internal consistency checks.`, `Do not rely on them for normal error handling.`, `Keep assert expressions side-effect-free.`];
            data.interview = {
                beginner: [`What is assert used for?`, `What happens when an assertion fails?`],
                intermediate: [`Why should assertions be disabled in production?`, `What belongs in an assertion versus normal error handling?`],
                advanced: [`How do assertions help catch undefined behavior early?`, `What are the risks of using assert with side effects?`],
            };
            data.exercises = {
                easy: `Add an assertion to a function that checks a precondition.`,
                medium: `Use assert to check pointer validity before dereferencing.`,
                hard: `Design assertions for invariants in a small data structure.`,
                interview: `Explain the difference between an assertion and error handling.`,
            };
            data.assignment = `Write a program with assertions that validate key assumptions.`,
            data.miniProject = `Create a small module that uses assertions to verify internal logic.`,
            data.summary = [`Assertions validate assumptions.`, `Use them during development, not for normal input errors.`, `Keep assert expressions free of side effects.`];
        }
    } else if (section === '21_SYSTEM_PROGRAMMING') {
        if (key.includes('processes')) {
            data.overview = `Processes are executing instances of programs and are managed by the operating system.`;
            data.why = `Understanding processes is important for system programming, multitasking, and how C programs run on Linux and other systems.`;
            data.theory.beginner = `Beginner: A process contains code, data, stack, and heap. The OS assigns each process its own memory space.`;
            data.theory.intermediate = `Intermediate: Learn how processes are created, scheduled, and terminated, and how they communicate with the OS.`;
            data.theory.advanced = `Advanced: Explore process states, context switching, and how system calls interface with the kernel.`;
            data.syntax = `No direct C syntax, but understand how process APIs work in system programming.`;
            data.commonMistakes = [`Confusing processes with threads.`, `Assuming multiple processes share the same memory.`, `Ignoring OS-level errors when spawning or managing processes.`];
            data.bestPractices = [`Handle system call errors carefully.`, `Document process assumptions and lifecycle.`, `Use the OS tools to monitor process behavior.`];
            data.interview = {
                beginner: [`What is a process?`, `What components does a process have?`],
                intermediate: [`How does the OS manage processes?`, `What is process isolation?`],
                advanced: [`What is context switching?`, `How do system calls interact with processes?`],
            };
            data.exercises = {
                easy: `Research and summarize the lifecycle of a process.`,
                medium: `Identify process states in an operating system.`,
                hard: `Write a small report on how C programs become processes.`,
                interview: `Explain the difference between a process and a program.`,
            };
            data.assignment = `Document how a C program is executed as a process by the OS.`;
            data.miniProject = `Create a conceptual diagram of process states and transitions.`;
            data.summary = [`A process is a running program.`, `The OS manages process memory and scheduling.`, `Processes are isolated from each other.`];
        } else if (key.includes('threads')) {
            data.overview = `Threads are lightweight execution units within a process that share the same memory space.`;
            data.why = `Threads enable concurrent execution, which is useful for responsive applications and parallel workloads.`;
            data.theory.beginner = `Beginner: A process may contain multiple threads that run concurrently and share data within the same address space.`;
            data.theory.intermediate = `Intermediate: Learn about thread creation, shared resources, and the need for synchronization to avoid race conditions.`;
            data.theory.advanced = `Advanced: Use mutexes, condition variables, and careful design to build thread-safe C programs.`;
            data.syntax = `Thread APIs vary by platform, but the concept of shared memory and concurrency is central.`;
            data.commonMistakes = [`Accessing shared data without synchronization.`, `Creating too many threads and overwhelming the system.`, `Assuming thread scheduling is deterministic.`];
            data.bestPractices = [`Protect shared resources with locks.`, `Keep thread tasks independent when possible.`, `Avoid deadlocks with clear locking order.`];
            data.interview = {
                beginner: [`What is a thread?`, `How does a thread differ from a process?`],
                intermediate: [`Why do threads share memory?`, `What is a race condition?`],
                advanced: [`How do you synchronize threads safely?`, `What are common deadlock causes?`],
            };
            data.exercises = {
                easy: `Research thread basics and write a summary.`,
                medium: `Describe a race condition and how to prevent it.`,
                hard: `Design a small threaded workflow with synchronization.`,
                interview: `Explain why thread safety matters.`,
            };
            data.assignment = `Document thread concepts and how they differ from processes.`,
            data.miniProject = `Create a conceptual design for a simple multi-threaded C program.`;
            data.summary = [`Threads are concurrent execution units.`, `They share memory within a process.`, `Synchronization is required for shared data.`];
        } else if (key.includes('ipc')) {
            data.overview = `Inter-process communication (IPC) allows separate processes to exchange data and synchronize with each other.`;
            data.why = `IPC is essential for building cooperating programs, servers, and system utilities that work together.`;
            data.theory.beginner = `Beginner: IPC mechanisms include pipes, message queues, shared memory, and signals. Each enables different communication patterns.`;
            data.theory.intermediate = `Intermediate: Learn when to use each IPC method and how it affects data transfer, synchronization, and performance.`;
            data.theory.advanced = `Advanced: Build robust IPC solutions with error handling, data serialization, and coordination between processes.`;
            data.syntax = `IPC APIs vary by system, but the concepts of message passing and shared state are central.`;
            data.commonMistakes = [`Choosing the wrong IPC mechanism for the problem.`, `Not handling partial reads or writes.`, `Ignoring synchronization between communicating processes.`];
            data.bestPractices = [`Choose the simplest IPC method that meets your needs.`, `Handle errors and timeouts explicitly.`, `Keep protocols and shared formats well-defined.`];
            data.interview = {
                beginner: [`What is IPC?`, `Name some IPC mechanisms.`],
                intermediate: [`When would you use pipes versus shared memory?`, `What is message passing?`],
                advanced: [`How do you coordinate multiple processes safely?`, `What are the tradeoffs between IPC methods?`],
            };
            data.exercises = {
                easy: `Research IPC methods and list their uses.`,
                medium: `Explain how two processes can send messages to each other.`,
                hard: `Design an IPC protocol for a simple producer-consumer system.`,
                interview: `Describe the purpose of IPC.`,
            };
            data.assignment = `Write a summary of common IPC methods and when to use each one.`;
            data.miniProject = `Design a simple process communication plan for two cooperating programs.`;
            data.summary = [`IPC enables communication between processes.`, `Choose the right mechanism for the use case.`, `Handle synchronization and errors carefully.`];
        } else if (key.includes('semaphores')) {
            data.overview = `Semaphores are synchronization primitives used to control access to shared resources across processes or threads.`;
            data.why = `They prevent race conditions and coordinate access in concurrent systems.`;
            data.theory.beginner = `Beginner: A semaphore has a count that indicates how many resources are available. Processes wait when the count is zero and signal when they release a resource.`;
            data.theory.intermediate = `Intermediate: Learn the difference between binary semaphores (mutexes) and counting semaphores, and how they coordinate resource use.`;
            data.theory.advanced = `Advanced: Use semaphores carefully to avoid deadlocks and priority inversion in concurrent programs.`;
            data.syntax = `sem_t sem; sem_init(&sem, 0, 1);`;
            data.commonMistakes = [`Forgetting to post (signal) a semaphore after waiting.`, `Using semaphores for the wrong synchronization pattern.`, `Creating deadlocks by holding multiple semaphores.`];
            data.bestPractices = [`Use semaphores for shared resource control.`, `Release semaphores in the opposite order you acquire them.`, `Document the synchronization design clearly.`];
            data.interview = {
                beginner: [`What is a semaphore?`, `What does sem_wait do?`],
                intermediate: [`What is the difference between binary and counting semaphores?`, `Why are semaphores used for synchronization?`],
                advanced: [`How can semaphores cause deadlock?`, `When should you use a semaphore instead of a mutex?`],
            };
            data.exercises = {
                easy: `Describe how a semaphore controls resource access.`,
                medium: `Draw the state changes when a process waits and signals a semaphore.`,
                hard: `Explain a producer-consumer solution using semaphores.`,
                interview: `Explain the purpose of semaphores in synchronization.`,
            };
            data.assignment = `Research how semaphores work and document a simple use case.`,
            data.miniProject = `Design a producer-consumer model using semaphores in concept or pseudocode.`,
            data.summary = [`Semaphores synchronize access to shared resources.`, `Use them to prevent race conditions.`, `Avoid deadlocks with careful design.`];
        } else if (key.includes('sockets')) {
            data.overview = `Sockets provide a programming interface for network communication between processes or machines.`;
            data.why = `They are the core building blocks for client-server applications and networked services in C.`;
            data.theory.beginner = `Beginner: A socket is an endpoint for communication. You can create sockets, bind them to addresses, listen for connections, and send or receive data.`;
            data.theory.intermediate = `Intermediate: Learn the differences between TCP and UDP, and how socket functions work together in a network program.`;
            data.theory.advanced = `Advanced: Use sockets for scalable network servers and understand blocking versus non-blocking I/O and error handling.`;
            data.syntax = `int sock = socket(AF_INET, SOCK_STREAM, 0);`;
            data.commonMistakes = [`Not checking return values for socket functions.`, `Mixing up address structures and port numbers.`, `Using blocking sockets without handling timeouts.`];
            data.bestPractices = [`Check all socket calls for errors.`, `Use the correct address family and socket type.`, `Close sockets when you are done with them.`];
            data.interview = {
                beginner: [`What is a socket?`, `What is the difference between TCP and UDP?`],
                intermediate: [`How do you create and bind a socket?`, `What does listen do?`],
                advanced: [`How do you build a scalable socket server?`, `What is non-blocking socket I/O?`],
            };
            data.exercises = {
                easy: `Review socket API concepts and write down the main steps.`,
                medium: `Explain the sequence of socket calls for a TCP server.`,
                hard: `Design a simple client-server interaction using sockets.`,
                interview: `Describe the basic socket lifecycle.`,
            };
            data.assignment = `Write a conceptual plan for a simple networked C program using sockets.`;
            data.miniProject = `Build a minimal client-server communication design in pseudocode or real C if possible.`,
            data.summary = [`Sockets enable network communication.`, `Use TCP for reliable streams and UDP for datagrams.`, `Check socket errors and close resources.`];
        } else if (key.includes('linux system calls')) {
            data.overview = `Linux system calls are low-level interfaces that let C programs request services from the kernel.`;
            data.why = `They provide direct access to OS features such as files, processes, and device I/O, which is essential for system programming.`;
            data.theory.beginner = `Beginner: System calls like open, read, write, and fork are invoked through wrapper functions and let user code interact with the kernel.`;
            data.theory.intermediate = `Intermediate: Learn how system calls differ from library functions, and how to handle errors returned by the kernel.`;
            data.theory.advanced = `Advanced: Use system calls for low-level control, performance tuning, and OS-specific programming while being mindful of portability.`;
            data.syntax = `int fd = open("file.txt", O_RDONLY);`;
            data.commonMistakes = [`Confusing library functions with system calls.`, `Ignoring error return values.`, `Using OS-specific system calls without portability guards.`];
            data.bestPractices = [`Check system call return values.`, `Document OS-specific assumptions.`, `Use higher-level libraries when portability is required.`];
            data.interview = {
                beginner: [`What is a system call?`, `Give an example of a Linux system call.`],
                intermediate: [`How do you handle errors from system calls?`, `What is the role of the kernel in system calls?`],
                advanced: [`How do system calls affect portability?`, `Why do system calls require wrappers in C?`],
            };
            data.exercises = {
                easy: `Research a common Linux system call and describe its purpose.`,
                medium: `Explain the difference between open/read/write and fopen/fread/fwrite.`,
                hard: `Design a C program that uses a Linux system call for file access or process control.`,
                interview: `Describe how a system call crosses from user mode to kernel mode.`,
            };
            data.assignment = `Document a Linux system call example and its error handling.`,
            data.miniProject = `Create a small system programming concept demonstration using one or two Linux system calls.`,
            data.summary = [`System calls request kernel services.`, `Check returns and handle errors.`, `Remember portability tradeoffs.`];
        }
    } else if (section === '22_PROJECTS') {
        data.overview = `This project topic covers building a complete C application, including design, implementation, and testing.`;
        data.why = `Projects demonstrate how the language topics come together into real-world software and provide practical experience.`;
        data.theory.beginner = `Beginner: Understand the project requirements, the programming concepts involved, and how each module will interact.`;
        data.theory.intermediate = `Intermediate: Plan the architecture, define source files, and implement the main features using C best practices.`;
        data.theory.advanced = `Advanced: Add error handling, modular design, documentation, and test cases to make the project reliable and maintainable.`;
        data.syntax = `Projects use a combination of C syntax topics based on the project goals, including structs, file I/O, and control flow.`;
        data.commonMistakes = [`Starting implementation without a clear design.`, `Ignoring edge cases and user input validation.`, `Skipping tests and documentation.`];
        data.bestPractices = [`Define requirements clearly before coding.`, `Use modular source files and functions.`, `Document the project and include test cases.`];
        data.interview = {
            beginner: [`What is the purpose of this project?`, `What features does the project include?`],
            intermediate: [`How is the project structured?`, `What data structures and algorithms does it use?`],
            advanced: [`How do you test and maintain the project?`, `What improvements would you make next?`],
        };
        data.exercises = {
            easy: `Review the project requirements and list the major modules.`,
            medium: `Outline the project architecture and file structure.`,
            hard: `Implement key features and write test cases.`,
            interview: `Describe the design decisions behind your project.`,
        };
        data.assignment = `Build the project from requirements, implement it in C, and document the design and testing process.`;
        data.miniProject = `Use this topic as a capstone project to combine multiple C concepts.`;
        data.summary = [`Projects bring topics together into working software.`, `Plan before coding and test thoroughly.`, `Document design, implementation, and usage.`];
    }

    return data;
}

function generateReadme(title, number, nextPath, section) {
    const data = getTopicData(title, section);
    const nextLink = nextPath ? `[Next Topic](${nextPath}/README.md)` : 'End of course';
    const codeBlock = ['```c', exampleCode(title), '```'].join('\n');
    return `# ${number} – ${normalizeTitle(title)}

## Overview

${data.overview}

## Why This Topic Matters

${data.why}

## Learning Objectives

${data.objectives.map((item) => `- ${item}`).join('\n')}

## Theory

${data.theory.beginner}

${data.theory.intermediate}

${data.theory.advanced}

## Internal Working

${data.internalWorking}

## Syntax

${data.syntax}

## Examples

### Example 1 (Basic)

${codeBlock}

Explanation: Basic usage of the topic.

Output: The program demonstrates the foundational behavior.

### Example 2 (Intermediate)

${codeBlock}

Explanation: A more practical example with additional structure.

Output: The program shows how the topic is used in a realistic case.

### Example 3 (Advanced)

${codeBlock}

Explanation: A stronger example that prepares you for professional use.

Output: The program illustrates a robust application.

### Example 4 (Production Style)

${codeBlock}

Explanation: Production-quality code structure and safe practices.

Output: The program demonstrates clean design and maintainability.

## Memory Visualization

${data.memoryVisualization}

## Common Mistakes

${data.commonMistakes.map((item) => `- ${item}`).join('\n')}

## Best Practices

${data.bestPractices.map((item) => `- ${item}`).join('\n')}

## Interview Questions

### Beginner

${data.interview.beginner.map((q) => `- ${q}`).join('\n')}

### Intermediate

${data.interview.intermediate.map((q) => `- ${q}`).join('\n')}

### Advanced

${data.interview.advanced.map((q) => `- ${q}`).join('\n')}

## Exercises

Easy

- ${data.exercises.easy}

Medium

- ${data.exercises.medium}

Hard

- ${data.exercises.hard}

Interview

- ${data.exercises.interview}

## Assignment

${data.assignment}

## Mini Project

${data.miniProject}

## Summary Notes

${data.summary.map((item) => `- ${item}`).join('\n')}

## Next Topic

${nextLink}
`;
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
}

function writeFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf8');
}

function makeNotes(topicDir, title) {
    const notesDir = path.join(topicDir, 'notes');
    ensureDir(notesDir);
    const notes = {
        'quick_revision.md': `# Quick Revision – ${title}\n\n- Definition: ${title}.\n- Key points: core concept, syntax, common usage.\n- Remember: practice with examples.\n`,
        'interview_notes.md': `# Interview Notes – ${title}\n\n- Why it matters: real systems use ${title}.\n- Common question: explain ${title}.\n- Tip: show correct syntax and an example.\n`,
        'cheatsheet.md': `# Cheatsheet – ${title}\n\n- Shortcut: use consistent code style.\n- Common patterns: simple example usage.\n`,
        'advanced_notes.md': `# Advanced Notes – ${title}\n\n- Deep dive: how ${title} behaves at runtime.\n- Performance: keep a clean allocation and control flow model.\n`,
    };
    for (const [filename, content] of Object.entries(notes)) {
        writeFile(path.join(notesDir, filename), content);
    }
}

function makeExamples(topicDir, title) {
    const examplesDir = path.join(topicDir, 'examples');
    ensureDir(examplesDir);
    const labels = ['basic', 'intermediate', 'advanced', 'industry', 'production'];
    labels.forEach((label, index) => {
        writeFile(path.join(examplesDir, `example${String(index + 1).padStart(2, '0')}_${label}.c`), exampleCode(title));
    });
}

function makeExercises(topicDir, title) {
    const levels = ['easy', 'medium', 'hard', 'interview'];
    levels.forEach((level) => {
        const levelDir = path.join(topicDir, 'exercises', level);
        ensureDir(levelDir);
        writeFile(path.join(levelDir, 'problem01.md'), `# Problem 01 – ${level.charAt(0).toUpperCase() + level.slice(1)}\n\nCreate a C program demonstrating ${title.toLowerCase()}.\n\nRequirements:\n- Use the core feature clearly.\n- Keep the code readable and documented.\n\nSample Input:\n- There is no input for this example.\n\nSample Output:\n- One example output that proves the program works.\n`);
    });
}

function makeSolutions(topicDir, title) {
    const levels = ['easy', 'medium', 'hard', 'interview'];
    levels.forEach((level) => {
        const solDir = path.join(topicDir, 'solutions', level, 'problem01');
        ensureDir(solDir);
        writeFile(path.join(solDir, 'solution.c'), exampleCode(title));
        writeFile(path.join(solDir, 'README.md'), `# Solution – ${title} (${level.charAt(0).toUpperCase() + level.slice(1)})\n\nThis solution demonstrates ${title} for the ${level} problem.\n`);
    });
}

function makeAssignments(topicDir, title) {
    const assignDir = path.join(topicDir, 'assignments');
    ensureDir(assignDir);
    for (let i = 1; i <= 2; i += 1) {
        writeFile(path.join(assignDir, `assignment${String(i).padStart(2, '0')}.md`), `# Assignment ${String(i).padStart(2, '0')} – ${title}\n\n## Requirements\n\n- Build a C program that uses ${title}.\n\n## Constraints\n\n- Use C99/C11 compatible syntax.\n- Add comments for each major section.\n\n## Sample Input\n\n- Use fixed values or command-line input where relevant.\n\n## Sample Output\n\n- Print a meaningful result that shows the topic works.\n\n## Evaluation Criteria\n\n- Correctness, code style, comments, and edge-case handling.\n`);
    }
}

function makeProjectModule(topicDir, title) {
    ensureDir(topicDir);
    ['requirements.md', 'design.md', 'architecture.md'].forEach((filename) => {
        writeFile(path.join(topicDir, filename), `# ${title} – ${filename.replace('.md', '').replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())}\n\nA professional module describing ${title}.\n`);
    });
    const src = path.join(topicDir, 'source');
    ensureDir(src);
    writeFile(path.join(src, 'main.c'), `#include <stdio.h>\n\nint main(void) {\n    printf("${title} project entry point.\\n");\n    return 0;\n}\n`);
    const docs = path.join(topicDir, 'documentation');
    ensureDir(docs);
    writeFile(path.join(docs, 'overview.md'), `# Documentation – ${title}\n\nOverview of the project design, features, and setup.\n`);
    const tests = path.join(topicDir, 'test_cases');
    ensureDir(tests);
    writeFile(path.join(tests, 'test_plan.md'), `# Test Cases – ${title}\n\nList the primary test scenarios for ${title}.\n`);
}

function processTopic(pathRel, nextPath) {
    const topicDir = path.join(root, pathRel);
    ensureDir(topicDir);
    const title = titleFromFolder(path.basename(topicDir));
    const number = topicNumber(path.basename(topicDir));
    const section = pathRel.split('/')[0];
    writeFile(path.join(topicDir, 'README.md'), generateReadme(title, number, nextPath, section));
    makeNotes(topicDir, title);
    makeExamples(topicDir, title);
    makeExercises(topicDir, title);
    makeSolutions(topicDir, title);
    makeAssignments(topicDir, title);
    if (isProjectTopic(pathRel)) {
        makeProjectModule(topicDir, title);
    }
}

function updateRootReadme() {
    writeFile(path.join(root, 'README.md'), `# C PROGRAMMING MASTERCLASS\n\nA complete, structured repository for learning C from beginner to advanced level.\n\n## Overview\n\nThis repository contains 139 topic lessons covering fundamentals, basic syntax, data structures, algorithms, advanced C, system programming, and capstone projects.\n\n## Structure\n\n- 01_FUNDAMENTALS/\n- 02_BASICS/\n- 03_INPUT_OUTPUT/\n- 04_OPERATORS/\n- 05_CONDITIONAL_STATEMENTS/\n- 06_LOOPS/\n- 07_PATTERN_PROGRAMMING/\n- 08_FUNCTIONS/\n- 09_ARRAYS/\n- 10_STRINGS/\n- 11_POINTERS/\n- 12_STRUCTURES_UNIONS/\n- 13_DYNAMIC_MEMORY/\n- 14_FILE_HANDLING/\n- 15_PREPROCESSOR/\n- 16_STORAGE_CLASSES/\n- 17_BIT_MANIPULATION/\n- 18_DATA_STRUCTURES/\n- 19_ALGORITHMS/\n- 20_ADVANCED_C/\n- 21_SYSTEM_PROGRAMMING/\n- 22_PROJECTS/\n\n## How to use this repository\n\n1. Start at \`01_FUNDAMENTALS/01_Introduction_To_Programming/README.md\`.\n2. Complete the theory, examples, notes, and exercises in each topic.\n3. Use assignments and projects to deepen your understanding.\n4. Follow the learning path through the next-topic links.\n\n## Notes\n\n- Each topic includes a complete README, notes, examples, exercises, solutions, and assignments.\n- Project topics include requirements, design, architecture, source code, documentation, and test cases.\n`);
}

function main() {
    folders.forEach((pathRel, index) => {
        const nextPath = folders[index + 1] || null;
        processTopic(pathRel, nextPath);
    });
    updateRootReadme();
    console.log('Course generation complete.');
}

main();

