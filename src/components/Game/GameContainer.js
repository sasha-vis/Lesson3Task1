import { useState } from 'react';
import { GameLayout } from './GameLayout';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

export const GameContainer = () => {
	const [field, setField] = useState(Array(9).fill(''));
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [winningLineIndex, setWinningLineIndex] = useState(null);

	const clickHandler = (index) => {
		if (field[index] || isGameEnded) return;

		const newField = [...field];
		newField[index] = currentPlayer;
		setField(newField);

		const winner = checkWinner(newField);
		if (winner) {
			setWinningLineIndex(winner);
			setIsGameEnded(true);
			return;
		}

		if (!newField.includes('')) {
			setIsDraw(true);
			setIsGameEnded(true);
			return;
		}

		setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
	};

	const checkWinner = (newField) => {
		for (let index = 0; index < WIN_PATTERNS.length; index++) {
			const [a, b, c] = WIN_PATTERNS[index];
			if (
				newField[a] &&
				newField[a] === newField[b] &&
				newField[a] === newField[c]
			) {
				return index;
			}
		}
		return null;
	};

	const clearHandler = () => {
		setField(Array(9).fill(''));
		setCurrentPlayer('X');
		setIsDraw(false);
		setIsGameEnded(false);
		setWinningLineIndex(null);
	};

	return (
		<GameLayout
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			field={field}
			currentPlayer={currentPlayer}
			winningLineIndex={winningLineIndex}
			cellClick={clickHandler}
			clearClick={clearHandler}
		/>
	);
};
