import { CellLayout } from './CellLayout';
import PropTypes from 'prop-types';

export const CellContainer = ({ color, cellClick, value, index, isGameEnded }) => {
	return (
		<CellLayout
			color={color}
			cellClick={() => cellClick(index)}
			value={value}
			isGameEnded={isGameEnded}
		/>
	);
};

CellContainer.propTypes = {
	isGameEnded: PropTypes.bool.isRequired,
	cellClick: PropTypes.func.isRequired,
	color: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};
