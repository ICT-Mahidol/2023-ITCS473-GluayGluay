Sudoku
======

This is a Sudoku game programmed using Java and Swing for the GUI. It currently supports 6x6, 9x9, and 12x12 puzzles.

![screenshot](https://raw.githubusercontent.com/mattnenterprise/Sudoku/master/screenshot.png)

### Test Case: testGenerateRandomSudoku

#### Goal
To validate that the `generateRandomSudoku` method creates a valid Sudoku grid of the specified type.

#### Characteristics Developed
- **Interface-based**: Ensuring the generated grid is non-null and of the specified type.
- **Functionality-based**: Ensuring the generated grid adheres to Sudoku rules.

#### Input Domain Modeling Steps
a. **Identify Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
b. **Identify Parameters**: `SudokuPuzzleType type`
c. **Return Types and Values**: Returns a `SudokuPuzzle` object, should be non-null and valid.
d. **Model the Input Domain**: [NINEBYNINE, FOURBYFOUR, etc.]
e. **Combine Partitions**: Using ACoC, ECC, etc.
f. **Derive Test Values and Expected Values**: For a NINEBYNINE type, expect a 9x9 grid.
