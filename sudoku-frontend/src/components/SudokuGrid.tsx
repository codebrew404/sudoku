import {useState} from "react";
import "../styles/sudoku-grid.css";

type Props = {
    initialBoard: number[][];
    solution: number[][];
};

export default function SudokuGrid({initialBoard, solution}: Props) {
    const [board, setBoard] = useState<number[][]>(
        initialBoard.map(row => [...row])
    );

    function handleChange(row: number, col: number, value: string) {
        if (!/^[1-9]?$/.test(value)) return;

        const updated = board.map(r => [...r]);
        updated[row][col] = value === "" ? 0 : parseInt(value);
        setBoard(updated);
    }

    return (
        <div className="grid">
            {board.map((row, r) =>
                row.map((cell, c) => {
                    const fixed = initialBoard[r][c] !== 0;
                    const wrong =
                        !fixed && cell !== 0 && cell !== solution[r][c];

                    return (
                        <input
                            key={`${r}-${c}`}
                            className={`cell
                ${(c + 1) % 3 === 0 && c !== 8 ? "right-border" : ""}
                ${(r + 1) % 3 === 0 && r !== 8 ? "bottom-border" : ""}
                ${wrong ? "wrong" : ""}
              `}
                            type="text"
                            maxLength={1}
                            value={cell === 0 ? "" : cell}
                            disabled={fixed}
                            onChange={e => handleChange(r, c, e.target.value)}
                        />
                    );
                })
            )}
        </div>
    );
}