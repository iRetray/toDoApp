import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, Badge, Jumbotron } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            tittle: "",
            description: ""
        }
    }

    componentWillReceiveProps() {
        this.setState({
            tittle: this.props.tittle,
            description: this.props.description
        })
    }

    render() {
        return(
            <Jumbotron>
                <div className="p-3 my-2 rounded">
                    <center><p className="lead">Aspecto final de la tarea</p></center>
                        <hr></hr>
                    <Toast style={{margin: 'auto'}}>
                        <ToastHeader className="lead">
                            { this.props.tittle !== ""
                                ? <strong>{this.props.tittle}{' '} <Badge color="primary"><FontAwesomeIcon icon={ faCheckCircle } /> Tarea pendiente</Badge></strong>
                                : <strong> Cocinar la comida para la cena familiar <Badge color="primary"><FontAwesomeIcon icon={ faCheckCircle } /> Tarea pendiente</Badge></strong>
                            }
                        </ToastHeader>
                        <ToastBody>
                            {
                                this.props.description !== ""
                                ? <p className="text-muted">{this.props.description}</p>
                                : <p className="text-muted">Comprar vegetales y carne, arreglar la mesa y llamar a los invitados.</p>
                            }                            
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
