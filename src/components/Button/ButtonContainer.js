import React from 'react';
import { ButtonLayout } from './ButtonLayout';
import PropTypes from 'prop-types';

export const ButtonContainer = ({ clearClick }) => {
	return <ButtonLayout clearClick={clearClick} />;
};

ButtonContainer.propTypes = {
	clearClick: PropTypes.func.isRequired,
};
