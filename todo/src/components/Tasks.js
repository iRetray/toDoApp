import React from 'react'
import NavBar from './NavBar'
import Task from './Task'

export default class Tasks extends React.Component {

    state = {
        done: false
    }

    render() {
        return(
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <Task isFinished={false}/>
                        </div>
                        <div className="col-4">
                        <Task isFinished={false}/>
                        </div> 
                        <div className="col-4">
                        <Task isFinished={false}/>
                        </div> 
                        <div className="col-4">
                        <Task isFinished={false}/>  
                        </div>                   
                    </div>                    
                </div> 
            </div>
        )
    }
}