import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-final-form';
import _ from 'lodash';
import View from '@lmui/components/View';
import Text from '@lmui/components/Text';
//import Button from '@lmui/components/Button';
import { block } from 'bem-cn';
import {
	companyFormFields,
	mapFieldComponents,
} from '../../../../constants/recruitment/recruitmentFormFields';
import { getScreenSize } from '../../../../selectors/init';

import { renderFields } from '../../../../util/formHelpers';

const cn = block('company-data');

const initialValues = {
	contractNumber: '323442343',
};

const globalFormOptions = {
	disabled: false,
};

function onSubmit(values) {
	//console.log('onSubmit', values);
}

function validateForm(values) {
	const errors = {};
	if (values.commissionPart) {
		const isUsingGeneralTaxationSystem = _.includes(
			values.aboutContractorControl,
			'isUsingGeneralTaxationSystem'
		);
		if (!isUsingGeneralTaxationSystem && values.commissionPart < 20) {
			errors.commissionPart =
				'При упрощенной системе налогообложения процент не может быть ниже 20';
		}
	}

	return errors;
}

//TODO Сделать адекватные названия полей
const Contractor = ({ screenSize }) => {
	return (
		<Form
			onSubmit={onSubmit}
			initialValues={initialValues}
			validate={validateForm}
			render={({ handleSubmit, form, submitting, pristine, values }) => (
				<View row mt={'gap9'}>
					<View col-xl-12 col-lg-12>
						<Text block color="mainText" size="fs2" weight="bold" mb={'gap5'}>
							Данные компании
						</Text>
						<form onSubmit={handleSubmit} className={cn()}>
							{renderFields({
								formFields: companyFormFields,
								mapFieldComponents: mapFieldComponents,
								globalFormOptions: {
									screenSize,
									...globalFormOptions,
								},
							})}
						</form>
					</View>
				</View>
			)}
		/>
	);
};

Contractor.propTypes = {
	screenSize: PropTypes.string,
};

const mapStateToProps = state => ({
	screenSize: getScreenSize(state),
});
export default connect(mapStateToProps)(Contractor);
