import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, onChange, type }) => {
	const handleChange = event => {
		onChange(event.target.value);
	};

	return <input onChange={handleChange} value={value} type={type} />;
};

Input.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	type: PropTypes.string,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;
