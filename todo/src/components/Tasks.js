import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import data from '../data.json'
import AddButton from './AddButton'

export default class Tasks extends React.Component {

    constructor() {
        super()
        this.state = {
            dataList: []
        }
        this.obtenerDatos()
    }
    
    obtenerDatos() {
        this.dataList = data;
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        {this.dataList.map(e =>
                            <div className="col-4 align-self-center" key={e.id}>
                                <Task tittle={e.tittle} description={e.description} done={e.done} />
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