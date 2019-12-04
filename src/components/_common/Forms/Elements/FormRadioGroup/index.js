import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import RadioGroup from '@lmui/components/RadioGroup';

import { FormRadioField } from '../index';

function getOptions(options, disabled) {
	return options.map((item, i) => (
		<Field type="radio" key={i} component={FormRadioField} disabled={disabled} {...item} />
	));
}

const FormRadioGroup = ({ options, disabled }) => {
	return <RadioGroup elements={getOptions(options, disabled)} />;
};

FormRadioGroup.propTypes = {
	options: PropTypes.array,
    disabled: PropTypes.bool
};

FormRadioGroup.defaultProps = {
	options: [],
    disabled: false
};

export default FormRadioGroup;
