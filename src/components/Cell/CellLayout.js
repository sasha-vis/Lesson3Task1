import styles from './cell.module.css';
import PropTypes from 'prop-types';

export const CellLayout = ({ color, cellClick, value, isGameEnded }) => {
	return (
		<button
			className={`${styles.cell} ${styles[color]} ${isGameEnded ? styles.disabled : ''}`.trim()}
			onClick={cellClick}
		>
			{value}
		</button>
	);
};

CellLayout.propTypes = {
	isGameEnded: PropTypes.bool.isRequired,
	cellClick: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
