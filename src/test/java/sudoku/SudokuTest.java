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

    //#1
    @Test
    public void testGenerateRandomSudokuPuzzleWithTypeSIXBYSIX_thenReturnBoardLengthIs6() {
        // Test that the generate random Sudoku puzzle with type SIXBYSIX
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.SIXBYSIX);
        assertEquals(6, generatedPuzzle.getBoard().length);
        assertNotEquals(12,generatedPuzzle.getBoard().length);
    }

    //#2
    @Test
    public void testGenerateRandomSudokuPuzzleWithTypeNINEBYNINE_thenReturnBoardLengthIs9() {
        // Test that the generate random Sudoku puzzle with type NINEBYNINE
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.NINEBYNINE);
        assertEquals(9, generatedPuzzle.getBoard().length);
        assertNotEquals(12,generatedPuzzle.getBoard().length);
    }

    //#3
    @Test
    public void testGenerateRandomSudokuPuzzleWithTypeTWELVEBYTWELVE_thenReturnBoardLengthIs12() {
        // Test that the generate random Sudoku puzzle with type TWELVEBYTWELVE
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.TWELVEBYTWELVE);
        assertEquals(12, generatedPuzzle.getBoard().length);
        assertNotEquals(6,generatedPuzzle.getBoard().length);
    }

    //#4
    @Test
    public void testGenerateRandomSudokuPuzzleWithTypeSIXTEENBYSIXTEEN_thenReturnBoardLengthIs16() {
        // Test that the generate random Sudoku puzzle with type SIXTEENBYSIXTEEN
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.SIXTEENBYSIXTEEN);
        assertEquals(16, generatedPuzzle.getBoard().length);
        assertNotEquals(20, generatedPuzzle.getBoard().length);
    }

    //#5
    @Test
    public void testMakeMove() {
        // Test that the move-making work correct updates the puzzle's state.
        puzzle.makeMove(0, 0, "5", true);
        assertEquals("5", puzzle.getValue(0, 0));
        assertNotEquals("1", puzzle.getValue(0, 0));
        assertNotEquals("5", puzzle.getValue(0, 1));
    }

    //#6
    @Test()
    public void testWhenCallIsValidValueWithInvalidValue_thenReturnFalse() {
        /// Test if the value is not valid then return false
        String initialState = puzzle.getValue(0, 0);

        puzzle.makeMove(0, 0, "-1", true);
        puzzle.makeMove(0, 0, "0", true);
        puzzle.makeMove(0, 0, "10", true);
        puzzle.makeMove(0, 0, "A", true);

        // Assert that the invalid moves did not change the puzzle state
        assertEquals(initialState, puzzle.getValue(0, 0));

        assertFalse(puzzle.numInBox(0, 0, "5"));
    }

    //#7
    @Test()
    public void testWhenCallIsValidMove_thenReturnCorrectResult() {
        //When the move is invalid by row or col then return false
        assertFalse(puzzle.isValidMove(-1, 0, "5"));
        assertFalse(puzzle.isValidMove(0, -1, "5"));
        assertFalse(puzzle.isValidMove(-1, -1, "5"));

        //When the move is invalid by row or col then return true
        assertTrue(puzzle.isValidMove(1, 0, "1"));
        assertTrue(puzzle.isValidMove(0, 1, "6"));
        assertTrue(puzzle.isValidMove(1, 1, "9"));
    }

    //#8
    @Test
    public void testNumInRowColBox() {
        // Test that the puzzle identifies a number in a row, column, and box correctly.
        puzzle.makeMove(0, 0, "5", true);

        assertTrue(puzzle.numInRow(0, "5"));
        assertFalse(puzzle.numInRow(1,"5"));

        assertTrue(puzzle.numInCol(0, "5"));
        assertFalse(puzzle.numInCol(1, "5"));

        assertTrue(puzzle.numInBox(0, 0, "5"));
        assertFalse(puzzle.numInBox(3, 3, "5"));
    }

    //#9
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

    //#10
    @Test
    public void testGetValue() {
        // Test that the puzzle state correct updates and retrieves a value after a move.
        puzzle.makeMove(0, 0, "5", true);
        assertEquals("5", puzzle.getValue(0, 0));

        puzzle.makeMove(0, 7, "8", true);
        assertEquals("8", puzzle.getValue(0, 7));

        assertEquals("", puzzle.getValue(-1, -1));
        assertEquals("", puzzle.getValue(100, 100));
    }
}
/*
Checklist for the Assignment on Unit Testing

1. Project Selection
   - [x] Chosen a Java open-source project on GitHub.
   - [x] Validated the project is not a tutorial or training document.
   - [x] Confirmed the project has at least 20 stars.
   - [x] Ensured the project is unique to your group.

2. Understand Testing Framework
   - [x] Identified the testing framework used in the project (e.g., ant, maven, gradle).
   - [x] Studied how the existing automated tests are structured and run.

3. Develop Unit Test Cases
   - [x] Created 10 additional unit test cases distinct from existing ones.
   - [x] Ensured each unit test case is a single testing method in your test suite.
   - [x] Validated that multiple assert statements within a test case are logical and related.(further validation could strengthen some test cases.)

4. Automatic Test Execution
   - [x] Ensured that your unit tests can be executed automatically using the project’s testing framework.

5. Use of JUnit Annotations
   - [x] Used `@Before` and/or `@After` annotations where necessary for setup and teardown methods.

6. Documentation in README.md - For Each Test Case
   - [ ] Provided the name of the test case.
   - [ ] Described the goal of the test case.
   - [ ] Defined characteristics using Input Space Partitioning, ensuring:
   - [ ] At least one interface-based characteristic.
   - [ ] At least one functionality-based characteristic.

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