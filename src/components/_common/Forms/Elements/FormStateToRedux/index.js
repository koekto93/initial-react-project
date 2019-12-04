import React from 'react';
import PropTypes from 'prop-types';
import { FormSpy } from 'react-final-form';

//spy for update redux store
const FormStateToRedux = ({ updateFormState }) => (
	<FormSpy onChange={state => updateFormState(state.values)} />
);

FormStateToRedux.propTypes = {
	updateFormState: PropTypes.func,
	//redux
	//action
};

export default FormStateToRedux;
