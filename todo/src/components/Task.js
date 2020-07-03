import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, ButtonGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSkull, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {


    render() {
        return(
            <div className="p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        { this.props.done 
                            ? <i>{this.props.tittle}</i>
                            : <strong>{this.props.tittle}</strong>
                        }
                    </ToastHeader>
                    <ToastBody>
                        { this.props.done 
                            ? <strike>{this.props.description}</strike>
                            : <p>{this.props.description}</p>
                        }
                    <ToastBody>
                        { this.props.done 
                            ? <center>
                                <ButtonGroup>
                                <Button color="secondary" size="sm" disabled><FontAwesomeIcon icon={ faSkull } /> Tarea terminada</Button>
                                <Button color="danger" size="sm"><FontAwesomeIcon icon={ faTrashAlt } /></Button>
                                </ButtonGroup>
                                </center>
                            : <center><Button color="primary" size="sm" ><FontAwesomeIcon icon={ faCheckCircle } /> Marcar tarea como finalizada</Button></center>
                        }  
                    </ToastBody>                         
                    </ToastBody>                                        
                </Toast>
            </div>
        )
    }
}



