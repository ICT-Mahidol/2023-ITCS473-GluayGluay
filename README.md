# 🐈 GluayGluay 🍌: Testing for Sudoku

## ITCS473 - Software Quality Assurance and Testing
### 🏫 Mahidol University, ICT

## Table of Contents
- [Introduction](#-introduction)
- [Project Details](#-project-details)
- [Added Unit Test Cases](#-added-unit-test-cases)
- [Test Case Documentation](#-test-case-documentation)
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

---

### Prefix Values
```java
    @Before
    public void setUp() {
        generator = new SudokuGenerator();
        puzzle = new SudokuPuzzle(9, 9, 3, 3, new String[]{"1","2","3","4","5","6","7","8","9"});
    }
```
---

#### 1. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeSIXBYSIX_thenReturnBoardLengthIs6

- **Goal**: Validate that generating a random Sudoku puzzle of type SIXBYSIX results in a board of length 6.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`

- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**: 
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `6`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `6`, or an exception is thrown.
  - **Exceptional Behavior**: Not explicitly handled in the test.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
    - **Develop characteristics**
      - **C1**: Length of the generated Sudoku board.
    - **Partition characteristics**
      
      | Characteristics               | b1          | b2         | b3              |
      |-------------------------------|-------------|------------|-----------------|
      | C1 = Length of Sudoku board   | Equal to 6  | Not 6      | Any other value |
    - **Identify possible value**:
      
      | Characteristics               | b1   | b2    | b3     |
      |-------------------------------|------|-------|--------|
      | C1 = Length of Sudoku board   | 6    | 9     | 12     |
    
    - **Approaches Used**: ACoC
      - **Test requirements:** 
      - T1(Equal to 6)
      - T2(Not 6)
      - T3(Any other value)
    - **Derive test values and expected values.** 

      | Test                         | Length | Expected Result                           |
      |------------------------------|--------|-------------------------------------------|
      | T1(Equal 6)                  | 6      | True (board length equals 6)              |
      | T2(Not 6)                    | 9      | False (board length should not be 6)      |
      | T3(Any other value)          | 12     | False (board length should not be 6)      |
  
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    - **Develop characteristics**
      - **C1** = Ability to generate a valid Sudoku board.
      - **C2** = Ability to generate a Sudoku board corresponding to the specified type.
    - **Partition characteristics**
      
      | Characteristics                    | b1   | b2    |
      |------------------------------------|------|-------|
      | C1 = Generate a valid Sudoku board | True | False |
      | C2 = Match specified type          | True | False |
    - **Identify possible value**:
      
      | Characteristics               | b1   | b2    | b3     |
      |-------------------------------|------|-------|--------|
      | C1 = Length of Sudoku board   | 6    | 9     | 12     |
    
    - **Approaches Used**: ACoC
      - **Test requirements:** 
      - T1(True, True)
      - T2(True, False)
      - T3(False, True)
      - T4(False, False)
    - **Derive test values and expected values.** 

      | Test            | Valid Sudoku | Type Match | Expected Result                          |
      |-----------------|--------------|------------|-----------------------------------------|
      | T1(True, True)  | Yes          | Yes        | True (valid Sudoku, type matches input) |
      | T2(True, False) | Yes          | No         | False (valid Sudoku, type doesn't match)|
      | T3(False, True) | No           | Yes        | False (invalid Sudoku)                  |
      | T4(False, False)| No           | No         | False (invalid Sudoku, type doesn't match)|


### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that generating a SIXBYSIX type puzzle results in a board of length 6.
    ```java
    assertEquals(6, generatedPuzzle.getBoardLength());
    ```
- **Negative Test Scenarios**:
  - Validate that generating a SIXBYSIX type puzzle does not result in a board of length 9 or 12.
    ```java
    assertNotEquals(9, generatedPuzzle.getBoard().length);
    assertNotEquals(12,generatedPuzzle.getBoard().length);
    ```
---
#### 2. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeNINEBYNINE_thenReturnBoardLengthIs9

- **Goal**: Validate that generating a random Sudoku puzzle of type NINEBYNINE results in a board of length 9.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`
  
- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**: 
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `9`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `9`, or an exception is thrown.
  - **Exceptional Behavior**:

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
    - **C1**:
    - **Identify possible value**:
    - **Approaches Used**: 
    - **Test and Expected Values**: When tested with `SudokuPuzzleType.NINENINE` should return a board of length 9.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    - **C1**:
    - **Identify possible value**:
    - **Approaches Used**: 
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
---
#### 3. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeTWELVEBYTWELVE_thenReturnBoardLengthIs1

- **Goal**: Validate that generating a random Sudoku puzzle of type TWELVEBYTWELVE results in a board of length 12.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`

- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**: 
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `12`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `12`, or an exception is thrown.
  - **Exceptional Behavior**:
 
- **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.

- **Approaches Used**:

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
---
#### 4. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeSIXTEENBYSIXTEEN_thenReturnBoardLengthIs16

- **Goal**: Validate that generating a random Sudoku puzzle of type SIXTEENBYSIXTEEN results in a board of length 16.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`

- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**: 
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `16`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `16`, or an exception is thrown.
  - **Exceptional Behavior**:
 
- **Input Domain**: `SudokuPuzzleType` can be SIXBYSIX, NINEBYNINE, TWELVEBYTWELVE, SIXTEENBYSIXTEEN.

- **Approaches Used**: 

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
---
#### 5. Test Case Name: testMakeMove

- **Goal**: Validate that making a move updates the puzzle’s state accurately and consistently.

- **Characteristics**:
  - **Interface-Based**: Ensuring that the state of the puzzle, once a move is made, reflects the made move.
  - **Functionality-Based**: Verifying that the move-making functionality updates the board correctly.

- **Testable Functions**: `makeMove(int row, int col, String value, boolean isModifiable)` and `getValue(int row, int col)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`: 
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isModifiable` (`boolean`): Flag indicating if the move is modifiable.
    - `getValue`: 
      - `row` (`int`): Row index to retrieve the value.
      - `col` (`int`): Column index to retrieve the value.
  - **Return Typese**:
    - `makeMove`: Does not return a value (void).
    - `getValue`: Returns a `String` indicating the value in the specified cell.
  - **Return Values**:
    - `makeMove`: No return value (void).
    - `getValue`:
      - **Expected**: The `String` value present in the specified position of the puzzle.
      - **Unexpected**: 
        - A different value that was not placed in the specified position.
        - If indices are out of bounds or invalid, the return might be an empty string, `null`, or it might throw an exception, depending on implementation. 
  - **Exceptional Behavior**: If an invalid move is made, the state of the puzzle should not change.

- **Input Domain**:
    - `row` and `col`: 0-8 (for a 9x9 board, adjust as per board size)
    - `value`: "1"-"9" (assuming a standard Sudoku game)
    - `isModifiable`: `true` or `false`

- **Approaches Used**:

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
---
#### 6. Test Case Name: testWhenCallIsValidValueWithInvalidValue_thenReturnFalse

- **Goal**: Validate that invalid values are not accepted in a move and do not alter the puzzle state.

- **Characteristics**:
  - **Interface-Based**: Ensuring invalid moves are not reflected in the puzzle state.
  - **Functionality-Based**: Verifying that the move-making functionality rejects invalid inputs.

- **Testable Functions**: `makeMove(int row, int col, String value, boolean isModifiable)` and `getValue(int row, int col)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`: 
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isModifiable` (`boolean`): Flag indicating if the move is modifiable.
    - `getValue`: 
      - `row` (`int`): Row index to retrieve the value.
      - `col` (`int`): Column index to retrieve the value.
  
  - **Return Types**:
    - `makeMove`: Does not return a value (void).
    - `getValue`: Returns a `String` indicating the value in the specified cell.
    
  - **Return Values**:
    - `makeMove`: No return value (void).
    - `getValue`:
      - **Expected**: The `String` value present in the specified position of the puzzle.
      - **Unexpected**: 
        - A different value that was not placed in the specified position.
        - If indices are out of bounds or invalid, the return might be an empty string, `null`, or it might throw an exception, depending on implementation.  
  - **Exceptional Behavior**: Invalid moves should not alter the state of the puzzle and should not be recorded in the puzzle’s state.

- **Input Domain**:
    - `row` and `col`: Integer values (commonly 0-8 for a 9x9 board)
    - `value`: String representation of the intended move value.
    - `isModifiable`: Boolean value (`true` or `false`)

- **Approaches Used**:

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
---
#### 7. Test Case Name: testWhenCallIsValidMove_thenReturnCorrectResult

- **Goal**: Validate the behavior of the `isValidMove` method when provided with various row, column, and value inputs.

- **Characteristics**:
  - **Interface-Based**: Ensuring the method `isValidMove` returns the expected boolean value according to the input validity.
  - **Functionality-Based**: Verifying the method's ability to correctly determine valid and invalid moves based on the inputs.

- **Testable Functions**: `isValidMove(int row, int col, String value)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `row` (`int`): The row index for the move being checked.
    - `col` (`int`): The column index for the move being checked.
    - `value` (`String`): The value being checked for validity in the move.
  - **Return Types**:
    - `isValidMove`: Returns a boolean indicating whether the move is valid.
  - **Return Values**:
    - `isValidMove`:
      - **Expected**: 
        - `true`: If the specified move is valid.
        - `false`: If the specified move is invalid.
      - **Unexpected**:
        - `true`: If the specified move is invalid.
        - `false`: If the specified move is valid.
  - **Exceptional Behavior**: The function should return `false` when provided with invalid input, such as negative or out-of-bounds indices, and `true` for valid input.

- **Input Domain**:
    - `row` and `col`: Integer values representing position on the board.
    - `value`: String representing the intended move value.
  
- **Approaches Used**:

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
---
#### 8. Test Case Name: testNumInRowColBox

- **Goal**: Validate that the puzzle correctly identifies the presence of a number in a specific row, column, and box after a move has been made.

- **Characteristics**:
  - **Interface-Based**: Ensuring methods like `numInRow`, `numInCol`, and `numInBox` return accurate boolean values indicating the presence of a number.
  - **Functionality-Based**: Verifying that the puzzle’s state is accurately reflected in methods identifying number placement.

- **Testable Functions**:
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `numInRow(int row, String value)`
    - `numInCol(int col, String value)`
    - `numInBox(int startRow, int startCol, String value)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`: 
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isModifiable` (`boolean`): Flag indicating if the move is modifiable.
    - `numInRow`:
      - `row` (`int`): The row index where the presence of the value is being checked. 
      -  `value` (`String`): The numerical value being checked for in the specified row.
    - `numInCol`:
      - `col` (`int`): The column index where the presence of the value is being checked.
      - `value` (`String`): The numerical value being checked for in the specified column.
    - `numInBox`:
      - `row` (`int`): The row index where the presence of the value is being checked. 
      - `col` (`int`): The column index where the presence of the value is being checked.
      - `value` (`String`): The numerical value being checked for in the specified box.
  - **Return Types**:
    - `makeMove`: No return value (void).
    - `numInRow`, `numInCol`, and `numInBox`: Returns a boolean indicating whether the value is present in the specified location.
  - **Return Values**:
    - `makeMove`: No return value.
    - `numInRow`, `numInCol`, and `numInBox`:
      - **Expected**: 
        - `true`: If the specified number is found in the respective location.
        - `false`: If the specified number is not found in the respective location.
      - **Unexpected**: 
        - `true`: If the specified number is not found when it should be.
        - `false`: If the specified number is found when it should not be.
  - **Exceptional Behavior**: The methods should accurately return whether a number is present in a specific row, column, or box, reflecting the current state of the puzzle.

- **Input Domain**: Row, column indices, and string values representing moves and checks on the board.

- **Approaches Used**: 

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
  assertFalse(puzzle.numInBox(3, 3, "5"));
  ```
---
#### 9. Test Case Name: testIsSlotAvailable

- **Goal**: Validate that the puzzle correctly identifies the availability of a slot after moves have been made.

- **Characteristics**:
  - **Interface-Based**: Ensuring that `isSlotAvailable` returns the accurate boolean value reflecting the availability of a slot.
  - **Functionality-Based**: Verifying that the puzzle’s state correctly updates and reflects in slot availability after a move.

- **Testable Functions**:
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `isSlotAvailable(int row, int col)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`: 
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isModifiable` (`boolean`): Flag indicating if the move is modifiable.
    - `isSlotAvailable`:
      - `row` (`int`): Row index where the availability of the slot is being checked.
      - `col` (`int`): Column index where the availability of the slot is being checked.
  - **Return Types**:
      - `makeMove`: No return value (void).
      - `boolean`: Indicates whether the slot is available or not.
  - **Return Values**:
      - `makeMove`: No return value.
      - `isSlotAvailable`:
        - **Expected**: 
        - `true`: If the slot at `(row, col)` is available (i.e., no value is assigned).
        - `false`: If the slot at `(row, col)` is not available (i.e., a value is already assigned).
      - **Unexpected**: 
        - None: Since the return type is a boolean, any return value other than `true` or `false` is unexpected. If the function returns a non-boolean value or throws an exception when provided with valid input, this would be considered unexpected.
  - **Exceptional Behavior**: The method should accurately return whether a slot is available, reflecting the current state of the puzzle.

- **Input Domain**: Row and column indices to check slot availability.

- **Approaches Used**:

- **Test and Expected Values**: After a move is made to a slot, `isSlotAvailable` should return `false` for that slot, and it should return `true` for slots where no move has been made.

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
 --- 
#### 10. Test Case Name: testGetValue

- **Goal**:
  Validate that the puzzle correctly retrieves the value after a move has been made and handles invalid index inputs gracefully.

- **Characteristics**:
  - **Interface-Based**: Ensuring that `getValue` returns the correct string value after a move.
  - **Functionality-Based**: Verifying that the puzzle’s state correctly updates and reflects when retrieving a value.

- **Testable Functions**:
    - `makeMove(int row, int col, String value, boolean isModifiable)`
    - `getValue(int row, int col)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`: 
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isModifiable` (`boolean`): Flag indicating if the move is modifiable.
    - `getValue`: 
      - `row` (`int`): Row index to retrieve the value.
      - `col` (`int`): Column index to retrieve the value.
  
  - **Return Types**:
    - `makeMove`: Does not return a value (void).
    - `getValue`: Returns a `String` indicating the value in the specified cell.
    
  - **Return Values**:
    - `makeMove`: No return value (void).
    - `getValue`:
      - **Expected**: The `String` value present in the specified position of the puzzle.
      - **Unexpected**: 
        - A different value that was not placed in the specified position.
        - If indices are out of bounds or invalid, the return might be an empty string, `null`, or it might throw an exception, depending on implementation. 
  
  - **Exceptional Behavior**: The method should handle invalid indices without crashing and possibly return a default value.

- **Input Domain**: Row and column indices for retrieving a value.
    
- **Approaches Used**:

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
---

## 🎯 Test Results

![Test Results](https://github.com/Waariss/Sudoku_ICT/blob/e17a8a5aef7edbaf0537d665b9e38c8e0ad4ef8e/Screenshot%202566-10-09%20at%2001.21.38.png)

--- 

### 📄 License
```plaintext
Copyright (C) 2023 GluayGluay - All Rights Reserved
You may use, distribute, and modify this code under the terms of the MIT license.
```
