import React from 'react';
import PropTypes from 'prop-types';
import Input from '@lmui/components/Input';

/* function getCheckIcon(hasError) {
	return hasError
		? null
		: [
				{
					static: { name: 'check', color: 'primary' },
				},
		  ];
} */

const FormInput = ({ input, meta, screenSize, ...rest }) => {
	return (
		<div>
			<Input
				transitionPlaceholder
				errorText={meta.touched && meta.error}
				size={screenSize}
				//insideIconsRight={getCheckIcon(meta.error)}
				maskChar={null}
				{...input}
				{...rest}
			/>
		</div>
	);
};

FormInput.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
	screenSize: PropTypes.string,
};

export default FormInput;
