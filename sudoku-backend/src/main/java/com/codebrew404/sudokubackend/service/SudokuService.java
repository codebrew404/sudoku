package com.codebrew404.sudokubackend.service;

import com.codebrew404.sudokubackend.dto.SudokuResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class SudokuService {

    private final RestTemplate restTemplate = new RestTemplate();

    private static final String API_URL =
            "https://sudoku-api.vercel.app/api/dosuku";

    public SudokuResponse getNewSudoku() {
        return restTemplate.getForObject(API_URL, SudokuResponse.class);
    }
}
