//@flow
import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'

//import { openSnackbar } from '../../Notifier'

import { ModalDialog, FormHead, Button } from '../../index'
import {
  InputDayPickerForm,
  RadioButtonGroup,
  CustomSelectForm,
} from '../Elements'
import {
  callBackRadioValues,
  callBackSelectValues,
} from '../../../../constants'
import {
  ModalContainer,
  FormContent,
  AnotherControls,
  FieldWrapper,
  Label,
} from './styled'
import { datePlusHour } from '../../../../helper'
import { setCandidateStatus } from '../../../../redux/modules/candidate'
import { getCandidateId } from '../../../../selectors/candidate'

type CallBackProps = {
  onClose: Function,
  isModalOpen: boolean,
  setCandidateStatus: setCandidateStatus,
  id: string,
}

const modalName = 'CallBackModal'

const CallBackModal = ({
  onClose,
  selectedModalName,
  id,
  setCandidateStatus,
}: CallBackProps) => {
  const onSubmit = ({ date, time, ...rest }) => {
    const newDate = rest.delay === 'another' ? datePlusHour(date, time) : null
    setCandidateStatus({
      CandidateId: id,
      Status: 'CallBack',
      date: newDate,
      ...rest,
    })
    //onClose()
    //openSnackbar({ message: 'Send!' })
  }

  const required = value => (value ? undefined : 'Заполните поле')

  return (
    <ModalDialog isOpen={modalName === selectedModalName} onClose={onClose}>
      <ModalContainer>
        <FormHead text="Перезвонить" onClick={onClose} />

        <Form
          onSubmit={onSubmit}
          initialValues={{
            delay: callBackRadioValues[0].value,
          }}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FormContent>
                <Field
                  name="delay"
                  component={RadioButtonGroup}
                  validate={required}
                  radioButtonOptions={callBackRadioValues}
                />
                {values.delay === 'another' ? (
                  <AnotherControls>
                    {[
                      <FieldWrapper key="1">
                        <Label>Дата</Label>
                        <Field
                          name="date"
                          component={InputDayPickerForm}
                          validate={required}
                        />
                      </FieldWrapper>,
                      <FieldWrapper key="2">
                        <Label>Время</Label>
                        <Field
                          name="time"
                          component={CustomSelectForm}
                          validate={required}
                          selectOptions={callBackSelectValues}
                        />
                      </FieldWrapper>,
                    ]}
                  </AnotherControls>
                ) : null}
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
  id: getCandidateId(state),
})

export default connect(
  mapStateToProps,
  { setCandidateStatus }
)(CallBackModal)
