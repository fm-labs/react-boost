import React from "react";
import { Button, ButtonProps, Modal } from "react-bootstrap";
import JsonDownloadButton from "./JsonDownloadButton.tsx";

interface JsonExportModalButtonProps extends ButtonProps {
  json: any;
  fileName?: string;
}

const JsonExportModalButton = ({
  json,
  fileName,
  ...buttonProps
}: JsonExportModalButtonProps) => {
  const [showModal, setShowModal] = React.useState(false);
  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  return (
    <>
      <Button {...buttonProps} onClick={handleShowModal}>
        Export JSON
      </Button>
      <Modal
        show={showModal}
        //size={"sm"}
        backdrop={"static"}
        onHide={handleCloseModal}
        //className={}
      >
        <Modal.Header closeButton>
          <Modal.Title as={"h5"}>JSON Export</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            readOnly={true}
            style={{ width: "100%" }}
            rows={20}
            value={JSON.stringify(json, null, 2)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <JsonDownloadButton json={json} fileName={fileName} />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default JsonExportModalButton;
