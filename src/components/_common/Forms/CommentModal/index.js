//@flow
import React from 'react'
import { connect } from 'react-redux'
import { Form, Field } from 'react-final-form'

//import { openSnackbar } from '../../Notifier'
import { setCandidateStatus } from '../../../../redux/modules/candidate'
import { getCandidateInfo } from '../../../../selectors/candidate'
import { TextAreaForm } from '../Elements'
import { ModalDialog, FormHead, Button } from '../../index'
import { ModalContainer, FormContent, SingleBlock } from './styled'

type CallBackProps = {
  onClose: Function,
  selectedModalName: string,
  candidateInfo: Object,
  status: string,
  text: string,
  setCandidateStatus: setCandidateStatus,
}

const modalName = 'CommentModal'

const CommentModal = ({
  onClose,
  selectedModalName,
  setCandidateStatus,
  status,
  text,
  candidateInfo: { id, mail, skype },
}: CallBackProps) => {
  const onSubmit = values => {
    setCandidateStatus({
      CandidateId: id,
      Status: status,
      ...values,
    })
    //onClose()
  }
  const required = value => (value ? undefined : 'Заполните поле')

  return (
    <ModalDialog isOpen={selectedModalName === modalName} onClose={onClose}>
      <ModalContainer>
        <FormHead text={text} onClick={onClose} />
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <FormContent>
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
  { setCandidateStatus }
)(CommentModal)
