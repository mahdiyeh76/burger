import React, { Component } from 'react';
// import ErrorModal from './ModalError';
import Modal from 'react-bootstrap/Modal';



const ErrorHandler =(WrappedComponent,axios)=>{

    return class extends Component {


        state={
            error:null
        }

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
            // axios.interceptors.use(req=>{
            //     this.setState({error:null});
            //     return req;
            // })
            // axios.interceptors.use(null,error=>{
            //     this.setState({error:error});
            // });
        }


        errorconfirmedHandler =()=>{
            this.setState({error:null});
        }

        render(){
            return(
                <div>
                {/* <ErrorModal /> */}

                <div show={this.state.error} clicked={this.errorconfirmedHandler}>
                    <Modal.Dialog>
                        
                        <Modal.Body>
                          {this.state.error ? this.state.error.message : null}
                        </Modal.Body>

                    </Modal.Dialog>
                </div>
              
                <WrappedComponent {...this.props}  />

            </div>

            )
        }
    }
   
    
}


export default ErrorHandler;