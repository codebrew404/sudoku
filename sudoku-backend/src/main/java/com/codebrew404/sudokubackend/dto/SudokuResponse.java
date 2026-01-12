package com.codebrew404.sudokubackend.dto;

import java.util.List;

public class SudokuResponse {
    public NewBoard newboard;

    public static class NewBoard {
        public List<Grid> grids;
        public int results;
        public String message;
    }

    public static class Grid {
        public List<List<Integer>> value;
        public List<List<Integer>> solution;
        public String difficulty;
    }
}
