import React from 'react';
import PropTypes from 'prop-types';
import { block } from 'bem-cn';
import { omit } from 'lodash';
import { Field } from 'react-final-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { mapFieldComponents } from '../../../../../constants/formFields';
import Checkbox from '../../../Checkbox';
import './style.scss';

const timeoutProps = { enter: 700, exit: 100 };
const cn = block('form-checkbox-field');

const FormCheckboxField = ({
	input: { checked, value, name, onChange, ...otherInput },
	additionalField,
	meta,
	...other
}) => {
	const isShowAdditionalField = additionalField && additionalField.component && checked;
	const additionalRest =
		additionalField && additionalField.component && omit(additionalField, ['component']);
	return (
		<div className={cn()}>
			<Checkbox
				name={name}
				value={value}
				checked={checked}
				onChange={onChange}
				inputProps={otherInput}
				{...other}
			/>
			<TransitionGroup component={null}>
				{isShowAdditionalField && (
					<CSSTransition timeout={timeoutProps} classNames="block-with-appearance">
						<div className={cn('additional-field')}>
							<Field
								component={mapFieldComponents[additionalField.component]}
								{...additionalRest}
							/>
						</div>
					</CSSTransition>
				)}
			</TransitionGroup>
		</div>
	);
};

FormCheckboxField.propTypes = {
	input: PropTypes.shape({
		checked: PropTypes.bool,
		value: PropTypes.string,
		name: PropTypes.string,
		onChange: PropTypes.func,
	}),
	additionalField: PropTypes.shape({
		name: PropTypes.string,
		placeholder: PropTypes.string,
		component: PropTypes.string,
	}),
	meta: PropTypes.object,
};

export default FormCheckboxField;
