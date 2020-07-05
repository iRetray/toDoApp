import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import AddButton from './AddButton'

export default class Tasks extends React.Component {

    state = {
        dataList: []
    }

    componentDidMount() {
        this.verificarCache()
        this.obtenerDatos()
    }       
    
    verificarCache() {
        if (!localStorage.getItem("listaTareas")) {
            const tareasDefault = [
                {
                    id: '0',
                    tittle: 'Leer un libro',
                    description: 'Leer no es cómodo cuando se lee para hacernos preguntas, no para responderlas. Las lecturas más provechosas son aquellas que nos estremecen, inquietan y dan la vuelta a las ideas o creencias que más arraigadas están en nuestro ser.',
                    state: 'pendiente'
                },
                {
                    id: '1',
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

    eliminarTarea(id) {

    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        {this.state.dataList.map(e =>
                            <div className="col-lg-4 align-self-center" key={e.id}>
                                <center>
                                <Task tittle={e.tittle} description={e.description} done={e.state} />
                                </center>
                            </div>
                        )}                                        
                    </div>
                    <div>
                        <AddButton />
                    </div>                    
                </div> 
            </div>
        )
    }
}