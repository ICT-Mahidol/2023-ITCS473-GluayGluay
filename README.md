# 🐈 GluayGluay 🍌: Testing for Sudoku

## ITCS473 - Software Quality Assurance and Testing
### 🏫 Mahidol University, ICT

## Table of Contents
- [Introduction](#-introduction)
- [Project Details](#-project-details)
- [Added Unit Test Cases](#-added-unit-test-cases)
- [Test Case Documentation](#-test-case-documentation)
  - [Test Case 1](#-test-case-name-testgeneraterandomsudokupuzzletypewithtypesixbysix_returnboardlengthis6)
  - [Test Case 2](#2-testgeneraterandomsudokupuzzletypewithtypeninebynine_returnboardlengthis9)
  - [Test Case 3](#3-testgeneraterandomsudokupuzzletypewithtypetwelvebytwelve_returnboardlengthis1)
  - [Test Case 4](#4-testgeneraterandomsudokupuzzletypewithtypesixteenbysixteen_returnboardlengthis16)
  - [Test Case 5](#5-testmakemove)
  - [Test Case 6](#6-testwhencallisvalidvaluewithinvalidvalue_returnfalse)
  - [Test Case 7](#7-testwhencallisvalidmove_returncorrectresult)
  - [Test Case 8](#8-testnuminrowcolbox)
  - [Test Case 9](#9-testgetvalue)
  - [Test Case 10](#10-yourtestcasename)
- [License](#-license)

### 🚀 Introduction
This repository represents our team's enhancements for the Sudoku project as part of the "Project Assignment 1: Unit Test for Open-Source Software Projects". We've aimed to extend the robustness and coverage of testing by adding 10 additional unit test cases.

### 📌 Project Details
- **GitHub Repository**: [Sudoku](https://github.com/mattnenterprise/Sudoku) by Matt McCoy (mattnenterprise)
- **Star Count**: 🌟 48 ⭐️
- **Programming Language**: Java ☕️
- **Existing Testing Framework**: Gradle 🐘

### 🧪 Added Unit Test Cases
The additional unit test cases are located in the [`SudokuTest.java`](src/test/java/sudoku/SudokuTest.java) file in this repository, each focusing on specific functionalities or interfaces of the application.

### 📜 Test Case Documentation

A structured documentation of test cases aiming to validate various functionalities of the Sudoku application.

#### 1. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeSIXBYSIX_thenReturnBoardLengthIs6

- **Goal**: Validate that generating a random Sudoku puzzle of type SIXBYSIX results in a board of length 6.
  
- **Characteristics**: 
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    
- **Input Domain Modeling**:
  - **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
  - **Parameters and Return Types**: The function takes a `SudokuPuzzleType` and returns a `SudokuPuzzle`.
  - **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.
    
- **Exceptional Behavior**:
  
- **Approaches Used**: [ACoC, ECC, PWC, BCC, MBCC] - Specify which approaches were used for this test case.
  
- **Test and Expected Values**: When tested with `SudokuPuzzleType.SIXBYSIX` should return a board of length 6.

### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that generating a SIXBYSIX type puzzle results in a board of length 6.
    ```java
    assertEquals(6, generatedPuzzle.getBoardLength());
    ```
- **Negative Test Scenarios**: 
  - Validate that generating a SIXBYSIX type puzzle does not result in a board of length 9.
    ```java
    assertNotEquals(9, generatedPuzzle.getBoardLength());
    ```

#### 2. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeNINEBYNINE_thenReturnBoardLengthIs9

- **Goal**: Validate that generating a random Sudoku puzzle of type NINEBYNINE results in a board of length 9.
  
- **Characteristics**: 
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    
- **Input Domain Modeling**:
  - **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
  - **Parameters and Return Types**: The function takes a `SudokuPuzzleType` and returns a `SudokuPuzzle`.
  - **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.
    
- **Exceptional Behavior**:
  
- **Approaches Used**: [ACoC, ECC, PWC, BCC, MBCC] - Specify which approaches were used for this test case.
  
- **Test and Expected Values**: When tested with `SudokuPuzzleType.NINENINE` should return a board of length 9.

### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that generating a NINEBYNINE type puzzle results in a board of length 9.
    ```java
    assertEquals(9, generatedPuzzle.getBoardLength());
    ```
- **Negative Test Scenarios**: 
  - Validate that generating a NINEBYNINE type puzzle does not result in a board of length 6.
    ```java
    assertNotEquals(6, generatedPuzzle.getBoardLength());
    ```

#### 3. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeTWELVEBYTWELVE_thenReturnBoardLengthIs1

- **Goal**: Validate that generating a random Sudoku puzzle of type TWELVEBYTWELVE results in a board of length 12.
  
- **Characteristics**: 
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    
- **Input Domain Modeling**:
  - **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
  - **Parameters and Return Types**: The function takes a `SudokuPuzzleType` and returns a `SudokuPuzzle`.
  - **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.
    
- **Exceptional Behavior**:
  
- **Approaches Used**: [ACoC, ECC, PWC, BCC, MBCC] - Specify which approaches were used for this test case.
  
- **Test and Expected Values**: When tested with `SudokuPuzzleType.TWELVEBYTWELVE` should return a board of length 12.

### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that generating a TWELVEBYTWELVE type puzzle results in a board of length 12.
    ```java
    assertEquals(12, generatedPuzzle.getBoard().length);
    ```
- **Negative Test Scenarios**: 
  - Validate that generating a TWELVEBYTWELVE type puzzle does not result in a board of length 6.
    ```java
    assertNotEquals(6, generatedPuzzle.getBoardLength());
    ```

#### 4. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeSIXTEENBYSIXTEEN_thenReturnBoardLengthIs16

- **Goal**: Validate that generating a random Sudoku puzzle of type SIXTEENBYSIXTEEN results in a board of length 16.
  
- **Characteristics**: 
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    
- **Input Domain Modeling**:
  - **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
  - **Parameters and Return Types**: The function takes a `SudokuPuzzleType` and returns a `SudokuPuzzle`.
  - **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.
    
- **Exceptional Behavior**:
  
- **Approaches Used**: [ACoC, ECC, PWC, BCC, MBCC] - Specify which approaches were used for this test case.
  
- **Test and Expected Values**: When tested with `SudokuPuzzleType.SIXTEENBYSIXTEEN` should return a board of length 16.

### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that generating a SIXTEENBYSIXTEEN type puzzle results in a board of length 16.
    ```java
    assertEquals(16, generatedPuzzle.getBoard().length);
    ```
- **Negative Test Scenarios**: 
  - Validate that generating a SIXTEENBYSIXTEEN type puzzle does not result in a board of length 20.
    ```java
    assertNotEquals(20, generatedPuzzle.getBoardLength());
    ```

#### 5. Test Case Name: testMakeMove

- **Goal**: Validate that making a move updates the puzzle’s state accurately and consistently.
  
- **Characteristics**: 
  - **Interface-Based**: Ensuring that the state of the puzzle, once a move is made, reflects the made move.
  - **Functionality-Based**: Verifying that the move-making functionality updates the board correctly.

- **Input Domain Modeling**:
  - **Testable Functions**: `makeMove(int row, int col, String value, boolean isModifiable)` and `getValue(int row, int col)`
  - **Parameters and Return Types**: 
    - `makeMove`: Accepts row index (`int`), column index (`int`), value (`String`), and a modifiability flag (`boolean`). Does not return a value.
    - `getValue`: Accepts row index (`int`) and column index (`int`). Returns the value (`String`) in the specified cell.
  - **Input Domain**: 
    - `row` and `col`: 0-8 (for a 9x9 board, adjust as per board size)
    - `value`: "1"-"9" (assuming a standard Sudoku game)
    - `isModifiable`: `true` or `false`

- **Exceptional Behavior**: 
  If an invalid move is made (e.g., to an unmodifiable cell or with an invalid value), the state of the puzzle should not change. This aspect might be explored in further test cases.

- **Approaches Used**: 
  [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - Testing with a move to `(0, 0)` with the value `"5"` should:
    - Update the value at `(0, 0)` to `"5"` (`assertEquals("5", puzzle.getValue(0, 0))`)
    - Ensure the value is not `"1"` (`assertNotEquals("1", puzzle.getValue(0, 0))`)
    - Ensure the value at `(0, 1)` is not affected (`assertNotEquals("5", puzzle.getValue(0, 1))`)
   
#### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that after making a move to (0, 0) with the value "5", the value is reflected in the puzzle state.
    ```java
    assertEquals("5", puzzle.getValue(0, 0));
    ```
- **Negative Test Scenarios**: 
  - Validate that making a move to (0, 0) with the value "5" does not affect the value at (0, 1).
    ```java
    assertNotEquals("5", puzzle.getValue(0, 1));
    ```

#### 6. Test Case Name: testWhenCallIsValidValueWithInvalidValue_thenReturnFalse

- **Goal**: Validate that invalid values are not accepted in a move and do not alter the puzzle state.

- **Characteristics**: 
  - **Interface-Based**: Ensuring invalid moves are not reflected in the puzzle state.
  - **Functionality-Based**: Verifying that the move-making functionality rejects invalid inputs.

- **Input Domain Modeling**:
  - **Testable Functions**: `makeMove(int row, int col, String value, boolean isModifiable)` and `getValue(int row, int col)`
  - **Parameters and Return Types**: 
    - `makeMove`: Accepts `row` (`int`), `col` (`int`), `value` (`String`), and `isModifiable` (`boolean`). Does not return a value.
    - `getValue`: Accepts `row` (`int`) and `col` (`int`). Returns the value (`String`) in the specified cell.
  - **Input Domain**: 
    - `row` and `col`: Integer values (commonly 0-8 for a 9x9 board)
    - `value`: String representation of the intended move value.
    - `isModifiable`: Boolean value (`true` or `false`)

- **Exceptional Behavior**: Invalid moves should not alter the state of the puzzle and should not be recorded in the puzzle’s state.

- **Approaches Used**: [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - Invalid values (e.g., "-1", "0", "10", "A") should not be set on the board and should not change the puzzle state.
  - The `getValue` method should return the same value before and after an invalid move is attempted.

 #### 📝 Test Scenarios
- **Positive Test Scenarios**: 
  - Ensure that a valid move (like placing "5" at (0, 0)) is reflected in the puzzle state.
    ```java
    puzzle.makeMove(0, 0, "5", true);
    assertEquals("5", puzzle.getValue(0, 0));
    ```
- **Negative Test Scenarios**: 
  - Validate that an invalid move (like placing "-1" at (0, 0)) is not reflected in the puzzle state.
    ```java
    puzzle.makeMove(0, 0, "-1", true);
    assertNotEquals("-1", puzzle.getValue(0, 0));
    ```

#### 7. Test Case Name: testWhenCallIsValidMove_thenReturnCorrectResult

- **Goal**: Validate the behavior of the `isValidMove` method when provided with various row, column, and value inputs.

- **Characteristics**: 
  - **Interface-Based**: Ensuring the method `isValidMove` returns the expected boolean value according to the input validity.
  - **Functionality-Based**: Verifying the method's ability to correctly determine valid and invalid moves based on the inputs.

- **Input Domain Modeling**:
  - **Testable Functions**: `isValidMove(int row, int col, String value)`
  - **Parameters and Return Types**: 
    - `isValidMove`: Accepts `row` (`int`), `col` (`int`), `value` (`String`). Returns a boolean indicating whether the move is valid.
  - **Input Domain**: 
    - `row` and `col`: Integer values representing position on the board.
    - `value`: String representing the intended move value.
  - **Exceptional Behavior**: 
    The function should return `false` when provided with invalid input, such as negative or out-of-bounds indices, and `true` for valid input.

- **Approaches Used**: [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - The `isValidMove` method should return `false` for invalid moves, such as when `row` or `col` are negative or exceed the board's size.
  - The method should return `true` for valid moves, where `row` and `col` are within the board's size and `value` is permissible.

### 📝 Test Scenarios

- **Negative Test Scenarios**: 
  Ensure that the method returns `false` for invalid row or column values:
  ```java
  assertFalse(puzzle.isValidMove(-1, 0, "5"));
  assertFalse(puzzle.isValidMove(0, -1, "5"));
  assertFalse(puzzle.isValidMove(-1, -1, "5"));
  ```
- **Positive Test Scenarios**: 
  Validate that the method returns `true` for valid row and column values:
  ```java
  assertTrue(puzzle.isValidMove(1, 0, "1"));
  assertTrue(puzzle.isValidMove(0, 1, "6"));
  assertTrue(puzzle.isValidMove(1, 1, "9"));
  ```

#### 8. Test Case Name: testNumInRowColBox

- **Goal**: Validate that the puzzle correctly identifies the presence of a number in a specific row, column, and box after a move has been made.

- **Characteristics**: 
  - **Interface-Based**: Ensuring methods like `numInRow`, `numInCol`, and `numInBox` return accurate boolean values indicating the presence of a number.
  - **Functionality-Based**: Verifying that the puzzle’s state is accurately reflected in methods identifying number placement.

- **Input Domain Modeling**:
  - **Testable Functions**: 
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `numInRow(int row, String value)`
    - `numInCol(int col, String value)`
    - `numInBox(int startRow, int startCol, String value)`
  - **Parameters and Return Types**: Various integer and string parameters with boolean return types for `numInRow`, `numInCol`, and `numInBox`.
  - **Input Domain**: 
    - Row, column indices, and string values representing moves and checks on the board.
  - **Exceptional Behavior**: The methods should accurately return whether a number is present in a specific row, column, or box, reflecting the current state of the puzzle.

- **Approaches Used**: 
  [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - After a number "5" is placed in position (0, 0), `numInRow`, `numInCol`, and `numInBox` should return `true` when checking for "5" in the respective row, column, and box.
  - Checks for "5" in different rows, columns, and boxes should return `false`, ensuring the number placement is accurately identified.

### 📝 Test Scenarios

- **Positive Test Scenarios**: 
  Confirm the number "5" is identified in the correct row, column, and box after being placed at (0, 0):
  ```java
  assertTrue(puzzle.numInRow(0, "5"));
  assertTrue(puzzle.numInCol(0, "5"));
  assertTrue(puzzle.numInBox(0, 0, "5"));
  ```
- **Negative Test Scenarios**:
  Ensure "5" is not falsely identified in different rows, columns, and boxes:
  ```java
  assertFalse(puzzle.numInRow(1,"5"));
  assertFalse(puzzle.numInCol(1, "5"));
  assertFalse(puzzle.numInBox(1, 1, "5"));
  ```
#### 9. Test Case Name: testIsSlotAvailable

- **Goal**: Validate that the puzzle correctly identifies the availability of a slot after moves have been made.

- **Characteristics**: 
  - **Interface-Based**: Ensuring that `isSlotAvailable` returns the accurate boolean value reflecting the availability of a slot.
  - **Functionality-Based**: Verifying that the puzzle’s state correctly updates and reflects in slot availability after a move.

- **Input Domain Modeling**:
  - **Testable Functions**: 
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `isSlotAvailable(int row, int col)`
  - **Parameters and Return Types**: Various integer and string parameters with boolean return types for `isSlotAvailable`.
  - **Input Domain**: 
    - Row and column indices to check slot availability.
  - **Exceptional Behavior**: The method should accurately return whether a slot is available, reflecting the current state of the puzzle.

- **Approaches Used**: [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - After a move is made to a slot, `isSlotAvailable` should return `false` for that slot, and it should return `true` for slots where no move has been made.

### 📝 Test Scenarios

- **Positive Test Scenarios**: 
  Verify that an untouched slot is identified as available:
  ```java
  assertTrue(puzzle.isSlotAvailable(8, 3));
  ```
- **Negative Test Scenarios**:
  Ensure that a slot is identified as not available after a move is made:
  ```java
  puzzle.makeMove(0, 0, "5", true);
  assertFalse(puzzle.isSlotAvailable(0, 0));
  puzzle.makeMove(0, 2, "6", true);
  assertFalse(puzzle.isSlotAvailable(0, 2));
  ```
  
#### 10. Test Case Name: testGetValue

- **Goal**: 
  Validate that the puzzle correctly retrieves the value after a move has been made and handles invalid index inputs gracefully.

- **Characteristics**: 
  - **Interface-Based**: Ensuring that `getValue` returns the correct string value after a move.
  - **Functionality-Based**: Verifying that the puzzle’s state correctly updates and reflects when retrieving a value.

- **Input Domain Modeling**:
  - **Testable Functions**: 
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `getValue(int row, int col)`
  - **Parameters and Return Types**: 
    Various integer and string parameters with string return type for `getValue`.
  - **Input Domain**: 
    - Row and column indices for retrieving a value.
  - **Exceptional Behavior**: 
    The method should handle invalid indices without crashing and possibly return a default value (e.g., an empty string).

- **Approaches Used**: 
  [Specify which approaches were used, e.g., ACoC, ECC, etc.]

- **Test and Expected Values**: 
  - After a move is made to a slot, `getValue` should return the placed value for that slot.
  - For invalid or out-of-bounds indices, `getValue` should return a default value (e.g., an empty string) or handle it as per your implementation.

### 📝 Test Scenarios

- **Positive Test Scenarios**: 
  Ensure that the placed value is correctly retrieved:
  ```java
  assertEquals("5", puzzle.getValue(0, 0));
  assertEquals("8", puzzle.getValue(0, 7));
  ```
- **Negative Test Scenarios**:
  Validate that invalid or out-of-bounds indices are handled gracefully:
  ```java
  assertEquals("", puzzle.getValue(-1, -1));
  assertEquals("", puzzle.getValue(100, 100));
  ```
  
### 📄 License
```plaintext
Copyright (C) 2023 GluayGluay - All Rights Reserved
You may use, distribute, and modify this code under the terms of the MIT license.
```
