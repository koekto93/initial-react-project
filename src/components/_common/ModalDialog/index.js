//@flow
import React from 'react'
import Modal from 'react-modal'

import './style.css'

type ModalDialogProps = {
  isOpen: boolean,
  onClose: Function,
  rest: Array<any>,
}

const customStyles = {
  content: {
    top: 'calc(100% - 90vh)',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, 0)',
    padding: '8px',
    border: '0',
    background: 'transparent',
  },
  overlay: {
    background: 'rgba(0, 0, 0, 0.75)',
  },
}

const ModalDialog = ({ isOpen, onClose, ...rest }: ModalDialogProps) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onClose}
    style={customStyles}
    {...rest}
  />
)

export default ModalDialog
