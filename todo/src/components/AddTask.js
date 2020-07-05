import React from 'react'
import NavBar from './NavBar'
import FormNewTask from './FormNewTask'
import PreviewNewTask from './PreviewNewTask'

export default class AddTask extends React.Component {

    constructor() {
        super()
        this.state = {
            tittle: "",
            description: ""
        };
        this.actualizarTittle = this.actualizarTittle.bind(this)
        this.actualizarDescription = this.actualizarDescription.bind(this)
    }

    actualizarTittle(tittle) {
        this.setState({
            tittle: tittle
        })
    }

    actualizarDescription(description) {
        this.setState({
            description: description
        })
    }

    render() {
        return(
            <div className="container">
                <NavBar /> 
                <div className="row">
                    <div className="col-sm-6">
                        <br></br>
                        <FormNewTask actualizarTittle={this.actualizarTittle} actualizarDescription={this.actualizarDescription}/>  
                    </div>
                    <div className="col-sm-6">
                        <br></br>
                        <PreviewNewTask tittle={this.state.tittle} description={this.state.description}/> 
                    </div>       
                </div>
            </div>
        )
    }
}