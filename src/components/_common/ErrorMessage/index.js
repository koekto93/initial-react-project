import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@lmui/components';

const ErrorMessage = ({ text }) => (
	<Text color="danger" size="fs2">
		{text}
	</Text>
);

ErrorMessage.propTypes = {
	text: PropTypes.string,
};

export default ErrorMessage;
