import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { OnChange } from 'react-final-form-listeners';
import { View, Button, Text, Icon } from '@lmui/components';

import { block } from 'bem-cn';

import { configurationFormFields, mapFieldComponents } from '../../../../constants/formFields';
import { FormStateToRedux, FormFileInput } from '../Elements';
import { serviceCardDataAsync, updateFormState } from '../../../../actions/createOrderActions';

import { getScreenSize } from '../../../../selectors/init';
import {
	getFetchingServicedCardData,
	getNewCustomerInfo,
} from '../../../../selectors/serviceConfigurator';
import { renderFields } from '../../../../util/formHelpers';

import './style.scss';

const cn = block('configurator-form');

function onSubmit(values) {
	//console.log('onSubmit', values);
}

function validateForm(values) {
	const errors = {};
	return errors;
}

//Пришлось выставить начальное значение для колличества выезда за город для lm ui компонента
const startedValues = {
	departureOutOfTownValue: 1,
	files: [],
};

const ConfiguratorForm = ({
	screenSize,
	handleClickPreviousStep,
	fetchingServicedCardData,
	newCustomerInfo,
	serviceCardDataAsync,
	updateFormState,
}) => {
	const resultedInitValues = { ...startedValues, ...newCustomerInfo };

	return (
		<Form
			onSubmit={onSubmit}
			initialValues={resultedInitValues}
			validate={validateForm}
			render={({ handleSubmit, form, submitting, pristine, values, errors }) => (
				<View row styleSet={[`${cn()}`]}>
					<View col-xl-12 col-lg-12>
						<form onSubmit={handleSubmit} className={cn('content')}>
							<View row>
								<View col>
									<View
										row
										pt="gap5"
										pl="gap7"
										pr="gap7"
										pb="gap5"
										styleSet={[`${cn('fields')}`]}
									>
										<View col>
											<Button
												iconLeft="back"
												type="text-primaryDark"
												title="Назад"
												noCaps={true}
												textSize="fs2"
												mb="gap4"
												onPress={handleClickPreviousStep}
												styleSet={[`${cn('return-button')}`]}
											/>
											<FormStateToRedux updateFormState={updateFormState} />
											{renderFields({
												formFields: configurationFormFields,
												mapFieldComponents: mapFieldComponents,
												globalFormOptions: {
													screenSize,
													disabled: fetchingServicedCardData,
												},
											})}
											<OnChange name="serviceCardNumber">
												{value => {
													if (!errors.serviceCardNumber) {
														serviceCardDataAsync(value);
													}
												}}
											</OnChange>
										</View>
									</View>
									<View
										row
										mt="gap4"
										mb="gap4"
										pt="gap5"
										pl="gap7"
										pr="gap7"
										pb="gap5"
										styleSet={[`${cn('file-input')}`]}
									>
										<View col>
											<Text block color="mainText" size="fs2" bold={true}>
												Загрузить файл (не обязательно)
											</Text>
											<Text block color="mainText" size="fs1">
												Можете добавить файл со схемой проекта или другими
												деталями.
											</Text>
											<Field name="files" component={FormFileInput} />
											<div className={cn('info')}>
												<Icon
													color="accentDark"
													size="ic2"
													name="info"
													mr="gap4"
												/>
												<Text color="grey60" size="fs0">
													В файлах не должно быть: ФИО; Телефона; Эл.
													почты; Адреса прописки и проживания; Данных
													паспорта; ИНН и СНИЛС
												</Text>
											</div>
										</View>
									</View>
								</View>
							</View>
						</form>
					</View>
				</View>
			)}
		/>
	);
};

ConfiguratorForm.propTypes = {
	screenSize: PropTypes.string,
	handleClickPreviousStep: PropTypes.func,
	//redux
	fetchingServicedCardData: PropTypes.bool,
	newCustomerInfo: PropTypes.object,

	//action
	serviceCardDataAsync: PropTypes.func,
	updateFormState: PropTypes.func,
};

const mapStateToProps = state => ({
	screenSize: getScreenSize(state),
	fetchingServicedCardData: getFetchingServicedCardData(state),
	newCustomerInfo: getNewCustomerInfo(state),
});
export default connect(mapStateToProps, { serviceCardDataAsync, updateFormState })(
	ConfiguratorForm
);
