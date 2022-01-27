import { useState } from "react";
import '../App.css'

import { Modal, Container, Row } from "reactstrap";


export const ModalComponent = (props)=>{

  // const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const toggle = () => setIsOpen(!isOpen);
  
    return(
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Sistemas</Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              <Row>
                {props.sistemaLista?.map((sistema, index) => (
                  <div
                    key={sistema.id}
                    className={
                      sistema.content.visible !== "false" ? "col-md-6 pb-5" : ""
                    }
                  >
                    {/* <CardSystemHome sistema={sistema} size="sm" /> */}
                  </div>
                ))}
              </Row>
            </Container>
          </Modal.Body>
      </Modal>
    )
}