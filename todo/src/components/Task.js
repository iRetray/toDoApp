import React from 'react'
import { Toast, ToastBody, ToastHeader, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSkull } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    state = {
        done: false
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
                            ? <i>Titulo de la tarea</i>
                            : <strong>Titulo de la tarea</strong>
                        }
                    </ToastHeader>
                    <ToastBody>
                        { this.state.done 
                            ? <strike>Contenido de la tarea, aquí puede ir la descripción de la tarea de la persona, incluyendo un boton pequeño para dejar la tarea "terminada"</strike>
                            : <p>Contenido de la tarea, aquí puede ir la descripción de la tarea de la persona, incluyendo un boton pequeño para dejar la tarea "terminada"</p>
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



