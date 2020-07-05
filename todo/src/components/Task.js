import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSkull, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    render() {
        return(
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader className="lead">
                        { this.props.done === "hecho" 
                            ? <strong>{this.props.tittle}{' '}<Badge color="danger"><FontAwesomeIcon icon={ faSkull } /> Tarea terminada</Badge></strong>
                            : <strong>{this.props.tittle}{' '}<Badge color="primary"><FontAwesomeIcon icon={ faCheckCircle } /> Tarea pendiente</Badge></strong>
                        }
                    </ToastHeader>
                    <ToastBody>
                        { this.props.done === "hecho" 
                            ? <p className="text-muted">{this.props.description}</p>
                            : <p className="text-muted">{this.props.description}</p>
                        }
                    <ToastBody>
                        { this.props.done === "hecho" 
                            ? <center><Button color="danger" size="sm"><FontAwesomeIcon icon={ faTrashAlt } /> Eliminar tarea</Button></center>
                            : <center><Button color="primary" size="sm" ><FontAwesomeIcon icon={ faCheckCircle } /> Marcar tarea como finalizada</Button></center>
                        }  
                    </ToastBody>                         
                    </ToastBody>                                        
                </Toast>
            </div>
        )
    }
}



