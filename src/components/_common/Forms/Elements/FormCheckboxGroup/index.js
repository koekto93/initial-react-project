import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import CheckboxGroup from '@lmui/components/CheckboxGroup';
import { block } from 'bem-cn';

import { FormCheckboxField } from '../index';
import './style.scss';

const cn = block('form-checkbox-group');

function getOptions(options, disabled) {
	return options.map((item, i) => (
		<Field
			type="checkbox"
			key={i}
			disabled={disabled}
			component={FormCheckboxField}
			{...item}
		/>
	));
}

const FormCheckboxGroup = ({ options, disabled, direction }) => {
	return (
		<div className={`${cn()} ${cn(direction)}`}>
			<CheckboxGroup elements={getOptions(options, disabled)} />
		</div>
	);
};

FormCheckboxGroup.propTypes = {
	options: PropTypes.array,
	disabled: PropTypes.bool,
	direction: PropTypes.string,
};

FormCheckboxGroup.defaultProps = {
	options: [],
	disabled: false,
	direction: 'column',
};

export default FormCheckboxGroup;
