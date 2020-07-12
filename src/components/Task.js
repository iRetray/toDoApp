import React from 'react'
import { Toast, ToastBody, ToastHeader, Button, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faSkull, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export default class Task extends React.Component {

    constructor(props){
        super(props)
        this.finalizarTarea = this.finalizarTarea.bind(this)
        this.eliminarTarea = this.eliminarTarea.bind(this)
    }

    finalizarTarea() {
        let tareas = JSON.parse(localStorage.getItem("listaTareas"))
        console.log(this.props.id)
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].id === this.props.id) {
              tareas[i].state = "hecho"
            }
          }
        localStorage.setItem("listaTareas", JSON.stringify(tareas))
        this.props.updateState();
    }

    eliminarTarea() {
        let tareas = JSON.parse(localStorage.getItem("listaTareas"))
        console.log(this.props.id)
        for (var i = 0; i < tareas.length; i++) {
            if (tareas[i].id === this.props.id) {
              tareas.splice(i, 1)
            }
          }
        localStorage.setItem("listaTareas", JSON.stringify(tareas))
        this.props.updateState();
    }

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
                            ? <center><Button color="danger" size="sm" onClick={this.eliminarTarea}><FontAwesomeIcon icon={ faTrashAlt } /> Eliminar tarea</Button></center>
                            : <center><Button color="primary" size="sm" onClick={this.finalizarTarea}><FontAwesomeIcon icon={ faCheckCircle } /> Marcar tarea como finalizada</Button></center>
                        }  
                    </ToastBody>                         
                    </ToastBody>                                        
                </Toast>
            </div>
        )
    }
}



