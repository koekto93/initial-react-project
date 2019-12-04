import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@lmui/components';

//Особые условия для дизейбла дат до.
function dateForOder(disableBeforeOption) {
	const date = new Date();
	switch (disableBeforeOption) {
		case 'createOrder':
			date.setDate(date.getDate() + 3);
	}
	return date;
}

const FormDatePicker = ({ input, meta, disableBeforeOptionName, ...rest }) => {
	return (
		<DatePicker
			errorText={meta.touched && meta.error}
			disableBefore={disableBeforeOptionName ? dateForOder(disableBeforeOptionName) : false}
			singleDateMode
			{...rest}
			{...input}
		/>
	);
};

FormDatePicker.propTypes = {
	input: PropTypes.object,
	meta: PropTypes.object,
	rest: PropTypes.array,
	screenSize: PropTypes.string,
	disableBeforeOptionName: PropTypes.string,
};

export default FormDatePicker;
