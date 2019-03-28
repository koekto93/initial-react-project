//@flow
import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'

/* import { openSnackbar } from '../../Notifier' */
import { datePlusHour } from '../../../../helper'
import { getCandidateInfo } from '../../../../selectors/candidate'
import { addRecord } from '../../../../redux/modules/candidate'
import { callBackSelectValues } from '../../../../constants'
import {
  InputDayPickerForm,
  CustomSelectForm,
  InputForm,
  TextAreaForm,
} from '../Elements'
import { ModalDialog, FormHead, Button } from '../../index'
import {
  ModalContainer,
  FormContent,
  BlockOfControls,
  FieldWrapper,
  Label,
  Text,
  SingleBlock,
} from './styled'

type CallBackProps = {
  onClose: Function,
  selectedModalName: string,
  candidateInfo: Object,
  addRecord: addRecord,
}

const modalName = 'RecordingInterviewModal'

const RecordingInterviewModal = ({
  onClose,
  selectedModalName,
  addRecord,
  candidateInfo: { id, mail, skype },
}: CallBackProps) => {
  const onSubmit = ({ date, time, ...rest }) => {
    const newDate = datePlusHour(date, time)
    addRecord({
      CandidateId: id,
      Date: newDate,
      ...rest,
    })
    //onClose()
  }

  const required = value => (value ? undefined : 'Заполните поле')

  return (
    <ModalDialog isOpen={selectedModalName === modalName} onClose={onClose}>
      <ModalContainer>
        <FormHead text="Запись на интервью" onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          initialValues={{
            mail: mail,
            skype: skype,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FormContent>
                <BlockOfControls>
                  {[
                    <FieldWrapper key="date">
                      <Label>Дата</Label>
                      <Field
                        name="date"
                        component={InputDayPickerForm}
                        validate={required}
                      />
                    </FieldWrapper>,
                    <FieldWrapper key="time">
                      <Label>Время</Label>
                      <Field
                        name="time"
                        component={CustomSelectForm}
                        validate={required}
                        selectOptions={callBackSelectValues}
                      />
                    </FieldWrapper>,
                  ]}
                </BlockOfControls>
                <Text isItalic={true}>
                  (Уточнить у кандидата удобное время и дату)
                </Text>
                <Text>
                  Расписание встреч смотри{' '}
                  <a href="https://groups.skyeng.ru/">здесь</a>
                </Text>
                <BlockOfControls>
                  {[
                    <FieldWrapper key="mail">
                      <Label>Почта кандидата</Label>
                      <Field
                        name="mail"
                        component={InputForm}
                        validate={required}
                      />
                    </FieldWrapper>,
                    <FieldWrapper key="skype">
                      <Label>Skype учетка</Label>
                      <Field
                        name="skype"
                        component={InputForm}
                        validate={required}
                      />
                    </FieldWrapper>,
                  ]}
                </BlockOfControls>
                <Text isItalic={true}>
                  (Внимательно проверить почту и обновить на актуальную при
                  необходимости)
                </Text>
                <SingleBlock>
                  <Field
                    name="comment"
                    component={TextAreaForm}
                    validate={required}
                  />
                </SingleBlock>
              </FormContent>
              <div className="form-submit">
                <div className="small-button">
                  <Button type="submit" value="OK" tabIndex="5" />
                </div>
              </div>
            </form>
          )}
        />
      </ModalContainer>
    </ModalDialog>
  )
}

const mapStateToProps = state => ({
  candidateInfo: getCandidateInfo(state),
})

export default connect(
  mapStateToProps,
  { addRecord }
)(RecordingInterviewModal)
