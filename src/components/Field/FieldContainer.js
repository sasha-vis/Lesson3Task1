import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({ field, winningLineIndex, isGameEnded, cellClick }) => {
	return (
		<FieldLayout
			field={field}
			winningLineIndex={winningLineIndex}
			isGameEnded={isGameEnded}
			cellClick={cellClick}
		/>
	);
};

FieldContainer.propTypes = {
	isGameEnded: PropTypes.bool.isRequired,
	field: PropTypes.arrayOf(PropTypes.string).isRequired,
	winningLineIndex: PropTypes.number,
	cellClick: PropTypes.func.isRequired,
};
