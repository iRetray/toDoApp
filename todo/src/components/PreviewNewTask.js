import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, Badge, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    render() {
        return(
            <Jumbotron>
                <div className="p-3 my-2 rounded">
                    <center><p className="lead">Aspecto final de la tarea</p></center>
                        <hr></hr>
                    <Toast style={{margin: 'auto'}}>
                        <ToastHeader className="lead">
                            { this.props.done
                                ? <strong>{this.props.tittle}{' '}Cocinar la comida para la cena familiar <Badge color="danger"><FontAwesomeIcon icon={ faCheckCircle } /> Tarea pendiente</Badge></strong>
                                : <strong>{this.props.tittle}{' '} Cocinar la comida para la cena familiar <Badge color="primary"><FontAwesomeIcon icon={ faCheckCircle } /> Tarea pendiente</Badge></strong>
                            }
                        </ToastHeader>
                        <ToastBody>
                            <p className="text-muted">{this.props.description}Comprar vegetales y carne, arreglar la mesa y llamar a los invitados.</p>
                        <ToastBody>
                            <center><Button color="primary" size="sm" ><FontAwesomeIcon icon={ faCheckCircle } /> Marcar tarea como finalizada</Button></center>
                        </ToastBody>                         
                        </ToastBody>                                        
                    </Toast>
                </div>
            </Jumbotron>
        )
    }
}
