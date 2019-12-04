import React from 'react';
import PropTypes from 'prop-types';
import { Form, FormSpy } from 'react-final-form';
import { block } from 'bem-cn';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';

//import { ErrorMessage } from '../../index';
import { FormCheckboxGroup } from '../Elements/index';

import './style.scss';

//const timeoutProps = { enter: 700, exit: 100 };

const cn = block('refuse-service-contractor');

function validateForm({ reasonsToRefuse = {} }) {
	const errors = {};
	const filledFieldNamesLength = Object.keys(reasonsToRefuse).length;
	if (!filledFieldNamesLength) {
		errors.nothingSelected = 'Необходимо указать причину';
	}

	return errors;
}

const RefuseServiceContractor = ({ options, onSubmit, onHandleFormStatus }) => {
	return (
		<Form
			onSubmit={onSubmit}
			validate={validateForm}
			render={({ handleSubmit, dirty, errors, submitFailed }) => {
				//const showCommonFormError = dirty || submitFailed;
				return (
					<form id="refuseServiceContractorForm" onSubmit={handleSubmit} className={cn()}>
						<FormCheckboxGroup options={options} />
						<FormSpy
							subscription={{ values: true, valid: true }}
							onChange={state => {
								const { values, valid } = state;
								onHandleFormStatus({ values, valid });
							}}
						/>
						{/* 	<div className={cn('error-block')}>
							<TransitionGroup component={null}>
								{showCommonFormError && errors.nothingSelected && (
									<CSSTransition
										timeout={timeoutProps}
										classNames="block-with-appearance"
									>
										<ErrorMessage text={errors.nothingSelected} />
									</CSSTransition>
								)}
							</TransitionGroup>
						</div> */}
					</form>
				);
			}}
		/>
	);
};

RefuseServiceContractor.propTypes = {
	options: PropTypes.array,
	onSubmit: PropTypes.func,
	onHandleFormStatus: PropTypes.func,
};

export default RefuseServiceContractor;
