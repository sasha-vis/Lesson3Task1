import styles from './button.module.css';
import PropTypes from 'prop-types';

export const ButtonLayout = ({ clearClick }) => {
	return (
		<button className={styles.button} onClick={clearClick}>
			Начать заново
		</button>
	);
};

ButtonLayout.propTypes = {
	clearClick: PropTypes.func.isRequired,
};
