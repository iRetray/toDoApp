import React from 'react'
import NavBar from './NavBar'
import Task from './Task'
import data from '../data.json'
console.log(data);


export default class Tasks extends React.Component {

    constructor() {
        super()
        this.state = {
            tittle: 'Tittle',
            description: 'Description'
        }
    }    

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <h1>{this.state.name}</h1>
                        <Task tittle={this.state.tittle} description={this.state.description} done={true}/>
                        </div>                   
                    </div>                    
                </div> 
            </div>
        )
    }
}