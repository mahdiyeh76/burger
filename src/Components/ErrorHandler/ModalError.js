import React ,{Component} from 'react';
import Modal from 'react-bootstrap/Modal';



class  ErrorModal extends Component{
    render(){
        return(
            <div>
                    <Modal.Dialog>
                        
                        <Modal.Body>
                            <p>something isn't work!</p>
                        </Modal.Body>

                    </Modal.Dialog>

            </div>
        );
    }
}


export default ErrorModal;