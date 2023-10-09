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
    @Test // Test that the generate random Sudoku puzzle with type SIXBYSIX
    public void testGenerateRandomSudokuPuzzleWithTypeSIXBYSIX_thenReturnBoardLengthIs6() {
        // Functionality-Based:
        // C1 = Ability to generate a valid Sudoku board.
        // C2 = Ability to generate a Sudoku board corresponding to the specified type.
        // T1 (True, True) Functionality-Based
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.SIXBYSIX);
        // T1(Equal 6) Interface-Based
        // Functionality-Based: C1 - A valid board should be of size 6 for SIXBYSIX type.
        assertEquals(6, generatedPuzzle.getBoard().length);
        // T2(Not 6) Interface-Based
        // Functionality-Based: C2 - Ensuring that a SIXBYSIX board is not mistakenly a 9x9 board.
        // T2 (True, False) It valid board but not matching the specified type (Functionality-Based)
        assertNotEquals(9, generatedPuzzle.getBoard().length);
        // T3(Any other value) Interface-Based
        // T4 (False, False) where the board is invalid and does not match the specified type.(Functionality-Based)
        assertNotEquals(12, generatedPuzzle.getBoard().length);
    }

    //#2
    @Test // Test that the generate random Sudoku puzzle with type NINEBYNINE
    public void testGenerateRandomSudokuPuzzleWithTypeNINEBYNINE_thenReturnBoardLengthIs9() {
        // Functionality-Based:
        // C1 = Ability to generate a valid Sudoku board.
        // C2 = Ability to generate a Sudoku board corresponding to the specified type.
        // T1 (True, True) Functionality-Based
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.NINEBYNINE);
        // Functionality-Based: C1 - A valid board should be of size 9 for NINEBYNINE type.
        // T1(Equal 9) Interface-Based
        assertEquals(9, generatedPuzzle.getBoard().length);
        // T2(Not 9) Interface-Based
        // Functionality-Based: C2 - Ensuring that a NINEBYNINE board is not mistakenly a 6x6 board.
        // T2 (True, False) It valid board but not matching the specified type (Functionality-Based)
        assertNotEquals(6, generatedPuzzle.getBoard().length);
        // T3(Any other value) Interface-Based
        // T4 (False, False) where the board is invalid and does not match the specified type.(Functionality-Based)
        assertNotEquals(12,generatedPuzzle.getBoard().length);
    }

    //#3
    @Test // Test that the generate random Sudoku puzzle with type TWELVEBYTWELVE
    public void testGenerateRandomSudokuPuzzleWithTypeTWELVEBYTWELVE_thenReturnBoardLengthIs12() {
        // Functionality-Based:
        // C1 = Ability to generate a valid Sudoku board.
        // C2 = Ability to generate a Sudoku board corresponding to the specified type.
        // T1 (True, True) Functionality-Based
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.TWELVEBYTWELVE);
        // Functionality-Based: C1 - A valid board should be of size 12 for TWELVEBYTWELVE type.
        // T1(Equal 12) Interface-Based
        assertEquals(12, generatedPuzzle.getBoard().length);
        // T2(Not 12) Interface-Based
        // Functionality-Based: C2 - Ensuring that a TWELVEBYTWELVE board is not mistakenly a 6x6 board.
        assertNotEquals(6, generatedPuzzle.getBoard().length);
        // T3(Any other value) Interface-Based
        // T4 (False, False) where the board is invalid and does not match the specified type.(Functionality-Based)
        assertNotEquals(9, generatedPuzzle.getBoard().length);
    }

    //#4
    @Test // Test that the generate random Sudoku puzzle with type SIXTEENBYSIXTEEN
    public void testGenerateRandomSudokuPuzzleWithTypeSIXTEENBYSIXTEEN_thenReturnBoardLengthIs16() {
        // Functionality-Based:
        // C1 = Ability to generate a valid Sudoku board.
        // C2 = Ability to generate a Sudoku board corresponding to the specified type.
        // T1 (True, True) Functionality-Based
        SudokuPuzzle generatedPuzzle = generator.generateRandomSudoku(SudokuPuzzleType.SIXTEENBYSIXTEEN);
        // Functionality-Based: C1 - A valid board should be of size 16 for SIXTEENBYSIXTEEN type.
        // T1(Equal 16) Interface-Based
        assertEquals(16, generatedPuzzle.getBoard().length);
        // T2(Not 16) Interface-Based
        // Functionality-Based: C2 - Ensuring that a SIXTEENBYSIXTEEN board is not mistakenly a 9x9 board.
        assertNotEquals(9, generatedPuzzle.getBoard().length);
        // T3(Any other value) Interface-Based
        // T4 (False, False) where the board is invalid and does not match the specified type.(Functionality-Based)
        assertNotEquals(6, generatedPuzzle.getBoard().length);
    }

    //#5
    @Test
    public void testMakeMove() {
        // Test that the move-making work correct updates the puzzle's state.
        // T4 (0 - 8, Less than 1, False) Interface-Based
        puzzle.makeMove(0, 0, "0", false);
        assertNotEquals("0", puzzle.getValue(0, 0));
        // T5 (0 - 8, 1 - 9, True) Interface-Based
        // T5(Updated, Mutable) Functionality-Based
        puzzle.makeMove(0, 0, "5", true);
        assertEquals("5", puzzle.getValue(0, 0));
        // T6 (0 - 8, Greater than 9, True) Interface-Based
        puzzle.makeMove(0, 0, "10", true);
        assertNotEquals("10", puzzle.getValue(0, 0));
        // T6(Updated, Immutable) Functionality-Based
        puzzle.makeMove(0, 0, "5", false);
        assertEquals("5", puzzle.getValue(0, 0));
    }

    //#6
    @Test() // Test if the value is not valid then return false
    public void testWhenCallIsValidValueWithInvalidValue_thenReturnFalse() {
        // Functionality-Based: C4 - Checking if the updated value on the board is as expected.
        // Functionality-Based: C5 - Verifying that the `numInBox` method returns the expected boolean.
        String initialState = puzzle.getValue(0, 0);
        // T4 (0 - 8, Less than 1, False) Interface-Based
        // Functionality-Based: T9(Not Updated, True) - Value should not be updated to "-1" and `numInBox` should return true.
        puzzle.makeMove(0, 0, "-1", true);
        // T5 (0 - 8, Greater than 9, True) Interface-Based
        // Functionality-Based: T10(Not Updated, False) - Value should not be updated to "10" and `numInBox` should return false.
        puzzle.makeMove(0, 0, "10", true);
        // T6 (0 - 8, Non-number, True) Interface-Based
        // Functionality-Based: T9(Not Updated, True) - Value should not be updated to "A" and `numInBox` should return true.
        puzzle.makeMove(0, 0, "A", true);
        // Assert that the invalid moves did not change the puzzle state
        // Functionality-Based: Verifying C4 by checking if the initial state remains unchanged after invalid moves.
        assertEquals(initialState, puzzle.getValue(0, 0));
        // Functionality-Based: Verifying C5 by checking the return of `numInBox`.
        assertFalse(puzzle.numInBox(0, 0, "5"));
    }


    //#7
    @Test()
    public void testWhenCallIsValidMove_thenReturnCorrectResult() {
        //When the move is invalid by row or col then return false
        // Functionality-Based: C4 - Testing `isValidMove` method’s boolean result.
        // T2: (False) - Ensuring that invalid row or column indices result in `isValidMove` returning false.
        assertFalse(puzzle.isValidMove(-1, 0, "5"));
        assertFalse(puzzle.isValidMove(0, -1, "5"));

        // T1(Less than 0, 0-8, 1-9) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns false for invalid row index.
        assertFalse(puzzle.isValidMove(-1, 1, "1"));

        // T2(Greater than 9, 0-8, 1-9) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns false for invalid column index.
        assertFalse(puzzle.isValidMove(10, 1, "1"));

        // T3(0-8 , Less than 0,  1-9)  Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns false for invalid column index.
        assertFalse(puzzle.isValidMove(1, -1, "1"));

        // T4(0-8 , Greater than 8 , 1-9) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns false for invalid column index.
        assertFalse(puzzle.isValidMove(1, 10, "1"));

        // T7(0-8 ,Less than 0, Non-Number) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns false for non-number value.
        assertFalse(puzzle.isValidMove(1, -1, "A"));

        //When the move is valid by row or col then return true

        // T1: (True) - Ensuring that valid row and column indices result in `isValidMove` returning true.
        assertTrue(puzzle.isValidMove(1, 0, "1"));
        assertTrue(puzzle.isValidMove(0, 1, "6"));

        // T5(0-8 , 0-8, Less than 1) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns true for valid inputs.
        assertTrue(puzzle.isValidMove(1, 1, "1"));

        // (0-8 , 0-8, Greater than 9) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns true.
        assertTrue(puzzle.isValidMove(1, 1, "10"));

        // (0-8, 0-8,  1-9) Interface-Based
        // Functionality-Based: Verifying C4 by checking `isValidMove` returns true.
        assertTrue(puzzle.isValidMove(1, 1, "0"));
    }

    //#8
    @Test // Test that the puzzle identifies a number in a row, column, and box correctly.
    public void testNumInRowColBox() {
        puzzle.makeMove(0, 0, "5", true);
        // T1: Valid checks across all methods
        assertTrue(puzzle.numInRow(0, "5"));
        assertTrue(puzzle.numInCol(0, "5"));
        assertTrue(puzzle.numInBox(0, 0, "5"));

        // T2: Invalid row check
        assertFalse(puzzle.numInRow(1, "5"));

        // T3: Invalid column check
        assertFalse(puzzle.numInCol(1, "5"));

        // T4: Invalid box check
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