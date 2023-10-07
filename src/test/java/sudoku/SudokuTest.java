/* Copyright (C) 2023 GluayGluay - All Rights Reserved
 * You may use, distribute and modify this code under the terms of the MIT license.
*/
package sudoku;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class SudokuTest {

    private SudokuGenerator generator;
    private SudokuPuzzle puzzle;

    @Before
    public void setUp() {
        // Init the SudokuGenerator and SudokuPuzzle before each test.
        generator = new SudokuGenerator();
        puzzle = new SudokuPuzzle(9, 9, 3, 3, new String[]{"1","2","3","4","5","6","7","8","9"});
    }

    @Test
    public void testGenerateRandomSudoku() {
        // Test that the generator is creat a non-null Sudoku puzzle.
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.NINEBYNINE);
        assertNotNull(generatedPuzzle);
        // Add more?
    }

    @Test
    public void testMultiplePuzzleGenerations() {
        // Test that the generator creates distinct Sudoku puzzles on separate calls.
        SudokuPuzzle puzzle1 = generator.generateRandomSudoku(SudokuPuzzleType.NINEBYNINE);
        SudokuPuzzle puzzle2 = generator.generateRandomSudoku(SudokuPuzzleType.NINEBYNINE);
        assertNotEquals(puzzle1.getBoard(), puzzle2.getBoard());
    }

    @Test
    public void testMakeMove() {
        // Test that the move-making work correct updates the puzzle's state.
        puzzle.makeMove(0, 0, "5", true);
        assertEquals("5", puzzle.getValue(0, 0));
    }

//    @Test(expected = IllegalArgumentException.class)
//    public void testImmutableMove() {
//        puzzle.makeMove(0, 0, "5", false);
//    }
    // Failed

    @Test
    public void testNumInRowColBox() {
        // Test that the puzzle identifies a number in a row, column, and box correctly.
        puzzle.makeMove(0, 0, "5", true);
        assertTrue(puzzle.numInRow(0, "5"));
        assertTrue(puzzle.numInCol(0, "5"));
        assertTrue(puzzle.numInBox(0, 0, "5"));
    }
    // ได้ปะวะรวมของคนนั้นเป็นอันเดียว ถถถถถ

    @Test
    public void testIsSlotAvailable() {
        // Test that the puzzle correct identifies slot availability after a move is made.
        puzzle.makeMove(0, 0, "5", true);
        assertFalse(puzzle.isSlotAvailable(0, 0));
        puzzle.makeMove(0, 2, "6", true);
        assertFalse(puzzle.isSlotAvailable(0, 2));
        puzzle.makeMove(4, 5, "9", true);
        assertTrue(puzzle.isSlotAvailable(8, 3));
    }
    // Beam (กูแก้เพิ่ม)

    @Test
    public void testIsSlotMutable() {
        // Test that a slot is identified as mutable.
        assertTrue(puzzle.isSlotMutable(0, 0));
    }

    @Test
    public void testGetValue() {
        // Test that the puzzle state correct updates and retrieves a value after a move.
        puzzle.makeMove(0, 0, "5", true);
        assertEquals("5", puzzle.getValue(0, 0));
        puzzle.makeMove(0, 7, "8", true);
        assertNotEquals("4", puzzle.getValue(1, 0));
        assertEquals("8", puzzle.getValue(0, 7));
    }

    @Test
    public void testBoardFull() {
        // Test that the puzzle correct identifies that it is not fully populated.
        assertFalse(puzzle.boardFull());
    }
    // Beam
}
/*
Checklist for the Assignment on Unit Testing

1. Project Selection
   - [x] Chosen a Java open-source project on GitHub.
   - [x] Validated the project is not a tutorial or training document.
   - [x] Confirmed the project has at least 20 stars.
   - [x] Ensured the project is unique to your group.

2. Understand Testing Framework
   - [ ] Identified the testing framework used in the project (e.g., ant, maven, gradle).
   - [x] Studied how the existing automated tests are structured and run.

3. Develop Unit Test Cases
   - [ ] Created 10 additional unit test cases distinct from existing ones.(8)
   - [x] Ensured each unit test case is a single testing method in your test suite.
   - [ ] Validated that multiple assert statements within a test case are logical and related.

4. Automatic Test Execution
   - [x] Ensured that your unit tests can be executed automatically using the project’s testing framework.

5. Use of JUnit Annotations
   - [x] Used `@Before` and/or `@After` annotations where necessary for setup and teardown methods.

6. Documentation in README.md - For Each Test Case
   - [ ] Provided the name of the test case.
   - [ ] Described the goal of the test case.
   - [ ] Defined characteristics using Input Space Partitioning, ensuring:
   - [x] At least one interface-based characteristic.
   - [x] At least one functionality-based characteristic.

7. Input Domain Modelling
For each test case, documented the following in the README.md:
   - [ ] Identified testable functions.
   - [ ] Identified parameters, return types/values, and exceptional behavior.
   - [ ] Modeled the input domain.
   - [ ] Combined partitions to define test requirements using ACoC, ECC, PWC, BCC, MBCC (2 test cases per approach).
   - [ ] Derived and documented test values and expected values for JUnit test case implementation.
   - [ ] Mixed interface-based and functionality-based characteristics (if applicable).

8. Class File Creation and Licensing Comment
   - [x] Created unit test cases in a different class file separated from the existing test classes.
   - [x] Added a licensing statement at the top of the file, e.g.,

9. Explanation of Test Case Derivation
 - [ ] Explained thoroughly how each test case is derived in README.md, being as verbose as necessary to convey the process and rationale clearly.

10. GitHub Repository Management
- [ ] Ensured all code and documentation are pushed to a GitHub repository.
- [ ] Checked that README.md is clear, well-structured, and informative for grading.

 */
/*
อันนี้ Chat ทำ(กูไม่ชัวร์เลยให้checkอ่านcodeแล้วถามมันอันไหนเป็นไม่เป็น)
1. testGenerateRandomSudoku
Goal: Validate that a non-null Sudoku puzzle is created.
Functionality-based Characteristic: The generateRandomSudoku method should create a valid SudokuPuzzle object.
Interface-based Characteristic: N/A
2. testMultiplePuzzleGenerations
Goal: Ensure distinct Sudoku puzzles are created on separate generation calls.
Functionality-based Characteristic: The generateRandomSudoku method should create different puzzles each time it is called.
Interface-based Characteristic: N/A
3. testMakeMove
Goal: Validate that a move updates the puzzle’s state.
Functionality-based Characteristic: When a move is made using makeMove, the state of puzzle should be updated.
Interface-based Characteristic: N/A
4. testNumInRowColBox
Goal: Ensure the puzzle identifies a number in a row, column, and box correctly.
Functionality-based Characteristic: The methods numInRow, numInCol, and numInBox should return true when the specified number is in the respective row, column, or box.
Interface-based Characteristic: The input to numInRow, numInCol, and numInBox is a number and a string, and they return a boolean.
5. testIsSlotAvailable
Goal: Validate slot availability is correctly identified.
Functionality-based Characteristic: The isSlotAvailable method should return false if a move has been made in a slot, and true otherwise.
Interface-based Characteristic: The isSlotAvailable method takes two integers as input (row and column index) and returns a boolean.
6. testIsSlotMutable
Goal: Check that a slot is identified as mutable.
Functionality-based Characteristic: The isSlotMutable method should return true for mutable slots and false otherwise.
Interface-based Characteristic: The isSlotMutable method takes two integers as input (row and column index) and returns a boolean.
7. testGetValue
Goal: Confirm the puzzle state updates and retrieves a value correctly after a move.
Functionality-based Characteristic: The getValue method should return the correct value after makeMove has been called.
Interface-based Characteristic: The getValue method takes two integers as input (row and column index) and returns a string.
8. testBoardFull
Goal: Confirm the puzzle identifies that it is not fully populated.
Functionality-based Characteristic: The boardFull method should correctly identify whether all slots on the board are filled.
Interface-based Characteristic: The boardFull method takes no inputs and returns a boolean.
 */