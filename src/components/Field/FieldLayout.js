import { CellContainer } from './../Cell/CellContainer';
import styles from './field.module.css';
import PropTypes from 'prop-types';

export const FieldLayout = ({ field, winningLineIndex, isGameEnded, cellClick }) => {
	return (
		<div className={styles.field}>
			{field.map((item, index) => (
				<CellContainer
					key={index}
					index={index}
					color={item === 'X' ? 'red' : 'blue'}
					isGameEnded={isGameEnded}
					cellClick={cellClick}
					value={item}
				/>
			))}
			{winningLineIndex && (
				<div className={`${styles.line} ${styles[`line-${winningLineIndex}`]}`} />
			)}
		</div>
	);
};

FieldLayout.propTypes = {
	isGameEnded: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	winningLineIndex: PropTypes.number,
	cellClick: PropTypes.func.isRequired,
};
