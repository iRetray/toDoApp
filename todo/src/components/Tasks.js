import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import data from '../data.json'
import AddButton from './AddButton'

export default class Tasks extends React.Component {

    constructor() {
        super()
        this.state = {
            dataList: [],
            postSimulados: []
        }
        this.obtenerDatos()
    }

    async componentDidMount() {
        const respuestaPeticion = await fetch('https://jsonplaceholder.typicode.com/posts')
        const datosEnJSON = await respuestaPeticion.json()
        this.setState({postSimulados: datosEnJSON})
    }
    
    obtenerDatos() {
        this.dataList = data;
    }

    añadirTarea(tittle, description) {
        const newTask = {
            tittle: tittle,
            description: description,
            id: this.state.dataList.length
        }
        this.setState({
            dataList: [...this.state.dataList, newTask]
        })
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        {this.dataList.map(e =>
                            <div className="col-lg-4 align-self-center" key={e.id}>
                                <center>
                                <Task tittle={e.tittle} description={e.description} done={e.done} />
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