import React,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';
import './Ordersummary.css';
import Backdrop from './Backdrop';

class Modall extends Component{
  render(){

    return(

      <div>
      <Backdrop  show={this.props.show} clicked={this.props.modalClosed}/>

      <div style={{transform :this.props.show ? 'translateY(0)':'translateY(-100vh)',
                  opacity:this.props.show ?'1':'0'}}
      >

          <Modal.Dialog>
            <Modal.Header >
              <Modal.Title>your order</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>{this.props.children}</p>
            </Modal.Body>

            {/* <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer> */}
          </Modal.Dialog>
         
      </div>
    </div>

    );
  }
}



export default Modall;