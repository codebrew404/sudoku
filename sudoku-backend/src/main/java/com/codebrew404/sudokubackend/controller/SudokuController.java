package com.codebrew404.sudokubackend.controller;

import com.codebrew404.sudokubackend.dto.SudokuResponse;
import com.codebrew404.sudokubackend.service.SudokuService;
import org.springframework.web.bind.annotation.*;
import lombok.RequiredArgsConstructor;

@CrossOrigin(origins = "http://localhost:5174")
@RestController
@RequestMapping("/api/sudoku")
@RequiredArgsConstructor
public class SudokuController {
    private final SudokuService sudokuService;

    @GetMapping("/new")
    public SudokuResponse newGame() {
        return sudokuService.getNewSudoku();
    }
}

