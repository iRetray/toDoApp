import React from 'react'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSkull } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    constructor() {
        super()
        this.state = {
            done: false
        }
    }

    cambiarEstado() {
        this.setState.done = true
    }

    render() {
        return(
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        { this.state.done 
                            ? <i>{this.props.tittle}</i>
                            : <strong>{this.props.tittle}</strong>
                        }
                    </ToastHeader>
                    <ToastBody>
                        { this.state.done 
                            ? <strike>{this.props.description}</strike>
                            : <p>{this.props.description}</p>
                        }
                    <ToastBody>
                        { this.state.done 
                            ? <center><Button color="secondary" size="sm" disabled><FontAwesomeIcon icon={ faSkull } /> Tarea terminada</Button></center>
                            : <center><Button color="primary" size="sm" onClick={this.cambiarEstado.bind(this)}><FontAwesomeIcon icon={ faCheckCircle } /> Marcar tarea como finalizada</Button></center>
                        }  
                    </ToastBody>                         
                    </ToastBody>                                        
                </Toast>
            </div>
        )
    }
}



