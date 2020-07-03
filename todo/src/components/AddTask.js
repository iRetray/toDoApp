import React from 'react'
import NavBar from './NavBar'
import FormNewTask from './FormNewTask'

export default class AddTask extends React.Component {
    render() {
        return(
            <div className="container">
                <NavBar /> 
                <div className="row">
                    <div className="col-sm-6">
                        <br></br>
                        <FormNewTask />  
                    </div>
                    <div className="col-sm-6">
                        <br></br>
                        <FormNewTask /> 
                    </div>       
                </div>
            </div>
        )
    }
}