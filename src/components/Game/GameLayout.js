import { InformationContainer } from '../Information/InformationContainer';
import { FieldContainer } from '../Field/FieldContainer';
import { ButtonContainer } from '../Button/ButtonContainer';
import styles from './game.module.css';
import PropTypes from 'prop-types';

export const GameLayout = ({
	isDraw,
	isGameEnded,
	field,
	currentPlayer,
	winningLineIndex,
	cellClick,
	clearClick,
}) => {
	return (
		<div className={styles.game}>
			<h1 className={styles.title}>Крестики Нолики</h1>
			<InformationContainer
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currentPlayer={currentPlayer}
			/>
			<FieldContainer
				field={field}
				winningLineIndex={winningLineIndex}
				isGameEnded={isGameEnded}
				cellClick={cellClick}
			/>
			<ButtonContainer clearClick={clearClick} />
		</div>
	);
};

GameLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	currentPlayer: PropTypes.string.isRequired,
	winningLineIndex: PropTypes.number,
	cellClick: PropTypes.func.isRequired,
	clearClick: PropTypes.func.isRequired,
};
