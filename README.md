# 🐈 GluayGluay 🍌: Testing for Sudoku

### 👉 [Navigate to Project Phase 2](./Project_phase_2) 🪼
## ITCS473 - Software Quality Assurance and Testing
### 🏫 Mahidol University, ICT

## Table of Contents
- [Introduction](#-introduction)
- [Project Details](#-project-details)
- [Added Unit Test Cases](#-added-unit-test-cases)
- [Test Case Documentation](#-test-case-documentation)
- [Test Results](#-test-results)
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
        - T1 (Equal to 6)
        - T2 (Not 6)
        - T3 (Any other value)

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

    - **Identify possible value**

      | Characteristics                          | b1        | b2         |
      |------------------------------------------|-----------|------------|
      | C1 = Generate a valid Sudoku board       | 6         | 9          |
      | C2 = Match specified type                | SIXBYSIX  | NINEBYNINE |

    - **Approaches Used**: ACoC
      - **Test requirements:**
        - T1 (True, True)
        - T2 (True, False)
        - T3 (False, True)
        - T4 (False, False)

    - **Derive test values and expected values.**

      | Test            | Valid Sudoku | Type Match             | Expected Result                          |
      |-----------------|--------------|----------              |-----------------------------------------|
      | T1(True, True)  | 6            | SIXBYSIX               | True (valid Sudoku, type matches input) |
      | T2(True, False) | 6            | NINEBYNINE             | False (valid Sudoku, type doesn't match)|
      | T3(False, True) | 9            | SIXBYSIX               | False (invalid Sudoku)                  |
      | T4(False, False)| 12           | TWELVEBYTWELVE         | False (invalid Sudoku, type doesn't match)|


### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that generating a SIXBYSIX type puzzle results in a board of length 6.
    ```java
    assertEquals(6, generatedPuzzle.getBoard().length);
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
  - **Exceptional Behavior**: Not explicitly handled in the test.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
    - **Develop characteristics**
      - **C1**: Length of the generated Sudoku board.

    - **Partition characteristics**

      | Characteristics               | b1          | b2         | b3              |
      |-------------------------------|-------------|------------|-----------------|
      | C1 = Length of Sudoku board   | Equal to 9  | Not 9      | Any other value |

    - **Identify possible value**:

      | Characteristics               | b1   | b2    | b3     |
      |-------------------------------|------|-------|--------|
      | C1 = Length of Sudoku board   | 9    | 6     | 12     |

    - **Approaches Used**: ACoC
      - **Test requirements:**
        - T1 (Equal to 9)
        - T2 (Not 9)
        - T3 (Any other value)

    - **Derive test values and expected values.**

      | Test                         | Length | Expected Result                           |
      |------------------------------|--------|-------------------------------------------|
      | T1(Equal 9)                  | 9      | True (board length equals 9)              |
      | T2(Not 9)                    | 6      | False (board length should not be 9)      |
      | T3(Any other value)          | 12     | False (board length should not be 9)      |

  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    - **Develop characteristics**
      - **C1** = Ability to generate a valid Sudoku board.
      - **C2** = Ability to generate a Sudoku board corresponding to the specified type.

    - **Partition characteristics**

      | Characteristics                    | b1   | b2    |
      |------------------------------------|------|-------|
      | C1 = Generate a valid Sudoku board | True | False |
      | C2 = Match specified type          | True | False |

    - **Identify possible value**

      | Characteristics                          | b1          | b2         |
      |------------------------------------------|-------------|------------|
      | C1 = Generate a valid Sudoku board       | 9           | 6          |
      | C2 = Match specified type                | NINEBYNINE  | SIXBYSIX   |

    - **Approaches Used**: ACoC
      - **Test requirements:**
        - T1 (True, True)
        - T2 (True, False)
        - T3 (False, True)
        - T4 (False, False)

    - **Derive test values and expected values.**

      | Test            | Valid Sudoku | Type Match     | Expected Result                          |
      |-----------------|--------------|----------------|-----------------------------------------|
      | T1(True, True)  | 9            | NINEBYNINE      | True (valid Sudoku, type matches input) |
      | T2(True, False) | 9            | SIXBYSIX       | False (valid Sudoku, type doesn't match)|
      | T3(False, True) | 6            | NINEBYNINE     | False (invalid Sudoku)                  |
      | T4(False, False)| 12           | TWELVEBYTWELVE | False (invalid Sudoku, type doesn't match)|

### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that generating a NINEBYNINE type puzzle results in a board of length 9.
    ```java
    assertEquals(9, generatedPuzzle.getBoard().length);
    ```
- **Negative Test Scenarios**:
  - Validate that generating a NINEBYNINE type puzzle does not result in a board of length 6 or 12.
    ```java
    assertNotEquals(6,generatedPuzzle.getBoard().length);
    assertNotEquals(12,generatedPuzzle.getBoard().length);
    ```
---
#### 3. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeTWELVEBYTWELVE_thenReturnBoardLengthIs1

- **Goal**: Validate that generating a random Sudoku puzzle of type TWELVEBYTWELVE results in a board of length 12.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`

- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**:
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `12`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `12`, or an exception is thrown.
  - **Exceptional Behavior**: Not explicitly handled in the test.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
    - **Develop characteristics**
      - **C1**: Length of the generated Sudoku board.

    - **Partition characteristics**

      | Characteristics               | b1          | b2         | b3              |
      |-------------------------------|-------------|------------|-----------------|
      | C1 = Length of Sudoku board   | Equal to 12 | Not 12     | Any other value |

    - **Identify possible value**:

      | Characteristics               | b1   | b2    | b3     |
      |-------------------------------|------|-------|--------|
      | C1 = Length of Sudoku board   | 12   | 9     | 6     |

    - **Approaches Used**: ECC
      - **Test requirements:**
        - T1 (Equal to 12)
        - T2 (Not 12)
        - T3 (Any other value)

    - **Derive test values and expected values.**

      | Test                         | Length | Expected Result                           |
      |------------------------------|--------|-------------------------------------------|
      | T1(Equal 12)                 | 12     | True (board length equals 12)             |
      | T2(Not 12)                   | 9      | False (board length should not be 12)     |
      | T3(Any other value)          | 6      | False (board length should not be 12)     |

  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    - **Develop characteristics**
      - **C1** = Ability to generate a valid Sudoku board.
      - **C2** = Ability to generate a Sudoku board corresponding to the specified type.

    - **Partition characteristics**

      | Characteristics                    | b1   | b2    |
      |------------------------------------|------|-------|
      | C1 = Generate a valid Sudoku board | True | False |
      | C2 = Match specified type          | True | False |

    - **Identify possible value**

      | Characteristics                          | b1          | b2         |
      |------------------------------------------|-------------|------------|
      | C1 = Generate a valid Sudoku board       | 12          | 6          |
      | C2 = Match specified type                | TWELVEBYTWELVE  | SIXBYSIX   |

    - **Approaches Used**: ECC
      - **Test requirements:**
        - T1 (True, True)
        - T2 (False, False)

    - **Derive test values and expected values.**

      | Test             | Valid Sudoku | Type Match     | Expected Result                          |
      |------------------|--------------|----------------|-----------------------------------------|
      | T1(True, True)   | 12           | TWELVEBYTWELVE | True (valid Sudoku, type matches input) |
      | T2(False, False) | 6            | SIXBYSIX       | False (invalid Sudoku, type doesn't match)|

### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that generating a TWELVEBYTWELVE type puzzle results in a board of length 12.
    ```java
    assertEquals(12, generatedPuzzle.getBoard().length);
    ```
- **Negative Test Scenarios**:
  - Validate that generating a TWELVEBYTWELVE type puzzle does not result in a board of length 6 or 9.
    ```java
    assertNotEquals(6, generatedPuzzle.getBoard().length);
    assertNotEquals(9, generatedPuzzle.getBoard().length);
    ```
---
#### 4. Test Case Name: testGenerateRandomSudokuPuzzleWithTypeSIXTEENBYSIXTEEN_thenReturnBoardLengthIs16

- **Goal**: Validate that generating a random Sudoku puzzle of type SIXTEENBYSIXTEEN results in a board of length 16.

- **Testable Functions**: `generateRandomSudoku(SudokuPuzzleType type)`

- **Input Domain Modeling**:
  - **Parameters**: `type`: A `SudokuPuzzleType` enum value.
  - **Return Types**: The function returns a `SudokuPuzzle` object.
  - **Return Values**:
    - **Expected**: A `SudokuPuzzle` object where `getBoardLength()` returns `16`.
    - **Unexpected**: A `SudokuPuzzle` object where `getBoardLength()` returns a value other than `16`, or an exception is thrown.
  - **Exceptional Behavior**: Not explicitly handled in the test.

- **Characteristics**:
  - **Interface-Based**: Verifying the output board length when generating a puzzle.
    - **Develop characteristics**
      - **C1**: Length of the generated Sudoku board.

    - **Partition characteristics**

      | Characteristics               | b1          | b2         | b3              |
      |-------------------------------|-------------|------------|-----------------|
      | C1 = Length of Sudoku board   | Equal to 16 | Not 16     | Any other value |

    - **Identify possible value**:

      | Characteristics               | b1   | b2    | b3     |
      |-------------------------------|------|-------|--------|
      | C1 = Length of Sudoku board   | 16   | 9     | 6     |

    - **Approaches Used**: ECC
      - **Test requirements:**
        - T1 (Equal to 16)
        - T2 (Not 16)
        - T3 (Any other value)

    - **Derive test values and expected values.**

      | Test                         | Length | Expected Result                           |
      |------------------------------|--------|-------------------------------------------|
      | T1(Equal 16)                 | 16     | True (board length equals 16)             |
      | T2(Not 16)                   | 9      | False (board length should not be 16)     |
      | T3(Any other value)          | 6      | False (board length should not be 16)     |

  - **Functionality-Based**: Confirming the ability to generate a random Sudoku puzzle with the specified characteristics.
    - **Develop characteristics**
      - **C1** = Ability to generate a valid Sudoku board.
      - **C2** = Ability to generate a Sudoku board corresponding to the specified type.

    - **Partition characteristics**

      | Characteristics                    | b1   | b2    |
      |------------------------------------|------|-------|
      | C1 = Generate a valid Sudoku board | True | False |
      | C2 = Match specified type          | True | False |

    - **Identify possible value**

      | Characteristics                          | b1          | b2         |
      |------------------------------------------|-------------|------------|
      | C1 = Generate a valid Sudoku board       | 16          | 6          |
      | C2 = Match specified type                | SIXTEENBYSIXTEEN  | SIXBYSIX   |

    - **Approaches Used**: ECC
      - **Test requirements:**
        - T1 (True, True)
        - T2 (False, False)

    - **Derive test values and expected values.**

      | Test            | Valid Sudoku | Type Match       | Expected Result                          |
      |-----------------|--------------|------------------|-----------------------------------------|
      | T1(True, True)  | 16           | SIXTEENBYSIXTEEN | True (valid Sudoku, type matches input) |
      | T2(False, False)| 6            | SIXBYSIX         | False (invalid Sudoku, type doesn't match)|

### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that generating a SIXTEENBYSIXTEEN type puzzle results in a board of length 16.
    ```java
    assertEquals(16, generatedPuzzle.getBoard().length);
    ```
- **Negative Test Scenarios**:
  - Validate that generating a SIXTEENBYSIXTEEN type puzzle does not result in a board of length 6 or 9.
    ```java
    assertNotEquals(6, generatedPuzzle.getBoard().length);
    assertNotEquals(9, generatedPuzzle.getBoard().length);
    ```
---
#### 5. Test Case Name: testMakeMove

- **Goal**: Validate that making a move updates the puzzle’s state accurately and consistently.

- **Testable Functions**: `makeMove(int row, int col, String value, boolean isMutable)` and `getValue(int row, int col)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`:
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isMutable` (`boolean`): Flag indicating if the move is modifiable.
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

- **Characteristics**:
  - **Interface-Based**: Ensuring that the state of the puzzle, once a move is made, reflects the made move.
    - **Develop Characteristics**
      - **C1** = Validity of `row` and `col`
      - **C2** = Validity of `value`
      - **C3** = State of `isMutable`

    - **Partition Characteristics**

      | Characteristics   | b1         | b2          | b3          |
      |-------------------|------------|-------------|-------------|
      | C1 = Cell position| Less than 0| 0 - 8       | Greater than 8 |
      | C2 = Value        | Less than 1| 1 - 9       | Greater than 9 |
      | C3 = isMutable    | True       | False       |             |

    - **Identify Possible Values**

      | Characteristics   | b1       | b2       | b3          |
      |-------------------|--------  |----------|-------------|
      | C1 = Cell position| (-1, -1) | (0, 0)   | (10, 10)    |
      | C2 = Value        | "-1"     | "5"      | "10"        |
      | C3 = isMutable    | true     | false    |             |   

    - **Approaches Used**: PWC
      - **Test Requirements**:
        - T1 (Less than 0, Less than 1, True)
        - T2 (Less than 0, 1 - 9, False)
        - T3 (Less than 0, Greater than 9, False)
        - T4 (0 - 8, Less than 1, False)
        - T5 (0 - 8, 1 - 9, True)
        - T6 (0 - 8, Greater than 9, True)
        - T7 (Greater than 8, Less than 1, False)
        - T8 (Greater than 8, 1 - 9, True)
        - T9 (Greater than 8, Greater than 9, True)

    - **Derive Test Values and Expected Values**

      | Test                                      | (row, col) | value | isMutable | Expected Result                        |
      |-------------------------------            |------------|-------|-----------|----------------------------------------|
      | T1 (Less than 0, Less than 1, True)       | (-1, -1)   | "0"   | true      | Value at (-1,-1) is not changed/valid  |
      | T2 (Less than 0, 1 - 9, False)            | (-1, -1)   | "5"   | false     | Value at (-1,-1) is not changed/valid  |
      | T3 (Less than 0, Greater than 9, False)   | (-1, -1)   | "10"  | false     | Value at (-1,-1) is not changed/valid  |
      | T4 (0 - 8, Less than 1, False)            | (0, 0)     | "0"   | false     | Value at (0, 0) is not changed         |
      | T5 (0 - 8, 1 - 9, True)                   | (0, 0)     | "5"   | true      | Value at (0, 0) is "5"                 |
      | T6 (0 - 8, Greater than 9, True)          | (0, 0)     | "10"  | true      | Value at (0, 0) is not changed/valid   |
      | T7 (Greater than 8, Less than 1, False)   | (9, 9)     | "0"   | false     | Value at (9, 9) is not changed/valid   |
      | T8 (Greater than 8, 1 - 9, True)          | (9, 9)     | "5"   | true      | Value at (9, 9) is not changed/valid   |
      | T9 (Greater than 8, Greater than 9, True) | (9, 9)     | "10"  | true      | Value at (9, 9) is not changed/valid   |

  - **Functionality-Based**: Verifying that the move-making functionality updates the board correctly.
    - **Develop Characteristics**
      - **C4** = The updated value on the board
      - **C5** = The mutability status of the cell after a move

    - **Partition Characteristics**

      | Characteristics                          | b1        | b2         |
      |------------------------------------------|-----------|------------|
      | C4 = The updated value on the board      | Updated   | Not Updated|
      | C5 = The mutability status after a move  | Mutable   | Immutable  |

    - **Identify Possible Values**

      | Characteristics                          | b1      | b2          |
      |------------------------------------------|---------|-------------|
      | C4 = The updated value on the board      | "5"     | "10"        |
      | C5 = The mutability status after a move  | true    | false       |

    - **Approaches Used**: PWC
      - **Test Requirements**:
        - T5 (Updated, Mutable)
        - T6 (Updated, Immutable)
        - T7 (Not Updated, Mutable)
        - T8 (Not Updated, Immutable)
    - **Derive Test Values and Expected Values**

      | Test                       | Update Value | isMutable | Expected Result                             |
      |------------------------    |--------------|-----------|---------------------------------------------|
      | T5(Updated, Mutable)       | "5"          | true      | Value at (0,0) is "5", and is mutable       |
      | T6(Updated, Immutable)     | "5"          | false     | Value at (0,0) is "5", and is immutable     |
      | T7(Not Updated, Mutable)   | "10"         | true      | Value at (0,0) is not "10", and is mutable  |
      | T8(Not Updated, Immutable) | "10"         | false     | Value at (0,0) is not "10", and is immutable|     

#### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Ensure that after making a move to (0, 0) with the value "5", the value is reflected in the puzzle state.
    ```java
    puzzle.makeMove(0, 0, "5", true);
    assertEquals("5", puzzle.getValue(0, 0));
    ```
- **Negative Test Scenarios**:
  - Validate that making a move to (0, 0) with the value "0" does not affect the value at (0, 0).
    ```java
    puzzle.makeMove(0, 0, "0", false);
    assertNotEquals("0", puzzle.getValue(0, 0));
    ```
  - Validate that the board does not update for an invalid move.
    ```java
    puzzle.makeMove(0, 0, "10", true);
    assertNotEquals("10", puzzle.getValue(0, 0));
    ```  
---
#### 6. Test Case Name: testWhenCallIsValidValueWithInvalidValue_thenReturnFalse

- **Goal**: Validate that invalid values are not accepted in a move and do not alter the puzzle state.

- **Testable Functions**:
  - `makeMove(int row, int col, String value, boolean isModifiable)`
  - `getValue(int row, int col)`
  - `numInBox(int row, int col, String value)`

- **Input Domain Modeling**:
  - **Parameters**:
    - `makeMove`:
      - `row` (`int`): The row index for the move.
      - `col` (`int`): The column index for the move.
      - `value` (`String`): The value to be placed in the move.
      - `isMutable` (`boolean`): Flag indicating if the move is modifiable.
    - `getValue`:
      - `row` (`int`): Row index to retrieve the value.
      - `col` (`int`): Column index to retrieve the value.
    - `numInBox`:
      - `row` (`int`): The row index where the presence of the value is being checked.
      - `col` (`int`): The column index where the presence of the value is being checked.
      - `value` (`String`): The numerical value being checked for in the specified box.

  - **Return Types**:
    - `makeMove`: Does not return a value (void).
    - `getValue`: Returns a `String` indicating the value in the specified cell.
    - `numInBox`: Returns a boolean indicating whether the value is present in the specified location.

  - **Return Values**:
    - `makeMove`: No return value (void).
    - `getValue`:
      - **Expected**: The `String` value present in the specified position of the puzzle.
      - **Unexpected**:
        - A different value that was not placed in the specified position.
        - If indices are out of bounds or invalid, the return might be an empty string, `null`, or it might throw an exception, depending on implementation.
    - `numInBox`:
      - **Expected**:
        - `true`: If the specified number is found in the respective location.
        - `false`: If the specified number is not found in the respective location.
      - **Unexpected**:
        - `true`: If the specified number is not found when it should be.
        - `false`: If the specified number is found when it should not be.
  - **Exceptional Behavior**:
    - `makeMove`: If invalid values or indexes are used, the state of the puzzle should not change.
    - `numInBox`: If indexes are out of bounds or invalid, it might throw an exception depending on implementation.

  - **Characteristics**:
    - **Interface-Based**: Ensuring invalid moves are not reflected in the puzzle state.
      - **Develop Characteristics**
        - **C1** = Validity of `row` and `col`
        - **C2** = Validity of `value`
        - **C3** = State of `isMutable`
      - **Partition Characteristics**:

        | Characteristics    | b1           | b2             | b3             |
        |--------------------|-------       |----------      |----------------|
        | C1 = Cell position | Less than 0  | 0 - 8          | Greater than 8 |  
        | C2 = Value         | Less than 1  | Greater than 9 | Non-number     |       
        | C3 = isMutable     | True         | False          |                |             

      - **Identify Possible Values**:

        | Characteristics    | b1       | b2        | b3          |
        |--------------------|--------  |-----------|---------    |
        | C1 = Cell position | (-1, -1) | (0, 0)    | (10, 10)    |       
        | C2 = Value         | "-1"     | "10"      | "A"         |       
        | C3 = isMutable     | true     | false     |             |       

      - **Approaches Used**: PWC
        - **Test Requirements**:
          - T1 (Less than 0, Less than 1, True)
          - T2 (Less than 0, Greater than 9, False)
          - T3 (Less than 0, Non-number, False)
          - T4 (0 - 8, Less than 1, False)
          - T5 (0 - 8, Greater than 9, True)
          - T6 (0 - 8, Non-number, True)
          - T7 (Greater than 8, Less than 1, False)
          - T8 (Greater than 8, Greater than 9, True)
          - T9 (Greater than 8, Non-number, True)

      - **Derive Test Values and Expected Values**:

        | Test                                      | (row, col) | value  | isMutable | Expected Result                        |
        |-------------------------------            |------------|------- |-----------|----------------------------------------|
        | T1 (Less than 0, Less than 1, True)       | (-1, -1)   | "-1"   | true      | Value at (-1,-1) is invalid            |
        | T2 (Less than 0, Greater than 9, False)   | (-1, -1)   | "10"   | false     | Value at (-1,-1) is invalid            |
        | T3 (Less than 0, Non-number, False)       | (-1, -1)   | "A"    | false     | Value at (-1,-1) is invalid            |
        | T4 (0 - 8, Less than 1, False)            | (0, 0)     | "-1"   | false     | Value at (0, 0) is invalid             |
        | T5 (0 - 8, Greater than 9, True)          | (0, 0)     | "10"   | true      | Value at (0, 0) is invalid             |
        | T6 (0 - 8, Non-number, True)              | (0, 0)     | "A"    | true      | Value at (0, 0) is invalid             |
        | T7 (Greater than 8, Less than 1, False)   | (9, 9)     | "-1"   | false     | Value at (9, 9) is invalid             |
        | T8 (Greater than 8, Greater than 9, True) | (9, 9)     | "10"   | true      | Value at (9, 9) is invalid             |
        | T9 (Greater than 8, Non-number, True)     | (9, 9)     | "A"    | true      | Value at (9, 9) is invalid             |

    - **Functionality-Based**: Verifying that the move-making functionality rejects invalid inputs.
      - **Develop Characteristics**
        - **C4** = The updated value on the board
        - **C5** = Whether `numInBox` returns expected boolean

      - **Partition Characteristics**:

        | Characteristics             | b1     | b2      |
        |-----------------------------|--------|---------|
        | C4 = Updated value on board | Updated| Not Updated|
        | C5 = `numInBox` result      | True   | False   |

      - **Identify Possible Values**:

        | Characteristics                          | b1      | b2          |
        |------------------------------------------|---------|-------------|
        | C4 = Updated value on board              | "5"     | "A"         |
        | C5 = `numInBox` result                   | true    | false       |

      - **Approaches Used**: PWC
        - **Test Requirements**:
          - T7(Updated, True)
          - T8(Updated, False)
          - T9(Not Updated, True)
          - T10(Not Updated, False)

      - **Derive Test Values and Expected Values**:

        | Test                     | (row, col) | value    | isModifiable | Expected Result                                    |
        |--------------------------|------------|----------|--------------|----------------------------------------------------|
        | T7(Updated, True)        | (0, 0)     | "5"      | true         | Value at (0,0) is "5", and `numInBox` returns true  |
        | T8(Updated, False)       | (0, 0)     | "5"      | false        | Value at (0,0) is "5", and `numInBox` returns false |
        | T9(Not Updated, True)    | (0, 0)     | "A"      | true         | Value at (0,0) is not "A", and `numInBox` returns true |
        | T10(Not Updated, False)  | (0, 0)     | "A"      | false        | Value at (0,0) is not "A", and `numInBox` returns false |


#### 📝 Test Scenarios
- **Positive Test Scenarios**:
  - Validate that the puzzle state remains unchanged for invalid values.
    ```java
    String initialState = puzzle.getValue(0, 0);
    puzzle.makeMove(0, 0, "-1", true);
    puzzle.makeMove(0, 0, "10", true);
    puzzle.makeMove(0, 0, "A", true);
    assertEquals(initialState, puzzle.getValue(0, 0));
    ```
- **Negative Test Scenarios**:
  - Validate `numInBox` returns `false` after making a move with a valid value.
    ```java
    puzzle.makeMove(0, 0, "-1", true);
    puzzle.makeMove(0, 0, "10", true);
    puzzle.makeMove(0, 0, "A", true);
    assertFalse(puzzle.numInBox(0, 0, "5"));
    ```
---
#### 7. Test Case Name: testWhenCallIsValidMove_thenReturnCorrectResult

- **Goal**: Validate the behavior of the `isValidMove` method when provided with various row, column, and value inputs.

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

- **Characteristics**:
  - **Interface-Based**: Ensuring the method `isValidMove` returns the expected boolean value according to the input validity.
    - **Develop characteristics**
      - **C1** = Validity of `row`
      - **C2** = Validity of `col`
      - **C3** = Validity of `value`
    - **Partition characteristics**

      | Characteristics          | b1           | b2         | b3             | b4         |
      |-------------------       |-----------   |------------|----------      |------------|
      | C1 = Validity of `row`   | Less than 0  | 0 - 9      | Greater than 9 |            |
      | C2 = Validity of `col`   | Less than 0  | 0 - 9      | Greater than 9 |            |
      | C3 = Validity of `value` | Less than 1  | 1 - 9      | Greater than 9 | Non-number |

    - **Identify possible value**:

      | Characteristics            | b1         | b2     |  b3    | b4         |
      |-------------------         |------------|--------|--------|------------|
      | C1 = Validity of `row`     | -1         | 1      | 10     |            |
      | C2 = Validity of `col`     | -1         | 1      | 10     |            |
      | C3 = Validity of `value`   | 0          | 1      | 10     | A          |

    - **Approaches Used**: BCC (Base Choice Coverage)
      - **Base Choice**: 0-9, 0-9,  1-9
      - **Test requirements:**
        - T1: Less than 0, 0-9, 1-9
        - T2: Greater than 8, 0-9, 1-9
        - T3: 0-9 , Less than 0,  1-9
        - T4: 0-9 , Greater than 9 , 1-9
        - T5: 0-9 , 0-9, Less than 1
        - T6: 0-9 , 0-9, Greater than 9
        - T7: 0-9 ,Less than 0, Non-Number
        - T8: 0-9, 0-9,  1-9
    - **Derive test values and expected values.**

      | Test                                              | `row` | `col` | `value` | Expected Result |
      |---------------------------                        |-------|-------|---------|-----------------|
      | T1(Less than 0, 0-8, 1-9)                         | -1    | 1     | 1       | false           |
      | T2(Greater than 9, 0-8, 1-9)                      | 10    | 1     | 1       | false           |
      | T3(0-8 , Less than 0,  1-9)                       | 1     | -1    | 1       | false           |
      | T4(0-8 , Greater than 8 , 1-9)                    | 1     | 10    | 1       | false           |
      | T5(0-8 , 0-8, Less than 1)                        | 1     | 1     | 0       | true            |
      | T6(0-8 , 0-8, Greater than 9)                     | 1     | 1     | 10      | true            |
      | T7(0-8 ,Less than 0, Non-Number)                  | 1     | -1    | A       | false           |
      | T8(0-8, 0-8,  1-9)                                | 1     | 1     | 1       | true            |

    - **Functionality-Based**: Verifying the method's ability to correctly determine valid and invalid moves based on the inputs.
      - **Develop Characteristics**:
        - **C4** = The boolean result of `isValidMove`

      - **Partition Characteristics**:

        | Characteristics             | b1  | b2    |
        |-----------------------------|-----|-------|
        | C4 = Result of `isValidMove`| True| False |

      - **Identify Possible Values**:

        | Characteristics             | b1   | b2    |
        |-----------------------------|------|-------|
        | C4 = Result of `isValidMove`| true | false |

      - **Approaches Used**: BCC (Base Choice Coverage)
        - **Test Requirements**:
          - T1: (True)
          - T2: (False)

      - **Derive Test Values and Expected Values**:

        | Test | Input Values (row, col, value) | Expected Result |
        |------|--------------------------------|-----------------|
        | T1   | (1, 1, 5)                      | true            |
        | T2   | (-1, 0, 5)                     | false           |


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

  - **Characteristics**:
    - **Interface-Based && Functionality-Based**: Ensuring methods like `numInRow`, `numInCol`, and `numInBox` return accurate boolean values indicating the presence of a number.
      - **Develop Characteristics**:
        - **C4**: Validity of `numInRow` check
        - **C5**: Validity of `numInCol` check
        - **C6**: Validity of `numInBox` check

      - **Partition Characteristics**:

        | Characteristics              | b1             | b2               |
        |------------------------------|----------------|------------------|
        | C4 = Validity of `numInRow`  | Valid          | Invalid          |
        | C5 = Validity of `numInCol`  | Valid          | Invalid          |
        | C6 = Validity of `numInBox`  | Valid          | Invalid          |

      - **Identify Possible Values**:

        | Characteristics              | b1             | b2               |
        |------------------------------|----------------|------------------|
        | C4 = Validity of `numInRow`  | (0, 5)         | (1, 5)           |
        | C5 = Validity of `numInCol`  | (0, 5)         | (1, 5)           |
        | C6 = Validity of `numInBox`  | (0, 0, 5)      | (3, 3, 5)        |

      - **Approaches Used**: BCC (Base Choice Coverage)
        - **Base Choice**: T1: (Valid, Valid, Valid)
        - **Test Requirements**:
          - T1: (Valid, Valid, Valid)
          - T2: (Invalid, Valid, Valid)
          - T3: (Valid, Invalid, Valid)
          - T4: (Valid, Valid, Invalid)
      - **Derive Test Values and Expected Values**:

        | Test     | Input Values                     | Expected Result |
        |----------|------------------                |-----------------|
        | T1       | [(0, 5),(0,5),(0,0,5)]           | true            |
        | T2       | [(1, 5),(0,5),(0,0,5)]           | false           |
        | T3       | [(0, 5),(1,5),(0,0,5)]           | false           |
        | T4       | [(0, 5),(0,5),(3,3,5)]           | false           |

### 📝 Test Scenarios
  ```java
  puzzle.makeMove(0, 0, "5", true);
  ```
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

- **Characteristics**:
  - **Interface-Based && Functionality-Based**: Ensuring that `isSlotAvailable` returns the accurate boolean value reflecting the availability of a slot.
    - **Develop characteristics**
      - **C1** = Validity of `row` and `col`.
      - **C2** = Verifies if the slot is empty.

    - **Partition characteristics**

      | Characteristics    | b1                | b2             | b3             |                
      |--------------------|-------------------|----------------|----------------|
      | C1 = Cell position | Less than 0       | 0 - 8          | Greater than 8 |
      | C2 = Slot empty    | Available         | Not Available  |                |                

    - **Identify possible value**:

      | Characteristics    | b1                | b2             | b3        |                
      |--------------------|-------------------|----------------|-----------|
      | C1 = Cell position | (-1, -1)          | (0, 0)         | (10, 10)  |
      | C2 = Slot empty    | (1, 1)            | (0, 0)         |           |  

    - **Approaches Used**: MBCC (Multiple Base Choice Coverage)
      - **Base Choice**: (Less than 0, Not Available), (0 - 8, Not Available)
      - **Test requirements:**
        - T1: Less than 0, Not Available
        - T2: Less than 0, Available
        - T3: 0 - 8, Available
        - T4: 0 - 8, Not Available
        - T5: Greater than 8, Available
        - T6: Greater than 8, Not Available

    - **Derive test values and expected values.**

      | Test                              | (row, col) | Slot empty       | Expected Result |
      |-----------------------------------|------------|------------------|-----------------|
      | T1(Less than 0, Not Available)    |  (-1,-1)   |   (0, 0)         |        True     |
      | T2(Less than 0, Available)        |  (-1,-1)   |   (1, 1)         |        True     |
      | T3(0 - 8, Available)              |  (0, 0)    |   (1, 1)         |        True     |
      | T4(0 - 8, Not Available)          |  (0, 0)    |   (0, 0)         |        False    |
      | T5(Greater than 8, Available)     |  (10, 10)  |   (1, 1)         |        True     |
      | T6(Greater than 8, Not Available) |  (10, 10)  |   (0, 0)         |        True     |

### 📝 Test Scenarios

- **Positive Test Scenarios**:
  Verify that an untouched slot is identified as available:
  ```java
    puzzle.makeMove(1, 0, "5", true);
    assertTrue(puzzle.isSlotAvailable(0, 0));
  ```
- **Negative Test Scenarios**:
  Ensure that a slot is identified as not available after a move is made:
  ```java
    puzzle.makeMove(0, 2, "6", true);
    assertFalse(puzzle.isSlotAvailable(0, 2));
  ```
 --- 
#### 10. Test Case Name: testGetValue

- **Goal**:
  Validate that the puzzle correctly retrieves the value after a move has been made and handles invalid index inputs gracefully.

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

- **Interface-Based && Functionality-Based**: Ensuring invalid moves are not reflected in the puzzle state.
  - **Develop Characteristics**
    - **C1** = Validity of `row` and `col`
    - **C2** = Validity of `value`
    - **C3** = State of `isMutable`

      - **Partition Characteristics**:

        | Characteristics    | b1           | b2             | b3             |
        |--------------------|-------       |----------      |----------------|
        | C1 = Cell position | Less than 0  | 0 - 8          | Greater than 8 |  
        | C2 = Value         | "0-9"        | " "            |                |       
        | C3 = isMutable     | True         | False          |                |             

      - **Identify Possible Values**:

        | Characteristics    | b1       | b2        | b3          |
        |--------------------|--------  |-----------|---------    |
        | C1 = Cell position | (-1, -1) | (0, 0)    | (10, 10)    |       
        | C2 = Value         | "1"      | " "       |             |       
        | C3 = isMutable     | True     | False     |             |       

      - **Approaches Used**: MBCC (Multiple Base Choice Coverage)
        - **Base Choice**: (0 - 8, "0-9", True), (0 - 8, " ", True)
        - **Test requirements:**
        - T1: 0 - 8, "0-9", True
        - T2: 0 - 8, " ", True
        - T3: Less than 0, "0-9", True
        - T4: Less than 0, " ", True
        - T5: Greater than 8, "0-9", True
        - T6: Greater than 8, " ", True

      - **Derive Test Values and Expected Values**:

        | Test                                      | (row, col) | value  | isMutable | Expected Result                  |
        |-------------------------------------------|------------|------- |-----------|----------------------------------|
        | T1 (0 - 8, "0-9", True)                   | (0, 0)     | "1"    | True      | Get Value at (0, 0)   is valid   |
        | T2 (0 - 8, " ", True)                     | (0, 0)     | " "    | True      | Get Value at (0, 0) is invalid   |
        | T3 (Less than 0, "0-9", True)             | (-1, -1)   | "1"    | True      | Get Value at (-1, -1) is invalid |
        | T4 (Less than 0, " ", True)               | (-1, -1)   | " "    | True      | Get Value at (0, 0)   is valid   |
        | T5 (Greater than 8, "0-9", True)          | (10, 10)   | "1"    | True      | Get Value at (10, 10) is invalid |
        | T6 (Greater than 8, " ", True)            | (10, 10)   | " "    | True      | Get Value at (10, 10) is valid   |

### 📝 Test Scenarios

- **Positive Test Scenarios**:
  Ensure that the placed value is correctly retrieved:
  ```java
   puzzle.makeMove(0, 0, "1", true);
   assertEquals("1", puzzle.getValue(0, 0));
  ```
- **Negative Test Scenarios**:
  Validate that invalid or out-of-bounds indices are handled gracefully:
  ```java
  puzzle.makeMove(0, 0, "8", true);
  assertNotEquals(" ", puzzle.getValue(0, 0));
  assertEquals("", puzzle.getValue(-1, -1));
  assertEquals("", puzzle.getValue(100, 100));
  ```
---

## 🎯 Test Results

![Test Results](https://github.com/Waariss/GluayGluay_project1/blob/master/Result.png)

--- 

### 📄 License
```plaintext
Copyright (C) 2023 GluayGluay - All Rights Reserved
You may use, distribute, and modify this code under the terms of the MIT license.
```
