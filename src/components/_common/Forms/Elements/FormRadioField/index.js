import React from 'react';
import PropTypes from 'prop-types';
import { omit } from 'lodash';
import { Field } from 'react-final-form';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
//import { block } from 'bem-cn';
import View from '@lmui/components/View';

import Radio from '../../../Radio/index';
import { mapFieldComponents } from '../../../../../constants/formFields';
import './style.scss';

//const cn = block('form-radio-field');

const timeoutProps = { enter: 700, exit: 100 };

const FormRadioField = ({
	input: { checked, value, name, onChange, ...otherInput },
	additionalField,
	meta,
	...other
}) => {
	const isShowAdditionalField = additionalField && checked;
	const additionalRest =
		additionalField && additionalField.component && omit(additionalField, ['component']);
	return (
		<View row>
			<View col-xl-12>
				<Radio
					{...other}
					name={name}
					value={value}
					checked={checked}
					onChange={onChange}
					inputProps={otherInput}
				/>

				<TransitionGroup component={null}>
					{isShowAdditionalField && (
						<CSSTransition timeout={timeoutProps} classNames="block-with-appearance">
							<View row mt={'gap2'} mb={'gap5'}>
								<View col-xl-11 ml={'gap11'} no-gutter>
									<Field
										component={mapFieldComponents[additionalField.component]}
										{...additionalRest}
									/>
								</View>
							</View>
						</CSSTransition>
					)}
				</TransitionGroup>
			</View>
		</View>
	);
};

FormRadioField.propTypes = {
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

export default FormRadioField;
