import React, { Component } from 'react';
// import ErrorModal from './ModalError';
// import Modal from 'react-bootstrap/Modal';



const ErrorHandler =(WrappedComponent,axios)=>{

    return class extends Component {


        state={
            error:null
        }

        componentWillMount(){
           this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
            
        }


        componentWillUnmount(){
            // console.log('componentwillunmount',this.reqInterceptor,this.resInterceptor);
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }


        errorconfirmedHandler =()=>{
            this.setState({error:null});
        }

        render(){
            return(
                <div>
                {/* <ErrorModal /> */}

                {/* <div show={this.state.error} modalClosed={this.errorconfirmedHandler}>
                    <Modal.Dialog>
                        
                        <Modal.Body>
                          {this.state.error ? this.state.error.message : null}
                        </Modal.Body>

                    </Modal.Dialog>
                </div> */}
              
                <WrappedComponent {...this.props}  />

            </div>

            )
        }
    }
   
    
}


export default ErrorHandler;