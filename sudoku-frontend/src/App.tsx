import { useEffect, useState } from "react";
import SudokuGrid from "./components/SudokuGrid";

type Grid = {
    value: number[][];
    solution: number[][];
    difficulty: string;
};

type ApiResponse = {
    newboard: {
        grids: Grid[];
    };
};

export default function App() {
    const [board, setBoard] = useState<number[][] | null>(null);
    const [solution, setSolution] = useState<number[][] | null>(null);
    const [difficulty, setDifficulty] = useState<string>("");

    function loadNewGame() {
        fetch("http://localhost:8080/api/sudoku/new")
            .then(res => res.json())
            .then((data: ApiResponse) => {
                const grid = data.newboard.grids[0];
                setBoard(grid.value);
                setSolution(grid.solution);
                setDifficulty(grid.difficulty);
            })
            .catch(console.error);
    }

    useEffect(() => {
        loadNewGame();
    }, []);

    return (
        <div className="app">
            <h1>Sudoku</h1>
            <p>Difficulty: {difficulty}</p>

            <button onClick={loadNewGame} className="new-game">
                New Game
            </button>

            {board && solution ? (
                <SudokuGrid initialBoard={board} solution={solution} />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}
