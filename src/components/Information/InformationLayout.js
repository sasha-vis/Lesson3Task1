import styles from './information.module.css';
import PropTypes from 'prop-types';

export const InformationLayout = ({ isDraw, isGameEnded, currentPlayer }) => {
	return (
		<div
			className={`${styles.info} ${isDraw ? styles.drawColor : isGameEnded ? styles.winColor : ''}`.trim()}
		>
			{isDraw
				? 'Ничья'
				: isGameEnded
					? `Победа: ${currentPlayer}`
					: `Ходит: ${currentPlayer}`}
		</div>
	);
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool.isRequired,
	isGameEnded: PropTypes.bool.isRequired,
	currentPlayer: PropTypes.string.isRequired,
};
