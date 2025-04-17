import React from 'react'
import { Modal, ModalProps } from 'react-bootstrap'
import UploadForm from './Upload.form'

export function UploadModal(props: ModalProps) {
  return (
    <Modal {...props}>
      <Modal.Header closeButton>
        <Modal.Title>Upload</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UploadForm onSubmit={async (files) => console.log(files)} />
      </Modal.Body>
      {/*<Modal.Footer>
                <Button variant="secondary">
                    Cancel
                </Button>
                <Button variant="primary">
                    Upload
                </Button>
            </Modal.Footer>*/}
    </Modal>
  )
}
export default UploadModal
