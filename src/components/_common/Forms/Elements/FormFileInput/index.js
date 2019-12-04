import React from 'react';
import PropTypes from 'prop-types';
import FileInput from '../../../FileInput';

const FormFileInput = ({ input, meta, ...rest }) => {
	return <FileInput errorText={meta.touched && meta.error} {...rest} {...input} />;
};

FormFileInput.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
	screenSize: PropTypes.string,
};

export default FormFileInput;
