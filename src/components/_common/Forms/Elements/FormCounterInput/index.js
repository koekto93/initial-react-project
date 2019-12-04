import React from 'react';
import PropTypes from 'prop-types';
import { CounterInput } from '@lmui/components';

const FormCounterInput = ({ input, meta, screenSize, ...rest }) => {
	return (
		<div>
			<CounterInput
				errorText={meta.touched && meta.error}
				size={screenSize}
				min={1}
				{...input}
				{...rest}
			/>
		</div>
	);
};

FormCounterInput.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
	screenSize: PropTypes.string,
};

export default FormCounterInput;
