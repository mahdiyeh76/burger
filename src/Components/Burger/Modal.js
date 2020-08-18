import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Ordersummary.css';

const modal =(props)=>{

    



    return(
        <div>

<Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>your order</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  <p>{props.children}</p>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
           
        </div>
    );
}


export default modal;