import React from 'react'
import NavBarCollapse from './NavBarCollapse'
import Task from './Task'
import AddButton from './AddButton'
import { Jumbotron } from 'reactstrap'

export default class Tasks extends React.Component {

    constructor() {
        super()
        this.state = {
            dataList: []
        }
        this.verificarCache = this.verificarCache.bind(this)
        this.obtenerDatos = this.obtenerDatos.bind(this)
        this.añadirTarea = this.añadirTarea.bind(this)
    }    

    componentDidMount() {
        this.verificarCache()
        this.obtenerDatos()
    }       
    
    verificarCache() {
        if (!localStorage.getItem("listaTareas")) {
            const tareasDefault = [
                {
                    id: 0,
                    tittle: 'Leer un libro',
                    description: 'Leer no es cómodo cuando se lee para hacernos preguntas, no para responderlas. Las lecturas más provechosas son aquellas que nos estremecen, inquietan y dan la vuelta a las ideas o creencias que más arraigadas están en nuestro ser.',
                    state: 'pendiente'
                },
                {
                    id: 1,
                    tittle: 'Hacer ejercicio',
                    description: 'El ejercicio físico hace que el cuerpo genere sustancias químicas que pueden ayudar a una persona a sentirse bien. El ejercicio físico puede ayudar a las personas a dormir mejor.',
                    state: 'pendiente'
                }
            ]
            localStorage.setItem("listaTareas", JSON.stringify(tareasDefault))
        }
    }

    obtenerDatos() {
        const tareas = JSON.parse(localStorage.getItem("listaTareas"))
        this.setState({
            dataList: tareas
        })
    }

    añadirTarea(tittle, description) {
        const newTask = {
            id: this.state.dataList.length,
            tittle: tittle,
            description: description,
            state: 'pendiente'
            /* pendiente, hecho, eliminado*/
        }
        let newListTask = JSON.stringify(this.state.dataList.push(newTask))
        localStorage.setItem("listaTareas", newListTask)
        this.obtenerDatos()
    }

    render() {
        return(
            <div>
                <NavBarCollapse />
                <div className="container">
                    <div className="row">
                        {this.state.dataList.map(e =>
                            <div className="col-lg-4 align-self-center" key={e.id}>
                                <center>
                                <Task tittle={e.tittle} description={e.description} done={e.state} id={e.id} updateState={this.obtenerDatos}/>
                                </center>
                            </div>
                        )}
                        {
                            this.state.dataList.length === 0
                            ? <div className="col-lg-12 align-self-center">
                                <center>
                                    <Jumbotron>
                                        <h1>No hay tareas</h1>
                                        <p className="lead text-muted">Crea una tarea para empezar</p>
                                    </Jumbotron>
                                </center>
                            </div>  
                            : <div></div>
                        }                                       
                    </div>
                    <div>
                        <AddButton />
                    </div>                    
                </div> 
            </div>
        )
    }
}